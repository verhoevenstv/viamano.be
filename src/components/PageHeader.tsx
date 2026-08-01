import { siteConfig } from "@/lib/content";
import { Container } from "./Container";

type PageHeaderProps = {
  eyebrow: string;
  title: string;
  intro?: string;
  breadcrumb?: { label: string; href: string };
};

function BreadcrumbJsonLd({ label, href }: { label: string; href: string }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: siteConfig.url + "/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: label,
        item: siteConfig.url + href,
      },
    ],
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function PageHeader({ eyebrow, title, intro, breadcrumb }: PageHeaderProps) {
  return (
    <div className="border-b border-sand-deep bg-gradient-to-b from-sand to-cream">
      {breadcrumb && <BreadcrumbJsonLd label={breadcrumb.label} href={breadcrumb.href} />}
      <Container className="py-20 sm:py-24">
        <div className="max-w-2xl">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-sage-deep">
            {eyebrow}
          </p>
          <h1 className="font-serif text-4xl leading-tight text-ink sm:text-5xl">
            {title}
          </h1>
          {intro && (
            <p className="mt-6 text-lg leading-relaxed text-muted">{intro}</p>
          )}
        </div>
      </Container>
    </div>
  );
}
