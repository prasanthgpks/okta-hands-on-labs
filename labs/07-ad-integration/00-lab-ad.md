# Lab 7.0 — Lab Active Directory (abctech.com)

**Time:** 3h  
**Goal:** A tiny forest that matches the project OUs and groups. Not production AD.

Integrator Free Plan has no hosted AD. You need a **lab domain controller** the Okta AD Agent can reach (same LAN or VPN). Windows Server evaluation in Hyper-V is the usual path on Windows 10/11.

## Forest

- DNS name: `abctech.com`
- NetBIOS: `ABCTECH`
- Domain admin: a lab account you control. Do not reuse your Okta Super Admin password.

## OUs

Create under `DC=abctech,DC=com`:

- `OU=Employees`
- `OU=Contractors`
- `OU=ServiceAccounts`

## AD security groups (Global / Security)

- `HR_Users`
- `Finance_Users`
- `IT_Users`
- `Contractors_External`
- `OKTA_APP_ADMINS`
- `OKTA_GROUP_ADMINS`
- `OKTA_HELPDESK_ADMINS`

Do **not** put a group that grants Okta Super Admin on a contractor. Keep Super Admin as your original Okta signup user (not imported from AD).

## Users (six — stay under the Okta 10-user cap)

Set `department`, `employeeType`, and `manager` (manager can be `riley.it` for everyone else, empty for Riley).

| sAMAccountName | OU | Groups | department | employeeType |
|----------------|----|--------|------------|--------------|
| pat.hr | Employees | HR_Users | HR | Employee |
| quinn.finance | Employees | Finance_Users | Finance | Employee |
| riley.it | Employees | IT_Users, OKTA_HELPDESK_ADMINS | IT | Employee |
| casey.it | Employees | IT_Users, OKTA_APP_ADMINS | IT | Employee |
| sam.ext | Contractors | Contractors_External | Contractors | Contractor |
| lea.leaver | Employees | IT_Users | IT | Employee |

UPN: `sAMAccountName@abctech.com`. Mail: same, or a plus-alias you can read if you need activation mail.

Create one dummy in `ServiceAccounts` (`svc.backup`). It must **not** appear in Okta after Lab 7.1.

## Pass when

`Get-ADUser` / ADUC shows those six people in the right OUs and groups, plus a service account that will be excluded from import.

## Next

[Lab 7.1 — Agent and import](01-agent-and-import.md)
