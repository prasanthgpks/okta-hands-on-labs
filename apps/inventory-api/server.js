import "dotenv/config";
import { createServer } from "node:http";
import { createRemoteJWKSet, jwtVerify } from "jose";

const issuer = process.env.OKTA_ISSUER;
const audience = process.env.OKTA_AUDIENCE || "api://inventory";
const port = Number(process.env.PORT || 3001);

if (!issuer) {
  console.error("Set OKTA_ISSUER in .env (custom authorization server issuer URL).");
  process.exit(1);
}

const JWKS = createRemoteJWKSet(new URL(`${issuer.replace(/\/$/, "")}/v1/keys`));

function scopesOf(payload) {
  const scp = payload.scp;
  if (Array.isArray(scp)) return scp;
  if (typeof payload.scope === "string") return payload.scope.split(" ");
  return [];
}

function json(res, status, body) {
  const data = JSON.stringify(body);
  res.writeHead(status, {
    "content-type": "application/json",
    "content-length": Buffer.byteLength(data),
  });
  res.end(data);
}

const server = createServer(async (req, res) => {
  if (req.method === "GET" && req.url === "/health") {
    json(res, 200, { ok: true });
    return;
  }

  if (req.method !== "GET" || req.url !== "/inventory") {
    json(res, 404, { error: "not_found" });
    return;
  }

  const header = req.headers.authorization || "";
  const token = header.startsWith("Bearer ") ? header.slice(7) : "";
  if (!token) {
    json(res, 401, { error: "missing_token" });
    return;
  }

  try {
    const { payload } = await jwtVerify(token, JWKS, { issuer, audience });
    if (!scopesOf(payload).includes("inventory.read")) {
      json(res, 403, { error: "insufficient_scope" });
      return;
    }
    json(res, 200, {
      items: [{ id: "sku-1", name: "Lab widget" }],
      sub: payload.sub,
      department: payload.department ?? null,
    });
  } catch {
    json(res, 401, { error: "invalid_token" });
  }
});

server.listen(port, () => {
  console.log(`inventory-api listening on http://localhost:${port}`);
});
