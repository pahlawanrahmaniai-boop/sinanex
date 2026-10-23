import React from 'react';
import { Language, Translations } from '../i18n/translations';

interface FooterProps {
  lang: Language;
  t: Translations;
  onOpenLegal: (type: 'privacy' | 'terms') => void;
  onLanguageChange: (lang: Language) => void;
}

export const Footer: React.FC<FooterProps> = ({
  lang,
  t,
  onOpenLegal,
  onLanguageChange,
}) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-zinc-200/80 bg-[#f4f5f7] text-zinc-600 text-xs py-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Logo with attached emblem, no LLC in brand lockup */}
          <div className="flex items-center gap-2.5">
            <img
              src="/assets/aistudio/Glossy_White_Striped_Emblem_f731f143.png"
              alt="SinaNex"
              className="h-6 w-6 rounded-md object-contain bg-zinc-950 p-0.5"
            />
            <span className="font-bold text-zinc-900 text-sm">SinaNex</span>
            <span className="text-zinc-300">·</span>
            <span className="text-zinc-500">{t.footer.tagline}</span>
          </div>

          {/* Links & Switcher */}
          <div className="flex items-center gap-4">
            <button
              type="button"
              onClick={() => onOpenLegal('privacy')}
              className="hover:text-zinc-900 transition-colors"
            >
              {t.footer.privacy}
            </button>
            <span>·</span>
            <button
              type="button"
              onClick={() => onOpenLegal('terms')}
              className="hover:text-zinc-900 transition-colors"
            >
              {t.footer.terms}
            </button>
            <span>·</span>
            <button
              type="button"
              onClick={() => onLanguageChange(lang === 'en' ? 'fa' : 'en')}
              className="font-medium hover:text-zinc-900 transition-colors"
            >
              {lang === 'en' ? 'فارسی' : 'English'}
            </button>
          </div>
        </div>

        <div className="mt-6 pt-4 border-t border-zinc-200 flex flex-col sm:flex-row items-center justify-between gap-2 text-zinc-400 font-mono text-[11px]">
          <div>
            © {currentYear} SinaNex. {t.footer.rights}
          </div>
          <div>sinanex.com</div>
        </div>
      </div>
    </footer>
  );
};
