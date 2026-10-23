/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Language, translations } from './i18n/translations';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { FeaturedProducts } from './components/FeaturedProducts';
import { CompanyIntro } from './components/CompanyIntro';
import { ProductPhilosophy } from './components/ProductPhilosophy';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { LegalModal } from './components/LegalModal';
import { StoreNoticeModal } from './components/StoreNoticeModal';

export default function App() {
  const [lang, setLang] = useState<Language>(() => {
    if (typeof window !== 'undefined') {
      const urlParams = new URLSearchParams(window.location.search);
      const urlLang = urlParams.get('lang');
      if (urlLang === 'fa' || urlLang === 'en') {
        return urlLang;
      }
      const savedLang = localStorage.getItem('sinanex_lang');
      if (savedLang === 'fa' || savedLang === 'en') {
        return savedLang;
      }
    }
    return 'en';
  });

  const [legalModalOpen, setLegalModalOpen] = useState(false);
  const [legalType, setLegalType] = useState<'privacy' | 'terms'>('privacy');
  const [storeNoticeOpen, setStoreNoticeOpen] = useState(false);
  const [storeNoticePlatform, setStoreNoticePlatform] = useState<'apple' | 'google' | null>(null);

  const t = translations[lang];

  useEffect(() => {
    const isRtl = lang === 'fa';
    document.documentElement.lang = lang;
    document.documentElement.dir = isRtl ? 'rtl' : 'ltr';
    document.title = t.meta.title;

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', t.meta.description);
    }

    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute('content', t.meta.title);
    }

    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) {
      ogDescription.setAttribute('content', t.meta.description);
    }

    localStorage.setItem('sinanex_lang', lang);
  }, [lang, t]);

  const handleLanguageChange = (newLang: Language) => {
    setLang(newLang);
    const url = new URL(window.location.href);
    if (newLang === 'fa') {
      url.searchParams.set('lang', 'fa');
    } else {
      url.searchParams.delete('lang');
    }
    window.history.replaceState({}, '', url.toString());
  };

  const handleOpenStoreNotice = (platform: 'apple' | 'google') => {
    setStoreNoticePlatform(platform);
    setStoreNoticeOpen(true);
  };

  const handleOpenLegal = (type: 'privacy' | 'terms') => {
    setLegalType(type);
    setLegalModalOpen(true);
  };

  const scrollToSection = (id: string) => {
    const el = document.querySelector(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div
      dir={lang === 'fa' ? 'rtl' : 'ltr'}
      className="min-h-screen bg-[#f8f9fa] text-zinc-900 flex flex-col transition-colors duration-150"
    >
      {/* Minimal Top Navigation */}
      <Navbar
        lang={lang}
        onLanguageChange={handleLanguageChange}
        t={t}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Clean Hero */}
        <Hero lang={lang} t={t} />

        {/* 7CV Flagship Showcase */}
        <FeaturedProducts
          lang={lang}
          t={t}
          onOpenStoreNotice={handleOpenStoreNotice}
        />

        {/* Company Purpose */}
        <CompanyIntro lang={lang} t={t} />

        {/* Guiding Principles */}
        <ProductPhilosophy lang={lang} t={t} />

        {/* Contact Section */}
        <ContactSection lang={lang} t={t} />
      </main>

      {/* Clean Footer */}
      <Footer
        lang={lang}
        t={t}
        onOpenLegal={handleOpenLegal}
        onLanguageChange={handleLanguageChange}
      />

      {/* Legal Modal */}
      <LegalModal
        isOpen={legalModalOpen}
        type={legalType}
        lang={lang}
        t={t}
        onClose={() => setLegalModalOpen(false)}
        onSwitchType={(newType) => setLegalType(newType)}
      />

      {/* Store Release Status Modal */}
      <StoreNoticeModal
        isOpen={storeNoticeOpen}
        platform={storeNoticePlatform}
        lang={lang}
        t={t}
        onClose={() => setStoreNoticeOpen(false)}
        onExploreDemo={() => scrollToSection('#products')}
      />
    </div>
  );
}
