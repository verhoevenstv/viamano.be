import { Container } from "./Container";

type PageHeaderProps = {
  eyebrow: string;
  title: string;
  intro?: string;
};

/** Rustige kop bovenaan een binnenpagina. */
export function PageHeader({ eyebrow, title, intro }: PageHeaderProps) {
  return (
    <div className="border-b border-sand-deep bg-gradient-to-b from-sand to-cream">
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
