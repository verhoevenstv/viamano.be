import Link from "next/link";
import Image from "next/image";
import { nav, siteConfig } from "@/lib/content";
import { Container } from "./Container";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-ink text-cream">
      <Container className="py-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {/* Volledig logo + korte omschrijving */}
          <div>
            <Image
              src="/logos/viamano-logo-creme-transparant.png"
              alt={`${siteConfig.name} — ${siteConfig.tagline}`}
              width={3057}
              height={1797}
              className="h-auto w-56"
            />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-slate-soft">
              {siteConfig.description}
            </p>
          </div>

          {/* Navigatie */}
          <div>
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.15em] text-gold">
              Menu
            </p>
            <ul className="space-y-2">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-slate-soft transition-colors hover:text-cream"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.15em] text-gold">
              Contact
            </p>
            <ul className="space-y-2 text-sm text-slate-soft">
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="transition-colors hover:text-cream"
                >
                  {siteConfig.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${siteConfig.phone.replace(/[^\d+]/g, "")}`}
                  className="transition-colors hover:text-cream"
                >
                  {siteConfig.phone}
                </a>
              </li>
              <li>{siteConfig.region}</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6 text-xs text-slate-soft">
          <p>
            © {year} {siteConfig.name} — {siteConfig.domain}. Met zorg gemaakt.
          </p>
        </div>
      </Container>
    </footer>
  );
}
