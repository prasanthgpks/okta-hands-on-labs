terraform {
  required_version = ">= 1.5.0"
  required_providers {
    okta = {
      source  = "okta/okta"
      version = "~> 4.0"
    }
  }
}

provider "okta" {}

resource "okta_group" "lab" {
  name        = "tf-lab-group"
  description = "Created by Okta Hands-On Labs Week 6"
}

resource "okta_app_bookmark" "lab" {
  label = "tf-lab-intranet"
  url   = "https://help.okta.com/"
}

resource "okta_app_group_assignment" "lab" {
  app_id   = okta_app_bookmark.lab.id
  group_id = okta_group.lab.id
}
