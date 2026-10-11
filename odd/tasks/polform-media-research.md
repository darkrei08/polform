# ODD Tasks: Research Images and Technical Sources

Feature: `polform-media-research`
Status: complete
Created: 2026-10-11
Issue: follow-up to approved site work; research-only, no website mutation authorized yet
Branch: `feat/hugo-localized-language-switch`

## Objective
Identify safe public image assets and first-party technical sources before adding media or publishing stronger material/certification claims.

## Constraints
- Research only until sources, reuse rights, and factual scope are reviewed.
- Do not download or add images without a clear ownership/license decision.
- Do not invent certificate numbers, test results, product ownership, or compliance conclusions.
- Preserve all existing dirty files; no commit, push, or publication.

## Tasks
- [x] T1: Research public image candidates and reuse terms.
- [x] T2: Map technical/material claims to primary sources and flag unsupported claims.
- [x] T3: Produce one cited Markdown report and propose the smallest safe next implementation.

## Current evidence
- Repository contains only `static/img/logo.gif` as a visual asset; no product photography is present.
- Technical claims are distributed across `content/materiali/`, `content/certificazioni*.md`, and `content/settori/`.
- Firecrawl CLI is not installed in the current environment; research uses the available web-search fallback and must record that limitation.

## Output
`reference/10-ricerca-fonti-immagini-schede.md`

## Evidence
- Downloaded with `curl` and validated: `reference/media-research/reticulated-foam-cc0.jpg` (CC0, 2560x1920) and `reference/media-research/open-cell-foam-public-domain.jpg` (Commons public-domain declaration, 2584x1936).
- SHA-256 hashes, source URLs, license notes, commands, technical-source mapping, and unsupported-claim warnings are recorded in the report and README.
- Neither image was promoted to `static/` or connected to website content. No technical claim was changed.
- Firecrawl CLI was unavailable; the report records the fallback to official web pages/API and the blocked ISO/CAM fetches.
