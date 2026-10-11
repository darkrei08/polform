# ODD Tasks: Improve Hugo Template Accessibility

Feature: `polform-template-accessibility`
Status: in progress
Created: 2026-10-11
Issue: [#3](https://github.com/darkrei08/polform/issues/3) (open, approved). Existing issue #2 covers public copy and privacy, not template accessibility.
Branch: `feat/hugo-localized-language-switch` (dirty; preserve all existing changes)

## Objective
Fix concrete keyboard, accessible-name, language, and semantic issues in the shared Hugo templates without changing the site's visual direction or adding dependencies.

## Constraints
- Preserve all existing translations, footer edits, privacy content, reference files, and unrelated dirty work.
- Keep English, German, and Italian control names localized consistently with each page's language.
- Prefer native HTML and minimal ARIA; do not claim full WCAG conformance from a bounded template fix.
- No new dependencies or unrelated redesign.

## Tasks
- [x] T1: Make the search dialog and theme controls operable and named accessibly in IT/EN/DE; restore visible keyboard focus where suppressed.
  - Allowed edit surfaces: `layouts/partials/search-modal.html`, `layouts/partials/theme-toggle.html`, `i18n/it.toml`, `i18n/en.toml`, `i18n/de.toml`, `assets/css/style.css`.
  - Acceptance: search input has a programmatic label; modal controls use localized accessible names; keyboard focus remains visible; Hugo output contains translated names for all locales.
- [x] T2: Make the image zoom overlay keyboard-operable and correctly exposed to assistive technology, with localized names and predictable focus/close behavior.
  - Allowed edit surfaces: `assets/js/main.js`, `assets/css/style.css`, `layouts/_default/baseof.html`, `i18n/it.toml`, `i18n/en.toml`, `i18n/de.toml`.
  - Acceptance: keyboard users can open and close zoom; overlay has localized accessible dialog/control names, a close control, usable focus entry/return and keyboard navigation; no unrelated image or gallery behavior changes.
- [x] T3: Verify the changed templates in generated output and a browser, then record exact evidence and remaining scope limits.
  - Checks passed: Hugo minified build, focused generated-output assertions, `node --check assets/js/main.js`, `git diff --check`, and headless Chromium keyboard smoke tests.

## Exploration evidence
- `layouts/partials/search-modal.html`: search input uses placeholder without a programmatic label; dialog and close names/prompts are hardcoded in Italian.
- `layouts/partials/theme-toggle.html`: group and button names are hardcoded in Italian.
- `assets/css/style.css`: `.search-input` suppresses its outline after a global focus rule.
- `assets/js/main.js`: image zoom opens only on click from a non-focusable image; the generated overlay is a plain `div`, lacks a close control, and only closes by clicking or Escape.
- `layouts/partials/footer.html`: footer heading levels begin at `h4`; defer unless the resulting structure can be corrected safely without visual changes.
- No contrast or touch-target failure was confirmed during the bounded read-only pass. Browser/assistive-technology verification remains required and must not be inferred from the build.

## Progress
- T2 privacy-notice verification is complete in `odd/tasks/polform-site-simplification.md`.
- T1 complete: search dialog/input/close and theme-control names are localized for all three locales; the search input has a programmatic label and a visible focus style. Hugo generated output and locale-specific accessible-name assertions passed.
- A writer accidentally reconstructed the tail of `i18n/it.toml`; we restored affected values using the saved pre-change Hugo output and initial task history. A new build comparison confirmed homepage visible text now differs only by the intended localized search additions.
- T2 complete: zoom images are keyboard triggers; runtime overlay has dialog semantics, localized names, visible close control, focus entry/containment/return, Escape, and retained backdrop/arrows behavior. Writer checks passed: `node --check assets/js/main.js`, Hugo minified build to `/tmp/polform-t2`, generated locale/marker assertions, and `git diff --check`.
- T3 complete. Hugo `--minify` build passed to `/tmp/polform-accessibility-final` with 32 IT, 31 EN, and 31 DE pages; `node --check assets/js/main.js` and `git diff --check` passed.
- Headless Chromium 154 smoke tests passed on generated pages: Ctrl+K search opens/closes; theme dark/light buttons update `data-theme` and active state; a temporary in-page `.zoomable` fixture opened via Enter and Space, exposed a dialog, focused the close control, wrapped Tab/Shift+Tab, navigated arrows, closed with Escape, and returned focus to the trigger. Fixture was temporary because generated content contains no `.zoomable` image.
- Static generated-output assertions confirmed localized search/theme/lightbox names in IT/EN/DE. No assistive technology, production deployed site, or full WCAG audit was performed.
