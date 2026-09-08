# Lab 4.1 — Outbound provisioning (SCIM)

**Time:** 2h  
**Goal:** SSO grants a session; provisioning creates the account in the target.

## Target

Pick one:

- A sandbox SaaS that supports SCIM (Slack, GitHub EMU, Atlassian, etc. — only if you already have a sandbox)
- Okta **SCIM 2.0 Test App** / AIW SCIM template if it appears in the catalog for your org
- If you cannot get a live SCIM endpoint: complete **attribute mappings** and capture provisioning **preview / logs** anyway, and note the gap in `notes.local.md`

Do not SCIM-provision a production company tenant.

## Enable provisioning

1. Open the SCIM app (or add it from the catalog).
2. **Provisioning → Configure API Integration**. Paste base URL + token from the target. Test API credentials.
3. Enable **Create users**, **Update user attributes**, **Deactivate users**.
4. **To App** mappings: Okta `user.email` → target email, `user.firstName` / `lastName`, plus `department` if the target has a field.
5. Assign **Engineering** (group push / assignment). Push groups if the app supports it.

## Prove create / update / deactivate

1. Test User is in Engineering → downstream account is created.
2. Change Test User last name in Okta → target updates (may take a push or a job).
3. Remove Test User from Engineering (temporarily change department so the group rule drops them, or pause the rule and remove) → target user is deactivated or unsassigned.
4. Put Test User back in Engineering for later labs.

**Reports → System Log**: look for `application.user_membership.add`, `application.provision.user.push`, or similar.

## Pass when

Deactivating or unassigning in Okta disables the downstream account. You can show the provisioning event.

## Next

[Lab 4.2 — User lifecycle](02-user-lifecycle.md)
