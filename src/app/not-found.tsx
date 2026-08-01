import Link from "next/link";
import { Container } from "@/components/Container";
import { Button } from "@/components/Button";

export default function NotFound() {
  return (
    <div className="flex flex-1 items-center bg-gradient-to-b from-sand to-cream">
      <Container size="narrow" className="py-20 text-center">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-sage-deep">
          Pagina niet gevonden
        </p>
        <h1 className="mt-3 font-serif text-4xl text-ink sm:text-5xl">404</h1>
        <p className="mx-auto mt-6 max-w-md text-lg leading-relaxed text-muted">
          Deze pagina bestaat niet of is verplaatst. Misschien vind je wat je
          zoekt via de homepage of het menu.
        </p>
        <div className="mt-8 flex justify-center gap-3">
          <Button href="/">Naar de homepage</Button>
          <Button href="/contact" variant="ghost">
            Contact
          </Button>
        </div>
      </Container>
    </div>
  );
}
