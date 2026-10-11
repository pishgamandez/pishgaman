import React, { useState, useMemo } from 'react';
import { articlesData } from '../data/articles';
import { Article, ArticleContentSection } from '../types';
import { BookOpen, Search, Clock, Calendar, User, ArrowLeft, ArrowRight, Sparkles, TrendingUp, ChevronLeft, ChevronRight, CheckCircle2, Globe, ExternalLink } from 'lucide-react';
import { PishgamanLogo } from './PishgamanLogo';
import { useLanguage } from '../i18n/LanguageContext';
import researchImg from '../assets/images/agri_research_lab_1791480948724.jpg';

interface Props {
  onBackToHome: () => void;
  onSelectProductByName?: (name: string) => void;
}

export const ArticlesPage: React.FC<Props> = ({ onBackToHome, onSelectProductByName }) => {
  const { language, setLanguage, t, isRtl } = useLanguage();
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  // Extract categories for the current language
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
      const c = art[language] || art.fa;
      if (selectedCategory !== 'all' && c.category !== selectedCategory) return false;
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const trendTag = art.googleTrendKeyword ? art.googleTrendKeyword[language]?.toLowerCase() : '';
        return (
          c.title.toLowerCase().includes(q) ||
          c.summary.toLowerCase().includes(q) ||
          c.abstract.toLowerCase().includes(q) ||
          trendTag?.includes(q)
        );
      }
      return true;
    });
  }, [language, selectedCategory, searchQuery]);

  return (
    <div className={`min-h-screen bg-stone-50 text-stone-800 flex flex-col font-sans ${isRtl ? 'text-right' : 'text-left'}`}>
      
      {/* Top Banner with Agricultural Research Photo */}
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
                  <span>Google Trends + FAO References</span>
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
                {articlesData.length} {language === 'en' ? 'Comprehensive Articles' : language === 'ar' ? 'مقالاً علمياً وبحثياً' : 'مقاله تخصصی و رفرنس‌دار'}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="sticky top-20 z-30 bg-white/95 backdrop-blur-md border-b border-stone-200 py-4 px-4 sm:px-6 shadow-xs">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          
          {/* Category Pills */}
          <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-1 md:pb-0 no-scrollbar">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-emerald-800 text-white shadow-sm'
                    : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
                }`}
              >
                {cat === 'all' ? t.articlesAllCategories : cat}
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

      {/* Articles Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 flex-1 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {filteredArticles.map((art) => {
            const content = art[language] || art.fa;
            const trendTag = art.googleTrendKeyword ? art.googleTrendKeyword[language] : null;

            return (
              <article
                key={art.id}
                onClick={() => setSelectedArticle(art)}
                className="bg-white rounded-3xl border border-stone-200 hover:border-emerald-500/70 shadow-xs hover:shadow-2xl transition-all duration-300 overflow-hidden flex flex-col justify-between cursor-pointer group"
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

                    {/* Google Trend Tag if applicable */}
                    {trendTag && (
                      <div className={`absolute bottom-3 ${isRtl ? 'right-3' : 'left-3'}`}>
                        <span className="inline-flex items-center gap-1 text-[11px] font-bold bg-amber-500/95 text-stone-950 backdrop-blur-md px-2.5 py-0.5 rounded-full shadow-md">
                          <TrendingUp className="w-3 h-3 text-stone-950" />
                          <span>Google Trend</span>
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

                    <h3 className="text-base sm:text-lg font-black text-stone-900 group-hover:text-emerald-800 transition-colors leading-snug">
                      {content.title}
                    </h3>

                    <p className="text-xs text-stone-600 line-clamp-3 leading-relaxed font-light">
                      {content.summary}
                    </p>
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <div className="pt-4 border-t border-stone-100 space-y-2.5">
                    <div className="flex items-center justify-between text-[11px] text-stone-500">
                      <span className="truncate max-w-[170px]">{content.author}</span>
                      <span className="font-mono text-stone-400">{content.date}</span>
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
              </article>
            );
          })}
        </div>
      </div>

      {/* Full Article Modal */}
      {selectedArticle && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-stone-950/80 backdrop-blur-md overflow-y-auto">
          <div className="relative w-full max-w-4xl bg-white rounded-3xl shadow-2xl overflow-hidden my-auto border border-stone-200 animate-in fade-in zoom-in-95 duration-200">
            
            {/* Modal Header */}
            <div className="sticky top-0 z-20 bg-white/95 backdrop-blur-md border-b border-stone-200 px-6 py-4 flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-600 animate-pulse" />
                <span className="text-xs font-bold text-stone-600">{t.articlesScientificPaper}</span>
              </div>
              <button
                onClick={() => setSelectedArticle(null)}
                className="px-3.5 py-1.5 bg-stone-100 hover:bg-stone-200 text-stone-700 rounded-xl text-xs font-bold transition-colors cursor-pointer"
              >
                {t.articlesClose}
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 sm:p-10 max-h-[82vh] overflow-y-auto space-y-8">
              
              {/* Featured Photo */}
              <div className="relative h-64 sm:h-80 rounded-2xl overflow-hidden shadow-inner bg-stone-100">
                <img
                  src={selectedArticle.imageUrl}
                  alt={selectedArticle[language]?.title || ''}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/70 via-transparent to-transparent" />
                {selectedArticle.googleTrendKeyword && (
                  <div className={`absolute bottom-4 ${isRtl ? 'right-4' : 'left-4'}`}>
                    <span className="inline-flex items-center gap-1.5 bg-amber-500 text-stone-950 px-3 py-1 rounded-full text-xs font-black shadow-lg">
                      <TrendingUp className="w-3.5 h-3.5" />
                      <span>{t.articlesTrendingBadge}: {selectedArticle.googleTrendKeyword[language]}</span>
                    </span>
                  </div>
                )}
              </div>

              {/* Meta and Title */}
              {(() => {
                const active = selectedArticle[language] || selectedArticle.fa;
                return (
                  <>
                    <div className="space-y-3">
                      <div className="flex flex-wrap items-center gap-3 text-xs text-stone-500">
                        <span className="bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full font-bold">
                          {active.category}
                        </span>
                        <span>{t.articlesAuthor}: <strong>{active.author}</strong></span>
                        <span>·</span>
                        <span>{t.articlesDate}: <strong>{active.date}</strong></span>
                        <span>·</span>
                        <span>{t.articlesReadTime}: <strong>{active.readTime}</strong></span>
                      </div>

                      <h2 className="text-2xl sm:text-3xl font-black text-stone-900 leading-snug">
                        {active.title}
                      </h2>
                    </div>

                    {/* Abstract Box */}
                    <div className="bg-emerald-50/70 border-r-4 border-emerald-600 p-5 sm:p-6 rounded-2xl space-y-2">
                      <h4 className="text-xs font-black text-emerald-900 uppercase tracking-wider flex items-center gap-1.5">
                        <Sparkles className="w-4 h-4 text-emerald-600" />
                        <span>{language === 'en' ? 'Scientific Abstract' : language === 'ar' ? 'الملخص العلمي والتطبيقي' : 'چکیده پژوهش و مبانی کاربردی'}</span>
                      </h4>
                      <p className="text-xs sm:text-sm text-stone-700 leading-relaxed font-light">
                        {active.abstract}
                      </p>
                    </div>

                    {/* Content Sections */}
                    <div className="space-y-6">
                      {active.contentSections.map((sec: ArticleContentSection, idx: number) => (
                        <section key={idx} className="space-y-2.5">
                          <h3 className="text-base sm:text-lg font-bold text-stone-900 border-b border-stone-100 pb-1.5">
                            {idx + 1}. {sec.heading}
                          </h3>
                          <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-light whitespace-pre-line">
                            {sec.text}
                          </p>
                        </section>
                      ))}
                    </div>

                    {/* Related Formulations Callout */}
                    {active.relatedProducts && active.relatedProducts.length > 0 && (
                      <div className="p-5 rounded-2xl bg-stone-100 border border-stone-200 space-y-3">
                        <h4 className="text-xs font-bold text-stone-800">
                          {t.articlesRelatedProducts}:
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {active.relatedProducts.map((pName: string, pIdx: number) => (
                            <button
                              key={pIdx}
                              onClick={() => {
                                setSelectedArticle(null);
                                onSelectProductByName?.(pName);
                              }}
                              className="px-3 py-1.5 bg-white border border-stone-300 hover:border-emerald-600 hover:text-emerald-700 rounded-xl text-xs font-bold transition-all shadow-2xs cursor-pointer flex items-center gap-1.5"
                            >
                              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                              <span>{pName}</span>
                            </button>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* References */}
                    {active.references && active.references.length > 0 && (
                      <div className="pt-6 border-t border-stone-200 space-y-3">
                        <h4 className="text-xs font-bold text-stone-700">
                          {t.articlesReferences}:
                        </h4>
                        <ul className="space-y-2 text-[11px] text-stone-500 font-mono leading-relaxed list-disc list-inside">
                          {active.references.map((ref: string, idx: number) => (
                            <li key={idx} className="pl-1">
                              {ref}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </>
                );
              })()}

            </div>

          </div>
        </div>
      )}

    </div>
  );
};
