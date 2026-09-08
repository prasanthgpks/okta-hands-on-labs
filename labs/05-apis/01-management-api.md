# Lab 5.1 — Management API: users and groups

**Time:** 2h  
**Goal:** Stop clicking for bulk work. Prefer OAuth for Okta APIs over a forever token.

Base URL: `https://YOUR-ORG.okta.com`. Docs: [Okta REST API](https://developer.okta.com/docs/api/).

## SSWS token (then retire it)

1. **Security → API → Tokens → Create token**. Name it `lab-ssws` so you remember to revoke it.
2. List users (PowerShell):

```powershell
$okta = "https://YOUR-ORG.okta.com"
$token = $env:OKTA_API_TOKEN
Invoke-RestMethod -Headers @{ Authorization = "SSWS $token"; Accept = "application/json" } -Uri "$okta/api/v1/users?limit=10"
```

3. Create a throwaway user with `POST /api/v1/users?activate=true`, add to Engineering with `PUT /api/v1/groups/{groupId}/users/{userId}`, then `POST /api/v1/users/{id}/lifecycle/deactivate`.
4. **Revoke** the SSWS token when Lab 5.1 OAuth works. Do not commit it.

## OAuth 2.0 for Okta APIs

1. **Applications → Create App Integration → API Services** (or OIDC Web with client credentials, depending on wizard).
2. This is a **service app** for Okta management, not your inventory API.
3. Grant Okta API scopes needed for users: at least `okta.users.manage` (least privilege: `okta.users.read` first, then manage).
4. Admin consent / assign the service app the right admin role if the wizard asks.
5. Client credentials token against `https://YOUR-ORG.okta.com/oauth2/v1/token` with scope `okta.users.manage`.
6. Repeat **deactivate** (or list) using `Authorization: Bearer` instead of `SSWS`.

## Rate limits

Read `X-Rate-Limit-Limit` / `Remaining` headers. Do not loop create/delete in a tight script on a free org.

## Pass when

You can create and deactivate a user with OAuth for Okta (not only a legacy API token).

## Next

[Lab 5.2 — Custom authorization server](02-authorization-server.md)
