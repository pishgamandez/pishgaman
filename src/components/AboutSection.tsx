import React from 'react';
import { companyInfo } from '../data/company';
import { ShieldCheck, HeartHandshake, Leaf } from 'lucide-react';
import { PishgamanLogo } from './PishgamanLogo';
import { useLanguage } from '../i18n/LanguageContext';

export const AboutSection: React.FC = () => {
  const { language, t, isRtl } = useLanguage();

  return (
    <section id="about" className="py-20 bg-stone-50 border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Visual column */}
          <div className="lg:col-span-5 order-2 lg:order-1 space-y-6">
            <div className={`relative bg-gradient-to-br from-emerald-900 to-stone-900 text-white rounded-3xl p-8 shadow-2xl border border-stone-700 overflow-hidden ${isRtl ? 'text-right' : 'text-left'}`}>
              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-2xl" />
              
              <div className="space-y-4 relative z-10">
                <div className="flex items-center justify-between border-b border-white/15 pb-4">
                  <PishgamanLogo variant="white" size="lg" />
                  <span className="px-3 py-1 bg-white/10 rounded-full text-xs font-mono text-emerald-300">
                    {t.slogan}
                  </span>
                </div>
                
                <h3 className="text-2xl font-black text-white">
                  {language === 'en' ? companyInfo.nameEn : companyInfo.name}
                </h3>
                <div className="text-emerald-400 font-bold text-sm">
                  {t.officialBrand}: {t.brandName}
                </div>

                <p className="text-xs text-stone-300 leading-relaxed font-light">
                  {language === 'en'
                    ? 'Synergy of state-of-the-art plant biochemistry and customized nutritional formulations, grounded in decades of agronomic fieldwork across pistachios, citrus, stone fruits, cereals, and industrial greenhouses.'
                    : language === 'ar'
                    ? 'دمج المعرفة الحديثة في كيمياء النبات مع أحدث تركيبات الأسمدة الزراعية، بالاعتماد على سنوات من الخبرة الحقلية في بساتين الفستق والحمضيات ومزارع الحبوب والبيوت المحمية.'
                    : 'تلفیق دانش روز بیوشیمی گیاهی و فرمولاسیون اختصاصی کودهای کشاورزی، با تکیه بر سال‌ها تجربه میدانی در باغات پسته، مرکبات، گردو، مزارع غلات، صیفی‌جات و گلخانه‌های صنعتی کشور.'}
                </p>

                <div className="pt-4 border-t border-white/15 space-y-2">
                  <div className="text-xs text-stone-400">{t.management}:</div>
                  <div className="text-lg font-black text-white flex items-center justify-between">
                    <span>{t.managerName}</span>
                    <span className="text-xs font-mono text-emerald-400 bg-emerald-950/80 px-2 py-0.5 rounded border border-emerald-500/30">
                      PhD Agronomy
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick trust metrics */}
            <div className="grid grid-cols-3 gap-3 text-center">
              <div className="bg-white rounded-2xl p-4 border border-stone-200 shadow-xs">
                <span className="block text-xl font-black text-emerald-700 font-mono">16+</span>
                <span className="text-[11px] text-stone-500 mt-1 block">{t.heroStatProducts}</span>
              </div>
              <div className="bg-white rounded-2xl p-4 border border-stone-200 shadow-xs">
                <span className="block text-xl font-black text-emerald-700 font-mono">100%</span>
                <span className="text-[11px] text-stone-500 mt-1 block">
                  {language === 'en' ? 'Quality Guarantee' : language === 'ar' ? 'ضمان الجودة' : 'تعهد به کیفیت'}
                </span>
              </div>
              <div className="bg-white rounded-2xl p-4 border border-stone-200 shadow-xs">
                <span className="block text-xl font-black text-emerald-700 font-mono">24/7</span>
                <span className="text-[11px] text-stone-500 mt-1 block">
                  {language === 'en' ? 'Expert Advisory' : language === 'ar' ? 'استشارات فنية' : 'مشاوره کارشناسی'}
                </span>
              </div>
            </div>
          </div>

          {/* Text column */}
          <div className={`lg:col-span-7 order-1 lg:order-2 space-y-6 ${isRtl ? 'text-right' : 'text-left'}`}>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold">
              <Leaf className="w-3.5 h-3.5 text-emerald-600" />
              <span>{t.aboutTitle}</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-black text-stone-900 tracking-tight leading-snug">
              {language === 'en'
                ? 'Pioneering Innovation, Quality Production & Sustainable Crop Performance'
                : language === 'ar'
                ? 'الريادة في الابتكار والإنتاج وتقديم حلول التنمية الزراعية المستدامة'
                : 'پیشرو در نوآوری، تولید و ارائه راهکارهای توسعه پایدار کشاورزی'}
            </h2>

            <div className="space-y-4 text-sm text-stone-700 leading-relaxed font-light text-justify">
              <p className="bg-white p-4 rounded-2xl border border-stone-200 shadow-xs">
                <strong className="font-bold text-stone-900 block mb-1">{t.aboutVisionTitle}:</strong>
                {language === 'en'
                  ? 'Pishgaman Paydar Falat Nik Company under the Parvaz Nahadeh brand strives to innovate, formulate, and deliver advanced plant nutritional solutions, increasing high-grade food yield for human and animal consumption.'
                  : language === 'ar'
                  ? 'تهدف شركة بيشغامان بايدار فلات نيك بعلامتها (برواز نهاده) إلى الريادة في الابتكار والإنتاج واستيراد المنتجات المتقدمة لتقديم حلول متكاملة لزيادة إنتاجية المحاصيل الغذائية بأعلى مواصفات الجودة.'
                  : companyInfo.intro}
              </p>

              <p className="bg-white p-4 rounded-2xl border border-stone-200 shadow-xs">
                <strong className="font-bold text-stone-900 block mb-1">{t.aboutMissionTitle}:</strong>
                {language === 'en'
                  ? 'Our mission is dedicated to continuous scientific learning, authentic partnership with growers, and creating lasting value across all agricultural sectors.'
                  : language === 'ar'
                  ? 'نسعى دائماً لاكتساب المعارف الجديدة وبناء علاقات متينة وطويلة الأمد مع المزارعين والخبراء في مختلف القطاعات الزراعية لضمان استدامة النجاح.'
                  : companyInfo.mission}
              </p>

              <p className="bg-white p-4 rounded-2xl border border-stone-200 shadow-xs">
                <strong className="font-bold text-stone-900 block mb-1">{t.aboutValuesTitle}:</strong>
                {language === 'en'
                  ? 'Core organizational values include honest guidance, continuous education, sustainable ecological responsibility, and uncompromising integrity in fulfilling all farmer commitments.'
                  : language === 'ar'
                  ? 'أولويتنا هي التعليم، الخدمة الصادقة، السلوك المسؤول، والالتزام بمعايير التنمية المستدامة، مع نقل مشاعر الثقة والأمان لجميع المزارعين.'
                  : companyInfo.values}
              </p>
            </div>

            {/* Strategic Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="flex items-center gap-2.5 text-xs text-stone-800 font-semibold bg-emerald-50/70 p-3 rounded-xl border border-emerald-100">
                <ShieldCheck className="w-4 h-4 text-emerald-700 shrink-0" />
                <span>
                  {language === 'en'
                    ? 'Customized formulations for arid, saline and high-pH soils'
                    : language === 'ar'
                    ? 'تركيبات مخصصة لظروف الجفاف والأراضي الكلسية والمالحة'
                    : 'فرمولاسیون اختصاصی مطابق اقلیم کم‌آب و خاک‌های شور کشور'}
                </span>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-stone-800 font-semibold bg-emerald-50/70 p-3 rounded-xl border border-emerald-100">
                <HeartHandshake className="w-4 h-4 text-emerald-700 shrink-0" />
                <span>
                  {language === 'en'
                    ? 'Honest agronomic advice and enduring grower partnership'
                    : language === 'ar'
                    ? 'الصدق في الاستشارة وشراكة حقيقية مع المزارع'
                    : 'صداقت در مشاوره و انتقال حس رضایت عمیق به باغدار و کشاورز'}
                </span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
