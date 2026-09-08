# Lab 1.2 — Admin roles and org hygiene

**Time:** 1h  
**Goal:** Least-privilege admin. Not everyone is Super Admin.

## Read-only or Help Desk admin

1. Pick a spare user (one CSV import, **not** Test User). If you have no spare, create `Jamie Help` and keep total active users ≤ 10.
2. **Directory → People → that user → Admin roles** (or **Security → Administrators**, depending on the console).
3. Assign **Read-only Administrator** or **Help Desk Administrator**. Save.
4. Sign in as that user at the **Admin Console** URL.
5. Try **Applications → Create App Integration**. It must fail or the button must be missing.
6. Compare what Help Desk can reset vs what Read-only can only view.

Do **not** give Test User any admin role. Test User stays an end user for every later lab.

## Org settings (skip custom domain)

1. **Settings → Account** (or **Customization**): set org name, locale, timezone if they are still defaults.
2. Integrator orgs **cannot** edit email templates. Skip HTML branding of emails.
3. **Security → Authenticators**: note which factors exist (Okta Verify, Email, Password). You will use this in Week 3. Do not require extra factors for everyone yet.

## Bookmarks

Keep both URLs in `notes.local.md`. You will switch constantly: Admin Console vs end-user dashboard.

## Pass when

A non-Super-Admin user cannot create apps, and you can explain why that matters.

## Next

[Lab 1.3 — Bookmark app](03-bookmark-app.md)
