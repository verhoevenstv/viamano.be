import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { Section } from "@/components/Section";
import { IntakeForm } from "@/components/IntakeForm";

export const metadata: Metadata = {
  title: "Vragenlijst",
  description: "Interne vragenlijst voor de opbouw van de website.",
  // Interne pagina — niet indexeren en niet in het menu tonen
  robots: { index: false, follow: false },
};

export default function VragenlijstPage() {
  return (
    <>
      <PageHeader
        eyebrow="Voor Karen"
        title="Vragenlijst voor je website"
        intro="Vul in wat je al weet, op je eigen tempo. Je antwoorden blijven bewaard in deze browser tot je ze downloadt of kopieert."
      />
      <Section>
        <IntakeForm />
      </Section>
    </>
  );
}
