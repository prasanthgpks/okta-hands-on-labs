# Lab 3.2 — Authentication policies and passwordless

**Time:** 2.5h  
**Goal:** Identity Engine: global session vs app policy vs assurance.

## Three different bars

You want:

| Surface | Assurance |
|---------|-----------|
| Admin Console | Okta Verify (or phishing-resistant if offered) |
| OIDC app (Lab 2.1) | Password + another factor |
| Bookmark app (Lab 1.3) | Password only |

1. **Security → Authentication Policies**. Find or clone a policy for **Okta Admin Console**. Require Okta Verify (or phishing-resistant).
2. Policy used by the OIDC app: require 2 factors for Engineering.
3. Policy used by `Lab Intranet` bookmark: 1 factor (password). Catch-all deny or extra step for Contractors is optional if Lab 2.3 already covers deny.

Assign each **application** to the correct policy (app **Sign On** tab). Do not put Admin Console and the bookmark on the same policy.

## Passwordless / FastPass

If the org and your device offer **FastPass** / passwordless with Okta Verify: try it on the OIDC app in a separate rule. If it is not available on Integrator, skip and note that in `notes.local.md`.

## System Log

Fail a login on purpose (wrong factor, Contractor on OIDC). **Reports → System Log**. Open the event. Match `policy.evaluate_sign_on` / authentication events to the **rule name** you created.

## Pass when

Admin Console, OIDC app, and bookmark app each demand a different factor combination, by policy.

## Next

[Lab 3.3 — Zones and System Log](03-zones-system-log.md)
