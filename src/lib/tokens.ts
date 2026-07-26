/**
 * Design tokens — het kleuren- en typografiepalet van Amano.
 *
 * De échte waarden leven in `src/app/globals.css` (Tailwind v4 `@theme`),
 * zodat ze als utility-klassen beschikbaar zijn (bv. `bg-cream`, `text-sage`).
 * Dit bestand documenteert ze op één plek, zodat je snel ziet wat er is.
 *
 * Sfeer: afgeleid van het Amano-logo — diep navy-blauw en warme crème,
 * met een blauwgrijze (slate) tint en een fijn goud accent.
 */

export const palette = {
  cream: "#F5ECDB", // warme crème achtergrond
  sand: "#ECE0C9", // iets dieper crème voor vlakken
  sandDeep: "#DDCEB2", // randen / lijnen
  ink: "#2C4459", // hoofdtekst & koppen (diep navy)
  muted: "#5F6B76", // secundaire tekst (gedempt)
  sage: "#436383", // medium navy (hover) — accenttoken "sage"
  sageDeep: "#33506B", // primair navy — knoppen, labels, CTA
  sageSoft: "#B9C6D3", // licht blauwgrijs (subtiel / op donker)
  clay: "#A67F3F", // goud-accent voor tekst (spaarzaam)
  navy: "#33506B", // merk-navy
  slate: "#5F7185", // blauwgrijze vlakken
  slateSoft: "#C3CCD6", // lichte tekst op navy/slate
  gold: "#C39A5B", // goud accentlijn
} as const;

export const fonts = {
  serif: "Fraunces — koppen (warm, menselijk)",
  sans: "Inter — lopende tekst (helder, rustig)",
} as const;
