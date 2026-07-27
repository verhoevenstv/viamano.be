"use client";

import { useEffect, useRef, useState } from "react";
import { intakeIntro, intakeSections } from "@/lib/intake";

const STORAGE_KEY = "amano-vragenlijst";

type Answers = Record<string, string>;

export function IntakeForm() {
  const [answers, setAnswers] = useState<Answers>({});
  const [saved, setSaved] = useState(false);
  const [copied, setCopied] = useState(false);
  const loaded = useRef(false);

  // Antwoorden terughalen bij het openen
  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) setAnswers(JSON.parse(raw));
    } catch {
      /* geen opgeslagen versie */
    }
    loaded.current = true;
  }, []);

  // Automatisch opslaan bij elke wijziging
  useEffect(() => {
    if (!loaded.current) return;
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(answers));
      setSaved(true);
      const t = setTimeout(() => setSaved(false), 1500);
      return () => clearTimeout(t);
    } catch {
      /* opslaan niet mogelijk */
    }
  }, [answers]);

  function update(id: string, value: string) {
    setAnswers((prev) => ({ ...prev, [id]: value }));
  }

  function buildText() {
    const datum = new Date().toLocaleDateString("nl-BE", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
    const lines: string[] = [
      "AMANO — Ingevulde vragenlijst",
      `Ingevuld op ${datum}`,
      "",
    ];
    for (const section of intakeSections) {
      lines.push(`== ${section.title} ==`, "");
      for (const q of section.questions) {
        const a = (answers[q.id] || "").trim();
        lines.push(`${q.label}`);
        lines.push(a ? a : "(nog niet ingevuld)");
        lines.push("");
      }
    }
    return lines.join("\n");
  }

  function download() {
    const blob = new Blob([buildText()], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "Amano-vragenlijst-antwoorden.txt";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }

  async function copyAll() {
    try {
      await navigator.clipboard.writeText(buildText());
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* clipboard niet beschikbaar */
    }
  }

  function clearAll() {
    if (
      window.confirm(
        "Weet je zeker dat je alle antwoorden wil wissen? Dit kan niet ongedaan gemaakt worden.",
      )
    ) {
      setAnswers({});
      try {
        localStorage.removeItem(STORAGE_KEY);
      } catch {
        /* niets */
      }
    }
  }

  return (
    <div className="pb-28">
      <p className="prose-soft max-w-2xl leading-relaxed text-muted">
        {intakeIntro}
      </p>

      <div className="mt-10 space-y-8">
        {intakeSections.map((section) => (
          <section
            key={section.title}
            className="rounded-2xl border border-sand-deep bg-cream p-6 sm:p-8"
          >
            <h2 className="font-serif text-2xl text-ink">{section.title}</h2>
            {section.note && (
              <p className="mt-2 text-sm italic leading-relaxed text-muted">
                {section.note}
              </p>
            )}

            <div className="mt-6 space-y-6">
              {section.questions.map((q) => (
                <div key={q.id}>
                  <label
                    htmlFor={q.id}
                    className="block text-[15px] font-medium text-ink"
                  >
                    {q.label}
                  </label>
                  {q.hint && (
                    <span className="mt-0.5 block text-sm text-muted">
                      {q.hint}
                    </span>
                  )}
                  {q.type === "text" ? (
                    <input
                      id={q.id}
                      type="text"
                      value={answers[q.id] || ""}
                      onChange={(e) => update(q.id, e.target.value)}
                      className="mt-2 w-full rounded-xl border border-sand-deep bg-white/60 px-4 py-2.5 text-ink outline-none transition-colors focus:border-sage"
                    />
                  ) : (
                    <textarea
                      id={q.id}
                      rows={3}
                      value={answers[q.id] || ""}
                      onChange={(e) => update(q.id, e.target.value)}
                      className="mt-2 w-full resize-y rounded-xl border border-sand-deep bg-white/60 px-4 py-2.5 text-ink outline-none transition-colors focus:border-sage"
                    />
                  )}
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>

      <button
        type="button"
        onClick={clearAll}
        className="mt-8 text-sm text-muted underline underline-offset-4 transition-colors hover:text-ink"
      >
        Alle antwoorden wissen
      </button>

      {/* Vaste actiebalk onderaan */}
      <div className="fixed inset-x-0 bottom-0 z-30 border-t border-sand-deep bg-cream/95 backdrop-blur">
        <div className="mx-auto flex max-w-4xl flex-col items-center gap-3 px-6 py-4 sm:flex-row sm:justify-between">
          <p className="text-sm text-muted">
            {saved ? (
              <span className="text-sage-deep">✓ Automatisch opgeslagen</span>
            ) : (
              "Je antwoorden worden automatisch in deze browser bewaard."
            )}
          </p>
          <div className="flex gap-3">
            <button
              type="button"
              onClick={copyAll}
              className="rounded-full border border-sand-deep px-5 py-2.5 text-sm font-medium text-ink transition-colors hover:border-sage hover:text-sage-deep"
            >
              {copied ? "Gekopieerd ✓" : "Kopieer alles"}
            </button>
            <button
              type="button"
              onClick={download}
              className="rounded-full bg-sage-deep px-5 py-2.5 text-sm font-medium text-cream transition-colors hover:bg-sage"
            >
              Download mijn antwoorden
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
