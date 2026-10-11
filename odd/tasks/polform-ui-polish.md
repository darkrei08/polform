# ODD Tasks: Polish Colors and Mobile Header

Feature: `polform-ui-polish`
Status: complete
Created: 2026-10-11
Issue: follow-up to approved site work; preserve current brand and make only evidence-backed UI corrections
Branch: `feat/hugo-localized-language-switch`

## Objective
Review the existing navy/amber design tokens and reduce mobile header height caused by wrapped actions, without replacing the site's visual identity.

## Constraints
- Preserve the existing industrial B2B visual language unless a concrete contrast or consistency defect is found.
- Do not infer styles from the unavailable Claude artifact; it returned Page not found by curl and headless Chromium.
- Keep the mobile header keyboard-accessible and preserve the mobile dock CTA.
- No new dependencies, images, or broad redesign.

## Tasks
- [x] T1: Fix mobile header action wrapping and excess vertical space.
  - Allowed edit surface: `assets/css/style.css`.
  - Evidence: `.nav-btn` is hidden at the existing 768px mobile breakpoint; 390px Chromium screenshot shows compact brand/action rows plus the mobile dock CTA, with no duplicate desktop CTA.
- [x] T2: Review current light/dark color tokens and run contrast/build/browser checks; change colors only if a concrete defect is confirmed.
  - Evidence: Hugo minified build passed; Chromium screenshots captured at 390px and 1280px; `git diff --check` passed; Impeccable detector found one pre-existing warning at `assets/css/style.css:380` (`border-left: 4px solid var(--brand-accent)`), outside this task's changed scope, so no speculative color rewrite was made.

## Evidence
- Current 390px screenshot showed three header rows because `.header-actions-group` wraps the desktop CTA onto a third row.
- Current palette is navy `#0b2545` / amber `#f4a261` in light mode and blue-orange dark mode; no color change is authorized from the inaccessible external reference alone.
