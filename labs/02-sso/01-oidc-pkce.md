# Lab 2.1 — OIDC web/SPA app with PKCE

**Time:** 2.5h  
**Goal:** SSO for a modern app using OpenID Connect, not SAML.

Sample in this repo: [apps/oidc-spa](../../apps/oidc-spa).

## Create the Okta app

1. **Applications → Create App Integration → OIDC → Single-Page Application**.
2. Grant type: **Authorization Code** + **PKCE**. Do not enable implicit.
3. Sign-in redirect URIs: `http://localhost:8080/login/callback`
4. Sign-out redirect URIs: `http://localhost:8080`
5. Controlled access: **Skip group assignment** in the wizard if it offers Everyone, then **Assignments → Engineering only**. Unassign **Everyone** (same trap as Lab 1.3).
6. Copy **Client ID**. A SPA has no client secret.

## Run the lab app

From the repo root, copy `.env.example` to `.env` if you do not have one yet:

```
OKTA_ISSUER=https://YOUR-ORG.okta.com/oauth2/default
OKTA_CLIENT_ID=0oa...
OKTA_REDIRECT_URI=http://localhost:8080/login/callback
```

```powershell
cd apps/oidc-spa
npm install
npm start
```

Open http://localhost:8080 → **Sign in with Okta** as **Test User**. Jamie (not in Engineering) should be **denied**. Okta often renders that as a **400 Bad Request** on the Okta page, or `access_denied` on `/login/callback`. That is the assignment working, not a broken redirect.

Restart `npm start` after pulling so the callback page labels `access_denied` as expected.

## Decode the ID token

The callback page shows verified claims. Record:

- `iss` — `https://YOUR-ORG.okta.com/oauth2/default`
- `aud` — the SPA client ID
- `sub` — Test User’s Okta user id
- `email` / `name` — from the `profile` / `email` scopes

## Break it

In Okta, change the sign-in redirect to `http://localhost:8080/wrong`. Sign in again. You should get a redirect URI mismatch. Put the correct URI back.

## Pass when

A real app redirects to Okta, comes back authenticated, and you can explain `iss`, `aud`, and `sub`.

## Next

[Lab 2.2 — SAML](02-saml.md)
