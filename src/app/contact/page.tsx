import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { Section } from "@/components/Section";
import { ContactForm } from "@/components/ContactForm";
import { contact, siteConfig } from "@/lib/content";

export const metadata: Metadata = {
  title: "Contact",
  description: contact.intro,
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow={contact.eyebrow}
        title={contact.title}
        intro={contact.intro}
      />

      <Section>
        <div className="grid gap-12 md:grid-cols-[1.2fr_1fr] md:gap-16">
          {/* Formulier */}
          <div>
            <ContactForm />
            <p className="mt-4 text-sm text-muted">{contact.formNote}</p>
          </div>

          {/* Contactgegevens */}
          <aside className="rounded-2xl border border-sand-deep bg-sand p-8">
            <h2 className="font-serif text-xl text-ink">Rechtstreeks contact</h2>
            <dl className="mt-6 space-y-5 text-sm">
              <div>
                <dt className="text-sage-deep">E-mail</dt>
                <dd className="mt-1">
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="text-ink transition-colors hover:text-sage-deep"
                  >
                    {siteConfig.email}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-sage-deep">Telefoon</dt>
                <dd className="mt-1">
                  <a
                    href={`tel:${siteConfig.phone.replace(/[^\d+]/g, "")}`}
                    className="text-ink transition-colors hover:text-sage-deep"
                  >
                    {siteConfig.phone}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-sage-deep">Regio</dt>
                <dd className="mt-1 text-ink">{siteConfig.region}</dd>
              </div>
            </dl>
          </aside>
        </div>
      </Section>
    </>
  );
}
