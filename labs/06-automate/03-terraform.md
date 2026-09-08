# Lab 6.3 — Okta as code (Terraform)

**Time:** 1.5h  
**Goal:** The org you clicked is reproducible.

Sample: [apps/terraform-lab](../../apps/terraform-lab).

## Auth

Use env vars only (see `.env.example`). Never commit `terraform.tfvars` with a token.

```powershell
$env:OKTA_ORG_NAME = "YOUR-ORG"      # subdomain only, e.g. integrator-8677994
$env:OKTA_BASE_URL = "okta.com"
$env:OKTA_API_TOKEN = "..."          # dedicated token or OAuth for Okta; revoke after the lab
```

Prefer a **dedicated** token named `lab-terraform` so you can revoke it in **Security → API → Tokens**.

## Apply

```powershell
cd apps/terraform-lab
terraform init
terraform plan
terraform apply
```

The config creates a group `tf-lab-group`, a bookmark app `tf-lab-intranet`, and assigns the group to the app.

## Drift

In Admin Console, remove the group assignment by hand. `terraform plan` must show it coming back. Apply to restore.

`terraform destroy` then `apply` again: group and assignment return. That is the pass.

## Pass when

Destroying and re-applying the Terraform config recreates the group and app assignment.

You are done with the six-week path. Suggested next: Okta Certified Professional, using **your** System Log as study notes — not a dump.
