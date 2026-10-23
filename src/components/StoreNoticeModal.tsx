import React, { useEffect } from 'react';
import { X } from 'lucide-react';
import { Language, Translations } from '../i18n/translations';

interface StoreNoticeModalProps {
  isOpen: boolean;
  platform: 'apple' | 'google' | null;
  lang: Language;
  t: Translations;
  onClose: () => void;
  onExploreDemo: () => void;
}

export const StoreNoticeModal: React.FC<StoreNoticeModalProps> = ({
  isOpen,
  platform,
  t,
  onClose,
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

  if (!isOpen || !platform) return null;

  const platformName = platform === 'apple' ? 'App Store' : 'Google Play';

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto"
    >
      <div
        className="fixed inset-0 bg-zinc-900/40 backdrop-blur-xs transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      <div className="relative w-full max-w-sm rounded-2xl border border-zinc-200 bg-white p-6 shadow-xl z-10">
        <div className="flex items-center justify-between border-b border-zinc-100 pb-3 mb-3">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-emerald-500" />
            <h3 className="text-sm font-bold text-zinc-900">
              {platformName} · {t.modals.comingSoon.title}
            </h3>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="rounded-lg p-1 text-zinc-400 hover:text-zinc-700 hover:bg-zinc-100"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        <p className="text-xs text-zinc-600 leading-relaxed">
          {t.modals.comingSoon.text}
        </p>

        <div className="mt-4 pt-3 border-t border-zinc-100 flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="px-3.5 py-1.5 text-xs font-semibold text-white bg-zinc-900 hover:bg-zinc-800 rounded-lg transition-colors"
          >
            {t.modals.comingSoon.close}
          </button>
        </div>
      </div>
    </div>
  );
};
