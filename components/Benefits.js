import { copy } from "@/lib/copy";
import { Lock, BookOpen, Infinity, Send, ShieldCheck } from "lucide-react";

const ICONS = { Lock, BookOpen, Infinity, Send, ShieldCheck };

export default function Benefits() {
  const { benefits } = copy;

  return (
    <section className="relative bg-white py-20 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-[var(--color-brand-light)] text-[var(--color-brand-dark)] rounded-full px-4 py-1.5 text-xs font-bold tracking-[0.18em] uppercase">
            <ShieldCheck className="w-3.5 h-3.5" />
            {benefits.kicker}
          </div>
          <h2 className="mt-5 text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-[var(--color-ink)]">
            {benefits.headline}
          </h2>
          <p className="mt-5 text-base sm:text-lg text-stone-600 leading-relaxed">
            {benefits.subheadline}
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.items.map((item, i) => {
            const Icon = ICONS[item.icon] || ShieldCheck;
            return (
              <article
                key={i}
                className="group bg-white rounded-3xl border border-stone-200 p-7 hover:border-[var(--color-brand-light)] hover:-translate-y-1 hover:shadow-warm transition-all flex flex-col"
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[var(--color-brand-light)] to-[var(--color-cream-deep)] flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Icon className="w-7 h-7 text-[var(--color-brand)]" strokeWidth={2.2} />
                </div>
                <h3 className="mt-5 text-base font-black tracking-wide uppercase text-[var(--color-ink)]">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm text-stone-600 leading-relaxed flex-1">
                  {item.desc}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
