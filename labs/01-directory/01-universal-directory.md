# Lab 1.1 — Universal Directory: users, groups, rules

**Time:** 1.5h  
**Goal:** Treat Okta as the source of identity, not a list of logins.

## Custom attribute

1. **Directory → Profile Editor**.
2. Open the **User (default)** profile.
3. Add attribute `department` (string). Scope: user. Make it available on create/edit.
4. Save.

## Groups

1. **Directory → Groups → Add group**.
2. Create `Engineering` and `Contractors` (descriptions optional).
3. Do not add members by hand yet.

## Group rule

1. **Directory → Groups → Rules** (or **Add group rule** from Groups).
2. Rule name: `Dept Engineering → Engineering group`.
3. Condition: user attribute `department` equals `Engineering` (exact string you used on the profile).
4. Assign to group `Engineering`.
5. Activate the rule.
6. Repeat for `Contractors` → `Contractors` group.

## Users

1. Open your **Test User** from Setup. Set `department` = `Engineering`. Save.
2. Confirm Test User appears in the Engineering group (rule may take a few seconds).
3. **Directory → People → Import from CSV** (or **More actions → Import users from CSV**). Use [sample-users.csv](sample-users.csv) after replacing emails with plus-aliases you control.
4. If import would exceed **10 active users**, import only one extra person or deactivate someone first.

Optional: create one more user by hand with `department` = `Contractors`.

## Prove it

Change Test User `department` from `Engineering` to `Contractors`. Wait for the rule. Test User must leave Engineering and join Contractors **without** a manual group assignment.

Set department back to `Engineering` before Lab 1.3.

## Pass when

Changing a user's department moves them into the matching group without a manual assignment.

## Next

[Lab 1.2 — Admin roles](02-admin-roles.md)
