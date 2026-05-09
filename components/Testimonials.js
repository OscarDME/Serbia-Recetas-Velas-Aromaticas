"use client";
import { copy } from "@/lib/copy";
import {
  MessageCircle,
  Sparkles,
  Star,
  BadgeCheck,
  Quote,
} from "lucide-react";

const AVATAR_GRADIENTS = [
  "from-amber-500 to-orange-600",
  "from-rose-400 to-amber-500",
  "from-orange-400 to-rose-500",
  "from-amber-400 to-yellow-600",
  "from-stone-500 to-amber-700",
  "from-rose-500 to-orange-500",
  "from-yellow-500 to-amber-700",
];

export default function Testimonials() {
  const { testimonials } = copy;

  const handleScroll = (e) => {
    e.preventDefault();
    const el = document.getElementById("final-cta-section");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section className="relative bg-gradient-to-b from-white to-[var(--color-cream)] py-20 sm:py-28 overflow-hidden">
      <div className="pointer-events-none absolute -top-24 right-0 w-[420px] h-[420px] rounded-full bg-[var(--color-brand-light)]/60 blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-white border border-[var(--color-brand-light)] rounded-full px-4 py-1.5 text-xs font-bold tracking-[0.18em] uppercase text-[var(--color-brand-dark)]">
            <MessageCircle className="w-3.5 h-3.5" />
            {testimonials.kicker}
          </div>
          <h2 className="mt-5 text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-[var(--color-ink)]">
            {testimonials.headline}
          </h2>

          <div className="mt-8 inline-flex flex-col items-center bg-white border border-[var(--color-brand-light)] rounded-3xl px-8 py-6 shadow-warm-soft">
            <div className="text-6xl sm:text-7xl font-black text-amber-grad leading-none">
              {testimonials.countHighlight}
            </div>
            <div className="mt-2 text-xs sm:text-sm font-black tracking-[0.2em] uppercase text-stone-500">
              {testimonials.countSubtext}
            </div>
          </div>

          <p className="mt-8 text-base sm:text-lg text-stone-600 leading-relaxed max-w-2xl mx-auto">
            {testimonials.intro}
          </p>
        </div>

        {/* Cards grid */}
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.items.map((item, i) => {
            const gradient =
              AVATAR_GRADIENTS[i % AVATAR_GRADIENTS.length];
            return (
              <article
                key={i}
                className="relative bg-white rounded-3xl border border-stone-200 p-6 sm:p-7 shadow-warm-soft hover:shadow-warm hover:-translate-y-1 transition-all flex flex-col"
              >
                <Quote className="absolute top-5 right-5 w-7 h-7 text-[var(--color-brand-light)]" />

                <div className="flex items-center gap-3.5">
                  <div
                    className={`shrink-0 w-12 h-12 rounded-full bg-gradient-to-br ${gradient} flex items-center justify-center text-white font-black text-sm shadow-warm-soft`}
                  >
                    {item.initials}
                  </div>
                  <div className="min-w-0">
                    <p className="font-extrabold text-sm text-[var(--color-ink)] truncate">
                      {item.name}
                    </p>
                    <p className="text-[11px] text-stone-500 font-medium truncate">
                      {item.location}
                    </p>
                  </div>
                </div>

                <div className="mt-4 flex items-center gap-2.5 flex-wrap">
                  <div
                    className="flex items-center gap-0.5"
                    aria-label={testimonials.starsAriaLabel}
                  >
                    {Array.from({ length: 5 }).map((_, k) => (
                      <Star
                        key={k}
                        className="w-3.5 h-3.5 fill-amber-400 text-amber-400"
                        strokeWidth={1.5}
                      />
                    ))}
                  </div>
                  <span className="inline-flex items-center gap-1 text-[10px] font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 rounded-full px-2 py-0.5">
                    <BadgeCheck className="w-3 h-3" strokeWidth={2.5} />
                    {testimonials.verifiedLabel}
                  </span>
                </div>

                <p className="mt-5 text-sm text-stone-700 leading-relaxed flex-1">
                  &ldquo;{item.quote}&rdquo;
                </p>

                <div className="mt-5 pt-4 border-t border-stone-100 text-[10px] font-bold tracking-[0.18em] uppercase text-stone-400">
                  {testimonials.productLabel}
                </div>
              </article>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-14 text-center">
          <a
            href="#final-cta-section"
            onClick={handleScroll}
            className="inline-flex items-center justify-center gap-3 bg-[var(--color-brand)] hover:bg-[var(--color-brand-dark)] text-white font-extrabold uppercase tracking-wide py-5 px-10 rounded-2xl shadow-warm border-b-4 border-[var(--color-brand-dark)] transition-colors text-base sm:text-lg"
          >
            <Sparkles className="w-5 h-5" />
            {testimonials.cta}
          </a>
        </div>
      </div>
    </section>
  );
}
