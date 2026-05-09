import { copy } from "@/lib/copy";
import { Flame, BookOpen } from "lucide-react";

export default function Features() {
  const { features } = copy;

  return (
    <section className="relative bg-white py-20 sm:py-28 overflow-hidden">
      <div className="pointer-events-none absolute top-32 -left-32 w-[400px] h-[400px] rounded-full bg-[var(--color-cream-deep)]/40 blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-[var(--color-brand-light)] text-[var(--color-brand-dark)] rounded-full px-4 py-1.5 text-xs font-bold tracking-[0.18em] uppercase">
            <BookOpen className="w-3.5 h-3.5" />
            {features.kicker}
          </div>
          <h2 className="mt-5 text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-[var(--color-ink)]">
            {features.headline}
          </h2>
          <p className="mt-5 text-base sm:text-lg text-stone-600 leading-relaxed">
            {features.subheadline}
          </p>
        </div>

        {/* Items zigzag */}
        <div className="mt-20 space-y-20 lg:space-y-28">
          {features.items.map((item, idx) => {
            const reversed = idx % 2 === 1;
            return (
              <article
                key={item.number}
                className={`grid gap-8 lg:gap-16 items-center lg:grid-cols-2 ${
                  reversed ? "lg:[direction:rtl]" : ""
                }`}
              >
                {/* Imagen */}
                <div
                  className={`relative ${
                    reversed ? "lg:[direction:ltr]" : ""
                  }`}
                >
                  <div className="absolute -inset-3 bg-gradient-to-br from-[var(--color-brand-light)] to-[var(--color-flame)]/10 blur-2xl rounded-3xl" />
                  <div className="relative rounded-3xl overflow-hidden border border-[var(--color-brand-light)] shadow-warm-soft bg-white aspect-[16/9]">
                    <img
                      src={item.image}
                      alt={item.imageAlt}
                      className="absolute inset-0 w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                </div>

                {/* Texto */}
                <div className={`${reversed ? "lg:[direction:ltr]" : ""}`}>
                  <div className="flex items-center gap-4 mb-4">
                    <span className="text-6xl sm:text-7xl font-black text-amber-grad leading-none">
                      {item.number}
                    </span>
                    <Flame className="w-7 h-7 text-[var(--color-flame)] animate-flicker" />
                  </div>
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-[var(--color-ink)] leading-tight">
                    {item.title}
                  </h3>
                  <p className="mt-4 text-base sm:text-lg text-stone-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
