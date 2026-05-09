"use client";
import { useEffect, useState } from "react";
import { copy } from "@/lib/copy";
import { ShieldCheck, Check, Sparkles, Mail } from "lucide-react";

const BASE_CHECKOUT_URL = "https://www.oriopay.app/p/200-mirisnih-sveca";

export default function FinalCta() {
  const { finalCta } = copy;
  const [checkoutUrl, setCheckoutUrl] = useState(BASE_CHECKOUT_URL);

  useEffect(() => {
    try {
      if (typeof window !== "undefined") {
        const params = new URLSearchParams(window.location.search);
        let src = params.get("src");
        let fbclid = params.get("fbclid");
        if (!src) src = localStorage.getItem("hotmart_src");
        if (!fbclid) fbclid = localStorage.getItem("hotmart_fbclid");
        if (src || fbclid) {
          const urlObj = new URL(BASE_CHECKOUT_URL);
          if (src) urlObj.searchParams.set("src", src);
          if (fbclid) urlObj.searchParams.set("fbclid", fbclid);
          setCheckoutUrl(urlObj.toString());
        }
      }
    } catch (err) {
      console.error("Error building checkout URL:", err);
    }
  }, []);

  const handleBeginCheckout = () => {
    try {
      let priceNum = 0;
      if (finalCta.offerPrice) {
        const cleaned = String(finalCta.offerPrice)
          .replace(/[^\d.,]/g, "")
          .replace(",", ".");
        const parsed = parseFloat(cleaned);
        if (Number.isFinite(parsed)) priceNum = parsed;
      }
      if (typeof window !== "undefined") {
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({
          event: "begin_checkout",
          value: priceNum,
          currency: "USD",
          items: [
            {
              item_id: finalCta.analytics.itemId,
              item_name: finalCta.analytics.itemName,
              price: priceNum,
            },
          ],
        });
      }
      console.log("[FinalCTA] begin_checkout disparado ✅");
      console.log("[FinalCTA] Navegando a:", checkoutUrl);
    } catch (err) {
      console.error("[FinalCTA] Error en analytics:", err);
    }
  };

  return (
    <section
      id="final-cta-section"
      className="relative bg-gradient-to-b from-[var(--color-cream)] via-white to-[var(--color-brand-light)]/40 py-20 sm:py-28 overflow-hidden"
    >
      <div className="pointer-events-none absolute -top-32 -right-32 w-[520px] h-[520px] rounded-full bg-[var(--color-brand-light)]/70 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 -left-32 w-[460px] h-[460px] rounded-full bg-[var(--color-cream-deep)]/50 blur-3xl" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Pre headline */}
        <p className="text-center text-xs sm:text-sm font-bold tracking-[0.2em] uppercase text-[var(--color-brand-dark)]">
          {finalCta.preHeadline}
        </p>

        <h2 className="mt-4 text-center text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-[var(--color-ink)]">
          {finalCta.headline}
        </h2>
        <p className="mt-5 text-center text-base sm:text-lg text-stone-600 leading-relaxed max-w-2xl mx-auto">
          {finalCta.subheadline}
        </p>

        <div className={`mt-12 grid gap-8 ${finalCta.showGuaranteeImage ? "sm:grid-cols-[auto_1fr]" : ""} items-center bg-white rounded-3xl border border-[var(--color-brand-light)] p-6 sm:p-8 shadow-warm-soft`}>
          {finalCta.showGuaranteeImage && (
            <div className="mx-auto sm:mx-0">
              <div className="relative">
                <div className="absolute -inset-2 bg-gradient-to-tr from-[var(--color-accent)] to-[var(--color-brand)] rounded-full blur-md opacity-60" />
                <img
                  src="/instructor.webp"
                  alt={finalCta.instructorImageAlt}
                  className="relative w-32 h-32 sm:w-40 sm:h-40 rounded-full object-cover border-4 border-white shadow-warm"
                />
              </div>
            </div>
          )}
          <div className="text-center sm:text-left">
            <div className="inline-flex items-center gap-2 bg-emerald-50 text-emerald-700 rounded-full px-3 py-1 text-[10px] sm:text-xs font-black tracking-[0.18em] uppercase border border-emerald-200">
              <ShieldCheck className="w-3.5 h-3.5" />
              {finalCta.guaranteeBadge}
            </div>
            <p className="mt-3 text-sm sm:text-base text-stone-700 leading-relaxed">
              {finalCta.guaranteeText}
            </p>
          </div>
        </div>

        {/* Bundle list */}
        <div className="mt-10 bg-white rounded-3xl border border-[var(--color-brand-light)] p-6 sm:p-10 shadow-warm-soft">
          <h3 className="text-center text-lg sm:text-xl font-extrabold text-[var(--color-ink)]">
            {finalCta.bundleHeadline}
          </h3>
          <ul className="mt-6 space-y-4">
            {finalCta.bundleList.map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <div className="shrink-0 w-7 h-7 rounded-full bg-[var(--color-brand-light)] flex items-center justify-center mt-0.5">
                  <Check
                    className="w-4 h-4 text-[var(--color-brand)]"
                    strokeWidth={3}
                  />
                </div>
                <span
                  className={`text-sm sm:text-base leading-relaxed ${
                    i === 0
                      ? "text-[var(--color-brand-dark)] font-extrabold"
                      : "text-stone-700 font-medium"
                  }`}
                >
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Mockup */}
        <div className="mt-12 max-w-md mx-auto">
          <img
            src="/hero-mockup.webp"
            alt={finalCta.imageAlt}
            className="w-full h-auto object-contain drop-shadow-2xl"
            loading="lazy"
          />
        </div>

        {/* Pricing */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 bg-[var(--color-flame)] text-white rounded-full px-4 py-1.5 text-xs font-black tracking-[0.18em] uppercase shadow-warm">
            <Sparkles className="w-3.5 h-3.5" />
            {finalCta.accessBadge}
          </div>

          <div className="mt-6 flex flex-col items-center">
            <p className="text-stone-500 text-sm sm:text-base font-medium">
              {finalCta.regularPriceLabel}{" "}
              <span className="line-through">{finalCta.regularPrice}</span>
            </p>
            <div className="mt-2 flex items-end justify-center gap-3">
              <p className="text-6xl sm:text-7xl lg:text-8xl font-black text-amber-grad leading-none tracking-tighter">
                {finalCta.offerPrice}
              </p>
              <span className="text-base sm:text-lg font-bold text-stone-500 mb-2">
                {finalCta.currencyLabel}
              </span>
            </div>
            <div className="mt-3 inline-flex bg-[var(--color-brand-dark)] text-white text-xs font-black tracking-[0.18em] uppercase px-3 py-1 rounded-full">
              {finalCta.discountBadge}
            </div>
          </div>
        </div>

        {/* Botón */}
        <div className="mt-10 flex flex-col items-center">
          <a
            href={checkoutUrl}
            onClick={handleBeginCheckout}
            className="inline-flex items-center justify-center gap-3 w-full sm:w-auto bg-[var(--color-brand)] hover:bg-[var(--color-brand-dark)] text-white font-extrabold uppercase tracking-wide py-6 sm:py-7 px-8 sm:px-14 rounded-2xl shadow-warm border-b-4 border-[var(--color-brand-dark)] transition-colors text-base sm:text-xl text-center"
          >
            <Sparkles className="w-5 h-5 animate-pulse-soft" />
            {finalCta.button}
          </a>

          <p className="mt-6 inline-flex items-start gap-2 text-[10px] sm:text-xs font-bold tracking-[0.15em] uppercase text-stone-500 max-w-md text-center leading-relaxed">
            <Mail className="w-3.5 h-3.5 shrink-0 mt-0.5" />
            {finalCta.afterPurchaseNote}
          </p>
        </div>
      </div>
    </section>
  );
}
