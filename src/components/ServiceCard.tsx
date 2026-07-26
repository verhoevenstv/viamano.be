import Link from "next/link";
import { type Service } from "@/lib/content";
import { icons } from "./Icons";

/** Kaart die één dienst voorstelt. */
export function ServiceCard({ service }: { service: Service }) {
  const Icon = icons[service.icon];
  return (
    <Link
      href={`/aanbod#${service.slug}`}
      className="group flex h-full flex-col rounded-2xl border border-sand-deep bg-cream p-8 transition-colors duration-200 hover:border-sage"
    >
      <span className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-full bg-sand text-sage-deep">
        <Icon className="h-6 w-6" />
      </span>
      <h3 className="font-serif text-xl text-ink">{service.title}</h3>
      <p className="mt-3 flex-1 text-[15px] leading-relaxed text-muted">
        {service.summary}
      </p>
      <span className="mt-6 text-sm font-medium text-sage-deep transition-transform duration-200 group-hover:translate-x-0.5">
        Meer weten →
      </span>
    </Link>
  );
}
