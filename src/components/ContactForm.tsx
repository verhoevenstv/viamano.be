"use client";

import { useState, type FormEvent } from "react";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    setErrorMsg("");

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch("/contact.php", { method: "POST", body: data });
      if (res.ok) {
        setStatus("sent");
      } else {
        const json = await res.json().catch(() => null);
        setErrorMsg(json?.error ?? "Er ging iets mis. Probeer het later opnieuw.");
        setStatus("error");
      }
    } catch {
      setErrorMsg("Geen verbinding met de server. Controleer je internetverbinding.");
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className="rounded-2xl border border-sage-soft bg-sand p-8 text-center">
        <p className="font-serif text-xl text-ink">Dank je voor je bericht.</p>
        <p className="mt-2 text-sm text-muted">
          Ik neem zo snel mogelijk contact met je op.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {/* Honeypot — onzichtbaar voor bezoekers, vangt spam */}
      <div className="absolute -left-[9999px]" aria-hidden="true">
        <input type="text" name="website" tabIndex={-1} autoComplete="off" />
      </div>

      <div>
        <label htmlFor="naam" className="mb-1.5 block text-sm text-ink">
          Naam
        </label>
        <input
          id="naam"
          name="naam"
          type="text"
          required
          autoComplete="name"
          className="w-full rounded-xl border border-sand-deep bg-cream px-4 py-3 text-ink outline-none transition-colors focus:border-sage"
        />
      </div>

      <div>
        <label htmlFor="email" className="mb-1.5 block text-sm text-ink">
          E-mailadres
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          autoComplete="email"
          className="w-full rounded-xl border border-sand-deep bg-cream px-4 py-3 text-ink outline-none transition-colors focus:border-sage"
        />
      </div>

      <div>
        <label htmlFor="onderwerp" className="mb-1.5 block text-sm text-ink">
          Onderwerp
        </label>
        <select
          id="onderwerp"
          name="onderwerp"
          defaultValue="Vrijblijvende kennismaking aanvragen"
          className="w-full rounded-xl border border-sand-deep bg-cream px-4 py-3 text-ink outline-none transition-colors focus:border-sage"
        >
          <option>Vrijblijvende kennismaking aanvragen</option>
          <option>Een algemene vraag</option>
          <option>Iets anders</option>
        </select>
      </div>

      <div>
        <label htmlFor="bericht" className="mb-1.5 block text-sm text-ink">
          Je bericht
        </label>
        <textarea
          id="bericht"
          name="bericht"
          rows={5}
          required
          className="w-full resize-y rounded-xl border border-sand-deep bg-cream px-4 py-3 text-ink outline-none transition-colors focus:border-sage"
        />
      </div>

      {status === "error" && (
        <p className="rounded-xl bg-red-50 px-4 py-3 text-sm text-red-700">
          {errorMsg}
        </p>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="inline-flex items-center justify-center rounded-full bg-sage-deep px-6 py-3 text-sm font-medium text-cream transition-colors hover:bg-sage focus:outline-none focus-visible:ring-2 focus-visible:ring-sage focus-visible:ring-offset-2 focus-visible:ring-offset-cream disabled:opacity-60"
      >
        {status === "sending" ? "Bezig met verzenden…" : "Verstuur bericht"}
      </button>
    </form>
  );
}
