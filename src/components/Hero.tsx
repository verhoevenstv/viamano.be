import Image from "next/image";
import { home } from "@/lib/content";
import { Container } from "./Container";
import { Button } from "./Button";

export function Hero() {
  const { hero } = home;
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-sand to-cream">
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

          {/* Sfeerbeeld: samen wandelen op een bospad */}
          <div className="relative hidden md:block">
            <span
              aria-hidden="true"
              className="absolute inset-0 rounded-2xl bg-sage-soft/20 blur-3xl"
            />
            <Image
              src="/images/sfeer-bospad-wandelen.jpg"
              alt="Twee personen wandelen samen op een mistig bospad"
              width={1152}
              height={896}
              priority
              className="relative rounded-2xl object-cover shadow-lg"
            />
          </div>
        </div>
      </Container>

      {/* Mobiel: sfeerbeeld als subtiele achtergrond */}
      <div className="absolute inset-0 md:hidden">
        <Image
          src="/images/sfeer-bospad-wandelen.jpg"
          alt=""
          fill
          aria-hidden="true"
          className="object-cover opacity-[0.08]"
        />
      </div>
    </section>
  );
}
