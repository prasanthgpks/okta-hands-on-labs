"""Commit and push tracked lab files when the agent turn ends.

Never commits notes.local.md, .env, tokens, or Terraform state.
Prints {} on stdout so Cursor does not auto-continue the chat.
"""
from __future__ import annotations

import json
import subprocess
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[2]

# Directories and files that may be committed. gitignore still applies.
ALLOW_PATHS = [
    "labs",
    "apps",
    ".cursor",
    "README.md",
    "SECURITY.md",
    ".gitignore",
    ".env.example",
    "notes.local.md.example",
]


def git(args: list[str]) -> subprocess.CompletedProcess[str]:
    return subprocess.run(
        ["git", *args],
        cwd=ROOT,
        capture_output=True,
        text=True,
        check=False,
    )


def reply() -> None:
    sys.stdout.write("{}\n")
    sys.stdout.flush()


def main() -> int:
    raw = sys.stdin.read()
    status = "completed"
    try:
        payload = json.loads(raw or "{}")
        status = str(payload.get("status") or "completed")
    except json.JSONDecodeError:
        pass

    if status in {"aborted", "error"}:
        reply()
        return 0

    if git(["rev-parse", "--is-inside-work-tree"]).returncode != 0:
        reply()
        return 0

    existing = [p for p in ALLOW_PATHS if (ROOT / p).exists()]
    if not existing:
        reply()
        return 0

    added = git(["add", "--", *existing])
    if added.returncode != 0:
        sys.stderr.write(added.stderr)
        reply()
        return 0

    staged = git(["diff", "--cached", "--name-only"])
    if not staged.stdout.strip():
        reply()
        return 0

    commit = git(["commit", "-m", "Update Okta hands-on labs."])
    if commit.returncode != 0:
        sys.stderr.write(commit.stderr or commit.stdout)
        reply()
        return 0

    push = git(["push", "origin", "HEAD"])
    if push.returncode != 0:
        sys.stderr.write(push.stderr or push.stdout)

    reply()
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
