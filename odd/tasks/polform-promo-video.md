# ODD Tasks: HyperFrames GitHub Promo Video

Feature: `polform-promo-video`
Status: in progress
Created: 2026-10-11
Issue: follow-up to approved site work; user explicitly requested video production and publication
Branch: `feat/hugo-localized-language-switch`

## Inferred brief
- Route: HyperFrames `product-launch-video`.
- Intent: sell/showcase Polform's multilingual industrial site to GitHub readers and prospective B2B buyers.
- Format: 45 seconds, 16:9, English on-screen copy for international GitHub audience.
- Brand: preserve Polform navy/amber industrial palette; use real site capture and research-approved generic foam imagery only as illustrative material.
- Run shape: automation, no storyboard unless workflow requires a review sheet.

## Tasks
- [x] T1: Initialize HyperFrames project and capture the site/brand inputs.
  Evidence: `video/polform-github-promo/hyperframes.json`, `BRIEF.md`, `capture/`; capture returned `ok: true`, HTTP 200, 8 screenshots, 28 assets.
- [x] T2: Build and validate the promo composition.
  Evidence: six frame compositions under `video/polform-github-promo/compositions/frames/`; assembled 45s index; transitions verified; `npx hyperframes check` passed with 0 errors and 0 warnings (30 informational layout notes remain).
- [x] T3: Preview, render, verify MP4, and prepare GitHub publication artifact.
  Evidence: preview reviewed; `renders/video.mp4` is 1920×1080, H.264, 30fps, 45.0s, 11.0 MB; `ffprobe` passed.
- [x] T4: Publish only after final preview/render evidence and ordinary repository delivery checks.
  Evidence: HyperFrames project published; project id `8495111e-b040-4291-a345-7cadc3aaa0c9`. HyperFrames reports sign-in required to claim/edit the public project; the one-time claim URL was emitted by the publish command and is not stored in repository memory.

## Constraints
- Do not present generic Wikimedia foam images as Polform product photos.
- Keep citations/attribution with any research image used.
- Do not publish a rendered video or push repository changes before the final preview and delivery checks.
- User explicitly approved render and publication on 2026-10-11; no additional approval gate is required for this feature run.
- Preserve all existing Hugo worktree changes.
