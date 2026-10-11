# ODD Tasks: Simplify Polform Website Copy and Privacy Information

Feature: `polform-site-simplification`
Status: complete
Created: 2026-10-11
Issue: [#2](https://github.com/darkrei08/polform/issues/2) (approved; issue closure remains a maintainer decision)
Branch: `master` (published at commit `294a92f`)

## Objective
Make the public-facing Hugo site easier for industrial buyers to understand, while keeping technical specifications available and keeping privacy/AI statements limited to evidence-backed facts.

## Constraints
- Italian is the default content language; maintain English and German translations.
- Preserve the user's existing translation files and all current uncommitted changes.
- Do not add consent-management software, tracking, runtime dependencies, or third-party embeds without a verified need.
- Do not present legal conclusions or company/vendor practices as facts without evidence.
- Do not commit, push, publish, or merge without explicit user authorization.

## Tasks
- [x] T1: Simplify homepage copy in Italian, English, and German while retaining technical details in the catalog and tables.
  - Status: copy implementation complete in the three locale files; verification is reserved for the separate verifier as requested.
  - Allowed edit surfaces: `layouts/_default/home.html`, `i18n/it.toml`, `i18n/en.toml`, `i18n/de.toml`.
  - Check: Hugo build plus text checks against generated homepages; not run in this implementation task.
- [x] T2: Make privacy and AI Act pages concise and fact-based in all three languages.
  - Verification: `hugo --minify --destination /tmp/polform-privacy-final` passed (32 IT / 31 EN / 31 DE); `git diff --check` passed; direct trailing-whitespace grep found no matches in the three notices. Contact blocks and wording scope align across locales; no legal review or external fact validation was performed.
  - Allowed edit surfaces: `content/privacy-policy.md`, `content/privacy-policy.en.md`, `content/privacy-policy.de.md`.
  - Do not invent retention periods, DPO status, vendor DPAs/transfers, or company AI use. Record unresolved facts and ask the controller before making binding claims.
  - Check: Hugo build, language-parity/content review, and exact source-backed statements.

## Acceptance criteria
- `hugo --minify --destination /tmp/polform-public` succeeds.
- Generated homepages in all three languages use plain buyer-friendly language; technical values remain accessible in technical sections.
- Privacy pages distinguish actual site behavior from information that requires controller/vendor confirmation.
- No unverified legal, retention, AI-use, or international-transfer assertion is published.
- `git diff --check` passes.

## Evidence and progress
- Issue #2 was created and then explicitly approved by the user; target-host readback confirmed `status:approved` on 2026-10-11.
- The previous working tree already contained uncommitted homepage/localization/accessibility changes; do not overwrite unrelated edits.
- Previous Hugo build after localization/privacy edits succeeded: 32 IT / 31 EN / 31 DE pages.
- T1 verifier evidence: `hugo --minify --destination /tmp/polform-copy-check` exited 0 (32 IT / 31 EN / 31 DE); `git diff --check` exited 0. Generated IT/EN/DE homepages contain localized plain-language hero, sector, and contact copy; the comparison table retains technical values and ISO/fire references.
- Fresh Chromium checks loaded IT/EN/DE homepage, sector, material, and privacy routes with HTTP 200 and expected localized language/H1. Generated HTML contains no external script/style URLs; expected WhatsApp links and the GitHub Pages canonical URL remain.
- A live network audit and external legal review were not performed; the site copy remains deliberately scoped to observable site behavior and controller-confirmable facts.
- Privacy pages previously acquired unsupported claims about DPO exemption, provider transfer safeguards, retention periods, and factory AI use. These must be checked and removed or qualified before publication.
- Provider research: current DNS MX is `10 in.arubabusiness.it.` and SPF includes `_spf.arubabusiness.it`, indicating Aruba Business handles Polform email routing. Aruba Business's official privacy notice v2.5 (2025-07-07) states its mail-service traffic data is retained six years and its service logs up to 12 months; those are provider metadata/log periods, not the retention period for Polform's email contents or CAD attachments.
- Hosting research: the repository deploys to GitHub Pages. GitHub says Pages visitor IPs are logged for security; its general privacy statement describes EU transfer safeguards (DPF/SCCs). Cloudflare is not evidenced in the current source and must not be listed as a Polform provider without evidence.
- Website AI scope: scanned source has no chatbot or automated visitor decisions. This supports only a website-level statement, not claims about AI use in factory operations or staff communications.
- Retention rule for the notice: state criteria rather than inventing durations for inquiries/CAD: retain while needed to handle the request and any resulting relationship, then delete or restrict unless a legal obligation or claim requires retention. Accounting records follow applicable statutory retention. Keep Aruba's metadata retention clearly separate.
- Unverified internal facts (e.g. company-wide AI use and exact contractual roles) must not be asserted; keep public wording scoped to evidenced site behavior and link to provider notices.

## Completion
T1 and T2 are complete within the approved static-site scope on published `master` commit `294a92f`. No consent manager, tracker, runtime dependency, or unsupported legal claim was added. A live network audit and external legal review remain outside this task and must not be inferred from the static checks.
