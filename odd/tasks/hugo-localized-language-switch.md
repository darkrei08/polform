# ODD Tasks: Complete Hugo Localization and Language Switching

Feature: `hugo-localized-language-switch`
Status: blocked
Created: 2026-10-11
Issue: [#1](https://github.com/darkrei08/polform/issues/1) (approved)
Branch: `feat/hugo-localized-language-switch`

## Objective
Make every generated Italian, English, and German Hugo page consistently use its selected language, especially the homepage and shared site chrome, and keep language switching on the equivalent page whenever available.

## Problem and rationale
The homepage template contains Italian prose and labels directly, so Hugo renders Italian on `/en/` and `/de/` despite localized page content existing. Several shared header, footer, and base-layout labels are also hardcoded. The current language-switch fallback can send visitors to a locale homepage when a translated counterpart is absent, which makes sections appear missing. Hugo is a static generator: language switching navigates to the prebuilt localized URL; it is not runtime machine translation.

## Scope and constraints
- Localize homepage content and shared UI labels for `it`, `en`, and `de` using Hugo's existing localization conventions or the smallest suitable static-template approach.
- Preserve existing uncommitted translation files and the user's footer changes; do not discard or overwrite unrelated work.
- Ensure every published page has a locale counterpart or a clear, deliberate language-switch fallback.
- No runtime translation service, new dependency, external request, or SEO URL redesign.
- Verify actual rendered pages in a browser (Playwright or Chrome) and with a Hugo build.

## Tasks
- [x] T1: Localize the homepage and shared Hugo chrome; keep language switching on equivalent translated pages.
  - Status: implementation and Hugo build completed; browser verification remains in T2.
  - Allowed surfaces: `layouts/_default/home.html`, `layouts/_default/baseof.html`, `layouts/partials/header.html`, `layouts/partials/footer.html`, `layouts/partials/lang-switch.html`, `layouts/partials/search-modal.html`, `layouts/partials/theme-toggle.html`, `i18n/` (new locale files only if needed), and a narrowly scoped localization smoke-test file if needed.
  - Test-first: add/identify deterministic assertions for localized rendered output, observe RED, then implement and observe GREEN.
- [x] T2: Browser-verify localized routes and switching across home, sector, material, and legal pages; record exact commands and results.
  - Verification: `hugo --minify --destination /tmp/polform-trilingual-final` passed (32 IT / 31 EN / 31 DE); `git diff --check` passed. Headless Chromium loaded 12 representative IT/EN/DE home, sector, material, and legal routes with HTTP 200, expected `lang` and H1 values, and equivalent language-switch links on a translated sector page. Shared EN/DE chrome had no obvious Italian leakage in the tested pages.
- [x] T3: Localize the shared single-page contact CTA and mailto/WhatsApp labels on translated material and sector pages.
  - Allowed edit surfaces: `layouts/_default/single.html`, `i18n/it.toml`, `i18n/en.toml`, `i18n/de.toml`.
  - Acceptance: generated EN/DE single pages contain no Italian CTA labels; titles, WhatsApp prefill, and mailto subject/body use the page language; IT output remains unchanged except for localized key wiring.
  - Verification: `hugo --minify --destination /tmp/polform-single-cta` passed (32 IT / 31 EN / 31 DE); generated IT/EN/DE assertions passed for acoustic-sector and memory-foam pages; `git diff --check` passed. Browser behavior was not verified.

## Acceptance criteria
- `hugo --minify --destination /tmp/polform-public` succeeds.
- Italian, English, and German homepages contain translated page copy and shared UI text, not merely translated metadata.
- Locale controls link to the corresponding language version of the current page when it exists; the fallback for any missing counterpart is valid and understandable.
- Representative home, sector, material, and legal routes load in Playwright/Chrome with expected locale text and no broken internal navigation.
- No unrelated user changes are lost.

## Checks and evidence
- Hugo 0.131.0 Extended build passed: `hugo --minify --destination /tmp/polform-public` (32 IT / 31 EN / 31 DE).
- Static HTML spot checks confirmed localized IT/EN/DE homepage copy and localized footer labels.
- Browser route and language-switch checks passed for the bounded 12-route matrix; full link crawl, broader page coverage, and WCAG conformance remain outside this check.
- Preserve all existing uncommitted translations and reference files.

## Progress and next step
Issue #1 remains open and marked `status:approved`; branch `feat/hugo-localized-language-switch` is active. T1, T2, and T3 are complete. Preserve the dirty footer, translated content, and reference files. Full link crawling, browser verification of the new single-page CTA, and WCAG conformance are not claimed.
