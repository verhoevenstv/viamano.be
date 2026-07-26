import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { Section } from "@/components/Section";
import { Button } from "@/components/Button";
import { about } from "@/lib/content";

export const metadata: Metadata = {
  title: "Over mij",
  description: about.intro,
};

export default function OverMijPage() {
  return (
    <>
      <PageHeader eyebrow={about.eyebrow} title={about.title} />

      <Section>
        <div className="grid gap-12 md:grid-cols-[1fr_1.4fr] md:gap-16">
          {/* Placeholder voor portretfoto */}
          <div className="flex aspect-[4/5] items-center justify-center rounded-2xl border border-dashed border-sand-deep bg-sand md:sticky md:top-28 md:self-start">
            <span className="px-6 text-center text-sm text-muted">
              Portretfoto van Karen
              <br />
              (placeholder)
            </span>
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
