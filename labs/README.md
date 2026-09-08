# Lab catalog

Workforce Identity · Integrator Free Plan · ~32 hours. Mark a lab done only when the **Pass when** line is true in *your* org.

| ID | Lab | Time | Pass when |
|----|-----|------|-----------|
| 00 | [Stand up a free Okta org](00-setup/README.md) | 1.5h | Super Admin and test user both work; you know which URL is which |
| 1.1 | [Universal Directory](01-directory/01-universal-directory.md) | 1.5h | Changing department moves the user into the matching group |
| 1.2 | [Admin roles](01-directory/02-admin-roles.md) | 1h | A non-Super-Admin cannot create apps |
| 1.3 | [Bookmark assignment](01-directory/03-bookmark-app.md) | 1.5h | Engineering group is the only assignment; no one-off users |
| 2.1 | [OIDC + PKCE](02-sso/01-oidc-pkce.md) | 2.5h | App redirects to Okta and you can explain ID token claims |
| 2.2 | [SAML 2.0](02-sso/02-saml.md) | 2.5h | IdP-initiated and SP-initiated both succeed |
| 2.3 | [App sign-in policy](02-sso/03-app-signin-policy.md) | 1h | Same user allowed/denied by policy, not by deleting the assignment |
| 3.1 | [MFA enrollment](03-authn/01-mfa-enrollment.md) | 1.5h | Admin is prompted for Okta Verify; test user is not |
| 3.2 | [Authentication policies](03-authn/02-authentication-policies.md) | 2.5h | Admin Console, OIDC app, and bookmark demand different factors |
| 3.3 | [Zones and System Log](03-authn/03-zones-system-log.md) | 1h | You can map a System Log event to the policy rule |
| 4.1 | [SCIM provisioning](04-lifecycle/01-scim-provisioning.md) | 2h | Unassign/deactivate in Okta disables the downstream account |
| 4.2 | [User lifecycle](04-lifecycle/02-user-lifecycle.md) | 1.5h | You predicted suspend vs deactivate app behavior and verified it |
| 4.3 | [Inbound import](04-lifecycle/03-inbound-import.md) | 1.5h | Second import updates attributes; you can state the matching rule |
| 5.1 | [Management API](05-apis/01-management-api.md) | 2h | Create and deactivate a user with OAuth for Okta APIs |
| 5.2 | [Custom authorization server](05-apis/02-authorization-server.md) | 2h | Two users get different scopes/claims from the same server |
| 5.3 | [Protect an API](05-apis/03-protect-api.md) | 2h | Valid scoped token works; wrong audience fails |
| 6.1 | [Event hooks](06-automate/01-event-hooks.md) | 1.5h | Creating a user produces a webhook with the matching user id |
| 6.2 | [Workflows](06-automate/02-workflows.md) | 2h | One flow runs on user create; you stay at ≤5 flows |
| 6.3 | [Terraform](06-automate/03-terraform.md) | 1.5h | Destroy + apply recreates the group and app assignment |
