# Okta Hands-On Labs

Six-week path for **Okta Workforce Identity Cloud** on a free [Integrator Free Plan](https://developer.okta.com/signup/) org. About 32 hours. Identity Engine. Not Customer Identity Cloud / Auth0.

You click in Admin Console, then prove it as a **non-admin test user**. If something fails, read **System Log** before changing a second setting.

## Path

| Week | Folder | Focus |
|------|--------|--------|
| Setup | [labs/00-setup](labs/00-setup/README.md) | Org, Super Admin, test user |
| 1 | [labs/01-directory](labs/01-directory/README.md) | Users, groups, rules, first app |
| 2 | [labs/02-sso](labs/02-sso/README.md) | OIDC + PKCE, SAML, app policies |
| 3 | [labs/03-authn](labs/03-authn/README.md) | MFA, authentication policies, zones |
| 4 | [labs/04-lifecycle](labs/04-lifecycle/README.md) | SCIM, joiner/mover/leaver, import |
| 5 | [labs/05-apis](labs/05-apis/README.md) | Management API, authz server, JWT API |
| 6 | [labs/06-automate](labs/06-automate/README.md) | Event hooks, Workflows, Terraform |

Catalog with pass criteria: [labs/README.md](labs/README.md).

## How to use this repo

1. Copy `notes.local.md.example` → `notes.local.md` and fill in **your** org URLs. That file is gitignored.
2. Copy `.env.example` → `.env` only when you reach Weeks 5–6.
3. One lab per sitting. Sign in as the test user after every access change.
4. Stay under **10 active users** and **5 Workflows**. Deactivate extras instead of accumulating them.

Admin Console is `https://YOUR-ORG-admin.okta.com/`. End-user dashboard is `https://YOUR-ORG.okta.com/`.

## Out of scope

Customer Identity Cloud (Auth0), Access Gateway, Privileged Access, and production AD/Entra inbound federation. Finish this path first.

## Docs

- [Integrator signup](https://developer.okta.com/signup/)
- [Integrator org limits](https://developer.okta.com/docs/reference/org-defaults/)
- [Okta product docs](https://help.okta.com/)
- [Okta developer docs](https://developer.okta.com/docs/)
- [okta-samples](https://github.com/okta-samples)
