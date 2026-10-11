import React, { useState, useEffect } from 'react';
import { initialProducts } from './data/products';
import { Product } from './types';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ProductTabs } from './components/ProductTabs';
import { ProductDetailModal } from './components/ProductDetailModal';
import { SoilGuideSection } from './components/SoilGuideSection';
import { AboutSection } from './components/AboutSection';
import { ConsultationForm } from './components/ConsultationForm';
import { AdminPanel } from './components/AdminPanel';
import { FloatingAssistant } from './components/FloatingAssistant';
import { FloatingContactButtons } from './components/FloatingContactButtons';
import { Footer } from './components/Footer';
import { ArticlesPage } from './components/ArticlesPage';
import { ArticleDetailPage } from './components/ArticleDetailPage';
import { articlesData } from './data/articles';
import { Article } from './types';
import { ShieldCheck, Award, Zap, Truck } from 'lucide-react';
import { companyInfo } from './data/company';
import { LanguageProvider, useLanguage } from './i18n/LanguageContext';

function MainApp() {
  const { language, t, isRtl } = useLanguage();

  const [products, setProducts] = useState<Product[]>(() => {
    try {
      const saved = localStorage.getItem('pishgaman_custom_products');
      if (saved) {
        return JSON.parse(saved);
      }
    } catch {
      // ignore
    }
    return initialProducts;
  });

  // Sync with server-stored products
  useEffect(() => {
    fetch(`/api/products?t=${Date.now()}`, { cache: 'no-store' })
      .then(res => {
        if (!res.ok) throw new Error('Network response was not ok');
        return res.json();
      })
      .then(serverProducts => {
        if (Array.isArray(serverProducts) && serverProducts.length > 0) {
          setProducts(serverProducts);
          try {
            localStorage.setItem('pishgaman_custom_products', JSON.stringify(serverProducts));
          } catch {
            // ignore
          }
        }
      })
      .catch(() => {
        // Fallback gracefully to localStorage
      });
  }, []);

  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [adminOpen, setAdminOpen] = useState(false);
  const [isAssistantOpen, setIsAssistantOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeSection, setActiveSection] = useState('hero');
  const [consultPrefilledProduct, setConsultPrefilledProduct] = useState<string>('');

  // Standalone URL and routing states
  const [currentView, setCurrentView] = useState<'home' | 'articles-index' | 'article-detail'>('home');
  const [currentArticle, setCurrentArticle] = useState<Article | null>(null);

  const isGhPages = typeof window !== 'undefined' && window.location.pathname.startsWith('/pishgaman');
  const basePath = isGhPages ? '/pishgaman' : '';

  // Synchronize route from browser URL
  useEffect(() => {
    const syncRouteFromPath = () => {
      if (typeof window === 'undefined') return;
      const path = window.location.pathname;

      // 1. Check article detail match: e.g. /articles/:slug or /pishgaman/articles/:slug
      const matchDetail = path.match(/(?:^|\/)(?:en\/|ar\/)?articles\/([a-zA-Z0-9_-]+)\/?$/);
      if (matchDetail && matchDetail[1]) {
        const slug = matchDetail[1];
        const found = articlesData.find(a => a.slug === slug || a.aliases?.includes(slug) || a.id === slug);
        if (found) {
          setCurrentArticle(found);
          setCurrentView('article-detail');
          setActiveSection('articles');
          return;
        }
      }

      // 2. Check articles index: /articles/ or /pishgaman/articles/
      if (/(?:^|\/)(?:en\/|ar\/)?articles\/?$/.test(path)) {
        setCurrentArticle(null);
        setCurrentView('articles-index');
        setActiveSection('articles');
        return;
      }

      // 3. Fallback to homepage
      setCurrentArticle(null);
      setCurrentView('home');
    };

    syncRouteFromPath();
    window.addEventListener('popstate', syncRouteFromPath);
    return () => window.removeEventListener('popstate', syncRouteFromPath);
  }, []);

  const handleNavigateToArticle = (slug: string) => {
    const found = articlesData.find(a => a.slug === slug || a.aliases?.includes(slug) || a.id === slug);
    if (found) {
      const url = language === 'en'
        ? `${basePath}/en/articles/${found.slug}/`
        : language === 'ar'
        ? `${basePath}/ar/articles/${found.slug}/`
        : `${basePath}/articles/${found.slug}/`;

      try {
        window.history.pushState(null, '', url);
      } catch {}

      setCurrentArticle(found);
      setCurrentView('article-detail');
      setActiveSection('articles');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleNavigateToArticlesIndex = () => {
    const url = language === 'en'
      ? `${basePath}/en/articles/`
      : language === 'ar'
      ? `${basePath}/ar/articles/`
      : `${basePath}/articles/`;

    try {
      window.history.pushState(null, '', url);
    } catch {}

    setCurrentArticle(null);
    setCurrentView('articles-index');
    setActiveSection('articles');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavigateToHome = (sectionId: string = 'hero') => {
    const url = `${basePath}/`;
    try {
      window.history.pushState(null, '', url);
    } catch {}

    setCurrentArticle(null);
    setCurrentView('home');
    setActiveSection(sectionId);

    if (sectionId === 'hero') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      setTimeout(() => {
        const el = document.getElementById(sectionId);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 50);
    }
  };

  const handleNavigate = (sectionId: string) => {
    if (sectionId === 'articles') {
      handleNavigateToArticlesIndex();
      return;
    }
    handleNavigateToHome(sectionId);
  };

  const handleOpenConsultForProduct = (productName: string) => {
    setConsultPrefilledProduct(productName);
    handleNavigate('consult');
  };

  return (
    <div className={`min-h-screen bg-stone-50 text-stone-800 flex flex-col font-sans selection:bg-emerald-200 selection:text-emerald-950 ${isRtl ? 'dir-rtl' : 'dir-ltr'}`}>
      
      {/* 1. Header (Sticky) */}
      <Header
        onNavigate={handleNavigate}
        activeSection={activeSection}
        onOpenAdmin={() => setAdminOpen(true)}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />

      {currentView === 'article-detail' && currentArticle ? (
        /* Standalone Dedicated Article Page (No Modal) */
        <main className="flex-1">
          <ArticleDetailPage
            article={currentArticle}
            allArticles={articlesData}
            products={products}
            onBackToArticles={handleNavigateToArticlesIndex}
            onNavigateToArticle={handleNavigateToArticle}
            onSelectProductByName={(name) => {
              const found = products.find(p => p.nameFa.includes(name) || name.includes(p.nameFa) || p.nameEn.toLowerCase().includes(name.toLowerCase()));
              if (found) setSelectedProduct(found);
            }}
            onOpenConsult={() => handleNavigateToHome('consult')}
          />
        </main>
      ) : currentView === 'articles-index' ? (
        /* Dedicated Scientific & Regional Articles Index Tab View */
        <main className="flex-1">
          <ArticlesPage
            onBackToHome={() => handleNavigateToHome('hero')}
            onSelectProductByName={(name) => {
              const found = products.find(p => p.nameFa.includes(name) || name.includes(p.nameFa) || p.nameEn.toLowerCase().includes(name.toLowerCase()));
              if (found) setSelectedProduct(found);
            }}
            onSelectArticle={(art) => handleNavigateToArticle(art.slug)}
          />
        </main>
      ) : (
        /* Home Main View - 100% Untouched */
        <main className="flex-1">
          {/* 2. Hero Section with Real Farm Wheat Field Background */}
          <section id="hero">
            <Hero
              onExploreProducts={() => handleNavigate('products')}
              onOpenConsult={() => handleNavigate('consult')}
            />
          </section>

          {/* Corporate Trust Strip */}
          <div className="bg-white border-y border-stone-200 py-6">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
              <div className={`grid grid-cols-2 md:grid-cols-4 gap-6 ${isRtl ? 'text-right' : 'text-left'}`}>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-xs sm:text-sm text-stone-900">
                      {language === 'en' ? 'Verified Quality Analysis' : language === 'ar' ? 'تحليل جودة معتمد' : 'آنالیز کیفی معتبر'}
                    </h4>
                    <p className="text-[11px] text-stone-500">
                      {language === 'en' ? 'Continuous assay testing & 100% purity' : language === 'ar' ? 'رقابة مستمرة ونقاوة ١٠٠٪' : 'کنترل پیوسته عناصر و خلوص ۱۰۰٪'}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-teal-100 text-teal-800 flex items-center justify-center shrink-0">
                    <Zap className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-xs sm:text-sm text-stone-900">
                      {language === 'en' ? 'Custom Formulations' : language === 'ar' ? 'تركيبات خاصة' : 'فرمولاسیون اختصاصی'}
                    </h4>
                    <p className="text-[11px] text-stone-500">
                      {language === 'en' ? 'Engineered for arid and saline soils' : language === 'ar' ? 'ملائمة لأراضي الشرق الأوسط' : 'سازگار با اقلیم و خاک‌های شور کشور'}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center shrink-0">
                    <Award className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-xs sm:text-sm text-stone-900">
                      {language === 'en' ? 'Direct Scientific Oversight' : language === 'ar' ? 'إشراف علمي مباشر' : 'نظارت علمی مستقیم'}
                    </h4>
                    <p className="text-[11px] text-stone-500">
                      {language === 'en' ? `Under guidance of ${t.managerName}` : language === 'ar' ? `بإشراف ${t.managerName}` : `تیم تخصصی به مدیریت ${companyInfo.manager}`}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-800 flex items-center justify-center shrink-0">
                    <Truck className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-xs sm:text-sm text-stone-900">
                      {language === 'en' ? 'Prompt Dispatch' : language === 'ar' ? 'شحن فوري' : 'ارسال به سراسر کشور'}
                    </h4>
                    <p className="text-[11px] text-stone-500">
                      {language === 'en' ? 'Fast nationwide delivery to all regions' : language === 'ar' ? 'توصيل سريع لجميع المحافظات' : 'توزیع سریع در تمامی استان‌ها و نمایندگی‌ها'}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 3. 16 Products Tabs & Catalog */}
          <ProductTabs
            products={products}
            onSelectProduct={(p) => setSelectedProduct(p)}
            searchQuery={searchQuery}
          />

          {/* 4. Soil Guide Section (pH & EC Educational Content) */}
          <SoilGuideSection
            onOpenConsult={() => handleNavigate('consult')}
          />

          {/* 5. About Company & Leadership */}
          <AboutSection />

          {/* 6. Consultation & Soil Diagnosis Request Form */}
          <ConsultationForm
            prefilledProduct={consultPrefilledProduct}
            onSubmitted={() => setConsultPrefilledProduct('')}
          />
        </main>
      )}

      {/* 7. Comprehensive Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenAdmin={() => setAdminOpen(true)}
      />

      {/* Product Detail Modal */}
      <ProductDetailModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onOpenConsult={handleOpenConsultForProduct}
      />

      {/* Admin Panel Modal */}
      <AdminPanel
        isOpen={adminOpen}
        onClose={() => setAdminOpen(false)}
        products={products}
        onUpdateProducts={(updated) => {
          setProducts(updated);
          try {
            localStorage.setItem('pishgaman_custom_products', JSON.stringify(updated));
          } catch (e) {
            console.warn('LocalStorage save failed:', e);
          }
          fetch('/api/products', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(updated)
          }).catch(err => {
            console.error('Failed to sync products to server:', err);
          });
          if (selectedProduct) {
            const found = updated.find(p => p.id === selectedProduct.id);
            if (found) setSelectedProduct(found);
          }
        }}
      />

      {/* Floating AI Agronomist Assistant */}
      <FloatingAssistant
        isOpen={isAssistantOpen}
        onOpenChange={setIsAssistantOpen}
      />

      {/* Floating Contact Buttons (Phone & WhatsApp) */}
      {!isAssistantOpen && <FloatingContactButtons />}

    </div>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <MainApp />
    </LanguageProvider>
  );
}
