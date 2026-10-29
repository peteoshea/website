# AGENTS.md

Generic agent instructions for this repo. Repo-specific details are recorded in `docs/agents/`.

## Commands

- `npm run build` — Next.js production build
- `npm run dev` — `next dev` on http://localhost:3000
- `npm test` — Jest
- `npm run lint` — eslint (eslint.config.mjs)
- `npm run type-check` — `tsc --noEmit`
- `npm run format` — prettier

## Agent skills

### Issue tracker

Issues live in GitHub (uses the `gh` CLI). See `docs/agents/issue-tracker.md`.

### Triage labels

The five triage roles are `needs-triage`, `needs-info`, `ready-for-agent`, `ready-for-human`, `wontfix`. See `docs/agents/triage-labels.md`.

### Domain docs

Single-context layout: one `GLOSSARY.md` + `docs/adr/` at the repo root. See `docs/agents/domain.md`.

### Git workflow

Branches and commits follow the money-app style. See `docs/agents/git-workflow.md`.

### Test-driven development

Every code change is a red → green loop: a failing test committed alone (🧪), then the
implementation that makes it pass (matching change emoji). See `docs/agents/tdd.md`.
