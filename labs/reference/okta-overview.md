# Okta overview

Stakeholder introduction: identity for employees, customers, and AI. Converted from `Okta_Overview_1.pptx` / `okta-overview-extracted.html` (text only).

## The problem: identity is scattered

- **Every app has its own login.** Employees juggle dozens of passwords across HR, CRM, cloud, and internal tools.
- **Security risk grows with sprawl.** Weak or reused passwords and orphaned accounts are a leading cause of breaches.
- **Onboarding and offboarding is manual.** IT grants and revokes access app-by-app, which is slow and easy to get wrong.

## What is Okta?

An independent, cloud-based identity provider that sits in front of every application — not tied to Microsoft, Google, or AWS.

- One trusted login for every app, cloud or on-prem
- Verifies who a user is (authentication)
- Controls what they can access (authorization)
- Works across employees, partners, and customers

## Two platforms, one company

**Workforce Identity Cloud** — for your own employees and partners

- Single sign-on to internal apps (Slack, Salesforce, custom tools)
- Adaptive multi-factor authentication
- Automated onboarding and offboarding

**Customer Identity Cloud (Auth0)** — for the apps you build for customers

- Login and signup for your own products
- Developer-friendly APIs and SDKs
- Scales to millions of end users

These hands-on labs use **Workforce Identity** on an Integrator Free Plan org.

## Core capabilities

| Capability | What it does |
|------------|----------------|
| Single sign-on (SSO) | One login unlocks every connected app |
| Adaptive MFA | Risk-based step-up using device and location |
| Universal Directory | One source of truth for identities across systems |
| Lifecycle management | Access granted on day one and revoked when someone leaves |
| API access management | OAuth 2.0 / OIDC security for APIs |
| Insights and reporting | Who accessed what, and when, for audits |

## How it works (three steps)

1. **Authenticate once** at Okta, not at each app.
2. **Okta verifies identity** — password plus adaptive MFA if the context looks risky.
3. **Access is granted** — Okta issues a token and the user moves between apps they are allowed to use.

## Why it matters for the business

- **Fewer breaches** — centralized MFA closes the compromised-credentials gap.
- **Less IT overhead** — password resets and manual access reviews drop with SSO and lifecycle automation.
- **Faster joiner/leaver** — grant or revoke in minutes, tied to HR status.
- **Audit-ready** — centralized logs of who accessed what.

## Where Okta stands (directional)

Named a Leader in *The Forrester Wave: Workforce Identity Security Platforms, Q2 2026*. Rankings shift; treat this as directional.

Others in the space:

- **Microsoft Entra ID** — native fit for Microsoft/Azure-centric orgs
- **Ping Identity** — large, complex enterprise deployments
- **Google Cloud Identity** — Google Workspace / GCP environments

## Identity for AI

AI agents are a new class of “user” that must authenticate and be governed like a person or a service account. The same principles apply: verify identity, scope access narrowly, log every action.

## One line

One identity layer. Every employee, every customer, every app.
