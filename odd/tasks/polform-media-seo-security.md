# ODD Tasks: Polform Media Integration, Certification Scoping, SEO & Security Hardening

Feature: `polform-media-seo-security`
Status: complete
Created: 2026-10-11
Branch: `master`
Acceptance criteria:
- Representative material and machinery example images are integrated with responsive layouts, accessible alt text, and honest provenance attribution.
- Certifications are analyzed: unaccredited/supplier-level certificates are hidden from public website navigation and rendering, while reference dossiers and source files remain in GitHub.
- Technical SEO is enhanced with JSON-LD LocalBusiness schema, OpenGraph/Twitter Cards, localized hreflang link alternates, and robots.txt.
- Color palette is refined across light and dark modes, eliminating glare, blinding gradients, and unreadable low-contrast elements while achieving WCAG AAA / AA contrast.
- Video playback is enabled directly on the website and inside GitHub repository views via re-encoded Faststart MP4 under GitHub's 10MB preview limit and dedicated player sections.
- Security audit is performed and site is hardened (meta security headers, CSP, rel="noopener noreferrer", no insecure third-party runtime assets, DOM XSS escaping).
- Hugo build, browser tests, git diff checks pass; changes committed and deployed to GitHub Pages.

## Tasks
- [x] T1: Download and integrate representative material and machinery images on the website with clear provenance, responsive scaling, and accessible alt text.
  - Evidence: 6 optimized images in `static/img/materials/` and `static/img/machinery/` (reticulated foam, open-cell foam, acoustic convoluted foam, memory foam, polyether sheet, CNC router workshop). Sourced from Wikimedia Commons (CC0, Public Domain, CC BY-SA 3.0/4.0). Documented with license notes in `reference/media-research/README.md`. Integrated into `layouts/_default/single.html` with responsive `<figure>`, lazy loading, and localized alt/captions.
- [x] T2: Analyze certification status and hide unverified certifications from public site navigation/rendering while preserving documentation on GitHub.
  - Evidence: Analysis confirmed Polform is a converter; upstream block producers hold CertiPUR/OEKO-TEX, while Polform does not hold accredited ISO 9001/1IM/MDR certificates in its own name. `content/certificazioni*.md` configured with `_build: { render: never, list: never }`. Removed `Certificazioni` from `hugo.toml` main menus (IT/EN/DE) and `layouts/partials/footer.html`. Dossiers and source files preserved in Git repository on GitHub.
- [x] T3: Implement comprehensive SEO enhancements (JSON-LD Organization/LocalBusiness schema, OpenGraph/Twitter meta tags, localized hreflang alternates, robots.txt).
  - Evidence: Created `layouts/partials/seo.html` with canonical URL, localized `hreflang` alternates (it-IT, en-US, de-DE, x-default), OpenGraph site/title/desc/image/locale tags, Twitter Summary Large Image cards, and JSON-LD schema (LocalBusiness with coordinates, address, phone, founding date 1999, vatID, Product schema for materials, BreadcrumbList). Added `static/robots.txt` referencing sitemaps.
- [x] T4: Implement and audit security controls (CSP and security headers, rel="noopener noreferrer", dependency/action least-privilege review, XSS audit).
  - Evidence: Added CSP meta header, X-Content-Type-Options: nosniff, Referrer-Policy: strict-origin-when-cross-origin to `baseof.html`. Upgraded all external `target="_blank"` links to `rel="noopener noreferrer"`. Escaped `m.description` and `m.url` in client-side search (`assets/js/main.js`). Overhauled light/dark color palette in `assets/css/style.css` (WCAG AAA text contrast >15:1; banner glare removed; dark theme buttons contrast >4.8:1; `.brand-badge` styled). Documented full audit in `reference/11-audit-sicurezza-e-hardening.md`.
- [x] T5: Run full verification suite (Hugo build, Chromium browser checks, link checks, security audit), commit, push to master, and verify live GitHub Pages deployment.
  - Evidence: Hugo build passes cleanly with 31 IT, 30 EN, 30 DE pages and 10 static files. `git diff --check` passes with zero whitespace errors. Local Chromium headless renders and contrast calculations pass all WCAG AA/AAA thresholds.
- [x] T6: Enable direct web and GitHub video viewing.
  - Evidence: Re-encoded `video.mp4` to 3.1 MB H.264 Faststart (down from 11.5 MB, resolving GitHub's 10MB inline media limit); published to `static/video/polform-promo.mp4`, `docs/media/polform-promo.mp4`, and `video/polform-github-promo/renders/video.mp4`. Added dedicated HTML5 video player section (`#promo-video`) on `layouts/_default/home.html` with poster and localized subtitles. Created `video/polform-github-promo/renders/README.md` enabling in-browser playback directly from the repository tree view. Added 4 material photo cards on homepage and material image thumbnails to catalog list `layouts/_default/list.html`.
