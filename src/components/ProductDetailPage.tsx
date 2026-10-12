import React, { useEffect, useState } from 'react';
import { Product, Article } from '../types';
import { useLanguage } from '../i18n/LanguageContext';
import { companyInfo } from '../data/company';
import { 
  Check, CheckCircle2, ShieldCheck, AlertTriangle, Layers,
  FlaskConical, Sparkles, Phone, MessageCircle, Share2, 
  ArrowRight, ArrowLeft, ChevronRight, ChevronDown, BookOpen, 
  HelpCircle, PackageCheck, Award, Truck, ExternalLink
} from 'lucide-react';
import { ProductPackageIllustration } from './ProductPackageIllustration';
import { getProductImageUrl } from '../utils/productImages';
import { getLocalizedProduct } from '../utils/productLocalization';

interface Props {
  product: Product;
  allProducts: Product[];
  allArticles: Article[];
  onBackToHome: () => void;
  onNavigateToProduct: (slug: string) => void;
  onNavigateToArticle: (slug: string) => void;
  onOpenConsult?: () => void;
}

export const ProductDetailPage: React.FC<Props> = ({
  product,
  allProducts,
  allArticles,
  onBackToHome,
  onNavigateToProduct,
  onNavigateToArticle,
  onOpenConsult
}) => {
  const { language, t, isRtl } = useLanguage();
  const [copiedLink, setCopiedLink] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const detail = product.detail;
  const productImageUrl = getProductImageUrl(product);

  // Comprehensive Product Localization
  const loc = getLocalizedProduct(product, language, t);
  const displayName = loc.displayName;
  const subName = loc.subName;
  const categoryTitle = loc.categoryTitle;
  const tagline = loc.tagline;
  const badge = loc.badge;
  const appearance = loc.appearance;
  const packaging = loc.packaging;
  const benefitsList = loc.benefits;
  const h1Title = loc.h1Title;
  const metaTitle = loc.metaTitle;
  const metaDescription = loc.metaDescription;
  const longIntro = loc.longIntro;
  const analysisList = loc.analysisList;
  const cautionsList = loc.cautionsList;
  const dosageRows = loc.dosageRows;
  const tankMixesList = loc.tankMixesList;
  const faqsList = loc.faqsList;

  // Canonical full URL
  const canonicalPath = language === 'en' 
    ? `https://pishgamandez.github.io/pishgaman/en/products/${product.slug}/`
    : language === 'ar'
    ? `https://pishgamandez.github.io/pishgaman/ar/products/${product.slug}/`
    : language === 'ur'
    ? `https://pishgamandez.github.io/pishgaman/ur/products/${product.slug}/`
    : `https://pishgamandez.github.io/pishgaman/products/${product.slug}/`;

  // Synchronize document title, meta tags, and structured schemas
  useEffect(() => {
    const prevTitle = document.title;
    document.title = metaTitle;

    // Meta description
    let metaDesc = document.querySelector('meta[name="description"]') as HTMLMetaElement | null;
    const prevDesc = metaDesc?.getAttribute('content') || '';
    if (metaDesc) {
      metaDesc.setAttribute('content', metaDescription);
    }

    // Canonical link
    let canonicalLink = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    const prevCanonical = canonicalLink?.getAttribute('href') || '';
    if (canonicalLink) {
      canonicalLink.setAttribute('href', canonicalPath);
    }

    // OpenGraph tags
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute('content', metaTitle);
    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute('content', metaDescription);
    const ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogUrl) ogUrl.setAttribute('content', canonicalPath);

    // Schema.org injection
    const productSchemaId = 'schema-product-jsonld';
    let scriptTag = document.getElementById(productSchemaId) as HTMLScriptElement | null;
    if (!scriptTag) {
      scriptTag = document.createElement('script');
      scriptTag.id = productSchemaId;
      scriptTag.type = 'application/ld+json';
      document.head.appendChild(scriptTag);
    }

    const schemas: any[] = [
      // 1. Product Schema
      {
        '@context': 'https://schema.org',
        '@type': 'Product',
        'name': displayName,
        'image': [`https://pishgamandez.github.io/pishgaman/assets/images/products/${product.id}.jpg`],
        'description': metaDescription,
        'brand': {
          '@type': 'Brand',
          'name': `${companyInfo.name} (${companyInfo.brand})`
        },
        'manufacturer': {
          '@type': 'Organization',
          'name': companyInfo.name,
          'url': 'https://pishgamandez.github.io/pishgaman/'
        },
        'category': categoryTitle,
        'offers': {
          '@type': 'Offer',
          'url': canonicalPath,
          'priceCurrency': 'IRR',
          'price': '0',
          'availability': 'https://schema.org/InStock',
          'itemCondition': 'https://schema.org/NewCondition',
          'seller': {
            '@type': 'Organization',
            'name': companyInfo.name
          }
        }
      },
      // 2. BreadcrumbList Schema
      {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        'itemListElement': [
          {
            '@type': 'ListItem',
            'position': 1,
            'name': t.home,
            'item': 'https://pishgamandez.github.io/pishgaman/'
          },
          {
            '@type': 'ListItem',
            'position': 2,
            'name': t.products16,
            'item': 'https://pishgamandez.github.io/pishgaman/#products'
          },
          {
            '@type': 'ListItem',
            'position': 3,
            'name': displayName,
            'item': canonicalPath
          }
        ]
      }
    ];

    // 3. FAQPage Schema
    if (faqsList && faqsList.length > 0) {
      schemas.push({
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        'mainEntity': faqsList.map(faq => ({
          '@type': 'Question',
          'name': faq.question,
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': faq.answer
          }
        }))
      });
    }

    scriptTag.textContent = JSON.stringify(schemas, null, 2);
    window.scrollTo({ top: 0, behavior: 'smooth' });

    return () => {
      document.title = prevTitle;
      if (metaDesc && prevDesc) metaDesc.setAttribute('content', prevDesc);
      if (canonicalLink && prevCanonical) canonicalLink.setAttribute('href', prevCanonical);
      if (scriptTag && scriptTag.parentNode) {
        scriptTag.parentNode.removeChild(scriptTag);
      }
    };
  }, [product, metaTitle, metaDescription, canonicalPath, language, displayName, categoryTitle, t.home, t.products16]);

  // Copy link handler
  const handleCopyLink = () => {
    navigator.clipboard.writeText(canonicalPath);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2500);
  };

  // Resolve related articles
  const relatedArticles: Article[] = (detail?.relatedArticleSlugs || [])
    .map(slug => allArticles.find(a => a.slug === slug || a.aliases?.includes(slug) || a.id === slug))
    .filter((a): a is Article => Boolean(a))
    .slice(0, 3);

  const finalRelatedArticles = relatedArticles.length > 0
    ? relatedArticles
    : allArticles.slice(0, 3);

  // Resolve related companion products
  const companionProducts: Product[] = (detail?.relatedProductSlugs || [])
    .map(slug => allProducts.find(p => p.slug === slug || p.aliases?.includes(slug) || p.id === slug))
    .filter((p): p is Product => Boolean(p && p.id !== product.id))
    .slice(0, 3);

  const finalCompanionProducts = companionProducts.length > 0
    ? companionProducts
    : allProducts.filter(p => p.id !== product.id).slice(0, 3);

  // WhatsApp consultation link
  const waConsultText = encodeURIComponent(
    language === 'en'
      ? `Hello, I would like to inquire about pricing, technical consultation, and application schedule for "${displayName}" (${companyInfo.nameEn}).`
      : language === 'ar'
      ? `مرحباً، أود الاستفسار عن الأسعار، جدول الاستخدام، والاستشارة الفنية لمنتج «${displayName}» (شركة بيشغامان پایدار فلات نیک).`
      : language === 'ur'
      ? `سلام، مجھے پروڈکٹ «${displayName}» (پیشگامان پائیدار فلات نیک) کی قیمت، استعمال کے شیڈول اور زرعی رہنمائی کے لیے مشاورت چاہیے۔`
      : `سلام و وقت بخیر، در مورد محصول «${displayName}» (پیشگامان پایدار فلات نیک) و دریافت استعلام قیمت و برنامه مصرف مشاوره می‌خواستم.`
  );
  const waUrl = `https://wa.me/989128247415?text=${waConsultText}`;

  return (
    <article className={`min-h-screen bg-stone-50 text-stone-800 flex flex-col font-sans ${isRtl ? 'text-right' : 'text-left'}`}>
      
      {/* 1. Sticky Breadcrumb & Navigation Bar */}
      <div className="bg-white border-b border-stone-200 sticky top-20 z-30 shadow-2xs">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between gap-4">
          
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-stone-500 overflow-x-auto no-scrollbar">
            <button
              onClick={onBackToHome}
              className="hover:text-emerald-800 transition-colors cursor-pointer shrink-0 font-medium"
            >
              {t.home}
            </button>
            <span>/</span>
            <button
              onClick={onBackToHome}
              className="hover:text-emerald-800 transition-colors cursor-pointer shrink-0 font-medium text-emerald-800"
            >
              {t.products16}
            </button>
            <span>/</span>
            <span className="text-stone-900 font-bold truncate max-w-[180px] sm:max-w-md">
              {displayName}
            </span>
          </nav>

          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={handleCopyLink}
              className="inline-flex items-center gap-1 px-3 py-1.5 rounded-xl bg-stone-100 hover:bg-stone-200 text-stone-700 text-xs font-medium transition-colors cursor-pointer border border-stone-200"
              title={t.pdShareBtn}
            >
              {copiedLink ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Share2 className="w-3.5 h-3.5 text-stone-500" />}
              <span className="hidden sm:inline">{copiedLink ? t.pdCopiedBtn : t.pdShareBtn}</span>
            </button>

            <button
              onClick={onBackToHome}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-emerald-800 hover:bg-emerald-900 text-white text-xs font-bold transition-colors cursor-pointer shadow-xs"
            >
              {isRtl ? <ArrowRight className="w-4 h-4" /> : <ArrowLeft className="w-4 h-4" />}
              <span>{t.pdBackToCatalog}</span>
            </button>
          </div>

        </div>
      </div>

      {/* 2. Hero Visual & Product Presentation Header */}
      <header className="relative bg-gradient-to-l from-stone-900 via-stone-900 to-emerald-950 text-white overflow-hidden py-12 sm:py-16 border-b border-stone-800">
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          
          {/* Packaging Illustration Visual Slot */}
          <div className="md:col-span-5 flex justify-center">
            <div className="w-full max-w-md bg-white rounded-3xl p-5 sm:p-6 shadow-2xl border border-white/20 flex flex-col items-center text-stone-900 group">
              <div className="relative w-full h-72 sm:h-84 flex items-center justify-center bg-radial from-stone-50 to-stone-100 rounded-2xl overflow-hidden p-2">
                {productImageUrl ? (
                  <img
                    src={productImageUrl}
                    alt={displayName}
                    className="w-full h-full object-contain drop-shadow-xl transition-transform duration-300 group-hover:scale-105"
                    loading="eager"
                  />
                ) : (
                  <ProductPackageIllustration product={product} size="lg" />
                )}
                {badge && (
                  <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-emerald-600 text-white text-[11px] font-black shadow-md z-10">
                    {badge}
                  </span>
                )}
              </div>
              
              <div className="mt-4 flex flex-wrap items-center justify-center gap-2 text-[11px]">
                {appearance && (
                  <span className="px-2.5 py-1 rounded-full bg-stone-100 text-stone-700 border border-stone-200 font-medium">
                    {appearance}
                  </span>
                )}
                {packaging && (
                  <span className="px-2.5 py-1 rounded-full bg-stone-100 text-stone-700 border border-stone-200 font-medium">
                    {packaging}
                  </span>
                )}
                <span className="px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200 font-bold flex items-center gap-1">
                  <Check className="w-3 h-3 text-emerald-600" />
                  <span>{t.pdBadgeAuthentic}</span>
                </span>
              </div>
            </div>
          </div>

          {/* Title, Category & Core Agronomic Value */}
          <div className="md:col-span-7 space-y-5">
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-3 py-1 rounded-full bg-emerald-700 text-white text-xs font-black shadow-xs">
                {categoryTitle}
              </span>
              <span className="font-mono text-emerald-300 text-xs uppercase tracking-wider font-bold">
                {subName}
              </span>
            </div>

            {/* Exactly One Unique H1 per Page */}
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white leading-tight tracking-tight">
              {h1Title}
            </h1>

            <p className="text-xs sm:text-sm text-stone-300 leading-relaxed font-light">
              {tagline}
            </p>

            {/* Trust and Key Capabilities Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-3 border-t border-white/10 text-xs">
              <div className="flex items-center gap-2 text-stone-300">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>{t.pdBadgePurity}</span>
              </div>
              <div className="flex items-center gap-2 text-stone-300">
                <Truck className="w-4 h-4 text-amber-400 shrink-0" />
                <span>{t.pdBadgeShipping}</span>
              </div>
              <div className="flex items-center gap-2 text-stone-300">
                <Award className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>{t.pdBadgeBrand}</span>
              </div>
            </div>

            {/* Quick Action CTAs */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-emerald-500 hover:bg-emerald-600 text-stone-950 font-black text-xs transition-colors shadow-lg cursor-pointer"
              >
                <MessageCircle className="w-4 h-4" />
                <span>{t.pdWaOrderBtn}</span>
              </a>

              <a
                href={`tel:${companyInfo.phone}`}
                className="inline-flex items-center gap-2 px-4 py-3 rounded-2xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs transition-colors border border-white/20 cursor-pointer"
              >
                <Phone className="w-4 h-4" />
                <span>{t.pdPhoneOrderBtn}: {companyInfo.phoneFormatted}</span>
              </a>
            </div>

          </div>

        </div>
      </header>

      {/* 3. Main Content Sections */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 py-12 space-y-12 flex-1 w-full">
        
        {/* Section 1: Intro */}
        <section className="bg-white p-6 sm:p-8 rounded-3xl border border-stone-200 shadow-2xs space-y-4">
          <div className="flex items-center gap-2.5 text-emerald-800">
            <Sparkles className="w-5 h-5 text-emerald-700" />
            <h2 className="text-base sm:text-lg font-black text-stone-900">
              {t.pdOverviewTitle} {displayName}
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed font-light whitespace-pre-line">
            {longIntro}
          </p>
        </section>

        {/* Section 2: Guaranteed Analysis & Chemical Composition (H2) */}
        {analysisList.length > 0 && (
          <section className="bg-emerald-50/70 border border-emerald-200/80 p-6 sm:p-8 rounded-3xl shadow-2xs space-y-4">
            <div className="flex items-center gap-2.5 text-emerald-900">
              <FlaskConical className="w-5 h-5 text-emerald-800" />
              <h2 className="text-base sm:text-lg font-black text-emerald-950">
                {t.pdAnalysisTitle} {displayName}
              </h2>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 pt-2">
              {analysisList.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white p-3.5 rounded-2xl border border-emerald-200/60 shadow-2xs flex items-center gap-2.5 text-xs text-stone-800 font-medium"
                >
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Section 3: Specialized Agronomic Advantages (H2) */}
        {benefitsList && benefitsList.length > 0 && (
          <section className="bg-white p-6 sm:p-8 rounded-3xl border border-stone-200 shadow-2xs space-y-4">
            <div className="flex items-center gap-2.5 text-stone-900">
              <Layers className="w-5 h-5 text-emerald-700" />
              <h2 className="text-base sm:text-lg font-black text-stone-900">
                {t.pdBenefitsTitle} {displayName}
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 pt-2">
              {benefitsList.map((benefit, bIdx) => (
                <div
                  key={bIdx}
                  className="p-4 rounded-2xl bg-stone-50 border border-stone-200/80 flex items-start gap-3 text-xs sm:text-sm text-stone-700 leading-relaxed font-light"
                >
                  <span className="w-6 h-6 rounded-lg bg-emerald-100 text-emerald-800 font-bold flex items-center justify-center shrink-0 text-xs">
                    {bIdx + 1}
                  </span>
                  <span>{benefit}</span>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Section 4: Dosage Table and Timing (H2) */}
        {dosageRows && dosageRows.length > 0 && (
          <section className="bg-white p-6 sm:p-8 rounded-3xl border border-stone-200 shadow-2xs space-y-4">
            <div className="flex items-center gap-2.5 text-stone-900">
              <PackageCheck className="w-5 h-5 text-emerald-700" />
              <h2 className="text-base sm:text-lg font-black text-stone-900">
                {t.pdDosageTitle} {displayName}
              </h2>
            </div>

            <div className="overflow-x-auto rounded-2xl border border-stone-200 shadow-2xs">
              <table className={`w-full text-xs border-collapse ${isRtl ? 'text-right' : 'text-left'}`}>
                <thead className="bg-stone-100 text-stone-800 font-bold border-b border-stone-200">
                  <tr>
                    <th className="p-3.5">{t.pdTableCrop}</th>
                    <th className="p-3.5">{t.pdTableMethod}</th>
                    {dosageRows.some(r => r.timing) && <th className="p-3.5">{t.pdTableTiming}</th>}
                    <th className="p-3.5">{t.pdTableRate}</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-stone-100">
                  {dosageRows.map((row, rIdx) => (
                    <tr key={rIdx} className="hover:bg-emerald-50/30 transition-colors">
                      <td className="p-3.5 font-bold text-stone-900">{row.crop}</td>
                      <td className="p-3.5 text-stone-600">{row.method}</td>
                      {dosageRows.some(r => r.timing) && (
                        <td className="p-3.5 text-stone-600">{row.timing || '-'}</td>
                      )}
                      <td className="p-3.5 font-mono text-emerald-800 font-bold">{row.rate}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-[11px] text-stone-500 italic pt-1">
              {language === 'en'
                ? '* The above dosage rates are general agronomic guidelines and can be adjusted based on soil/water laboratory analysis, tree age, and local climate.'
                : language === 'ar'
                ? '* المقادير المذكورة أعلاه عامة ويمكن تعديلها من قبل المهندس الزراعي وفقاً لنتائج تحليل التربة والمياه، عمر الأشجار، والظروف المناخية.'
                : language === 'ur'
                ? '* مندرجہ بالا مقداریں عمومی زرعی ہدایات ہیں جن میں مٹی اور پانی کی لیبارٹری ٹیسٹ رپورٹ اور درخت کی عمر کے مطابق زرعی ماہر ردوبدل کر سکتا ہے۔'
                : '* مقادیر فوق عمومی بوده و بر اساس نتایج آزمایش آب و خاک، سن درخت و اقلیم منطقه می‌تواند توسط کارشناس تغییر یابد.'}
            </p>
          </section>
        )}

        {/* Section 5: Compatible Tank Mixes & Recommended Combinations (H2) */}
        {tankMixesList.length > 0 && (
          <section className="bg-gradient-to-br from-white to-emerald-50/40 p-6 sm:p-8 rounded-3xl border border-stone-200 shadow-2xs space-y-4">
            <div className="flex items-center gap-2.5 text-stone-900">
              <Sparkles className="w-5 h-5 text-emerald-700" />
              <h2 className="text-base sm:text-lg font-black text-stone-900">
                {t.pdTankMixTitle} {displayName}
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              {tankMixesList.map((mix, mIdx) => (
                <div
                  key={mIdx}
                  onClick={() => onNavigateToProduct(mix.slug)}
                  className="p-4 rounded-2xl bg-white border border-stone-200 hover:border-emerald-600 transition-all shadow-2xs hover:shadow-md cursor-pointer flex flex-col justify-between group"
                >
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-stone-900 group-hover:text-emerald-800 transition-colors">
                        {mix.productName}
                      </span>
                      <ExternalLink className="w-3.5 h-3.5 text-stone-400 group-hover:text-emerald-600 shrink-0" />
                    </div>
                    <p className="text-[11px] text-stone-600 font-light leading-relaxed">
                      {mix.reason}
                    </p>
                  </div>
                  <div className="pt-3 text-[11px] font-bold text-emerald-800 flex items-center justify-between border-t border-stone-100 mt-3">
                    <span>
                      {language === 'en' ? 'View Product Details' : language === 'ar' ? 'عرض تفاصيل المنتج' : language === 'ur' ? 'پروڈکٹ کی تفصیلات دیکھیں' : 'مشاهده صفحه محصول'}
                    </span>
                    <ChevronRight className={`w-3.5 h-3.5 group-hover:translate-x-1 transition-transform ${isRtl ? 'rotate-180 group-hover:-translate-x-1' : ''}`} />
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Section 6: Cautions & Storage Instructions (H2) */}
        {cautionsList.length > 0 && (
          <section className="bg-amber-50/60 border border-amber-200/80 p-6 sm:p-8 rounded-3xl shadow-2xs space-y-4">
            <div className="flex items-center gap-2.5 text-amber-900">
              <AlertTriangle className="w-5 h-5 text-amber-700" />
              <h2 className="text-base sm:text-lg font-black text-amber-950">
                {t.pdCautionsTitle} {displayName}
              </h2>
            </div>

            <ul className="space-y-2.5 pt-1">
              {cautionsList.map((caution, cIdx) => (
                <li key={cIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-stone-700 leading-relaxed font-light">
                  <span className="w-2 h-2 rounded-full bg-amber-500 mt-2 shrink-0" />
                  <span>{caution}</span>
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* Section 7: Bidirectional Linking to Related Agronomy Articles (H2) */}
        <section className="bg-white p-6 sm:p-8 rounded-3xl border border-stone-200 shadow-2xs space-y-4">
          <div className="flex items-center gap-2.5 text-stone-900">
            <BookOpen className="w-5 h-5 text-emerald-700" />
            <h2 className="text-base sm:text-lg font-black text-stone-900">
              {t.pdRelatedArticlesTitle} {displayName}
            </h2>
          </div>

          <p className="text-xs text-stone-600 leading-relaxed">
            {t.pdRelatedArticlesDesc}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
            {finalRelatedArticles.map(art => {
              const artContent = (language === 'ur' ? art.ur || art.fa : art[language]) || art.fa;
              return (
                <div
                  key={art.id}
                  onClick={() => onNavigateToArticle(art.slug)}
                  className="p-4 rounded-2xl bg-stone-50 hover:bg-white border border-stone-200 hover:border-emerald-600 transition-all shadow-2xs hover:shadow-md cursor-pointer flex flex-col justify-between group"
                >
                  <div className="space-y-2">
                    <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md">
                      {artContent.category}
                    </span>
                    <h3 className="text-xs sm:text-sm font-bold text-stone-900 group-hover:text-emerald-800 transition-colors line-clamp-2">
                      {artContent.title}
                    </h3>
                    <p className="text-[11px] text-stone-500 line-clamp-2 font-light">
                      {artContent.summary}
                    </p>
                  </div>
                  <div className="pt-3 text-[11px] font-bold text-emerald-800 flex items-center justify-between border-t border-stone-200 mt-3">
                    <span>
                      {language === 'en' ? 'Read Full Article' : language === 'ar' ? 'قراءة المقال بالكامل' : language === 'ur' ? 'مکمل مضمون پڑھیں' : 'مطالعه کامل مقاله'}
                    </span>
                    <ChevronRight className={`w-3.5 h-3.5 group-hover:translate-x-1 transition-transform ${isRtl ? 'rotate-180 group-hover:-translate-x-1' : ''}`} />
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Section 8: Companion Products (H2) */}
        <section className="bg-white p-6 sm:p-8 rounded-3xl border border-stone-200 shadow-2xs space-y-4">
          <div className="flex items-center gap-2.5 text-stone-900">
            <PackageCheck className="w-5 h-5 text-emerald-700" />
            <h2 className="text-base sm:text-lg font-black text-stone-900">
              {t.pdCompanionTitle}
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
            {finalCompanionProducts.map(comp => {
              const compLoc = getLocalizedProduct(comp, language, t);
              return (
                <div
                  key={comp.id}
                  onClick={() => onNavigateToProduct(comp.slug)}
                  className="p-4 rounded-2xl bg-stone-50 hover:bg-white border border-stone-200 hover:border-emerald-600 transition-all shadow-2xs hover:shadow-md cursor-pointer flex flex-col justify-between group"
                >
                  <div className="space-y-2">
                    <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md">
                      {compLoc.categoryTitle}
                    </span>
                    <h3 className="text-xs sm:text-sm font-bold text-stone-900 group-hover:text-emerald-800 transition-colors">
                      {compLoc.displayName}
                    </h3>
                    <p className="text-[11px] text-stone-500 line-clamp-2 font-light">
                      {compLoc.tagline}
                    </p>
                  </div>
                  <div className="pt-3 text-[11px] font-bold text-emerald-800 flex items-center justify-between border-t border-stone-200 mt-3">
                    <span>
                      {language === 'en' ? `View Details for ${compLoc.displayName}` : language === 'ar' ? `عرض تفاصيل ${compLoc.displayName}` : language === 'ur' ? `${compLoc.displayName} کی تفصیلات دیکھیں` : `مشاهده جزئیات ${compLoc.displayName}`}
                    </span>
                    <ChevronRight className={`w-3.5 h-3.5 group-hover:translate-x-1 transition-transform ${isRtl ? 'rotate-180 group-hover:-translate-x-1' : ''}`} />
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Section 9: Frequently Asked Questions (5-7 FAQs with Schema FAQ) */}
        {faqsList.length > 0 && (
          <section className="bg-white p-6 sm:p-8 rounded-3xl border border-stone-200 shadow-2xs space-y-4">
            <div className="flex items-center gap-2.5 text-stone-900">
              <HelpCircle className="w-5 h-5 text-emerald-700" />
              <h2 className="text-base sm:text-lg font-black text-stone-900">
                {t.pdFaqsTitle} {displayName}
              </h2>
            </div>

            <div className="space-y-3 pt-2">
              {faqsList.map((faq, fIdx) => {
                const isOpen = openFaqIndex === fIdx;
                return (
                  <div
                    key={fIdx}
                    className="border border-stone-200 rounded-2xl overflow-hidden transition-colors"
                  >
                    <button
                      onClick={() => setOpenFaqIndex(isOpen ? null : fIdx)}
                      className={`w-full p-4 flex items-center justify-between gap-3 bg-stone-50 hover:bg-emerald-50/40 transition-colors cursor-pointer text-xs sm:text-sm font-bold text-stone-900 ${isRtl ? 'text-right' : 'text-left'}`}
                    >
                      <div className="flex items-center gap-2">
                        <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-800 text-[11px] font-bold flex items-center justify-center shrink-0">
                          {fIdx + 1}
                        </span>
                        <span>{faq.question}</span>
                      </div>
                      <ChevronDown className={`w-4 h-4 text-stone-400 transition-transform ${isOpen ? 'rotate-180 text-emerald-700' : ''}`} />
                    </button>
                    {isOpen && (
                      <div className="p-4 bg-white text-xs sm:text-sm text-stone-700 leading-relaxed font-light border-t border-stone-100">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </section>
        )}

        {/* Section 10: High-Impact Consultation & Direct Order CTA */}
        <section className="bg-gradient-to-l from-emerald-900 to-stone-900 text-white p-7 sm:p-9 rounded-3xl shadow-xl flex flex-col md:flex-row items-center justify-between gap-6 border border-emerald-700/50">
          <div className={`space-y-2 text-center ${isRtl ? 'md:text-right' : 'md:text-left'}`}>
            <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-[11px] font-bold border border-emerald-400/30">
              {language === 'en'
                ? 'Technical Consultation & Direct Ordering'
                : language === 'ar'
                ? 'استشارة فنية متخصصة وطلب مباشر'
                : language === 'ur'
                ? 'تکنیکی زرعی مشاورت اور براہ راست آرڈر'
                : 'مشاوره مستقیم و ثبت سفارش آنلاین'}
            </span>
            <h3 className="text-lg sm:text-2xl font-black text-white">
              {language === 'en'
                ? `Need application dosage guidance or ordering ${displayName}?`
                : language === 'ar'
                ? `هل تحتاج إلى إرشادات حول الجرعة أو طلب ${displayName}؟`
                : language === 'ur'
                ? `کیا آپ کو ${displayName} کی خوراک یا آرڈر کے متعلق رہنمائی درکار ہے؟`
                : `نیاز به راهنمایی در مقدار مصرف یا سفارش ${displayName} دارید؟`}
            </h3>
            <p className="text-xs text-stone-300 font-light max-w-xl">
              {language === 'en'
                ? `The technical agronomy and sales team of ${companyInfo.nameEn} is ready to answer your questions and arrange dispatch across the region.`
                : language === 'ar'
                ? `فريق الدعم الفني والمبيعات في شركة بيشغامان پایدار فلات نیک مستعد للرد على استفساراتكم وتنسيق الشحن إلى كافة المناطق.`
                : language === 'ur'
                ? `پیشگامان پائیدار فلات نیک کی زرعی اور تکنیکی ٹیم آپ کے سوالات کے جوابات اور ملک بھر میں ترسیل کے لیے ہمہ وقت تیار ہے۔`
                : 'تیم فنی و فروش شرکت پیشگامان پایدار فلات نیک آماده پاسخگویی به سوالات شما و هماهنگی ارسال به سراسر کشور است.'}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto">
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl bg-emerald-500 hover:bg-emerald-600 text-stone-950 font-black text-xs transition-colors shadow-lg cursor-pointer"
            >
              <MessageCircle className="w-4 h-4" />
              <span>{t.pdWaOrderBtn}</span>
            </a>

            <a
              href={`tel:${companyInfo.phone}`}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-2xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs transition-colors border border-white/20 cursor-pointer"
            >
              <Phone className="w-4 h-4" />
              <span>{t.pdPhoneOrderBtn}: {companyInfo.phoneFormatted}</span>
            </a>
          </div>
        </section>

        {/* Footer Guarantee */}
        <div className="pt-8 text-center text-xs text-stone-400 border-t border-stone-200 space-y-1">
          <p>
            {language === 'en'
              ? `Produced and formulated by ${companyInfo.nameEn} (${companyInfo.brandEn} Official Brand).`
              : language === 'ar'
              ? `إنتاج وتوريد شركة بيشغامان بايدار فلات نيك (العلامة الرسمية برواز نهاده).`
              : language === 'ur'
              ? `تیار کردہ و فراہم کردہ برائے پیشگامان پائیدار فلات نیک کمپنی (سرکاری برانڈ پرواز نہادہ)۔`
              : 'تولید و عرضه شده توسط شرکت پیشگامان پایدار فلات نیک (برند رسمی پرواز نهاده).'}
          </p>
          <p className="font-mono text-[11px]">
            {language === 'en'
              ? 'Guaranteed certified analysis and quality assurance | Direct dispatch from central distribution warehouse'
              : language === 'ar'
              ? 'شهادة تحليل مخبري معتمدة وضبط جودة مستمر | شحن مباشر من المستودع المركزي'
              : language === 'ur'
              ? 'مصدقہ اینالیسس اور سخت کوالٹی کنٹرول | مرکزی گودام سے تمام صوبوں میں ترسیل'
              : 'دارای گواهی آنالیز و کنترل کیفی پیوسته | ارسال مستقیم از انبار مرکزی به تمام استان‌ها'}
          </p>
        </div>

      </main>

    </article>
  );
};
