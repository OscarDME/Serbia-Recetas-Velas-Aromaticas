"use client";
import { useEffect, useState } from "react";
import { copy } from "@/lib/copy";
import {
  Sparkles,
  ChevronDown,
  Flame,
  Users,
  Zap,
  ShieldCheck,
} from "lucide-react";

const ICONS = { Users, Zap, ShieldCheck, Flame, Sparkles };

function pad(n) {
  return String(n).padStart(2, "0");
}

export default function Hero() {
  const { hero } = copy;
  const [mounted, setMounted] = useState(false);
  const [time, setTime] = useState({ d: 0, h: 0, m: 0, s: 0 });

  useEffect(() => {
    setMounted(true);
    const tick = () => {
      const now = new Date();
      const end = new Date();
      end.setHours(23, 59, 59, 999);
      let diff = Math.max(0, end - now);
      const h = Math.floor(diff / 3600000);
      diff -= h * 3600000;
      const m = Math.floor(diff / 60000);
      diff -= m * 60000;
      const s = Math.floor(diff / 1000);
      setTime({ d: 0, h, m, s });
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  const handleScroll = (e) => {
    e.preventDefault();
    const el = document.getElementById("final-cta-section");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section className="relative overflow-hidden bg-warm-grad">
      {/* Banner urgencia */}
      <div className="bg-[var(--color-flame)] text-white text-center py-2.5 px-4 text-xs sm:text-sm font-semibold tracking-wide flex flex-wrap items-center justify-center gap-2 sm:gap-4">
        <span className="flex items-center gap-2">
          <Flame className="w-4 h-4 animate-flicker" />
          {hero.banner}
        </span>
        {mounted && (
          <span className="flex items-center gap-1.5 sm:gap-2 font-mono">
            <TimerBox label={hero.timerLabels.hours} value={pad(time.h)} />
            <span className="opacity-70">:</span>
            <TimerBox label={hero.timerLabels.minutes} value={pad(time.m)} />
            <span className="opacity-70">:</span>
            <TimerBox label={hero.timerLabels.seconds} value={pad(time.s)} />
          </span>
        )}
      </div>

      {/* Blobs decorativos */}
      <div className="pointer-events-none absolute -top-20 -right-24 w-[420px] h-[420px] rounded-full bg-[var(--color-brand-light)] blur-3xl opacity-70" />
      <div className="pointer-events-none absolute -bottom-32 -left-24 w-[460px] h-[460px] rounded-full bg-[var(--color-cream-deep)] blur-3xl opacity-50" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 sm:pt-14 lg:pt-20 pb-16 lg:pb-24">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          {/* Texto */}
          <div className="order-2 lg:order-1 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-white/80 border border-[var(--color-brand-light)] backdrop-blur-sm rounded-full px-4 py-1.5 text-[11px] sm:text-xs font-bold tracking-[0.18em] text-[var(--color-brand-dark)] uppercase shadow-warm-soft">
              <Sparkles className="w-3.5 h-3.5" />
              {hero.kicker}
            </div>

            <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.05] text-[var(--color-ink)]">
              {hero.headline.pre}
              <br className="hidden sm:inline" />{" "}
              <span className="text-amber-grad">{hero.headline.highlight}</span>
            </h1>

            <p className="mt-6 text-base sm:text-lg lg:text-xl text-stone-600 leading-relaxed max-w-xl mx-auto lg:mx-0">
              {hero.supporting}
            </p>

            {/* Trust chips */}
            <div className="mt-8 flex flex-wrap items-center justify-center lg:justify-start gap-2.5">
              {hero.trustChips.map((chip, i) => {
                const Icon = ICONS[chip.icon] || ShieldCheck;
                return (
                  <div
                    key={i}
                    className="inline-flex items-center gap-1.5 bg-white border border-stone-200 rounded-full px-3.5 py-1.5 text-xs sm:text-sm font-semibold text-stone-700 shadow-sm"
                  >
                    <Icon className="w-3.5 h-3.5 text-[var(--color-brand)]" />
                    {chip.text}
                  </div>
                );
              })}
            </div>

            {/* CTA */}
            <div className="mt-10">
              <a
                href="#final-cta-section"
                onClick={handleScroll}
                className="group inline-flex items-center justify-center gap-3 w-full sm:w-auto bg-[var(--color-brand)] hover:bg-[var(--color-brand-dark)] text-white font-extrabold uppercase tracking-wide py-5 sm:py-6 px-8 sm:px-12 rounded-2xl shadow-warm border-b-4 border-[var(--color-brand-dark)] transition-colors text-base sm:text-lg"
              >
                <Sparkles className="w-5 h-5 animate-pulse-soft" />
                {hero.cta}
                <ChevronDown className="w-5 h-5 group-hover:translate-y-0.5 transition-transform" />
              </a>
            </div>
          </div>

          {/* Imagen */}
          <div className="order-1 lg:order-2 relative">
            <div className="absolute -inset-6 bg-gradient-to-tr from-[var(--color-brand-light)] via-transparent to-[var(--color-flame)]/15 blur-2xl rounded-full" />
            <img
              src="/hero-mockup.webp"
              alt={hero.imageAlt}
              className="relative w-full max-w-[560px] mx-auto h-auto object-contain animate-float-slow drop-shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function TimerBox({ value, label }) {
  return (
    <span className="inline-flex flex-col items-center bg-white/15 backdrop-blur-sm rounded-md px-2 py-0.5 min-w-[36px]">
      <span className="text-sm sm:text-base font-bold leading-none">{value}</span>
      <span className="text-[8px] sm:text-[9px] uppercase opacity-80 tracking-wider">{label}</span>
    </span>
  );
}
