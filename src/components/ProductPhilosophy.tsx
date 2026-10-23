import React from 'react';
import { Language, Translations } from '../i18n/translations';

interface ProductPhilosophyProps {
  lang: Language;
  t: Translations;
}

export const ProductPhilosophy: React.FC<ProductPhilosophyProps> = ({ t }) => {
  return (
    <section id="principles" className="py-20 border-t border-zinc-200/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-8">
          <h2 className="text-3xl font-extrabold tracking-tight text-zinc-900">
            {t.principles.title}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {t.principles.items.map((item) => (
            <div
              key={item.number}
              className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-xs flex flex-col justify-between"
            >
              <div>
                <div className="font-mono text-xs font-bold text-zinc-400 mb-2">
                  {item.number}
                </div>
                <h3 className="text-lg font-bold text-zinc-900 mb-1.5">
                  {item.title}
                </h3>
                <p className="text-sm text-zinc-600 leading-relaxed">
                  {item.text}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-zinc-100 text-[11px] font-mono text-zinc-400">
                SinaNex
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
