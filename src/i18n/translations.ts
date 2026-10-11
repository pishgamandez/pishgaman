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
    slogan: "ما شماره دو هستیم، پس با تمام توان بیشتر تلاش می‌کنیم...",

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
    articlesAuthor: 'نویسنده',
    articlesDate: 'تاریخ انتشار',
    articlesFullRead: 'مطالعه کامل مقاله و رفرنس‌ها',
    articlesClose: 'بستن پنجره',
    articlesScientificPaper: 'مقاله علمی، پژوهشی و کاربردی',
    articlesReferences: 'منابع و مراجع علمی معتبر (References)',
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
    slogan: "We're number two, We try harder...",

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
    articlesAuthor: 'Author',
    articlesDate: 'Published',
    articlesFullRead: 'Read Full Paper & References',
    articlesClose: 'Close Window',
    articlesScientificPaper: 'Peer-Reviewed Applied Agricultural Paper',
    articlesReferences: 'Scientific Citations & Literature (References)',
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
    slogan: "نحن في المركز الثاني، لذلك نبذل قصارى جهدنا ونعمل بجد أكبر...",

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
    articlesAuthor: 'الكاتب',
    articlesDate: 'تاريخ النشر',
    articlesFullRead: 'قراءة المقال بالكامل والمراجع العلمية',
    articlesClose: 'إغلاق النافذة',
    articlesScientificPaper: 'بحث علمي وتطبيقي معتمد',
    articlesReferences: 'المراجع والمصادر العلمية الموثقة (References)',
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
  }
};
