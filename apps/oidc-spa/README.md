# Lab 2.1 — local OIDC app (authorization code + PKCE)

1. Create the Okta SPA as in [labs/02-sso/01-oidc-pkce.md](../../labs/02-sso/01-oidc-pkce.md).
2. Copy repo-root `.env.example` to `.env` at the **repo root** (or this folder). `server.js` loads both.

```powershell
cd apps/oidc-spa
copy ..\..\.env.example .env
# set OKTA_ISSUER, OKTA_CLIENT_ID, OKTA_REDIRECT_URI=http://localhost:8080/login/callback
npm install
npm start
```

Open http://localhost:8080 and sign in as Test User.
