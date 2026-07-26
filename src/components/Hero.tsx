import { home } from "@/lib/content";
import { Container } from "./Container";
import { Button } from "./Button";

export function Hero() {
  const { hero } = home;
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-sand to-cream">
      {/* Zacht decoratief accent */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-sage-soft/25 blur-3xl"
      />
      <Container className="relative py-24 sm:py-32">
        <div className="max-w-2xl">
          <p className="mb-5 text-sm font-medium uppercase tracking-[0.2em] text-sage-deep">
            {hero.eyebrow}
          </p>
          <h1 className="font-serif text-4xl leading-tight text-ink sm:text-5xl md:text-6xl">
            {hero.title}
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
            {hero.subtitle}
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Button href={hero.primaryCta.href}>{hero.primaryCta.label}</Button>
            <Button href={hero.secondaryCta.href} variant="ghost">
              {hero.secondaryCta.label}
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
