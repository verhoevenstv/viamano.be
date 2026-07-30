"use client";

import { useState, type FormEvent } from "react";

/**
 * Contactformulier.
 *
 * TODO (technisch): koppel dit aan een echte e-maildienst voordat de site
 * live gaat. Mogelijkheden:
 *   - Formspree / Getform (geen server nodig, gewoon een endpoint)
 *   - of een eigen API-route met bv. Resend
 * Nu toont het formulier enkel een bevestiging aan de bezoeker en verstuurt
 * het nog niets.
 */
export function ContactForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // PLACEHOLDER: hier komt de echte verzending.
    setSent(true);
  }

  if (sent) {
    return (
      <div className="rounded-2xl border border-sage-soft bg-sand p-8 text-center">
        <p className="font-serif text-xl text-ink">Dank je voor je bericht.</p>
        <p className="mt-2 text-sm text-muted">
          Ik neem zo snel mogelijk contact met je op.
        </p>
        <p className="mt-4 text-xs text-clay">
          (Demo: dit formulier moet nog aan een e-maildienst gekoppeld worden.)
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
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

      <button
        type="submit"
        className="inline-flex items-center justify-center rounded-full bg-sage-deep px-6 py-3 text-sm font-medium text-cream transition-colors hover:bg-sage focus:outline-none focus-visible:ring-2 focus-visible:ring-sage focus-visible:ring-offset-2 focus-visible:ring-offset-cream"
      >
        Verstuur bericht
      </button>
    </form>
  );
}
