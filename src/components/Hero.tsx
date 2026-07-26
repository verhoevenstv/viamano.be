import Image from "next/image";
import { home } from "@/lib/content";
import { Container } from "./Container";
import { Button } from "./Button";

export function Hero() {
  const { hero } = home;
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-sand to-cream">
      {/* Grote, zeer subtiele handafdruk als sfeerbeeld op mobiel (achter de tekst) */}
      <Image
        src="/logo-mark-navy.png"
        alt=""
        width={431}
        height={504}
        aria-hidden="true"
        className="pointer-events-none absolute -right-10 top-6 w-56 opacity-[0.06] md:hidden"
      />

      <Container className="relative py-20 sm:py-28">
        <div className="grid items-center gap-10 md:grid-cols-[1.15fr_0.85fr]">
          {/* Tekst */}
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

          {/* Handafdruk naast de titel (vanaf tablet/desktop) */}
          <div className="relative hidden md:flex md:justify-center">
            <span
              aria-hidden="true"
              className="absolute h-72 w-72 rounded-full bg-sage-soft/20 blur-3xl"
            />
            <Image
              src="/logo-mark-navy.png"
              alt=""
              width={431}
              height={504}
              priority
              className="relative w-64 opacity-90 lg:w-72"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
