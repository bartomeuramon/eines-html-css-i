# Sabors de Mallorca — PAC 1

Portal de gastronomia de Bartomeu Ramon Sureda. HTML, CSS i JavaScript sense frameworks. Desenvolupat sobre la configuració del M2 facilitada per l’estudiant, amb ajuda d’IA declarada a la pàgina de fonts.

## Posar-lo en funcionament

1. Conserva una còpia de seguretat del projecte actual.
2. Copia el contingut d’aquest ZIP dins la carpeta local **PEC 1**. Conserva la carpeta `.git` existent: és l’historial i la connexió amb GitHub. No creïs un altre repositori.
3. Des del terminal d’aquesta carpeta executa `npm ci`.
4. Executa `npm run start` i obre l’adreça que indiqui Parcel.
5. Per preparar producció, atura el servidor amb Ctrl+C i executa `npm run build`.

Edita sempre `src`. La carpeta `dist` es regenera i la neteja l’elimina. No obris el resultat de producció amb doble clic: les URL d’actius parteixen de l’arrel del servidor.

## Estructura i rutes

| Font                       | URL pública   |
| -------------------------- | ------------- |
| `src/index.html`           | `/`           |
| `src/categoria/index.html` | `/categoria/` |
| `src/det1/index.html`      | `/det1/`      |
| `src/det2/index.html`      | `/det2/`      |
| `src/links/index.html`     | `/links/`     |

Netlify resol les URL sense barra final mitjançant els directoris amb `index.html`. El contingut es publica a l’arrel del domini, sense `/dist`.

`src/partials` conté la capçalera i el peu compartits. `src/img` inclou còpies de les vuit fotografies. `Imatges` conserva els materials originals rebuts i el registre de fonts. Les còpies publicades són JPEG, inclosa la còpia amb extensió JPG del fitxer JFIF.

## Eines

- Parcel, rimraf, npm-run-all i posthtml-include: paquets del M2.
- `posthtml-include`: connector addicional d’HTML configurat a `.posthtmlrc`. Inclou la capçalera i el peu quan es compila. És independent de la dependència visible i de les transformacions per defecte de Parcel.
- `feather-icons` 4.29.2: dependència npm addicional. Insereix icones SVG visibles al botó de portada, a les metadades i als enllaços. No és un framework. Les icones són decoratives i acompanyen etiquetes de text.
- `browserslist: ["since 2016"]`: selecció de versions publicades des de 2016. Parcel transforma el codi i genera scripts de mòdul i alternativa `nomodule`. La compilació no substitueix una comprovació real de totes les funcionalitats als navegadors antics.

Els noms dels scripts es mantenen. S’han ampliat les entrades de `parcel:dev` i `parcel:build` perquè incloguin les cinc pàgines. `start` i `build` continuen executant `clean` abans de Parcel.

## Interaccions

- Categoria: filtres Totes, Salat i Dolç, amb estat `aria-pressed` i recompte anunciat amb `role="status"`.
- Detalls: selector de racions. Recalcula les quantitats des de les dades originals i anuncia el canvi. Els ingredients sense quantitat numèrica no es modifiquen. No reajusta automàticament temps ni mida del motlle.
- Sense JavaScript es poden llegir totes les receptes. Els controls que depenen del JavaScript només es mostren quan s’ha carregat.

## Accessibilitat i comprovacions

S’han incorporat idioma català, títols de pàgina diferenciats, encapçalaments, regions semàntiques, alternatives textuals, enllaç per saltar la navegació, focus visible, controls natius i taula amb capçalera i títol. El disseny té regles per a ordinador, tauleta i telèfon.

La compilació de producció i les interaccions s’han comprovat durant la preparació. No s’afirma una certificació completa WCAG 2.0 AA. Abans de lliurar cal completar les comprovacions manuals de teclat, zoom, lector de pantalla, contrast, dispositius i navegadors, i validar l’HTML.

Els vídeos són de tercers. Cal verificar els subtítols i altres alternatives necessàries perquè el contingut audiovisual compleixi els requisits AA. El fet de permetre incrustació no acredita accessibilitat. Els textos de la recepta no són una transcripció exacta del vídeo.

## GitHub i Netlify

Es mantenen el repositori i la URL que ja utilitzes:

- https://github.com/bartomeuramon/eines-html-css-i
- https://bartomeuramon-eines-html-css-i.netlify.app

Netlify: branca `main`, ordre `npm run build`, directori `dist`, directori base buit.

Abans de pujar, revisa `git status`. Afegeix els canvis del projecte, fes un commit descriptiu i executa `git push`. No pugis `node_modules`, `.parcel-cache` ni `dist`. Aquesta còpia no conté la carpeta `.git` i no modifica el repositori remot per si mateixa.

## Fonts i autoria

Les autories, les llicències CC BY-SA, els dos vídeos i la declaració d’ús d’IA es troben a `/links/`. Les fotografies s’han copiat sense recompressió. El disseny en retalla visualment algunes mitjançant `object-fit: cover`. Les adaptacions de les fotografies han de mantenir la llicència corresponent. Feather Icons es distribueix amb llicència MIT, inclosa a `Llicencies/feather-icons-MIT.txt`.

La solució no incorpora codi de les solucions docents adjuntes ni adapta errors per dissimular autoria. L’estudiant ha comunicat autorització del professor per rebre ajuda d’IA en el desenvolupament.

## Documentació avaluable

Aquest README és una guia de treball. No substitueix la memòria en PDF de màxim 12 pàgines. La memòria s’ha d’acabar amb el procés real de revisió i publicació, captures pertinents i els vuit apartats de l’enunciat. Inclou a la primera pàgina el nom, PAC 1 i els dos enllaços anteriors.
