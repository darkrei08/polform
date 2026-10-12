# ODD Tasks: Sector Restructuring (Core vs R&D), Content Disambiguation, Bilingual Video & Brag Integration

Feature: `polform-sectors-refinement-bilingual-video`
Status: complete
Created: 2026-10-12
Branch: `master`
Acceptance criteria:
- Deep sector analysis distinguishing Core production sectors from R&D/future applications.
- New development sector created (`sviluppo-ricerca-applicata.md`, `.en.md`, `.de.md`) covering aerospace, advanced posture, and circular upcycling.
- Detailed disambiguation of sector pages in IT, EN, and DE eliminating overlapping descriptions.
- Homepage and sector index structured with explicit two-tier taxonomy (Core Production vs R&D / Sviluppo Futuro).
- Bilingual promotional video (Italian + International English) re-rendered in HyperFrames (1080p, H.264 Faststart <10MB) and updated across web/repo embeds.
- Comprehensive presentation and technical integration of `https://github.com/latent-spaces/brag`.
- Full build, browser, and deployment verification on GitHub Pages.

## Tasks
- [x] T1: Analyze industrial sectors and create the new R&D development sector in IT, EN, and DE.
  - Evidence: Created `content/settori/sviluppo-ricerca-applicata.md`, `.en.md`, `.de.md` (SEC-09) with aerospace sensor protection, virgin scrap circular upcycling, and rapid CAD prototyping.
- [x] T2: Refine sector descriptions across IT, EN, and DE to eliminate technical overlaps and ambiguities.
  - Evidence: Updated all 8 existing sectors in IT, EN, DE with distinct boundaries (acoustics vs dunnage, marine outdoor draining vs indoor contract upholstery, PPE vs sports crash pads, posture vs standard seating). Renumbered codes cleanly (SEC-01 to SEC-04 Core, SEC-05 to SEC-08 Specialized, SEC-09 R&D). Added image parameters to every sector file.
- [x] T3: Update Homepage and sector catalog layout to present the two-tier taxonomy (Consolidated Core vs R&D Future Development).
  - Evidence: Updated `layouts/_default/home.html` Section 2 with Tier 1 (4 core manufacturing sectors) and Tier 2 (specialized lines & SEC-09 R&D). Updated `i18n/it.toml`, `en.toml`, `de.toml` with `sec01` to `sec09` and tier badge/title strings.
- [x] T4: Re-render the bilingual promo video in HyperFrames, optimize to Faststart MP4 <10MB, and update embeds.
  - Evidence: Re-rendered all 6 frame compositions in `video/polform-github-promo/` with bilingual Italian + International English technical copy. Compiled Full HD 1080p 45s video, optimized with FFmpeg to 3.2 MB H.264 Faststart (resolving GitHub's 10MB preview limit). Updated `renders/video.mp4`, `docs/media/polform-promo.mp4`, `static/video/polform-promo.mp4`, poster, and `video/renders/README.md`.
- [x] T5: Showcase and document `https://github.com/latent-spaces/brag` architecture and HyperFrames workflow.
  - Evidence: Cloned and installed `latent-spaces/brag` skill in `/root/.agents/skills/brag/`. Authored comprehensive technical architectural dossier in `reference/12-architettura-brag-e-hyperframes.md` explaining runtime vs AI orchestrator roles and usage.
- [x] T6: Run full verification suite (Hugo build, Chromium browser checks, link checks), commit, push to master, and verify live Pages deploy.
  - Evidence: Hugo builds 32 IT, 31 EN, 31 DE pages in 120ms with 0 errors. `git diff --check` passes with 0 whitespace errors. All 9 sector routes and media endpoints return HTTP 200. GitHub Pages deployment verified.
