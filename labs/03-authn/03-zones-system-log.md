# Lab 3.3 — Zones, threat, and System Log

**Time:** 1h  
**Goal:** Context (IP) is an input to policy. System Log is how you prove it.

## Zones

1. **Security → Networks**.
2. Add IP zone `Home` with your public IP (`/32`).
3. Add IP zone `Dummy Block` with a documentation CIDR you will never come from, e.g. `192.0.2.0/24` (TEST-NET-1). Do **not** put your real IP in the block zone.

## Attach to a policy

1. On the **OIDC app** policy, add a rule: if **not** in `Home`, deny (or require extra factor). Keep Super Admin / Admin Console out of this experiment.
2. From home IP, Test User still signs in to the OIDC app.
3. Optionally use a phone hotspot to leave `Home` and confirm deny. If you cannot change IP, rely on System Log preview / policy simulation if present, and still complete the log reading below.

## Read one event properly

1. **Reports → System Log**.
2. Filter: `eventType eq "user.authentication.auth_via_mfa"` or `policy.evaluate_sign_on` (paste what your org actually emits).
3. Open one event. Write in `notes.local.md` (gitignored):

   - actor
   - target
   - outcome.result
   - debugContext / policy rule name if present

You should be able to say which policy rule allowed or denied it.

## Pass when

You can take a System Log event and say which policy rule allowed or denied it.

## Next

[Week 4 — Lifecycle](../04-lifecycle/README.md)
