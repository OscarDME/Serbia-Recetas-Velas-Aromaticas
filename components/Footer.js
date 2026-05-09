import { copy } from "@/lib/copy";

export default function Footer() {
  const { footer } = copy;

  return (
    <footer className="bg-[var(--color-ink)] text-stone-400 py-14 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center space-y-5">
        <div className="text-lg sm:text-xl font-extrabold tracking-wide text-white">
          {footer.brand}
        </div>

        <div className="text-xs sm:text-sm text-stone-500 leading-relaxed">
          <p className="font-semibold text-stone-400">
            {footer.disclaimerTitle}{" "}
            <span className="font-normal">{footer.disclaimerShort}</span>
          </p>
          <p className="mt-4 text-stone-500 leading-relaxed">
            {footer.disclaimerLong}
          </p>
        </div>

        <div className="pt-4 border-t border-stone-800 text-xs text-stone-500">
          {footer.copyright}
        </div>
      </div>
    </footer>
  );
}
