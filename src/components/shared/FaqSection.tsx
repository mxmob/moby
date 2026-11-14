import type { FaqItem } from "@/i18n/faq";

/** Preguntas frecuentes visibles (se renderizan en el servidor; <details> no necesita JS). */
export function FaqSection({ title, subtitle, items, className = "bg-[#050510]" }: { title: string; subtitle?: string; items: readonly FaqItem[]; className?: string }) {
  return (
    <section className={`py-20 lg:py-28 ${className}`} aria-labelledby="faq-title">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          {subtitle && <p className="text-cyan-400 text-sm font-medium tracking-wide uppercase mb-3">{subtitle}</p>}
          <h2 id="faq-title" className="text-3xl sm:text-4xl font-bold text-white">
            {title}
          </h2>
        </div>
        <div className="space-y-3">
          {items.map(([q, a]) => (
            <details key={q} className="group rounded-2xl bg-white/[0.02] border border-white/5 open:border-cyan-500/30 transition-colors">
              <summary className="flex items-center justify-between gap-4 cursor-pointer list-none p-5 sm:p-6 text-white font-semibold [&::-webkit-details-marker]:hidden">
                <h3 className="text-base sm:text-lg">{q}</h3>
                <svg className="w-5 h-5 flex-shrink-0 text-cyan-400 transition-transform group-open:rotate-45" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
              </summary>
              <p className="px-5 sm:px-6 pb-5 sm:pb-6 -mt-1 text-white/60 leading-relaxed">{a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
