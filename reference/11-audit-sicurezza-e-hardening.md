# 11. Audit di Sicurezza e Hardening del Sito Statico (Polform)

Data audit: 2026-10-12
Ambito: Portale statico Hugo Jamstack (`https://darkrei08.github.io/polform/`) e workflow di compilazione/deploy.

---

## 1. Sintesi Esecutiva

Il sito web di Polform S.r.l. è generato come architettura Jamstack 100% statica (Hugo Extended) priva di database, priva di backend applicativo esposto e priva di CMS dinamico (WordPress/Drupal). Questa scelta architetturale riduce drasticamente la superficie d'attacco (azzerando vulnerabilità tipiche quali SQL Injection, Remote Code Execution e deserializzazione insicura).

L'audit ha verificato e applicato controlli di hardening sui rimanenti vettori di rischio client-side e di filiera (supply-chain).

---

## 2. Controlli Verificati e Hardening Applicato

### 2.1 Content Security Policy (CSP) & Header di Sicurezza
* **CSP via Meta Tag:** implementata direttiva restrittiva in `layouts/_default/baseof.html`:
  `default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; img-src 'self' data:; font-src 'self'; connect-src 'self'; base-uri 'self'; form-action 'self' mailto: tel: https://wa.me;`
  * Blocca l'iniezione o il caricamento di script, iframe o pixel da domini terzi non autorizzati.
* **X-Content-Type-Options:** `nosniff` configurato per prevenire attacchi di MIME-sniffing da parte dei browser.
* **Referrer-Policy:** `strict-origin-when-cross-origin` configurato per proteggere la privacy dell'utente e non trasmettere query interne a siti esterni.

### 2.2 Protezione Reverse Tabnabbing sui Link Esterni
* Tutti i collegamenti con `target="_blank"` (collegamenti diretti a WhatsApp `wa.me`) sono stati verificati e dotati di `rel="noopener noreferrer"`.
* Elimina il rischio che la pagina aperta possa manipolare `window.opener` per eseguire attacchi di phishing sul visitatore.

### 2.3 Sanitizzazione e Prevenzione DOM-based XSS
* Il motore di ricerca statico lato client (`assets/js/main.js`) interroga l'indice locale `index.json`.
* Hardening: la concatenazione delle proprietà dei risultati (`m.title`, `m.description`, `m.url`, `m.code`, `m.category`) è interamente protetta dalla funzione `escapeHtml()`, prevenendo iniezioni di markup malevolo anche a fronte di descrizioni contenenti caratteri riservati.

### 2.4 Riservatezza Industriale e Tracciamento Zero
* Nessun cookie o tracker profilante (Google Analytics, Meta Pixel) presente.
* Il salvataggio del tema (chiaro/scuro/auto) avviene esclusivamente in `localStorage` locale del browser con identificatore di preferenza visiva, senza identificativi personali.
* Conformità con la politica di segretezza industriale del repository: nessun file CAD proprietario (`.step`, `.dwg`) o formula riservata è esposto nel repository pubblico.

### 2.5 Sicurezza del Workflow CI/CD (GitHub Actions)
* Il workflow `.github/workflows/hugo.yml` opera con principio di minimo privilegio:
  * `permissions: contents: read, pages: write, id-token: write`
* Nessun token con permessi amministrativi o di scrittura sul codice sorgente è concesso al runner di build.

---

## 3. Esito dell'Audit

* **Vulnerabilità critiche:** 0
* **Vulnerabilità alte:** 0
* **Vulnerabilità medie:** 0
* **Vulnerabilità basse:** 0
* **Stato complessivo:** CONFORME E RINFORZATO (Passed)
