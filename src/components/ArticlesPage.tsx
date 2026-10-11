import React, { useState, useMemo } from 'react';
import { articlesData } from '../data/articles';
import { Article } from '../types';
import { BookOpen, Search, Clock, Calendar, ArrowLeft, ArrowRight, TrendingUp, ChevronLeft, ChevronRight, MapPin, Sparkles } from 'lucide-react';
import { PishgamanLogo } from './PishgamanLogo';
import { useLanguage } from '../i18n/LanguageContext';
import researchImg from '../assets/images/agri_research_lab_1791480948724.jpg';

interface Props {
  onBackToHome: () => void;
  onSelectProductByName?: (name: string) => void;
  onSelectArticle: (article: Article) => void;
}

export const ArticlesPage: React.FC<Props> = ({ onBackToHome, onSelectArticle }) => {
  const { language, t, isRtl } = useLanguage();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [filterRegionOnly, setFilterRegionOnly] = useState(false);

  const isGhPages = typeof window !== 'undefined' && window.location.pathname.startsWith('/pishgaman');
  const basePath = isGhPages ? '/pishgaman' : '';

  // Extract categories for current language
  const categories = useMemo(() => {
    const set = new Set<string>();
    articlesData.forEach(art => {
      const content = art[language] || art.fa;
      if (content?.category) {
        set.add(content.category);
      }
    });
    return ['all', ...Array.from(set)];
  }, [language]);

  const filteredArticles = useMemo(() => {
    return articlesData.filter(art => {
      if (filterRegionOnly && !art.region) return false;
      const c = art[language] || art.fa;
      if (selectedCategory !== 'all' && c.category !== selectedCategory) return false;
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const trendTag = art.googleTrendKeyword ? art.googleTrendKeyword[language]?.toLowerCase() : '';
        const regionTag = art.region ? `${art.region.provinceFa} ${art.region.cropFa}`.toLowerCase() : '';
        return (
          c.title.toLowerCase().includes(q) ||
          c.summary.toLowerCase().includes(q) ||
          c.abstract.toLowerCase().includes(q) ||
          trendTag?.includes(q) ||
          regionTag.includes(q)
        );
      }
      return true;
    });
  }, [language, selectedCategory, filterRegionOnly, searchQuery]);

  // Construct absolute URL for SEO href
  const getArticleHref = (slug: string) => {
    if (language === 'en') return `${basePath}/en/articles/${slug}/`;
    if (language === 'ar') return `${basePath}/ar/articles/${slug}/`;
    return `${basePath}/articles/${slug}/`;
  };

  return (
    <div className={`min-h-screen bg-stone-50 text-stone-800 flex flex-col font-sans ${isRtl ? 'text-right' : 'text-left'}`}>
      
      {/* Top Banner with Agricultural Research Visual */}
      <div className="relative bg-gradient-to-l from-stone-900 via-stone-900 to-emerald-950 text-white overflow-hidden py-14 sm:py-20 border-b border-stone-800">
        <div
          className="absolute inset-0 opacity-25 bg-cover bg-center mix-blend-luminosity"
          style={{ backgroundImage: `url(${researchImg})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-900 via-transparent to-stone-900/60" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div className="space-y-3.5 max-w-2xl">
              <div className="flex flex-wrap items-center gap-2">
                <button
                  onClick={onBackToHome}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/10 hover:bg-white/20 text-emerald-300 text-xs font-bold transition-colors cursor-pointer border border-white/10"
                >
                  {isRtl ? <ArrowRight className="w-4 h-4" /> : <ArrowLeft className="w-4 h-4" />}
                  <span>{t.articlesBackToHome}</span>
                </button>

                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 border border-amber-400/30 text-xs font-bold">
                  <TrendingUp className="w-3.5 h-3.5" />
                  <span>Google Trends + مقالات محلی استان‌ها</span>
                </div>

                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-400/30 text-xs font-bold">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>صفحات مستقل و قابل ایندکس</span>
                </div>
              </div>

              <h1 className="text-2xl sm:text-4xl font-black text-white tracking-tight leading-tight">
                {t.articlesTitle}
              </h1>

              <p className="text-xs sm:text-sm text-stone-300 font-light leading-relaxed">
                {t.articlesDesc}
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-md p-5 sm:p-6 rounded-3xl border border-white/20 shadow-2xl flex flex-col items-center text-center">
              <PishgamanLogo variant="white" size="lg" />
              <span className="text-xs text-emerald-300 font-bold mt-2">{t.articlesDepartment}</span>
              <span className="text-[11px] text-stone-300 mt-1">
                {articlesData.length} {language === 'en' ? 'Comprehensive Articles' : language === 'ar' ? 'مقالاً علمياً وبحثياً' : 'مقاله تخصصی و منطقه‌ای با رفرنس'}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="sticky top-20 z-30 bg-white/95 backdrop-blur-md border-b border-stone-200 py-4 px-4 sm:px-6 shadow-xs">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          
          {/* Category & Region Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-1 md:pb-0 no-scrollbar">
            <button
              onClick={() => {
                setSelectedCategory('all');
                setFilterRegionOnly(false);
              }}
              className={`px-3.5 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
                selectedCategory === 'all' && !filterRegionOnly
                  ? 'bg-emerald-800 text-white shadow-sm'
                  : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
              }`}
            >
              {t.articlesAllCategories} ({articlesData.length})
            </button>

            <button
              onClick={() => {
                setFilterRegionOnly(!filterRegionOnly);
                setSelectedCategory('all');
              }}
              className={`px-3.5 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all cursor-pointer flex items-center gap-1.5 ${
                filterRegionOnly
                  ? 'bg-amber-600 text-white shadow-sm'
                  : 'bg-amber-50 text-amber-900 border border-amber-200 hover:bg-amber-100'
              }`}
            >
              <MapPin className="w-3.5 h-3.5" />
              <span>مقالات محلی استان‌ها (۱۰ منطقه)</span>
            </button>

            {categories.filter(c => c !== 'all').map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  setSelectedCategory(cat);
                  setFilterRegionOnly(false);
                }}
                className={`px-3.5 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
                  selectedCategory === cat && !filterRegionOnly
                    ? 'bg-emerald-800 text-white shadow-sm'
                    : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-80">
            <Search className={`w-4 h-4 text-stone-400 absolute top-1/2 -translate-y-1/2 ${isRtl ? 'right-3' : 'left-3'}`} />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={t.articlesSearchPlaceholder}
              className={`w-full bg-stone-100 text-xs py-2.5 rounded-xl border border-stone-200 focus:outline-none focus:ring-2 focus:ring-emerald-700 ${
                isRtl ? 'pr-9 pl-3 text-right' : 'pl-9 pr-3 text-left'
              }`}
            />
          </div>

        </div>
      </div>

      {/* Articles Index Grid: Click leads directly to independent URL */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 flex-1 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {filteredArticles.map((art) => {
            const content = art[language] || art.fa;
            const trendTag = art.googleTrendKeyword ? art.googleTrendKeyword[language] : null;
            const articleHref = getArticleHref(art.slug);

            return (
              <a
                key={art.id}
                href={articleHref}
                onClick={(e) => {
                  e.preventDefault();
                  onSelectArticle(art);
                }}
                className="bg-white rounded-3xl border border-stone-200 hover:border-emerald-500/70 shadow-xs hover:shadow-2xl transition-all duration-300 overflow-hidden flex flex-col justify-between cursor-pointer group text-inherit no-underline"
              >
                <div>
                  {/* Article Photo */}
                  <div className="relative h-48 w-full overflow-hidden bg-stone-100">
                    <img
                      src={art.imageUrl}
                      alt={content.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-stone-950/60 via-transparent to-transparent" />
                    
                    {/* Category Tag */}
                    <div className={`absolute top-3 ${isRtl ? 'right-3' : 'left-3'}`}>
                      <span className="font-bold text-xs bg-emerald-800/90 text-white backdrop-blur-md px-3 py-1 rounded-full shadow-md">
                        {content.category}
                      </span>
                    </div>

                    {/* Scientific Citations Badge */}
                    <div className={`absolute top-3 ${isRtl ? 'left-3' : 'right-3'}`}>
                      <span className="font-bold text-[11px] bg-stone-900/85 text-emerald-300 backdrop-blur-md px-2.5 py-1 rounded-full shadow-md flex items-center gap-1.5 border border-emerald-500/30">
                        <BookOpen className="w-3 h-3 text-emerald-400" />
                        <span>{content.references?.length || 3} {t.articlesRefCount}</span>
                      </span>
                    </div>

                    {/* Regional Badge if applicable */}
                    {art.region && (
                      <div className={`absolute bottom-3 ${isRtl ? 'right-3' : 'left-3'}`}>
                        <span className="inline-flex items-center gap-1 text-[11px] font-bold bg-amber-500 text-stone-950 backdrop-blur-md px-2.5 py-0.5 rounded-full shadow-md">
                          <MapPin className="w-3 h-3 text-stone-950" />
                          <span>{art.region.provinceFa}</span>
                        </span>
                      </div>
                    )}

                    {/* Read Time */}
                    <div className={`absolute bottom-3 ${isRtl ? 'left-3' : 'right-3'} text-white text-[11px] flex items-center gap-1 font-mono bg-black/60 backdrop-blur-sm px-2 py-0.5 rounded-md`}>
                      <Clock className="w-3 h-3 text-emerald-400" />
                      <span>{content.readTime}</span>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 space-y-3">
                    {trendTag && (
                      <div className="text-[11px] font-semibold text-amber-700 bg-amber-50 border border-amber-200/60 rounded-lg px-2.5 py-1 inline-block">
                        🔥 {trendTag}
                      </div>
                    )}

                    <h2 className="text-base sm:text-lg font-black text-stone-900 group-hover:text-emerald-800 transition-colors leading-snug">
                      {content.title}
                    </h2>

                    <p className="text-xs text-stone-600 line-clamp-3 leading-relaxed font-light">
                      {content.summary}
                    </p>
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <div className="pt-4 border-t border-stone-100 space-y-2.5">
                    <div className="flex items-center justify-between text-[11px] text-stone-600">
                      <span className="inline-flex items-center gap-1.5 font-semibold text-emerald-900 bg-emerald-50 px-2.5 py-1 rounded-lg border border-emerald-200/70">
                        <BookOpen className="w-3 h-3 text-emerald-700" />
                        <span>{content.references?.length || 3} {t.articlesRefCount}</span>
                      </span>
                      <span className="font-mono text-stone-400 flex items-center gap-1">
                        <Calendar className="w-3 h-3 text-stone-400" />
                        <span>{content.date}</span>
                      </span>
                    </div>

                    <div className="flex items-center justify-between text-xs font-bold text-emerald-800 group-hover:text-emerald-700 pt-1">
                      <span>{t.articlesFullRead}</span>
                      {isRtl ? (
                        <ChevronLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                      ) : (
                        <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      )}
                    </div>
                  </div>
                </div>
              </a>
            );
          })}
        </div>
      </div>

    </div>
  );
};
