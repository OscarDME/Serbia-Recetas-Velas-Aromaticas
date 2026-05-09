"use client";
import { useState } from "react";
import { copy } from "@/lib/copy";
import { HelpCircle, Plus, Minus } from "lucide-react";

export default function FAQ() {
  const { faq } = copy;
  const [openIdx, setOpenIdx] = useState(0);

  return (
    <section className="relative bg-white py-20 sm:py-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center">
          <div className="inline-flex items-center gap-2 bg-[var(--color-brand-light)] text-[var(--color-brand-dark)] rounded-full px-4 py-1.5 text-xs font-bold tracking-[0.18em] uppercase">
            <HelpCircle className="w-3.5 h-3.5" />
            {faq.kicker}
          </div>
          <h2 className="mt-5 text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-[var(--color-ink)]">
            {faq.headline}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-stone-600 leading-relaxed">
            {faq.subheadline}
          </p>
        </div>

        {/* Accordion */}
        <div className="mt-12 space-y-3">
          {faq.items.map((item, idx) => {
            const open = idx === openIdx;
            return (
              <div
                key={idx}
                className={`rounded-2xl border transition-all overflow-hidden ${
                  open
                    ? "bg-[var(--color-cream)] border-[var(--color-brand-light)] shadow-warm-soft"
                    : "bg-white border-stone-200 hover:border-[var(--color-brand-light)]"
                }`}
              >
                <button
                  type="button"
                  onClick={() => setOpenIdx(open ? -1 : idx)}
                  className="w-full flex items-center justify-between gap-4 px-5 sm:px-6 py-5 text-left"
                  aria-expanded={open}
                >
                  <span className="text-base sm:text-lg font-extrabold text-[var(--color-ink)] leading-snug">
                    {item.q}
                  </span>
                  <span
                    className={`shrink-0 w-9 h-9 rounded-full flex items-center justify-center transition-colors ${
                      open
                        ? "bg-[var(--color-brand)] text-white"
                        : "bg-[var(--color-brand-light)] text-[var(--color-brand-dark)]"
                    }`}
                  >
                    {open ? (
                      <Minus className="w-4 h-4" strokeWidth={3} />
                    ) : (
                      <Plus className="w-4 h-4" strokeWidth={3} />
                    )}
                  </span>
                </button>
                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-5 sm:px-6 pb-6 text-sm sm:text-base text-stone-600 leading-relaxed">
                      {item.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
