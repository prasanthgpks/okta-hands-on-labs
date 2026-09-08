# Lab 5.3 — Protect a sample API with JWT

**Time:** 2h  
**Goal:** App gets a token; API validates issuer, audience, and scope.

## API in this repo

Folder: [apps/inventory-api](../../apps/inventory-api).

```powershell
cd apps/inventory-api
copy ..\..\.env.example .env   # or copy from repo root; edit issuers
npm install
npm start
```

`GET /inventory` requires `Authorization: Bearer` with:

- `iss` matching `OKTA_ISSUER`
- `aud` matching `OKTA_AUDIENCE` (`api://inventory`)
- scope `inventory.read`

## Prove allow and deny

1. Get an access token for Test User (Engineering) from the custom authorization server (SPA auth-code + PKCE, or Token Preview if it issues a real token you can copy).
2. `Invoke-RestMethod` / curl `http://localhost:3001/inventory` with that Bearer token — **200**.
3. Token from `https://YOUR-ORG.okta.com/oauth2/default` (org AS) with a different audience — **401**.
4. Tamper with a payload byte — **401**.

Do not disable signature checks to “make it work.”

## Pass when

A valid token with the scope succeeds; a token from the wrong issuer/audience fails.

## Next

[Week 6 — Automate](../06-automate/README.md)
