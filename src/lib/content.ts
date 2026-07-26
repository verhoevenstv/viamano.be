/**
 * ─────────────────────────────────────────────────────────────────────────
 *  CENTRALE INHOUD VAN DE WEBSITE
 * ─────────────────────────────────────────────────────────────────────────
 *  Alle teksten van de site staan hier op één plek. Zo kunnen we Karens
 *  antwoorden makkelijk invullen zonder in de code te hoeven zoeken.
 *
 *  Zoek naar het woord "PLACEHOLDER" om te zien wat nog vervangen moet worden.
 *  De rest is voorbeeldtekst die je vrij mag aanpassen.
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
    "Rouwbegeleiding en life coaching. Ik loop met je mee wanneer verdriet je pad kruist — in alle rust, op jouw tempo.",
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
      "Ik loop met je mee wanneer verdriet je pad kruist — in alle rust, op jouw tempo, tot je de draad van het leven weer kunt oppikken.",
    primaryCta: { label: "Neem contact op", href: "/contact" },
    secondaryCta: { label: "Ontdek mijn aanbod", href: "/aanbod" },
  },

  welcome: {
    eyebrow: "Welkom",
    title: "Je hoeft dit niet alleen te dragen",
    // PLACEHOLDER — vervang door Karens eigen woorden
    paragraphs: [
      "Verlies zet je wereld stil. Er is geen juiste manier om te rouwen en geen tijdslimiet die telt. Wat er wél mag zijn, is iemand die naast je staat — die luistert zonder te oordelen en met je meegaat, in jouw tempo.",
      "Als rouwconsulente en life coach bied ik die ruimte. Een plek waar je verhaal er mag zijn, waar tranen mogen vallen en waar we, stap voor stap, samen zoeken naar hoe je verder kunt.",
    ],
  },

  servicesTeaser: {
    eyebrow: "Waarmee ik je help",
    title: "Begeleiding die aansluit bij wat jij nodig hebt",
    intro:
      "Elk verlies is anders. Daarom stem ik de begeleiding af op jouw verhaal en jouw tempo.",
  },

  aboutTeaser: {
    eyebrow: "Over mij",
    title: "Ik spreek uit ervaring",
    // PLACEHOLDER — vervang door Karens eigen verhaal (zie ook /over-mij)
    text: "Ik weet uit eigen ervaring hoe diep verlies kan snijden — en hoe waardevol het is om iemand naast je te hebben die begrijpt wat je doormaakt. Vanuit die ervaring, en mijn opleiding als life coach, help ik anderen om de draad weer op te nemen.",
    cta: { label: "Lees mijn verhaal", href: "/over-mij" },
  },

  closingCta: {
    title: "Klaar voor een eerste, vrijblijvend gesprek?",
    text: "Een eerste kennismaking is altijd vrijblijvend. We kijken samen of het klikt en wat je nodig hebt.",
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

// PLACEHOLDER — pas titels en teksten aan zodra we Karens aanbod kennen
export const services: Service[] = [
  {
    slug: "rouwbegeleiding",
    icon: "leaf",
    title: "Rouwbegeleiding",
    summary:
      "Na het verlies van een dierbare. Samen geven we ruimte aan je verdriet en zoeken we hoe je verder kunt leven met dit gemis.",
    forWhom:
      "Voor iedereen die een partner, ouder, kind, familielid of goede vriend verloren heeft en steun kan gebruiken bij het verwerken.",
    how: "In persoonlijke gesprekken luisteren we naar jouw verhaal, in alle rust en zonder oordeel. Er is geen vast schema — jouw tempo bepaalt de weg.",
  },
  {
    slug: "begeleiding-na-euthanasie",
    icon: "heart",
    title: "Begeleiding na euthanasie",
    summary:
      "De bijzondere weg van afscheid en verlies rond een euthanasie brengt eigen vragen en gevoelens met zich mee.",
    forWhom:
      "Voor partners en naasten die iemand verloren na een euthanasie, en die daarin een luisterend oor en herkenning zoeken.",
    how: "Ik begeleid je met bijzondere aandacht voor de gemengde gevoelens die hierbij horen — vanuit begrip voor wat deze specifieke weg betekent.",
  },
  {
    slug: "life-coaching",
    icon: "path",
    title: "Life coaching",
    summary:
      "De draad weer opnemen, stap voor stap. Samen kijken we vooruit, in jouw richting en op jouw ritme.",
    forWhom:
      "Voor wie na een verlies of ingrijpende periode opnieuw houvast en richting zoekt in het leven.",
    how: "Met praktische gesprekken en coaching helpen we je om kleine stappen te zetten, opnieuw keuzes te maken en vertrouwen te hervinden.",
  },
];

/* ── OVER MIJ ──────────────────────────────────────────────────────────── */

export const about = {
  eyebrow: "Over mij",
  title: "Over Karen",
  // PLACEHOLDER — dit vervangen we volledig door Karens eigen verhaal
  intro:
    "Hier vertelt Karen wie ze is, wat haar drijft en hoe ze anderen wil bijstaan. (Placeholdertekst — wordt vervangen door haar eigen woorden.)",
  paragraphs: [
    "Mijn naam is Karen. Ik weet uit eigen ervaring wat het is om een grote liefde te verliezen en om overeind te blijven op de moeilijkste momenten. Die ervaring heeft me gevormd en gaf me de wens om er voor anderen te zijn.",
    "Naast mijn levenservaring volgde ik een opleiding tot life coach. Die combinatie — begrijpen wat verlies met een mens doet én de tools om iemand weer op weg te helpen — vormt de basis van hoe ik werk.",
    "Ik doe dit werk in bijberoep, met veel zorg en tijd voor elke persoon die ik begeleid. Geen wachtkamergevoel, maar een warme, veilige plek waar jij centraal staat.",
  ],
  values: [
    { title: "Warmte", text: "Je wordt ontvangen zonder oordeel, in alle veiligheid en rust." },
    { title: "Ervaring", text: "Ik spreek niet alleen vanuit theorie, maar vanuit wat ik zelf heb doorleefd." },
    { title: "Jouw tempo", text: "Er is geen schema of tijdslimiet. Wat jij nodig hebt, bepaalt de weg." },
  ],
};

/* ── WERKWIJZE ─────────────────────────────────────────────────────────── */

export const werkwijze = {
  eyebrow: "Werkwijze",
  title: "Hoe een begeleiding verloopt",
  intro:
    "Elke begeleiding is anders, want elk verhaal is anders. Toch geef ik je graag een idee van hoe het meestal gaat.",
  steps: [
    {
      title: "Kennismaking",
      text: "We starten met een vrijblijvend kennismakingsgesprek. Je vertelt wat er speelt, ik luister, en samen voelen we of het klikt.",
    },
    {
      title: "Samen op weg",
      text: "In de gesprekken die volgen geven we ruimte aan je verhaal en verdriet. Geen vast draaiboek — we volgen wat jij nodig hebt.",
    },
    {
      title: "Jouw tempo",
      text: "Jij bepaalt hoe vaak en hoe lang we samenkomen. Er is geen tijdsdruk; rouwen kent geen deadline.",
    },
    {
      title: "Verder kijken",
      text: "Stap voor stap kijken we ook vooruit: hoe je de draad weer kunt opnemen, met het gemis een plek in je leven.",
    },
  ],
  practical: {
    title: "Praktisch",
    // PLACEHOLDER — vul aan zodra we weten waar/hoe Karen werkt
    items: [
      "Gesprekken kunnen bij mij plaatsvinden, bij jou thuis of online — wat voor jou het beste voelt.",
      "Een gesprek duurt ongeveer een uur.",
      "Alles wat je deelt, blijft tussen ons.",
    ],
  },
};

/* ── TARIEVEN ──────────────────────────────────────────────────────────── */

export const tarieven = {
  eyebrow: "Tarieven",
  title: "Tarieven",
  intro:
    "Duidelijkheid en rust, ook rond het praktische. Hieronder vind je de tarieven. (Placeholder — vul de juiste bedragen in.)",
  // PLACEHOLDER — vul de echte tarieven in of laat deze sectie weg
  items: [
    { label: "Kennismakingsgesprek", price: "Gratis & vrijblijvend", note: "Een eerste gesprek om te voelen of het klikt." },
    { label: "Begeleidingsgesprek (± 1 uur)", price: "€ XX", note: "Individueel gesprek, bij mij, aan huis of online." },
    { label: "Traject van meerdere sessies", price: "In overleg", note: "We stemmen samen af wat je nodig hebt." },
  ],
  footnote:
    "Deze begeleiding wordt aangeboden in bijberoep. Neem gerust contact op als je vragen hebt over de mogelijkheden.",
};

/* ── CONTACT ───────────────────────────────────────────────────────────── */

export const contact = {
  eyebrow: "Contact",
  title: "Neem gerust contact op",
  intro:
    "Heb je een vraag, of wil je een eerste kennismaking plannen? Laat een bericht na of bel me. Ik neem zo snel mogelijk contact met je op.",
  formNote:
    "Je bericht komt rechtstreeks bij mij terecht. Alles wat je deelt, behandel ik vertrouwelijk.",
};
