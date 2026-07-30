/**
 * Vragen voor het intake-formulier (/vragenlijst).
 * Dit is dezelfde lijst als in het Word-document, zodat Karen alles
 * online kan invullen. Pas hier gerust vragen aan of voeg ze toe.
 */

export type IntakeQuestion = {
  id: string; // stabiele sleutel (voor opslaan in de browser)
  label: string; // de vraag
  hint?: string; // korte toelichting tussen haakjes
  type?: "text" | "textarea"; // standaard: textarea
};

export type IntakeSection = {
  title: string;
  note?: string;
  questions: IntakeQuestion[];
};

export const intakeIntro =
  "Dag Karen, om een website te maken die écht bij jou past, mag je onderstaande vragen invullen. Doe het op je eigen tempo en in je eigen woorden — kort mag, en waar je iets niet weet of liever niet deelt, laat je het gewoon open. Je antwoorden worden automatisch bewaard in deze browser, dus je kunt tussendoor stoppen en later verdergaan. Ben je klaar (of tussentijds)? Klik op “Download mijn antwoorden” of “Kopieer alles” en bezorg ze aan wie de site maakt.";

export const intakeSections: IntakeSection[] = [
  {
    title: "1. Wie je bent",
    questions: [
      {
        id: "s1q1",
        label: "Hoe wil je jezelf voorstellen op de site?",
        hint: "bijvoorbeeld je naam, en één zin die zegt wie je bent",
        type: "text",
      },
      {
        id: "s1q2",
        label: "Wat is je achtergrond als life coach?",
        hint: "opleiding, sinds wanneer, eventuele certificaten",
      },
      {
        id: "s1q3",
        label:
          "Wat drijft je om mensen in rouw bij te staan? Wat wil je voor hen betekenen?",
      },
    ],
  },
  {
    title: "2. Wat je aanbiedt",
    questions: [
      {
        id: "s2q1",
        label: "Welke begeleiding wil je geven?",
        hint: "bv. individuele gesprekken, rouwbegeleiding na verlies, na euthanasie, life coaching …",
      },
      {
        id: "s2q2",
        label: "Voor wie is het vooral bedoeld?",
        hint: "bv. partners die iemand verloren, ouders, jongeren, iedereen …",
      },
      {
        id: "s2q3",
        label: "Hoe verloopt een begeleiding ongeveer?",
        hint: "een enkel gesprek, of een traject van meerdere sessies?",
      },
      {
        id: "s2q4",
        label: "Waar zou je de gesprekken doen?",
        hint: "bij jou thuis, bij de persoon thuis, online, een combinatie?",
      },
      {
        id: "s2q5",
        label: "Werk je met een tarief per gesprek?",
        hint: "mag ook later — enkel als je dit nu al op de site wil",
      },
    ],
  },
  {
    title: "3. Je eigen verhaal",
    note: "Je hebt zelf een groot verlies meegemaakt. Dat maakt je geloofwaardig en nabij. Maar jij bepaalt volledig wat je deelt.",
    questions: [
      {
        id: "s3q1",
        label: "Wil je iets van je eigen ervaring op de site vertellen?",
        hint: "zo ja: alles, een stukje, of eerder subtiel (“ik spreek uit ervaring”)?",
      },
      {
        id: "s3q2",
        label: "Is er iets dat je zeker níét vermeld wil zien?",
      },
    ],
  },
  {
    title: "4. De sfeer",
    questions: [
      {
        id: "s4q1",
        label: "Welk gevoel moet de site oproepen?",
        hint: "bv. rustig, warm, hoopvol, ingetogen, licht …",
      },
      {
        id: "s4q2",
        label: "Heb je een lievelingskleur of kleuren die goed voelen?",
        type: "text",
      },
      {
        id: "s4q3",
        label: "Zijn er websites, folders of beelden die je mooi of passend vindt?",
        hint: "voeg gerust voorbeelden of links toe",
      },
    ],
  },
  {
    title: "5. Praktisch",
    questions: [
      {
        id: "s5q1",
        label: "Welke contactgegevens mogen op de site?",
        hint: "e-mailadres, telefoonnummer",
        type: "text",
      },
      {
        id: "s5q2",
        label: "In welke woonplaats of regio werk je?",
        type: "text",
      },
      {
        id: "s5q3",
        label:
          "Heb je al een naam voor je praktijk in gedachten, of gebruiken we je eigen naam?",
        type: "text",
      },
      {
        id: "s5q4",
        label: "Heb je al een domeinnaam (webadres), of kiezen we die samen?",
        hint: "bv. viamano.be",
        type: "text",
      },
      {
        id: "s5q5",
        label:
          "Wil je dat mensen via de site een bericht kunnen sturen of een afspraak kunnen aanvragen?",
        type: "text",
      },
      {
        id: "s5q6",
        label:
          "Heb je een foto van jezelf die je wil gebruiken, of liever sfeerbeelden?",
        hint: "natuur, licht, handen …",
      },
    ],
  },
  {
    title: "6. Zodat mensen je online vinden",
    note: "Deze gegevens helpen om goed gevonden te worden in Google (zeker lokaal). Kort antwoorden mag.",
    questions: [
      {
        id: "s6q1",
        label: "In welke gemeente werk je, en in welke provincie?",
        hint: "en de postcode",
        type: "text",
      },
      {
        id: "s6q2",
        label: "Welke regio of gemeenten wil je vooral bereiken?",
        hint: "bv. je eigen gemeente + omliggende",
        type: "text",
      },
      {
        id: "s6q3",
        label:
          "Mag je (thuis)adres op de site en bij Google vermeld worden, of werk je liever “op afspraak” zonder straatadres?",
      },
      {
        id: "s6q4",
        label: "Wanneer ben je bereikbaar of beschikbaar voor gesprekken?",
        hint: "bv. avonden, weekends",
        type: "text",
      },
      {
        id: "s6q5",
        label: "Heb je een Facebook- of Instagrampagina die we mogen vermelden?",
        hint: "voeg gerust de link toe",
        type: "text",
      },
    ],
  },
  {
    title: "7. Nog iets?",
    questions: [
      {
        id: "s7q1",
        label:
          "Is er iets dat voor jou echt belangrijk is en hier nog niet stond?",
      },
    ],
  },
];
