# Playwright cross-browser example

A self-contained fixture and two meaningful tests in five projects. No account, API key, or external service is needed.

```sh
npm ci
npx playwright install --with-deps
npm test
npx playwright show-report
```

Run one engine: `npm test -- --project=webkit`.
The runner starts the fixture server on `127.0.0.1:4199` and stops it after the run. Stop an existing server on that port if you want to ensure you are testing this exact fixture.

Tests verify valid form submission, native required-field validation, no horizontal overflow, and an end marker below the fold. Each project attaches a full-page PNG. Reports are in `playwright-report/`; JSON results are in `results.json`.

`verified-run.json` records the actual local run on 2026-10-08: 10 passed, 0 failed, 0 skipped. Mobile profiles emulate viewport/input; they do not test physical devices. Playwright WebKit is not the branded Safari app. The included `.github/workflows/playwright.yml` runs the full matrix in GitHub Actions.

Read the [configuration and CI guide](https://allscreenshots.com/blog/playwright-cross-browser-testing).

To use this for your app, change `baseURL` and `webServer`, replace the fixture tests with critical user flows, and keep engine-specific visual baselines. Do not treat these screenshots as cross-platform pixel-identical baselines.
