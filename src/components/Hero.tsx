import React from 'react';
import { ArrowLeft, ArrowRight, ShieldCheck, Award, Sparkles, Phone, FileText, CheckCircle2, Sprout } from 'lucide-react';
import { companyInfo } from '../data/company';
import { PishgamanLogo } from './PishgamanLogo';
import { useLanguage } from '../i18n/LanguageContext';
import goldenWheatImg from '../assets/images/golden_wheat_field_1791481535252.jpg';
import farmAerialImg from '../assets/images/hero_wheat_field_1791480930784.jpg';
import researchImg from '../assets/images/agri_research_lab_1791480948724.jpg';

interface HeroProps {
  onExploreProducts: () => void;
  onOpenConsult: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreProducts, onOpenConsult }) => {
  const { language, t, isRtl } = useLanguage();

  return (
    <section className="relative overflow-hidden bg-stone-900 text-white pt-10 pb-20 md:pt-16 md:pb-28">
      {/* 1. Real Vibrant Agricultural Golden Wheat Field Background Photo */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-85 scale-100 transition-transform duration-1000 ease-out"
        style={{ backgroundImage: `url(${goldenWheatImg})` }}
      />
      
      {/* Soft directional overlays that keep the wheat field vividly visible while guaranteeing text legibility */}
      <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/70 to-stone-950/40" />
      <div className="absolute inset-0 bg-gradient-to-l from-stone-950/85 via-stone-950/60 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Main Content Column with Glassmorphism Backdrop */}
          <div className={`lg:col-span-7 space-y-6 ${isRtl ? 'text-right' : 'text-left'} bg-stone-950/75 p-6 sm:p-10 rounded-3xl border border-white/20 backdrop-blur-md shadow-2xl`}>
            {/* Top Brand Badges */}
            <div className="flex flex-wrap items-center gap-2.5 text-xs">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/30 text-emerald-300 border border-emerald-400/50 font-bold backdrop-blur-md shadow-sm">
                <Sprout className="w-4 h-4 text-emerald-400" />
                <span>{t.officialBrand}: {t.brandName}</span>
              </span>
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-black/60 text-stone-200 border border-white/20 text-[11px] font-mono backdrop-blur-md">
                {t.slogan}
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-[1.25] text-white drop-shadow-lg">
              {t.heroHeadline1}{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-l from-emerald-400 via-teal-300 to-amber-300">
                {t.heroHeadline2}
              </span>
            </h1>

            {/* Sub-headline */}
            <p className="text-sm sm:text-base text-stone-100 leading-relaxed font-normal drop-shadow">
              {t.heroSubheadline}
            </p>

            {/* Key Value Bullets */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1 text-xs text-stone-100">
              <div className="flex items-center gap-2 bg-black/40 border border-white/15 rounded-xl p-3 backdrop-blur-sm">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>
                  {language === 'en'
                    ? 'Specialized formulations for calcareous and saline soils'
                    : language === 'ar'
                    ? 'تركيبات مخصصة للأراضي الكلسية والمالحة'
                    : 'فرمولاسیون اختصاصی برای خاک‌های آهکی و شور کشور'}
                </span>
              </div>
              <div className="flex items-center gap-2 bg-black/40 border border-white/15 rounded-xl p-3 backdrop-blur-sm">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>
                  {language === 'en'
                    ? '100% water-soluble Fe-EDDHA and liquid sulfur'
                    : language === 'ar'
                    ? 'شيلات الحديد EDDHA وكبريت سائل بنقاوة ١٠٠٪'
                    : 'کلات‌های آهن EDDHA و گوگرد مایع با خلوص ۱۰۰٪'}
                </span>
              </div>
              <div className="flex items-center gap-2 bg-black/40 border border-white/15 rounded-xl p-3 backdrop-blur-sm">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>
                  {language === 'en'
                    ? 'Precision dosage tables for orchards, field crops & greenhouses'
                    : language === 'ar'
                    ? 'جداول دقيقة لجرعات الأشجار، المحاصيل والبيوت المحمية'
                    : 'جدول دقیق مصرف زراعی، باغی و گلخانه‌ای'}
                </span>
              </div>
              <div className="flex items-center gap-2 bg-black/40 border border-white/15 rounded-xl p-3 backdrop-blur-sm">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>
                  {language === 'en'
                    ? `Personalized fertigation plans by ${t.managerName}`
                    : language === 'ar'
                    ? `استشارات وبرامج تسميدية بإشراف ${t.managerName}`
                    : `مشاوره و طراحی برنامه کودی توسط ${t.managerName}`}
                </span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-3 flex flex-wrap items-center gap-3.5">
              <button
                onClick={onExploreProducts}
                className="px-6 py-3.5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl font-bold text-sm shadow-xl shadow-emerald-950/70 transition-all flex items-center gap-2 cursor-pointer active:scale-95"
              >
                <span>{t.heroCatalogBtn}</span>
                {isRtl ? <ArrowLeft className="w-4 h-4" /> : <ArrowRight className="w-4 h-4" />}
              </button>

              <button
                onClick={onOpenConsult}
                className="px-6 py-3.5 bg-stone-900/90 hover:bg-stone-800 text-stone-100 hover:text-white rounded-xl font-semibold text-sm border border-white/20 transition-all flex items-center gap-2 cursor-pointer backdrop-blur-md"
              >
                <FileText className="w-4 h-4 text-emerald-400" />
                <span>{t.heroConsultBtn}</span>
              </button>

              <a
                href={companyInfo.callUrl}
                className="px-4 py-3.5 text-stone-200 hover:text-white text-xs flex items-center gap-2 underline underline-offset-4"
              >
                <Phone className="w-4 h-4 text-amber-400 animate-bounce" />
                <span>{language === 'en' ? 'Direct Line:' : language === 'ar' ? 'اتصال مباشر:' : 'تماس فوری:'}</span>
                <span dir="ltr" className="font-mono">{companyInfo.phoneFormatted}</span>
              </a>
            </div>
          </div>

          {/* Corporate Profile Card with Official Logo */}
          <div className="lg:col-span-5">
            <div className="relative rounded-3xl bg-stone-950/85 border border-white/20 p-6 sm:p-8 shadow-2xl backdrop-blur-md">
              {/* Official Logo Header */}
              <div className="flex items-center justify-between border-b border-white/15 pb-5 mb-6">
                <PishgamanLogo variant="white" size="lg" />
                <div className={isRtl ? 'text-left' : 'text-right'}>
                  <span className="text-[10px] font-mono text-emerald-400 font-bold block uppercase tracking-wider">
                    Official Brand
                  </span>
                  <span className="text-xs text-stone-200 font-bold block">
                    {t.brandName}
                  </span>
                </div>
              </div>

              {/* Stat items */}
              <div className={`grid grid-cols-2 gap-3 mb-6 ${isRtl ? 'text-right' : 'text-left'}`}>
                <div className="bg-white/10 rounded-2xl p-3.5 border border-white/10 backdrop-blur-xs">
                  <span className="block text-2xl font-black text-emerald-400 font-mono">16</span>
                  <span className="text-xs text-stone-300 mt-1 block">{t.heroStatProducts}</span>
                </div>
                <div className="bg-white/10 rounded-2xl p-3.5 border border-white/10 backdrop-blur-xs">
                  <span className="block text-2xl font-black text-amber-400 font-mono">100%</span>
                  <span className="text-xs text-stone-300 mt-1 block">{t.heroStatPurity}</span>
                </div>
                <div className="bg-white/10 rounded-2xl p-3.5 border border-white/10 backdrop-blur-xs">
                  <span className="block text-2xl font-black text-teal-400 font-mono">EDDHA</span>
                  <span className="text-xs text-stone-300 mt-1 block">
                    {language === 'en' ? 'Stable up to pH 9.0' : language === 'ar' ? 'ثابت حتى حموضة ٩.٠' : 'پایدار تا اسیدیته ۹ (ردفول)'}
                  </span>
                </div>
                <div className="bg-white/10 rounded-2xl p-3.5 border border-white/10 backdrop-blur-xs">
                  <span className="block text-2xl font-black text-blue-400 font-mono">0.0%</span>
                  <span className="text-xs text-stone-300 mt-1 block">
                    {language === 'en' ? 'Chloride-Free Tiger Gels' : language === 'ar' ? 'خالٍ من الكلور في جل تايكر' : 'کلر آزاد در ژل‌های تایگر'}
                  </span>
                </div>
              </div>

              {/* Management Note */}
              <div className="bg-emerald-950/80 border border-emerald-500/40 rounded-2xl p-4 text-xs text-stone-200 space-y-2">
                <div className="flex items-center justify-between text-emerald-300 font-bold">
                  <span>{t.management}:</span>
                  <span className="text-white">{t.managerName}</span>
                </div>
                <p className="text-stone-300 leading-relaxed text-[11px]">
                  {language === 'en'
                    ? '"Our mission is not merely selling inputs, but delivering scientific solutions to overcome soil salinity, unlock nutrients, and maximize crop yields sustainably."'
                    : language === 'ar'
                    ? '"هدفنا ليس مجرد بيع الأسمدة، بل تقديم حلول علمية لعلاج ملوحة التربة وتحرير العناصر الغذائية ومضاعفة إنتاجية المحاصيل."'
                    : '«هدف ما صرفاً فروش کود نیست؛ ارائه راهکارهای علمی برای برطرف‌سازی کمبودهای فیزیولوژیک، شکستن شوری خاک و ارتقای تناژ و کیفیت محصول است.»'}
                </p>
                <div className="pt-2 flex items-center justify-between border-t border-emerald-500/30 text-[11px]">
                  <span className="text-stone-300">{language === 'en' ? 'Direct Agronomic Advisory:' : language === 'ar' ? 'استشارة زراعية مباشرة:' : 'مشاوره تخصصی باغات و زراعت:'}</span>
                  <a
                    href={companyInfo.callUrl}
                    dir="ltr"
                    className="font-mono text-emerald-300 font-bold hover:underline"
                  >
                    {companyInfo.phoneFormatted}
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Visual Agricultural Field Showcase Strip */}
        <div className="mt-12 pt-8 border-t border-white/15 grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="relative rounded-2xl overflow-hidden h-36 border border-white/20 group shadow-lg">
            <img
              src={goldenWheatImg}
              alt="Golden Wheat Fields"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex items-end p-3.5 ${isRtl ? 'text-right' : 'text-left'}`}>
              <div>
                <span className="text-[10px] text-amber-300 font-bold block">
                  {language === 'en' ? 'Cereals & Grain Fields' : language === 'ar' ? 'محاصيل الحبوب والغلال' : 'مزارع غلات و دانه‌های روغنی'}
                </span>
                <h4 className="text-xs font-black text-white">
                  {language === 'en' ? '1,000-grain weight optimization' : language === 'ar' ? 'زيادة وزن الحبوب والإنتاج' : 'تغذیه تخصصی و افزایش وزن هزار دانه'}
                </h4>
              </div>
            </div>
          </div>

          <div className="relative rounded-2xl overflow-hidden h-36 border border-white/20 group shadow-lg">
            <img
              src={farmAerialImg}
              alt="Precision Irrigation"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex items-end p-3.5 ${isRtl ? 'text-right' : 'text-left'}`}>
              <div>
                <span className="text-[10px] text-emerald-300 font-bold block">
                  {language === 'en' ? 'Salinity & Drip Irrigation' : language === 'ar' ? 'إدارة الملوحة والري بالتنقيط' : 'مدیریت شوری و آبیاری قطره‌ای'}
                </span>
                <h4 className="text-xs font-black text-white">
                  {language === 'en' ? 'Salt Stop & Sulmax Remediation' : language === 'ar' ? 'معالجة التربة مع سالت استوب وسول ماكس' : 'اصلاح بافت خاک با سالت استاپ و سول مکس'}
                </h4>
              </div>
            </div>
          </div>

          <div className="relative rounded-2xl overflow-hidden h-36 border border-white/20 group shadow-lg">
            <img
              src={researchImg}
              alt="Plant Biochemistry R&D"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex items-end p-3.5 ${isRtl ? 'text-right' : 'text-left'}`}>
              <div>
                <span className="text-[10px] text-teal-300 font-bold block">
                  {language === 'en' ? 'Root Kinetics & Nutrient Mobility' : language === 'ar' ? 'تنشيط الجذور وتيسير العناصر' : 'توسعه ریشه و جذب عناصر'}
                </span>
                <h4 className="text-xs font-black text-white">
                  {language === 'en' ? 'Advanced Chelates & Organic Blends' : language === 'ar' ? 'أسمدة مخلبية وعضوية متقدمة' : 'فرمولاسیون کلات‌های پیشرفته و ارگانیک'}
                </h4>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
