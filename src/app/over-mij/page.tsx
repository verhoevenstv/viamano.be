import type { Metadata } from "next";
import Image from "next/image";
import { PageHeader } from "@/components/PageHeader";
import { Section } from "@/components/Section";
import { Container } from "@/components/Container";
import { Button } from "@/components/Button";
import { about } from "@/lib/content";

export const metadata: Metadata = {
  title: "Over mij",
  description: about.intro,
  alternates: { canonical: "/over-mij/" },
  openGraph: {
    title: "Over mij — Viamano",
    description: about.intro,
    url: "https://viamano.be/over-mij/",
  },
  twitter: {
    title: "Over mij — Viamano",
    description: about.intro,
  },
};

export default function OverMijPage() {
  return (
    <>
      <PageHeader eyebrow={about.eyebrow} title={about.title} />

      <Section>
        <div className="grid gap-12 md:grid-cols-[1fr_1.4fr] md:gap-16">
          <div className="relative aspect-[4/5] overflow-hidden rounded-2xl md:sticky md:top-28 md:self-start">
            <Image
              src="/images/karen-portret.jpg"
              alt="Karen Dierickx — rouwcoach bij Viamano"
              fill
              className="object-cover object-top"
            />
          </div>

          <div className="prose-soft space-y-5 text-muted">
            {about.paragraphs.map((p, i) => (
              <p key={i} className="leading-relaxed">
                {p}
              </p>
            ))}

            {/* Waarden */}
            <div className="grid gap-4 pt-6 sm:grid-cols-3">
              {about.values.map((value) => (
                <div
                  key={value.title}
                  className="rounded-2xl border border-sand-deep bg-cream p-6"
                >
                  <p className="font-serif text-lg text-ink">{value.title}</p>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {value.text}
                  </p>
                </div>
              ))}
            </div>

            <div className="pt-6">
              <Button href="/contact">Neem contact op</Button>
            </div>
          </div>
        </div>
      </Section>

      {/* De betekenis van ViaMano */}
      <section className="bg-sand py-20">
        <Container size="narrow">
          <div className="text-center">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-sage-deep">
              {about.nameMeaning.eyebrow}
            </p>
            <h2 className="mt-3 font-serif text-3xl text-ink sm:text-4xl">
              {about.nameMeaning.title}
            </h2>
          </div>

          <div className="mt-10 overflow-hidden rounded-2xl border border-sand-deep bg-cream">
            <div className="p-8 sm:p-10">
              <p className="text-lg leading-relaxed text-muted">
                {about.nameMeaning.intro}
              </p>
              <p className="mt-5 leading-relaxed text-muted">
                {about.nameMeaning.origin}
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                {about.nameMeaning.meanings.map((m) => (
                  <div
                    key={m.title}
                    className="rounded-xl border border-sand-deep bg-sand/40 p-5"
                  >
                    <p className="font-serif text-lg text-ink">{m.title}</p>
                    <p className="mt-2 text-sm leading-relaxed text-muted">
                      {m.text}
                    </p>
                  </div>
                ))}
              </div>

              <p className="mt-8 leading-relaxed text-muted">
                {about.nameMeaning.closing}
              </p>
            </div>
          </div>

          <blockquote className="mt-10 text-center">
            <p className="font-serif text-xl italic leading-relaxed text-sage-deep sm:text-2xl">
              ViaMano.
            </p>
            <p className="mt-2 text-lg italic leading-relaxed text-muted">
              {about.nameMeaning.poetic}
            </p>
          </blockquote>
        </Container>
      </section>
    </>
  );
}
