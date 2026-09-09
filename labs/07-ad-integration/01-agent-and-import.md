# Lab 7.1 — Okta AD Agent, import, profile mappings

**Time:** 2h  
**Goal:** AD is the source. ABC Tech users are **not** created by hand in Okta.

## Agent

1. Admin Console → **Directory → Directory Integrations → Add Directory → Active Directory**.
2. Download the **Okta AD Agent** onto a domain-joined Windows host that can reach the DC (the DC itself is fine in a lab).
3. Install, sign in as your Okta Super Admin when the agent asks, register against `integrator-8677994` (or your org).
4. Confirm the agent shows **Connected**.

Docs: [Okta AD Agent](https://help.okta.com/en-us/content/topics/directory/ad-agent-main.htm).

## Import scope

1. Select the domain `abctech.com`.
2. **OUs to import:** `Employees` and `Contractors` only. Exclude `ServiceAccounts`.
3. Import **users and groups**.
4. Matching: UPN or email. Do not match against Test User / Jamie (different domains).

If the wizard would exceed **10 active users**, deactivate unused Okta people first (not Super Admin, not Test User, not Jamie).

## Profile mappings (Okta ← AD)

**Directory → Directory Integrations → your AD → Provisioning → To Okta** (inbound).

| Okta user profile | AD attribute |
|-------------------|--------------|
| `department` | `department` |
| `employeeType` (add in Profile Editor if missing) | `employeeType` |
| `managerId` / manager display (as your org exposes it) | `manager` |

App username / Okta username: **UPN** or **email**.

Turn on **create**, **update**, **deactivate** from AD. Manual create of ABC users in **Directory → People** is a fail for this project.

## Prove import

After import + activate (or JIT/auto-activate if you enabled it):

- `pat.hr`, `quinn.finance`, `riley.it`, `casey.it`, `sam.ext`, `lea.leaver` exist in Okta with AD as source.
- `svc.backup` does **not**.
- Profile shows department / employeeType from AD.

## Pass when

No ABC employee was created with **Add person**. All six lab users show the AD integration as source, and the service account is absent.

## Next

[Lab 7.2 — Groups and rules](02-groups-and-rules.md)
