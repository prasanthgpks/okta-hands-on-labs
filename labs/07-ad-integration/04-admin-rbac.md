# Lab 7.4 — Admin access via groups only

**Time:** 1.5h  
**Goal:** Least privilege. Roles on **groups**, not on people. Contractors get zero admin.

## Map roles

**Security → Administrators** (or Directory → groups → admin roles):

| Okta group | Role |
|------------|------|
| (signup user only) | Super Admin — do not grant this from AD |
| `OKTA_APP_ADMINS` | Application Administrator |
| `OKTA_GROUP_ADMINS` | Group Administrator (or Help Desk if Group Admin is unavailable) |
| `OKTA_HELPDESK_ADMINS` | Help Desk Administrator |

Those Okta groups must be populated from AD groups with the same names (Lab 7.0 / 7.2).

## Prove it

1. Sign in to **Admin Console** as `riley.it` (Help Desk). Can reset passwords / view users; **cannot** create a new OIDC app.
2. Sign in as `casey.it` (App Admin). Can manage apps; cannot change org-wide security like Super Admin.
3. Sign in as `sam.ext` (contractor). End-user dashboard only. No admin roles. If Sam can open `-admin` with an admin role, you failed the project.

Do not assign Help Desk to Sam to “test both.” Create a separate AD user if you need another admin, then deactivate to stay under 10.

## Pass when

No contractor has an admin role, and every lab admin role is granted through a group that AD membership controls.

## Next

[Lab 7.5 — Deliverables](05-deliverables.md)
