import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { Section } from "@/components/Section";
import { Container } from "@/components/Container";
import { Button } from "@/components/Button";
import { werkwijze } from "@/lib/content";

export const metadata: Metadata = {
  title: "Werkwijze",
  description: werkwijze.intro,
  alternates: { canonical: "/werkwijze/" },
  openGraph: {
    title: "Werkwijze — Viamano",
    description: werkwijze.intro,
    url: "https://viamano.be/werkwijze/",
  },
  twitter: {
    title: "Werkwijze — Viamano",
    description: werkwijze.intro,
  },
};

export default function WerkwijzePage() {
  return (
    <>
      <PageHeader
        eyebrow={werkwijze.eyebrow}
        title={werkwijze.title}
        intro={werkwijze.intro}
      />

      {/* Stappen */}
      <Section>
        <ol className="space-y-8">
          {werkwijze.steps.map((step, i) => (
            <li key={i} className="flex gap-6">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-sage-soft font-serif text-lg text-sage-deep">
                {i + 1}
              </span>
              <div className="pt-1.5">
                <h2 className="font-serif text-xl text-ink">{step.title}</h2>
                <p className="mt-2 max-w-2xl leading-relaxed text-muted">
                  {step.text}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </Section>

      {/* Praktisch */}
      <section className="bg-sand py-20">
        <Container size="narrow">
          <h2 className="font-serif text-2xl text-ink sm:text-3xl">
            {werkwijze.practical.title}
          </h2>
          <ul className="mt-6 space-y-4">
            {werkwijze.practical.items.map((item, i) => (
              <li key={i} className="flex gap-3 text-muted">
                <span
                  aria-hidden="true"
                  className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold"
                />
                <span className="leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
          <div className="mt-10">
            <Button href="/contact">Plan een kennismaking</Button>
          </div>
        </Container>
      </section>
    </>
  );
}
