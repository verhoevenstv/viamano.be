/**
 * Design tokens — het kleuren- en typografiepalet van Amano.
 *
 * De échte waarden leven in `src/app/globals.css` (Tailwind v4 `@theme`),
 * zodat ze als utility-klassen beschikbaar zijn (bv. `bg-cream`, `text-sage`).
 * Dit bestand documenteert ze op één plek, zodat je snel ziet wat er is.
 *
 * Sfeer: rustig, warm, ingetogen — zachte zandtinten met salie-groen als accent.
 */

export const palette = {
  cream: "#FBF8F3", // warme achtergrond (bijna wit)
  sand: "#F1EAE0", // zachte zandtint voor vlakken
  sandDeep: "#E7DDCF", // iets dieper zand / randen
  ink: "#35362F", // hoofdtekst (warme antraciet)
  muted: "#6E6C63", // secundaire tekst
  sage: "#7C8A72", // accent (salie-groen)
  sageDeep: "#5C6A52", // dieper groen voor tekst/hover
  sageSoft: "#AEB9A2", // zacht groen voor subtiele vlakken
  clay: "#BE8A6A", // warm klei-accent (spaarzaam gebruiken)
} as const;

export const fonts = {
  serif: "Fraunces — koppen (warm, menselijk)",
  sans: "Inter — lopende tekst (helder, rustig)",
} as const;
