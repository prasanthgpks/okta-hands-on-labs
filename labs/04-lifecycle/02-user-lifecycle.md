# Lab 4.2 — User lifecycle states

**Time:** 1.5h  
**Goal:** Staged → active → suspended → deactivated is joiner / mover / leaver.

Create a **throwaway** user (`Pat Lifecycle`, plus-alias). Do not use Super Admin or Test User. Deactivate when done so you stay under 10 active users.

## Walk the states

In **Directory → People** for Pat:

1. Create as **Staged** (no activation email if you can skip; Integrator may still send one).
2. **Activate**. Confirm they can sign in to the end-user dashboard (password you set).
3. Assign Engineering so they get `Lab Intranet` (group rule via `department` = `Engineering`, or wait — prefer the group rule so movers stay consistent).
4. **Suspend**. Try sign-in: must fail. Check whether the bookmark tile / SCIM target still exists vs is disabled (write it down).
5. **Unsuspend**. Sign-in works again.
6. **Deactivate**. Sign-in fails. Provisioning should deactivate downstream if Lab 4.1 is connected.

## Mover

Change Pat’s `department` to `Contractors`. Group rule from Lab 1.1 should move group membership. Bookmark `Lab Intranet` should disappear (Engineering-only assignment). Change back or deactivate Pat.

## Mini runbook

In `notes.local.md`, three bullets: joiner, mover, leaver — which Okta buttons you press and what happens to apps.

## Pass when

You can predict which apps a user keeps or loses at suspend vs deactivate, and you verified it.

## Next

[Lab 4.3 — Inbound import](03-inbound-import.md)
