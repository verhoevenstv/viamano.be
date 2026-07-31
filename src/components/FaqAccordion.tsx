"use client";

import { useState } from "react";

type FaqItem = { question: string; answer: string };

export function FaqAccordion({ items }: { items: FaqItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <dl className="divide-y divide-sand-deep overflow-hidden rounded-2xl border border-sand-deep bg-cream">
      {items.map((item, i) => {
        const isOpen = openIndex === i;
        return (
          <div key={i} className="group">
            <dt>
              <button
                type="button"
                onClick={() => setOpenIndex(isOpen ? null : i)}
                className="flex w-full items-center justify-between gap-4 p-6 text-left transition-colors hover:bg-sand/50"
                aria-expanded={isOpen}
              >
                <span className="font-serif text-lg text-ink">
                  {item.question}
                </span>
                <span
                  aria-hidden="true"
                  className={`shrink-0 text-sage-deep transition-transform duration-200 ${
                    isOpen ? "rotate-45" : ""
                  }`}
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  >
                    <path d="M10 4v12M4 10h12" />
                  </svg>
                </span>
              </button>
            </dt>
            {isOpen && (
              <dd className="px-6 pb-6">
                <p className="max-w-3xl leading-relaxed text-muted">
                  {item.answer}
                </p>
              </dd>
            )}
          </div>
        );
      })}
    </dl>
  );
}
