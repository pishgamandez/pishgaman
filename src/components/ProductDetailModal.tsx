import React from 'react';
import { Product } from '../types';
import { ProductPackageIllustration } from './ProductPackageIllustration';
import { X, Phone, CheckCircle2, ShieldCheck, Sparkles, Share2 } from 'lucide-react';
import { companyInfo } from '../data/company';
import { PishgamanLogo } from './PishgamanLogo';
import { useLanguage } from '../i18n/LanguageContext';

interface ProductDetailModalProps {
  product: Product | null;
  onClose: () => void;
  onOpenConsult: (productName: string) => void;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({
  product,
  onClose,
  onOpenConsult
}) => {
  const { language, t, isRtl } = useLanguage();
  if (!product) return null;

  const displayName = language === 'en' ? product.nameEn : product.nameFa;
  const subName = language === 'en' ? product.nameFa : product.nameEn;

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: `${displayName} (${subName}) | Pishgaman Falat Nik`,
        text: product.tagline,
        url: window.location.href
      }).catch(() => {});
    } else {
      navigator.clipboard?.writeText(window.location.href);
      alert(language === 'en' ? 'Link copied to clipboard.' : language === 'ar' ? 'تم نسخ الرابط بنجاح.' : 'لینک این صفحه کپی شد.');
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-stone-950/70 backdrop-blur-md overflow-y-auto">
      <div className={`relative w-full max-w-4xl bg-white rounded-3xl shadow-2xl overflow-hidden my-auto border border-stone-200 animate-in fade-in zoom-in-95 duration-200 ${isRtl ? 'text-right' : 'text-left'}`}>
        
        {/* Top Header Bar */}
        <div className="sticky top-0 z-30 bg-white/95 backdrop-blur-md border-b border-stone-200 px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <PishgamanLogo variant="icon" size="sm" />
            <div>
              <div className="text-[11px] text-stone-500 font-semibold">
                {language === 'en'
                  ? 'Official Formulation by Pishgaman Paydar Falat Nik Co.'
                  : language === 'ar'
                  ? 'منتج معتمد من شركة بيشغامان بايدار فلات نيك'
                  : 'محصول شرکت پیشگامان پایدار فلات نیک'}
              </div>
              <h3 className="text-lg font-black text-stone-900 leading-tight">
                {displayName}{' '}
                <span className="font-mono text-sm text-stone-400 font-bold uppercase mx-1">
                  ({subName})
                </span>
              </h3>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleShare}
              className="p-2 text-stone-500 hover:text-stone-900 rounded-xl hover:bg-stone-100 transition-colors cursor-pointer"
              title="Share"
            >
              <Share2 className="w-5 h-5" />
            </button>
            <button
              onClick={onClose}
              className="p-2 text-stone-500 hover:text-stone-900 rounded-xl hover:bg-stone-100 transition-colors cursor-pointer"
              title="Close"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Scrollable Content Body */}
        <div className="p-6 sm:p-8 max-h-[80vh] overflow-y-auto space-y-8">
          
          {/* Top Hero Layout: Packaging + Overview */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            <div className="md:col-span-5 flex flex-col items-center">
              <ProductPackageIllustration product={product} size="lg" className="w-full max-w-sm" />
              <div className="w-full mt-3 bg-stone-50 border border-stone-200 rounded-2xl p-3 text-xs text-stone-600 space-y-1.5">
                <div className="flex items-center justify-between">
                  <span className="text-stone-500">{t.appearanceLabel}</span>
                  <span className="font-bold text-stone-800">{product.appearance}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-stone-500">{t.packagingLabel}</span>
                  <span className="font-bold text-stone-800">{product.packaging}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-stone-500">{t.officialBrand}:</span>
                  <span className="font-bold text-emerald-800">{t.brandName}</span>
                </div>
              </div>
            </div>

            <div className="md:col-span-7 space-y-4">
              <div className="inline-block px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold">
                {product.categoryTitle}
              </div>

              <h2 className="text-2xl sm:text-3xl font-black text-stone-900 leading-snug">
                {product.tagline}
              </h2>

              <p className="text-sm text-stone-700 leading-relaxed text-justify">
                {product.description}
              </p>

              {/* Corporate Trust Badge */}
              <div className="bg-emerald-50 border border-emerald-200/80 rounded-2xl p-4 flex items-start gap-3 text-xs text-emerald-950">
                <ShieldCheck className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5" />
                <div>
                  <strong className="block font-bold">
                    {language === 'en'
                      ? 'Guaranteed Quality & Laboratory Verification'
                      : language === 'ar'
                      ? 'ضمان الأصالة والتحليل المخبري المعتمد'
                      : 'تضمین اصالت و آنالیز آزمایشگاهی'}
                  </strong>
                  <span>
                    {language === 'en'
                      ? `Produced under direct scientific supervision of ${t.managerName} for optimal crop fertility.`
                      : language === 'ar'
                      ? `تم إنتاج واعتماد هذا السماد تحت إشراف مباشر من الفريق العلمي و ${t.managerName}.`
                      : `این محصول با نظارت مستقیم تیم علمی و ${t.managerName} برای حاصلخیزی بهینه مزارع و باغات تولید و تایید شده است.`}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Detailed Benefits Section */}
          <div className="space-y-4">
            <h4 className="text-base font-black text-stone-900 border-b border-stone-200 pb-2 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-emerald-600" />
              <span>{t.benefitsLabel} {displayName}</span>
            </h4>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {product.benefits.map((benefit, idx) => (
                <div
                  key={idx}
                  className="bg-stone-50 border border-stone-200/70 rounded-2xl p-3.5 flex items-start gap-2.5 text-xs text-stone-800"
                >
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Dosage & Application Table */}
          <div className="space-y-4">
            <div className="flex items-center justify-between border-b border-stone-200 pb-2">
              <h4 className="text-base font-black text-stone-900">
                {t.viewDosageTable}
              </h4>
              <span className="text-xs text-stone-500 font-mono">Application Rates</span>
            </div>

            <div className="overflow-x-auto rounded-2xl border border-stone-200 shadow-xs">
              <table className={`w-full text-xs ${isRtl ? 'text-right' : 'text-left'}`}>
                <thead className="bg-stone-100 text-stone-800 font-bold border-b border-stone-200">
                  <tr>
                    <th className="py-3 px-4">{language === 'en' ? 'Crop Category' : language === 'ar' ? 'المحصول' : 'محصول / رده گیاهی'}</th>
                    <th className="py-3 px-4">{language === 'en' ? 'Method' : language === 'ar' ? 'طريقة الاستخدام' : 'نحوه مصرف'}</th>
                    {product.dosageTable.some(d => d.timing) && (
                      <th className="py-3 px-4">{language === 'en' ? 'Timing' : language === 'ar' ? 'ميعاد الاستخدام' : 'زمان مصرف پیشنهادی'}</th>
                    )}
                    <th className="py-3 px-4">{language === 'en' ? 'Dosage Rate' : language === 'ar' ? 'الجرعة المقررة' : 'مقدار و دوز مصرف'}</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-stone-200 bg-white">
                  {product.dosageTable.map((row, idx) => (
                    <tr key={idx} className="hover:bg-emerald-50/50 transition-colors">
                      <td className="py-3 px-4 font-bold text-stone-900">{row.crop}</td>
                      <td className="py-3 px-4 text-stone-700">{row.method}</td>
                      {product.dosageTable.some(d => d.timing) && (
                        <td className="py-3 px-4 text-stone-600">{row.timing || (language === 'en' ? 'Growing Season' : 'طول فصل رشد')}</td>
                      )}
                      <td className="py-3 px-4 font-black text-emerald-800 font-mono text-xs">
                        {row.rate}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-[11px] text-stone-500 leading-relaxed">
              {language === 'en'
                ? '* Note: Exact dosage rates may vary based on soil analysis, tree age, and local evapotranspiration. Contact our agronomy team for precision advice.'
                : language === 'ar'
                ? '* ملاحظة: قد تختلف الجرعات الدقيقة حسب نتائج تحليل التربة وعمر الأشجار والظروف الجوية. يرجى مراجعة الخبراء للحصول على خطة دقيقة.'
                : '* نکته: میزان مصرف دقیق ممکن است بر اساس نتیجه آزمون خاک، سن درختان و شرایط اقلیمی متغیر باشد. جهت دریافت نسخه دقیق با کارشناس ارشد شرکت تماس بگیرید.'}
            </p>
          </div>

          {/* Final Call To Action */}
          <div className="rounded-3xl bg-gradient-to-r from-emerald-900 via-emerald-800 to-stone-900 p-6 sm:p-8 text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
            <div className={`space-y-2 text-center ${isRtl ? 'sm:text-right' : 'sm:text-left'}`}>
              <span className="inline-block text-emerald-300 text-xs font-bold">
                {language === 'en' ? 'Direct Advisory & Rapid Ordering' : language === 'ar' ? 'استشارة مباشرة وطلب فوري' : 'مشاوره مستقیم و ثبت سفارش فوری'}
              </span>
              <h4 className="text-lg sm:text-xl font-black">
                {language === 'en'
                  ? 'For ordering and expert inquiry call '
                  : language === 'ar'
                  ? 'لمزيد من المعلومات والطلب اتصل على '
                  : 'جهت کسب اطلاعات بیشتر و خرید با شماره '}
                <span className="text-amber-300 font-mono font-bold tracking-wider" dir="ltr">
                  09128247415
                </span>
              </h4>
              <p className="text-xs text-stone-300">
                {language === 'en'
                  ? `Nationwide Dispatch | Direct Advisory with ${t.managerName}`
                  : language === 'ar'
                  ? `توصيل لجميع المناطق | استشارات متخصصة مع ${t.managerName}`
                  : `ارسال به سراسر کشور | مشاوره تخصصی زراعی با ${t.managerName}`}
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <a
                href={companyInfo.callUrl}
                className="px-6 py-3.5 bg-amber-400 hover:bg-amber-300 text-stone-950 font-black text-sm rounded-xl transition-all shadow-lg shadow-amber-400/20 flex items-center gap-2 cursor-pointer active:scale-95 whitespace-nowrap"
              >
                <Phone className="w-4 h-4" />
                <span>{language === 'en' ? 'Call' : language === 'ar' ? 'اتصال' : 'تماس با:'}</span>
                <span dir="ltr" className="font-mono">{companyInfo.phoneFormatted}</span>
              </a>

              <button
                onClick={() => {
                  onClose();
                  onOpenConsult(displayName);
                }}
                className="px-5 py-3.5 bg-white/10 hover:bg-white/20 text-white font-bold text-xs rounded-xl border border-white/20 transition-all cursor-pointer whitespace-nowrap"
              >
                {t.requestConsultationForProduct}
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
