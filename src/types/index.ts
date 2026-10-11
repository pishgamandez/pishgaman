export type Language = 'fa' | 'en' | 'ar';

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

export interface Product {
  id: string;
  slug: string;
  nameFa: string;
  nameEn: string;
  nameAr?: string;
  category: ProductCategory;
  categoryTitle: string;
  categoryTitleEn?: string;
  categoryTitleAr?: string;
  tagline: string;
  taglineEn?: string;
  taglineAr?: string;
  description: string;
  descriptionEn?: string;
  descriptionAr?: string;
  benefits: string[];
  benefitsEn?: string[];
  benefitsAr?: string[];
  dosageTable: DosageRate[];
  dosageTableEn?: DosageRate[];
  dosageTableAr?: DosageRate[];
  specialNotes?: string;
  imageUrl?: string;
  appearance?: string;
  appearanceEn?: string;
  appearanceAr?: string;
  packaging?: string;
  packagingEn?: string;
  packagingAr?: string;
  badge?: string;
  badgeEn?: string;
  badgeAr?: string;
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

export interface ArticleContent {
  title: string;
  category: string;
  readTime: string;
  date: string;
  author: string;
  summary: string;
  abstract: string;
  contentSections: ArticleContentSection[];
  references: string[];
  relatedProducts: string[];
}

export interface Article {
  id: string;
  slug: string;
  imageUrl: string;
  googleTrendKeyword?: {
    fa: string;
    en: string;
    ar: string;
  };
  fa: ArticleContent;
  en: ArticleContent;
  ar: ArticleContent;
}
