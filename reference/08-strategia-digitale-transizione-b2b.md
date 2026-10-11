# 08. Strategia di Transizione Digitale e Architettura Hugo B2B

## 1. La Sfida Organizzativa: Conciliare l'Anima Telefonica con il Mercato Digitale

I soci fondatori di Polform incarnano la migliore tradizione manifatturiera italiana: pragmatismo, altissima conoscenza della materia prima, relazione diretta e preferenza consolidata per il **contatto telefonico e personale**.

Imporre a questa realtà un CRM complesso (HubSpot, Salesforce) o un portale e-commerce pesante significherebbe andare incontro al rigetto operativo.
La strategia vincente è invece la **"Tecnologia Ponte" (Bridge Strategy)**: il sito web moderno deve generare lead digitali qualificati da tutta Italia ed Europa, ma **incanalarli immediatamente nello strumento che i titolari già sanno usare con maestria: il telefono e WhatsApp**.

---

## 2. I Meccanismi di Conversione "Ponte" nel Sito Vetrina

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                       IL FLUSSO DI CONVERSIONE PONTE                        │
├─────────────────────────────────────────────────────────────────────────────┤
│  UTENTE DIGITALE                   SITO VETRINA HUGO         SOCI POLFORM   │
│  (Ingegnere / Buyer B2B)                                     (Luciano/Fr.)  │
│                                                                             │
│  Visita da Google o LinkedIn ───►  Scheda Tecnica Espanso                   │
│                                           │                                 │
│                                           ├──► [Chiama Ora] ──────► TELEFONO│
│                                           │    (Click-to-Call)      (Immediato)
│                                           │                                 │
│                                           ├──► [WhatsApp] ────────► WHATSAPP│
│                                           │    (Messaggio pre-impostato)    │
│                                           │                                 │
│  Invia file DXF/CAD          ───►  Modulo RFQ Statico ────► SMS / EMAIL     │
│  per preventivo                   (Formspree / Netlify)    (Con disegno)    │
│                                           │                                 │
│                                           ▼                                 │
│                                    Richiesta Sample Box                     │
│                                    (Spedizione campionario fisico)          │
│                                           │                                 │
│                                           ▼                                 │
│                                    Telefonata di follow-up dei soci!        │
└─────────────────────────────────────────────────────────────────────────────┘
```

### 2.1 Click-to-Call e WhatsApp Business Diretto
In ogni pagina, scheda materiale o servizio di taglio, sono sempre visibili in posizione fissa (sticky su mobile):
* **Pulsante "Chiama lo Stabilimento" (+39 0835 309182):**
  L'utente mobile avvia istantaneamente la chiamata vocale con un solo tocco.
* **Pulsante "WhatsApp Tecnico" (Chat Immediata):**
  Apre WhatsApp con un messaggio precompilato contestuale, ad esempio:
  > *"Salve, sto consultando la scheda 'Poliuretano Fonoassorbente Bugnato 30' sul sito Polform. Vorrei maggiori informazioni su disponibilità e fattibilità per una fornitura."*
  I soci ricevono la notifica sul proprio smartphone senza dover accedere a complessi pannelli di controllo.

### 2.2 Modulo Preventivo con Upload File Tecnico (RFQ Statico)
Per gli acquirenti industriali e gli studi di progettazione che necessitano di quotazioni da disegno tecnico:
* Form HTML leggero e statico (gestito tramite endpoint serverless come Formspree, Netlify Forms o Cloudflare Workers, a costo zero).
* Campi mirati: *Nome Azienda, Settore (Packaging / Acustica / Nautica / Contract / Altro), Quantità stimata, Note dimensionali*.
* **Upload Disegno:** accettazione di file `.dxf`, `.dwg`, `.step`, `.pdf`.
* All'invio, il sistema inoltra automaticamente un'email con allegato alla casella `info@polform.com` e può inviare un SMS di notifica al responsabile di produzione:
  > *"Nuova richiesta preventivo da Rossi Packaging (Milano) con allegato file DXF per 300 pezzi."*

### 2.3 Il Cofanetto Fisico: "Polform Material Box"
Nel settore del poliuretano, l'acquisto si conclude quando il cliente **tocca con mano** la morbidezza, la resilienza, la portanza e la memoria elastica.
* Sul sito viene inserita la Call-To-Action: **"Richiedi il Cofanetto Campioni Materici Polform"**.
* Riservato ad aziende, architetti e studi tecnici con Partita IVA.
* Il cofanetto contiene 8–10 tasselli sagomati rappresentativi:
  * 1 blocco High Resilience 35 (giallo)
  * 1 blocco Memory Viscoelastico (celeste)
  * 1 tassello fonoassorbente piramidale/bugnato (antracite)
  * 1 tassello reticolato drenante Dryfeel (nautica)
  * 1 tassello ignifugo certificato 1IM (arancio)
  * 1 tassello agglomerato ad alta densità (sottomassetto/sport)
* **La leva commerciale:** 3 giorni dopo la consegna del cofanetto, parte la telefonata diretta di Luciano o Francesco: *"Buongiorno Architetto, le è arrivato il nostro kit? Ha potuto saggiare la consistenza del viscoelastico?"*. È la fusione perfetta tra digital marketing moderno e chiusura della vendita artigianale.

---

## 3. Architettura Tecnica del Sito Statico Hugo

Seguendo le lezioni di *Le Alternative*, il sito di Polform viene progettato con la massima efficienza e indipendenza tecnologica:

### 3.1 Struttura del Repository Hugo

```text
polform-site/
├── config.toml                 # Configurazione Hugo, metadati SEO, multilingua (it, en)
├── archetypes/
│   ├── materiali.md            # Template per nuove schede materiale
│   └── lavorazioni.md          # Template per lavorazioni CNC
├── content/
│   ├── _index.md               # Homepage (Hero industriale, 8 settori, badge qualità)
│   ├── chi-siamo.md            # Storia, maestria artigianale dal 1990, stabilimento La Martella
│   ├── settori/                # Sezioni verticali di mercato
│   │   ├── packaging-tecnico.md
│   │   ├── acustica-fonoassorbimento.md
│   │   ├── nautica-yachting.md
│   │   ├── sicurezza-dpi.md
│   │   ├── sanita-ortopedia.md
│   │   └── contract-arredo.md
│   ├── materiali/              # Catalogo schede tecniche con Pagefind
│   │   ├── espanso-standard-pu.md
│   │   ├── alta-resilienza-hr.md
│   │   ├── memory-viscoelastico.md
│   │   ├── drenante-nautico.md
│   │   ├── fonoassorbente-bugnato.md
│   │   └── ignifugo-1im-crib5.md
│   ├── certificazioni.md       # CertiPUR, OEKO-TEX, 1IM, ISO 9001
│   └── preventivo-contatti.md  # Form RFQ, upload DXF, recapiti telefonici e mappa
├── assets/
│   └── css/
│       └── stile.css           # CSS puro con variabili personalizzate (zero framework)
├── layouts/
│   ├── _default/
│   │   ├── baseof.html         # Template base HTML5 accessibile
│   │   ├── list.html           # Griglie per materiali e settori
│   │   └── single.html         # Scheda tecnica dettagliata
│   └── partials/
│       ├── testata.html        # Sticky header con micro-accento blu/arancio
│       ├── footer.html         # Dati societari, P.IVA, contatti rapidi
│       └── whatsapp-cta.html   # Floating widget per chiamata/WhatsApp istantaneo
└── static/
    ├── icons/                  # Icone SVG vettoriali delle categorie
    ├── img/                    # Fotografie ottimizzate in formato WebP
    └── schede-tecniche/        # PDF scaricabili delle certificazioni
```

### 3.2 Vantaggi Operativi per Polform
1. **Compilazione in meno di 1 secondo:** con `hugo --minify` l'intero sito viene generato istantaneamente.
2. **Costi Server Azzerati:** deployment continuo su Cloudflare Pages o Netlify collegato al repository Git. Costo mensile: 0,00 €.
3. **Sicurezza Assoluta:** nessun database esposto, nessun pannello admin bersagliabile da bot russi o cinesi, zero spam nei commenti.
4. **Velocità su Rete Mobile:** punteggio Google PageSpeed 98-100/100, essenziale per i buyer che visitano il sito da cantieri, fiere o magazzini industriali.
