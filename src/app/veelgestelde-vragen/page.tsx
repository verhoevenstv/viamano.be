import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { Section } from "@/components/Section";
import { Container } from "@/components/Container";
import { Button } from "@/components/Button";
import { FaqAccordion } from "@/components/FaqAccordion";
import { faq, siteConfig } from "@/lib/content";

export const metadata: Metadata = {
  title: "Veelgestelde vragen",
  description: faq.intro,
  alternates: { canonical: "/veelgestelde-vragen/" },
  openGraph: {
    title: "Veelgestelde vragen — Viamano",
    description: faq.intro,
    url: "https://viamano.be/veelgestelde-vragen/",
  },
  twitter: {
    title: "Veelgestelde vragen — Viamano",
    description: faq.intro,
  },
};

function FaqJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export default function FaqPage() {
  return (
    <>
      <FaqJsonLd />

      <PageHeader
        eyebrow={faq.eyebrow}
        title={faq.title}
        intro="Hieronder vind je antwoorden op de meest gestelde vragen over rouwcoaching, hoe een traject werkt en wat je kunt verwachten bij Viamano."
      />

      {/* FAQ Accordion */}
      <Section containerSize="narrow">
        <FaqAccordion items={faq.items} />
      </Section>

      {/* Verdiepende artikelen */}
      <section className="bg-sand py-20">
        <Container size="narrow">
          <h2 className="font-serif text-2xl text-ink sm:text-3xl">
            Meer lezen over rouw en rouwcoaching
          </h2>
          <p className="mt-3 text-muted">
            Wil je meer weten? Hieronder vind je uitgebreide artikelen over wat
            rouwcoaching inhoudt, hoe je een coach kiest en hoe rouwverwerking
            werkt.
          </p>

          <div className="mt-10 space-y-10">
            {faq.articles.map((article) => (
              <article
                key={article.slug}
                id={article.slug}
                className="scroll-mt-28 rounded-2xl border border-sand-deep bg-cream p-8 sm:p-10"
              >
                <h3 className="font-serif text-xl text-ink sm:text-2xl">
                  {article.title}
                </h3>
                <p className="mt-3 leading-relaxed text-muted">
                  {article.intro}
                </p>

                <div className="mt-6 space-y-6">
                  {article.sections.map((section, i) => (
                    <div key={i}>
                      <h4 className="font-serif text-lg text-sage-deep">
                        {section.heading}
                      </h4>
                      <p className="mt-2 leading-relaxed text-muted">
                        {section.content}
                      </p>
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="bg-cream py-16">
        <Container size="narrow" className="text-center">
          <h2 className="font-serif text-2xl text-ink sm:text-3xl">
            Nog vragen? Of klaar voor een eerste stap?
          </h2>
          <p className="mx-auto mt-3 max-w-lg text-muted">
            Neem gerust contact op. Een kennismakingsgesprek is altijd
            vrijblijvend en vertrouwelijk.
          </p>
          <div className="mt-7 flex justify-center">
            <Button href="/contact">Plan een kennismaking</Button>
          </div>
        </Container>
      </section>
    </>
  );
}
