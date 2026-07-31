import type { Metadata } from "next";
import Image from "next/image";
import { PageHeader } from "@/components/PageHeader";
import { Section } from "@/components/Section";
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
              src="/images/sfeer-mistig-meer.jpg"
              alt="Sereen landschap — placeholder voor portretfoto van Karen"
              fill
              className="object-cover"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/40 to-transparent p-4">
              <p className="text-center text-xs text-cream/80">
                Portretfoto volgt binnenkort
              </p>
            </div>
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
    </>
  );
}
