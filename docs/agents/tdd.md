# Test-driven development

Every code change lands as a red → green loop. This applies to feature work, bug fixes and
PR review findings alike: a review fix is a code change, not an exemption.

## The loop

1. Write one failing test at an agreed seam.
2. Run it and confirm it fails for the expected reason.
3. Commit the test alone with 🧪.
4. Write only enough code to make it pass.
5. Run it green, then commit the implementation with the matching change emoji.

A test committed alongside its implementation proves nothing: the log must show red before
green. Keep each step small and vertical — one test, one implementation, then the next test.
Do not write all the tests first and the implementation afterwards.

## Seams

Test at public boundaries: the page components (`pages/**`) and the source modules in `source/`,
which this frontend repo owns (no API routes; data fetching is client-side / SSG).

Agree the seam before writing tests. This repo's seams are:

- **Page rendering** — `pages/index.tsx`, `pages/cv.tsx`, `pages/blog.tsx` (rendering and
  user-visible behaviour of the Next.js pages router).
- **Source modules** — `source/types/`, `source/*` (data shapes, helpers, pure functions).

Run tests with `npm test` (Vitest). Coverage is enforced via `npm run test-coverage`.

## Async UI state

Before the red step for any component that fetches or sends data, list the states the screen
can be in while a request is pending, fails, or settles after a newer request. Each one gets
its own red test:

- a second submit while the first is pending posts nothing;
- an edit made while a request is pending cannot reach the request that was already sent;
- a response that lands after a newer one does not overwrite it;
- a failed request leaves the last good data in place.

The rules behind these are in `CODING_STANDARDS.md`. That file is read during review, so this
list is what the implementer must carry into the red step.

## Exceptions

- A test that only guards behaviour an earlier slice already shipped is a **characterization**
  test: commit it with ✅ and say so in the body. Do not manufacture a red by deleting a check.
- Refactoring is not part of the loop. It belongs to code review and gets its own ♻️ commit.

## History is the evidence

`git log` should let a reader replay the work: 🧪 test, implementation, 🧪 test,
implementation. A single commit carrying several changes cannot show that, even when the
tests are good, so split the work before committing rather than after.
