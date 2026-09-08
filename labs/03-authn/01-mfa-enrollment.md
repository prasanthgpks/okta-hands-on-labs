# Lab 3.1 — MFA enrollment (Okta Verify + email)

**Time:** 1.5h  
**Goal:** Enrollment policy is separate from authentication policy.

Skip SMS unless you have a real need (cost and SIM swap). Integrator orgs still have Email and Okta Verify.

## Authenticators

1. **Security → Authenticators**.
2. Enable **Okta Verify** and **Email** if they are not already on.
3. Leave Password enabled.

## Enrollment policy

1. **Security → Authenticators → Enrollment** (or **Security → Enrollment** depending on the console).
2. Policy for **Super Admins** (or a group that contains only you): Okta Verify **Required**. Email optional or required as backup.
3. Policy for everyone else: Okta Verify **Optional**. Email **Required** or optional — Test User must **not** be forced onto Okta Verify yet.
4. Priority: admin policy above the catch-all.

## Enroll

1. Sign in as Super Admin. Enroll Okta Verify if not already.
2. Sign in as Test User. Complete email enrollment if prompted. Do not enroll Okta Verify on Test User for this lab.
3. As Super Admin: **Directory → People → you → More → Reset authenticators** (or reset a single factor). Re-enroll so you know the recovery path. Do this on a spare factor, not as the only way into Super Admin.

## Pass when

Admin is prompted for Okta Verify; the test user is not; you can point to the enrollment policy that caused that.

## Next

[Lab 3.2 — Authentication policies](02-authentication-policies.md)
