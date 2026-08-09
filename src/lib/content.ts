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

  email: "karen@viamano.be",
  phone: "+32 (0)456 34 27 25",
  region: "Regio Lennik & het Pajottenland",

  description:
    "Rouwcoach in Lennik en het Pajottenland. Individuele begeleiding bij verlies van een dierbare, echtscheiding of gezondheid. Boek een gratis kennismaking bij Viamano.",

  // ── SEO / bedrijfsgegevens ───────────────────────────────────────────────
  city: "Lennik",
  province: "Vlaams-Brabant",
  postalCode: "1750",
  country: "BE",
  // Op afspraak — geen straatadres op de site
  streetAddress: "",
  areaServed: [
    "Lennik",
    "Dilbeek",
    "Gooik",
    "Pepingen",
    "Halle",
    "Ternat",
    "Roosdaal",
    "Ninove",
    "Asse",
    "Liedekerke",
    "Affligem",
    "Sint-Pieters-Leeuw",
    "Beersel",
    "Galmaarden",
    "Herne",
    "Pajottenland",
    "Vlaams-Brabant",
  ],
  priceRange: "€€",
  sameAs: ["https://www.instagram.com/viamano.be"],
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
    "rouwcoach Lennik",
    "rouwbegeleiding Pajottenland",
    "rouwcoaching Vlaams-Brabant",
    "verliesbegeleiding Halle",
    "rouwcoach Dilbeek",
    "rouwverwerking Pajottenland",
  ],
};

export const nav = [
  { label: "Home", href: "/" },
  { label: "Over mij", href: "/over-mij" },
  { label: "Aanbod", href: "/aanbod" },
  { label: "Werkwijze", href: "/werkwijze" },
  { label: "Tarieven", href: "/tarieven" },
  { label: "FAQ", href: "/veelgestelde-vragen" },
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
    title: "Een plek om even te landen",
    paragraphs: [
      "Rouw is geen probleem dat opgelost moet worden. Het is een weg die iedereen op zijn eigen tempo aflegt — welke vorm het verlies ook aanneemt: het verlies van een dierbare, van gezondheid, van werk, van een relatie of van het leven zoals het was.",
      "Bij Viamano vind je een warme, veilige plek waar alles er mag zijn: verdriet, stilte, boosheid, onzekerheid, liefde en hoop. Een plek waar niets moet, en waar opnieuw ademruimte mag ontstaan. Mijn wens is dat je je gehoord voelt en stap voor stap opnieuw vertrouwen vindt in het leven — zonder te vergeten wat of wie voor jou waardevol is geweest.",
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
    "Ik ben Karen Dierickx, rouwcoach in Lennik. Vanuit eigen ervaring en mijn opleiding begeleid ik mensen bij verlies — van overlijden tot echtscheiding. Ontdek mijn verhaal.",
  paragraphs: [
    "Ik ben Karen Dierickx. Ik volgde een opleiding in het begeleiden en ondersteunen van mensen tijdens ingrijpende levensgebeurtenissen en verlies. Mijn grootste leerschool was echter mijn eigen leven.",
    "Toen mijn echtgenoot overleed, veranderde mijn wereld volledig. Ik weet hoe eenzaam verlies kan voelen, hoeveel goedbedoelde adviezen soms pijn doen, en hoe belangrijk het is dat iemand gewoon naast je blijft staan.",
    "Door mijn persoonlijke ervaring besef ik dat verlies vele gezichten heeft. Niet alleen het overlijden van een dierbare, maar ook een echtscheiding, een ernstige ziekte, het verlies van werk, een onvervulde kinderwens of andere ingrijpende veranderingen kunnen je fundament doen wankelen.",
    "Ik verloor mijn echtgenoot na een relatie van eenentwintig jaar. Juist daardoor weet ik hoe belangrijk het is dat iemand écht aanwezig is — niet om oplossingen te geven, maar om samen een stukje van de weg te bewandelen, ongeacht welk verlies je te dragen kreeg.",
    "Viamano is ontstaan vanuit die overtuiging. Die combinatie van professionele vorming en persoonlijke ervaring vormt vandaag de basis van mijn werk.",
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

  nameMeaning: {
    eyebrow: "De naam",
    title: "ViaMano — door de hand",
    intro:
      "Via Mano betekent letterlijk \"door de hand\" of \"via de hand\". In het Italiaans en Spaans staat mano voor hand, en via voor de weg, de route of \"door middel van\".",
    origin:
      "De naam is bewust gekozen en heeft een diep persoonlijke oorsprong. De handafdruk die je op de website ziet, is de hand van Karens overleden echtgenoot. Die hand staat symbool voor de liefde die blijft, voor de verbinding die niet ophoudt wanneer iemand sterft, en voor de zachte, menselijke begeleiding die Karen wil bieden.",
    meanings: [
      {
        title: "Begeleiding door de hand",
        text: "Niet van bovenaf, maar naast je, hand in hand, op jouw tempo.",
      },
      {
        title: "De weg van de liefde",
        text: "Omdat rouw en verlies altijd ook over liefde gaan: de liefde die er was, de liefde die blijft, en de liefde die je opnieuw mag voelen voor het leven.",
      },
      {
        title: "Persoonlijk en met de hand gemaakt",
        text: "Geen standaardtraject, maar een traject dat zorgvuldig en op maat wordt vormgegeven, met de aandacht en warmte die alleen een menselijke hand kan geven.",
      },
    ],
    closing:
      "De naam herinnert eraan dat begeleiding bij verlies geen techniek is, maar een menselijke beweging: iemand die zijn of haar hand uitstrekt en zegt: \"Ik loop met je mee.\"",
    poetic:
      "Door de hand. De hand van wie er niet meer is, en de hand die nu wordt uitgestoken. Een weg die je niet alleen hoeft te gaan.",
  },
};

/* ── WERKWIJZE ─────────────────────────────────────────────────────────── */

export const werkwijze = {
  eyebrow: "Werkwijze",
  title: "Hoe een begeleiding verloopt",
  intro:
    "Van kennismaking tot persoonlijke rouwcoaching in Lennik. Ontdek stap voor stap hoe een begeleidingstraject bij Viamano verloopt.",
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
      "Gesprekken gaan door op afspraak, in een warme en huiselijke praktijkruimte in regio Lennik waar rust en veiligheid centraal staan.",
      "Overdag op afspraak, en daarnaast enkele avonden, op zaterdag of zondag.",
      "Indien gewenst kunnen gesprekken ook wandelend of online plaatsvinden.",
      "Een eerste kennismaking is altijd vrijblijvend en alles wat je deelt, blijft vertrouwelijk.",
    ],
  },
};

/* ── TARIEVEN ──────────────────────────────────────────────────────────── */

export const tarieven = {
  eyebrow: "Tarieven",
  title: "Tarieven",
  intro:
    "Transparante tarieven voor rouwcoaching bij Viamano in Lennik. Kennismakingsgesprek altijd gratis en vrijblijvend.",
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

/* ── VEELGESTELDE VRAGEN ──────────────────────────────────────────────── */

export const faq = {
  eyebrow: "Veelgestelde vragen",
  title: "Antwoorden op veelgestelde vragen",
  intro:
    "Veelgestelde vragen over rouwcoaching bij Viamano in Lennik. Wat is rouwcoaching, voor wie is het, en hoe werkt een traject? Vind hier het antwoord.",

  items: [
    {
      question: "Wat is rouwcoaching precies?",
      answer:
        "Rouwcoaching is begeleiding bij verlies. Het is een veilige plek waar je je verhaal mag vertellen, je gevoelens mag voelen en op jouw tempo mag zoeken naar ademruimte en richting. Er is geen vast stappenplan. Ik loop met je mee — niet voor je, niet boven je, maar naast je.",
    },
    {
      question: "Wat is het verschil tussen rouwcoaching en rouwtherapie?",
      answer:
        "Rouwcoaching is ondersteunend en begeleidend. Het richt zich op ruimte geven en het integreren van het verlies in je leven. Rouwtherapie is meer behandelend en komt vooral in beeld bij vastgelopen, gecompliceerde of traumatische rouw. Bij Viamano werk ik coachend. Als therapie nodig blijkt, verwijs ik je door.",
    },
    {
      question: "Voor wie is rouwcoaching geschikt?",
      answer:
        "Voor iedereen die te maken heeft met verlies en behoefte heeft aan steun. Dat kan het overlijden van een dierbare zijn, maar ook het verlies van gezondheid, een relatie, werk, een kinderwens of het leven zoals het was. Of je net een verlies hebt meegemaakt of al langer meedraagt: je bent welkom.",
    },
    {
      question: "Wanneer is rouwcoaching zinvol?",
      answer:
        "Wanneer je voelt dat je er niet alleen mee verder wilt of kunt. Wanneer het verdriet zwaar weegt, wanneer je vastloopt, of wanneer je gewoon iemand zoekt die meeloopt zonder oordeel. Je hoeft niet \"erg genoeg\" te rouwen. Als jij het nodig hebt, is het zinvol.",
    },
    {
      question: "Hoe werkt een traject bij Viamano?",
      answer:
        "We beginnen altijd met een vrijblijvend kennismakingsgesprek. Daarna kijken we samen wat jij nodig hebt. Er is geen vast aantal gesprekken of protocol. Sommige mensen komen een paar keer, anderen langer. Alles gebeurt op jouw tempo en vanuit jouw verhaal.",
    },
    {
      question: "Wat gebeurt er tijdens een gesprek?",
      answer:
        "Je krijgt de ruimte om te vertellen wat er speelt. Soms is dat vooral luisteren en er-zijn. Soms werken we met reflectievragen, herinneringen of eenvoudige oefeningen. Jij bepaalt wat er gezegd mag worden. Niets moet.",
    },
    {
      question: "Hoeveel gesprekken heb ik nodig?",
      answer:
        "Dat verschilt per persoon. Sommigen vinden al steun in enkele gesprekken, anderen hebben langere begeleiding nodig. We evalueren regelmatig samen wat goed voelt. Er is geen minimum of maximum.",
    },
    {
      question: "Kan ik ook online begeleiding krijgen?",
      answer:
        "Ja. Gesprekken kunnen zowel in persoon als online plaatsvinden. We kijken samen wat voor jou het fijnst is.",
    },
    {
      question: "Wat kost rouwcoaching?",
      answer:
        "De tarieven bespreken we tijdens het kennismakingsgesprek. Er is altijd een vrijblijvend eerste gesprek, zodat je zonder verplichting kunt voelen of het klikt.",
    },
    {
      question: "Is er een vrijblijvend kennismakingsgesprek?",
      answer:
        "Ja. We starten altijd met een kennismaking zonder verplichtingen. Zo kun jij voelen of je je veilig en gehoord voelt bij mij, en ik kan inschatten of ik de juiste begeleider voor jou ben.",
    },
    {
      question: "Ik heb al jaren geleden iemand verloren. Kan ik dan nog komen?",
      answer:
        "Absoluut. Rouw kent geen vaste houdbaarheidsdatum. Veel mensen zoeken pas jaren later steun, wanneer het verdriet opnieuw opspeelt of wanneer ze merken dat ze er nog niet echt mee verder konden. Je bent op elk moment welkom.",
    },
    {
      question: "Wat als ik niet goed kan praten over mijn gevoelens?",
      answer:
        "Dat is helemaal oké. Je hoeft geen mooie zinnen te formuleren. Stilte mag er ook zijn. Soms is gewoon aanwezig zijn al genoeg. We zoeken samen de manier die bij jou past.",
    },
    {
      question: "Waarom heet de praktijk Viamano?",
      answer:
        "Via Mano betekent letterlijk \"door de hand\". De handafdruk op de website is de hand van mijn overleden echtgenoot — een symbool voor de liefde die blijft en de verbinding die niet ophoudt. De naam staat voor begeleiding die persoonlijk is, naast je in plaats van boven je, met aandacht en warmte, hand in hand op jouw tempo. Geen standaardtraject, maar zorgvuldig op maat vormgegeven.",
    },
  ],

  articles: [
    {
      slug: "wat-is-rouwcoaching",
      title: "Wat is rouwcoaching?",
      intro:
        "Rouwcoaching is begeleiding voor mensen die te maken hebben met verlies. Dat kan het overlijden van een dierbare zijn, maar ook andere vormen van verlies: gezondheid, werk, een relatie, een kinderwens, of het leven zoals het was.",
      sections: [
        {
          heading: "Wat rouwcoaching precies inhoudt",
          content:
            "Rouwcoaching is geen therapie en geen \"oplossing\" van het verdriet. Het is een veilige, warme plek waar je je verhaal mag vertellen zo vaak als nodig, waar alle gevoelens mogen bestaan — verdriet, boosheid, schuld, leegte, liefde, hoop — waar je op jouw tempo mag stilstaan bij wat er gebeurd is, en waar je stap voor stap weer ademruimte en richting mag vinden. De coach loopt met je mee. Niet voor je, niet boven je, maar naast je. Er is geen vast stappenplan. Elke begeleiding is persoonlijk en volgt jouw verhaal, jouw ritme en jouw behoeften.",
        },
        {
          heading: "Wat gebeurt er in de praktijk?",
          content:
            "Tijdens de gesprekken krijg je ruimte om te vertellen wat er gebeurd is en wat het met je doet, stil te staan bij herinneringen en de betekenis van de ander, te ontdekken hoe het verlies jouw leven heeft veranderd, te kijken naar wat jou helpt om verder te gaan zonder te vergeten, en opnieuw vertrouwen te vinden in jezelf en in het leven. Soms werkt een coach met eenvoudige oefeningen, rituelen of reflectievragen. Soms is alleen het luisteren en er-zijn al genoeg.",
        },
        {
          heading: "Voor wie is het bedoeld?",
          content:
            "Voor iedereen die voelt dat hij of zij er niet alleen mee verder wil of kan. Of je nu net een verlies hebt meegemaakt of al langer worstelt met de gevolgen ervan: rouwcoaching biedt een plek om te landen, te voelen en weer adem te halen.",
        },
      ],
    },
    {
      slug: "hoe-kies-je-een-rouwcoach",
      title: "Hoe kies je een geschikte rouwcoach?",
      intro:
        "Het kiezen van een rouwcoach is heel persoonlijk. Er is geen \"beste\" coach voor iedereen — er is vooral een coach die bij jou past.",
      sections: [
        {
          heading: "De klik is het belangrijkste",
          content:
            "Je moet je veilig, gehoord en op je gemak voelen bij deze persoon. Rouw is kwetsbaar. Als je na het kennismakingsgesprek denkt \"hier kan ik alles zeggen\", dan zit je al goed. Voel je je geremd of ongemakkelijk? Dan is het oké om verder te zoeken.",
        },
        {
          heading: "Ervaring met verlies",
          content:
            "Vraag naar de achtergrond van de coach: heeft hij of zij zelf verlies meegemaakt? Welke opleidingen en bijscholingen heeft de coach gevolgd rond rouw en verlies? Hoe lang begeleidt hij of zij al mensen bij rouw? Persoonlijke ervaring is geen must, maar veel cliënten vinden het fijn als de coach \"weet waarover het gaat\". Professionele training is wel belangrijk.",
        },
        {
          heading: "Werkwijze en visie",
          content:
            "Een goede rouwcoach werkt op jouw tempo, heeft geen vast stappenplan of \"moetjes\", laat alle gevoelens toe, helpt je het verlies te integreren in je leven zonder te forceren, en maakt onderscheid tussen rouwcoaching en therapie. Vraag gerust: \"Hoe werk je precies?\" en \"Wat mag ik van jou verwachten?\"",
        },
        {
          heading: "Het kennismakingsgesprek",
          content:
            "Gebruik dit gesprek om te voelen: word ik serieus genomen? Stelt de coach de juiste vragen? Voel ik warmte en respect? Krijg ik ruimte of word ik al \"geholpen\"? Je hoeft tijdens de kennismaking nog niets diepgaands te vertellen. Het gaat vooral om het gevoel.",
        },
      ],
    },
    {
      slug: "verschil-rouwcoaching-rouwtherapie",
      title: "Het verschil tussen rouwcoaching en rouwtherapie",
      intro:
        "Hoewel de termen soms door elkaar worden gebruikt, zijn er duidelijke verschillen in aanpak, doel en intensiteit.",
      sections: [
        {
          heading: "Rouwcoaching",
          content:
            "Rouwcoaching is vooral bedoeld voor mensen die hun verdriet en gemis willen kunnen uiten, behoefte hebben aan iemand die meeloopt, hun verlies een plek willen geven in hun leven, en opnieuw richting en ademruimte willen vinden. Er is geen sprake van een \"diagnose\" of behandeling. De coach helpt je om met het verlies te leven, niet om het \"op te lossen\".",
        },
        {
          heading: "Rouwtherapie",
          content:
            "Rouwtherapie komt meer in beeld wanneer de rouw vastzit of jarenlang onveranderd blijft, er sprake is van trauma, er sterke angst, depressieve klachten of suïcidale gedachten ontstaan, iemand niet meer functioneert in het dagelijks leven, of eerdere steun of coaching onvoldoende hielp. Een therapeut werkt dan gerichter aan het verwerken van de pijn, het verminderen van klachten en het herstellen van de veerkracht.",
        },
        {
          heading: "Belangrijke nuance",
          content:
            "De grens is niet altijd scherp. Sommige coaches hebben ook een therapeutische achtergrond, en sommige therapeuten werken coachend. Een goede rouwcoach herkent wanneer coaching niet meer voldoende is en verwijst je dan door naar een therapeut of andere hulpverlening.",
        },
      ],
    },
    {
      slug: "rouwverwerking-in-de-hersenen",
      title: "Hoe werkt rouwverwerking in de hersenen?",
      intro:
        "Rouw is niet alleen een emotioneel proces. Het is ook een diepgaand biologisch en neurologisch proces. Wanneer je iemand verliest met wie je sterk verbonden was, reageert je brein alsof er iets fundamenteels is veranderd in je wereld — en dat is ook zo.",
      sections: [
        {
          heading: "De hersenen zien verlies als pijn en gemis",
          content:
            "De anterior cingulate cortex en insula verwerken zowel lichamelijke als emotionele pijn. Daarom voelt intens verdriet soms letterlijk aan als een steek of een zware druk op de borst. De amygdala reageert op dreiging en onveiligheid, waardoor de wereld na een verlies opeens onveiliger kan aanvoelen. Het beloningssysteem blijft \"zoeken\" naar de ander, vergelijkbaar met hoe het reageert bij intense hunkering. De prefrontale cortex, die helpt bij emotieregulatie en plannen, is vaak overbelast, waardoor concentratie en beslissingen moeilijker worden.",
        },
        {
          heading: "Gehechtheid en het interne model",
          content:
            "Je brein heeft een intern werkmodel van belangrijke mensen: hoe ze klinken, voelen, reageren, en wat hun aanwezigheid betekent voor jouw veiligheid. Bij een overlijden moet dit model worden bijgewerkt. Dat is een traag en energievragend proces. Zolang het oude model nog actief is, blijft het verlangen groot.",
        },
        {
          heading: "Het duale procesmodel",
          content:
            "Volgens het duale procesmodel van Stroebe en Schut schommelt het brein voortdurend tussen twee standen: verliesgericht (herinneringen, verdriet, verlangen) en herstelgericht (praktische zaken, afleiding, nieuwe rollen). Gezonde rouwverwerking is juist dit heen-en-weer bewegen. Het brein kan niet permanent in de intensste rouwsfeer blijven; het heeft herstelperiodes nodig om te integreren.",
        },
        {
          heading: "Hoe het brein zich aanpast",
          content:
            "Met de tijd neemt de intense zoektocht naar de ander af, worden herinneringen minder overspoelend en meer geïntegreerd, verandert het interne model van \"aanwezig\" naar \"afwezig maar betekenisvol\", en wordt emotieregulatie weer sterker. Dit proces kost maanden tot jaren en verloopt niet lineair. Golven van verdriet blijven mogelijk, maar ze worden meestal minder frequent en minder overweldigend.",
        },
      ],
    },
  ],
};

/* ── CONTACT ───────────────────────────────────────────────────────────── */

export const contact = {
  eyebrow: "Contact",
  title: "Neem gerust contact op",
  intro:
    "Neem contact op met Viamano voor rouwcoaching in Lennik en het Pajottenland. Plan een gratis kennismakingsgesprek of stel je vraag — ik reageer zo snel mogelijk.",
  formNote:
    "Je bericht komt rechtstreeks bij mij terecht en wordt vertrouwelijk behandeld.",
};
