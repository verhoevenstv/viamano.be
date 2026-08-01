import type { Metadata } from "next";
import Image from "next/image";
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

const articleImages: Record<string, { src: string; alt: string }> = {
  "wat-is-rouwcoaching": {
    src: "/images/faq-bospad-zonlicht.jpg",
    alt: "Warm zonlicht schijnt door een mistig bos op een bladrijk pad",
  },
  "hoe-kies-je-een-rouwcoach": {
    src: "/images/faq-mistige-rivier.jpg",
    alt: "Serene mistige rivier omgeven door bomen in warme ochtendkleuren",
  },
  "verschil-rouwcoaching-rouwtherapie": {
    src: "/images/faq-graanveld-mist.jpg",
    alt: "Graanveld in zachte ochtendmist — openheid en stilte",
  },
  "rouwverwerking-in-de-hersenen": {
    src: "/images/faq-beekje-mos.jpg",
    alt: "Stromend beekje tussen mosgroene rotsen in een mistig bos",
  },
};

function FaqJsonLd() {
  const faqSchema = {
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

  const articleSchemas = faq.articles.map((article) => ({
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.intro,
    url: `${siteConfig.url}/veelgestelde-vragen/#${article.slug}`,
    author: {
      "@type": "Person",
      name: "Karen Dierickx",
      url: `${siteConfig.url}/over-mij/`,
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
      logo: `${siteConfig.url}/logos/logo-primary.png`,
    },
    inLanguage: "nl-BE",
    isPartOf: { "@type": "WebPage", url: `${siteConfig.url}/veelgestelde-vragen/` },
  }));

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify([faqSchema, ...articleSchemas]),
      }}
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
        breadcrumb={{ label: "Veelgestelde vragen", href: "/veelgestelde-vragen/" }}
      />

      {/* Sfeerbeeld boven de FAQ */}
      <div className="relative h-48 w-full overflow-hidden sm:h-64 md:h-72">
        <Image
          src="/images/faq-zandduinen.jpg"
          alt="Zandduinen met helmgras in zachte ochtendmist"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-cream/60 via-transparent to-cream/60" />
      </div>

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
            {faq.articles.map((article) => {
              const img = articleImages[article.slug];
              return (
                <article
                  key={article.slug}
                  id={article.slug}
                  className="scroll-mt-28 overflow-hidden rounded-2xl border border-sand-deep bg-cream"
                >
                  {img && (
                    <div className="relative h-48 w-full sm:h-56">
                      <Image
                        src={img.src}
                        alt={img.alt}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-cream/30" />
                    </div>
                  )}

                  <div className="p-8 sm:p-10">
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
                  </div>
                </article>
              );
            })}
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
