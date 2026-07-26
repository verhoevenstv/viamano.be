import Link from "next/link";
import { nav, siteConfig } from "@/lib/content";
import { Container } from "./Container";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-sand-deep bg-sand">
      <Container className="py-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {/* Naam + korte lijn */}
          <div>
            <p className="font-serif text-2xl text-ink">{siteConfig.name}</p>
            <p className="mt-1 text-sm uppercase tracking-[0.2em] text-sage-deep">
              {siteConfig.role}
            </p>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted">
              {siteConfig.description}
            </p>
          </div>

          {/* Navigatie */}
          <div>
            <p className="mb-4 text-sm font-medium text-ink">Menu</p>
            <ul className="space-y-2">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-muted transition-colors hover:text-sage-deep"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="mb-4 text-sm font-medium text-ink">Contact</p>
            <ul className="space-y-2 text-sm text-muted">
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="transition-colors hover:text-sage-deep"
                >
                  {siteConfig.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${siteConfig.phone.replace(/[^\d+]/g, "")}`}
                  className="transition-colors hover:text-sage-deep"
                >
                  {siteConfig.phone}
                </a>
              </li>
              <li>{siteConfig.region}</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-sand-deep pt-6 text-xs text-muted">
          <p>
            © {year} {siteConfig.name} — {siteConfig.domain}. Met zorg gemaakt.
          </p>
        </div>
      </Container>
    </footer>
  );
}
