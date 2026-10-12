export type Language = 'fa' | 'en' | 'ar' | 'ur';

export interface DosageRate {
  crop: string; // محصول
  method: string; // نحوه مصرف
  timing?: string; // زمان مصرف
  rate: string; // مقدار مصرف
}

export type ProductCategory = 
  | 'soil-conditioner' // ضد شوری و اصلاح خاک
  | 'humic-organic'    // هیومیک و مواد آلی
  | 'stimulant'        // محرک رشد و ضد تنش
  | 'nutrition-gel'    // ژل‌های تغذیه و عناصر میکرو/ماکرو
  | 'all';

export interface ProductFaq {
  question: string;
  answer: string;
}

export interface TankMixItem {
  productName: string;
  slug: string;
  reason: string;
}

export interface ProductDetailData {
  h1Title: string;
  h1TitleEn?: string;
  h1TitleAr?: string;
  h1TitleUr?: string;
  metaTitle: string;
  metaTitleEn?: string;
  metaTitleAr?: string;
  metaTitleUr?: string;
  metaDescription: string;
  metaDescriptionEn?: string;
  metaDescriptionAr?: string;
  metaDescriptionUr?: string;
  longIntro: string;
  longIntroEn?: string;
  longIntroAr?: string;
  longIntroUr?: string;
  analysis: string[];
  analysisEn?: string[];
  analysisAr?: string[];
  analysisUr?: string[];
  tankMixes: TankMixItem[];
  tankMixesEn?: TankMixItem[];
  tankMixesAr?: TankMixItem[];
  tankMixesUr?: TankMixItem[];
  cautions: string[];
  cautionsEn?: string[];
  cautionsAr?: string[];
  cautionsUr?: string[];
  faqs: ProductFaq[];
  faqsEn?: ProductFaq[];
  faqsAr?: ProductFaq[];
  faqsUr?: ProductFaq[];
  relatedArticleSlugs: string[];
  relatedProductSlugs: string[];
}

export interface Product {
  id: string;
  slug: string;
  aliases?: string[];
  nameFa: string;
  nameEn: string;
  nameAr?: string;
  nameUr?: string;
  category: ProductCategory;
  categoryTitle: string;
  categoryTitleEn?: string;
  categoryTitleAr?: string;
  categoryTitleUr?: string;
  tagline: string;
  taglineEn?: string;
  taglineAr?: string;
  taglineUr?: string;
  description: string;
  descriptionEn?: string;
  descriptionAr?: string;
  descriptionUr?: string;
  benefits: string[];
  benefitsEn?: string[];
  benefitsAr?: string[];
  benefitsUr?: string[];
  dosageTable: DosageRate[];
  dosageTableEn?: DosageRate[];
  dosageTableAr?: DosageRate[];
  dosageTableUr?: DosageRate[];
  specialNotes?: string;
  imageUrl?: string;
  appearance?: string;
  appearanceEn?: string;
  appearanceAr?: string;
  appearanceUr?: string;
  packaging?: string;
  packagingEn?: string;
  packagingAr?: string;
  packagingUr?: string;
  badge?: string;
  badgeEn?: string;
  badgeAr?: string;
  badgeUr?: string;
  detail?: ProductDetailData;
}

export interface ConsultationInquiry {
  id: string;
  name: string;
  phone: string;
  cropType: string;
  city: string;
  areaSize?: string;
  problem: string;
  createdAt: string;
  status: 'new' | 'contacted' | 'resolved';
}

export interface ArticleContentSection {
  heading: string;
  text: string;
}

export interface ArticleFaqItem {
  question: string;
  answer: string;
}

export interface ArticleDosageRow {
  stage: string;
  crop: string;
  rate: string;
  timing: string;
}

export interface ArticleContent {
  title: string;
  category: string;
  readTime: string;
  date: string;
  lastModified?: string;
  author: string;
  summary: string;
  abstract: string;
  metaDescription?: string;
  targetKeyword?: string;
  contentSections: ArticleContentSection[];
  dosageTable?: ArticleDosageRow[];
  faqs?: ArticleFaqItem[];
  references: string[];
  relatedProducts: string[];
  relatedArticles?: string[];
}

export interface Article {
  id: string;
  slug: string;
  aliases?: string[];
  imageUrl: string;
  googleTrendKeyword?: {
    fa: string;
    en: string;
    ar: string;
    ur?: string;
  };
  region?: {
    provinceFa: string;
    cropFa: string;
    provinceEn?: string;
    cropEn?: string;
    provinceAr?: string;
    cropAr?: string;
    provinceUr?: string;
    cropUr?: string;
  };
  fa: ArticleContent;
  en: ArticleContent;
  ar: ArticleContent;
  ur?: ArticleContent;
}
