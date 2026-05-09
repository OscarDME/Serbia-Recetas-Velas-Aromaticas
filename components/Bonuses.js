import { copy } from "@/lib/copy";
import {
  Gift,
  HeartHandshake,
  Shapes,
  Sparkles,
  MapPin,
  Flame,
} from "lucide-react";

const ICONS = { HeartHandshake, Shapes, Gift, Sparkles, MapPin };

export default function Bonuses() {
  const { bonuses } = copy;

  return (
    <section className="relative bg-gradient-to-b from-white via-[var(--color-cream)] to-white py-20 sm:py-28 overflow-hidden">
      <div className="pointer-events-none absolute -top-24 right-0 w-[500px] h-[500px] rounded-full bg-[var(--color-brand-light)]/60 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -left-20 w-[420px] h-[420px] rounded-full bg-[var(--color-cream-deep)]/50 blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-[var(--color-flame)] text-white rounded-full px-4 py-1.5 text-xs font-bold tracking-[0.18em] uppercase shadow-warm">
            <Flame className="w-3.5 h-3.5 animate-flicker" />
            {bonuses.kicker}
          </div>
          <h2 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-[var(--color-ink)]">
            {bonuses.headline}
          </h2>
          <p className="mt-5 text-base sm:text-lg text-stone-600 leading-relaxed">
            {bonuses.subheadline}
          </p>
        </div>

        {/* Cards grid */}
        <div className="mt-16 grid gap-6 sm:gap-7 sm:grid-cols-2 lg:grid-cols-5">
          {bonuses.items.map((item) => {
            const Icon = ICONS[item.icon] || Gift;
            return (
              <article
                key={item.number}
                className="group relative bg-white rounded-3xl border border-[var(--color-brand-light)] shadow-warm-soft hover:shadow-warm hover:-translate-y-1 transition-all flex flex-col overflow-hidden"
              >
                <div className="absolute top-4 right-4 z-10 bg-[var(--color-flame)] text-white text-[10px] font-black tracking-[0.2em] uppercase px-3 py-1.5 rounded-full shadow-warm">
                  {bonuses.freeLabel}
                </div>

                <div className="relative aspect-[4/3] bg-[var(--color-cream)] overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.imageAlt}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/15 via-transparent to-transparent" />
                </div>

                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-[var(--color-accent)] to-[var(--color-brand)] flex items-center justify-center shadow-warm">
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <div className="text-xs font-black tracking-[0.2em] uppercase text-stone-400">
                      {bonuses.numberPrefix}{item.number}
                    </div>
                  </div>

                  <h3 className="text-lg sm:text-xl font-extrabold tracking-tight text-[var(--color-ink)] leading-tight">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm text-stone-600 leading-relaxed flex-1">
                    {item.desc}
                  </p>
                </div>
              </article>
            );
          })}
        </div>

        {/* Mockup */}
        <div className="mt-16 max-w-3xl mx-auto">
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-tr from-[var(--color-brand-light)] to-[var(--color-flame)]/10 blur-2xl rounded-3xl" />
            <img
              src="/bonuses-mockup.webp"
              alt={bonuses.mockupAlt}
              className="relative w-full h-auto object-contain drop-shadow-2xl animate-float-slow"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
