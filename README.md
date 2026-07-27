# Amano — website

Website voor **Amano**, rouwconsulente & life coach.
Live domein (later): [amano.be](https://amano.be)

Een rustige, warme en ingetogen website die mensen in rouw verwelkomt en
uitnodigt tot contact.

## Stack

- **Next.js 14** (App Router) + TypeScript
- **Tailwind CSS v4** voor de styling
- **next/font** met Fraunces (koppen) en Inter (tekst)

Bewust eenvoudig en licht gehouden — makkelijk te onderhouden en snel.

## Lokaal ontwikkelen

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Andere commando's:

```bash
npm run build      # productieversie bouwen
npm run start      # productieversie draaien
npm run lint       # code controleren
npm run typecheck  # types controleren
```

## Structuur

| Pad | Inhoud |
| --- | --- |
| `src/app/` | De pagina's (home, over-mij, aanbod, werkwijze, tarieven, contact) |
| `src/components/` | Herbruikbare bouwstenen (header, footer, knoppen, kaarten …) |
| `src/lib/content.ts` | **Alle teksten van de site, op één plek** |
| `src/lib/tokens.ts` | Kleuren- en typografiepalet (documentatie) |
| `src/app/globals.css` | Design tokens + basisstijl |
| `public/` | Afbeeldingen en bestanden |

### Teksten aanpassen

Alle teksten staan in **`src/lib/content.ts`**. Je hoeft dus niet in de
code te zoeken: pas daar de zinnen aan en de hele site volgt.

## SEO

De technische SEO-basis staat ingebouwd:

- Titels + meta-omschrijvingen per pagina, canonical-URL's
- OpenGraph + Twitter-cards met een social-preview-afbeelding (`public/og-image.png`)
- Gestructureerde data (JSON-LD): `LocalBusiness` / `ProfessionalService` + diensten — zie `src/components/JsonLd.tsx`
- Automatische `sitemap.xml` en `robots.txt`, favicon, taal `nl`

De lokale gegevens (plaats, regio, adres, telefoon) staan als placeholders in
`siteConfig` (`src/lib/content.ts`) — zodra die ingevuld zijn, klopt ook de
gestructureerde data. Buiten de site: maak een **Google Bedrijfsprofiel** aan
en dien de sitemap in via **Google Search Console** (grootste hefboom lokaal).

## Nog in te vullen (placeholders)

Deze zaken staan nu als placeholder in de code en wachten op Karens input:

- [ ] Echte teksten (verhaal, aanbod, werkwijze) in `src/lib/content.ts`
- [ ] E-mailadres, telefoonnummer en regio (`siteConfig` in `content.ts`)
- [ ] Tarieven (of deze sectie weglaten)
- [ ] Portretfoto van Karen + eventuele sfeerbeelden (in `public/`)
- [ ] Contactformulier koppelen aan een e-maildienst
      (zie de `TODO` in `src/components/ContactForm.tsx`)
- [ ] Eventueel een definitief logo / favicon (`src/app/icon.svg`)

## Kleuren

Warme zandtinten met salie-groen als accent — zie `src/lib/tokens.ts` en
`src/app/globals.css`.
