import React, { useState } from 'react';
import { Sparkles } from 'lucide-react';
import { Language, Translations } from '../i18n/translations';

interface InteractiveHeroPreviewProps {
  lang: Language;
  t: Translations;
}

export const InteractiveHeroPreview: React.FC<InteractiveHeroPreviewProps> = ({ t }) => {
  const [isAi, setIsAi] = useState(true);

  return (
    <div className="rounded-2xl border border-zinc-200 bg-white p-5 sm:p-6 shadow-xs">
      {/* Header bar with attached logo */}
      <div className="flex items-center justify-between border-b border-zinc-100 pb-3 mb-4">
        <div className="flex items-center gap-2.5">
          <img
            src="/assets/aistudio/Glossy_White_Striped_Emblem_f731f143.png"
            alt="7CV Emblem"
            className="h-7 w-7 rounded-lg object-contain bg-zinc-950 p-1"
          />
          <div>
            <div className="text-xs font-bold text-zinc-900">{t.hero.previewTitle}</div>
            <div className="text-[11px] text-zinc-400">Powered by SinaNex</div>
          </div>
        </div>

        {/* ATS Score */}
        <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-50 border border-emerald-200 text-xs font-mono font-semibold text-emerald-800">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
          <span>98%</span>
        </div>
      </div>

      {/* Simple 2-button switch */}
      <div className="flex items-center rounded-lg bg-zinc-100 p-0.5 border border-zinc-200 mb-3 text-xs font-semibold">
        <button
          type="button"
          onClick={() => setIsAi(false)}
          className={`flex-1 py-1.5 text-center rounded-md transition-all ${
            !isAi
              ? 'bg-white text-zinc-900 shadow-xs'
              : 'text-zinc-500 hover:text-zinc-900'
          }`}
        >
          {t.hero.draftTab}
        </button>
        <button
          type="button"
          onClick={() => setIsAi(true)}
          className={`flex-1 py-1.5 text-center rounded-md transition-all ${
            isAi
              ? 'bg-zinc-900 text-white shadow-xs'
              : 'text-zinc-500 hover:text-zinc-900'
          }`}
        >
          {t.hero.aiTab}
        </button>
      </div>

      {/* Resume bullet display */}
      <div className="rounded-xl border border-zinc-200 bg-zinc-50/80 p-4 min-h-[85px] flex items-center">
        <p
          className={`text-sm leading-relaxed transition-all ${
            isAi
              ? 'text-zinc-900 font-medium'
              : 'text-zinc-500 italic line-through decoration-zinc-300'
          }`}
        >
          {isAi ? t.hero.aiText : t.hero.draftText}
        </p>
      </div>

      {/* Footer status */}
      <div className="mt-3 pt-2.5 border-t border-zinc-100 flex items-center justify-between text-xs text-zinc-500">
        <span className="flex items-center gap-1 text-zinc-700 font-medium">
          <Sparkles className="h-3 w-3 text-zinc-800" />
          <span>{t.hero.metric}</span>
        </span>
        <span className="text-[11px] font-mono text-zinc-400">Ready for PDF</span>
      </div>
    </div>
  );
};
