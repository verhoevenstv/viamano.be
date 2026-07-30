/**
 * Design tokens — het kleuren- en typografiepalet van Viamano.
 *
 * De échte waarden leven in `src/app/globals.css` (Tailwind v4 `@theme`),
 * zodat ze als utility-klassen beschikbaar zijn (bv. `bg-cream`, `text-sage`).
 * Dit bestand documenteert ze op één plek, zodat je snel ziet wat er is.
 *
 * Sfeer: afgeleid van het Viamano-logo — diep navy-blauw en warme crème,
 * met een blauwgrijze (slate) tint en een fijn goud accent.
 */

export const palette = {
  cream: "#F5ECDB", // warme crème / zand achtergrond
  sand: "#ECE0C9", // iets dieper zand voor vlakken
  sandDeep: "#DDCEB2", // randen / lijnen
  ink: "#16434C", // hoofdtekst & koppen (diep petrol)
  muted: "#5A6B6A", // secundaire tekst (gedempt petrol-grijs)
  sage: "#2C6B73", // medium petrol (hover) — accenttoken "sage"
  sageDeep: "#1D5560", // primair petroleumblauw — knoppen, labels, CTA
  sageSoft: "#A7C5C5", // licht petrol (subtiel / op donker)
  clay: "#A67C2C", // oker-accent voor tekst (spaarzaam)
  navy: "#1D5560", // petrol (tokennaam behouden)
  slate: "#275C63", // donkere petrol-vlakken
  slateSoft: "#BCD2D0", // lichte tekst op petrol
  gold: "#C8983A", // oker accentlijn
} as const;

export const fonts = {
  serif: "Fraunces — koppen (warm, menselijk)",
  sans: "Inter — lopende tekst (helder, rustig)",
} as const;
