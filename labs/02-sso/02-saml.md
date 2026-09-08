# Lab 2.2 — SAML 2.0 SSO

**Time:** 2.5h  
**Goal:** Configure the protocol most enterprise SaaS still uses.

## Test SP

You need a Service Provider that will show the assertion. Options:

- Okta’s SAML-related samples under [okta-samples](https://github.com/okta-samples)
- A SAML test SP such as [sso.saml.test](https://sso.saml.test/) or another tester that displays ACS URL, Entity ID, and the assertion (confirm the tester is still live before you depend on it)

Record from the SP: **ACS URL**, **Audience / Entity ID**, **NameID format**.

## Create the Okta app

1. **Applications → Create App Integration → SAML 2.0**.
2. Name: `Lab SAML`.
3. Single sign-on URL = ACS URL from the SP.
4. Audience URI = Entity ID from the SP.
5. Name ID: **EmailAddress** or **Persistent** (email is easier for labs).
6. Attribute statements: `firstName` → user.firstName, `lastName` → user.lastName. Group attribute: `groups` → matches regex `.*` or specifically Engineering.
7. Finish the wizard. Assign **Engineering**.

## Two launch paths

**IdP-initiated:** end-user dashboard as Test User → click `Lab SAML`.

**SP-initiated:** open the test SP’s login URL, choose your Okta org / paste SSO URL from the Okta **Sign On** tab.

Both must land you in the SP.

## Read the assertion

In the SP (or a SAML tracer on a request you own), map:

- Issuer → Okta org
- NameID → Test User email or persistent id
- Attribute statements → firstName, lastName, groups

If an attribute is missing, fix the Okta app profile / attribute statement — do not “make it work” by assigning a different user.

## Pass when

Both IdP-initiated (Okta tile) and SP-initiated (app login) succeed with the right attributes.

## Next

[Lab 2.3 — App sign-in policy](03-app-signin-policy.md)
