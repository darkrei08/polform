# Polform S.r.l. — Industrial Polyurethane Transformation & B2B Showcase

[![Deploy Hugo site to Pages](https://github.com/darkrei08/polform/actions/workflows/hugo.yml/badge.svg)](https://github.com/darkrei08/polform/actions/workflows/hugo.yml)
[![Live Site](https://img.shields.io/badge/Live_Site-darkrei08.github.io%2Fpolform-0b2545?style=flat&logo=github)](https://darkrei08.github.io/polform/)
[![Hugo Extended](https://img.shields.io/badge/Hugo-v0.131.0-ff4088?logo=hugo&logoColor=white)](https://gohugo.io/)
[![Guardian Angel](https://img.shields.io/badge/Guardian_Angel-v2.10.1_Passed-2ea44f?logo=shield)](https://github.com/darkrei08/polform)

> **Live Production Preview:** [https://darkrei08.github.io/polform/](https://darkrei08.github.io/polform/)

Industrial B2B showcase website, strategic market intelligence, and diversification architecture for **POLFORM S.r.l.** (Matera, Italy), built with **Hugo JAMstack** and a custom **Zero-Framework Design System**.

---

## 1. Executive Summary & Company Profile

**POLFORM S.r.l.** was founded in **January 1999** in Matera (Basilicata, Southern Italy) by three experienced partners:
* **Luciano Cirillo** — Corporate administration & commercial management
* **Francesco Tataranni** — Plant production & regional technical relations
* **Emanuele Cifarelli** — Operations & material procurement

Prior to founding Polform, the partners worked for more than a decade in senior operational and commercial roles in the largest polyurethane and dacron conversion facility in the Bari-Matera industrial district. With **over 27 years of uninterrupted activity** (and 37+ years of cumulative expertise), Polform specializes in CNC contour cutting, splitting, and bonding of flexible polyurethane foam.

* **Registered & Operating Plant:** Via Giovanni Agnelli s.n.c., Z.I. La Martella, 75100 Matera (MT), Italy
* **Historical Registered Office:** Via Rosselli 26 / Via Delle Arti 1, Matera
* **Tax Code / VAT:** IT00671260776
* **Direct Contacts:** Tel +39 0835 309182 · info@polform.com

---

## 2. Strategic Context: Overcoming the Upholstered Furniture Crisis

The historical **Matera - Murgia Upholstered Furniture District** (Matera, Santeramo in Colle, Altamura, Gravina in Puglia) is facing a structural contraction:
* Anchor manufacturers (e.g. Natuzzi) have downsized substantially, utilizing extraordinary redundancy schemes (CIGS up to 80% for ~1,800 workers, closing 3 out of 5 regional plants) amidst global outsourcing to Eastern Europe and Asia.
* Being an exclusive tier-2 supplier for residential sofas exposes foam processors to compressed margins, delayed payments, and single-sector vulnerability.

### The 8 Pillars of Industrial Diversification
Polform leverages its CNC wire and oscillating blade contour cutters, horizontal splitters, and bonding benches across 8 growing non-furniture markets:

1. **Technical Protective Packaging & Dunnage:** Custom CNC milled and wire-cut foam inserts for airtight cases (Explorer Cases, GT Line, Peli), precision optics, drones, and luxury wine packaging.
2. **Acoustic Insulation & Soundproofing:** Profiled convoluted/pyramidal sound-absorbing panels for recording studios, offices, restaurants, industrial equipment enclosures, and recycled bonded foam underlays.
3. **Workplace Safety & PPE:** Two-tone high-visibility shock absorbers for warehouse columns and loading docks, protective knee pad inserts for craftsmen, and reticulated filter foams (10–60 PPI).
4. **Marine & Yachting (Dryfeel Reticulated Foam):** Fully open-cell water-draining outdoor cushion foams for boat decks, yachts, and ribs that dry within minutes without mildew or rot; IMO FTP Part 8 fire-rated cabin mattresses.
5. **Healthcare & Silver Economy:** High Resilience (HR) and visco-elastic memory foam composite anti-decubitus cushions and orthopedic wedges (CE Medical Device Class I under EU MDR 2017/745).
6. **Agritech Machinery & Van Conversion:** Heavy-duty vibration-damping tractor cab seating for regional mechatronics manufacturers (CNH/Puglia cluster) and custom camper conversion mattresses.
7. **Sports & Fitness:** Crash pads for bouldering/gymnastics, high-density tatami cores for martial arts, and padded wall guards for schools.
8. **Visual Merchandising:** 3D foam letters and display structures for exhibitions, retail, and cinema productions in Matera.

---

## 3. Digital "Bridge Strategy" for Traditional Management

Polform's senior management relies on direct telephone and in-person relationships. Forcing a complex CRM dashboard would lead to operational friction. The portal deploys a **Direct Bridge Architecture**:

```
                       ┌───────────────────────────┐
                       │   DIGITAL BUYER / ENG     │
                       └─────────────┬─────────────┘
                                     │
                 ┌───────────────────┼───────────────────┐
                 ▼                   ▼                   ▼
          [Click-to-Call]    [Direct WhatsApp]   [Guided CAD Mailto]
                 │                   │                   │
                 ▼                   ▼                   ▼
         Calls Plant Landline  Direct Chat with   Pre-formatted Email
         +39 0835 309182       Production Staff   with attached .DXF/.PDF
```

* **Click-to-Call:** 1-tap call to the plant desk.
* **Pre-formatted WhatsApp (`wa.me`):** Pre-filled message identifying the consulted material sheet, enabling clients to send sample photos or voice notes directly to the shop floor.
* **Guided CAD Mailto:** Generates a pre-structured email draft directly inside the client's desktop mail application (Outlook, Gmail) with structured fields (Company, Quantity, Sector) and prompt to attach `.dxf`, `.dwg`, `.step`, or `.pdf` drawings directly to `info@polform.com`.
* **Polform Material Box:** A structured physical sample kit containing 10 representative foam swatches sent to architects and procurement managers, followed by a direct phone call from the partners.

---

## 4. Hugo Architecture & Zero-Framework Design System

Inspired by the lightweight static migration analyzed from *Le Alternative* (`blog.lealternative.it` / Codeberg):

* **Zero-Framework Native CSS:** No bloated runtime (no Bootstrap, no Tailwind). Styled with clean, maintainable CSS custom properties (`:root`).
* **System UI Typography:** Zero Google Fonts tracking, zero remote render-blocking requests (`ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto...`).
* **Instant Build Performance:** Entire 23-page site compiles in **~20 milliseconds** via Hugo Extended.
* **Automatic Dark/Light Mode:** Seamless switching via `@media (prefers-color-scheme: dark)`.
* **Semantic Color Tokens for Polyurethane Grades:**
  * `--brand-blue`: `#0b2545` (Industrial solid navy)
  * `--brand-accent`: `#f4a261` (Raw polyurethane amber)
  * `--foam-comfort`: `#e9c46a` (High Resilience HR)
  * `--foam-memory`: `#457b9d` (Visco-elastic Memory Foam)
  * `--foam-acoustic`: `#2b2d42` (Sound-absorbing Convoluted)
  * `--foam-nautical`: `#2a9d8f` (Dryfeel Reticulated Draining)
  * `--foam-flame`: `#e76f51` (Fire-retardant 1IM / Crib 5)

---

## 5. Quality & Technical Compliance Roadmap

| Standard | Scope | Target Market |
|---|---|---|
| **CertiPUR (EUROPUR)** | Chemical safety, zero heavy metals, low VOC | European furniture & bedding buyers |
| **OEKO-TEX® Standard 100** | Human ecological safety (Class I / II) | Orthopedic pillows & nursery foam |
| **Classe 1IM (UNI 9175)** | Italian Home Office fire reaction certificate | Hotels, theaters, public venues, trains |
| **BS 5852 Crib 5** | British wooden crib flammability test | UK & international luxury hospitality |
| **IMO FTP Code Part 8** | Marine safety flammability | Superyachts & cruise ship contract |
| **ISO 9001:2015** | Process quality & CNC cutting tolerances | Precision mechanics & automotive |
| **MDR (EU 2017/745)** | CE Medical Device Class I | Anti-decubitus cushions & healthcare tenders |

---

## 6. Industrial Confidentiality & Security Policy

* **Strict Protection of Trade Secrets:** Under no circumstances may proprietary customer CAD files (`.step`, `.dwg`), customized tooling geometries, chemical formulation ratios, or Non-Disclosure Agreement (NDA) contracts be committed to git or uploaded to public clouds.
* **GitHub User-Attachments Policy (`gh-attach`):** The `gh-attach` CLI extension is strictly reserved for general marketing assets (plant facilities photos, public swatch samples, general marketing brochures). Never upload proprietary customer drawings to GitHub attachments.

---

## 7. Project Structure

```text
polform/
├── .github/workflows/hugo.yml     # Automated CI/CD deployment to GitHub Pages
├── .gga                           # Gentleman Guardian Angel (Gemini AI code review)
├── AGENTS.md                      # Operational guidelines & confidentiality policies
├── assets/css/style.css           # Zero-framework responsive B2B Design System
├── content/
│   ├── _index.md                  # Homepage
│   ├── chi-siamo.md               # 1999 Company heritage & facilities
│   ├── certificazioni.md          # Technical certifications & standards
│   ├── preventivo.md              # Direct RFQ, CAD upload & WhatsApp bridge
│   ├── settori/                   # Industrial applications (packaging, acoustics, nautical, safety)
│   └── materiali/                 # Technical foam data sheets (HR, Memory, Dryfeel, Bugnato, 1IM)
├── layouts/                       # Hugo HTML templates (baseof, home, list, single, partials)
├── odd/tasks/                     # Organic Driven Development task ledger
├── reference/                     # In-depth strategic & market intelligence dossiers (Italian)
│   ├── 01-design-system-hugo-lealternative.md
│   ├── 02-analisi-polform-e-crisi-distretto-imbottito.md
│   ├── 03-mappatura-competitor-locali-nazionali.md
│   ├── 04-benchmark-portali-egoitaliano-plasticpuglia.md
│   ├── 05-certificazioni-qualita-e-valore-marchio.md
│   ├── 06-matrice-diversificazione-industriale.md
│   ├── 07-matchmaking-b2b-e-filiere-target.md
│   ├── 08-strategia-digitale-transizione-b2b.md
│   ├── CHANGELOG.md               # Version history & research tracking
│   └── README.md                  # Reference dossier navigation map
├── static/img/                    # Static assets & historical 1999 logo
└── hugo.toml                      # Hugo configuration & menu definitions
```

---

## 8. Local Development

To run the site locally:

```bash
# Clone the repository
git clone https://github.com/darkrei08/polform.git
cd polform

# Run with Hugo Extended
hugo server -D
```

Open `http://localhost:1313/` in your browser.

---

## 9. License & Credits

* **Content & Strategy:** © 1999–2026 POLFORM S.r.l. All rights reserved.
* **Code & Architecture:** Open-source Hugo implementation under the MIT License.
