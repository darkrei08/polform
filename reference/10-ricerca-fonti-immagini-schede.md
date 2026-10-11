# Ricerca fonti immagini e verifiche tecniche (T5)

Data accesso: 2026-10-11. Esito: due immagini con licenza esplicita sono state salvate come materiale di ricerca; nessuna immagine è stata inserita in `static/` o collegata alle pagine. Le pagine del sito non sono state modificate.

## Metodo e ambito

Ho verificato le pagine italiane canoniche `content/materiali/*.md` e `content/certificazioni.md`, confrontandole con le versioni inglesi e tedesche per individuare affermazioni aggiuntive. Per i diritti ho usato le pagine e la MediaWiki API ufficiali di Wikimedia Commons. Per gli standard ho cercato le pagine degli enti titolari o degli organismi normativi e, dove possibile, ne ho verificato la raggiungibilità con `curl`.

Firecrawl CLI non è installato: `command -v firecrawl` ha restituito exit 1. Ho usato `web_search` come ripiego e richieste `curl` dirette alle API/pagine ufficiali. Per esempio, il controllo `curl -sSL --max-time 40 -A 'PolformResearch/1.0 (source verification)' --output /dev/null --write-out 'http=%{http_code} type=%{content_type} final=%{url_effective}\n' 'https://www.iso.org/standard/39408.html'` ha ricevuto HTTP 403 (`text/html`; curl exit 0 perché il comando non usava `--fail`). Altre pagine ufficiali (ASTM, UNI, Vigili del Fuoco, IMO, EUROPUR, OEKO-TEX, EUR-Lex e BSI) hanno risposto HTTP 200. Il controllo dei PDF CAM MASE `https://gpp.mase.gov.it/sites/default/files/2024-08/allegato-tecnico-CAM-edilizia-07-06-2022-rev-correttivo.pdf` e `https://gpp.mase.gov.it/sites/default/files/2024-07/DM_23_06_2022_cam_edilizia.pdf` è terminato con timeout, HTTP 000 e curl exit 28. Per le pagine ISO e il CAM riporto i link ufficiali e l'evidenza reperita via ricerca, senza sostenere di aver letto il testo integrale degli standard a pagamento.

## Immagini scaricate e diritti

| File locale | Fonte e URL originale | Autore e licenza dichiarata | Attribuzione consigliata | Verifica |
|---|---|---|---|---|
| `reference/media-research/reticulated-foam-cc0.jpg` | [Wikimedia Commons: Reticulated foam.JPG](https://commons.wikimedia.org/wiki/File:Reticulated_foam.JPG); [file originale](https://upload.wikimedia.org/wikipedia/commons/e/e5/Reticulated_foam.JPG) | Silverchemist; CC0 1.0, [dedicazione](https://creativecommons.org/publicdomain/zero/1.0/deed.en). La scheda Commons indica "Own work". | Non obbligatoria per CC0; per cortesia: "Silverchemist, Wikimedia Commons, CC0 1.0". Nessuna modifica. | HTTP 200; `image/jpeg`; 2560 x 1920; `file` e `identify` exit 0; SHA-256 `2a12fbca4f0a6fa002ec1bbaab3981e6148239785132f09b71de40c638b87d89`. |
| `reference/media-research/open-cell-foam-public-domain.jpg` | [Wikimedia Commons: Foam Open Cell.jpg](https://commons.wikimedia.org/wiki/File:Foam_Open_Cell.jpg); [file originale](https://upload.wikimedia.org/wikipedia/commons/8/88/Foam_Open_Cell.jpg) | Mdiproducts, nome utente/uploader Commons senza individuo identificato; Commons indica "Own work" e "Public domain" (`Copyrighted=false`). | Il pubblico dominio non richiede attribuzione; per cortesia: "Mdiproducts, Wikimedia Commons, Public domain". Nessuna modifica. | HTTP 200; `image/jpeg`; 2584 x 1936; `file` e `identify` exit 0; SHA-256 `a9ac1a77a015f5a79582be9d33a3629643f9d64f6b95b2d7da7b815265281a57`. |

Il primo file mostra due strutture cellulari affiancate; il secondo è una vista ravvicinata della struttura porosa. Sono illustrazioni generiche, non fotografie di prodotti Polform. Si raccomanda una verifica umana della provenienza della seconda immagine prima di un uso commerciale, poiché la scheda attribuisce la dichiarazione di pubblico dominio a un account e non a una persona nominata.

### Candidato scaricato e poi escluso

`reference/media-research/polyurethane-foam-inniskillin-1-cc-by-3.0.jpg` è stato scaricato per valutazione, poi rimosso dal repository: l'ispezione visiva mostra schiuma da costruzione applicata a una parete, non un materiale da imbottitura o un campione utile alle schede Polform.

- Fonte: [Wikimedia Commons: Polyurethane foam at inniskillin 1.jpg](https://commons.wikimedia.org/wiki/File:Polyurethane_foam_at_inniskillin_1.jpg); originale `https://upload.wikimedia.org/wikipedia/commons/f/f4/Polyurethane_foam_at_inniskillin_1.jpg`.
- Autore: Achim Hering; licenza: [CC BY 3.0](https://creativecommons.org/licenses/by/3.0/); attribuzione prevista: "Achim Hering, Wikimedia Commons, CC BY 3.0". Nessuna modifica.
- Download: HTTP 200, `image/jpeg`, 249546 byte; dimensioni 960 x 1280; SHA-256 `6139f3ac889397a6e73388abe51aab717581f9fcb5eaeb01525bf5cebc10e8a0`.
- Verifiche prima della rimozione: `file reference/media-research/polyurethane-foam-inniskillin-1-cc-by-3.0.jpg` (JPEG 960 x 1280, exit 0); `identify -format 'dimensions=%wx%h format=%m\n' reference/media-research/polyurethane-foam-inniskillin-1-cc-by-3.0.jpg` (960 x 1280 JPEG, exit 0); `sha256sum reference/media-research/polyurethane-foam-inniskillin-1-cc-by-3.0.jpg` (hash riportato sopra, exit 0).
- Rimozione del file escluso: `rm -- reference/media-research/polyurethane-foam-inniskillin-1-cc-by-3.0.jpg`, exit 0; controllo di assenza, exit 0.

### Comandi di ricerca, download e verifica

La ricerca Commons ha usato i termini `polyurethane foam`, `acoustic foam`, `polyurethane foam sheet`, `recycled foam`, `foam mattress`, `foam rubber`, `polyurethane sponge`, `polyurethane foam manufacturing`, `foam block` e `open cell foam`. La richiesta API iniziale ha restituito titolo, URL, licenza e autore:

```sh
curl -fsS -A 'PolformResearch/1.0 (public media research)' --get 'https://commons.wikimedia.org/w/api.php' --data-urlencode 'action=query' --data-urlencode 'format=json' --data-urlencode 'generator=search' --data-urlencode 'gsrnamespace=6' --data-urlencode 'gsrlimit=8' --data-urlencode 'gsrsearch=polyurethane foam' --data-urlencode 'prop=imageinfo' --data-urlencode 'iiprop=url|extmetadata' | jq -r '.query.pages[] | [.title, .imageinfo[0].url, .imageinfo[0].extmetadata.LicenseShortName.value, .imageinfo[0].extmetadata.Artist.value, .imageinfo[0].extmetadata.LicenseUrl.value] | @tsv'
```

Exit 0. La successiva richiesta MediaWiki API ufficiale ha verificato i metadati delle due immagini conservate:

```sh
curl -fsS -A 'PolformResearch/1.0 (license verification)' --get 'https://commons.wikimedia.org/w/api.php' --data-urlencode 'action=query' --data-urlencode 'format=json' --data-urlencode 'titles=File:Reticulated foam.JPG|File:Foam Open Cell.jpg' --data-urlencode 'prop=imageinfo' --data-urlencode 'iiprop=extmetadata' | jq -r '.query.pages[] | [.title, .imageinfo[0].extmetadata.LicenseShortName.value, .imageinfo[0].extmetadata.License.value, .imageinfo[0].extmetadata.LicenseUrl.value, .imageinfo[0].extmetadata.Artist.value, .imageinfo[0].extmetadata.Credit.value, .imageinfo[0].extmetadata.AttributionRequired.value, .imageinfo[0].extmetadata.UsageTerms.value, .imageinfo[0].extmetadata.Copyrighted.value] | @tsv'
```

Exit 0. I download finali sono stati eseguiti solo con `curl`:

```sh
curl -fL --retry 2 --max-time 120 -A 'PolformMediaResearch/1.0 (repository research)' --output 'reference/media-research/reticulated-foam-cc0.jpg' --write-out 'http=%{http_code} content_type=%{content_type} size=%{size_download}\n' 'https://upload.wikimedia.org/wikipedia/commons/e/e5/Reticulated_foam.JPG'; rc=$?; printf 'exit=%s\n' "$rc"; exit "$rc"
```

Esito: HTTP 200, `image/jpeg`, 2286270 byte, exit 0.

```sh
curl -fL --retry 2 --max-time 120 -A 'PolformMediaResearch/1.0 (repository research)' --output 'reference/media-research/open-cell-foam-public-domain.jpg' --write-out 'http=%{http_code} content_type=%{content_type} size=%{size_download}\n' 'https://upload.wikimedia.org/wikipedia/commons/8/88/Foam_Open_Cell.jpg'; rc=$?; printf 'exit=%s\n' "$rc"; exit "$rc"
```

Esito: HTTP 200, `image/jpeg`, 995938 byte, exit 0.

Il candidato poi escluso è stato scaricato con la stessa opzione `curl -fL --retry 2 --max-time 120 -A 'PolformMediaResearch/1.0 (repository research)' --output 'reference/media-research/polyurethane-foam-inniskillin-1-cc-by-3.0.jpg' --write-out 'http=%{http_code} content_type=%{content_type} size=%{size_download}\n' 'https://upload.wikimedia.org/wikipedia/commons/f/f4/Polyurethane_foam_at_inniskillin_1.jpg'`; HTTP 200, `image/jpeg`, 249546 byte, exit 0.

Validazione eseguita sui tre download prima di rimuovere il candidato non pertinente, e poi ripetuta sui due file conservati:

```sh
set -u
for f in reference/media-research/reticulated-foam-cc0.jpg reference/media-research/open-cell-foam-public-domain.jpg; do
  file "$f"; printf 'file_exit=%s\n' "$?"
  identify -format 'dimensions=%wx%h format=%m\n' "$f"; printf 'identify_exit=%s\n' "$?"
  sha256sum "$f"; printf 'sha256sum_exit=%s\n' "$?"
done
```

Per entrambi i file conservati, `file`, `identify` e `sha256sum` hanno exit 0; tipi e dimensioni sono riportati nella tabella. Per il candidato escluso gli stessi controlli hanno identificato JPEG 960 x 1280 e prodotto lo SHA-256 riportato sopra, tutti con output valido.

## Fonti tecniche e rapporto con le affermazioni

I collegamenti seguenti descrivono metodi, classificazioni o requisiti. Non certificano da soli materiali, lotti, fornitori o prodotti Polform e non sostituiscono rapporti di prova o certificati specifici.

| Affermazioni nelle pagine | Fonte primaria e cosa stabilisce | Avvertenza per le schede |
|---|---|---|
| Densità, durezza, resilienza e deformazione residua nelle schede agglomerato, HR, nautica, bugnato, ignifugo e memory | [ISO 845](https://www.iso.org/standard/39408.html) misura la densità apparente di plastiche e gomme cellulari; [ISO 2439](https://www.iso.org/obp/ui?_escaped_fragment_=iso%3Astd%3Aiso%3A2439%3Aed-4%3Av1%3Aen) definisce la durezza per indentazione; [ISO 1856](https://www.iso.org/standard/70213.html) definisce la deformazione residua a compressione; [ASTM D3574](https://store.astm.org/standards/d3574) copre prove su schiume flessibili in poliuretano. | I metodi non comprovano i valori indicati, la qualifica "medio tipico" o le certificazioni disponibili. Per ogni valore servono scheda del produttore e rapporto di prova sul grado/materiale identificato. |
| Rigidità dinamica e abbattimento al calpestio del bonded foam | [ISO 9052-1](https://www.iso.org/standard/16620.html) / EN 29052-1 riguarda la misura di rigidità dinamica di materiali sotto pavimenti galleggianti; [ISO 140-8](https://www.iso.org/standard/2322.html) risulta ritirata; [ISO 10140-3](https://www.iso.org/standard/79483.html) riguarda la misura di laboratorio dell'isolamento al rumore da calpestio; [ISO 717-2](https://www.iso.org/standard/69867.html) tratta la classificazione/rating. | Il riferimento EN ISO 140-8 è obsoleto. Un valore ΔLw dipende dalla composizione di prova completa (materiale, pavimento, massetto e posa), non è una proprietà autonoma della schiuma. I valori 18-24 MN/m³ e 26-32 dB non sono documentati da un rapporto. |
| Assorbimento acustico/NRC del bugnato | [ISO 354](https://www.iso.org/standard/34545.html) misura l'assorbimento in camera riverberante; [ISO 11654](https://www.iso.org/standard/19583.html) fornisce un rating per assorbitori edilizi; [ASTM C423](https://store.astm.org/c0423-23e01.html) è il metodo ASTM di misura in camera riverberante associato ai risultati NRC. | ISO 354 è un metodo di misura, non un valore NRC di prodotto. La tabella associa NRC a ISO 354 e insieme una banda di frequenza: servono rapporto, configurazione, curva per frequenza e metodo di rating coerente; 0.65-0.85 non è verificato. |
| Drenaggio e schiuma a celle aperte | [ISO 7231](https://www.iso.org/standard/82601.html) misura il valore di flusso d'aria di polimeri cellulari; ASTM D3574 comprende metodi per schiume flessibili, tra cui misure di flusso d'aria secondo le descrizioni pubbliche del metodo. | ASTM D3574 non dimostra un deflusso di acqua "istantaneo" o "100% aperto". La scheda attribuisce al metodo una prestazione idraulica non supportata. Servono un protocollo e dati specifici per drenaggio/acqua; ISO 7231 o il metodo aria non sono equivalenti. |
| Classi 1IM e prove antincendio italiane | [UNI 9175:2010](https://store.uni.com/en/uni-9175-2010) descrive la valutazione della combustione/reazione al fuoco di manufatti imbottiti; [DM 26 giugno 1984, Vigili del Fuoco](https://www.vigilfuoco.it/sites/default/files/2022-10/DM_26-06-1984_Articolato_Integrato.pdf) disciplina classificazione e omologazione. | 1IM riguarda il manufatto imbottito e la sua configurazione di prova, non automaticamente la sola schiuma. L'affermazione che sia obbligatoria per ogni hotel, cinema, teatro, aula magna o struttura sanitaria è troppo ampia senza indicare l'attività e la norma applicabile. Occorrono omologazione/rapporti relativi alla configurazione esatta. |
| BS 5852 Crib 5 e IMO FTP Code Part 8 | [BSI, BS 5852](https://knowledge.bsigroup.com/products/methods-of-test-for-assessment-of-the-ignitability-of-upholstered-seating-by-smouldering-and-flaming-ignition-sources) descrive prove di ignitabilità di sedute imbottite; [IMO 2010 FTP Code, Part 8](https://wwwcdn.imo.org/localresources/en/KnowledgeCentre/IndexofIMOResolutions/MSCResolutions/MSC.307%2888%29.pdf) tratta prove di mobili imbottiti per gli scopi marittimi regolati. | Un test o una certificazione non si trasferisce automaticamente dalla schiuma al mobile finito o viceversa. La frase di obbligatorietà di Crib 5 in intere aree geografiche/segmenti non è dimostrata dalle pagine BSI. L'IMO Part 8 non prova la conformità di una schiuma generica. |
| EN 13501-1, UL 94 HF-1 e TB 117-2013 | [BSI EN 13501-1](https://knowledge.bsigroup.com/products/fire-classification-of-construction-products-and-building-elements-classification-using-data-from-reaction-to-fire-tests) classifica la reazione al fuoco di prodotti da costruzione; [UL](https://www.ul.com/services/combustion-fire-tests-plastics) descrive le classi UL 94 HF per plastiche espanse; [California TB 117-2013 FAQ](https://bhgs.dca.ca.gov/forms_pubs/tb117-2013_faq_0619.pdf) riguarda la resistenza alla combustione lenta nei mobili imbottiti. | Le classi E/Bfl-s1 e HF-1 richiedono esiti di prova per il prodotto e la configurazione definiti; Bfl-s1 è una classe per pavimentazioni, non un'etichetta generica per ogni schiuma. TB 117-2013 non è una classe antincendio generale e non richiede di per sé additivi ritardanti di fiamma. La conformità indicata non è documentata. |
| CertiPUR e OEKO-TEX | [EUROPUR CertiPUR FAQ](https://europur.org/certipur/faq/) e [elenco label holder](https://europur.org/certipur/list-of-certipur-label-holders/) descrivono un programma per schiume PU e i relativi titolari; [OEKO-TEX STANDARD 100](https://www.oeko-tex.com/en/our-standards/oeko-tex-standard-100) verifica sostanze nocive su articoli/componenti tessili per classi di prodotto. | CertiPUR limita/controlla sostanze ed emissioni: "totale assenza" non è una formulazione sicura in presenza di soglie. OEKO-TEX Class I/II identifica classi di prodotto, non una generica "biocompatibilità" della schiuma. Servono certificati validi, titolare, prodotto e ambito verificabili; non sono stati forniti numeri di certificato. Anche le affermazioni che Polform usi esclusivamente materie prime certificate e che ogni blocco provenga da produttori primari accreditati richiedono evidenza di fornitore e lotto. |
| "Contenuto riciclato certificato >85% / GRS / CAM" | [Textile Exchange GRS](https://textileexchange.org/recycled-claim-global-recycled-standard/) riguarda contenuto riciclato e catena di custodia; il [CAM edilizia, criterio 2.5.7, MASE](https://gpp.mase.gov.it/sites/default/files/2024-07/DM_23_06_2022_cam_edilizia.pdf) stabilisce soglie per categorie specifiche di isolanti. | GRS e CAM non sono certificazioni intercambiabili. Il CAM è un criterio di acquisto pubblico e le soglie dipendono dalla categoria: la fonte indica, tra gli altri, 70% per agglomerato di poliuretano e 20% per poliuretano espanso flessibile. Nessuna fonte generale dimostra >85% per questo prodotto. Servono schede di composizione e documenti/certificati di catena di custodia pertinenti. |
| Trattamento "Sanitized", antimicotico, antialghe e antibatterico | [SANITIZED, applicazione a schiume PU](https://www.sanitized.com/polyurethane-foam-more-than-meets-the-eye/) descrive additivi per protezione del materiale; [Regolamento UE 528/2012](https://eur-lex.europa.eu/eli/reg/2012/528/2022-04-15/eng) disciplina biocidi e articoli trattati. | La pagina SANITIZED non prova che il materiale Polform sia trattato o che abbia le prestazioni dichiarate; la comunicazione dell'azienda riguarda la protezione del materiale, non la protezione sanitaria dell'utilizzatore. Occorrono prodotto, sostanza attiva, autorizzazione/etichettatura e prove di efficacia pertinenti. |
| MDR, CE Classe I, cuscini antidecubito | [Regolamento UE 2017/745, EUR-Lex](https://eur-lex.europa.eu/eli/reg/2017/745/oj/eng) stabilisce gli obblighi del fabbricante per dispositivi medici, inclusi classificazione, documentazione tecnica, dichiarazione UE di conformità e marcatura CE. | La classificazione dipende dalla destinazione d'uso medica dichiarata e dal dispositivo finito. Il richiamo a "documentazione tecnica e fascicolo" non dimostra che un cuscino specifico sia un dispositivo conforme o marcato CE; servono dichiarazione, identificazione e documentazione del fabbricante. |
| Tolleranza CNC ±0,5 mm, tracciabilità lotti/SDS, ritorno memory 3-5 secondi, densità, PPI, spessori, colori e processo di fabbricazione | Sono affermazioni operative o valori di prodotto specifici; gli standard sopra possono definire come misurarli, non attestano le prestazioni interne Polform. | Servono rapporti di misura, schede dei fornitori, prove interne con protocollo/versione e registri di qualità/tracciabilità. "Elimina le compressioni vascolari", "biocompatibile", "antidecubito" e "self-extinguishing/indeformabile" sono affermazioni sanitarie o assolute che non vanno lasciate senza evidenza specifica. |

## Avvertenze trasversali e lingue

- Le pagine non forniscono numeri di certificato, titolari, rapporti di prova, dichiarazioni di conformità o schede prodotto che dimostrino i valori e le certificazioni attribuiti a Polform. Le schede di metodo non possono sostituirli.
- Le versioni inglesi e tedesche ripetono le principali affermazioni e in alcuni casi le ampliano: ad esempio "steam-cured" per il bonded foam, "without capillary compression" per il memory foam, "TB 117-2013 compliant" nella scheda ignifuga e claim più assoluti su resistenza alla fiamma/ritorno elastico. Anche queste formulazioni non sono supportate dai documenti pubblici esaminati.
- "CertiPUR / OEKO-TEX / CE / GRS / CAM disponibili" non deve essere inteso come certificazione generale di ogni lotto o prodotto Polform in assenza di riferimenti validi e verificabili.
- Resistenza a pioggia/salsedine, asciugatura rapida, resistenza a muffe, celle aperte/reticolate, durata HR e applicazioni d'uso sono caratteristiche dipendenti dal prodotto e non sono dimostrate da standard di metodo. Non ho verificato l'autorizzazione all'uso del nome commerciale "Dryfeel".

## Raccomandazione per una promozione successiva

1. Prima scelta, `reticulated-foam-cc0.jpg`: il soggetto è pertinente alla struttura cellulare e la licenza CC0 ha il rischio di riuso più basso. Promuoverla solo come illustrazione generica della schiuma reticolata, non come prodotto Dryfeel Polform o prova di drenaggio.
2. Seconda scelta, `open-cell-foam-public-domain.jpg`: utile come dettaglio didattico della porosità, previa revisione della provenienza Commons; non presentarla come campione Polform.
3. Non promuovere il candidato "inniskillin" escluso: è un'immagine di schiuma da costruzione, non rappresentativa delle schede.

Prima di qualsiasi pubblicazione, riesaminare la pagina di licenza, scegliere un testo alternativo accessibile e confermare con il responsabile del prodotto che l'illustrazione non venga scambiata per una foto o una certificazione del materiale venduto.
