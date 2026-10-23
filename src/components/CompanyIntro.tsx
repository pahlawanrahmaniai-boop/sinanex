import React from 'react';
import { Language, Translations } from '../i18n/translations';

interface CompanyIntroProps {
  lang: Language;
  t: Translations;
}

export const CompanyIntro: React.FC<CompanyIntroProps> = ({ t }) => {
  return (
    <section id="about" className="py-20 border-t border-zinc-200/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-zinc-200 bg-white p-7 sm:p-9 shadow-xs space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-zinc-100 border border-zinc-200 text-xs font-semibold text-zinc-700">
            <span>{t.about.badge}</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-zinc-900">
            {t.about.title}
          </h2>

          <p className="text-base sm:text-lg text-zinc-600 leading-relaxed">
            {t.about.text}
          </p>
        </div>
      </div>
    </section>
  );
};
