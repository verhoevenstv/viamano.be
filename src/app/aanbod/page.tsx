import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { Section } from "@/components/Section";
import { Button } from "@/components/Button";
import { Container } from "@/components/Container";
import { services } from "@/lib/content";
import { icons } from "@/components/Icons";

export const metadata: Metadata = {
  title: "Aanbod",
  description:
    "Rouwbegeleiding, begeleiding na euthanasie en life coaching — begeleiding die aansluit bij wat jij nodig hebt.",
  alternates: { canonical: "/aanbod" },
};

export default function AanbodPage() {
  return (
    <>
      <PageHeader
        eyebrow="Aanbod"
        title="Begeleiding die aansluit bij wat jij nodig hebt"
        intro="Elk verlies is anders. Daarom stem ik de begeleiding af op jouw verhaal en jouw tempo. Hieronder lees je wat ik aanbied."
      />

      <Section>
        <div className="space-y-8">
          {services.map((service) => {
            const Icon = icons[service.icon];
            return (
              <article
                key={service.slug}
                id={service.slug}
                className="scroll-mt-28 rounded-2xl border border-sand-deep bg-cream p-8 sm:p-10"
              >
                <div className="flex flex-col gap-6 sm:flex-row sm:items-start">
                  <span className="inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-sand text-sage-deep">
                    <Icon className="h-7 w-7" />
                  </span>
                  <div className="flex-1">
                    <h2 className="font-serif text-2xl text-ink">
                      {service.title}
                    </h2>
                    <p className="mt-3 leading-relaxed text-muted">
                      {service.summary}
                    </p>

                    <div className="mt-6 grid gap-6 sm:grid-cols-2">
                      <div>
                        <p className="text-sm font-medium text-sage-deep">
                          Voor wie
                        </p>
                        <p className="mt-1.5 text-sm leading-relaxed text-muted">
                          {service.forWhom}
                        </p>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-sage-deep">
                          Hoe het werkt
                        </p>
                        <p className="mt-1.5 text-sm leading-relaxed text-muted">
                          {service.how}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </Section>

      {/* CTA */}
      <section className="bg-sand py-16">
        <Container size="narrow" className="text-center">
          <h2 className="font-serif text-2xl text-ink sm:text-3xl">
            Niet zeker wat bij jou past?
          </h2>
          <p className="mx-auto mt-3 max-w-lg text-muted">
            Dat hoeft ook niet. In een vrijblijvend kennismakingsgesprek zoeken
            we samen uit wat je nodig hebt.
          </p>
          <div className="mt-7 flex justify-center">
            <Button href="/contact">Plan een kennismaking</Button>
          </div>
        </Container>
      </section>
    </>
  );
}
