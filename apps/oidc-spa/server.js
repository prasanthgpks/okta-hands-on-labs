import { createHash, randomBytes } from "node:crypto";
import { createServer } from "node:http";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import dotenv from "dotenv";
import { createRemoteJWKSet, decodeJwt, jwtVerify } from "jose";

const here = dirname(fileURLToPath(import.meta.url));
dotenv.config({ path: resolve(here, "../../.env") });
dotenv.config({ path: resolve(here, ".env"), override: true });

const issuer = (process.env.OKTA_ISSUER || "").replace(/\/$/, "");
const clientId = process.env.OKTA_CLIENT_ID;
const redirectUri =
  process.env.OKTA_REDIRECT_URI || "http://localhost:8080/login/callback";
const port = Number(process.env.PORT || 8080);

if (!issuer || !clientId) {
  console.error("Set OKTA_ISSUER and OKTA_CLIENT_ID in .env");
  process.exit(1);
}

const JWKS = createRemoteJWKSet(new URL(`${issuer}/v1/keys`));
/** @type {Map<string, { verifier: string, nonce: string }>} */
const pending = new Map();

function b64url(buf) {
  return Buffer.from(buf)
    .toString("base64")
    .replace(/\+/g, "-")
    .replace(/\//g, "_")
    .replace(/=+$/, "");
}

function html(res, status, body) {
  res.writeHead(status, { "content-type": "text/html; charset=utf-8" });
  res.end(body);
}

function page(title, inner) {
  return `<!doctype html>
<html lang="en"><head><meta charset="utf-8"><title>${title}</title>
<style>
  body { font-family: sans-serif; max-width: 52rem; margin: 2rem auto; line-height: 1.4; }
  pre { background: #111; color: #eee; padding: 1rem; overflow: auto; }
  a { color: #06c; }
</style></head><body>${inner}</body></html>`;
}

function claimsTable(payload) {
  const rows = ["iss", "aud", "sub", "email", "name", "preferred_username", "nonce"]
    .filter((k) => payload[k] != null)
    .map((k) => `<tr><th>${k}</th><td>${String(payload[k])}</td></tr>`)
    .join("");
  return `<table>${rows}</table>`;
}

const server = createServer(async (req, res) => {
  const url = new URL(req.url || "/", `http://127.0.0.1:${port}`);

  if (req.method === "GET" && url.pathname === "/") {
    html(
      res,
      200,
      page(
        "Lab OIDC",
        `<h1>Lab 2.1 OIDC</h1>
         <p>Sign in as <strong>Test User</strong> (Engineering). Jamie should be denied if the app is assigned only to Engineering.</p>
         <p><a href="/login">Sign in with Okta</a></p>`,
      ),
    );
    return;
  }

  if (req.method === "GET" && url.pathname === "/login") {
    const state = b64url(randomBytes(16));
    const nonce = b64url(randomBytes(16));
    const verifier = b64url(randomBytes(32));
    const challenge = b64url(createHash("sha256").update(verifier).digest());
    pending.set(state, { verifier, nonce });

    const authorize = new URL(`${issuer}/v1/authorize`);
    authorize.searchParams.set("client_id", clientId);
    authorize.searchParams.set("response_type", "code");
    authorize.searchParams.set("scope", "openid profile email");
    authorize.searchParams.set("redirect_uri", redirectUri);
    authorize.searchParams.set("state", state);
    authorize.searchParams.set("nonce", nonce);
    authorize.searchParams.set("code_challenge", challenge);
    authorize.searchParams.set("code_challenge_method", "S256");
    res.writeHead(302, { location: authorize.toString() });
    res.end();
    return;
  }

  if (req.method === "GET" && url.pathname === "/login/callback") {
    const err = url.searchParams.get("error");
    if (err) {
      const description = url.searchParams.get("error_description") || "";
      const denied = err === "access_denied";
      html(
        res,
        denied ? 403 : 400,
        page(
          denied ? "Access denied" : "OIDC error",
          denied
            ? `<h1>Access denied</h1>
               <p>Expected for a user who is <strong>not</strong> in Engineering (for example Jamie), if Lab OIDC is assigned only to that group.</p>
               <pre>${err}\n${description}</pre>
               <p>Sign in as Test User to see ID token claims. <a href="/">Home</a></p>`
            : `<h1>Okta returned an error</h1>
               <pre>${err}\n${description}</pre>
               <p><a href="/">Home</a></p>`,
        ),
      );
      return;
    }

    const code = url.searchParams.get("code");
    const state = url.searchParams.get("state");
    const saved = state ? pending.get(state) : undefined;
    if (!code || !saved) {
      html(res, 400, page("OIDC error", "<p>Missing code or state. Start at /login.</p>"));
      return;
    }
    pending.delete(state);

    const body = new URLSearchParams({
      grant_type: "authorization_code",
      client_id: clientId,
      code,
      redirect_uri: redirectUri,
      code_verifier: saved.verifier,
    });

    const tokenRes = await fetch(`${issuer}/v1/token`, {
      method: "POST",
      headers: { "content-type": "application/x-www-form-urlencoded" },
      body,
    });
    const tokenJson = await tokenRes.json();
    if (!tokenRes.ok) {
      html(
        res,
        400,
        page("Token error", `<pre>${JSON.stringify(tokenJson, null, 2)}</pre>`),
      );
      return;
    }

    const idToken = tokenJson.id_token;
    try {
      const { payload } = await jwtVerify(idToken, JWKS, {
        issuer,
        audience: clientId,
      });
      if (payload.nonce !== saved.nonce) {
        throw new Error("nonce mismatch");
      }
      html(
        res,
        200,
        page(
          "Signed in",
          `<h1>Signed in</h1>
           <p>ID token signature verified. Claims you should be able to explain:</p>
           ${claimsTable(payload)}
           <h2>Raw payload</h2>
           <pre>${JSON.stringify(payload, null, 2)}</pre>
           <p><a href="/">Home</a></p>`,
        ),
      );
    } catch (e) {
      const payload = decodeJwt(idToken);
      html(
        res,
        400,
        page(
          "Verify failed",
          `<p>${e instanceof Error ? e.message : "verify failed"}</p>
           <pre>${JSON.stringify(payload, null, 2)}</pre>`,
        ),
      );
    }
    return;
  }

  html(res, 404, page("Not found", "<p>Not found</p>"));
});

server.listen(port, () => {
  console.log(`oidc-spa http://localhost:${port}`);
});
