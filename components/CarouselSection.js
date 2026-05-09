import { copy } from "@/lib/copy";
import { Sparkles } from "lucide-react";

export default function CarouselSection() {
  const { carouselSection } = copy;
  const loop = [...carouselSection.images, ...carouselSection.images];

  return (
    <section className="relative bg-[var(--color-cream)] py-20 sm:py-24 overflow-hidden border-y border-[var(--color-brand-light)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-12">
        <div className="inline-flex items-center gap-2 bg-white border border-[var(--color-brand-light)] rounded-full px-4 py-1.5 text-xs font-bold tracking-[0.18em] uppercase text-[var(--color-brand-dark)]">
          <Sparkles className="w-3.5 h-3.5" />
          {carouselSection.kicker}
        </div>
        <h2 className="mt-5 text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-[var(--color-ink)]">
          {carouselSection.headline}
        </h2>
      </div>

      <div className="relative">
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[var(--color-cream)] to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[var(--color-cream)] to-transparent z-10" />

        <div className="flex w-max animate-scroll-x gap-5 sm:gap-6">
          {loop.map((img, i) => (
            <div
              key={i}
              className="shrink-0 w-[180px] sm:w-[220px] md:w-[260px] aspect-[4/3] rounded-2xl overflow-hidden border border-[var(--color-brand-light)] bg-white shadow-warm-soft"
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
