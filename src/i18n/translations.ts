import { Language } from '../types';

export interface Translations {
  // Brand & Top bar
  officialBrand: string;
  brandName: string;
  management: string;
  managerName: string;
  adminPanel: string;
  slogan: string;

  // Nav
  home: string;
  products16: string;
  scientificArticles: string;
  soilGuide: string;
  aboutUs: string;
  consultation: string;
  contact: string;
  allProducts: string;

  // Hero
  heroBadge: string;
  heroHeadline1: string;
  heroHeadline2: string;
  heroSubheadline: string;
  heroConsultBtn: string;
  heroCatalogBtn: string;
  heroDirectCall: string;
  heroStatProducts: string;
  heroStatPurity: string;
  heroStatGrowers: string;
  heroStatFormulations: string;

  // Product categories
  catAll: string;
  catSoilConditioner: string;
  catHumicOrganic: string;
  catStimulant: string;
  catNutritionGel: string;
  categoryFilterLabel: string;
  searchProductPlaceholder: string;
  noProductsFound: string;
  viewProductDetails: string;
  requestConsultationForProduct: string;
  viewDosageTable: string;
  packagingLabel: string;
  appearanceLabel: string;
  benefitsLabel: string;

  // Product Detail Page
  pdOverviewTitle: string;
  pdAnalysisTitle: string;
  pdBenefitsTitle: string;
  pdDosageTitle: string;
  pdTankMixTitle: string;
  pdCautionsTitle: string;
  pdFaqsTitle: string;
  pdConsultCtaTitle: string;
  pdCompanionTitle: string;
  pdRelatedArticlesTitle: string;
  pdTableCrop: string;
  pdTableMethod: string;
  pdTableRate: string;
  pdTableTiming: string;
  pdBadgePurity: string;
  pdBadgeShipping: string;
  pdBadgeBrand: string;
  pdBadgeAuthentic: string;
  pdWaOrderBtn: string;
  pdPhoneOrderBtn: string;
  pdShareBtn: string;
  pdCopiedBtn: string;
  pdBackToCatalog: string;
  pdRelatedArticlesDesc: string;

  // Soil guide
  soilGuideTitle: string;
  soilGuideSubtitle: string;
  soilGuideDesc: string;
  phGuideTitle: string;
  ecGuideTitle: string;
  recommendations: string;

  // About us
  aboutTitle: string;
  aboutSubtitle: string;
  aboutVisionTitle: string;
  aboutMissionTitle: string;
  aboutValuesTitle: string;

  // Consultation
  consultTitle: string;
  consultSubtitle: string;
  consultDesc: string;
  farmerName: string;
  phoneNumber: string;
  cropType: string;
  cityOrProvince: string;
  orchardArea: string;
  problemDesc: string;
  submitConsultation: string;
  submitting: string;
  consultSuccessTitle: string;
  consultSuccessDesc: string;
  consultDirectCall: string;

  // Articles Page
  articlesTitle: string;
  articlesSubtitle: string;
  articlesDesc: string;
  articlesBackToHome: string;
  articlesDepartment: string;
  articlesSearchPlaceholder: string;
  articlesReadTime: string;
  articlesAuthor: string;
  articlesDate: string;
  articlesFullRead: string;
  articlesClose: string;
  articlesScientificPaper: string;
  articlesReferences: string;
  articlesReferencesNotice: string;
  articlesRefCount: string;
  articlesHasReferencesBadge: string;
  articlesCopyReferences: string;
  articlesCopiedReferences: string;
  articlesRelatedProducts: string;
  articlesTrendingBadge: string;
  articlesTrendingLabel: string;
  articlesAllCategories: string;

  // Footer
  footerAbout: string;
  footerCatalog: string;
  footerContact: string;
  footerWorkingHours: string;
  footerAllRights: string;
  footerScrollToTop: string;

  // Floating & Misc
  consultAssistant: string;
  directWhatsapp: string;
  directCall: string;
  languageSelect: string;
}

export const translations: Record<Language, Translations> = {
  fa: {
    officialBrand: 'برند رسمی',
    brandName: 'پرواز نهاده',
    management: 'مدیریت',
    managerName: 'دکتر راستین رستمی',
    adminPanel: 'پنل مدیریت',
    slogan: 'راه های کهنه به مقصد های نو نمیرسد ...',

    home: 'صفحه اصلی',
    products16: 'محصولات (۱۶ گانه)',
    scientificArticles: 'مقالات علمی و ترند',
    soilGuide: 'راهنمای pH و EC',
    aboutUs: 'درباره ما',
    consultation: 'مشاوره رایگان',
    contact: 'تماس با ما',
    allProducts: 'همه محصولات',

    heroBadge: 'تولید و تأمین نهاده‌های تخصصی',
    heroHeadline1: 'نوآوری در تغذیه گیاهی،',
    heroHeadline2: 'پایداری در عملکرد خاک',
    heroSubheadline: 'شرکت پیشگامان پایدار فلات نیک با برند رسمی پرواز نهاده و مدیریت دکتر راستین رستمی؛ ارائه‌دهنده سبد کامل ۱۶ محصول استراتژیک از اصلاح‌کننده‌های شوری و اسیدیته تا محرک‌های ارگانیک، ژل‌های تایگر و کلات‌های اختصاصی.',
    heroConsultBtn: 'دریافت مشاوره رایگان با کارشناس',
    heroCatalogBtn: 'مشاهده کاتالوگ ۱۶ محصول',
    heroDirectCall: 'تماس مستقیم با مدیریت (۰۹۱۲۸۲۴۷۴۱۵)',
    heroStatProducts: 'محصول تخصصی',
    heroStatPurity: 'خلوص مواد مؤثره',
    heroStatGrowers: 'باغدار و کشاورز همراه',
    heroStatFormulations: 'فرمولاسیون اختصاصی',

    catAll: 'همه دسته‌ها',
    catSoilConditioner: 'اصلاح خاک و ضد شوری',
    catHumicOrganic: 'هیومیک و مواد آلی',
    catStimulant: 'محرک رشد و ضد تنش',
    catNutritionGel: 'ژل‌های تغذیه و عناصر میکرو/ماکرو',
    categoryFilterLabel: 'دسته‌بندی تخصصی:',
    searchProductPlaceholder: 'جستجو در نام محصول، کاربرد یا ترکیبات...',
    noProductsFound: 'محصولی با این مشخصات یافت نشد.',
    viewProductDetails: 'مشاهده مشخصات و جدول دوز',
    requestConsultationForProduct: 'مشاوره اختصاصی درباره این محصول',
    viewDosageTable: 'جدول دوز و روش مصرف استاندارد',
    packagingLabel: 'بسته‌بندی:',
    appearanceLabel: 'شکل ظاهری:',
    benefitsLabel: 'مزایا و ویژگی‌های کلیدی:',

    pdOverviewTitle: 'معرفی تخصصی و کاربرد زراعی',
    pdAnalysisTitle: 'ترکیبات، آنالیز تضمین‌شده و درصد عناصر',
    pdBenefitsTitle: 'مزایا، کارکردها و اثرات تخصصی زراعی',
    pdDosageTitle: 'جدول دوز و نحوه مصرف در محصولات مختلف',
    pdTankMixTitle: 'محصولات سازگار و ترکیب‌های پیشنهادی (Tank-Mix)',
    pdCautionsTitle: 'هشدارها، سازگاری و نکات ایمنی مصرف',
    pdFaqsTitle: 'سوالات متداول کشاورزان و باغداران',
    pdConsultCtaTitle: 'مشاوره تخصصی و استعلام قیمت آنلاین',
    pdCompanionTitle: 'محصولات مکمل و مرتبط پیشنهادی',
    pdRelatedArticlesTitle: 'مقالات تخصصی مرتبط',
    pdTableCrop: 'نوع محصول / گیاه',
    pdTableMethod: 'نحوه و روش مصرف',
    pdTableRate: 'دوز و مقدار مصرف',
    pdTableTiming: 'توضیحات و زمان مصرف',
    pdBadgePurity: 'آنالیز تضمین‌شده و خلوص ۱۰۰٪',
    pdBadgeShipping: 'ارسال مستقیم به سراسر کشور',
    pdBadgeBrand: 'فرمولاسیون پرواز نهاده',
    pdBadgeAuthentic: 'تضمین اصالت پرواز نهاده',
    pdWaOrderBtn: 'استعلام قیمت و مشاوره در واتس‌اپ',
    pdPhoneOrderBtn: 'سفارش تلفنی',
    pdShareBtn: 'اشتراک‌گذاری',
    pdCopiedBtn: 'کپی شد',
    pdBackToCatalog: 'بازگشت به محصولات',
    pdRelatedArticlesDesc: 'برای مطالعه عمیق‌تر مبانی علمی، تجربیات منطقه‌ای و جداول کاربردی در زمینه این محصول، مقالات زیر را مطالعه فرمایید:',

    soilGuideTitle: 'راهنمای جامع مدیریت اسیدیته (pH) و شوری (EC)',
    soilGuideSubtitle: 'تحلیل علمی جذب عناصر و رفتار ریشه در شرایط اقلیمی فلات مرکزی',
    soilGuideDesc: 'بیش از ۸۰ درصد خاک‌های کشاورزی کشور با چالش قلیایی بودن (pH بالای ۷.۸) و افزایش EC مواجه هستند. با شناخت دقیق این دو عامل و کاربرد ترکیبات اصلاحی پیشگامان، راندمان جذب کودها تا ۳ برابر افزایش می‌یابد.',
    phGuideTitle: 'مدیریت اسیدیته خاک و آب (pH)',
    ecGuideTitle: 'کنترل هدایت الکتریکی و شوری (EC)',
    recommendations: 'راهکارهای علمی و فرمول‌های توصیه‌شده',

    aboutTitle: 'درباره شرکت پیشگامان پایدار فلات نیک',
    aboutSubtitle: 'تعهد به پایداری، دانش‌محوری و همراهی صادقانه با جامعه کشاورزی',
    aboutVisionTitle: 'چشم‌انداز و هدف بنیادین',
    aboutMissionTitle: 'رسالت و تعهد حرفه‌ای',
    aboutValuesTitle: 'ارزش‌های سازمانی ما',

    consultTitle: 'مشاوره تخصصی تغذیه و آزمایش خاک',
    consultSubtitle: 'تماس مستقیم با تیم فنی و کارشناسان تغذیه گیاهی',
    consultDesc: 'برای دریافت نسخه اختصاصی کوددهی باغات و مزارع خود، اطلاعات زیر را ثبت نمایید تا کارشناسان فنی در سریع‌ترین زمان با شما تماس بگیرند.',
    farmerName: 'نام و نام خانوادگی باغدار/کشاورز',
    phoneNumber: 'شماره تماس مستقیم (موبایل)',
    cropType: 'نوع محصول (پسته، گندم، گوجه‌فرنگی، مرکبات...)',
    cityOrProvince: 'شهر یا استان محل مزرعه',
    orchardArea: 'مساحت مزرعه یا باغ (هکتار)',
    problemDesc: 'شرح عارضه، زردی برگ، شوری خاک یا نیاز تغذیه‌ای',
    submitConsultation: 'ثبت درخواست مشاوره رایگان',
    submitting: 'در حال ارسال اطلاعات...',
    consultSuccessTitle: 'درخواست شما با موفقیت ثبت شد!',
    consultSuccessDesc: 'کارشناسان تغذیه گیاهی شرکت پیشگامان به زودی با شما تماس خواهند گرفت.',
    consultDirectCall: 'تماس تلفنی فوری با دفتر و مدیریت',

    articlesTitle: 'پایگاه مقالات تخصصی و موضوعات پربازدید کشاورزی',
    articlesSubtitle: 'تحقیقات کاربردی، رفرنس‌های دانشگاهی و موضوعات ترند گوگل در تغذیه نوین',
    articlesDesc: 'بررسی جامع فیزیولوژی گیاهی، کنترل تنش‌های گرما و سرما، شوری، رفتار اسیدهای آلی و کلات‌های آهن با تکیه بر یافته‌های معتبر جهانی و تجارب میدانی مزارع کشور.',
    articlesBackToHome: 'بازگشت به صفحه اصلی سایت',
    articlesDepartment: 'دپارتمان تحقیق و توسعه علمی پیشگامان',
    articlesSearchPlaceholder: 'جستجو در مقالات (شوری، کلات، هیومیک، جلبک، گوگرد...)',
    articlesReadTime: 'مدت مطالعه',
    articlesAuthor: 'هیئت علمی و تدوین پژوهشی',
    articlesDate: 'تاریخ انتشار',
    articlesFullRead: 'مطالعه کامل مقاله و رفرنس‌ها',
    articlesClose: 'بستن پنجره',
    articlesScientificPaper: 'مقاله علمی، پژوهشی و رفرنس‌دار',
    articlesReferences: 'منابع، مراجع و استنادهای معتبر علمی بین‌المللی (References & Citations)',
    articlesReferencesNotice: 'تمام مباحث این مقاله بر اساس پژوهش‌های ژورنال‌های معتبر کشاورزی و استانداردهای سازمان خواربار و کشاورزی ملل متحد (FAO) تدوین شده است.',
    articlesRefCount: 'رفرنس علمی معتبر',
    articlesHasReferencesBadge: 'دارای استناد علمی و رفرنس معتبر',
    articlesCopyReferences: 'کپی استنادهای علمی',
    articlesCopiedReferences: 'استنادها کپی شد!',
    articlesRelatedProducts: 'محصولات مرتبط شرکت پیشگامان',
    articlesTrendingBadge: 'موضوع ترند گوگل (Google Trends)',
    articlesTrendingLabel: 'پربازدیدترین موضوع کشاورزی',
    articlesAllCategories: 'همه دسته‌ها',

    footerAbout: 'درباره شرکت و برند',
    footerCatalog: 'کاتالوگ ۱۶ محصول',
    footerContact: 'ارتباط مستقیم و ثبت سفارش',
    footerWorkingHours: 'ساعات کاری و پاسخگویی: شنبه تا چهارشنبه ۸ الی ۱۷ | پنج‌شنبه‌ها ۸ الی ۱۳',
    footerAllRights: 'کلیه حقوق این پایگاه متعلق به شرکت پیشگامان پایدار فلات نیک (برند پرواز نهاده) می‌باشد.',
    footerScrollToTop: 'بازگشت به ابتدای صفحه',

    consultAssistant: 'مشاور هوشمند تغذیه',
    directWhatsapp: 'ارتباط در واتس‌اپ',
    directCall: 'تماس مستقیم',
    languageSelect: 'تغییر زبان'
  },

  en: {
    officialBrand: 'Official Brand',
    brandName: 'Parvaz Nahadeh',
    management: 'Executive Management',
    managerName: 'Dr. Rastin Rostami',
    adminPanel: 'Admin Portal',
    slogan: 'Old paths never lead to new destinations...',

    home: 'Home',
    products16: 'Products (16 Items)',
    scientificArticles: 'Scientific & Trending Articles',
    soilGuide: 'pH & EC Guide',
    aboutUs: 'About Us',
    consultation: 'Agronomy Consult',
    contact: 'Contact',
    allProducts: 'All Products',

    heroBadge: 'Specialized Agricultural Inputs & Fertilizers',
    heroHeadline1: 'Innovation in Plant Nutrition,',
    heroHeadline2: 'Sustainability in Soil Performance',
    heroSubheadline: 'Pishgaman Paydar Falat Nik Company (Brand: Parvaz Nahadeh) under the scientific leadership of Dr. Rastin Rostami, offering a premier catalog of 16 specialized agricultural formulations: from anti-salinity soil conditioners to biostimulants, Tiger gels, and pure EDDHA iron chelates.',
    heroConsultBtn: 'Get Free Agronomic Advice',
    heroCatalogBtn: 'Explore 16 Products Catalog',
    heroDirectCall: 'Direct Call (+989128247415)',
    heroStatProducts: 'Specialized Formulations',
    heroStatPurity: 'Active Ingredient Purity',
    heroStatGrowers: 'Partner Growers & Farmers',
    heroStatFormulations: 'Custom Agronomic Formulations',

    catAll: 'All Categories',
    catSoilConditioner: 'Soil Conditioners & Anti-Salinity',
    catHumicOrganic: 'Humic & Organic Substances',
    catStimulant: 'Biostimulants & Stress Relief',
    catNutritionGel: 'Nutrition Gels & Macro/Micro',
    categoryFilterLabel: 'Category:',
    searchProductPlaceholder: 'Search by product name, active ingredient, or crop...',
    noProductsFound: 'No products matched your search criteria.',
    viewProductDetails: 'View Specifications & Dosage Table',
    requestConsultationForProduct: 'Consult on This Product',
    viewDosageTable: 'Application Method & Dosage Table',
    packagingLabel: 'Packaging:',
    appearanceLabel: 'Formulation State:',
    benefitsLabel: 'Key Agronomic Benefits:',

    pdOverviewTitle: 'Agronomic Overview & Crop Applications',
    pdAnalysisTitle: 'Guaranteed Analysis & Formulation Elements',
    pdBenefitsTitle: 'Agronomic Benefits & Specialized Effects',
    pdDosageTitle: 'Application Rates & Schedule Across Crops',
    pdTankMixTitle: 'Compatible Tank-Mix Solutions',
    pdCautionsTitle: 'Safety Precautions & Compatibility Cautions',
    pdFaqsTitle: 'Frequently Asked Questions',
    pdConsultCtaTitle: 'Free Consultation & Price Inquiry',
    pdCompanionTitle: 'Recommended Companion Products',
    pdRelatedArticlesTitle: 'Related Technical Articles',
    pdTableCrop: 'Crop / Plant Stage',
    pdTableMethod: 'Application Method',
    pdTableRate: 'Dosage Rate',
    pdTableTiming: 'Timing & Notes',
    pdBadgePurity: '100% Guaranteed Purity & Analysis',
    pdBadgeShipping: 'Nationwide Express Shipping',
    pdBadgeBrand: 'Parvaz Nahadeh Formulation',
    pdBadgeAuthentic: 'Parvaz Nahadeh Certified Authentic',
    pdWaOrderBtn: 'WhatsApp Consultation & Order',
    pdPhoneOrderBtn: 'Phone Order',
    pdShareBtn: 'Share Link',
    pdCopiedBtn: 'Copied!',
    pdBackToCatalog: 'Back to Products',
    pdRelatedArticlesDesc: 'Explore in-depth scientific research, regional field trials, and application guidelines for this product:',

    soilGuideTitle: 'Comprehensive Guide to Soil pH & Salinity (EC) Management',
    soilGuideSubtitle: 'Scientific analysis of nutrient mobility and root physiology in arid soils',
    soilGuideDesc: 'Over 80% of arid and semi-arid agricultural soils face alkaline pH (>7.8) and high electrical conductivity (EC). With precision diagnostics and Pishgaman conditioning compounds, nutrient uptake efficiency increases up to threefold.',
    phGuideTitle: 'Soil & Water pH Conditioning',
    ecGuideTitle: 'Electrical Conductivity (EC) & Salinity Control',
    recommendations: 'Scientific Recommendations & Protocols',

    aboutTitle: 'About Pishgaman Paydar Falat Nik',
    aboutSubtitle: 'Committed to Sustainability, Science-Driven Solutions & Farmer Success',
    aboutVisionTitle: 'Core Vision & Purpose',
    aboutMissionTitle: 'Mission & Dedication',
    aboutValuesTitle: 'Corporate Values',

    consultTitle: 'Expert Nutritional & Soil Consultation',
    consultSubtitle: 'Connect Directly with Our Plant Nutrition Specialists',
    consultDesc: 'Fill out your crop and soil parameters below to receive a personalized fertigation program from our agronomy department.',
    farmerName: 'Grower / Farm Manager Name',
    phoneNumber: 'Direct Phone / Mobile Number',
    cropType: 'Crop Type (Pistachio, Wheat, Tomato, Citrus...)',
    cityOrProvince: 'City / Region of Farm',
    orchardArea: 'Orchard or Field Size (Hectares)',
    problemDesc: 'Observed issue, leaf yellowing, soil salinity, or crop needs',
    submitConsultation: 'Submit Free Consultation Request',
    submitting: 'Submitting information...',
    consultSuccessTitle: 'Consultation Request Submitted!',
    consultSuccessDesc: 'Our agricultural experts will contact you promptly with tailored recommendations.',
    consultDirectCall: 'Direct Call to Head Office & Management',

    articlesTitle: 'Agronomy Research Library & Trending Topics',
    articlesSubtitle: 'Applied Soil Science, University References & Google Trends in Crop Nutrition',
    articlesDesc: 'Comprehensive peer-reviewed articles exploring plant physiology, drought/heat mitigation, salinity remediation, humic acid mechanisms, and premium chelated micronutrients.',
    articlesBackToHome: 'Back to Homepage',
    articlesDepartment: 'Pishgaman R&D Science Department',
    articlesSearchPlaceholder: 'Search articles (salinity, EDDHA, humic, seaweed, sulfur...)',
    articlesReadTime: 'Read Time',
    articlesAuthor: 'Scientific Editorial Board',
    articlesDate: 'Published',
    articlesFullRead: 'Read Full Paper & References',
    articlesClose: 'Close Window',
    articlesScientificPaper: 'Peer-Reviewed Applied Agricultural Paper',
    articlesReferences: 'Peer-Reviewed References & Academic Citations',
    articlesReferencesNotice: 'All topics in this paper are grounded in peer-reviewed scientific journals, ISI literature, and official FAO agronomy guidelines.',
    articlesRefCount: 'Peer-Reviewed Citations',
    articlesHasReferencesBadge: 'Documented with Academic References',
    articlesCopyReferences: 'Copy Academic Citations',
    articlesCopiedReferences: 'Citations Copied!',
    articlesRelatedProducts: 'Related Pishgaman Formulations',
    articlesTrendingBadge: 'Google Trends Hot Topic',
    articlesTrendingLabel: 'Most Searched Agricultural Subject',
    articlesAllCategories: 'All Categories',

    footerAbout: 'Company & Brand Profile',
    footerCatalog: '16 Specialized Formulations',
    footerContact: 'Direct Contact & Ordering',
    footerWorkingHours: 'Working Hours: Sat - Wed 08:00 to 17:00 | Thu 08:00 to 13:00',
    footerAllRights: 'All rights reserved by Pishgaman Paydar Falat Nik Co. (Parvaz Nahadeh).',
    footerScrollToTop: 'Back to Top',

    consultAssistant: 'Nutrition Assistant',
    directWhatsapp: 'WhatsApp Chat',
    directCall: 'Direct Call',
    languageSelect: 'Change Language'
  },

  ar: {
    officialBrand: 'العلامة الرسمية',
    brandName: 'برواز نهاده',
    management: 'الإدارة العامة',
    managerName: 'د. راستين رستمي',
    adminPanel: 'بوابة الإدارة',
    slogan: 'الطرق القديمة لا تؤدي إلى وجهات جديدة...',

    home: 'الرئيسية',
    products16: 'المنتجات (١٦ منتجاً)',
    scientificArticles: 'المقالات العلمية والمواضيع الرائجة',
    soilGuide: 'دليل الحموضة والملوحة (pH و EC)',
    aboutUs: 'من نحن',
    consultation: 'استشارة زراعية',
    contact: 'اتصل بنا',
    allProducts: 'جميع المنتجات',

    heroBadge: 'إنتاج وتوريد المدخلات الزراعية التخصصية',
    heroHeadline1: 'الابتكار في تغذية النبات،',
    heroHeadline2: 'الاستدامة في إنتاجية التربة',
    heroSubheadline: 'شركة بيشغامان بايدار فلات نيك بعلامتها الرسمية (برواز نهاده) وإدارة د. راستين رستمي؛ تقدم باقة متكاملة من ١٦ منتجاً استراتيجياً من مصلحات الملوحة والحموضة، المحفزات الحيوية، جل التايكر والأسمدة المخلبية عالية النقاوة.',
    heroConsultBtn: 'طلب استشارة زراعية مجانية',
    heroCatalogBtn: 'استعراض كتالوج الـ ١٦ منتجاً',
    heroDirectCall: 'الاتصال المباشر بالإدارة (09128247415)',
    heroStatProducts: 'منتجاً تخصصياً',
    heroStatPurity: 'نقاوة المواد الفعالة',
    heroStatGrowers: 'مزارعاً وشريكاً معتمداً',
    heroStatFormulations: 'تركيبة زراعية خاصة',

    catAll: 'جميع الأقسام',
    catSoilConditioner: 'معالجة التربة ومكافحة الملوحة',
    catHumicOrganic: 'الهيوميك والمواد العضوية',
    catStimulant: 'محفزات النمو ومضادات الإجهاد',
    catNutritionGel: 'جل التغذية والعناصر الكبرى والصغرى',
    categoryFilterLabel: 'التصنيف التخصصي:',
    searchProductPlaceholder: 'البحث باسم المنتج، المحصول أو المادة الفعالة...',
    noProductsFound: 'لم يتم العثور على أي منتج يطابق بحثك.',
    viewProductDetails: 'عرض التفاصيل وجدول الجرعات',
    requestConsultationForProduct: 'استشارة حول هذا المنتج',
    viewDosageTable: 'جدول الجرعات وطرق الاستخدام المعتمدة',
    packagingLabel: 'العبوة:',
    appearanceLabel: 'الشكل والمظهر:',
    benefitsLabel: 'المزايا والخصائص الرئيسية:',

    pdOverviewTitle: 'نظرة تخصصية وتطبيقات زراعية',
    pdAnalysisTitle: 'التحليل المضمون ونسب العناصر الكيميائية',
    pdBenefitsTitle: 'المزايا والآثار التخصصية للمحصول',
    pdDosageTitle: 'جدول معدلات وطرق الاستخدام لمختلف المحاصيل',
    pdTankMixTitle: 'الخلطات المتوافقة والمقترحة (Tank-Mix)',
    pdCautionsTitle: 'التحذيرات وإرشادات الأمان والتوافق',
    pdFaqsTitle: 'الأسئلة الأكثر شيوعاً بين المزارعين',
    pdConsultCtaTitle: 'استشارة فنية مجانية وطلب عرض سعر',
    pdCompanionTitle: 'المنتجات التكميلية المقترحة',
    pdRelatedArticlesTitle: 'المقالات التخصصية ذات الصلة',
    pdTableCrop: 'المحصول / مرحلة النمو',
    pdTableMethod: 'طريقة الاستخدام',
    pdTableRate: 'معدل الجرعة',
    pdTableTiming: 'التوقيت والملاحظات',
    pdBadgePurity: 'تحليل مضمون ونقاوة ١٠٠٪',
    pdBadgeShipping: 'شحن مباشر لجميع المناطق',
    pdBadgeBrand: 'تركيبة برواز نهاده المعتمدة',
    pdBadgeAuthentic: 'ضمان الأصالة من برواز نهاده',
    pdWaOrderBtn: 'استعلام عن السعر ومشاورة واتساب',
    pdPhoneOrderBtn: 'الطلب هاتفياً',
    pdShareBtn: 'مشاركة',
    pdCopiedBtn: 'تم النسخ!',
    pdBackToCatalog: 'العودة إلى المنتجات',
    pdRelatedArticlesDesc: 'للاطلاع على الأبحاث العلمية والتجارب الحقلية لهذا المنتج، يرجى قراءة المقالات التالية:',

    soilGuideTitle: 'الدليل الشامل لإدارة حموضة التربة (pH) والملوحة (EC)',
    soilGuideSubtitle: 'تحليل علمي لامتصاص العناصر وسلوك الجذور في الظروف الجافة والقلوية',
    soilGuideDesc: 'أكثر من ٨٠٪ من الأراضي الزراعية في المنطقة تعاني من قلوية التربة (pH أكثر من ٧.٨) وتراكم الملوحة (EC). بفضل المعالجة الدقيقة واستخدام مركبات بيشغامان، ترتفع كفاءة امتصاص الأسمدة إلى ثلاثة أضعاف.',
    phGuideTitle: 'إدارة ومعالجة حموضة التربة ومياه الرش (pH)',
    ecGuideTitle: 'التحكم في التوصيل الكهربائي والملوحة (EC)',
    recommendations: 'الحلول العلمية والبرامج التسميدية الموصى بها',

    aboutTitle: 'عن شركة بيشغامان بايدار فلات نيك',
    aboutSubtitle: 'الالتزام بالاستدامة، الحلول العلمية الرصينة ودعم المزارعين',
    aboutVisionTitle: 'الرؤية والهدف التأسيسي',
    aboutMissionTitle: 'الرسالة والمسؤولية المهنية',
    aboutValuesTitle: 'قيمنا المؤسسية',

    consultTitle: 'استشارات متخصصة في التغذية وفحص التربة',
    consultSubtitle: 'تواصل مباشر مع الفريق الفني وخبراء تغذية النبات',
    consultDesc: 'للحصول على برنامج تسميدي مخصص لمزرعتك وبستانك، يرجى ملء البيانات وسيقوم خبراؤنا بالتواصل معك في أقرب وقت.',
    farmerName: 'اسم المزارع / مدير المزرعة',
    phoneNumber: 'رقم الهاتف المباشر (الجوال)',
    cropType: 'نوع المحصول (فستق، قمح، طماطم، حمضيات...)',
    cityOrProvince: 'المدينة أو المحافظة',
    orchardArea: 'مساحة المزرعة أو البستان (هكتار)',
    problemDesc: 'شرح المشكلة (اصفرار الأوراق، ملوحة التربة، احتياج تسميدي)',
    submitConsultation: 'إرسال طلب الاستشارة المجانية',
    submitting: 'جاري إرسال البيانات...',
    consultSuccessTitle: 'تم تسجيل طلبك بنجاح!',
    consultSuccessDesc: 'سيتواصل معك خبراء التغذية الزراعية في شركة بيشغامان قريباً.',
    consultDirectCall: 'الاتصال الهاتفي الفوري بالإدارة',

    articlesTitle: 'مكتبة البحوث الزراعية التخصصية والمواضيع الأكثر بحثاً',
    articlesSubtitle: 'أبحاث تطبيقية، مراجع أكاديمية ومواضيع ترند غوغل في التغذية الحديثة',
    articlesDesc: 'دراسة شاملة لفسيولوجيا النبات، التغلب على إجهادات الحرارة والجفاف، معالجة الملوحة، وسلوك أحماض الهيوميك وشيلات الحديد بالاعتماد على مراجع الفاو (FAO) والدراسات الدولية.',
    articlesBackToHome: 'العودة إلى الصفحة الرئيسية',
    articlesDepartment: 'قسم البحث والتطوير العلمي - شركة بيشغامان',
    articlesSearchPlaceholder: 'البحث في المقالات (ملوحة، شيلات، هيوميك، طحالب، كبريت...)',
    articlesReadTime: 'وقت القراءة',
    articlesAuthor: 'الهيئة العلمية والتحريرية',
    articlesDate: 'تاريخ النشر',
    articlesFullRead: 'قراءة المقال بالكامل والمراجع العلمية',
    articlesClose: 'إغلاق النافذة',
    articlesScientificPaper: 'بحث علمي وتطبيقي موثق بمراجع',
    articlesReferences: 'المراجع والاستشهادات العلمية الدولية المعتمدة (References & Citations)',
    articlesReferencesNotice: 'كافة محاور هذا المقال موثقة استناداً إلى أبحاث ودوريات زراعية محكمة وإرشادات منظمة الأغذية والزراعة للأمم المتحدة (FAO).',
    articlesRefCount: 'مراجع علمية معتمدة',
    articlesHasReferencesBadge: 'موثق بمراجع واستشهادات علمية',
    articlesCopyReferences: 'نسخ المراجع العلمية',
    articlesCopiedReferences: 'تم نسخ المراجع!',
    articlesRelatedProducts: 'المنتجات المرتبطة من شركة بيشغامان',
    articlesTrendingBadge: 'موضوع ترند غوغل (Google Trends)',
    articlesTrendingLabel: 'الموضوع الأكثر بحثاً وزيارة في الزراعة',
    articlesAllCategories: 'جميع الأقسام',

    footerAbout: 'عن الشركة والعلامة التجارية',
    footerCatalog: 'كتالوج الـ ١٦ منتجاً',
    footerContact: 'التواصل المباشر والطلب',
    footerWorkingHours: 'ساعات العمل: السبت إلى الأربعاء من ٨:٠٠ حتى ١٧:٠٠ | الخميس من ٨:٠٠ حتى ١٣:٠٠',
    footerAllRights: 'جميع الحقوق محفوظة لشركة بيشغامان بايدار فلات نيك (برواز نهاده).',
    footerScrollToTop: 'العودة إلى أعلى الصفحة',

    consultAssistant: 'المستشار الذكي للتغذية',
    directWhatsapp: 'تواصل عبر واتساب',
    directCall: 'اتصال مباشر',
    languageSelect: 'تغيير اللغة'
  },
  ur: {
    officialBrand: 'سرکاری برانڈ',
    brandName: 'پرواز نہادہ',
    management: 'انتظامیہ',
    managerName: 'ڈاکٹر راستین رستمی',
    adminPanel: 'ایڈمن پینل',
    slogan: 'پرانے راستے کبھی نئی منزلوں تک نہیں پہنچاتے...',

    home: 'مرکزی صفحہ',
    products16: 'مصنوعات (۱۶ خصوصی)',
    scientificArticles: 'سائنسی و تحقیقی مضامین',
    soilGuide: 'رہنمائے پی ایچ اور ای سی',
    aboutUs: 'ہمارے بارے میں',
    consultation: 'مفت زرعی مشاورت',
    contact: 'رابطہ کریں',
    allProducts: 'تمام مصنوعات',

    heroBadge: 'خصوصی زرعی کھادوں اور ادویات کی تیاری و فراہمی',
    heroHeadline1: 'پودوں کی غذائیت میں جدت،',
    heroHeadline2: 'مٹی کی پیداواری صلاحیت میں پائیداری',
    heroSubheadline: 'پیشگامان پائیدار فلات نیک کمپنی (سرکاری برانڈ پرواز نہادہ) زیر انتظام ڈاکٹر راستین رستمی؛ مٹی کی نمکیات اور کلر کے خاتمے، نامیاتی محرکات، ٹائیگر جیلز اور چیلیٹڈ فارمولیشنز کے ۱۶ اہم ترین زرعی پروڈکٹس فراہم کرتی ہے۔',
    heroConsultBtn: 'زرعی ماہر سے مفت مشورہ حاصل کریں',
    heroCatalogBtn: '۱۶ پروڈکٹس کا مکمل کیٹلاگ دیکھیں',
    heroDirectCall: 'انتظامیہ سے براہ راست رابطہ (۰۹۱۲۸۲۴۷۴۱۵)',
    heroStatProducts: 'خصوصی زرعی پروڈکٹس',
    heroStatPurity: '۱۰۰٪ پانی میں حل پذیر اور خالص',
    heroStatGrowers: 'مطمئن کسان اور باغبان',
    heroStatFormulations: 'جدید سائنسی فارمولیشنز',

    catAll: 'تمام مصنوعات',
    catSoilConditioner: 'نمکیات توڑ اور اصلاحِ مٹی',
    catHumicOrganic: 'ہیومک اور نامیاتی مادے',
    catStimulant: 'گروتھ پروموٹر اور انسداد تناؤ',
    catNutritionGel: 'نیوٹریشنل جیل اور مائیکرو/میکرو اجزاء',
    categoryFilterLabel: 'کیٹیگری منتخب کریں',
    searchProductPlaceholder: 'پروڈکٹ تلاش کریں (چلنجر، سالٹ اسٹاپ، ٹائیگر، سلفر...)...',
    noProductsFound: 'کوئی پروڈکٹ نہیں ملا۔',
    viewProductDetails: 'تفصیلات اور طریقہ استعمال دیکھیں',
    requestConsultationForProduct: 'اس پروڈکٹ کے لیے مشورہ لیں',
    viewDosageTable: 'استعمال کی مقدار اور طریقہ',
    packagingLabel: 'پیکنگ',
    appearanceLabel: 'ظاہری حالت',
    benefitsLabel: 'اہم فوائد اور اثرات',

    pdOverviewTitle: 'خصوصی زرعی تعارف اور استعمال',
    pdAnalysisTitle: 'مصدقہ اینالیسس اور کیمیائی اجزاء',
    pdBenefitsTitle: 'اہم فوائد اور زرعی اثرات',
    pdDosageTitle: 'مختلف فصلوں میں استعمال کی مقدار اور شیڈول',
    pdTankMixTitle: 'تجویز کردہ اور موزوں ٹینک مکس فارمولے',
    pdCautionsTitle: 'حفاظتی تدابیر اور ضروری احتیاطیں',
    pdFaqsTitle: 'کسانوں اور باغبانوں کے عمومی سوالات',
    pdConsultCtaTitle: 'مفت مشاورت اور قیمت کی معلومات',
    pdCompanionTitle: 'تجویز کردہ دیگر متعلقہ پروڈکٹس',
    pdRelatedArticlesTitle: 'متعلقہ سائنسی مضامین',
    pdTableCrop: 'فصل / پودے کا مرحلہ',
    pdTableMethod: 'طریقہ استعمال',
    pdTableRate: 'استعمال کی مقدار',
    pdTableTiming: 'وقت اور ضروری ہدایات',
    pdBadgePurity: 'مصدقہ اینالیسس اور ۱۰۰٪ خالص',
    pdBadgeShipping: 'ملک بھر میں فوری ترسیل',
    pdBadgeBrand: 'پرواز نہادہ فارمولیشن',
    pdBadgeAuthentic: 'پرواز نہادہ کی اصل ہونے کی ضمانت',
    pdWaOrderBtn: 'واٹس ایپ پر مشاورت اور آرڈر',
    pdPhoneOrderBtn: 'فون پر آرڈر',
    pdShareBtn: 'لنک شیئر کریں',
    pdCopiedBtn: 'کاپی ہو گیا!',
    pdBackToCatalog: 'پروڈکٹس کی فہرست پر واپسی',
    pdRelatedArticlesDesc: 'اس پروڈکٹ کے سائنسی اصولوں اور فیلڈ ٹرائلز کے تفصیلی مطالعے کے لیے درج ذیل مضامین ملاحظہ فرمائیں:',

    soilGuideTitle: 'زرعی مٹی کے پی ایچ (pH) اور ای سی (EC) کی سائنسی گائیڈ',
    soilGuideSubtitle: 'مٹی کی جانچ، نمکیات و کلر کی اصلاح اور زیادہ پیداوار کے لیے تکنیکی تجاویز',
    soilGuideDesc: 'مٹی کی کھاری پن (pH) اور برقی موصلیت (EC) غذائی اجزاء کے جذب ہونے میں بنیادی کردار ادا کرتے ہیں۔ ان ہدایات پر عمل کر کے اپنی زمین کی زرخیزی میں اضافہ کریں۔',
    phGuideTitle: 'مٹی کا پی ایچ (اسیدی / کھاری پن)',
    ecGuideTitle: 'مٹی کی ای سی (نمکیات اور شوری)',
    recommendations: 'پیشگامان کی تجویز کردہ مصنوعات',

    aboutTitle: 'پیشگامان پائیدار فلات نیک کمپنی کے بارے میں',
    aboutSubtitle: 'سرکاری برانڈ پرواز نہادہ - کاشتکاروں کے لیے جدید سائنسی زراعت کا قابل اعتماد پارٹنر',
    aboutVisionTitle: 'کمپنی کا وژن اور مقاصد',
    aboutMissionTitle: 'ہمارا مشن',
    aboutValuesTitle: 'بنیادی اقدار اور اصول',

    consultTitle: 'پودوں کی غذائیت اور مٹی کی اصلاح کے لیے مفت زرعی مشاورت',
    consultSubtitle: 'پیشگامان کے ماہرین کی زیر نگرانی اپنی فصلوں کے لیے بہترین کھاد اور حل کا انتخاب کریں',
    consultDesc: 'فارم پر کی گئی معلومات کی بنیاد پر ہمارے ماہرین آپ کے لیے خصوصی زرعی نسخہ اور کھاد کا شیڈول تیار کریں گے۔',
    farmerName: 'کسان یا باغبان کا نام',
    phoneNumber: 'رابطہ نمبر (موبائل)',
    cropType: 'فصل کی قسم (گندم، چاول، کپاس، باغات، سبزیاں...)',
    cityOrProvince: 'شہر یا صوبہ',
    orchardArea: 'رقبہ (ایکڑ یا ہیکٹر)',
    problemDesc: 'مسئلے کی تفصیل (پتوں کا پیلا پن، زمین کا کلر، جڑوں کی کمزوری، کھاد کا شیڈول)',
    submitConsultation: 'مفت مشورے کی درخواست بھیجیں',
    submitting: 'معلومات بھیجی جا رہی ہیں...',
    consultSuccessTitle: 'آپ کی درخواست کامیابی سے درج ہو گئی!',
    consultSuccessDesc: 'پیشگامان کے زرعی ماہرین جلد ہی آپ سے رابطہ کریں گے۔',
    consultDirectCall: 'انتظامیہ سے براہ راست فون پر بات کریں',

    articlesTitle: 'زرعی تحقیق و سائنسی مضامین کا مرکز',
    articlesSubtitle: 'سائنسی مقالات، بین الاقوامی حوالہ جات اور گوگل ٹرینڈز کے زرعی موضوعات',
    articlesDesc: 'پودوں کی فزیالوجی، گرمی اور خشک سالی کے تناؤ کا سدباب، مٹی کی نمکیات کا علاج، اور ہیومک ایسڈ کے کردار پر جامع سائنسی مطالعہ۔',
    articlesBackToHome: 'مرکزی صفحہ پر واپسی',
    articlesDepartment: 'سائنسی تحقیق و ترقیاتی شعبہ - پیشگامان',
    articlesSearchPlaceholder: 'مضامین میں تلاش کریں (نمکیات، ہیومک، چیلیٹ، الجی، سلفر...)...',
    articlesReadTime: 'مطالعہ کا وقت',
    articlesAuthor: 'سائنسی اور ایڈیٹوریل بورڈ',
    articlesDate: 'اشاعت کی تاریخ',
    articlesFullRead: 'مکمل مضمون اور سائنسی حوالہ جات پڑھیں',
    articlesClose: 'بند کریں',
    articlesScientificPaper: 'مصدقہ سائنسی و تحقیقی مقالہ',
    articlesReferences: 'بین الاقوامی سائنسی حوالہ جات (References & Citations)',
    articlesReferencesNotice: 'اس مضمون کے تمام مندرجات مستند بین الاقوامی زرعی جرائد اور اقوام متحدہ کے ادارے برائے زراعت (FAO) کے رہنما خطوط کے تحت تصدیق شدہ ہیں۔',
    articlesRefCount: 'مصدقہ سائنسی حوالہ جات',
    articlesHasReferencesBadge: 'بین الاقوامی سائنسی حوالہ جات کے ساتھ',
    articlesCopyReferences: 'حوالہ جات کاپی کریں',
    articlesCopiedReferences: 'حوالہ جات کاپی ہو گئے!',
    articlesRelatedProducts: 'پیشگامان کی متعلقہ پروڈکٹس',
    articlesTrendingBadge: 'گوگل ٹرینڈز (Google Trends)',
    articlesTrendingLabel: 'زراعت میں سب سے زیادہ تلاش کیا جانے والا موضوع',
    articlesAllCategories: 'تمام کیٹیگریز',

    footerAbout: 'کمپنی اور برانڈ کا تعارف',
    footerCatalog: '۱۶ اہم مصنوعات کا کیٹلاگ',
    footerContact: 'براہ راست رابطہ اور آرڈر',
    footerWorkingHours: 'دفتری اوقات: ہفتہ تا بدھ ۸:۰۰ سے ۱۷:۰۰ | جمعرات ۸:۰۰ سے ۱۳:۰۰',
    footerAllRights: 'جملہ حقوق برائے پیشگامان پائیدار فلات نیک (پرواز نہادہ) محفوظ ہیں۔',
    footerScrollToTop: 'اوپر جائیں',

    consultAssistant: 'زرعی غذائیت کا سمارٹ اسسٹنٹ',
    directWhatsapp: 'واٹس ایپ پر رابطہ',
    directCall: 'براہ راست کال',
    languageSelect: 'زبان منتخب کریں'
  }
};
