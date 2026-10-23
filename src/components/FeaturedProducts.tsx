import React from 'react';
import { Check } from 'lucide-react';
import { Language, Translations } from '../i18n/translations';
import { COMPANY_CONFIG } from '../config/links';
import { OfficialStoreBadges } from './OfficialStoreBadges';

interface FeaturedProductsProps {
  lang: Language;
  t: Translations;
  onOpenStoreNotice: (platform: 'apple' | 'google') => void;
}

export const FeaturedProducts: React.FC<FeaturedProductsProps> = ({
  t,
  onOpenStoreNotice,
}) => {
  const { storeLinks } = COMPANY_CONFIG.flagshipProduct;

  return (
    <section id="products" className="py-20 border-t border-zinc-200/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-8">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-zinc-200/70 border border-zinc-300/60 text-xs font-semibold text-zinc-700 mb-2">
            <span>{t.product.badge}</span>
          </div>
          <h2 className="text-3xl font-extrabold tracking-tight text-zinc-900 mb-1">
            {t.product.title}
          </h2>
          <p className="text-base text-zinc-600 font-medium">
            {t.product.subtitle}
          </p>
        </div>

        {/* 7CV Card */}
        <div className="rounded-2xl border border-zinc-200 bg-white p-7 sm:p-9 shadow-xs">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Description & Key points */}
            <div className="lg:col-span-8 space-y-5">
              <p className="text-base sm:text-lg text-zinc-700 leading-relaxed max-w-2xl">
                {t.product.description}
              </p>

              {/* 4 simple bullet points */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-zinc-800">
                {t.product.points.map((point, idx) => (
                  <div key={idx} className="flex items-start gap-2.5">
                    <div className="h-5 w-5 rounded-full bg-zinc-100 border border-zinc-200 text-zinc-800 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="h-3 w-3" />
                    </div>
                    <span className="font-medium">{point}</span>
                  </div>
                ))}
              </div>

              {/* Official Store Buttons */}
              <div className="pt-3 space-y-2">
                <div className="text-xs text-zinc-500 font-medium">
                  {t.product.downloadLabel}
                </div>
                <OfficialStoreBadges
                  appStoreUrl={storeLinks.appStoreUrl}
                  appStoreStatus={storeLinks.appStoreStatus}
                  googlePlayUrl={storeLinks.googlePlayUrl}
                  googlePlayStatus={storeLinks.googlePlayStatus}
                  onComingSoon={onOpenStoreNotice}
                />
              </div>
            </div>

            {/* Right: Clean 7CV app badge visual with user emblem */}
            <div className="lg:col-span-4 flex flex-col items-center justify-center">
              <div className="w-full max-w-[240px] rounded-2xl border border-zinc-200 bg-zinc-50 p-6 text-center space-y-3">
                <img
                  src="/assets/aistudio/Glossy_White_Striped_Emblem_f731f143.png"
                  alt="7CV App Icon"
                  className="h-16 w-16 mx-auto rounded-2xl object-contain bg-zinc-950 p-2.5 shadow-sm"
                />
                <div>
                  <div className="text-base font-bold text-zinc-900">7CV</div>
                  <div className="text-xs text-zinc-500">Smart AI Resume Builder</div>
                </div>
                <div className="inline-flex items-center gap-1 text-[11px] font-mono text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200 font-semibold">
                  <span>ATS Ready</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
