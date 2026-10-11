# 01. Analisi Implementazione Hugo e Design System (Case Study: Le Alternative)

## 1. Origine e Contesto Tecnologico
Il case study analizzato fa riferimento alla migrazione del portale **Le Alternative** (`blog.lealternative.it`, messaggio Telegram `t.me/LeAlternativeGruppoUfficiale/100246`), guidato da *skariko*. 
L'operazione ha sancito l'abbandono definitivo di WordPress a favore di un'architettura **JAMstack / Static Site Generator (SSG)** basata su **Hugo**.

### Motivazioni Tecniche della Migrazione
1. **Superamento dei vincoli di WordPress:** eliminazione del database SQL, del runtime PHP server-side, della proliferazione di plugin vulnerabili e dei costi di manutenzione/aggiornamento di sicurezza.
2. **Git-Driven & Open Collaboration:** il codice e i contenuti (in formato Markdown `.md`) sono versionati su repository Git pubblico (Codeberg). Chiunque può proporre correzioni o nuovi contributi tramite Pull Request o segnalazioni.
3. **Build e Hosting Statico:** compilazione istantanea con il binario in Go di Hugo; distribuzione statica automatica (ad es. Statichost / CDN); asset multimediali pesanti separati su object storage S3 compatibile (`media.lealternative.it` su IDrive S3 europeo).
4. **Ricerca Interna Senza Backend:** adozione di **Pagefind**, motore di indicizzazione statico WebAssembly/JS che compila l'indice durante la build e consente ricerche full-text istantanee lato client senza server Elasticsearch o MySQL.
5. **Privacy & Analytics Etici:** eliminazione di Google Analytics a favore di **GoatCounter** (cookie-free, conforme GDPR, script minuscolo).
6. **Interazione Asincrona e Fediverso:** assenza di form commenti vulnerabili o plugin spam; l'interazione avviene tramite collegamento bidirezionale con Mastodon/Fediverso, importando le risposte pubbliche via API statica/fetch.

---

## 2. Estrapolazione del Design System

Dall'analisi del foglio di stile (`stile.css`) e del markup HTML generato emergono i pilastri del Design System di *Le Alternative*:

### 2.1 Principi Fondamentali
* **Zero-Framework CSS:** assenza di Tailwind o Bootstrap precompilati; CSS puro, nativo, manutenibile con CSS Custom Properties (`var(--...)`).
* **System-First Typography:** nessun font remoto (zero Google Fonts, zero chiamate esterne bloccanti, zero impatto sul First Contentful Paint). Si sfrutta lo stack di sistema operativo:
  ```css
  font-family: ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, Inter, Helvetica, Arial, sans-serif;
  ```
* **Performance & Core Web Vitals:** peso della pagina ridotto a pochi kilobyte; caricamento istantaneo (sub-second LCP); accessibilità nativa con `:focus-visible` chiaro e link `.salta` (skip-to-content).
* **Dark Mode Nativo:** supporto automatico basato su media query `@media (prefers-color-scheme: dark)`.

### 2.2 Token del Design System (Palette & Spaziatura)

#### Tema Chiaro (Light Mode)
* `--bg`: `#fdfbff` (superficie neutra chiarissima, leggermente calda)
* `--surface`: `#f8f6f9` (superficie contenitori e card)
* `--surface-2`: `#f2eef5` (superficie per elementi attivi o contrasto secondario)
* `--text`: `#17151a` (nero caldo a contrasto elevato WCAG AAA)
* `--muted`: `#6b6570` (testo secondario e metadati)
* `--border`: `#eceaf0` (bordi sottili divisori)
* `--shadow`: `0 1px 2px rgba(20,10,30,.04), 0 8px 24px rgba(20,10,30,.05)`
* `--radius`: `12px` (raggio di curvatura per card, immagini, bottoni)
* `--max`: `52rem` (~936px, larghezza ottimale per la colonna di lettura tipografica)
* `--wide`: `74rem` (~1332px, larghezza massima per testata, footer e griglie)

#### Colori Accento e Marchio
* `--rosa`: `#ed64a6` (brand principale) | `--rosa-ink`: `#c8267e` (variante leggibile per link e testo)
* `--viola`: `#7c3aed` | `--viola-ink`: `#6d28d9` (sezione Cassandra/Approfondimenti)
* `--arancione`: `#e15808` | `--arancione-ink`: `#b8480a` (sezione News/Avvisi)
* `--seppia`: `#8a5a2b` | `--seppia-soft`: `#f7efe4` (archivio storico e badge)

#### Tema Scuro (Dark Mode Automatico)
* `--bg`: `#0f0e12` (sfondo nero profondo ma non assoluto)
* `--surface`: `#17151b`
* `--surface-2`: `#1e1b24`
* `--text`: `#eae7ee` (bianco latte a basso affaticamento visivo)
* `--muted`: `#a29bab`
* `--border`: `#272430`
* `--rosa`: `#ff7ab8` | `--viola`: `#b794f4` | `--arancione`: `#fbb562`

### 2.3 Componenti Chiave del Design System
1. **Sticky Header con Backdrop Filter:**
   Testata fissa con effetto frosted glass (`backdrop-filter: saturate(1.4) blur(8px)`), micro-barra di accento colorata in cima (`3px solid var(--accent)`), navigazione essenziale a pillole.
2. **Sistema di Sezioni Semantico (`data-sezione="..."`):**
   Il layout adotta un approccio a tematizzazione semantica via attributo data. Il cambio di sezione sull'elemento `<body>` commuta automaticamente il colore di accento (`--accent`, `--accent-ink`), l'icona SVG associata (`--sez-icona`) e il badge correlato.
3. **Card Articoli con Hover Micro-Interattivo:**
   Bordi discreti, transizione morbida di colore all'hover senza layout shift, tipografia gerarchica (Titolo H2 con peso 700, data, autore, estratto).
4. **Indicatori di Revisione e Changelog Trasparente:**
   Box dedicato che collega direttamente l'articolo al commit Git/Codeberg corrispondente, attestando l'integrità temporale dei contenuti.
5. **Feed & Integrazione Social Decentralizzata:**
   Blocco finale con call-to-action per la community (Mastodon, Matrix, Telegram, Signal, RSS) integrato nell'estetica sobria del footer.

---

## 3. Trasposizione del Modello su un Sito B2B Manifatturiero (Polform)

Il modello di *Le Alternative* è ideale per Polform, una PMI industriale tradizionale. Le ragioni strategiche sono:

| Caratteristica Le Alternative | Declinazione per Polform B2B | Vantaggio Strategico per Polform |
|---|---|---|
| **Sito Statico con Hugo** | Showcase industriale statico ad altissime prestazioni | Zero costi di manutenzione o canoni WordPress, zero rischi di hackeraggio del sito, uptime 100%. |
| **Pagine Markdown su Git** | Catalogo materiali e schede tecniche in file `.md` | Facile aggiornamento di densità, portanza, certificazioni senza dover usare pannelli CMS complessi. |
| **System Fonts & CSS Leggero** | Caricamento fulmineo (< 0.5s su smartphone 4G) | Il responsabile acquisti o il designer naviga da cantiere o in mobilità senza attese o blocchi. |
| **Ricerca con Pagefind** | Ricerca istantanea di codici prodotto, densità e usi | Chi cerca "espanso ignifugo 1IM" o "memory 50 kg/m3" trova la scheda in 10 millisecondi. |
| **Privacy / No Cookie Banner** | Nessun tracker invasivo o cookie di terze parti | Nessun banner cookie fastidioso che blocca la navigazione; massima credibilità istituzionale. |
| **Hosting su CDN Statica** | Distribuzione globale CDN (Cloudflare / Netlify / GitHub) | Costo di hosting quasi azzerato (pochi euro all'anno o tier gratuito professionale). |
