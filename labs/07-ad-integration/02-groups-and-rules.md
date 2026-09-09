# Lab 7.2 — Okta groups and rules from AD

**Time:** 1.5h  
**Goal:** Access is group-driven. Membership comes from AD groups or OU, not from clicking Assign on people.

## Okta groups

Create if they do not already exist (do not reuse Week 1 `Engineering` / `Contractors` for ABC Tech):

- `OKTA_HR_USERS`
- `OKTA_FINANCE_USERS`
- `OKTA_IT_USERS`
- `OKTA_CONTRACTORS`
- `OKTA_APP_ADMINS`
- `OKTA_GROUP_ADMINS`
- `OKTA_HELPDESK_ADMINS`

`OKTA_SUPER_ADMINS`: either skip (keep Super Admin as the signup user) or a group that contains **only** your personal admin — never `sam.ext`.

## Membership logic

**Preferred:** import the AD groups and **Push / map** AD `HR_Users` → `OKTA_HR_USERS` (group push or group rule on `source.groups` / AD group name, depending on what the agent imported).

**If imported AD groups appear as Okta groups:** add rules:

- If user is member of AD `HR_Users` → `OKTA_HR_USERS`
- Same for Finance, IT, Contractors_External
- If `employeeType` equals `Contractor` **or** OU contains `Contractors` → `OKTA_CONTRACTORS` (defense in depth)

Do not add Pat to `OKTA_HR_USERS` by hand.

## App assignment (reuse Week 1–2 apps)

- `Lab Intranet` / `Lab OIDC` / `Lab SAML`: assign **OKTA_IT_USERS** and/or employees as you choose for the demo, but **contractors limited** — e.g. bookmark only, no OIDC.
- Contractors: a single low-privilege bookmark or none.

## Pass when

Changing **nothing in Okta**, you can explain: Pat is in `OKTA_HR_USERS` because AD `HR_Users` (or the OU rule) put them there. Sam is in `OKTA_CONTRACTORS` only.

## Next

[Lab 7.3 — JML](03-jml.md)
