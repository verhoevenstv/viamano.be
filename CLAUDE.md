# Viamano — Project Context

## Wat is dit?
Website voor **Viamano** (viamano.be) — de rouw- en verliescoachingpraktijk van **Karen Dierickx** in Lennik, Pajottenland (Vlaams-Brabant, België). Eigenaar/opdrachtgever: **Steven Verhoeven** (verhoeven.stv@gmail.com).

## Tech stack
- **Next.js 14** (App Router) met **statische export** (`output: "export"` → `/out`)
- **Tailwind CSS v4** met custom thema-tokens in `src/lib/tokens.ts`
- **TypeScript** (strict)
- Fonts: **Fraunces** (headings/serif) + **Inter** (body) via `next/font/google`
- Taal: **Nederlands (nl-BE)** — alle content, UI-tekst en comments zijn Nederlands

## Belangrijke configuratie
- `trailingSlash: true` in `next.config.mjs` — alle URL's eindigen op `/`
- `images: { unoptimized: true }` — geen server-side image optimization (statische hosting)
- Alle inhoud zit in **`src/lib/content.ts`** — niet verspreid over pagina's

## Hosting & deploy

### Hostingprovider
- **Provider**: site.eu (Apache shared hosting)
- **Domein**: viamano.be
- **Deploy pad op server**: `~/domains/viamano.be/public_html/`

### Deploy workflow
- **Automatisch** via GitHub Actions (`.github/workflows/deploy.yml`)
- Triggered op elke **push naar `main`** + handmatig via `workflow_dispatch`
- Flow: `npm ci` → `npm run build` (output: `/out`) → `rsync` via SSH naar site.eu

### GitHub Secrets (nodig voor deploy)
De volgende secrets moeten ingesteld zijn in GitHub repo settings → Secrets:
- `SSH_KEY` — Private SSH key voor toegang tot site.eu
- `SSH_HOST` — Hostnaam van de server
- `SSH_PORT` — SSH-poortnummer
- `SSH_USER` — SSH-gebruikersnaam
- `DEPLOY_PATH` — Pad op de server (`~/domains/viamano.be/public_html/`)

### Rsync excludes
Deze bestanden worden NIET overschreven bij deploy:
- `.well-known/` — SSL-certificaten, verificaties
- `cgi-bin/` — server CGI scripts
- `contact-config.php` — SMTP-credentials voor contactformulier (staat NIET in git)

### Belangrijk: veiligheid
- **Nooit credentials, SSH-keys of wachtwoorden committen**
- `contact-config.php` staat in `.gitignore` en is excluded van rsync
- SSH-key zit uitsluitend in GitHub Secrets

## Commando's
```bash
npm run dev        # Dev server (localhost:3000)
npm run build      # Statische export naar /out
npm run lint       # ESLint
npm run typecheck  # tsc --noEmit
```

## Projectstructuur
```
src/
  app/
    page.tsx                    # Homepage
    over-mij/page.tsx           # Over Karen + ViaMano naambetekenis
    aanbod/page.tsx             # Diensten
    werkwijze/page.tsx          # Werkwijze / stappen
    tarieven/page.tsx           # Prijzen
    veelgestelde-vragen/page.tsx # FAQ + verdiepende artikelen
    contact/page.tsx            # Contactformulier
    vragenlijst/page.tsx        # Intake-vragenlijst
    not-found.tsx               # 404 pagina (Nederlands)
    layout.tsx                  # Root layout (header, footer, JSON-LD)
    robots.ts / sitemap.ts      # SEO
  components/
    JsonLd.tsx                  # Schema.org structured data
    PageHeader.tsx              # Paginakop + BreadcrumbList JSON-LD
    SiteHeader.tsx / SiteFooter.tsx
    Hero.tsx, Button.tsx, Container.tsx, Section.tsx, ...
    FaqAccordion.tsx            # Client component (accordion)
    ContactForm.tsx / IntakeForm.tsx  # Client components (forms)
  lib/
    content.ts                  # ALLE website-inhoud (teksten, FAQ, artikelen)
    tokens.ts                   # Tailwind thema-tokens (kleuren)
    intake.ts                   # Intake form logica
public/
  llms.txt                     # GEO: structured info voor AI-zoekmachines
  .htaccess                    # HTTPS redirect, www→non-www, trailing slash
  images/
    karen-portret.jpg           # Karen met Viamano logo (over-mij pagina)
    karen-home.jpg              # Karen close-up (homepage)
    sfeer-*.jpg                 # Sfeerbeelden
    faq-*.jpg                   # FAQ artikelbeelden
  logos/                        # Logo-varianten
```

## SEO & GEO
- Schema.org JSON-LD: ProfessionalService + CounselingService + LocalBusiness, FAQPage, Article, BreadcrumbList
- `llms.txt` in public root voor AI-crawlers (ChatGPT, Perplexity, Google AI Overviews)
- Canonical URL's op elke pagina
- Open Graph + Twitter Card metadata
- Instagram gekoppeld via `sameAs`

## Kleurenpalet
Warme, rustige tinten: cream, sand, sage, petrol/ink, gold/ochre. Zie `src/lib/tokens.ts`.

## Contactgegevens Viamano
- **E-mail**: karen@viamano.be
- **Telefoon**: +32 (0)456 34 27 25
- **Regio**: Lennik & het Pajottenland
- **Instagram**: @viamano.be

## Nog te doen
- **Google Business Profile** aanmaken (kritiek voor lokale vindbaarheid + LLM-resultaten)
- **Bing Places** aanmaken (kritiek voor ChatGPT-vindbaarheid)
- **Google Search Console** — verificatietag nog niet toegevoegd
- **Directoryvermeldingen** — Gouden Gids, vind-een-therapeut.be, vindeencoach.be
- **OG image** (`/og-image.png`) — nog aan te maken
- **Cal.com booking integratie** — besproken maar niet geïmplementeerd
