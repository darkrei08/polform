# 09. Quadro di Conformità Legale, GDPR (ROPA/LIA) ed EU AI Act

## 1. Dati Societari Obbligatori (Art. 2250 Codice Civile)

La normativa italiana (Art. 2250 c.c. e Direttiva e-Commerce 2000/31/CE) impone a tutte le società di capitali l'esposizione obbligatoria di specifici dati societari in tutti gli atti, nella corrispondenza e nello spazio web aziendale:

| Parametro Obbligatorio | Valore Istituzionale Polform | Presenza nel Footer Web |
|---|---|---|
| **Ragione Sociale** | POLFORM S.r.l. | Conforme (Testata e Piè di pagina) |
| **Sede Legale e Operativa** | Via Giovanni Agnelli s.n.c., Z.I. La Martella, 75100 Matera (MT) | Conforme |
| **Ufficio del Registro Imprese** | Camera di Commercio della Basilicata (Sede di Matera) | Conforme |
| **Codice Fiscale e Partita IVA** | IT00671260776 | Conforme |
| **Stato del Capitale Sociale** | Capitale sociale interamente versato | Conforme nella pagina *Note Legali* |
| **PEC e Email Istituzionale** | `info@polform.com` | Conforme |

---

## 2. Registro dei Trattamenti (ROPA — Art. 30 GDPR)

Ispirato al modello documentale di riferimento (*Calicchia Design Platform* ex Art. 30 GDPR), è stato formalizzato il Registro dei Trattamenti per POLFORM S.r.l. quale Titolare del Trattamento:

| # | Attività di Trattamento | Finalità | Base Giuridica | Categorie Dati | Destinatari | Trasferimento Extra-UE | Conservazione |
|---|---|---|---|---|---|---|---|
| **1** | **Gestione Preventivi e Disegni CAD (RFQ)** | Analisi fattibilità tecnica di taglio, formulazione quotazioni, campionature fisiche | Art. 6(1)(b) — Misure precontrattuali su richiesta | Nome referente, email aziendale, telefono, file vettoriali CAD (`.dxf`, `.dwg`, `.step`, `.pdf`) | Personale tecnico di produzione | Nessuno (gestione interna) | 24 mesi (se non contrattualizzato) |
| **2** | **Canale Telefonico & WhatsApp Diretto** | Risposta rapida su disponibilità schiume, formati blocchi, consulenza | Art. 6(1)(b) — Misure precontrattuali | Numero telefonico, note vocali, fotografie di campioni da replicare | Titolari e direzione di stabilimento | Server WhatsApp/Meta (Clausole Contrattuali Standard DPF) | Durata trattativa + 12 mesi |
| **3** | **Gestione Ordini e Fatturazione** | Fornitura semilavorati, fatturazione elettronica SDI, logistica | Art. 6(1)(b) Contratto + Art. 6(1)(c) Obbligo Legale | Dati fiscali societari, P.IVA, IBAN, indirizzo di consegna | Commercialista, Agenzia delle Entrate, spedizionieri | Nessuno | 10 anni (obbligo fiscale Art. 2220 c.c.) |
| **4** | **Sicurezza e Rete CDN Statica** | Distribuzione globale, protezione anti-DDoS, prevenzione attacchi | Art. 6(1)(f) — Legittimo Interesse alla continuità operativa | Indirizzo IP anonimizzato, log HTTP di richiesta | GitHub Pages / Cloudflare | USA con Data Privacy Framework (DPF) | 30 giorni massimo |
| **5** | **Preferenze Grafiche Browser** | Selezione tema chiaro/scuro | Nessun dato personale (solo token locale client-side) | Valore stringa `light` / `dark` / `auto` in `localStorage` | Nessuno (resta nel browser dell'utente) | Nessuno | Fino a pulizia cache browser |

---

## 3. Valutazione di Impatto e Legittimo Interesse (LIA)

* **Assenza di Tracker Invasivi:** Non vengono impiegati Google Analytics, Meta Pixel o cookie traccianti di profilazione.
* **Valutazione di Necessità:** Il trattamento dei log server da parte della CDN è strettamente circoscritto alla sicurezza dell'infrastruttura di rete.
* **Bilanciamento degli Interessi:** Non vi è alcun impatto negativo sulla privacy dei visitatori industriali B2B; non è richiesto alcun banner cookie invasivo ai sensi delle Linee Guida del Garante Privacy del 10 giugno 2021.

---

## 4. Conformità all'EU AI Act (Regolamento UE 2024/1689)

Polform adotta una politica rigorosa di trasparenza e salvaguardia della proprietà intellettuale:
1. **Tutela dei Disegni CAD dei Committenti:**
   I file tecnici vettoriali (`.dxf`, `.dwg`, `.step`) inviati dai clienti contengono quote industriali riservate (ad esempio, alloggiamenti per brevetti o sagome per valigie proprietarie). **Tali file non vengono mai inviati a modelli di intelligenza artificiale commerciali né utilizzati per addestrare algoritmi terzi.**
2. **Utilizzo di AI negli Strumenti di Sviluppo:**
   L'impiego di agenti di codifica per la generazione del codice del sito web e la revisione di sicurezza (Guardian Angel) opera su codice sorgente e documentazione strategica, senza mai ingerire dati di produzione riservati o segreti di commessa.
3. **Classificazione di Rischio AI:**
   Il sito web di Polform opera nella categoria di **"Rischio Minimo / Nullo"** ai sensi dell'EU AI Act, non impiegando sistemi di identificazione biometrica remota, profilazione predittiva, né algoritmi ad alto rischio.
