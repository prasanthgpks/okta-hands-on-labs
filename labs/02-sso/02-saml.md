# Lab 2.2 — SAML 2.0 SSO

**Time:** 2.5h  
**Goal:** Configure the protocol most enterprise SaaS still uses.

## Test SP

Use the public tester [sptest.iamshowcase.com](https://sptest.iamshowcase.com/) (it trusts any IdP; demo only).

| Field in Okta | Value |
|---------------|--------|
| Single sign-on URL (ACS) | `https://sptest.iamshowcase.com/acs` |
| Audience URI (SP Entity ID) | `IAMShowcase` |
| Name ID format | EmailAddress |

## Create the Okta app

1. **Applications → Create App Integration → SAML 2.0**.
2. Name: `Lab SAML`.
3. Paste the ACS and Audience values above. Leave **Use this for Recipient URL and Destination URL** checked.
4. Application username: **Email**.
5. Attribute statements (name → value):
   - `firstName` → `user.firstName`
   - `lastName` → `user.lastName`
6. Group attribute statements: name `groups`, filter **Matches regex** `.*` (or Equals `Engineering`).
7. Finish the wizard. Assign **Engineering** only. Unassign **Everyone**.

## Two launch paths

**IdP-initiated:** end-user dashboard as Test User → click `Lab SAML`. You should land on IAM Showcase showing NameID and attributes.

**SP-initiated:** Okta app → **Sign On → View SAML setup instructions** (or Identity Provider metadata). On [IAM Showcase instructions](https://sptest.iamshowcase.com/instructions), paste the IdP metadata XML → Submit. Open the unique login URL it returns. Sign in as Test User.

Jamie should not get in (not assigned). Same Everyone trap as Labs 1.3 and 2.1.

## Read the assertion

On the Showcase protected page, map:

- Issuer → your Okta org
- NameID → Test User email
- `firstName` / `lastName` / `groups`

If an attribute is missing, fix the Okta app attribute statement — do not assign a different user to “make it work.”

## Pass when

Both IdP-initiated (Okta tile) and SP-initiated (Showcase login URL) succeed with the right attributes.

## Next

[Lab 2.3 — App sign-in policy](03-app-signin-policy.md)
