# Security

This repo is lab instructions plus sample code. It is not a production Okta config.

Never commit:

- API tokens, OAuth client secrets, or Terraform credentials
- Recovery codes, passwords, or Okta Verify QR material
- Real employee data in CSV imports (use fake names + plus-aliases you control)
- `notes.local.md` or `.env`

Integrator Free Plan orgs are still real tenants. Treat the Super Admin account like production: phishing-resistant MFA on Admin Console (Week 3), and rotate any token you paste into Postman when the lab is over.
