import { type ReactNode } from "react";
import { Container } from "./Container";

type SectionProps = {
  children: ReactNode;
  className?: string;
  containerSize?: "default" | "narrow";
  id?: string;
};

/** Verticale sectie met ruime witruimte. */
export function Section({
  children,
  className = "",
  containerSize = "default",
  id,
}: SectionProps) {
  return (
    <section id={id} className={`py-20 sm:py-28 ${className}`}>
      <Container size={containerSize}>{children}</Container>
    </section>
  );
}

/** Klein bovenschrift boven een titel. */
export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-sage-deep">
      {children}
    </p>
  );
}
