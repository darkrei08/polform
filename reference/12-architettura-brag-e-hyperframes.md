# 12. Architettura Video: Integrazione di HyperFrames e Latent-Spaces/Brag

Documento tecnico di architettura per la produzione e l'automazione video B2B di **POLFORM S.r.l.** (Matera, Italia).

---

## 1. Cos'è https://github.com/latent-spaces/brag

[`latent-spaces/brag`](https://github.com/latent-spaces/brag) è un'agent skill open-source che automatizza la creazione di video di lancio promozionali a partire da un repository di codice o da un sito web.

### Flusso Operativo di /brag

```
┌─────────────────────┐      ┌─────────────────────┐      ┌─────────────────────┐
│  Analisi Repository │ ---> │ Storyboard & Script │ ---> │   Composizione      │
│  (Codice, README)   │      │ (Tono, ritmo, scene)│      │    HyperFrames      │
└─────────────────────┘      └─────────────────────┘      └──────────┬──────────┘
                                                                     │
                                                                     ▼
┌─────────────────────┐      ┌─────────────────────┐      ┌─────────────────────┐
│ Copy per i Social   │ <--- │  Rendering Video    │ <--- │ Headless Chromium   │
│ (LinkedIn / X)      │      │  (MP4 Faststart)    │      │    + FFmpeg         │
└─────────────────────┘      └─────────────────────┘      └─────────────────────┘
```

1. **Lettura del Progetto:** Analizza autonomamente il codice sorgente, l'albero dei file, il `README.md` e i punti di forza del prodotto.
2. **Pianificazione Storyboard:** Formula un concept di lancio calibrato su preset di tono (es. `polished`, `cinematic`, `yc-parody`).
3. **Generazione Codice HyperFrames:** Crea le scene HTML/CSS/GSAP deterministiche con timing e animazioni.
4. **Compilazione MP4:** Chiama la CLI di HyperFrames per renderizzare il video Full HD a 30 o 60 fps con FFmpeg.
5. **Generazione Copy di Lancio:** Redige il testo pronto per essere condiviso su canali social professionali.

---

## 2. Come si Integrano HyperFrames e /brag in Polform

I due strumenti non sono in competizione, ma operano su livelli complementari dello stack multimediale:

| Aspetto | HyperFrames (Motore di Base) | Latent-Spaces /brag (Regista AI) |
|---|---|---|
| **Livello architetturale** | Runtime grafico, compilatore deterministico e renderer | Skill agente, pianificatore di storyboard e copywriter |
| **Controllo** | Granulare al millisecondo su ogni elemento HTML/CSS/GSAP | Diretto tramite prompt naturale e preset di stile |
| **Formato tipico** | Video tecnici istituzionali B2B (30–60 secondi) | Clip social di lancio rapido (15–20 secondi) |
| **Casi d'uso Polform** | Video vetrina bilingue per il sito web e GitHub (`renders/video.mp4`) | Generazione automatica di clip per annunci LinkedIn e X |

---

## 3. Installazione e Utilizzo della Skill /brag

La skill è installata nell'ambiente locale del server sotto `/root/.agents/skills/brag/`.

### Installazione Standalone (qualsiasi ambiente compatibile)
```bash
npx skills add https://github.com/latent-spaces/brag --skill brag
```

### Esempi di Invocazione
```bash
# Lancio con tono rifinito e professionale (consigliato per B2B industriale)
/brag --tone polished --format landscape

# Lancio cinematico per schermi verticali (Reels / LinkedIn video)
/brag --tone cinematic --format vertical

# Disattivazione musica di sottofondo
/brag --no-music
```

---

## 4. Stato nel Progetto Polform

* **Motore HyperFrames:** Ha compilato il video promozionale bilingue istituzionale da 45 secondi a 1080p, compresso in H.264 Faststart a **3,2 MB** per la riproduzione istantanea su GitHub e sul sito live.
* **Skill /brag:** Configurata e disponibile nell'ambiente per future campagne di lancio su social media ed esportazione rapida di clip derivate.
