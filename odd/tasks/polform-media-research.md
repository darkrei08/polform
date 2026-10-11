# ODD Tasks: Research Images and Technical Sources

Feature: `polform-media-research`
Status: complete
Created: 2026-10-11
Issue: follow-up to approved site work; research deliverable complete, website media integration remains separately scoped
Branch: `master` (published at commit `294a92f`)

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
- The original site baseline contained only `static/img/logo.gif`; the published repository now also contains explicitly sourced research images under `reference/media-research/` and captured/video assets under `video/`.
- Technical claims are distributed across `content/materiali/`, `content/certificazioni*.md`, and `content/settori/`.
- Firecrawl CLI is not installed in the current environment; research uses the available web-search fallback and records that limitation.

## Output
`reference/10-ricerca-fonti-immagini-schede.md`

## Evidence
- Downloaded with `curl` and validated: `reference/media-research/reticulated-foam-cc0.jpg` (CC0, 2560x1920) and `reference/media-research/open-cell-foam-public-domain.jpg` (Commons public-domain declaration, 2584x1936).
- SHA-256 hashes, source URLs, license notes, commands, technical-source mapping, and unsupported-claim warnings are recorded in the report and README.
- Neither research image was promoted to `static/` or presented as Polform product photography. No technical claim was changed by this research task.
- Firecrawl CLI was unavailable; the report records the fallback to official web pages/API and the blocked ISO/CAM fetches.
- The later promo-video task uses captured site assets and retains the research restriction against presenting generic imagery as Polform product photography.
