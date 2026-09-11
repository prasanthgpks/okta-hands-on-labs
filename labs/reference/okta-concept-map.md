# How Okta actually fits together

Concept reference: one org, one directory, and the objects that connect a person to the apps they are allowed to use. Converted from `Okta_Concept_Map.html`.

## 01 — The org

An Okta **org** is the whole tenant — one subdomain (`yourcompany.okta.com`), one directory, one set of policies. Every user, group, app, and policy lives inside exactly one org; there is no cross-org sharing by default.

| Term | Meaning |
|------|---------|
| Org types | Developer / Integrator orgs for testing, a Preview sandbox that mirrors production, and Production |
| Admin Console | Web UI for org configuration — separate from the end-user dashboard |
| Custom domain and branding | Sign-in URL and email templates can be white-labeled (limited on Integrator Free Plan) |

These labs: Admin Console is `https://YOUR-ORG-admin.okta.com/`. End-user dashboard is `https://YOUR-ORG.okta.com/`.

## 02 — Universal Directory

Every user has one **base profile** in Okta, mastered from whichever source is authoritative — Okta itself, Active Directory, an HR system, or a custom source. Each assigned app then gets an **app-specific profile**, filled from the base profile through attribute mappings.

| Term | Meaning |
|------|---------|
| Profile source | System of record for a given attribute; different attributes can be mastered from different sources |
| Attribute mapping | Per-app translation of base-profile fields into what that app expects |
| Custom attributes | Org-specific fields on the base schema (department, employee ID, cost center) |

Lab 1.1 and Week 7 (AD as source) are this model in the console.

## 03 — User lifecycle

Every user sits in exactly one lifecycle status. That status — not only group membership — determines whether they can authenticate. **Deactivation** is the offboarding state that matters: it revokes sessions and app assignments at once.

| Status | Meaning |
|--------|---------|
| Staged | Account exists, not activated — no login yet |
| Suspended | Temporarily blocked without losing assignments — reversible |
| Deactivated | End state: sessions killed, app access removed. Distinct from delete |

Lab 4.2 and Lab 7.3 (JML from AD).

## 04 — Groups and group rules

Groups are what almost everything else attaches to — app assignment, policy assignment, other rules. A **group rule** evaluates a condition against each user’s profile and adds matching users automatically.

| Term | Meaning |
|------|---------|
| Static group | Membership set by hand |
| Rule-based group | Membership computed from an Okta Expression Language condition |
| App group | Group created to mirror roles imported from a downstream app |

Labs 1.1, 1.3, 7.2. Trap: assigning an app to **Everyone** gives every user the tile.

## 05 — Apps and provisioning

An app in Okta is a configured **instance** of a catalog integration — from the Okta Integration Network or built by hand — bound to a protocol (SAML, OIDC, SWA) for sign-in and, separately, to SCIM for provisioning. Sign-in and provisioning are independent; an app can have either, both, or neither.

| Term | Meaning |
|------|---------|
| OIN | Okta Integration Network — pre-built connectors |
| SWA | Secure Web Authentication — credential injection when no real SSO protocol exists |
| Provisioning | SCIM create / update / deactivate pushed as group membership changes |

Labs 1.3 (bookmark), 2.1 (OIDC), 2.2 (SAML), 4.1 (SCIM).

## 06 — Authentication policies

A sign-in passes through a stack:

1. **Global Session Policy** — whether this network/device may even try
2. **App Sign-On Policy** — what that specific app requires
3. **Authenticator Enrollment Policy** — which factors the user must have set up

Each layer can allow, deny, or step up.

Labs 2.3 and Week 3. Okta’s `access_denied` / “Policy evaluation failed” is often this stack, not a broken redirect.

## 07 — Okta Expression Language

Group rules, attribute mappings, and policy conditions use the same small expression syntax — not general-purpose code. It reads user, group, and app objects and returns a boolean or a value.

| Piece | Use |
|-------|-----|
| `user.*` | Base or custom profile attribute |
| String / array functions | `contains`, `startsWith`, `isMemberOfGroupName` |
| Used in | Group rules, mappings, sign-on conditions, assignment logic |

## 08 — System Log and event hooks

Every meaningful action — sign-in, policy evaluation, group change, admin action — is written to the **System Log**. An **Event Hook** subscribes to event types and calls an external webhook.

| Term | Meaning |
|------|---------|
| System Log | Immutable, queryable record of what happened in the org |
| Event Hook | One-way webhook fired with specific System Log event types |
| Okta Workflows | No-code automation on the same events (max 5 flows on Integrator) |

Labs 3.3, 6.1, 6.2. If something fails, read System Log before changing a second setting.
