import React, { useState } from 'react';
import { Menu, X, Globe, ArrowUpRight } from 'lucide-react';
import { Language, Translations } from '../i18n/translations';

interface NavbarProps {
  lang: Language;
  onLanguageChange: (lang: Language) => void;
  t: Translations;
}

export const Navbar: React.FC<NavbarProps> = ({ lang, onLanguageChange, t }) => {
  const isRtl = lang === 'fa';
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: '#products', label: t.nav.products },
    { href: '#about', label: t.nav.about },
    { href: '#principles', label: t.nav.principles },
    { href: '#contact', label: t.nav.contact },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const toggleLanguage = () => {
    onLanguageChange(lang === 'en' ? 'fa' : 'en');
  };

  return (
    <header className="sticky top-0 inset-x-0 z-50 bg-[#f8f9fa]/95 backdrop-blur-md border-b border-zinc-200/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo with attached custom emblem, strictly NO LLC */}
          <a
            href="#home"
            onClick={(e) => handleLinkClick(e, '#home')}
            className="flex items-center gap-2.5 group"
            aria-label="SinaNex"
          >
            <img
              src="/assets/aistudio/Glossy_White_Striped_Emblem_f731f143.png"
              alt="SinaNex Logo"
              className="h-8 w-8 rounded-lg object-contain shadow-xs bg-zinc-950 p-1"
            />
            <span className="text-xl font-bold tracking-tight text-zinc-900 group-hover:text-zinc-600 transition-colors">
              SinaNex
            </span>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-zinc-600">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="hover:text-zinc-950 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right: Language Switcher & Direct 7CV link */}
          <div className="hidden md:flex items-center gap-3">
            <button
              type="button"
              onClick={toggleLanguage}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-zinc-200 bg-white hover:bg-zinc-100 text-xs font-semibold text-zinc-700 transition-colors shadow-2xs"
            >
              <Globe className="h-3.5 w-3.5 text-zinc-500" />
              <span>{lang === 'en' ? 'فارسی' : 'English'}</span>
            </button>

            <a
              href="#products"
              onClick={(e) => handleLinkClick(e, '#products')}
              className="inline-flex items-center gap-1.5 px-4 py-1.5 text-xs font-semibold text-white bg-zinc-900 hover:bg-zinc-800 rounded-lg transition-colors shadow-2xs"
            >
              <span>7CV</span>
              <ArrowUpRight className={`h-3.5 w-3.5 ${isRtl ? 'rotate-[-90deg]' : ''}`} />
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              type="button"
              onClick={toggleLanguage}
              className="px-2.5 py-1 rounded-md border border-zinc-200 bg-white text-xs font-semibold text-zinc-700 shadow-2xs"
            >
              {lang === 'en' ? 'فا' : 'EN'}
            </button>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 rounded-lg text-zinc-700 hover:bg-zinc-100"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-zinc-200 bg-[#f8f9fa] px-4 py-3 space-y-2">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className="block px-3 py-2 rounded-lg text-sm font-medium text-zinc-700 hover:bg-zinc-200/60"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-2 border-t border-zinc-200">
            <a
              href="#products"
              onClick={(e) => handleLinkClick(e, '#products')}
              className="block w-full text-center py-2 text-sm font-semibold text-white bg-zinc-900 rounded-lg"
            >
              7CV
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
