import React, { useState } from 'react';
import { Mail, Copy, Check, Send } from 'lucide-react';
import { Language, Translations } from '../i18n/translations';
import { COMPANY_CONFIG } from '../config/links';

interface ContactSectionProps {
  lang: Language;
  t: Translations;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ lang, t }) => {
  const isRtl = lang === 'fa';
  const [copied, setCopied] = useState(false);

  // Form State
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(COMPANY_CONFIG.contactEmail);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) return;

    setStatus('submitting');
    setTimeout(() => {
      setStatus('success');
      setName('');
      setEmail('');
      setMessage('');
    }, 450);
  };

  return (
    <section id="contact" className="py-20 border-t border-zinc-200/80">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          {/* Direct Email (md: 5 cols) */}
          <div className="md:col-span-5 space-y-4">
            <h2 className="text-3xl font-extrabold tracking-tight text-zinc-900">
              {t.contact.title}
            </h2>

            <p className="text-sm sm:text-base text-zinc-600 leading-relaxed">
              {t.contact.text}
            </p>

            <div className="rounded-2xl border border-zinc-200 bg-white p-5 space-y-3 shadow-xs">
              <div className="text-xs font-mono text-zinc-400 uppercase">
                {t.contact.emailTitle}
              </div>

              <div className="flex items-center justify-between gap-3">
                <a
                  href={`mailto:${COMPANY_CONFIG.contactEmail}`}
                  className="text-base font-mono font-medium text-zinc-900 hover:text-zinc-600 transition-colors break-all"
                >
                  {COMPANY_CONFIG.contactEmail}
                </a>

                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg border border-zinc-200 bg-zinc-50 hover:bg-zinc-100 text-xs font-medium text-zinc-700 transition-colors shrink-0"
                >
                  {copied ? (
                    <>
                      <Check className="h-3.5 w-3.5 text-emerald-600" />
                      <span className="text-emerald-700">{t.contact.copied}</span>
                    </>
                  ) : (
                    <>
                      <Copy className="h-3.5 w-3.5 text-zinc-400" />
                      <span>{t.contact.copy}</span>
                    </>
                  )}
                </button>
              </div>

              <p className="text-xs text-zinc-500 font-mono pt-2 border-t border-zinc-100">
                {t.contact.note}
              </p>
            </div>
          </div>

          {/* Simple Contact Form (md: 7 cols) */}
          <div className="md:col-span-7">
            <div className="rounded-2xl border border-zinc-200 bg-white p-6 sm:p-7 shadow-xs">
              {status === 'success' ? (
                <div className="py-8 text-center space-y-2">
                  <div className="h-8 w-8 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
                    <Check className="h-4 w-4" />
                  </div>
                  <p className="text-sm font-semibold text-zinc-900">
                    {t.contact.success}
                  </p>
                  <button
                    type="button"
                    onClick={() => setStatus('idle')}
                    className="text-xs text-zinc-600 hover:text-zinc-900 font-medium underline"
                  >
                    {isRtl ? 'ارسال مجدد پیام' : 'Send another message'}
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3.5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <div>
                      <label className="block text-xs font-semibold text-zinc-700 mb-1">
                        {t.contact.name}
                      </label>
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder={t.contact.namePlaceholder}
                        className="w-full rounded-xl border border-zinc-200 bg-white px-3.5 py-2 text-sm text-zinc-900 placeholder-zinc-400 focus:outline-none focus:border-zinc-500 transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-zinc-700 mb-1">
                        {t.contact.email}
                      </label>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder={t.contact.emailPlaceholder}
                        className="w-full rounded-xl border border-zinc-200 bg-white px-3.5 py-2 text-sm text-zinc-900 placeholder-zinc-400 focus:outline-none focus:border-zinc-500 transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-zinc-700 mb-1">
                      {t.contact.message}
                    </label>
                    <textarea
                      required
                      rows={3}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder={t.contact.messagePlaceholder}
                      className="w-full rounded-xl border border-zinc-200 bg-white px-3.5 py-2 text-sm text-zinc-900 placeholder-zinc-400 focus:outline-none focus:border-zinc-500 transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-white text-xs font-semibold transition-colors disabled:opacity-75"
                  >
                    <Send className="h-3.5 w-3.5" />
                    <span>
                      {status === 'submitting'
                        ? t.contact.sending
                        : t.contact.send}
                    </span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
