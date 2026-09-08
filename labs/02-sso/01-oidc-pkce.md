# Lab 2.1 — OIDC web/SPA app with PKCE

**Time:** 2.5h  
**Goal:** SSO for a modern app using OpenID Connect, not SAML.

## Create the Okta app

1. **Applications → Create App Integration → OIDC**.
2. Choose **Single-Page Application** (or **Web** if you pick a server sample).
3. Grant type: **Authorization Code** with **PKCE** (SPA: PKCE required; do not enable implicit).
4. Sign-in redirect: `http://localhost:8080/login/callback` (match the sample; change the port if the sample uses 3000).
5. Sign-out redirect: `http://localhost:8080`.
6. Assign **Engineering** (group), not individuals.
7. Copy **Client ID**. There is no client secret on a public SPA.

## Run a sample

Use an official sample, not a random blog clone:

- [okta-samples](https://github.com/okta-samples) — pick a SPA or Express hosted-login sample
- Or the Okta-hosted Sign-In Widget sample from [developer docs](https://developer.okta.com/docs/)

Set issuer to `https://YOUR-ORG.okta.com/oauth2/default` (or the org authorization server the sample documents) and the client ID from above.

## Decode the ID token

After a successful login, copy the ID token to a JWT decoder you trust (or `jwt.ms` / local decode). Record:

- `iss` — must be your org / authorization server
- `aud` — client ID
- `sub` — user id
- `groups` or custom claims — may be missing until you add a groups claim (do that if the sample expects groups)

## Break it

Change the redirect URI in Okta to a wrong path. Login must fail. Fix it. That error is the one you will see at work.

## Pass when

A real app redirects to Okta, comes back authenticated, and you can explain each token claim.

## Next

[Lab 2.2 — SAML](02-saml.md)
