import React from 'react';
import { companyInfo } from '../data/company';
import { initialProducts } from '../data/products';
import { Phone, Mail, MapPin, ArrowUp, Lock, Globe, Instagram } from 'lucide-react';
import { PishgamanLogo } from './PishgamanLogo';
import { useLanguage } from '../i18n/LanguageContext';
import { Language } from '../types';

interface Props {
  onNavigate: (sectionId: string) => void;
  onOpenAdmin: () => void;
}

const languages: { code: Language; label: string; flag: string }[] = [
  { code: 'fa', label: 'فارسی', flag: '🇮🇷' },
  { code: 'en', label: 'English', flag: '🇬🇧' },
  { code: 'ar', label: 'العربية', flag: '🇦🇪' },
  { code: 'ur', label: 'اردو (پاکستانی)', flag: '🇵🇰' }
];

export const Footer: React.FC<Props> = ({ onNavigate, onOpenAdmin }) => {
  const { language, setLanguage, t, isRtl } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className={`bg-stone-900 text-stone-300 pt-16 pb-12 border-t border-stone-800 ${isRtl ? 'text-right' : 'text-left'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-12">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          
          {/* Column 1: Company Profile (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <PishgamanLogo variant="white" size="lg" />

            <p className="text-xs text-stone-400 leading-relaxed font-light pt-2">
              {language === 'en'
                ? 'Leading in innovation, high-potency formulations, and scientific plant nutrition solutions to overcome soil salinity, alkalinity and boost agricultural yields sustainably.'
                : language === 'ar'
                ? 'الريادة في الابتكار والتركيبات الزراعية الحديثة وتقديم الحلول العلمية لتغذية التربة ومعالجة الملوحة ومضاعفة إنتاجية المحاصيل.'
                : 'پیشرو در نوآوری، تولید و واردات محصولات جدید و ارائه راه‌حل‌های علمی برای تغذیه خاک، افزایش مقاومت در برابر شوری و ارتقای چشمگیر کیفیت و کمیت محصولات کشاورزی در سراسر کشور.'}
            </p>

            <div className="pt-1 text-xs text-emerald-400 font-mono tracking-wider">
              {t.slogan}
            </div>

            <div className="pt-2 flex items-center gap-2">
              <span className="text-[11px] text-stone-400">{t.management}:</span>
              <span className="text-xs font-bold text-white">{t.managerName}</span>
            </div>

            {/* Language Selection in Footer */}
            <div className="pt-3 flex flex-wrap items-center gap-2">
              <span className="text-[11px] text-stone-400 flex items-center gap-1">
                <Globe className="w-3.5 h-3.5 text-emerald-400" />
                <span>{t.languageSelect}:</span>
              </span>
              <div className="flex flex-wrap items-center gap-1.5">
                {languages.map(l => (
                  <button
                    key={l.code}
                    onClick={() => setLanguage(l.code)}
                    className={`px-2 py-0.5 rounded text-[11px] font-bold transition-all cursor-pointer ${
                      language === l.code
                        ? 'bg-emerald-600 text-white'
                        : 'bg-stone-800 text-stone-400 hover:text-white'
                    }`}
                  >
                    {l.flag} {l.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Instagram Official Page */}
            <div className="pt-3">
              <a
                href={companyInfo.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-gradient-to-r from-pink-600 via-rose-500 to-amber-500 hover:from-pink-700 hover:to-amber-600 text-white text-xs font-bold transition-all shadow-sm hover:shadow-md cursor-pointer group"
              >
                <Instagram className="w-4 h-4 text-white group-hover:scale-110 transition-transform" />
                <span>
                  {language === 'en'
                    ? 'Instagram: @pishgaman_org'
                    : language === 'ar'
                    ? 'صفحة إنستغرام: pishgaman_org@'
                    : language === 'ur'
                    ? 'انسٹاگرام پیج: pishgaman_org@'
                    : 'صفحه اینستاگرام: pishgaman_org@'}
                </span>
              </a>
            </div>
          </div>

          {/* Column 2: 16 Products List (4 cols) */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-sm font-bold text-white border-b border-stone-800 pb-2">
              {t.footerCatalog}
            </h4>
            <div className="grid grid-cols-2 gap-x-2 gap-y-1 text-xs text-stone-400">
              {initialProducts.map(p => {
                const displayName = language === 'en' ? p.nameEn : p.nameFa;
                const subName = language === 'en' ? p.nameFa : p.nameEn;
                return (
                  <button
                    key={p.id}
                    onClick={() => onNavigate('products')}
                    className={`hover:text-emerald-400 transition-colors py-0.5 truncate cursor-pointer ${isRtl ? 'text-right' : 'text-left'}`}
                  >
                    • {displayName} <span className="opacity-60 text-[10px]">({subName})</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Column 3: Contact & Direct Call (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-sm font-bold text-white border-b border-stone-800 pb-2">
              {t.footerContact}
            </h4>

            <div className="space-y-3 text-xs text-stone-300">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 bg-stone-800/80 p-3 rounded-xl border border-stone-700/80">
                <div className="flex items-center gap-2.5">
                  <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                  <div>
                    <span className="text-[10px] text-stone-400 block">
                      {language === 'en' ? 'Tehran Office:' : language === 'ar' ? 'هاتف طهران:' : language === 'ur' ? 'تہران دفتر:' : 'دفتر تهران:'}
                    </span>
                    <a
                      href="tel:02144281549"
                      dir="ltr"
                      className="font-mono text-sm font-black text-white hover:text-emerald-300 tracking-wider inline-block text-left"
                    >
                      021-44281549
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-2.5">
                  <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                  <div>
                    <span className="text-[10px] text-stone-400 block">
                      {language === 'en' ? 'Mobile / WhatsApp:' : language === 'ar' ? 'الجوال / واتساب:' : language === 'ur' ? 'موبائل / واٹس ایپ:' : 'همراه / واتس‌اپ:'}
                    </span>
                    <a
                      href={companyInfo.callUrl}
                      dir="ltr"
                      className="font-mono text-sm font-black text-white hover:text-emerald-300 tracking-wider inline-block text-left"
                    >
                      {companyInfo.phoneFormatted}
                    </a>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-emerald-400 shrink-0" />
                <a
                  href={`mailto:${companyInfo.email}`}
                  className="font-mono text-xs text-emerald-300 hover:text-white transition-colors underline-offset-2 hover:underline"
                >
                  {companyInfo.email}
                </a>
              </div>

              {/* Tehran Central Office Address */}
              <div className="flex items-start gap-2.5 pt-1">
                <MapPin className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <div className="text-stone-300 text-xs">
                  <span className="font-bold text-white block">
                    {language === 'en' ? 'Central Office (Tehran):' : language === 'ar' ? 'المكتب المركزي (طهران):' : language === 'ur' ? 'مرکزی دفتر (تہران):' : 'دفتر تهران:'}
                  </span>
                  <span className="text-stone-400 leading-relaxed block pt-0.5">
                    {language === 'en'
                      ? companyInfo.addressTehranEn
                      : language === 'ar'
                      ? companyInfo.addressTehranAr
                      : language === 'ur'
                      ? companyInfo.addressTehranUr
                      : companyInfo.addressTehran}
                  </span>
                </div>
              </div>

              {/* Khuzestan Dezful Address */}
              <div className="flex items-start gap-2.5 pt-1">
                <MapPin className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <div className="text-stone-300 text-xs">
                  <span className="font-bold text-white block">
                    {language === 'en' ? 'Branch & Facility (Khuzestan - Dezful):' : language === 'ar' ? 'فرع خوزستان (دزفول):' : language === 'ur' ? 'شاخ اور فیکٹری (خوزستان - دزفول):' : 'شعبه و کارخانه خوزستان (دزفول):'}
                  </span>
                  <span className="text-stone-400 leading-relaxed block pt-0.5">
                    {language === 'en'
                      ? 'Khuzestan, Dezful, Najjaran, Najjar 2, Pishgaman Company'
                      : language === 'ar'
                      ? 'خوزستان، دزفول، نجاران، نجار ۲، شركة بيشغامان'
                      : language === 'ur'
                      ? 'خوزستان، دزفول، نجاران، نجار ۲، کمپنی پیشگامان'
                      : companyInfo.addressDezful}
                  </span>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenAdmin}
                className="inline-flex items-center gap-1.5 text-xs text-stone-500 hover:text-emerald-400 transition-colors cursor-pointer"
              >
                <Lock className="w-3.5 h-3.5" />
                <span>{t.adminPanel}</span>
              </button>
            </div>
          </div>

        </div>

        {/* Quick Contact & Address Summary Strip */}
        <div className="pt-4 border-t border-stone-800/80 flex flex-wrap items-center justify-between gap-3 text-xs text-stone-400 bg-stone-950/40 p-4 rounded-2xl border border-stone-800">
          <div className="flex flex-wrap items-center gap-3 sm:gap-4">
            <span className="flex items-center gap-1.5 text-stone-300">
              <Mail className="w-3.5 h-3.5 text-emerald-400" />
              <span>ایمیل رسمی:</span>
              <a href="mailto:pishgamanparvaznahade@gmail.com" className="font-mono text-emerald-400 hover:text-white underline font-bold">
                pishgamanparvaznahade@gmail.com
              </a>
            </span>
            <span className="hidden lg:inline text-stone-600">|</span>
            <span className="flex items-center gap-1 text-stone-300">
              <MapPin className="w-3.5 h-3.5 text-emerald-400" />
              <span>تهران، فلکه اول صادقیه، خیابان پاییزان، پلاک ۵۸</span>
            </span>
            <span className="hidden lg:inline text-stone-600">|</span>
            <span className="flex items-center gap-1 text-stone-300">
              <MapPin className="w-3.5 h-3.5 text-emerald-400" />
              <span>خوزستان، دزفول، نجاران، نجار ۲</span>
            </span>
          </div>

          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1">
              <Phone className="w-3.5 h-3.5 text-emerald-400" />
              <a href="tel:02144281549" dir="ltr" className="font-mono font-bold text-white hover:text-emerald-400">
                021-44281549
              </a>
            </span>
            <span className="text-stone-600">|</span>
            <span className="flex items-center gap-1">
              <Phone className="w-3.5 h-3.5 text-emerald-400" />
              <a href="tel:09128247415" dir="ltr" className="font-mono font-bold text-white hover:text-emerald-400">
                09128247415
              </a>
            </span>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-4 border-t border-stone-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500">
          <div>
            © {new Date().getFullYear()} {t.footerAllRights}
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={() => onNavigate('articles')}
              className="hover:text-stone-300 transition-colors cursor-pointer text-emerald-400 font-semibold"
            >
              {t.scientificArticles}
            </button>
            <span>·</span>
            <button
              onClick={() => onNavigate('soil-guide')}
              className="hover:text-stone-300 transition-colors cursor-pointer"
            >
              {t.soilGuide}
            </button>
            <span>·</span>
            <button
              onClick={() => onNavigate('about')}
              className="hover:text-stone-300 transition-colors cursor-pointer"
            >
              {t.aboutUs}
            </button>
            <span>·</span>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1 text-emerald-400 hover:text-emerald-300 cursor-pointer"
            >
              <ArrowUp className="w-3.5 h-3.5" />
              <span>{t.footerScrollToTop}</span>
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
