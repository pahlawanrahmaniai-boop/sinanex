import React, { useEffect } from 'react';
import { X, ShieldCheck, FileText } from 'lucide-react';
import { Language, Translations } from '../i18n/translations';

interface LegalModalProps {
  isOpen: boolean;
  type: 'privacy' | 'terms';
  lang: Language;
  t: Translations;
  onClose: () => void;
  onSwitchType: (type: 'privacy' | 'terms') => void;
}

export const LegalModal: React.FC<LegalModalProps> = ({
  isOpen,
  type,
  t,
  onClose,
  onSwitchType,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const isPrivacy = type === 'privacy';
  const title = isPrivacy ? t.modals.legal.privacyTitle : t.modals.legal.termsTitle;
  const content = isPrivacy ? t.modals.legal.privacyText : t.modals.legal.termsText;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="legal-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
    >
      <div
        className="fixed inset-0 bg-zinc-900/40 backdrop-blur-xs transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      <div className="relative w-full max-w-xl rounded-2xl border border-zinc-200 bg-white p-6 shadow-xl z-10 my-8">
        <div className="flex items-center justify-between border-b border-zinc-100 pb-3 mb-4">
          <div className="flex items-center gap-2">
            {isPrivacy ? (
              <ShieldCheck className="h-5 w-5 text-zinc-800" />
            ) : (
              <FileText className="h-5 w-5 text-zinc-800" />
            )}
            <h3 id="legal-modal-title" className="text-base font-bold text-zinc-900">
              {title}
            </h3>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="rounded-lg p-1 text-zinc-400 hover:text-zinc-700 hover:bg-zinc-100"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="flex gap-2 mb-3">
          <button
            type="button"
            onClick={() => onSwitchType('privacy')}
            className={`px-3 py-1 text-xs font-semibold rounded-lg transition-colors ${
              isPrivacy
                ? 'bg-zinc-900 text-white'
                : 'text-zinc-600 hover:text-zinc-900'
            }`}
          >
            {t.footer.privacy}
          </button>
          <button
            type="button"
            onClick={() => onSwitchType('terms')}
            className={`px-3 py-1 text-xs font-semibold rounded-lg transition-colors ${
              !isPrivacy
                ? 'bg-zinc-900 text-white'
                : 'text-zinc-600 hover:text-zinc-900'
            }`}
          >
            {t.footer.terms}
          </button>
        </div>

        <div className="max-h-[50vh] overflow-y-auto space-y-2.5 text-xs text-zinc-700 leading-relaxed pr-1">
          {content.map((paragraph, index) => (
            <p key={index} className="bg-zinc-50 p-3 rounded-lg border border-zinc-200">
              {paragraph}
            </p>
          ))}
        </div>

        <div className="mt-5 pt-3 border-t border-zinc-100 flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-1.5 text-xs font-semibold text-white bg-zinc-900 hover:bg-zinc-800 rounded-lg transition-colors"
          >
            {t.modals.legal.close}
          </button>
        </div>
      </div>
    </div>
  );
};
