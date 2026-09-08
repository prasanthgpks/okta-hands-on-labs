# Lab 6.2 — Okta Workflows (max 5 flows)

**Time:** 2h  
**Goal:** No-code automation on identity events. Integrator Free Plan allows **5 flows**.

## One flow

1. Open **Workflows** (from the Admin Console waffle / Workflows).
2. New flow: name `lab-user-created`.
3. Event: **Okta → User Created** (or equivalent User Created card).
4. Filter: skip if department is `Contractors` (or group name contains Contractor).
5. Action: **Okta → Add User to Group** → `Engineering` (only if they are not contractors — adjust so you do not fight Lab 1.1’s group rule; alternatively add to a new group `Lab Workflowed`).
6. Action: **HTTP → POST** to your webhook.site URL, body = user id + email.
7. Save and **activate**. Delete unused drafts. Count flows: must be ≤ 5.

## Test

Create a non-contractor throwaway user. Execution history shows success. webhook.site gets the POST. Group membership is what you designed.

Create a contractor; flow must skip.

Deactivate throwaways. If you hit the 5-flow cap, delete drafts first.

## Pass when

Creating a user runs the flow once, membership is correct, and the HTTP request is in history.

## Next

[Lab 6.3 — Terraform](03-terraform.md)
