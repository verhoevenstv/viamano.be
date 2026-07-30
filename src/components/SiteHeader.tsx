"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { nav, siteConfig } from "@/lib/content";
import { Container } from "./Container";

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-sand-deep/60 bg-cream/85 backdrop-blur">
      <Container className="flex h-20 items-center justify-between">
        {/* Logo / naam */}
        <Link
          href="/"
          className="flex items-center gap-3"
          onClick={() => setOpen(false)}
        >
          <Image
            src="/logo-mark-navy.png"
            alt=""
            width={431}
            height={504}
            priority
            className="h-11 w-auto"
          />
          <span className="flex flex-col leading-none">
            <span className="font-serif text-3xl lowercase tracking-[0.02em] text-ink">
              {siteConfig.name}
            </span>
            <span className="mt-1 flex items-center gap-2 text-[10px] uppercase tracking-[0.22em] text-sage-deep">
              <span aria-hidden="true" className="h-px w-4 bg-gold" />
              {siteConfig.role}
            </span>
          </span>
        </Link>

        {/* Desktop-navigatie */}
        <nav className="hidden items-center gap-8 md:flex">
          {nav.map((item) => {
            const active =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm transition-colors hover:text-sage-deep ${
                  active ? "text-sage-deep" : "text-ink/80"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Mobiel: openknop */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full text-ink md:hidden"
          aria-label={open ? "Menu sluiten" : "Menu openen"}
          aria-expanded={open}
        >
          <span className="sr-only">Menu</span>
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            className="h-6 w-6"
            aria-hidden="true"
          >
            {open ? (
              <path d="M6 6l12 12M18 6L6 18" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" />
            )}
          </svg>
        </button>
      </Container>

      {/* Mobiel menu */}
      {open && (
        <nav className="border-t border-sand-deep/60 bg-cream md:hidden">
          <Container className="flex flex-col py-4">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="py-3 text-base text-ink/90 hover:text-sage-deep"
              >
                {item.label}
              </Link>
            ))}
          </Container>
        </nav>
      )}
    </header>
  );
}
