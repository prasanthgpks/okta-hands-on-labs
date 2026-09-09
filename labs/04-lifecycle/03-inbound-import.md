# Lab 4.3 — Inbound import as source of truth

**Time:** 1.5h  
**Goal:** HR (CSV here) is the source; Okta matches and reconciles.

Stay inside **10 active users**. Deactivate Lab 4.2 throwaways first.

## First import

1. Duplicate [sample-users.csv](../01-directory/sample-users.csv) locally (not committed with real emails). Five rows max; three is enough.
2. **Directory → People → Import** (CSV) or **More → Import users from CSV**.
3. Matching: **email** (or username = email).
4. Import. Confirm new people are created or matched.

## Second import

1. Change one person’s `firstName` in the CSV.
2. Remove one person from the CSV entirely.
3. Re-import with the same matching rule.
4. Confirm: changed name updated. Missing person: either unchanged, deactivated, or listed as unmatched — **write down what your wizard actually did**. Integrator CSV import may not auto-deactivate; if it does not, that is the lesson (HR source of truth often needs an app as source, e.g. HR or AD, not a one-shot CSV).

## Mental model for later

When you federate AD/Entra, the **app as source** vs **Okta as source** switch is this lab at scale. Mapping and matching rules are the same idea. The full project is [Week 7 — AD integration](../07-ad-integration/README.md).

## Pass when

A second import updates attributes and you can explain Okta's matching rule in one sentence.

## Next

[Week 5 — APIs](../05-apis/README.md) or [Week 7 — AD as source](../07-ad-integration/README.md)
