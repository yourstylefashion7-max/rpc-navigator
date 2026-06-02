# Upstream coupling — RPC navigator fork

This repo is a fork of [fleetbase/navigator-app](https://github.com/fleetbase/navigator-app) (AGPL-3.0).
By policy, we do **not** auto-track upstream. There is no `upstream` git remote configured locally.

## Why

Fleetbase upstream can publish breaking changes at any time. RPC's deployment is a customized, branded
production system; an unreviewed merge from upstream risks regressions in the customer-facing app.

## How to pull a specific upstream commit

When a security fix or feature lands upstream that we want, do NOT add `upstream` as a permanent remote.
Instead, fetch + cherry-pick the specific commit:

```bash
git fetch https://github.com/fleetbase/navigator-app.git main:upstream-snapshot
git cherry-pick <commit-sha>
git branch -D upstream-snapshot   # drop the temp branch when done
```

## Test before merging cherry-picks

1. `yarn install` from a clean `node_modules` after the cherry-pick
2. Build for both platforms via EAS: `eas build --profile preview --platform all`
3. Install on a test device and verify the brand-critical screens still match RPC (icon, splash, app name,
   navy/orange theme, app store metadata)

## AGPL-3.0 compliance

The original LICENSE.md, copyright headers in source files, and `author: "Fleetbase Pte Ltd"` /
`license: "AGPL-3.0-or-later"` fields in `package.json` MUST be preserved. Rebranding is for app name,
icon, splash, UI strings, and store metadata only — not for legal notices.
