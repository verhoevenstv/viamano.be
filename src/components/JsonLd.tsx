import { siteConfig, services } from "@/lib/content";

/**
 * Gestructureerde data (Schema.org, JSON-LD) voor Google.
 * Helpt de site herkend te worden als lokale praktijk met een duidelijk
 * aanbod — belangrijk voor lokale zoekresultaten en rich results.
 *
 * De adres-/regio-velden komen uit `siteConfig` en bevatten nu placeholders;
 * zodra Karens echte gegevens ingevuld zijn, klopt deze data automatisch.
 */
export function JsonLd() {
  const businessId = `${siteConfig.url}/#business`;

  const business = {
    "@context": "https://schema.org",
    "@type": ["ProfessionalService", "LocalBusiness"],
    "@id": businessId,
    name: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    email: siteConfig.email,
    telephone: siteConfig.phone,
    image: `${siteConfig.url}/og-image.png`,
    logo: `${siteConfig.url}/logos/logo-primary.png`,
    priceRange: siteConfig.priceRange,
    address: {
      "@type": "PostalAddress",
      addressLocality: siteConfig.city,
      postalCode: siteConfig.postalCode,
      addressRegion: siteConfig.province,
      addressCountry: siteConfig.country,
      ...(siteConfig.streetAddress
        ? { streetAddress: siteConfig.streetAddress }
        : {}),
    },
    areaServed: siteConfig.areaServed.map((area) => ({
      "@type": "Place",
      name: area,
    })),
    founder: {
      "@type": "Person",
      name: "Karen",
      jobTitle: siteConfig.role,
    },
    knowsAbout: [
      "Rouwbegeleiding",
      "Rouwverwerking",
      "Verlies van een dierbare",
      "Begeleiding na euthanasie",
      "Life coaching",
    ],
    ...(siteConfig.sameAs.length ? { sameAs: siteConfig.sameAs } : {}),
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Aanbod",
      itemListElement: services.map((service) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: service.title,
          description: service.summary,
          url: `${siteConfig.url}/aanbod#${service.slug}`,
        },
      })),
    },
  };

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteConfig.url}/#website`,
    name: siteConfig.name,
    url: siteConfig.url,
    inLanguage: "nl-BE",
    publisher: { "@id": businessId },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify([business, website]) }}
    />
  );
}
