# Lab 5.2 — Custom authorization server

**Time:** 2h  
**Goal:** API Access Management: Okta issues access tokens for **your** API, not only for Okta’s own APIs.

## Create the server

1. **Security → API → Authorization Servers → Add Authorization Server**.
2. Name: `inventory`. Audience: `api://inventory`.
3. Issuer URL will look like `https://YOUR-ORG.okta.com/oauth2/ausXXXXXXXX`. Put it in `.env` as `OKTA_ISSUER`.

## Scope and claim

1. **Scopes → Add**: `inventory.read` (metadata: include in public metadata).
2. **Claims → Add** (access token): `department`, value `user.department`, include in token always (or when in scope).
3. Optional groups claim if you want it later.

## Access policy

1. **Access Policies → Add Policy** for the OIDC **SPA/web client** from Lab 2.1 (or a new confidential client for client-credentials).
2. Rule: Engineering gets scope `inventory.read`. Grant type: authorization code (and/or client credentials if you created a service client for the API).
3. Other users: no `inventory.read`.

## Token preview

Authorization server **Token Preview** (or a real `/authorize` + `/token` from the SPA):

- Engineering user: access token `aud` = `api://inventory`, `scp` contains `inventory.read`, `department` claim present.
- Non-Engineering: scope missing or request denied.

Decode the access token. `iss` must be the **custom** server, not `oauth2/default`, if that is what you configured.

## Pass when

Two users get different scopes/claims from the same authorization server based on group.

## Next

[Lab 5.3 — Protect an API](03-protect-api.md)
