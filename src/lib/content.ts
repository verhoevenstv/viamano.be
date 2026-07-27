/**
 * ─────────────────────────────────────────────────────────────────────────
 *  CENTRALE INHOUD VAN DE WEBSITE
 * ─────────────────────────────────────────────────────────────────────────
 *  Alle teksten van de site staan hier op één plek. Zo kunnen we Karens
 *  eigen woorden makkelijk invullen zonder in de code te hoeven zoeken.
 *
 *  LET OP — TIJDELIJKE TEKSTEN:
 *  Onderstaande teksten zijn een eerste, herwerkte versie op basis van
 *  hoe vergelijkbare rouwconsulent-/rouwbegeleidingspraktijken zich
 *  presenteren (toon, opbouw, aanbod). Ze zijn bedoeld als startpunt
 *  "tot nader order" en worden vervangen door Karens eigen verhaal en
 *  gegevens. Persoonlijke passages ("Over mij", tarieven, contact) mag
 *  Karen naar eigen aanvoelen bijstellen.
 * ─────────────────────────────────────────────────────────────────────────
 */

export const siteConfig = {
  name: "Amano",
  // Korte ondertitel die naast/onder de naam verschijnt
  role: "Rouwconsulente & life coach",
  // Merk-baseline uit het logo
  tagline: "Ruimte voor verlies. Verbinding in rouw. Hoop.",
  domain: "amano.be",
  url: "https://amano.be",

  // PLACEHOLDER — vervang door Karens echte gegevens
  email: "hallo@amano.be",
  phone: "+32 (0)4XX XX XX XX",
  region: "Regio [plaats], België",

  // Eén zin die de kern samenvat (voor deelknoppen / metadata)
  description:
    "Rouwbegeleiding en life coaching in bijberoep. Ik loop met je mee na een verlies — in alle rust, op jouw tempo, tot je de draad van het leven weer kunt oppikken.",

  // ── SEO / bedrijfsgegevens (voor Google & gestructureerde data) ──────────
  // PLACEHOLDERS — vul in zodra we Karens plaats en gegevens kennen.
  city: "[plaats]", // gemeente, bv. "Herentals"
  province: "[provincie]", // bv. "Antwerpen"
  postalCode: "[postcode]", // bv. "2200"
  country: "BE",
  // Laat leeg voor een thuispraktijk "op afspraak" zonder straatadres.
  streetAddress: "",
  // Regio's die Karen bedient (voor lokaal zoeken)
  areaServed: ["[regio 1]", "[regio 2]"],
  // Indicatie prijsklasse voor Google (€ = laag, €€€€ = hoog)
  priceRange: "€€",
  // Links naar sociale media (bv. Facebook/Instagram) — leeg laten indien geen
  sameAs: [] as string[],
  // Zoekwoorden waarop we gevonden willen worden
  keywords: [
    "rouwconsulente",
    "rouwbegeleiding",
    "rouwverwerking",
    "verlies van een dierbare",
    "begeleiding na euthanasie",
    "life coach",
    "verliesbegeleiding",
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
    eyebrow: "Rouwbegeleiding & life coaching",
    title: "Ruimte voor jouw verhaal, ruimte voor jouw verdriet.",
    subtitle:
      "Na het verlies van een dierbare voelt de wereld even stil. Ik loop met je mee — in alle rust, op jouw tempo, tot je de draad van het leven weer kunt oppikken.",
    primaryCta: { label: "Neem contact op", href: "/contact" },
    secondaryCta: { label: "Ontdek mijn aanbod", href: "/aanbod" },
  },

  welcome: {
    eyebrow: "Welkom",
    title: "Je hoeft dit niet alleen te dragen",
    paragraphs: [
      "Rouwen is geen ziekte die genezen moet worden, maar een weg die je stap voor stap gaat. Er bestaat geen juiste manier en geen tijdslimiet — enkel jouw manier, in jouw tempo.",
      "Als rouwconsulente en life coach bied ik je een warme, veilige plek waar je verhaal er helemaal mag zijn. Geen oordeel, geen druk. Gewoon iemand die luistert, naast je staat en met je meezoekt naar hoe je verder kunt leven met dit gemis.",
    ],
  },

  servicesTeaser: {
    eyebrow: "Waarmee ik je help",
    title: "Begeleiding die aansluit bij wat jij nodig hebt",
    intro:
      "Elk verlies is anders, en elke mens rouwt op zijn eigen manier. Daarom stem ik de begeleiding altijd af op jouw verhaal, jouw vragen en jouw tempo.",
  },

  aboutTeaser: {
    eyebrow: "Over mij",
    title: "Ik spreek uit ervaring",
    // Persoonlijke passage — Karen mag dit naar eigen aanvoelen bijstellen
    text: "Ik verloor zelf mijn man na een zware ziekte. Ik weet dus uit eigen ervaring hoe diep een verlies kan snijden — en hoe waardevol het is om iemand naast je te hebben die het begrijpt. Vanuit die ervaring, en mijn opleiding als life coach, help ik anderen om opnieuw verder te gaan.",
    cta: { label: "Lees mijn verhaal", href: "/over-mij" },
  },

  closingCta: {
    title: "Klaar voor een eerste, vrijblijvend gesprek?",
    text: "Een eerste kennismaking is altijd vrijblijvend. We kijken samen of het klikt en wat je nodig hebt — je hoeft niet te weten waar te beginnen.",
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
    slug: "rouwbegeleiding",
    icon: "leaf",
    title: "Rouwbegeleiding",
    summary:
      "Individuele gesprekken na het verlies van een dierbare. Samen geven we woorden en ruimte aan wat je voelt, en zoeken we hoe je verder kunt met het gemis.",
    forWhom:
      "Voor iedereen die een partner, ouder, kind, familielid of goede vriend verloor en behoefte heeft aan een luisterend oor en aan houvast.",
    how: "In een reeks persoonlijke gesprekken sta ik naast je — zonder oordeel en zonder vast draaiboek. Jouw verhaal en jouw tempo bepalen de weg die we samen gaan.",
  },
  {
    slug: "begeleiding-na-euthanasie",
    icon: "heart",
    title: "Begeleiding na euthanasie",
    summary:
      "Afscheid nemen via euthanasie is een bijzondere weg, met eigen vragen, twijfels en gevoelens die soms moeilijk te delen zijn.",
    forWhom:
      "Voor partners en naasten die iemand verloren na een euthanasie en zich daarin gehoord en begrepen willen voelen.",
    how: "Ik begeleid je met bijzondere aandacht en begrip voor wat deze specifieke afscheidsweg met je doet — mede vanuit mijn eigen ervaring.",
  },
  {
    slug: "life-coaching",
    icon: "path",
    title: "Life coaching",
    summary:
      "Wanneer het scherpste verdriet stilaan luwt, dient zich een nieuwe vraag aan: hoe nu verder? Samen kijken we vooruit, in jouw richting en op jouw ritme.",
    forWhom:
      "Voor wie na een verlies of een ingrijpende periode opnieuw richting, veerkracht en vertrouwen zoekt.",
    how: "Met praktische, doelgerichte gesprekken help ik je om kleine stappen te zetten, opnieuw keuzes te maken en je leven weer vorm te geven.",
  },
];

/* ── OVER MIJ ──────────────────────────────────────────────────────────── */

export const about = {
  eyebrow: "Over mij",
  title: "Over Karen",
  // Wordt gebruikt als samenvatting (metadata) van de pagina
  intro:
    "Ik ben Karen, rouwconsulente en life coach. Uit eigen ervaring en vanuit mijn opleiding help ik mensen om na een verlies de draad van het leven weer op te nemen.",
  // Persoonlijk verhaal — herwerkte startversie, door Karen te personaliseren
  paragraphs: [
    "Mijn naam is Karen. Ik verloor mijn man na een zware ziekte. Ik weet dus uit eigen ervaring hoe diep een verlies kan snijden, en hoe eenzaam het kan voelen — ook wanneer er lieve mensen om je heen staan.",
    "Die ervaring heeft me gevormd. Ze gaf me de diepe wens om er te zijn voor anderen die iets gelijkaardigs meemaken — niet vanuit een boek, maar vanuit wat ik zelf heb doorleefd.",
    "Naast mijn levenservaring volgde ik een opleiding tot life coach. Die combinatie — aanvoelen wat verlies met een mens doet én de handvatten hebben om iemand weer op weg te helpen — vormt de kern van hoe ik werk.",
    "Ik doe dit werk in bijberoep, bewust met veel tijd en aandacht voor elke persoon die ik begeleid. Geen wachtkamergevoel, maar een warme, veilige plek waar jij centraal staat.",
  ],
  values: [
    {
      title: "Warmte",
      text: "Je wordt ontvangen zonder oordeel, in alle veiligheid en rust.",
    },
    {
      title: "Ervaring",
      text: "Ik spreek niet vanuit de theorie alleen, maar vanuit wat ik zelf heb doorleefd.",
    },
    {
      title: "Jouw tempo",
      text: "Er is geen schema en geen tijdslimiet. Wat jij nodig hebt, bepaalt de weg.",
    },
  ],
};

/* ── WERKWIJZE ─────────────────────────────────────────────────────────── */

export const werkwijze = {
  eyebrow: "Werkwijze",
  title: "Hoe een begeleiding verloopt",
  intro:
    "Elke begeleiding is anders, want elk verhaal is anders. Toch geef ik je graag een idee van hoe een traject meestal verloopt.",
  steps: [
    {
      title: "Kennismaking",
      text: "We beginnen met een vrijblijvend kennismakingsgesprek. Jij vertelt wat er speelt, ik luister, en samen voelen we of er een klik is. Pas daarna beslis je of je verder wil.",
    },
    {
      title: "Samen op weg",
      text: "In de gesprekken die volgen geven we ruimte aan je verhaal, je herinneringen en je verdriet. We werken niet volgens een strak schema, maar volgen wat jij op dat moment nodig hebt.",
    },
    {
      title: "Jouw tempo",
      text: "Jij bepaalt hoe vaak en hoe lang we samenkomen. Sommige mensen hebben genoeg aan enkele gesprekken, anderen aan een langer traject. Er is geen tijdsdruk — rouwen kent geen deadline.",
    },
    {
      title: "Verder kijken",
      text: "Wanneer je er klaar voor bent, kijken we ook vooruit: hoe je het gemis een plek geeft en de draad van je leven weer opneemt, op jouw manier.",
    },
  ],
  practical: {
    title: "Praktisch",
    items: [
      "Gesprekken kunnen doorgaan bij mij, bij jou thuis of online — wat voor jou het veiligst voelt.",
      "Een gesprek duurt ongeveer een uur.",
      "Een eerste kennismaking is altijd vrijblijvend.",
      "Alles wat je deelt, blijft strikt vertrouwelijk.",
    ],
  },
};

/* ── TARIEVEN ──────────────────────────────────────────────────────────── */

export const tarieven = {
  eyebrow: "Tarieven",
  title: "Tarieven",
  intro:
    "Duidelijkheid en rust, ook over het praktische. Hieronder vind je een indicatie van de tarieven. De juiste bedragen bevestigen we samen bij een kennismaking.",
  // De bedragen zijn indicatief (op basis van gangbare tarieven) — nog te bevestigen
  items: [
    {
      label: "Kennismakingsgesprek",
      price: "Gratis & vrijblijvend",
      note: "Een eerste, kort gesprek om te voelen of het klikt.",
    },
    {
      label: "Individueel gesprek (± 1 uur)",
      price: "€ 70",
      note: "Persoonlijk gesprek, bij mij, bij jou thuis of online.",
    },
    {
      label: "Traject van meerdere sessies",
      price: "In overleg",
      note: "We stemmen samen af wat je nodig hebt.",
    },
  ],
  footnote:
    "Deze begeleiding wordt aangeboden in bijberoep. De vermelde tarieven zijn indicatief en worden bij een kennismaking bevestigd. Heb je vragen over de mogelijkheden? Neem gerust contact op.",
};

/* ── CONTACT ───────────────────────────────────────────────────────────── */

export const contact = {
  eyebrow: "Contact",
  title: "Neem gerust contact op",
  intro:
    "Heb je een vraag, of wil je een eerste kennismaking plannen? Laat een bericht na of bel me. Je hoeft niet te weten waar te beginnen — dat zoeken we samen uit. Ik neem zo snel mogelijk contact met je op.",
  formNote:
    "Je bericht komt rechtstreeks bij mij terecht en wordt vertrouwelijk behandeld.",
};
