# Lab 5.3 inventory API

Validates Okta JWTs (issuer, audience, `inventory.read` scope).

```powershell
copy ..\..\.env.example .env
# set OKTA_ISSUER, OKTA_AUDIENCE, optionally OKTA_ORG_URL
npm install
npm start
```

Listens on `http://localhost:3001`. `GET /inventory` requires `Authorization: Bearer <access_token>`.
