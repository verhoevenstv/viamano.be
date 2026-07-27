import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { Section } from "@/components/Section";
import { Button } from "@/components/Button";
import { tarieven } from "@/lib/content";

export const metadata: Metadata = {
  title: "Tarieven",
  description: tarieven.intro,
  alternates: { canonical: "/tarieven" },
};

export default function TarievenPage() {
  return (
    <>
      <PageHeader
        eyebrow={tarieven.eyebrow}
        title={tarieven.title}
        intro={tarieven.intro}
      />

      <Section containerSize="narrow">
        <ul className="divide-y divide-sand-deep overflow-hidden rounded-2xl border border-sand-deep bg-cream">
          {tarieven.items.map((item, i) => (
            <li
              key={i}
              className="flex flex-col gap-1 p-6 sm:flex-row sm:items-center sm:justify-between sm:gap-6"
            >
              <div>
                <p className="font-serif text-lg text-ink">{item.label}</p>
                {item.note && (
                  <p className="mt-1 text-sm text-muted">{item.note}</p>
                )}
              </div>
              <p className="shrink-0 font-medium text-sage-deep">{item.price}</p>
            </li>
          ))}
        </ul>

        <p className="mt-6 text-sm leading-relaxed text-muted">
          {tarieven.footnote}
        </p>

        <div className="mt-10">
          <Button href="/contact">Neem contact op</Button>
        </div>
      </Section>
    </>
  );
}
