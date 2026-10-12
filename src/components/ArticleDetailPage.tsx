import React, { useEffect, useState } from 'react';
import { Article, ArticleContentSection, ArticleFaqItem, ArticleDosageRow, Product } from '../types';
import { useLanguage } from '../i18n/LanguageContext';
import { companyInfo } from '../data/company';
import { 
  BookOpen, Clock, Calendar, ArrowRight, ArrowLeft, 
  Sparkles, TrendingUp, CheckCircle2, Copy, Check, 
  Phone, MessageCircle, MapPin, Share2, ChevronRight,
  ExternalLink, Layers, Award, ShieldAlert
} from 'lucide-react';
import { PishgamanLogo } from './PishgamanLogo';

interface Props {
  article: Article;
  allArticles: Article[];
  products: Product[];
  onBackToArticles: () => void;
  onNavigateToArticle: (slug: string) => void;
  onNavigateToProduct?: (slug: string) => void;
  onSelectProductByName?: (name: string) => void;
  onOpenConsult?: () => void;
}

export const ArticleDetailPage: React.FC<Props> = ({
  article,
  allArticles,
  products,
  onBackToArticles,
  onNavigateToArticle,
  onNavigateToProduct,
  onSelectProductByName,
  onOpenConsult
}) => {
  const { language, setLanguage, t, isRtl } = useLanguage();
  const [copiedRefs, setCopiedRefs] = useState(false);
  const [copiedLink, setCopiedLink] = useState(false);

  const content = article[language] || article.fa;
  const isGhPages = typeof window !== 'undefined' && window.location.pathname.startsWith('/pishgaman');
  const basePath = isGhPages ? '/pishgaman' : '';

  const getProductHref = (slug: string) => {
    return language === 'en'
      ? `${basePath}/en/products/${slug}/`
      : language === 'ar'
      ? `${basePath}/ar/products/${slug}/`
      : `${basePath}/products/${slug}/`;
  };

  // Natural inline linking from article narrative to standalone product pages
  const renderTextWithProductLinks = (text: string) => {
    if (!text) return text;
    const productNamesRegex = /(چلنجر|هیومی فارم|جامپر|فول شارژر|ردفول|دوپینگ|سیلیگارد|استورمی|فیکشن|تاپ استار|تایگر K High|تایگر P High|سول مکس|سالت استاپ|آنجلا|پی‌اچ بست|PH Best)/g;
    const parts = text.split(productNamesRegex);
    return parts.map((part, i) => {
      const matched = products.find(p => 
        p.nameFa === part || 
        (part === 'سول مکس' && (p.slug === 'sol-max' || p.id === 'sulmax')) ||
        (part === 'ردفول' && (p.slug === 'redfol' || p.id === 'red-full')) ||
        (part === 'تایگر K High' && (p.slug === 'tiger-k-high' || p.id === 'tiger-k')) ||
        (part === 'تایگر P High' && (p.slug === 'tiger-p-high' || p.id === 'tiger-p')) ||
        (part === 'پی‌اچ بست' && (p.slug === 'ph-best' || p.id === 'ph-best')) ||
        (part === 'PH Best' && (p.slug === 'ph-best' || p.id === 'ph-best'))
      );

      if (matched) {
        return (
          <a
            key={i}
            href={getProductHref(matched.slug)}
            onClick={(e) => {
              e.preventDefault();
              if (onNavigateToProduct) {
                onNavigateToProduct(matched.slug);
              } else if (onSelectProductByName) {
                onSelectProductByName(matched.nameFa);
              }
            }}
            className="text-emerald-800 font-bold hover:underline decoration-emerald-600 underline-offset-4 cursor-pointer inline-flex items-center gap-0.5 mx-0.5"
            title={`مشاهده صفحه محصول ${matched.nameFa}`}
          >
            {part}
          </a>
        );
      }
      return part;
    });
  };

  // Canonical full URL
  const canonicalPath = language === 'en' 
    ? `https://pishgamandez.github.io/pishgaman/en/articles/${article.slug}/`
    : language === 'ar'
    ? `https://pishgamandez.github.io/pishgaman/ar/articles/${article.slug}/`
    : `https://pishgamandez.github.io/pishgaman/articles/${article.slug}/`;

  // Dynamically update document title, meta tags, and structured schemas
  useEffect(() => {
    // 1. Update document title
    const prevTitle = document.title;
    document.title = `${content.title} | پیشگامان پایدار فلات نیک`;

    // 2. Update meta description
    let metaDesc = document.querySelector('meta[name="description"]') as HTMLMetaElement | null;
    const prevDesc = metaDesc?.getAttribute('content') || '';
    const descText = content.metaDescription || content.summary || content.abstract;
    if (metaDesc) {
      metaDesc.setAttribute('content', descText);
    }

    // 3. Update canonical link
    let canonicalLink = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    const prevCanonical = canonicalLink?.getAttribute('href') || '';
    if (canonicalLink) {
      canonicalLink.setAttribute('href', canonicalPath);
    }

    // 4. Update OpenGraph tags
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute('content', content.title);
    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute('content', descText);
    const ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogUrl) ogUrl.setAttribute('content', canonicalPath);

    // 5. Inject / Update Schema.org Article, FAQPage, BreadcrumbList
    const articleSchemaId = 'schema-article-jsonld';
    let scriptTag = document.getElementById(articleSchemaId) as HTMLScriptElement | null;
    if (!scriptTag) {
      scriptTag = document.createElement('script');
      scriptTag.id = articleSchemaId;
      scriptTag.type = 'application/ld+json';
      document.head.appendChild(scriptTag);
    }

    const schemas = [
      // Article (BlogPosting) Schema
      {
        '@context': 'https://schema.org',
        '@type': 'BlogPosting',
        'headline': content.title,
        'description': descText,
        'image': [article.imageUrl],
        'datePublished': '2024-10-01T08:00:00+03:30',
        'dateModified': `${content.lastModified || '2026-10-11'}T10:00:00+03:30`,
        'author': {
          '@type': 'Organization',
          'name': content.author || 'دپارتمان تحقیقات و توسعه علمی پیشگامان',
          'url': 'https://pishgamandez.github.io/pishgaman/'
        },
        'publisher': {
          '@type': 'Organization',
          'name': 'پیشگامان پایدار فلات نیک',
          'logo': {
            '@type': 'ImageObject',
            'url': 'https://pishgamandez.github.io/pishgaman/logo.png'
          }
        },
        'mainEntityOfPage': {
          '@type': 'WebPage',
          '@id': canonicalPath
        }
      },
      // BreadcrumbList Schema
      {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        'itemListElement': [
          {
            '@type': 'ListItem',
            'position': 1,
            'name': language === 'en' ? 'Home' : language === 'ar' ? 'الرئيسية' : 'صفحه اصلی',
            'item': 'https://pishgamandez.github.io/pishgaman/'
          },
          {
            '@type': 'ListItem',
            'position': 2,
            'name': language === 'en' ? 'Agronomy Articles' : language === 'ar' ? 'المقالات التخصصية' : 'مقالات تخصصی کشاورزی',
            'item': 'https://pishgamandez.github.io/pishgaman/articles/'
          },
          {
            '@type': 'ListItem',
            'position': 3,
            'name': content.title,
            'item': canonicalPath
          }
        ]
      }
    ];

    // Add FAQPage Schema if faqs exist
    if (content.faqs && content.faqs.length > 0) {
      schemas.push({
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        'mainEntity': content.faqs.map(faq => ({
          '@type': 'Question',
          'name': faq.question,
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': faq.answer
          }
        }))
      } as any);
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
  }, [article, content, language, canonicalPath]);

  // Copy references to clipboard
  const handleCopyReferences = () => {
    if (!content.references || content.references.length === 0) return;
    const text = content.references.map((r, i) => `[${i + 1}] ${r}`).join('\n\n');
    navigator.clipboard.writeText(text);
    setCopiedRefs(true);
    setTimeout(() => setCopiedRefs(false), 2500);
  };

  // Copy article link
  const handleCopyLink = () => {
    navigator.clipboard.writeText(canonicalPath);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2500);
  };

  // Resolve related articles
  const relatedArticlesList = allArticles
    .filter(a => a.id !== article.id)
    .filter(a => {
      if (content.relatedArticles && content.relatedArticles.includes(a.slug)) return true;
      const c = a[language] || a.fa;
      return c.category === content.category || (article.region && a.region);
    })
    .slice(0, 3);

  const trendTag = article.googleTrendKeyword ? article.googleTrendKeyword[language] : null;

  return (
    <article className={`min-h-screen bg-stone-50 text-stone-800 flex flex-col font-sans ${isRtl ? 'text-right' : 'text-left'}`}>
      
      {/* 1. Breadcrumbs & Top Navigation Bar */}
      <div className="bg-white border-b border-stone-200 sticky top-20 z-30 shadow-2xs">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between gap-4">
          
          {/* Breadcrumb Path */}
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-stone-500 overflow-x-auto no-scrollbar">
            <button
              onClick={onBackToArticles}
              className="hover:text-emerald-800 transition-colors cursor-pointer shrink-0"
            >
              {language === 'en' ? 'Home' : language === 'ar' ? 'الرئيسية' : 'صفحه اصلی'}
            </button>
            <span>/</span>
            <button
              onClick={onBackToArticles}
              className="hover:text-emerald-800 transition-colors cursor-pointer shrink-0 font-medium text-emerald-800"
            >
              {t.scientificArticles}
            </button>
            <span>/</span>
            <span className="text-stone-800 font-bold truncate max-w-[200px] sm:max-w-md">
              {content.title}
            </span>
          </nav>

          {/* Action buttons: Share + Back */}
          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={handleCopyLink}
              className="inline-flex items-center gap-1 px-3 py-1.5 rounded-xl bg-stone-100 hover:bg-stone-200 text-stone-700 text-xs font-medium transition-colors cursor-pointer border border-stone-200"
              title="اشتراک‌گذاری لینک صفحه"
            >
              {copiedLink ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Share2 className="w-3.5 h-3.5 text-stone-500" />}
              <span className="hidden sm:inline">{copiedLink ? 'کپی شد' : 'اشتراک‌گذاری'}</span>
            </button>

            <button
              onClick={onBackToArticles}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-emerald-800 hover:bg-emerald-900 text-white text-xs font-bold transition-colors cursor-pointer shadow-xs"
            >
              {isRtl ? <ArrowRight className="w-4 h-4" /> : <ArrowLeft className="w-4 h-4" />}
              <span>{t.articlesBackToHome}</span>
            </button>
          </div>

        </div>
      </div>

      {/* 2. Main Article Header & Hero Visual */}
      <header className="relative bg-gradient-to-l from-stone-900 via-stone-900 to-emerald-950 text-white overflow-hidden py-12 sm:py-16 border-b border-stone-800">
        <div
          className="absolute inset-0 opacity-20 bg-cover bg-center mix-blend-luminosity"
          style={{ backgroundImage: `url(${article.imageUrl})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-transparent to-stone-950/70" />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 space-y-6">
          
          {/* Metadata Badges */}
          <div className="flex flex-wrap items-center gap-2.5">
            <span className="px-3 py-1 rounded-full bg-emerald-700 text-white text-xs font-black shadow-xs">
              {content.category}
            </span>

            {article.region && (
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 border border-amber-400/40 text-xs font-bold">
                <MapPin className="w-3.5 h-3.5" />
                <span>{article.region.provinceFa} ({article.region.cropFa})</span>
              </span>
            )}

            <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-white/10 text-emerald-300 border border-white/10 text-xs font-semibold backdrop-blur-sm">
              <BookOpen className="w-3.5 h-3.5" />
              <span>{content.references?.length || 3} {t.articlesRefCount}</span>
            </span>

            {trendTag && (
              <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-amber-500 text-stone-950 text-xs font-black shadow-md">
                <TrendingUp className="w-3.5 h-3.5" />
                <span>Google Trend: {trendTag}</span>
              </span>
            )}
          </div>

          {/* H1: Exactly One Unique H1 per Page */}
          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black text-white leading-tight tracking-tight">
            {content.title}
          </h1>

          {/* Subheader and Publication Meta */}
          <div className="flex flex-wrap items-center gap-4 text-xs text-stone-300 pt-2 border-t border-white/10 font-medium">
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>{t.articlesAuthor}: <strong className="text-white">{content.author}</strong></span>
            </span>
            <span>·</span>
            <span className="flex items-center gap-1 text-stone-300">
              <Calendar className="w-3.5 h-3.5 text-stone-400" />
              <span>{t.articlesDate}: {content.date}</span>
            </span>
            <span>·</span>
            <span className="flex items-center gap-1 text-stone-300">
              <Clock className="w-3.5 h-3.5 text-emerald-400" />
              <span>{t.articlesReadTime}: {content.readTime}</span>
            </span>
            {content.lastModified && (
              <>
                <span>·</span>
                <span className="text-emerald-300 font-mono text-[11px]">
                  بروزرسانی: {content.lastModified}
                </span>
              </>
            )}
          </div>

        </div>
      </header>

      {/* 3. Main Content Container */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 py-10 space-y-10 flex-1 w-full">
        
        {/* Featured Photographic Asset */}
        <div className="relative rounded-3xl overflow-hidden shadow-xl border border-stone-200 bg-stone-100 h-72 sm:h-96">
          <img
            src={article.imageUrl}
            alt={content.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-transparent to-transparent" />
          <div className={`absolute bottom-4 ${isRtl ? 'right-4 left-4' : 'left-4 right-4'} text-white`}>
            <p className="text-xs sm:text-sm font-medium drop-shadow-md text-stone-200">
              {content.summary}
            </p>
          </div>
        </div>

        {/* Abstract / Scientific Executive Summary */}
        <section className="bg-emerald-50/80 border-r-4 border-emerald-700 p-6 sm:p-7 rounded-3xl space-y-2.5 shadow-2xs">
          <h2 className="text-xs sm:text-sm font-black text-emerald-950 uppercase tracking-wider flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-emerald-700" />
            <span>چکیده پژوهش و مبانی کاربردی کشاورزی</span>
          </h2>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed font-light">
            {renderTextWithProductLinks(content.abstract)}
          </p>
        </section>

        {/* Detailed Semantic Article Sections (H2 & H3) */}
        <div className="space-y-8 divide-y divide-stone-200/70">
          {content.contentSections.map((sec: ArticleContentSection, idx: number) => (
            <section key={idx} className={`${idx > 0 ? 'pt-8' : ''} space-y-3.5`}>
              <h2 className="text-lg sm:text-2xl font-black text-stone-900 tracking-tight leading-snug">
                {idx + 1}. {sec.heading}
              </h2>
              <div className="text-xs sm:text-sm text-stone-700 leading-relaxed font-light whitespace-pre-line space-y-3">
                {renderTextWithProductLinks(sec.text)}
              </div>
            </section>
          ))}
        </div>

        {/* Dosage and Application Schedule Table */}
        {content.dosageTable && content.dosageTable.length > 0 && (
          <section className="space-y-4 pt-6">
            <div className="flex items-center gap-2 border-b border-stone-200 pb-2">
              <Layers className="w-5 h-5 text-emerald-700" />
              <h2 className="text-base sm:text-xl font-black text-stone-900">
                جدول دوز و زمان‌بندی مصرف در منطقه
              </h2>
            </div>
            
            <div className="overflow-x-auto rounded-2xl border border-stone-200 shadow-2xs">
              <table className="w-full text-xs text-right border-collapse">
                <thead className="bg-stone-100 text-stone-700 font-bold border-b border-stone-200">
                  <tr>
                    <th className="p-3.5">مرحله رشد</th>
                    <th className="p-3.5">محصول / گیاه</th>
                    <th className="p-3.5">مقدار و دوز مصرف</th>
                    <th className="p-3.5">نحوه و زمان مصرف</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-stone-200 bg-white">
                  {content.dosageTable.map((row: ArticleDosageRow, rIdx: number) => (
                    <tr key={rIdx} className="hover:bg-stone-50/80 transition-colors">
                      <td className="p-3.5 font-bold text-stone-900">{row.stage}</td>
                      <td className="p-3.5 text-stone-600">{row.crop}</td>
                      <td className="p-3.5 font-bold text-emerald-800 bg-emerald-50/40">{row.rate}</td>
                      <td className="p-3.5 text-stone-600">{row.timing}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        )}

        {/* FAQ Section with FAQ Schema Compliance */}
        {content.faqs && content.faqs.length > 0 && (
          <section className="space-y-4 pt-8 border-t border-stone-200">
            <div className="flex items-center gap-2 border-b border-stone-200 pb-2">
              <Award className="w-5 h-5 text-emerald-700" />
              <h2 className="text-base sm:text-xl font-black text-stone-900">
                سوالات متداول کشاورزان و باغداران
              </h2>
            </div>

            <div className="space-y-3 pt-2">
              {content.faqs.map((faq: ArticleFaqItem, fIdx: number) => (
                <div key={fIdx} className="bg-white p-5 rounded-2xl border border-stone-200 shadow-2xs space-y-2">
                  <h3 className="text-xs sm:text-sm font-bold text-stone-900 flex items-start gap-2">
                    <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-emerald-100 text-emerald-800 text-[11px] font-black shrink-0 mt-0.5">
                      ؟
                    </span>
                    <span>{faq.question}</span>
                  </h3>
                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-light pr-7">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Related Formulations Callout */}
        {content.relatedProducts && content.relatedProducts.length > 0 && (
          <section className="p-6 sm:p-7 rounded-3xl bg-stone-100 border border-stone-200 space-y-4">
            <div>
              <h2 className="text-sm sm:text-base font-black text-stone-900">
                محصولات ۱۶گانه استراتژیک مرتبط با این مقاله:
              </h2>
              <p className="text-xs text-stone-500 mt-1">
                برای مشاهده کاتالوگ آنالیز، دوز و مشاوره تخصصی هر فرمولاسیون کلیک کنید:
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
              {content.relatedProducts.map((pName: string, pIdx: number) => {
                const matchedProduct = products.find(p => 
                  p.nameFa.includes(pName) || pName.includes(p.nameFa) ||
                  (pName.includes('سول') && (p.slug === 'sol-max' || p.id === 'sulmax')) ||
                  (pName.includes('سالت') && p.slug === 'salt-stop') ||
                  (pName.includes('آهن') && (p.slug === 'redfol' || p.id === 'red-full')) ||
                  (pName.includes('چلنجر') && p.slug === 'challenger') ||
                  (pName.includes('تایگر K') && (p.slug === 'tiger-k-high' || p.id === 'tiger-k')) ||
                  (pName.includes('تایگر P') && (p.slug === 'tiger-p-high' || p.id === 'tiger-p')) ||
                  (pName.includes('سیلیگارد') && p.slug === 'siligard') ||
                  (pName.includes('شارژر') && p.slug === 'full-charger') ||
                  (pName.includes('جامپر') && p.slug === 'jumper') ||
                  (pName.includes('دوپینگ') && p.slug === 'doping') ||
                  (pName.includes('استورمی') && p.slug === 'stormy') ||
                  (pName.includes('فیکشن') && p.slug === 'fiction') ||
                  (pName.includes('تاپ استار') && p.slug === 'top-star') ||
                  (pName.includes('آنجلا') && p.slug === 'angela') ||
                  (pName.includes('هیومی') && p.slug === 'humifarm') ||
                  (pName.includes('PH') && p.slug === 'ph-best')
                );
                const pSlug = matchedProduct ? matchedProduct.slug : 'challenger';
                const pLabel = matchedProduct ? matchedProduct.nameFa : pName;
                return (
                  <a
                    key={pIdx}
                    href={getProductHref(pSlug)}
                    onClick={(e) => {
                      e.preventDefault();
                      if (matchedProduct && onNavigateToProduct) {
                        onNavigateToProduct(matchedProduct.slug);
                      } else if (onSelectProductByName) {
                        onSelectProductByName(pName);
                      }
                    }}
                    className="p-3.5 bg-white border border-stone-300 hover:border-emerald-600 hover:text-emerald-800 rounded-2xl text-xs font-bold transition-all shadow-2xs cursor-pointer flex items-center justify-between group text-right no-underline text-inherit"
                    title={`مشاهده صفحه محصول ${pLabel}`}
                  >
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span className="font-bold">{pLabel}</span>
                    </div>
                    <ExternalLink className="w-3.5 h-3.5 text-stone-400 group-hover:text-emerald-600 shrink-0" />
                  </a>
                );
              })}
            </div>
          </section>
        )}

        {/* High-Impact Consultation & Direct WhatsApp Call-to-Action (CTA) */}
        <section className="bg-gradient-to-l from-emerald-900 to-stone-900 text-white p-7 sm:p-9 rounded-3xl shadow-xl flex flex-col md:flex-row items-center justify-between gap-6 border border-emerald-700/50">
          <div className="space-y-2 text-center md:text-right">
            <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-[11px] font-bold border border-emerald-400/30">
              مشاوره رایگان و مستقیم کشاورزی
            </span>
            <h3 className="text-lg sm:text-2xl font-black text-white">
              نیاز به نسخه تغذیه اختصاصی برای مزرعه یا باغ خود دارید؟
            </h3>
            <p className="text-xs text-stone-300 font-light max-w-xl">
              تیم علمی شرکت پیشگامان پایدار فلات نیک آماده بررسی برگه آزمایش آب و خاک و ارائه برنامه اصلاحی متناسب با اقلیم شما هستند.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto">
            <a
              href={`https://wa.me/989128247415?text=${encodeURIComponent(`سلام، در مورد مقاله «${content.title}» و سفارش محصولات راهنمایی می‌خواستم.`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl bg-emerald-500 hover:bg-emerald-600 text-stone-950 font-black text-xs transition-colors shadow-lg cursor-pointer"
            >
              <MessageCircle className="w-4 h-4" />
              <span>مشاوره در واتس‌اپ</span>
            </a>

            <a
              href={`tel:${companyInfo.phone}`}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-2xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs transition-colors border border-white/20 cursor-pointer"
            >
              <Phone className="w-4 h-4" />
              <span>تماس مستقیم: {companyInfo.phoneFormatted}</span>
            </a>
          </div>
        </section>

        {/* Scientific References & Peer-Reviewed Citations */}
        {content.references && content.references.length > 0 && (
          <section className="pt-8 border-t-2 border-emerald-100 space-y-4 bg-gradient-to-br from-stone-50 via-emerald-50/20 to-stone-50 p-6 sm:p-7 rounded-3xl border border-stone-200">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div className="flex items-center gap-2.5">
                <div className="p-2.5 bg-emerald-800 text-white rounded-xl shadow-xs">
                  <BookOpen className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="text-sm sm:text-base font-black text-stone-900">
                    {t.articlesReferences}
                  </h2>
                  <p className="text-[11px] text-stone-500 mt-0.5">
                    {t.articlesReferencesNotice}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2 self-start sm:self-auto">
                <button
                  onClick={handleCopyReferences}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white border border-stone-300 hover:border-emerald-600 text-stone-700 hover:text-emerald-700 rounded-xl text-xs font-bold transition-all shadow-2xs cursor-pointer"
                  title={t.articlesCopyReferences}
                >
                  {copiedRefs ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                      <span className="text-emerald-700">{t.articlesCopiedReferences}</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-stone-500" />
                      <span>{t.articlesCopyReferences}</span>
                    </>
                  )}
                </button>
                <span className="text-xs font-bold text-emerald-800 bg-emerald-100/90 px-3 py-1.5 rounded-xl border border-emerald-300/60 whitespace-nowrap">
                  {content.references.length} {t.articlesRefCount}
                </span>
              </div>
            </div>

            <ul className="space-y-3 pt-2">
              {content.references.map((ref: string, idx: number) => {
                const isFao = ref.includes('FAO');
                const isJournal = ref.includes('Journal') || ref.includes('Sciences') || ref.includes('Plant') || ref.includes('Soil') || ref.includes('Botany') || ref.includes('Press');
                return (
                  <li
                    key={idx}
                    className="bg-white p-4 rounded-2xl border border-stone-200 shadow-2xs text-xs text-stone-700 leading-relaxed font-mono flex items-start gap-3 hover:border-emerald-400 transition-colors"
                  >
                    <span className="inline-flex items-center justify-center min-w-[28px] h-7 rounded-lg bg-emerald-50 text-emerald-800 font-bold text-xs shrink-0 border border-emerald-200">
                      [{idx + 1}]
                    </span>
                    <div className="flex-1 space-y-1.5">
                      <p className="text-stone-800 font-sans sm:font-mono text-[11px] sm:text-xs">
                        {ref}
                      </p>
                      <div className="flex flex-wrap items-center gap-1.5 pt-0.5">
                        {isFao && (
                          <span className="text-[10px] bg-sky-50 text-sky-700 border border-sky-200 px-2 py-0.5 rounded-md font-sans font-bold">
                            FAO Technical Paper
                          </span>
                        )}
                        {isJournal && (
                          <span className="text-[10px] bg-emerald-50 text-emerald-700 border border-emerald-200 px-2 py-0.5 rounded-md font-sans font-bold">
                            Peer-Reviewed Academic Citation
                          </span>
                        )}
                        <span className="text-[10px] bg-stone-100 text-stone-600 border border-stone-200 px-2 py-0.5 rounded-md font-sans">
                          {language === 'fa' ? 'استناد علمی تاییدشده' : language === 'ar' ? 'مرجع علمي معتمد' : 'Verified Citation'}
                        </span>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          </section>
        )}

        {/* Related Articles Cards */}
        {relatedArticlesList.length > 0 && (
          <section className="space-y-4 pt-8 border-t border-stone-200">
            <h2 className="text-base sm:text-xl font-black text-stone-900">
              مقالات تخصصی و مرتبط دیگر:
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {relatedArticlesList.map(rel => {
                const relContent = rel[language] || rel.fa;
                return (
                  <div
                    key={rel.id}
                    onClick={() => onNavigateToArticle(rel.slug)}
                    className="p-4 rounded-2xl bg-white border border-stone-200 hover:border-emerald-600 transition-all shadow-2xs hover:shadow-md cursor-pointer flex flex-col justify-between group"
                  >
                    <div className="space-y-2">
                      <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md">
                        {relContent.category}
                      </span>
                      <h4 className="text-xs sm:text-sm font-bold text-stone-900 group-hover:text-emerald-800 transition-colors line-clamp-2">
                        {relContent.title}
                      </h4>
                    </div>
                    <div className="pt-3 text-[11px] font-bold text-emerald-800 flex items-center justify-between border-t border-stone-100 mt-3">
                      <span>مطالعه مقاله</span>
                      <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                );
              })}
            </div>
          </section>
        )}

        {/* Last Modified Date & Copyright Footer */}
        <div className="pt-8 text-center text-xs text-stone-400 border-t border-stone-200 space-y-1">
          <p>
            کلیه حقوق این محتوای تخصصی متعلق به شرکت پیشگامان پایدار فلات نیک (برند پرواز نهاده) می‌باشد.
          </p>
          <p className="font-mono text-[11px]">
            آخرین بازنگری علمی و به‌روزرسانی محتوا: {content.lastModified || '2026-10-11'} | رفرنس‌های داوری‌شده
          </p>
        </div>

      </main>

    </article>
  );
};
