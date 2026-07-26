import { Hero } from "@/components/Hero";
import { Section, Eyebrow } from "@/components/Section";
import { ServiceCard } from "@/components/ServiceCard";
import { Button } from "@/components/Button";
import { Container } from "@/components/Container";
import { home, services } from "@/lib/content";

export default function HomePage() {
  return (
    <>
      <Hero />

      {/* Welkom */}
      <Section containerSize="narrow" className="text-center">
        <Eyebrow>{home.welcome.eyebrow}</Eyebrow>
        <h2 className="font-serif text-3xl text-ink sm:text-4xl">
          {home.welcome.title}
        </h2>
        <div className="prose-soft mt-6 space-y-5 text-muted">
          {home.welcome.paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </Section>

      {/* Aanbod-teaser */}
      <section className="bg-sand py-20 sm:py-28">
        <Container>
          <div className="max-w-2xl">
            <Eyebrow>{home.servicesTeaser.eyebrow}</Eyebrow>
            <h2 className="font-serif text-3xl text-ink sm:text-4xl">
              {home.servicesTeaser.title}
            </h2>
            <p className="mt-4 text-muted">{home.servicesTeaser.intro}</p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {services.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
        </Container>
      </section>

      {/* Over mij-teaser */}
      <Section>
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div>
            <Eyebrow>{home.aboutTeaser.eyebrow}</Eyebrow>
            <h2 className="font-serif text-3xl text-ink sm:text-4xl">
              {home.aboutTeaser.title}
            </h2>
            <p className="mt-6 leading-relaxed text-muted">
              {home.aboutTeaser.text}
            </p>
            <div className="mt-8">
              <Button href={home.aboutTeaser.cta.href} variant="ghost">
                {home.aboutTeaser.cta.label}
              </Button>
            </div>
          </div>
          {/* Placeholder voor een foto van Karen of een sfeerbeeld */}
          <div className="flex aspect-[4/5] items-center justify-center rounded-2xl border border-dashed border-sand-deep bg-sand">
            <span className="px-6 text-center text-sm text-muted">
              Foto van Karen of sfeerbeeld
              <br />
              (placeholder)
            </span>
          </div>
        </div>
      </Section>

      {/* Slot-CTA */}
      <section className="bg-sage-deep py-20 sm:py-24">
        <Container size="narrow" className="text-center">
          <h2 className="font-serif text-3xl text-cream sm:text-4xl">
            {home.closingCta.title}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sage-soft">
            {home.closingCta.text}
          </p>
          <div className="mt-8 flex justify-center">
            <Button
              href={home.closingCta.cta.href}
              className="bg-cream text-sage-deep hover:bg-sand"
            >
              {home.closingCta.cta.label}
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
