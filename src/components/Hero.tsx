import React from 'react';
import { ArrowDown, ArrowRight, ArrowLeft } from 'lucide-react';
import { Language, Translations } from '../i18n/translations';
import { InteractiveHeroPreview } from './InteractiveHeroPreview';

interface HeroProps {
  lang: Language;
  t: Translations;
}

export const Hero: React.FC<HeroProps> = ({ lang, t }) => {
  const isRtl = lang === 'fa';

  const scrollTo = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const el = document.querySelector(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="pt-16 pb-16 md:pt-24 md:pb-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column (lg: 7 cols) */}
          <div className="lg:col-span-7 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-200/70 border border-zinc-300/60 text-xs font-semibold text-zinc-700">
              <span>{t.hero.badge}</span>
            </div>

            <h1
              className="text-4xl sm:text-5xl font-extrabold text-zinc-900 tracking-tight leading-[1.18]"
              style={{ textWrap: 'balance' }}
            >
              {t.hero.headline}
            </h1>

            <p className="text-base sm:text-lg text-zinc-600 leading-relaxed max-w-xl">
              {t.hero.subtext}
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#products"
                onClick={(e) => scrollTo(e, '#products')}
                className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-zinc-900 hover:bg-zinc-800 rounded-xl transition-colors shadow-xs"
              >
                <span>{t.hero.primaryCta}</span>
                <ArrowDown className="h-4 w-4" />
              </a>

              <a
                href="#contact"
                onClick={(e) => scrollTo(e, '#contact')}
                className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-zinc-700 hover:text-zinc-900 bg-white hover:bg-zinc-100 border border-zinc-300 rounded-xl transition-colors"
              >
                <span>{t.hero.secondaryCta}</span>
                {isRtl ? <ArrowLeft className="h-4 w-4" /> : <ArrowRight className="h-4 w-4" />}
              </a>
            </div>
          </div>

          {/* Right Column (lg: 5 cols) */}
          <div className="lg:col-span-5">
            <InteractiveHeroPreview lang={lang} t={t} />
          </div>
        </div>
      </div>
    </section>
  );
};
