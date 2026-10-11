# 04. Benchmark Portali e Design System: Egoitaliano, Plastic Puglia e Sintesi Hugo B2B

## 1. Analisi Comparativa dei Portali Territoriali Limitrofi

Per posizionare Polform con un'identità digitale contemporanea, sono stati analizzati due casi di successo industriale del territorio apulo-lucano (Egoitaliano a Matera e Plastic Puglia a Monopoli), mettendoli a confronto con il modello architetturale Hugo di *Le Alternative*.

### 1.1 Egoitaliano (Matera) — `egoitaliano.com`
* **Settore:** Divani, poltrone e complementi d'arredo pop e personalizzabili.
* **Stack Tecnologico:** WordPress 5.9.x, WPML (multilingua), Redux Framework, jQuery 3.6, Snazzy Maps, fogli di stile ed estensioni proprietarie per configuratori e showroom.
* **Design System ed Esperienza Utente (UX/UI):**
  * *Palette e Mood:* Esplosione di colore, linguaggio pop, oltre 550 varianti di pelli e tessuti. Tipografia moderna, visual audace, forte componente emozionale e lifestyle.
  * *Visual Storytelling:* Fotografia ad altissima definizione, cataloghi sfogliabili, localizzatore negozi (*Store Locator*), configuratore 3D.
  * *Target:* Consumer di fascia medio-alta e rivenditori d'arredo (B2B2C).
* **Criticità Tecniche Rilevate:**
  * Peso pagina notevole (asset multipli, script jQuery e librerie esterne che rallentano il First Contentful Paint).
  * Debito tecnico tipico di WordPress: necessità di patch di sicurezza costanti, rischio vulnerabilità plugin, costi di hosting su macchine dedicate.

### 1.2 Plastic Puglia (Monopoli) — `plasticpuglia.com`
* **Settore:** Sistemi di irrigazione a goccia, tubazioni in polietilene e tecnologie agritech.
* **Stack Tecnologico:** WordPress, Elementor Page Builder, WPML, Contact Form 7, Site Kit Google.
* **Design System ed Esperienza Utente (UX/UI):**
  * *Struttura B2B Classica:* Catalogo organizzato per schede prodotto rigide (ali gocciolanti, filtri, condotte). Presenza massiccia di tabelle dimensionali e specifiche idrauliche.
  * *Credibilità Istituzionale:* Forte risalto alla storia cinquantennale (fondata nel 1971 dal Barone Colucci), brevetti registrati, premi e certificazioni ISO 9001 / ISO 14001 esposte in primo piano.
  * *Target:* Imprese agricole, consorzi di bonifica, ingegneri idraulici, importatori esteri (B2B).
* **Criticità Tecniche Rilevate:**
  * "DOM Bloat" causato da Elementor (decine di livelli di `div` annidati per semplici griglie).
  * Caricamento non ottimizzato su dispositivi mobili in mobilità; form di contatto generici privi di filtri di qualificazione del lead.

---

## 2. Matrice di Confronto: WordPress vs. Hugo per Polform

| Parametro | Egoitaliano (WP Custom) | Plastic Puglia (WP + Elementor) | Polform su Hugo (Proposta B2B) |
|---|---|---|---|
| **Tempo di caricamento (LCP)** | 2.5s – 4.2s (Medio/Lento) | 3.0s – 5.0s (Lento) | **< 0.6s (Istantaneo)** |
| **Costo Manutenzione / Anno** | Alto (aggiornamenti core/plugin) | Medio/Alto (rottura layout post-update) | **Zero (compilazione statica Git)** |
| **Sicurezza / Vulnerabilità** | Rischio SQL injection, exploit WP | Rischio form injection, plugin breach | **Inattaccabile (zero database, zero PHP)** |
| **Ricerca Prodotti/Materiali** | Ricerca database con delay | Filtri lenti AJAX | **Pagefind WebAssembly (< 10ms)** |
| **Schede Tecniche / Dati** | Spesso in PDF non indicizzati | Tabelle statiche pesanti | **Markdown puro + tabelle reattive native** |
| **Conversione Lead Tecnico** | B2C Store locator | Form generico email | **Configuratore RFQ + Upload DXF/CAD + Click-to-WhatsApp** |

---

## 3. Definizione del Design System "Polform B2B Industrial"

Ispirandosi alla pulizia rigorosa di *Le Alternative* e combinandola con l'autorità tecnica di *Plastic Puglia* e il rigore visivo di *Egoitaliano*, definiamo il Design System per il sito vetrina di Polform:

### 3.1 Token di Stile e Colore (Palette "Industrial Polyurethane")

```css
:root {
  /* Brand Identitario: Blu Tecnico Ingegneristico & Giallo Poliuretano */
  --polform-blue: #0b2545;       /* Blu notte profondo: solidità, precisione, industria */
  --polform-blue-ink: #07192f;
  --polform-accent: #f4a261;     /* Ambra/Giallo espanso: richiama il blocco di poliuretano grezzo */
  --polform-accent-ink: #d06d22;
  
  /* Codici Colore Semantici per Categorie di Schiuma */
  --foam-comfort: #e9c46a;       /* Giallo: schiume standard e alta resilienza per arredo */
  --foam-memory: #457b9d;        /* Celeste/Avio: schiume viscoelastiche memory */
  --foam-acoustic: #2b2d42;      /* Antracite/Grafite: schiume fonoassorbenti e bugnate */
  --foam-reticulated: #2a9d8f;   /* Verde acqua/Smeraldo: schiume drenanti per nautica */
  --foam-flame: #e76f51;         /* Rosso ruggine: schiume ignifughe certificate 1IM / Crib 5 */
  --foam-packaging: #8d99ae;     /* Grigio metallo: polietilene e PU tecnico per packaging */

  /* Superfici e Testo (Light Mode) */
  --bg: #f8f9fa;
  --surface: #ffffff;
  --surface-2: #f1f3f5;
  --text: #1a1a24;
  --muted: #5c677d;
  --border: #e2e8f0;
  --radius: 8px;                 /* Raggio tecnico sobrio (non gommoso, non affilato) */
  
  /* Tipografia */
  --font-sans: ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", sans-serif;
  --font-mono: ui-monospace, "SF Mono", "Cascadia Code", monospace; /* Per densità, tolleranze, portanze */
}

@media (prefers-color-scheme: dark) {
  :root {
    --bg: #0d1117;
    --surface: #161b22;
    --surface-2: #21262d;
    --text: #f0f6fc;
    --muted: #8b949e;
    --border: #30363d;
    --polform-blue: #388bfd;
  }
}
```

### 3.2 Principi di Layout e Componenti Funzionali

1. **Header Tecnico con Richiamo Immediato al Contatto:**
   * Logo Polform a contrasto elevato.
   * Menu compatto: *Settori d'Impiego*, *Catalogo Materiali*, *Lavorazioni CNC*, *Certificazioni*, *Contatti*.
   * Pulsante di azione primaria fisso (*Call-To-Action*): **"Richiedi Campionatura / Preventivo CAD"** e icona **WhatsApp Diretto con il Tecnico**.
2. **Scheda Prodotto "Material Spec Sheet":**
   * Ogni tipologia di espanso (es. *HR 35*, *Memory Breeze 50*, *FonoBugnato 30*, *Ignifugo 1IM*) presenta una testata visiva con macrofotografia della cellula aperta, seguita da una tabella essenziale:
     * *Densità apparente* (kg/m³ - ISO 845)
     * *Portanza / Indentazione 40%* (kPa - ISO 2439)
     * *Resa elastica / Deformazione residua* (%)
     * *Classe di reazione al fuoco* (1IM / Crib 5 / UL94)
     * *Settori raccomandati* con badge colorati
3. **Selettore per Settore Applicativo:**
   * Sezione a schede o griglia che guida l'utente in base alla sua industria di appartenenza: *Arredo*, *Imballaggi Protettivi*, *Isolamento Acustico*, *Nautica*, *Dispositivi Medici*, *Sicurezza Industriale*.
4. **Modulo di Conversione Lead "Smart Request" (Senza Database):**
   * Form statico integrato con Formspree / Netlify Forms:
     * Dropdown settore di destinazione.
     * Upload opzionale file tecnico (`.dxf`, `.dwg`, `.step`, `.pdf`).
     * Checkbox per richiesta di campionatura fisica.
     * Reindirizzamento opzionale verso chat WhatsApp pre-compilata.
