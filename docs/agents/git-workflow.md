# Git: branches & commits

How commits and branches work in this repo (a Next.js site).

## `main` is protected

Never commit directly to `main`. It is a protected branch on GitHub, so a direct push is rejected and history on it stays merge-only.

Before committing:

1. Run `git branch --show-current`.
2. If it is not `main`, commit on the current branch.
3. If it is `main` (or anything else that isn't a real work branch), create one first:
   `git switch -c <branch-name>`

## Branch names

Name the branch after what you are about to do, in the style of the existing branches:

- `<kind>/<short-hyphenated-description>` — e.g. `feature/scaffold-monorepo`, `fix/transaction-rounding`
- kinds: `feature`, `fix`, `chore`, `refactor`, `docs`, `spike`

Keep the description short, lowercase, hyphenated, no issue number in the name (the issue belongs in the commit message / PR body).

## Commit messages

**Default to gitmoji.** Start the subject with the emoji that matches the change, then a short imperative sentence:

```
✨ Add quick entry to the transaction form
🐛 Fix rounding on split transactions
📝 Document the event store schema
♻️ Extract ledger projection from the read model
```

The emoji carries the type; do not also write `feat:` / `fix:` in front of it.

| Emoji | Use for                                                                                                       |
| ----- | ------------------------------------------------------------------------------------------------------------- |
| ✨    | New feature                                                                                                   |
| 🐛    | Bug fix                                                                                                       |
| 🩹    | Simple fix that doesn't address the root cause                                                                |
| ♻️    | Refactor — no behaviour change                                                                                |
| 📝    | Documentation only                                                                                            |
| 🔧    | Add or update configuration files                                                                             |
| 🔨    | Add or update development scripts                                                                             |
| 🧪    | Adding a failing test — the RED step of the TDD loop                                                          |
| ✅    | Adding a passing test, or fixing a test                                                                       |
| 👷    | CI changes                                                                                                    |
| 🚦    | Add or change a quality gate that can fail the build or CI — coverage thresholds, lint rules, required checks |
| 🚀    | Deploy / release                                                                                              |
| ⬆️    | Dependency bump                                                                                               |
| 🔥    | Removing code or files                                                                                        |
| 🚚    | Moving or renaming files                                                                                      |
| 💥    | Breaking change                                                                                               |
| 🔒️    | Security fix                                                                                                  |
| ⚡️    | Performance improvement                                                                                       |
| 💄    | UI / styling                                                                                                  |
| 🏗️    | Scaffolding, architecture, project structure                                                                  |
| 🎉    | Initial commit                                                                                                |

There is no generic "chore" bucket — pick the most specific emoji that fits (🔧 config, 🔨 dev scripts, 👷 CI, ⬆️ deps, 🏗️ architecture).

Subject: imperative, no trailing period, under ~70 characters. Write the _why_ in the body when it isn't obvious from the diff.

Work done test-first lands as two commits per step: the failing test alone (🧪), then the implementation that turns it green (the matching change emoji, e.g. ✨). A test committed alongside its implementation proves nothing; the log should show red before green. This applies to PR review fixes too — see `docs/agents/tdd.md`.

### Breaking changes

Gitmoji has no standard syntax for these, so keep the one bit that tooling actually reads: put `BREAKING CHANGE: <what changed and how to migrate>` in the body. This is the footer semantic-release and similar tools parse.

### Not yet migrated

Commits made before this convention was adopted (`feat:`, `docs:` style) stay as they are. Don't rewrite history to match.

## Commits

- Commit only what belongs to the change; never `git add -A` to swallow unrelated or untracked files.
- Do not `push --force` to `main` (it is protected); force-pushing a feature branch you own is fine.
- When the work came from an issue, reference it in the body, e.g. `Part of #<n>`.

## Pushing

Push the branch and open a PR rather than merging locally:

```
git push -u origin <branch-name>
gh pr create --fill
```

If the branch is already pushed and up to date with `origin`, say so instead of pushing again.
