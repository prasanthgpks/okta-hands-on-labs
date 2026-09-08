# Lab 6.3 — one group, one bookmark app, group assignment.

Auth via environment variables (never commit tokens):

```powershell
$env:OKTA_ORG_NAME = "YOUR-ORG"
$env:OKTA_BASE_URL = "okta.com"
$env:OKTA_API_TOKEN = "revocable-lab-token"
terraform init
terraform plan
terraform apply
```
