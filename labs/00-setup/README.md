# Setup — Stand up a free Okta org

**Time:** 1.5h  
**Goal:** Two identities: you as Super Admin, plus a plain test user. Know which URL is which.

## Limits (Integrator Free Plan)

Read [org defaults](https://developer.okta.com/docs/reference/org-defaults/) once. The ones that change these labs:

- 10 active users
- 5 Workflows
- Email templates not editable
- Org2Org app not available
- Org deactivates after 90 consecutive days with no sign-in

## Sign up

1. Open [developer.okta.com/signup](https://developer.okta.com/signup/).
2. Workforce Identity → **Integrator Free Plan**.
3. Use a **unique business email**. Personal Gmail/Hotmail often fail; you cannot reuse the same email on a second Integrator org.
4. Activate from the email. Set password and enroll **Okta Verify** on the Super Admin account.

## Two URLs

| Role | Pattern |
|------|---------|
| Admin Console | `https://YOUR-ORG-admin.okta.com/` |
| End-user dashboard | `https://YOUR-ORG.okta.com/` |

Copy `notes.local.md.example` to `notes.local.md` and paste your URLs. Do not commit `notes.local.md`.

## Create the test user

1. Sign in at the **Admin Console** URL. You should see Directory, Applications, Security, Reports — not only app tiles.
2. **Directory → People → Add person**.
3. First name `Test`, last name `User`.
4. Username / email: a plus-alias you control (`you+oktatest@company.com`) so you can receive Okta mail.
5. Set password as admin (lab convenience). Do **not** assign Super Admin or any admin role.
6. Save.

## Prove it

- Session A: Admin Console as yourself.
- Session B (incognito or another browser): end-user URL as Test User. App tiles only. No Directory nav.

## Pass when

You can sign in as Super Admin and as the test user, and you know which console is which.

## Next

[Week 1 — Directory](../01-directory/README.md)
