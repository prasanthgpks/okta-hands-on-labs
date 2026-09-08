# Lab 1.3 — First app: bookmark assignment

**Time:** 1.5h  
**Goal:** Assignment before protocols. Access is group-driven.

## Create the app

1. **Applications → Applications → Create App Integration**.
2. Choose **Bookmark**. If the wizard groups it under SWA/bookmark, pick bookmark / URL tile.
3. Name: `Lab Intranet`. URL: any HTTPS page you control or `https://help.okta.com/`.
4. Save.

## Assign by group only

1. **Assignments** tab → **Assign → Assign to Groups**.
2. Assign **Engineering**. Do not assign individual people.
3. Confirm Test User (department Engineering) is in that group from Lab 1.1.

## Prove it as the end user

1. Incognito: end-user dashboard as **Test User**. The `Lab Intranet` tile must appear. Open it.
2. Sign in as a user **not** in Engineering (Contractor from Lab 1.1, or create one). The tile must be missing.
3. Back in Admin: app **General** / **Application visibility** — hide from users, save, refresh Test User dashboard, then unhide. Notice **assignment** (can they SSO?) vs **visibility** (do they see the tile?).

## Do not

Do not assign the app to Test User as a person. If you already did, remove the user assignment and leave only the group.

## Pass when

Membership in Engineering is the only thing that grants the tile. No one-off user assignments.

## Next

[Week 2 — SSO](../02-sso/README.md)
