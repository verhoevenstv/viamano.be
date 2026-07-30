/**
 * ─────────────────────────────────────────────────────────────────────────
 *  CENTRALE INHOUD VAN DE WEBSITE
 * ─────────────────────────────────────────────────────────────────────────
 *  Alle teksten van de site staan hier op één plek.
 *
 *  Deze versie bevat Karens eigen antwoorden (secties 1, 2 en deel van 3
 *  van de vragenlijst). Nog als placeholder / af te werken:
 *   - contactgegevens (e-mail, telefoon), woonplaats & regio (sectie 5–6)
 *   - portretfoto / sfeerbeelden
 *   - definitief tarief (Karen: "wordt binnenkort bekendgemaakt")
 *   - keuze merknaam: AMANO (nu actief) of VIAMANO
 * ─────────────────────────────────────────────────────────────────────────
 */

export const siteConfig = {
  name: "Viamano",
  role: "Rouw- en verliescoaching",
  tagline: "Ruimte voor verlies. Verbinding in rouw. Hoop.",
  domain: "viamano.be",
  url: "https://viamano.be",

  // PLACEHOLDER — vervang door Karens echte gegevens (nog niet ontvangen)
  email: "hallo@viamano.be",
  phone: "+32 (0)4XX XX XX XX",
  region: "Regio [plaats], België",

  description:
    "Individuele rouwcoaching bij verlies in al zijn vormen. Een warme, veilige plek waar alles er mag zijn — en waar je stap voor stap opnieuw vertrouwen vindt in het leven.",

  // ── SEO / bedrijfsgegevens ───────────────────────────────────────────────
  // PLACEHOLDERS — vul in zodra we Karens plaats en gegevens kennen.
  city: "[plaats]",
  province: "[provincie]",
  postalCode: "[postcode]",
  country: "BE",
  streetAddress: "",
  areaServed: ["[regio 1]", "[regio 2]"],
  priceRange: "€€",
  sameAs: [] as string[],
  keywords: [
    "rouwcoach",
    "rouwcoaching",
    "rouwbegeleiding",
    "verliesbegeleiding",
    "rouwverwerking",
    "verlies van een dierbare",
    "echtscheiding",
    "verlies van gezondheid",
    "verlies van werk",
  ],
};

export const nav = [
  { label: "Home", href: "/" },
  { label: "Over mij", href: "/over-mij" },
  { label: "Aanbod", href: "/aanbod" },
  { label: "Werkwijze", href: "/werkwijze" },
  { label: "Tarieven", href: "/tarieven" },
  { label: "Contact", href: "/contact" },
];

/* ── HOMEPAGE ──────────────────────────────────────────────────────────── */

export const home = {
  hero: {
    eyebrow: "Rouwcoaching bij verlies",
    title: "Ruimte voor jouw verhaal, ruimte voor jouw verdriet.",
    subtitle:
      "Rouw is meer dan afscheid nemen van een dierbare. Ook het verlies van gezondheid, werk, een relatie of het leven zoals het was, kan je diep raken. Ik loop met je mee — in alle rust, op jouw tempo.",
    primaryCta: { label: "Neem contact op", href: "/contact" },
    secondaryCta: { label: "Ontdek mijn aanbod", href: "/aanbod" },
  },

  welcome: {
    eyebrow: "Welkom",
    title: "Je hoeft er niet alleen doorheen te gaan",
    paragraphs: [
      "Rouw is veel breder dan het overlijden van een dierbare. Ook het verlies van gezondheid, een relatie, werk, een kinderwens, toekomstplannen of andere ingrijpende veranderingen kan je diep raken. Elk verlies verdient erkenning.",
      "Bij Viamano vind je een warme, veilige plek waar alles er mag zijn: verdriet, stilte, boosheid, onzekerheid, liefde en hoop. Mijn wens is dat je je gehoord voelt en stap voor stap opnieuw vertrouwen vindt in het leven — zonder te vergeten wat of wie voor jou waardevol is geweest.",
    ],
  },

  servicesTeaser: {
    eyebrow: "Waarmee ik je help",
    title: "Rouwcoaching bij verlies in al zijn vormen",
    intro:
      "Elke begeleiding is persoonlijk. Geen vaste stappenplannen, maar een traject dat aansluit bij jouw verhaal, jouw tempo en jouw behoeften.",
  },

  aboutTeaser: {
    eyebrow: "Over mij",
    title: "Ik spreek uit ervaring",
    text: "Ik ben Karen Dierickx. Na het overlijden van mijn echtgenoot ontdekte ik hoe ingrijpend verlies je leven kan veranderen — niet alleen omdat je iemand mist, maar ook omdat je jezelf soms lijkt kwijt te raken. Die ervaring, samen met mijn opleiding in het begeleiden van mensen, vormt vandaag de basis van Viamano.",
    cta: { label: "Lees mijn verhaal", href: "/over-mij" },
  },

  closingCta: {
    title: "Klaar voor een eerste, vrijblijvende kennismaking?",
    text: "We starten altijd met een vrijblijvend kennismakingsgesprek. Zo voel je of het klikt, zonder enige verplichting.",
    cta: { label: "Plan een kennismaking", href: "/contact" },
  },
};

/* ── DIENSTEN / AANBOD ─────────────────────────────────────────────────── */

export type Service = {
  slug: string;
  icon: "leaf" | "heart" | "path";
  title: string;
  summary: string;
  forWhom: string;
  how: string;
};

export const services: Service[] = [
  {
    slug: "verlies-van-een-dierbare",
    icon: "heart",
    title: "Verlies van een dierbare",
    summary:
      "Na het overlijden van een partner, ouder, kind, familielid of andere dierbare. We geven ruimte aan je verdriet én aan de herinneringen.",
    forWhom:
      "Voor iedereen die iemand verloor en behoefte heeft aan een luisterend oor en nieuwe houvast — ook wanneer het verlies al langere tijd geleden is.",
    how: "Persoonlijke gesprekken die vertrekken vanuit jouw verhaal, in jouw tempo. Geen vast stappenplan.",
  },
  {
    slug: "verlies-in-andere-vormen",
    icon: "leaf",
    title: "Verlies in andere vormen",
    summary:
      "Rouw gaat verder dan overlijden. Ook het verlies van gezondheid, werk, een relatie of echtscheiding, een kinderwens of toekomstplannen kan diep raken.",
    forWhom:
      "Voor wie voelt dat het leven zoals je het kende is weggevallen, en opnieuw rust en richting zoekt.",
    how: "Samen staan we stil bij wat moeilijk is én bij wat kracht geeft, en zoeken we naar verbinding en vertrouwen.",
  },
  {
    slug: "persoonlijke-begeleiding",
    icon: "path",
    title: "Persoonlijke begeleiding, jouw tempo",
    summary:
      "Geen vaste stappenplannen, maar een traject dat aansluit bij jouw verhaal, jouw tempo en jouw behoeften.",
    forWhom:
      "Voor iedereen die merkt dat verlies en rouw het dagelijkse leven beheersen.",
    how: "We starten met een vrijblijvende kennismaking. Gesprekken kunnen in de praktijkruimte, wandelend of online.",
  },
];

/* ── OVER MIJ ──────────────────────────────────────────────────────────── */

export const about = {
  eyebrow: "Over mij",
  title: "Over Karen",
  intro:
    "Ik ben Karen Dierickx, rouwcoach bij Viamano. Uit eigen ervaring en vanuit mijn opleiding begeleid ik mensen bij verlies in al zijn vormen.",
  paragraphs: [
    "Ik ben Karen Dierickx. Ik volgde een opleiding in het begeleiden en ondersteunen van mensen tijdens ingrijpende levensgebeurtenissen en verlies. Mijn grootste leerschool was echter mijn eigen leven.",
    "Toen mijn echtgenoot overleed, veranderde mijn wereld volledig. Ik weet hoe eenzaam verlies kan voelen, hoeveel goedbedoelde adviezen soms pijn doen, en hoe belangrijk het is dat iemand gewoon naast je blijft staan.",
    "Door mijn persoonlijke ervaring besef ik dat verlies vele gezichten heeft. Niet alleen het overlijden van een dierbare, maar ook een echtscheiding, een ernstige ziekte, het verlies van werk, een onvervulde kinderwens of andere ingrijpende veranderingen kunnen je fundament doen wankelen.",
    "Ik verloor mijn echtgenoot na een relatie van eenentwintig jaar. Dat verlies confronteerde me niet alleen met intens verdriet, maar ook met de zoektocht naar een nieuw leven waarin liefde en gemis naast elkaar mogen bestaan.",
    "Die combinatie van professionele vorming en persoonlijke ervaring vormt vandaag de basis van Viamano.",
  ],
  values: [
    {
      title: "Erkenning",
      text: "Elk verlies verdient erkenning, in welke vorm het ook komt.",
    },
    {
      title: "Ervaring",
      text: "Ik spreek vanuit mijn opleiding én vanuit wat ik zelf heb doorleefd.",
    },
    {
      title: "Jouw tempo",
      text: "Geen vaste stappenplannen. Rouw is een weg die je op je eigen tempo aflegt.",
    },
  ],
};

/* ── WERKWIJZE ─────────────────────────────────────────────────────────── */

export const werkwijze = {
  eyebrow: "Werkwijze",
  title: "Hoe een begeleiding verloopt",
  intro:
    "Elke begeleiding is persoonlijk en vertrekt vanuit jouw verhaal. Toch geef ik je graag een idee van hoe het meestal verloopt.",
  steps: [
    {
      title: "Kennismaking",
      text: "We starten met een vrijblijvende kennismaking. Zo voel je of het klikt, zonder enige verplichting.",
    },
    {
      title: "Vertrekken vanuit jouw verhaal",
      text: "Tijdens de gesprekken vertrekken we vanuit jouw verhaal, welke vorm van verlies het ook is. We staan stil bij wat moeilijk is, maar ook bij wat kracht geeft.",
    },
    {
      title: "Opnieuw rust en verbinding",
      text: "Samen zoeken we naar manieren om opnieuw rust, verbinding en vertrouwen te ervaren — niet door je verdriet weg te nemen, maar door het draaglijker te maken.",
    },
    {
      title: "Jouw tempo",
      text: "Er zijn geen vaste stappenplannen. Jij bepaalt het tempo; rouw is een weg die iedereen op zijn eigen manier aflegt.",
    },
  ],
  practical: {
    title: "Praktisch",
    items: [
      "Gesprekken vinden plaats in een warme, huiselijke praktijkruimte waar rust en veiligheid centraal staan.",
      "Indien gewenst kunnen gesprekken ook wandelend of online plaatsvinden.",
      "Een eerste kennismaking is altijd vrijblijvend.",
      "Alles wat je deelt, blijft vertrouwelijk.",
    ],
  },
};

/* ── TARIEVEN ──────────────────────────────────────────────────────────── */

export const tarieven = {
  eyebrow: "Tarieven",
  title: "Tarieven",
  intro:
    "Duidelijkheid en rust, ook over het praktische.",
  items: [
    {
      label: "Kennismakingsgesprek",
      price: "Gratis & vrijblijvend",
      note: "Een eerste gesprek om te voelen of het klikt.",
    },
    {
      label: "Individuele rouwcoaching",
      price: "Binnenkort bekend",
      note: "Het tarief per gesprek wordt binnenkort bekendgemaakt.",
    },
  ],
  footnote:
    "Heb je vragen over de mogelijkheden of over een traject? Neem gerust contact op.",
};

/* ── CONTACT ───────────────────────────────────────────────────────────── */

export const contact = {
  eyebrow: "Contact",
  title: "Neem gerust contact op",
  intro:
    "Heb je een vraag, of wil je een vrijblijvende kennismaking plannen? Laat een bericht na of bel me. Je hoeft niet te weten waar te beginnen — dat zoeken we samen uit. Ik neem zo snel mogelijk contact met je op.",
  formNote:
    "Je bericht komt rechtstreeks bij mij terecht en wordt vertrouwelijk behandeld.",
};
