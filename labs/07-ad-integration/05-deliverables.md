# Lab 7.5 — Deliverables (ABC Tech)

**Time:** 1.5h  
**Goal:** Project artifacts. Store screenshots locally (not in git if they show emails). Copy the tables into `notes.local.md` or a private doc.

## Architecture

Use the mermaid diagram in [README](README.md). Export or redraw: AD OUs → AD Agent → Okta UD → group rules → apps. Label **AD as source** on the user object.

## Group and rule logic

One paragraph per Okta group: **if** (AD group or OU / employeeType) **then** Okta group **then** apps/roles.

## Test cases

| ID | Scenario | Steps | Expected | Result (pass/fail) |
|----|----------|-------|----------|-------------------|
| T1 | Import Employees + Contractors | Lab 7.1 import | Six users; no service account | |
| T2 | Profile sync | Change `department` in AD, sync | Okta profile matches | |
| T3 | Joiner | New Employees user | Okta user + correct OKTA_* group | |
| T4 | Contractor limit | Sam signs in to Lab OIDC | Denied or no tile | |
| T5 | Mover | Pat HR → Finance in AD | Groups and apps follow | |
| T6 | Leaver | Disable lea.leaver in AD | Okta deactivated | |
| T7 | Help Desk | Riley Admin Console | No Create App | |
| T8 | Contractor admin | Sam Admin Console | No admin role | |
| T9 | Manual create | Attempt Add person for an ABC user | You do **not** use this for ABC identities | |

## Screenshots to keep

- ADUC: OUs and group membership
- AD Agent connected
- Import OU filter (ServiceAccounts excluded)
- Profile mappings To Okta
- Group rules
- JML System Log events
- Administrators page showing group-assigned roles

## Success criteria (project)

- [ ] AD is the single source of truth for ABC users
- [ ] Joiners provision and leavers deprovision without hand-creating in Okta
- [ ] Group rules match AD
- [ ] Admin access is least privilege and group-based

## Next

Back to the SSO track if you paused at 2.2: [Lab 2.3 — App sign-in policy](../02-sso/03-app-signin-policy.md). Or continue [Week 3](../03-authn/README.md) if Week 2 is done.
