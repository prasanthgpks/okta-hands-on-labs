# Lab 6.1 — Event hooks

**Time:** 1.5h  
**Goal:** Push Okta events to your systems without polling.

## Endpoint

Use [webhook.site](https://webhook.site) (unique URL) or a tiny local receiver behind a tunnel. You need a public HTTPS URL for Okta to verify and POST.

## Create the hook

1. **Workflow → Event Hooks** (or **Settings → Features** then **Workflow → Event Hooks**, depending on the console).
2. Endpoint URL = your unique HTTPS URL.
3. Subscribe to **User created** (`user.lifecycle.create`).
4. Okta sends a one-time **verification** request (`x-okta-verification-challenge`). The endpoint must echo the challenge. webhook.site can display it; paste the value back in Okta if the UI asks. Local receivers: return JSON `{ "verification": "<challenge>" }` per current Okta docs.
5. Activate the hook.

## Prove it

1. Create a throwaway user in Admin Console (or API). Stay under 10 active users.
2. webhook.site (or your logs) shows `eventType` `user.lifecycle.create`, actor, target id.
3. Target id matches **Directory → People** for that user.

Optional: **inline hook** (token enrichment) only if you still want more; skip if time is gone.

Deactivate the throwaway user.

## Pass when

A new user in Okta produces a webhook you can show, with the user id matching Directory.

## Next

[Lab 6.2 — Workflows](02-workflows.md)
