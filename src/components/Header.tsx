import React, { useState } from 'react';
import { Phone, Menu, X, Leaf, Search, Lock, BookOpen, Globe } from 'lucide-react';
import { companyInfo } from '../data/company';
import { PishgamanLogo } from './PishgamanLogo';
import { useLanguage } from '../i18n/LanguageContext';
import { Language } from '../types';

interface HeaderProps {
  onNavigate: (sectionId: string) => void;
  activeSection: string;
  onOpenAdmin: () => void;
  searchQuery: string;
  setSearchQuery: (q: string) => void;
}

const languages: { code: Language; label: string; flag: string }[] = [
  { code: 'fa', label: 'فارسی', flag: '🇮🇷' },
  { code: 'en', label: 'English', flag: '🇬🇧' },
  { code: 'ar', label: 'العربية', flag: '🇦🇪' },
  { code: 'ur', label: 'اردو (پاکستانی)', flag: '🇵🇰' }
];

export const Header: React.FC<HeaderProps> = ({
  onNavigate,
  activeSection,
  onOpenAdmin,
  searchQuery,
  setSearchQuery
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [langMenuOpen, setLangMenuOpen] = useState(false);

  const { language, setLanguage, t, isRtl } = useLanguage();

  const handleNavClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  const handleSelectLang = (code: Language) => {
    setLanguage(code);
    setLangMenuOpen(false);
  };

  const currentLangObj = languages.find(l => l.code === language) || languages[0];

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-stone-200/90 shadow-xs">
      {/* Top micro bar for corporate identity & Language Switcher */}
      <div className="bg-stone-900 text-stone-300 text-xs py-1.5 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1.5 text-emerald-400 font-medium">
              <Leaf className="w-3.5 h-3.5" />
              <span>{t.officialBrand}: {t.brandName}</span>
            </span>
            <span className="hidden sm:inline text-stone-600">|</span>
            <span className="hidden sm:inline text-stone-400">
              {t.management}: {t.managerName}
            </span>
          </div>

          <div className="flex items-center gap-3 sm:gap-4">
            <span className="text-[11px] font-mono tracking-wider text-stone-400 hidden lg:inline">
              {t.slogan}
            </span>

            {/* Language Selector Dropdown in top bar */}
            <div className="relative">
              <button
                onClick={() => setLangMenuOpen(!langMenuOpen)}
                className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-stone-800 hover:bg-stone-700 text-white text-[11px] font-bold transition-all border border-stone-700 cursor-pointer"
                title={t.languageSelect}
              >
                <Globe className="w-3.5 h-3.5 text-emerald-400" />
                <span>{currentLangObj.flag} {currentLangObj.label}</span>
              </button>

              {langMenuOpen && (
                <div className={`absolute top-full mt-1.5 z-50 bg-stone-900/95 backdrop-blur-md border border-stone-700 rounded-xl shadow-2xl py-1 w-32 ${isRtl ? 'left-0' : 'right-0'}`}>
                  {languages.map((l) => (
                    <button
                      key={l.code}
                      onClick={() => handleSelectLang(l.code)}
                      className={`w-full text-start px-3 py-1.5 text-xs flex items-center justify-between transition-colors cursor-pointer ${
                        language === l.code
                          ? 'bg-emerald-600/30 text-emerald-300 font-bold'
                          : 'text-stone-300 hover:bg-stone-800 hover:text-white'
                      }`}
                    >
                      <span className="flex items-center gap-2">
                        <span>{l.flag}</span>
                        <span>{l.label}</span>
                      </span>
                      {language === l.code && <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <button
              onClick={onOpenAdmin}
              className="inline-flex items-center gap-1 text-[11px] text-stone-400 hover:text-white transition-colors cursor-pointer px-1.5 py-0.5 rounded hover:bg-stone-800"
              title={t.adminPanel}
            >
              <Lock className="w-3 h-3 text-emerald-400" />
              <span className="hidden sm:inline">{t.adminPanel}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between gap-4">
        {/* Brand Logo & Wordmark */}
        <div
          onClick={() => handleNavClick('hero')}
          className="flex items-center gap-3 cursor-pointer group select-none"
        >
          <PishgamanLogo variant="full" size="md" />
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-6 text-sm font-semibold text-stone-700">
          <button
            onClick={() => handleNavClick('hero')}
            className={`transition-colors hover:text-emerald-700 cursor-pointer ${
              activeSection === 'hero' ? 'text-emerald-700 font-bold' : ''
            }`}
          >
            {t.home}
          </button>
          <button
            onClick={() => handleNavClick('products')}
            className={`transition-colors hover:text-emerald-700 cursor-pointer ${
              activeSection === 'products' ? 'text-emerald-700 font-bold' : ''
            }`}
          >
            {t.products16}
          </button>
          <button
            onClick={() => handleNavClick('articles')}
            className={`transition-colors hover:text-emerald-700 cursor-pointer flex items-center gap-1.5 px-2.5 py-1 rounded-xl ${
              activeSection === 'articles' ? 'bg-emerald-50 text-emerald-800 font-black ring-1 ring-emerald-200' : 'hover:bg-stone-50'
            }`}
          >
            <BookOpen className="w-4 h-4 text-emerald-600" />
            <span>{t.scientificArticles}</span>
          </button>
          <button
            onClick={() => handleNavClick('soil-guide')}
            className={`transition-colors hover:text-emerald-700 cursor-pointer ${
              activeSection === 'soil-guide' ? 'text-emerald-700 font-bold' : ''
            }`}
          >
            {t.soilGuide}
          </button>
          <button
            onClick={() => handleNavClick('about')}
            className={`transition-colors hover:text-emerald-700 cursor-pointer ${
              activeSection === 'about' ? 'text-emerald-700 font-bold' : ''
            }`}
          >
            {t.aboutUs}
          </button>
          <button
            onClick={() => handleNavClick('consult')}
            className={`transition-colors hover:text-emerald-700 cursor-pointer ${
              activeSection === 'consult' ? 'text-emerald-700 font-bold' : ''
            }`}
          >
            {t.consultation}
          </button>
          <button
            onClick={() => handleNavClick('contact')}
            className={`transition-colors hover:text-emerald-700 cursor-pointer ${
              activeSection === 'contact' ? 'text-emerald-700 font-bold' : ''
            }`}
          >
            {t.contact}
          </button>
        </nav>

        {/* Action Controls & Call Button */}
        <div className="flex items-center gap-3">
          {/* Quick Search Toggle */}
          <div className="relative">
            {searchOpen ? (
              <div className="flex items-center bg-stone-100 rounded-xl px-3 py-1.5 border border-stone-300">
                <Search className="w-4 h-4 text-stone-500 mx-2" />
                <input
                  type="text"
                  placeholder={t.searchProductPlaceholder}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="bg-transparent text-xs text-stone-800 focus:outline-none w-44 md:w-56"
                  autoFocus
                />
                <button
                  onClick={() => setSearchOpen(false)}
                  className="text-stone-400 hover:text-stone-700 p-0.5 cursor-pointer"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              </div>
            ) : (
              <button
                onClick={() => setSearchOpen(true)}
                className="p-2.5 rounded-xl text-stone-600 hover:text-emerald-700 hover:bg-stone-100 transition-colors cursor-pointer"
                title={t.searchProductPlaceholder}
              >
                <Search className="w-5 h-5" />
              </button>
            )}
          </div>

          {/* Direct Phone Call Button */}
          <a
            href={companyInfo.callUrl}
            className="hidden sm:inline-flex items-center gap-2.5 px-4 py-2.5 bg-emerald-700 hover:bg-emerald-800 text-white rounded-xl font-bold text-xs shadow-sm hover:shadow-md transition-all active:scale-95"
          >
            <Phone className="w-4 h-4 animate-bounce" />
            <div className={isRtl ? 'text-right' : 'text-left'}>
              <span className="block text-[10px] text-emerald-200 font-normal">{t.heroDirectCall.split('(')[0]}:</span>
              <span dir="ltr" className="font-mono text-xs inline-block">{companyInfo.phoneFormatted}</span>
            </div>
          </a>

          {/* Mobile menu toggle button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-stone-700 hover:text-emerald-700 lg:hidden rounded-lg hover:bg-stone-100 cursor-pointer"
            aria-label="Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-stone-200 px-4 py-6 shadow-xl animate-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col space-y-3 font-semibold text-stone-700 text-sm">
            
            {/* Language Switcher in Mobile Drawer */}
            <div className="pb-3 border-b border-stone-100 flex items-center justify-between">
              <span className="text-xs text-stone-500 flex items-center gap-1.5">
                <Globe className="w-4 h-4 text-emerald-600" />
                <span>{t.languageSelect}:</span>
              </span>
              <div className="flex items-center gap-1.5">
                {languages.map(l => (
                  <button
                    key={l.code}
                    onClick={() => setLanguage(l.code)}
                    className={`px-2.5 py-1 rounded-lg text-xs font-bold transition-all ${
                      language === l.code
                        ? 'bg-emerald-700 text-white shadow-sm'
                        : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
                    }`}
                  >
                    {l.flag} {l.label}
                  </button>
                ))}
              </div>
            </div>

            <button
              onClick={() => handleNavClick('hero')}
              className={`p-2.5 rounded-xl text-start transition-colors ${
                activeSection === 'hero' ? 'bg-emerald-50 text-emerald-800 font-bold' : 'hover:bg-stone-100'
              }`}
            >
              {t.home}
            </button>
            <button
              onClick={() => handleNavClick('products')}
              className={`p-2.5 rounded-xl text-start transition-colors ${
                activeSection === 'products' ? 'bg-emerald-50 text-emerald-800 font-bold' : 'hover:bg-stone-100'
              }`}
            >
              {t.products16}
            </button>
            <button
              onClick={() => handleNavClick('articles')}
              className={`p-2.5 rounded-xl text-start transition-colors flex items-center gap-2 ${
                activeSection === 'articles' ? 'bg-emerald-50 text-emerald-800 font-bold' : 'hover:bg-stone-100'
              }`}
            >
              <BookOpen className="w-4 h-4 text-emerald-600" />
              <span>{t.scientificArticles}</span>
            </button>
            <button
              onClick={() => handleNavClick('soil-guide')}
              className={`p-2.5 rounded-xl text-start transition-colors ${
                activeSection === 'soil-guide' ? 'bg-emerald-50 text-emerald-800 font-bold' : 'hover:bg-stone-100'
              }`}
            >
              {t.soilGuide}
            </button>
            <button
              onClick={() => handleNavClick('about')}
              className={`p-2.5 rounded-xl text-start transition-colors ${
                activeSection === 'about' ? 'bg-emerald-50 text-emerald-800 font-bold' : 'hover:bg-stone-100'
              }`}
            >
              {t.aboutUs}
            </button>
            <button
              onClick={() => handleNavClick('consult')}
              className={`p-2.5 rounded-xl text-start transition-colors ${
                activeSection === 'consult' ? 'bg-emerald-50 text-emerald-800 font-bold' : 'hover:bg-stone-100'
              }`}
            >
              {t.consultation}
            </button>
            <button
              onClick={() => handleNavClick('contact')}
              className={`p-2.5 rounded-xl text-start transition-colors ${
                activeSection === 'contact' ? 'bg-emerald-50 text-emerald-800 font-bold' : 'hover:bg-stone-100'
              }`}
            >
              {t.contact}
            </button>

            <div className="pt-3 border-t border-stone-100">
              <a
                href={companyInfo.callUrl}
                className="w-full flex items-center justify-center gap-2 py-3 bg-emerald-700 text-white rounded-xl font-bold text-sm shadow-sm"
              >
                <Phone className="w-4 h-4" />
                <span>{companyInfo.phoneFormatted}</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
