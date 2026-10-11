import React, { useState, useMemo } from 'react';
import { Product, ProductCategory } from '../types';
import { ProductPackageIllustration } from './ProductPackageIllustration';
import { ArrowLeft, ArrowRight, Sparkles, Eye, Check } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';

interface ProductTabsProps {
  products: Product[];
  onSelectProduct: (product: Product) => void;
  searchQuery: string;
}

export const ProductTabs: React.FC<ProductTabsProps> = ({
  products,
  onSelectProduct,
  searchQuery
}) => {
  const { language, t, isRtl } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState<ProductCategory>('all');
  const [selectedProductId, setSelectedProductId] = useState<string>('all');

  const categories: { id: ProductCategory; label: string; count: number }[] = [
    { id: 'all', label: `${t.catAll} (${products.length})`, count: products.length },
    {
      id: 'soil-conditioner',
      label: t.catSoilConditioner,
      count: products.filter(p => p.category === 'soil-conditioner').length
    },
    {
      id: 'humic-organic',
      label: t.catHumicOrganic,
      count: products.filter(p => p.category === 'humic-organic').length
    },
    {
      id: 'stimulant',
      label: t.catStimulant,
      count: products.filter(p => p.category === 'stimulant').length
    },
    {
      id: 'nutrition-gel',
      label: t.catNutritionGel,
      count: products.filter(p => p.category === 'nutrition-gel').length
    }
  ];

  const filteredProducts = useMemo(() => {
    return products.filter(product => {
      // Category filter
      if (selectedCategory !== 'all' && product.category !== selectedCategory) {
        return false;
      }
      // Specific single product tab filter
      if (selectedProductId !== 'all' && product.id !== selectedProductId) {
        return false;
      }
      // Search query
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchesFa = product.nameFa.toLowerCase().includes(q);
        const matchesEn = product.nameEn.toLowerCase().includes(q);
        const matchesAr = product.nameAr ? product.nameAr.toLowerCase().includes(q) : false;
        const matchesDesc = product.description.toLowerCase().includes(q);
        const matchesTag = product.tagline.toLowerCase().includes(q);
        return matchesFa || matchesEn || matchesAr || matchesDesc || matchesTag;
      }
      return true;
    });
  }, [products, selectedCategory, selectedProductId, searchQuery]);

  return (
    <section id="products" className="py-20 bg-stone-50 border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
            <span>{t.products16}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-black text-stone-900 tracking-tight">
            {language === 'en'
              ? 'Pishgaman Falat Nik Specialized Product Catalog'
              : language === 'ar'
              ? 'كتالوج منتجات بيشغامان فلات نيك التخصصية'
              : 'کاتالوگ تخصصی محصولات پیشگامان فلات نیک'}
          </h2>

          <p className="text-sm sm:text-base text-stone-600 leading-relaxed font-light">
            {language === 'en'
              ? 'Engineered with advanced agronomic technology to remediate physiological deficits, correct soil salinity, and elevate crop yields.'
              : language === 'ar'
              ? 'مُصنعة بأحدث التقنيات الزراعية لمعالجة النقص الفسيولوجي وكسر ملوحة التربة وتأمين إنتاجية البساتين والمحاصيل.'
              : 'فرموله‌شده با آخرین تکنولوژی‌های زراعی جهت برطرف‌سازی کمبودهای فیزیولوژیک، شکستن سختی و شوری خاک و تضمین باروری مزارع و باغات.'}
          </p>
        </div>

        {/* 1. Category Pill Tabs */}
        <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-3 mb-6 no-scrollbar">
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => {
                setSelectedCategory(cat.id);
                setSelectedProductId('all');
              }}
              className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all cursor-pointer flex items-center gap-2 ${
                selectedCategory === cat.id
                  ? 'bg-emerald-800 text-white shadow-md shadow-emerald-900/20'
                  : 'bg-white text-stone-700 hover:bg-stone-100 border border-stone-200'
              }`}
            >
              <span>{cat.label}</span>
              <span
                className={`text-[11px] px-1.5 py-0.2 rounded-full font-mono ${
                  selectedCategory === cat.id ? 'bg-emerald-900 text-emerald-200' : 'bg-stone-100 text-stone-500'
                }`}
              >
                {cat.count}
              </span>
            </button>
          ))}
        </div>

        {/* 2. Horizontal 16-Product Quick Tabs */}
        <div className="bg-white rounded-2xl p-3 border border-stone-200/80 shadow-xs mb-10 overflow-x-auto no-scrollbar">
          <div className="flex items-center gap-2 min-w-max">
            <button
              onClick={() => setSelectedProductId('all')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-colors cursor-pointer ${
                selectedProductId === 'all'
                  ? 'bg-stone-900 text-white'
                  : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
              }`}
            >
              {language === 'en' ? 'Show All' : language === 'ar' ? 'عرض الكل' : 'نمایش همه'}
            </button>
            {products.map(p => {
              const displayName = language === 'en' ? p.nameEn : p.nameFa;
              const subName = language === 'en' ? p.nameFa : p.nameEn;
              return (
                <button
                  key={p.id}
                  onClick={() => {
                    setSelectedProductId(p.id);
                    if (selectedCategory !== 'all' && p.category !== selectedCategory) {
                      setSelectedCategory('all');
                    }
                  }}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all cursor-pointer flex items-center gap-1.5 ${
                    selectedProductId === p.id
                      ? 'bg-emerald-700 text-white shadow-sm'
                      : 'bg-stone-50 text-stone-700 hover:bg-emerald-50 hover:text-emerald-800 border border-stone-200/60'
                  }`}
                >
                  <span className="font-bold">{displayName}</span>
                  <span className="font-mono text-[10px] opacity-75 uppercase">{subName}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* 3. Products Grid */}
        {filteredProducts.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-3xl border border-stone-200 p-8">
            <p className="text-stone-500 text-sm">{t.noProductsFound}</p>
            <button
              onClick={() => {
                setSelectedCategory('all');
                setSelectedProductId('all');
              }}
              className="mt-4 px-4 py-2 bg-emerald-700 text-white text-xs font-bold rounded-lg cursor-pointer"
            >
              {t.allProducts}
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map(product => {
              const displayName = language === 'en' ? product.nameEn : product.nameFa;
              const subName = language === 'en' ? product.nameFa : product.nameEn;

              return (
                <div
                  key={product.id}
                  className={`bg-white rounded-3xl border border-stone-200 hover:border-emerald-500/50 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col overflow-hidden group ${
                    isRtl ? 'text-right' : 'text-left'
                  }`}
                >
                  {/* Visual Packaging Illustration */}
                  <div className="p-4 pb-0">
                    <ProductPackageIllustration product={product} size="md" />
                  </div>

                  {/* Card Content */}
                  <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                    {/* Category & Appearance Badge */}
                    <div className="space-y-1">
                      <div className="flex items-center justify-between text-[11px] text-stone-500">
                        <span className="font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">
                          {product.categoryTitle}
                        </span>
                        {product.appearance && (
                          <span className="text-stone-400 truncate max-w-[120px]">{product.appearance}</span>
                        )}
                      </div>

                      <div className="pt-2">
                        <h3 className="text-xl font-black text-stone-900 group-hover:text-emerald-700 transition-colors">
                          {displayName}
                        </h3>
                        <span className="text-[11px] font-mono tracking-wider text-stone-400 block uppercase">
                          {subName}
                        </span>
                      </div>
                    </div>

                    {/* Tagline & Key Benefit */}
                    <p className="text-xs text-stone-600 line-clamp-2 leading-relaxed">
                      {product.tagline}
                    </p>

                    {/* Benefits Preview */}
                    {product.benefits && product.benefits.length > 0 && (
                      <div className="bg-stone-50 rounded-xl p-2.5 border border-stone-100 text-[11px] text-stone-700 space-y-1">
                        <div className="flex items-start gap-1.5">
                          <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                          <span className="line-clamp-2">{product.benefits[0]}</span>
                        </div>
                      </div>
                    )}

                    {/* Action Button */}
                    <div className="pt-2">
                      <button
                        onClick={() => onSelectProduct(product)}
                        className="w-full py-2.5 px-3 bg-stone-100 hover:bg-emerald-700 hover:text-white text-stone-800 rounded-xl text-xs font-bold transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer group/btn"
                      >
                        <Eye className="w-4 h-4 text-stone-500 group-hover/btn:text-white transition-colors" />
                        <span>{t.viewProductDetails}</span>
                        {isRtl ? (
                          <ArrowLeft className="w-3.5 h-3.5 group-hover/btn:-translate-x-1 transition-transform" />
                        ) : (
                          <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                        )}
                      </button>
                    </div>

                  </div>
                </div>
              );
            })}
          </div>
        )}

      </div>
    </section>
  );
};
