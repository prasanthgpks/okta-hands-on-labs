# Lab 7.3 — Joiner, mover, leaver

**Time:** 2h  
**Goal:** AD changes, Okta follows. You do not click Activate/Deactivate for ABC people except to observe.

Run an **import** (or wait for incremental sync) after each AD change. Record System Log: `user.lifecycle.*`, `user.account.update_profile`, AD agent events.

## Joiner

1. In AD, create `OU=Employees` user `alex.hr` in `HR_Users` (`department=HR`, `employeeType=Employee`).
2. Import. User appears in Okta, in `OKTA_HR_USERS`, active (or staged then activated per your import settings).
3. **Deactivate `alex.hr` in Okta after the test** (or disable in AD) so you stay ≤ 10 active users.

Contractors: create is optional if you already have `sam.ext`. Confirm Sam cannot use Lab OIDC if you restricted it in 7.2.

## Mover

1. In AD, remove `pat.hr` from `HR_Users`, add to `Finance_Users`, set `department=Finance`.
2. Import / sync.
3. Okta: Pat leaves `OKTA_HR_USERS`, joins `OKTA_FINANCE_USERS`. Apps follow group assignment.

Move Pat back after you screenshot, unless you want Finance as the new baseline.

## Leaver

1. In AD, **Disable** `lea.leaver` (do not delete first — disable is the usual leaver).
2. Sync. Okta status is **deprovisioned / deactivated**. App assignments drop or show deactivated.
3. Optional: delete the AD user after disable and confirm Okta stays deactivated (or is deleted per your mapping). Prefer disable-only for the lab so you can re-enable later.

## Pass when

You have three System Log (or import-result) proofs: joiner created from AD, mover changed groups without an Okta click, leaver deactivated from AD disable.

## Next

[Lab 7.4 — Admin RBAC](04-admin-rbac.md)
