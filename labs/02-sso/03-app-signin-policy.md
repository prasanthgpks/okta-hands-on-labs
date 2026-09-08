# Lab 2.3 — App sign-in policy and sessions

**Time:** 1h  
**Goal:** Policies enforce access. The app assignment is not enough.

Identity Engine: **Applications → your OIDC app → Sign On** (or **Authentication policies**) shows which policy the app uses. Org-wide policies live under **Security → Authentication Policies**.

## Restrict by group

1. Open the authentication / app sign-in policy attached to the **OIDC app** from Lab 2.1.
2. Add or edit a rule: **Engineering** can access. **Contractors** cannot (or require a factor they do not have — deny is clearer for this lab).
3. Keep assignment: both groups may still be assigned to the app. Policy must be what blocks Contractors.
4. Test: Test User (Engineering) still signs in. Contractor is denied. Read the deny in **Reports → System Log**.

## Session

1. On the same policy (or **Security → Global Session Policy**), set a short session (for example 15 minutes) for a lab rule you can remember to revert.
2. Sign in as Test User, wait (or change the clock only if you know what you are doing — waiting is safer), confirm re-auth.

Revert the short session when the lab is done so later labs are not painful.

## Optional: network zone

1. **Security → Networks → Add zone → IP Zone**.
2. Add your current public IP.
3. Attach “in zone” to a rule on the OIDC app. Prove from that IP it works.

Do not lock yourself out of **Admin Console** with a bad zone. If you experiment with Admin Console, keep a catch-all allow rule for Super Admins.

## Pass when

The same user is allowed or denied based on group and policy, not because you deleted the app assignment.

## Next

[Week 3 — Authentication](../03-authn/README.md)
