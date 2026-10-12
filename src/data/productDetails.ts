import { ProductDetailData } from '../types';

export const productsDetailMap: Record<string, ProductDetailData> = {
  // 1. CHALLENGER
  'challenger': {
    h1Title: 'کود هیومیک اسید پودری چلنجر (Challenger) - اصلاح‌کننده ساختار خاک و محرک رشد ریشه',
    h1TitleEn: 'Challenger Pure Humic Acid Powder - Soil Conditioner & Root Development Biostimulant',
    h1TitleAr: 'سماد مسحوق حمض الهيوميك چلنجر (Challenger) - مصلح بنية التربة ومحفز الجذور',
    metaTitle: 'کود هیومیک اسید پودری چلنجر | پیشگامان پایدار فلات نیک',
    metaTitleEn: 'Challenger Humic Acid Powder | Pishgaman Falat Nik',
    metaTitleAr: 'مسحوق حمض الهيوميك چلنجر | شركة بيشغامان فلات نيك',
    metaDescription: 'کود هیومیک اسید پودری ۱۰۰٪ محلول چلنجر با پتاسیم، فولویک اسید و ریزمغذی‌ها. اصلاح ساختار خاک، بهبود جذب عناصر و افزایش مقاومت به خشکی و شوری در مزارع و باغات.',
    metaDescriptionEn: 'Challenger 100% water-soluble humic acid powder with fulvic acid, potassium, and micronutrients. Enhances soil structure, nutrient uptake, and stress resilience.',
    metaDescriptionAr: 'مسحوق حمض الهيوميك چلنجر القابل للذوبان بنسبة ١٠٠٪ مع حمض الفولفيك والبوتاسيوم. مصلح فعال للتربة ورافع لامتصاص العناصر.',
    longIntro: 'کود هیومیک اسید پودری چلنجر (Challenger) یکی از کامل‌ترین و غنی‌ترین اصلاح‌کننده‌های بیولوژیک خاک در کشاورزی مدرن است. این ترکیب با دارا بودن درصدهای بالای هیومیک اسید فعال، فولویک اسید با وزن مولکولی پایین و عناصر کلات‌شده همراه، موجب بازسازی ساختمان فیزیکی و شیمیایی خاک‌های فشرده و شور ایران می‌شود. چلنجر با کلات کردن عناصر غذایی بلوکه‌شده در خاک‌های آهکی (به‌ویژه فسفر و آهن)، دسترسی ریشه به منابع غذایی را به حداکثر رسانده و از هدررفت کودهای شیمیایی جلوگیری می‌نماید.',
    longIntroEn: 'Challenger Humic Acid Powder is a premier organic soil conditioner engineered for saline, alkaline, and depleted agricultural soils. Formulated with high-grade active humic substances, bioactive fulvic fractions, chelated potassium, and micronutrients, Challenger enhances cation exchange capacity (CEC), aerates compacted soil strata, and stimulates extensive lateral root branching.',
    longIntroAr: 'يعتبر مسحوق حمض الهيوميك چلنجر (Challenger) أحد أفضل وأقوى مصلحات التربة العضوية، حيث يجمع بين حمض الهيوميك النقي وأحماض الفولفيك مع البوتاسيوم والعناصر الصغرى المخلبية لرفع خصوبة التربة وتنشيط الجذور.',
    analysis: [
      'اسید هیومیک فعال (Active Humic Acid): ۶۵٪',
      'اسید فولویک زیستی (Bioactive Fulvic Acid): ۱۵٪',
      'پتاسیم محلول (K2O): ۱۰٪',
      'عناصر ریزمغذی کلاته (Fe, Zn, Mn, Mg): ۲.۵٪',
      'حلالیت در آب: ۱۰۰٪ بدون کوچک‌ترین رسوب‌گذاری'
    ],
    analysisEn: [
      'Active Humic Acid: 65%',
      'Bioactive Fulvic Acid: 15%',
      'Soluble Potassium (K2O): 10%',
      'Chelated Micronutrients (Fe, Zn, Mn, Mg): 2.5%',
      'Water Solubility: 100% residue-free'
    ],
    analysisAr: [
      'حمض الهيوميك النشط: ٦٥٪',
      'حمض الفولفيك الحيوي: ١٥٪',
      'بوتاسيوم ذائب (K2O): ١٠٪',
      'عناصر صغرى مخلبية (حديد، زنك، منغنيز، مغنيسيوم): ٢.٥٪',
      'قابلية الذوبان في الماء: ١٠٠٪ دون رواسب'
    ],
    tankMixes: [
      { productName: 'سول مکس (گوگرد مایع)', slug: 'sol-max', reason: 'هم‌افزایی بی‌نظیر در اسیدی‌سازی موضعی خاک و آزادسازی فسفر و کلسیم قفل‌شده' },
      { productName: 'تاپ استار (نیتروژن و اسید آمینه)', slug: 'top-star', reason: 'تسریع جذب ازت و رشد رویشی قوی در ابتدای فصل' },
      { productName: 'ردفول (کود آهن EDDHA)', slug: 'redfol', reason: 'تقویت عملکرد کلات آهن و افزایش ماندگاری آهن در ریزوسفر ریشه' }
    ],
    cautions: [
      'قبل از مصرف در مقیاس وسیع، آزمون سازگاری فیزیکی (Jar Test) انجام شود.',
      'از اختلاط مستقیم با کودهای شدیداً اسیدی یا روغن‌های امولسیون‌شونده غلیظ خودداری فرمایید.',
      'در دمای بین ۵ تا ۳۵ درجه سانتی‌گراد و دور از تابش مستقیم نور خورشید نگهداری شود.'
    ],
    cautionsEn: [
      'Perform a jar compatibility test before large-scale tank mixing.',
      'Avoid concentrated mixing with strong acidic chemicals or mineral spray oils.',
      'Store in a cool, dry place between 5°C and 35°C away from direct sunlight.'
    ],
    cautionsAr: [
      'قم بإجراء اختبار التوافق (Jar Test) قبل الخلط بكميات كبيرة.',
      'تجنب الخلط المباشر مع الزيوت المعدنية أو المبيدات شديدة الحموضة.',
      'يُحفظ في مكان جاف وبارد بين ٥ إلى ٣٥ درجة مئوية بعيداً عن أشعة الشمس.'
    ],
    faqs: [
      {
        question: 'بهترین زمان مصرف کود هیومیک اسید پودری چلنجر چه زمانی است؟',
        answer: 'بهترین زمان مصرف چلنجر در آغاز فصل رشد (تورم جوانه‌ها در باغات، کاشت نشاء یا مرحله ۲ تا ۴ برگی در زراعت) و همچنین در مراحل کلیدی رشد رویشی و پر شدن میوه همراه با آب آبیاری است.'
      },
      {
        question: 'آیا چلنجر رسوب‌دهی در سیستم‌های آبیاری قطره‌ای و تیپ دارد؟',
        answer: 'خیر، چلنجر فرمولاسیون ۱۰۰٪ محلول در آب با بالاترین درجه خلوص دارد و به هیچ عنوان فیلترها و نازل‌های سیستم آبیاری قطره‌ای را مسدود نمی‌کند.'
      },
      {
        question: 'چلنجر چگونه به کاهش شوری خاک کمک می‌کند؟',
        answer: 'هیومیک اسید با افزایش ظرفیت تبادل کاتیونی (CEC)، کاتیون‌های سدیم آزاد را محصور کرده و با بهبود نفوذپذیری خاک، آبشویی سدیم به اعماق پایین‌تر را تسهیل می‌سازد.'
      },
      {
        question: 'مقدار مصرف چلنجر در هر هکتار چقدر است؟',
        answer: 'در باغات ۳ تا ۵ کیلوگرم در هکتار، در زراعت ۴ تا ۶ کیلوگرم در هکتار و در کشت‌های گلخانه‌ای ۲۰ تا ۳۰ گرم به ازای هر ۱۰۰۰ متر مربع در هر نوبت آبیاری توصیه می‌شود.'
      },
      {
        question: 'آیا چلنجر را می‌توان با کودهای حاوی کلسیم یا گوگرد مخلوط کرد؟',
        answer: 'ترکیب چلنجر همراه با گوگرد مایع سول مکس در سیستم آبیاری بسیار مفید است؛ اما در تانکرهای غلیظ سمپاشی توصیه می‌شود ابتدا جداگانه حل شده و سپس به مخزن اضافه شوند.'
      }
    ],
    relatedArticleSlugs: ['humic-fulvic-root-development', 'wheat-topdressing-fars', 'soil-salinity-management'],
    relatedProductSlugs: ['sol-max', 'top-star', 'humifarm']
  },

  // 2. HUMIFARM
  'humifarm': {
    h1Title: 'کود هیومیک اسید مایع هیومی فارم (Humifarm) غنی‌شده با NPK - محرک ریشه و تغذیه ارگانیک',
    h1TitleEn: 'Humifarm Liquid Humic Acid Enriched with NPK - Soil Conditioner & Nutrient Uptake Booster',
    h1TitleAr: 'سماد حمض الهيوميك السائل هيومي فارم (Humifarm) المدعم بالنيتروجين والفوسفور والبوتاسيوم',
    metaTitle: 'کود هیومیک مایع هیومی فارم | پیشگامان پایدار فلات نیک',
    metaTitleEn: 'Humifarm Liquid Humic Acid NPK | Pishgaman Falat Nik',
    metaTitleAr: 'سماد هيومي فارم السائل | شركة بيشغامان فلات نيك',
    metaDescription: 'کود هیومیک اسید مایع هیومی فارم با فرمولاسیون تغذیه‌ای غنی‌شده NPK و مواد آلی فعال. افزایش جذب عناصر در اطراف ریشه، تهویه خاک‌های سنگین و ارتقای تناژ در باغات و زراعت.',
    metaDescriptionEn: 'Humifarm Liquid Humic fertilizer enriched with bioavailable NPK and organic matter. Enhances rhizosphere nutrient availability and root zone oxygenation.',
    metaDescriptionAr: 'سماد هيومي فارم السائل الغني بالمواد العضوية النشطة وNPK، مصمم لتنشيط الجذور وزيادة امتصاص العناصر الغذائية في الترب القلوية.',
    longIntro: 'هیومی فارم (Humifarm) یک ترکیب اصلاح‌کننده و تغذیه‌ای مایع بر پایه هیومیک و فولویک اسید طبیعی به همراه ترکیبات متعادل نیتروژن، فسفر و پتاسیم است. این کود به طور اختصاصی جهت مصرف در سیستم‌های آبیاری تحت فشار و غرقابی طراحی شده و به دلیل ساختار مایع غلیظ خود، جذب فوری توسط تارهای کشنده ریشه را رقم می‌زند. مصرف منظم هیومی فارم مانع از تثبیت عناصر ضروری در خاک‌های قلیایی شده و فعالیت میکروارگانیسم‌های مفید خاکزی را به شدت بالا می‌برد.',
    longIntroEn: 'Humifarm is an advanced liquid bio-fertilizer combining humic macromolecules with ready-to-absorb macro elements (NPK). Formulated for ease of application through modern fertigation systems, Humifarm prevents nutrient leaching, enhances capillary root density, and builds lasting drought resistance.',
    longIntroAr: 'هيومي فارم هو سماد عضوي سائل متطور يجمع بين الأحماض الهيوميكية وعناصر NPK الأساسية، مصمم لسهولة الاستخدام عبر شبكات الري وتغذية المحاصيل بفاعلية عالية.',
    analysis: [
      'اسید هیومیک و فولویک مایع: ۱۵٪',
      'ماده آلی کل (Organic Matter): ۲۵٪',
      'نیتروژن کل (N): ۳٪',
      'فسفر قابل دسترس (P2O5): ۲٪',
      'پتاسیم محلول (K2O): ۵٪'
    ],
    analysisEn: [
      'Total Liquid Humic & Fulvic Acids: 15%',
      'Total Organic Matter: 25%',
      'Total Nitrogen (N): 3%',
      'Available Phosphate (P2O5): 2%',
      'Soluble Potash (K2O): 5%'
    ],
    analysisAr: [
      'أحماض الهيوميك والفولفيك السائلة: ١٥٪',
      'المادة العضوية الكلية: ٢٥٪',
      'النيتروجين الكلي (N): ٣٪',
      'الفوسفور المتاح (P2O5): ٢٪',
      'البوتاسيوم الذائب (K2O): ٥٪'
    ],
    tankMixes: [
      { productName: 'چلنجر (هیومیک پودری)', slug: 'challenger', reason: 'برنامه تلفیقی اصلاح درازمدت خاک با مواد آلی غلیظ' },
      { productName: 'تایگر K High (ژل پتاسیم)', slug: 'tiger-k-high', reason: 'هم‌افزایی عالی در مرحله فندقی شدن تا پر شدن میوه' },
      { productName: 'فول شارژر (فروت ست)', slug: 'full-charger', reason: 'تقویت ریشه‌زایی اولیه و آمادگی درختان در شروع بهار' }
    ],
    cautions: [
      'قبل از مصرف گالن را به خوبی تکان دهید تا محلول یکنواخت شود.',
      'در سیستم‌های آبیاری قطره‌ای پس از پایان تزریق کود، خطوط لوله را با آب تمیز شستشو دهید.',
      'در جای خشک و خنک و دور از دسترس اطفال نگهداری شود.'
    ],
    cautionsEn: [
      'Shake container thoroughly before dispensing into tank.',
      'Flush drip irrigation lines with clear water after fertigation.',
      'Store in a well-ventilated dry warehouse away from children.'
    ],
    cautionsAr: [
      'رج العبوة جيداً قبل الاستخدام.',
      'اغسل شبكة الري بالماء النظيف بعد الانتهاء من التسميد.',
      'يُحفظ في مكان بارد وجاف بعيداً عن متناول الأطفال.'
    ],
    faqs: [
      {
        question: 'مزیت هیومی فارم مایع نسبت به هیومیک‌های پودری چیست؟',
        answer: 'هیومی فارم نیاز به حل کردن اولیه ندارد، به سرعت و به طور کاملاً یکنواخت در آب آبیاری توزیع می‌شود و به دلیل داشتن NPK اولیه، گیاه را سریع‌تر شارژ تغذیه‌ای می‌کند.'
      },
      {
        question: 'دوز مصرف هیومی فارم در باغات چقدر است؟',
        answer: '۱۰ تا ۱۵ لیتر در هکتار در نوبت‌های اول و دوم آبیاری بهار، و ۵ تا ۱۰ لیتر در هکتار در اواسط فصل رشد همراه با آب آبیاری توصیه می‌شود.'
      },
      {
        question: 'آیا مصرف هیومی فارم باعث اصلاح خاک‌های رسی و فشرده می‌شود؟',
        answer: 'بله، پلیمرهای هیومیکی موجود در هیومی فارم با دانه‌بندی ذرات خاک و ایجاد خاکدانه‌های پایدار، تهویه و نفوذپذیری آب در خاک‌های سنگین را به طور محسوسی بهبود می‌بخشند.'
      },
      {
        question: 'آیا می‌توان هیومی فارم را به صورت محلول‌پاشی استفاده کرد؟',
        answer: 'هیومی فارم اختصاصاً برای مصرف خاکی و همراه با آب آبیاری طراحی شده است تا بیشترین تماس را با ریشه داشته باشد.'
      },
      {
        question: 'آیا برای زراعت گندم و چغندرقند مناسب است؟',
        answer: 'بسیار ایده‌آل است؛ مصرف ۵ تا ۱۰ لیتر در هکتار در مراحل پنجه‌زنی گندم یا توسعه غده چغندر، عیار قند و وزن نهایی محصول را افزایش می‌دهد.'
      }
    ],
    relatedArticleSlugs: ['humic-fulvic-root-development', 'sugar-beet-nutrition-khorasan', 'wheat-topdressing-fars'],
    relatedProductSlugs: ['challenger', 'tiger-k-high', 'full-charger']
  },

  // 3. JUMPER
  'jumper': {
    h1Title: 'کود محرک رشد و ریشه‌زایی جامپر (Jumper) - توسعه تارهای کشنده و افزایش مقاومت ریشه',
    h1TitleEn: 'Jumper Powerful Root Stimulant & Growth Enhancer - Bioactive Phosphorus & Auxin Precursors',
    h1TitleAr: 'محفز الجذور ومقوي النمو جامبر (Jumper) - منشط الفوسفور الحيوي وتكوين الجذور',
    metaTitle: 'کود محرک ریشه‌زایی جامپر | پیشگامان پایدار فلات نیک',
    metaTitleEn: 'Jumper Root Stimulant | Pishgaman Falat Nik',
    metaTitleAr: 'محفز الجذور جامبر | شركة بيشغامان فلات نيك',
    metaDescription: 'کود جامپر محرک تخصصی ریشه‌زایی با فسفر زیستی، آمینواسیدهای محرک اکسین و روی. تضمین استقرار سریع نشاء، پنجه‌زنی غلات و توسعه انفجاری تارهای کشنده در خاک.',
    metaDescriptionEn: 'Jumper is a specialized rooting bio-stimulant formulated with bioavailable phosphorus, auxin precursors, and zinc for vigorous rhizosphere establishment.',
    metaDescriptionAr: 'سماد جامبر المنشط لنمو الجذور والشعيرات الجذرية، غني بالفوسفور المحفز والزنك لضمان تجذير سريع للشتلات ومقاومة أمراض التربة.',
    longIntro: 'کود جامپر (Jumper) یکی از نوآورانه‌ترین فرمولاسیون‌های بیواستیمولانت کشور جهت القای سریع و انفجاری ریشه‌زایی در باغات، مزارع و نشاءکاری‌ها است. این محصول با ترکیب فسفر با فراهمی زیستی بالا، پیش‌سازهای هورمون اکسین (L-Tryptophan)، آمینواسیدهای ال-پرولین و روی کلاته، سرعت تشکیل تارهای کشنده ریشه را چند برابر می‌کند. استقرار سریع نشاء پس از انتقال، کاهش تنش شوک نشاءکاری و افزایش چشمگیر جذب آب و عناصر از مزایای متمایز جامپر است.',
    longIntroEn: 'Jumper Root Stimulant is formulated to trigger rapid adventitious and lateral rooting in fruit trees, transplanted seedlings, and field crops. By supplying concentrated bioavailable phosphorus along with root-induction amino acids and zinc, Jumper shortens establishment lag and enhances nutrient interception.',
    longIntroAr: 'جامبر هو مركب متطور لتحفيز نمو وتفرع الجذور، يحتوي على الفوسفور عالي التوافر الحيوي والأحماض الأمينية والزنك لتفادي صدمة الشتل وتنشيط التغذية المبكرة.',
    analysis: [
      'فسفر قابل دسترس (P2O5): ۲۵٪',
      'نیتروژن کل (N): ۱۰٪',
      'روی کلاته EDTA (Zn): ۳٪',
      'اسیدهای آمینه آزاد القاکننده اکسین: ۵٪',
      'عصاره بیواکتیو گیاهی محرک ریشه: ۲٪'
    ],
    analysisEn: [
      'Available Phosphate (P2O5): 25%',
      'Total Nitrogen (N): 10%',
      'Chelated Zinc (Zn-EDTA): 3%',
      'Free Auxin-Inducing Amino Acids: 5%',
      'Bioactive Root-Stimulating Plant Extracts: 2%'
    ],
    analysisAr: [
      'الفوسفور المتاح (P2O5): ٢٥٪',
      'النيتروجين الكلي: ١٠٪',
      'زنك مخلبي (Zn-EDTA): ٣٪',
      'أحماض أمينية محفزة للإكسين: ٥٪',
      'مستخلصات نباتية حيوية منشطة للجذور: ٢٪'
    ],
    tankMixes: [
      { productName: 'فول شارژر (فروت ست)', slug: 'full-charger', reason: 'هم‌افزایی در گرده‌افشانی و تامین همزمان انرژی فسفری و بور' },
      { productName: 'تایگر P High (ژل فسفر)', slug: 'tiger-p-high', reason: 'تقویت تامین فسفر در خاک‌های شدیداً فقیر یا اوایل پنجه‌زنی' },
      { productName: 'چلنجر (هیومیک اسید)', slug: 'challenger', reason: 'افزایش جذب فسفر و محافظت ریشه‌های نوپا در برابر شوری' }
    ],
    cautions: [
      'در ساعات خنک صبح یا غروب مصرف شود.',
      'از اختلاط با ترکیبات حاوی مس یا گوگرد غلیظ در سمپاشی خودداری شود.',
      'ظرف در دمای بالای صفر و دور از یخبندان نگهداری شود.'
    ],
    cautionsEn: [
      'Apply during cooler hours of early morning or late afternoon.',
      'Do not tank-mix with copper fungicides or concentrated sulfur.',
      'Protect from freezing temperatures during storage.'
    ],
    cautionsAr: [
      'يُفضل الرش أو الحقن في الساعات الباكرة من الصباح أو المساء.',
      'تجنب الخلط مع المركبات النحاسية أو الكبريتية المركزة.',
      'يُحفظ بعيداً عن درجات التجمد وأشعة الشمس.'
    ],
    faqs: [
      {
        question: 'چگونه از جامپر برای نشاءکاری و انتقال نهال استفاده کنیم؟',
        answer: 'بهترین روش ریشه‌دوانی، غوطه‌ور کردن ریشه نشاء یا ریشه لخت نهال در محلول ۱ در ۱۰۰۰ جامپر (۱۰۰ سی‌سی در ۱۰۰ لیتر آب) قبل از کاشت، و سپس یک نوبت آبیاری با دوز ۲ تا ۳ لیتر در هکتار است.'
      },
      {
        question: 'آیا جامپر به مقاومت گیاه در برابر بیماری‌های قارچی ریشه کمک می‌کند؟',
        answer: 'بله؛ با نوسازی مداوم بافت ریشه و افزایش ضخامت دیواره تارهای کشنده، از نفوذ قارچ‌های خاکزی نظیر پیتیوم و فوزاریوم پیشگیری می‌نماید.'
      },
      {
        question: 'دوز محلول‌پاشی برگی جامپر چقدر است؟',
        answer: 'در محلول‌پاشی برگی دوز ۱.۵ تا ۲ لیتر در ۱۰۰۰ لیتر آب برای مزارع و باغات توصیه می‌شود.'
      },
      {
        question: 'آیا در مزارع برنج گیلان و مازندران کاربرد دارد؟',
        answer: 'بسیار موثر است؛ مصرف جامپر در خزانه برنج و در مرحله نشاءکاری باعث ریشه‌دهی محکم، پنجه‌زنی فوق‌العاده و مقاومت در برابر ورس می‌شود.'
      },
      {
        question: 'آیا جامپر با کودهای هیومیک قابل اختلاط است؟',
        answer: 'بله، ترکیب جامپر با چلنجر یا هیومی فارم هم‌افزایی چشمگیری در رشد ریشه و فعال‌سازی بیولوژی خاک ایجاد می‌کند.'
      }
    ],
    relatedArticleSlugs: ['rice-fertilization-guilan', 'seaweed-extract', 'humic-fulvic-root-development'],
    relatedProductSlugs: ['full-charger', 'tiger-p-high', 'challenger']
  },

  // 4. FULL CHARGER
  'full-charger': {
    h1Title: 'کود فروت ست مایع فول شارژر (Full Charger) - تقویت گرده‌افشانی، تلقیح و مهار ریزش جوانه گل',
    h1TitleEn: 'Full Charger Fruit Set Biostimulant - Boron, Zinc & Nitrogen Synergy for Pollination Success',
    h1TitleAr: 'سماد الفروت ست فول شارجر (Full Charger) - منشط التلقيح وعقد الثمار والزنك والبورون',
    metaTitle: 'کود فروت ست فول شارژر | پیشگامان پایدار فلات نیک',
    metaTitleEn: 'Full Charger Fruit Set Fertilizer | Pishgaman Falat Nik',
    metaTitleAr: 'سماد الفروت ست فول شارجر | شركة بيشغامان فلات نيك',
    metaDescription: 'کود فروت ست فول شارژر با ترکیب سینرژیک روی، بُر، نیتروژن و اسیدهای آمینه. افزایش طول عمر دانه گرده، بهبود تلقیح گل‌ها و جلوگیری از سال‌آوری و ریزش میوه‌ها.',
    metaDescriptionEn: 'Full Charger Fruit Set formulation combines high-grade Zinc, Boron, and bio-available Nitrogen to boost pollen tube viability, blossom retention, and uniform fruit set.',
    metaDescriptionAr: 'سماد فول شارجر المتخصص في مرحلة عقد الثمار (فروت ست)، يجمع بين الزنك والبورون والنيتروجين لتعزيز التلقيح ومنع تساقط الأزهار والثمار.',
    longIntro: 'فول شارژر (Full Charger) ترکیب تخصصی فروت ست (Fruit Set) شرکت پیشگامان پایدار فلات نیک است که جهت غلبه بر چالش‌های گرده‌افشانی ضعیف، سرمازدگی بهاره و ریزش گل‌ها در درختان میوه و صیفی‌جات فرموله شده است. این محصول با داشتن هم‌افزایی همزمان عناصر روی (Zn)، بُر (B)، نیتروژن آلی و آمینواسیدهای فعال، رشد لوله گرده را تسریع کرده و مدت زمان پذیرش مادگی گل را افزایش می‌دهد. مصرف آن در دو نوبت حیاتی (پس از برداشت در پاییز و زمان تورم جوانه‌ها در اواخر زمستان) بیشترین بازدهی باردهی را تضمین می‌کند.',
    longIntroEn: 'Full Charger Fruit Set is a dedicated foliar biostimulant formulated with high-purity complexed Zinc, Boron, and active amino nitrogen. By extending pollen tube longevity and optimizing carbohydrate mobilization into floral buds, Full Charger prevents early blossom abort and alternate bearing.',
    longIntroAr: 'يعتبر فول شارجر خلطة علمية متكاملة لزيادة نسبة العقد ومنع تساقط الأزهار، مدعماً بالزنك والبورون والأحماض الأمينية لحماية البراعم من الصقيع الربيعي.',
    analysis: [
      'روی کلاته قابل جذب (Zn): ۸٪',
      'بُر قابل حل در آب (B): ۴٪',
      'نیتروژن آلی و معدنی (N): ۶٪',
      'اسیدهای آمینه آزاد ال-پرولین و گلایسین: ۵٪',
      'عوامل انتقال قند و نفوذپذیری بافتی: ۲٪'
    ],
    analysisEn: [
      'Complexed Bioavailable Zinc (Zn): 8%',
      'Water-Soluble Boron (B): 4%',
      'Organic & Mineral Nitrogen (N): 6%',
      'Free L-Amino Acids (Proline & Glycine): 5%',
      'Phloem Mobility & Sugar Translocation Promoters: 2%'
    ],
    analysisAr: [
      'زنك مخلبي سريع الامتصاص: ٨٪',
      'بورون ذائب في الماء: ٤٪',
      'نيتروجين عضوي ومعدني: ٦٪',
      'أحماض أمينية حرة: ٥٪',
      'محفزات النقل والامتصاص السريع: ٢٪'
    ],
    tankMixes: [
      { productName: 'ردفول (کود آهن EDDHA)', slug: 'redfol', reason: 'تغذیه مکمل پاییزه جهت شارژ مخازن چوبی درختان میوه' },
      { productName: 'تایگر K High (ژل پتاسیم)', slug: 'tiger-k-high', reason: 'هم‌افزایی عالی در پس از برداشت جهت مقاومت به یخبندان زمستانه' },
      { productName: 'دوپینگ (محرک رشد و رنگ)', slug: 'doping', reason: 'تقویت انرژی جوانه‌زنی و باز شدن یکنواخت شکوفه‌ها در بهار' }
    ],
    cautions: [
      'از محلول‌پاشی در زمان باز بودن کامل شکوفه‌ها خودداری شود (محلول‌پاشی در زمان تورم جوانه یا پس از ریزش گلبرگ‌ها انجام گیرد).',
      'با ترکیبات شدیداً قلیایی یا روغن‌های زمستانه ولک با دوز بالا همزمان بدون تست اختلاط ترکیب نشود.',
      'در شرایط دمایی ملایم و بدون وزش باد شدید سمپاشی انجام گیرد.'
    ],
    cautionsEn: [
      'Do not apply during full bloom; spray at swollen bud stage or post-petal fall.',
      'Avoid tank-mixing with strong alkaline chemicals or high-dose dormant spray oils without jar testing.',
      'Apply under calm weather conditions with optimal leaf turgidity.'
    ],
    cautionsAr: [
      'تجنب الرش أثناء التفتح الكامل للأزهار؛ يُرش عند انتفاخ البراعم أو بعد تساقط البتلات.',
      'تجنب الخلط مع المركبات القلوية القوية أو الزيوت الشتوية بتركيز عالٍ دون اختبار مسبق.',
      'يُفضل الرش في أجواء هادئة بدون رياح قوية.'
    ],
    faqs: [
      {
        question: 'چرا دو مرحله محلول‌پاشی فول شارژر ضروری است؟',
        answer: 'مرحله اول (پس از برداشت و قبل از خزان برگ) عناصر را در بافت چوبی ذخیره می‌کند تا درخت در بهار با ذخیره پر بیدار شود. مرحله دوم (زمان تورم جوانه در اواخر زمستان) انرژی فوری برای گرده‌افشانی و لقاح موفق را تامین می‌کند.'
      },
      {
        question: 'دوز مصرف فول شارژر در ۱۰۰۰ لیتر آب چقدر است؟',
        answer: 'دوز استاندارد محلول‌پاشی ۲ تا ۳ لیتر در ۱۰۰۰ لیتر آب برای درختان میوه (پسته، سیب، مرکبات، گردو) و ۱ تا ۲ لیتر در هکتار برای زراعت و صیفی‌جات است.'
      },
      {
        question: 'آیا فول شارژر به کاهش سال‌آوری (تناوب باردهی) کمک می‌کند؟',
        answer: 'بله؛ با تقویت تلقیح و جلوگیری از تخلیه بیش از حد ذخایر گیاهی، تعادل باردهی بین سال‌های آور و نیاور را به طور موثری برقرار می‌کند.'
      },
      {
        question: 'آیا برای پسته و مرکبات که مشکل پوکی دانه یا ریزش دارند موثر است؟',
        answer: 'فوق‌العاده موثر است؛ عنصر بُر با تحریک لوله گرده و عنصر روی با سنتز هورمون اکسین مانع از پوکی مغز پسته و ریزش خردادماه مرکبات می‌شوند.'
      },
      {
        question: 'آیا فول شارژر قابلیت مصرف همراه با آب آبیاری را دارد؟',
        answer: 'اگرچه اثر اصلی آن از طریق محلول‌پاشی برگی روی جوانه‌هاست، اما در صورت نیاز می‌توان ۳ تا ۵ لیتر در هکتار همراه با آب آبیاری نیز مصرف نمود.'
      }
    ],
    relatedArticleSlugs: ['zinc-boron-fruit-setting', 'apple-alternate-bearing-azerbaijan', 'citrus-winter-nutrition-mazandaran'],
    relatedProductSlugs: ['redfol', 'tiger-k-high', 'doping']
  },

  // 5. REDFOL
  'redfol': {
    h1Title: 'کود آهن کلاته ردفول (Redfol) با کلات EDDHA ارتو-ارتو بالا - درمان قطعی کلروز و زردی برگ',
    h1TitleEn: 'Redfol Premium Fe-EDDHA Iron Chelate - High Ortho-Ortho Isomer for Calcareous Alkaline Soils',
    h1TitleAr: 'سماد الحديد المخلبي ريدفول (Redfol) بنسبة أورثو-أورثو عالية للترب الكلسية والقلوية',
    metaTitle: 'کود آهن کلاته ردفول EDDHA | پیشگامان پایدار فلات نیک',
    metaTitleEn: 'Redfol EDDHA Iron Chelate | Pishgaman Falat Nik',
    metaTitleAr: 'سماد الحديد المخلبي ريدفول | شركة بيشغامان فلات نيك',
    metaDescription: 'کود آهن ردفول ۶٪ با کلات پایدار Fe-EDDHA و بالاترین درصد پیوند ارتو-ارتو. درمان سریع زردی بین رگبرگی در خاک‌های آهکی با pH تا ۹ در باغات پسته، مرکبات و زراعت.',
    metaDescriptionEn: 'Redfol 6% Fe-EDDHA Iron Chelate features maximal Ortho-Ortho isomer stability, delivering swift recovery from iron chlorosis in high-pH calcareous soils.',
    metaDescriptionAr: 'سماد الحديد ريدفول ٦٪ بمخلب EDDHA الفائق الثبات في الأراضي الجيرية حتى pH=9، لعلاج اصفرار الأوراق وزيادة كفاءة التمثيل الضوئي.',
    longIntro: 'کود کلات آهن ردفول (Redfol) بالاترین استاندارد درمان کمبود آهن و زردی برگ (Chlorosis) در شرایط خاک‌های سنگین و قلیایی ایران است. در خاک‌های آهکی با pH بالای ۷.۵، فرم‌های معمولی آهن رسوب کرده و غیرقابل جذب می‌شوند. ردفول با بهره‌گیری از مولکول پایدار EDDHA با درصد ایزومر ارتو-ارتو (Ortho-Ortho) فراتر از ۴.۸٪، یون آهن را تا pH=9 کاملاً در محلول خاک حفاظت کرده و بدون ایجاد سمیت، آن را مستقیماً به آوندهای چوبی ریشه تحویل می‌دهد.',
    longIntroEn: 'Redfol Iron Chelate is specifically synthesized for extreme alkaline, calcareous conditions where conventional iron salts or weak chelates fail. Possessing superior Ortho-Ortho stereoisomer binding, Redfol guarantees persistent iron bioavailability from early spring root flush through peak summer demand.',
    longIntroAr: 'ريدفول هو سماد حديد مخلبي عالي النقاوة بتقنية EDDHA مع نسبة أورثو-أورثو استثنائية، مصمم لمقاومة الترسيب الكلسي في الترب القلوية وتأمين اخضرار فوري للنبات.',
    analysis: [
      'آهن کل کلاته (Fe Water-Soluble): ۶٪',
      'ایزومر فعال ارتو-ارتو (Ortho-Ortho Isomer): ۴.۸٪ تضمین‌شده',
      'پایداری کلات در محدوده اسیدیته: pH ۳ تا ۹.۵',
      'شکل فیزیکی: میکروگرانول‌های قرمز تیره با حلالیت سریع',
      'فاقد سدیم و کلر مضر برای ریشه'
    ],
    analysisEn: [
      'Total Water-Soluble Iron (Fe): 6%',
      'Active Ortho-Ortho Isomer: 4.8% guaranteed',
      'Chelate pH Stability Window: pH 3.0 to 9.5',
      'Physical Form: Dark red dust-free microgranules',
      'Completely free of phytotoxic sodium and chlorides'
    ],
    analysisAr: [
      'الحديد الكلي الذائب (Fe): ٦٪',
      'نسبة أورثو-أورثو الفعالة: ٤.٨٪ مضمونة',
      'ثبات المخلب في مدى الحموضة: pH ٣ إلى ٩.٥',
      'الشكل الفيزيائي: حبيبات دقيقة حمراء داكنة سريعة الذوبان',
      'خالٍ تماماً من الصوديوم والكلور الضار'
    ],
    tankMixes: [
      { productName: 'سول مکس (گوگرد مایع)', slug: 'sol-max', reason: 'اسیدی کردن موضعی ریزوسفر ریشه و افزایش سرعت جذب آهن کلاته' },
      { productName: 'سالت استاپ (ضد شوری)', slug: 'salt-stop', reason: 'حذف سدیم مزاحم و تسهیل تبادل کاتیونی آهن در باغات پسته' },
      { productName: 'فول شارژر (فروت ست)', slug: 'full-charger', reason: 'برنامه تلفیقی تامین عناصر ریزمغذی کلیدی درختان' }
    ],
    cautions: [
      'ردفول به نور حساس است؛ توصیه می‌شود کود پس از مصرف خاکی فوراً با آب آبیاری پوشش داده شود.',
      'این کود اختصاصاً برای مصرف خاکی و سیستم‌های آبیاری (Fertigation) طراحی شده و مصرف محلول‌پاشی برگی توصیه نمی‌شود.',
      'در بسته‌بندی اصلی و دور از تابش آفتاب و رطوبت انبار شود.'
    ],
    cautionsEn: [
      'Fe-EDDHA is photodegradable; apply via soil injection or immediately follow with irrigation water.',
      'Formulated exclusively for soil fertigation; foliar spraying is not recommended.',
      'Store in original airtight packaging shielded from sunlight.'
    ],
    cautionsAr: [
      'مخلب EDDHA حساس للضوء؛ يُنصح بالري فور إضافة السماد إلى التربة.',
      'مخصص للتسميد الأرضي وشبكات الري، ولا يُنصح برشه على الأوراق.',
      'يُحفظ في عبوته الأصلية بعيداً عن الرطوبة وأشعة الشمس.'
    ],
    faqs: [
      {
        question: 'چرا درصد ارتو-ارتو در کود آهن تا این حد مهم است؟',
        answer: 'پیوند ارتو-ارتو مستحکم‌ترین حالت اتصال آهن در مولکول EDDHA است که اجازه نمی‌دهد کلسیم و کربنات‌های خاک آهکی، آهن را جایگزین و رسوب دهند؛ هرچه این درصد بالاتر باشد، دوام و اثرگذاری کود در خاک بیشتر است.'
      },
      {
        question: 'میزان مصرف ردفول برای هر درخت چقدر است؟',
        answer: 'برای درختان جوان ۱۵ تا ۳۰ گرم، برای درختان بارده متوسط ۴۰ تا ۷۰ گرم و برای درختان کهنسال و بزرگ (نظیر پسته و مرکبات) ۷۰ تا ۱۰۰ گرم به ازای هر درخت همراه با آب آبیاری توصیه می‌شود.'
      },
      {
        question: 'چه مدت پس از مصرف ردفول، زردی برگ‌ها برطرف می‌شود؟',
        answer: 'معمولاً بین ۷ تا ۱۴ روز پس از مصرف و آبیاری، برگ‌های زرد شروع به سنتز مجدد کلروفیل کرده و رنگ سبز تیره شاداب بازمی‌گردد.'
      },
      {
        question: 'آیا ردفول برای مزارع و صیفی‌جات نیز کاربرد دارد؟',
        answer: 'بله؛ در مزارع گوجه‌فرنگی، فلفل، توت‌فرنگی و گیاهان گلخانه‌ای با دوز ۳ تا ۵ کیلوگرم در هکتار همراه با آب آبیاری کاملاً موثر است.'
      },
      {
        question: 'آیا ردفول با کودهای گوگردی و هیومیکی قابل ترکیب است؟',
        answer: 'بله؛ ترکیب همزمان با سول مکس و چلنجر یک راه‌حل جامع برای خاک‌های آهکی به شمار می‌رود.'
      }
    ],
    relatedArticleSlugs: ['iron-eddha-chlorosis', 'date-palm-chlorosis-khuzestan', 'soil-salinity-management'],
    relatedProductSlugs: ['sol-max', 'salt-stop', 'full-charger']
  },

  // 6. DOPING
  'doping': {
    h1Title: 'کود محرک رشد و رنگ‌آوری دوپینگ (Doping) - افزایش قند (Brix)، درشت شدن میوه و ضد شوک',
    h1TitleEn: 'Doping Fruit Sizing & Coloration Biostimulant - Free Amino Acids, Potassium & Plant Extracts',
    h1TitleAr: 'محفز النمو والتلوين دوپينغ (Doping) - رفع السكريات وتحجيم الثمار ومقاومة الإجهاد',
    metaTitle: 'محرک رشد و رنگ‌آوری دوپینگ | پیشگامان پایدار فلات نیک',
    metaTitleEn: 'Doping Fruit Sizing Biostimulant | Pishgaman Falat Nik',
    metaTitleAr: 'محفز النمو والتلوين دوپينغ | شركة بيشغامان فلات نيك',
    metaDescription: 'کود محرک رشد و رنگ‌آوری دوپینگ با آمینواسیدهای ال، پتاسیم آلی و عصاره‌های پیش‌ساز رنگیزه آنتوسیانین. درشت‌کننده سریع میوه، بالابرنده شاخص بریکس و ماندگاری انبارداری.',
    metaDescriptionEn: 'Doping Biostimulant accelerates fruit sizing, uniform skin pigmentation, and Brix elevation through bio-active L-amino acids, organic potash, and cellular tonics.',
    metaDescriptionAr: 'مركب دوپينغ المحفز للنمو والتلوين السريع، غني بالأحماض الأمينية والبوتاسيوم لرفع نسبة السكر وحجم الثمار وتحسين جودة التسويق.',
    longIntro: 'دوپینگ (Doping) یک بیواستیمولانت بسیار قدرتمند و چندمنظوره برای مراحل بحرانی رشد میوه، فندقی شدن تا برداشت است. این فرمولاسیون اختصاصی حاوی زنجیره‌ای از آمینواسیدهای چپ‌گرد فعال، پتاسیم قابل جذب با سرعت نفوذ بالا، و ترکیبات آلی محرک سنتز آنتوسیانین و رنگیزه‌های طبیعی است. دوپینگ با هدایت شیره پرورده از برگ‌ها به سمت بافت میوه، وزن حجمی و شاخص قند (Brix) را بالا برده و پوست میوه را در برابر آفتاب‌سوختگی و ترک‌خوردگی تقویت می‌سازد.',
    longIntroEn: 'Doping is an intensive harvest-quality biostimulant formulated to overcome physiological sluggishness during fruit cell expansion and ripening. By directing photosynthetic assimilates towards sink tissues, Doping enhances dry matter, uniform color breaks, and fruit shelf-life.',
    longIntroAr: 'دوپينغ هو تركيبة بيولوجية فائقة الفاعلية لتحفيز التحجيم والتلوين الطبيعي، يعزز انتقال الكربوهيدرات إلى الثمار ويزيد من مقاومة الإجهادات الحرارية.',
    analysis: [
      'پتاسیم محلول (K2O): ۲۰٪',
      'اسیدهای آمینه آزاد ال-پرولین و گلوتامیک: ۱۰٪',
      'عصاره‌های بیواکتیو آلی و ویتامین‌ها: ۵٪',
      'نیتروژن آلی با جذب ملایم (N): ۳٪',
      'فسفر در دسترس (P2O5): ۳٪'
    ],
    analysisEn: [
      'Soluble Potash (K2O): 20%',
      'Free L-Amino Acids (Proline & Glutamic): 10%',
      'Bioactive Plant Extracts & Vitamins: 5%',
      'Slow-Assimilating Organic Nitrogen: 3%',
      'Available Phosphate (P2O5): 3%'
    ],
    analysisAr: [
      'بوتاسيوم ذائب (K2O): ٢٠٪',
      'أحماض أمينية حرة نقية: ١٠٪',
      'مستخلصات نباتية حيوية وفيتامينات: ٥٪',
      'نيتروجين عضوي: ٣٪',
      'فوسفور متاح: ٣٪'
    ],
    tankMixes: [
      { productName: 'فیکشن (عصاره جلبک دریایی)', slug: 'fiction', reason: 'هم‌افزایی بی‌نظیر هورمونی سیتوکینین و آمینواسید در تقسیم سلولی میوه' },
      { productName: 'تایگر K High (ژل پتاسیم)', slug: 'tiger-k-high', reason: 'دستیابی به حداکثر تناژ و وزن دانه‌ها در روزهای پایانی رشد' },
      { productName: 'سیلیگارد (سیلیکات پتاسیم)', slug: 'siligard', reason: 'استحکام دیواره پوست میوه و مهار ترکیدگی ناشی از نوسان آبیاری' }
    ],
    cautions: [
      'در گرمای شدید ظهر سمپاشی نشود؛ ساعات خنک صبحگاهی بهترین زمان اثرگذاری است.',
      'از اختلاط با ترکیبات مس و گوگرد غلیظ بدون تست جداگانه خودداری گردد.',
      'دوز مصرف به دقت رعایت شود و از بیش‌بود سمپاشی اجتناب فرمایید.'
    ],
    cautionsEn: [
      'Avoid foliar application during midday heat; spray in the cool morning.',
      'Do not mix with concentrated copper or sulfur compounds without prior testing.',
      'Adhere strictly to recommended dosages to prevent vegetative imbalance.'
    ],
    cautionsAr: [
      'تجنب الرش أثناء الظهيرة واشتداد الحرارة؛ الصباح الباكر هو الأنسب.',
      'تجنب الخلط مع المركبات النحاسية أو الكبريتية المركزة.',
      'التزم بالجرعات الموصى بها بدقة.'
    ],
    faqs: [
      {
        question: 'بهترین زمان مصرف دوپینگ برای باغات سیب و مرکبات چیست؟',
        answer: 'بهترین زمان، دو تا سه نوبت محلول‌پاشی با فاصله ۱۵ روز از زمان فندقی شدن میوه تا ۳ هفته قبل از برداشت است تا رنگ‌پذیری و سایز عالی حاصل شود.'
      },
      {
        question: 'آیا دوپینگ باعث تسریع رسیدگی و رنگ‌آوری طبیعی می‌شود؟',
        answer: 'بله؛ ترکیبات طبیعی دوپینگ با القای سنتز بیوشیمیایی رنگیزه‌های میوه، رنگ‌پذیری یکنواخت بدون نرم شدن بافت را به همراه دارند.'
      },
      {
        question: 'میزان مصرف دوپینگ در محلول‌پاشی چقدر است؟',
        answer: '۲ تا ۲.۵ لیتر در ۱۰۰۰ لیتر آب در محلول‌پاشی برگی، یا ۵ تا ۷ لیتر در هکتار همراه با آب آبیاری توصیه می‌شود.'
      },
      {
        question: 'آیا دوپینگ به تحمل گرمای شدید تابستان کمک می‌کند؟',
        answer: 'بله؛ به دلیل دارا بودن اسید آمینه ال-پرولین بالا، فشار اسمزی سلول‌ها حفظ شده و از سوختگی برگ و میوه جلوگیری می‌گردد.'
      },
      {
        question: 'آیا دوپینگ برای صیفی‌جات (گوجه‌فرنگی و خربزه) موثر است؟',
        answer: 'بسیار کاربردی است و باعث افزایش قند، براق شدن پوست گوجه‌فرنگی و یکنواختی رسیدن محصول در برداشت‌های متوالی می‌شود.'
      }
    ],
    relatedArticleSlugs: ['heat-drought-stress', 'apple-alternate-bearing-azerbaijan', 'cotton-boll-retention-golestan'],
    relatedProductSlugs: ['fiction', 'tiger-k-high', 'siligard']
  },

  // 7. SILIGARD
  'siligard': {
    h1Title: 'سیلیکات پتاسیم سیلیگارد (Siligard) - محافظ فیزیکی سلول، ضد تنش خشکی، گرما و مهار آفات مکنده',
    h1TitleEn: 'Siligard Potassium Silicate - Mechanical Armor against Heat Stress, Drought & Sucking Pests',
    h1TitleAr: 'سيليكات البوتاسيوم سيليغارد (Siligard) - الدرع الواقي من الجفاف والحرارة والآفات الماصة',
    metaTitle: 'سیلیکات پتاسیم سیلیگارد | پیشگامان پایدار فلات نیک',
    metaTitleEn: 'Siligard Potassium Silicate | Pishgaman Falat Nik',
    metaTitleAr: 'سيليكات البوتاسيوم سيليغارد | شركة بيشغامان فلات نيك',
    metaDescription: 'کود سیلیکات پتاسیم مایع سیلیگارد با سیلیس و پتاسیم محلول. تشکیل لایه محافظ کوتیکولی، کاهش تبخیر و تعرق، مهار پسیل پسته و شته‌ها، و ارتقای مقاومت به خشکی.',
    metaDescriptionEn: 'Siligard Potassium Silicate fortifies epidermal plant cell walls with amorphous silica deposits, curbing water loss and establishing physical barriers to pests.',
    metaDescriptionAr: 'سماد سيليكات البوتاسيوم سيليغارد لحماية الأنسجة النباتية، تقليل النتح المائي ومكافحة حشرة البسيلا والتربس والتريبس في ظروف الجفاف.',
    longIntro: 'سیلیگارد (Siligard) محصول پیشرفته شرکت پیشگامان بر پایه سیلیکات پتاسیم مایع با حلالیت و پایداری فوق‌العاده است. این ترکیب با رسوب سیلیس آمورف در دیواره اپیدرم برگ‌ها و ساقه‌ها، یک لایه زرهی مقاوم در برابر گرمازدگی، تبخیر آب و نیش حشرات مکنده (نظیر پسیل پسته، شته‌ها و زنجرک‌ها) ایجاد می‌نماید. سیلیگارد با مهار تنش‌های اسمزی، پژمردگی بوته‌ها در اوج آفتاب تابستان را به حداقل رسانده و سفتی و مقاومت فیزیکی بافت میوه را به شکل چشمگیری ارتقا می‌بخشد.',
    longIntroEn: 'Siligard Potassium Silicate acts as a dual-action nutrition and biomechanical shield. Once applied, silicon polymerizes beneath the leaf cuticle, reducing transpirational cooling losses, stiffening stems against lodging, and deterring feeding by piercing-sucking insects.',
    longIntroAr: 'سيليغارد هو مركب سيليكات البوتاسيوم عالي النقاء، يعمل كدرع ميكانيكي لتقوية جدر الخلايا النباتية ضد الإجهاد الحراري وأشعة الشمس الحارقة والآفات.',
    analysis: [
      'سیلیس محلول زیستی (SiO2): ۲۲٪',
      'پتاسیم محلول (K2O): ۱۲٪',
      'چگالی محلول: ۱.۳۵ گرم بر سانتی‌متر مکعب',
      'شکل فیزیکی: مایع زلال با حلالیت کامل',
      'خاصیت قلیایی ایمن با اثر قارچ‌کشی سطحی'
    ],
    analysisEn: [
      'Bioavailable Soluble Silica (SiO2): 22%',
      'Soluble Potash (K2O): 12%',
      'Specific Density: 1.35 g/cm³',
      'Physical Form: Clear stable liquid',
      'Mild surface alkaline action supporting fungal suppression'
    ],
    analysisAr: [
      'السيليكا الذائبة الحيوية (SiO2): ٢٢٪',
      'بوتاسيوم ذائب (K2O): ١٢٪',
      'الكثافة: ١.٣٥ جم/سم٣',
      'الشكل: سائل شفاف عالي الذوبان',
      'أثر وقائي داعم ضد الأمراض الفطرية'
    ],
    tankMixes: [
      { productName: 'تایگر K High (ژل پتاسیم)', slug: 'tiger-k-high', reason: 'تغذیه پتاسیمی سنگین همراه با محافظت سلولی در برابر تنش خشکی' },
      { productName: 'دوپینگ (محرک رشد)', slug: 'doping', reason: 'کاهش استرس گرمایی تابستانه و افزایش استحکام بافت میوه' },
      { productName: 'سول مکس (گوگرد مایع)', slug: 'sol-max', reason: 'مدیریت آفات مکنده و بیماری‌های قارچی در باغات با نوبت‌های مجزا' }
    ],
    cautions: [
      'سیلیگارد دارای pH قلیایی است؛ هرگز با کودهای شدیداً اسیدی یا فلزات کلاته‌نشده در یک ظرف مخلوط نشود.',
      'محلول‌پاشی در ساعات بسیار خنک بعدازظهر یا صبح زود انجام گیرد.',
      'توصیه می‌شود قبل از هرگونه اختلاط تانکری، تست سازگاری شیشه‌ای انجام شود.'
    ],
    cautionsEn: [
      'Siligard has an alkaline pH; do not mix directly with strong acids or unchelated heavy metals.',
      'Spray during cool morning or evening hours to avoid flash drying.',
      'Always perform a standard jar test before mixing with crop protection chemicals.'
    ],
    cautionsAr: [
      'سيليغارد ذو درجة حموضة قلوية؛ لا يخلط مباشرة مع الأحماض القوية أو المعادن الثقيلة غير المخلبية.',
      'يُرش في ساعات الصباح الباكر أو المساء.',
      'يُجرى اختبار الخلط في وعاء صغير قبل التطبيق الحقلي.'
    ],
    faqs: [
      {
        question: 'چگونه سیلیگارد به کنترل پسیل پسته (شیره خشک) کمک می‌کند؟',
        answer: 'سیلیس با رسوب در کوتیکول برگ، برگ‌ها را سخت و غیرقابل نفوذ برای خرطوم پسیل می‌کند؛ همچنین با چسبندگی و خفه‌سازی پوره‌ها، جمعیت آفت را بدون سموم شیمیایی کاهش می‌دهد.'
      },
      {
        question: 'دوز مصرف سیلیگارد در محلول‌پاشی چقدر است؟',
        answer: '۲ تا ۳ لیتر در ۱۰۰۰ لیتر آب برای درختان میوه و صیفی‌جات در ۲ تا ۳ نوبت در طول دوره گرما توصیه می‌شود.'
      },
      {
        question: 'آیا سیلیگارد در کاهش مصرف آب و خشکی موثر است؟',
        answer: 'بله؛ با کاهش ۲۵ تا ۳۵ درصدی تعرق اضافی از روزنه‌های برگی، نیاز آبی گیاه در تنش کم‌آبی کاهش می‌یابد.'
      },
      {
        question: 'آیا می‌توان سیلیگارد را همراه با آب آبیاری استفاده کرد؟',
        answer: 'بله؛ مصرف خاکی ۵ تا ۱۰ لیتر در هکتار باعث استحکام ریشه‌ها و ساقه‌ها و جلوگیری از خوابیدگی (ورس) در غلات و برنج می‌شود.'
      },
      {
        question: 'آیا برای جلوگیری از آفتاب‌سوختگی میوه‌ها موثر است؟',
        answer: 'بسیار کارآمد است؛ با بازتاب بخشی از امواج فرابنفش (UV) و فروسرخ خورشید، دمای سطح برگ و میوه را تا ۳ درجه سانتی‌گراد خنک‌تر نگه می‌دارد.'
      }
    ],
    relatedArticleSlugs: ['saffron-nutrition-khorasan', 'heat-drought-stress', 'potassium-fertigation'],
    relatedProductSlugs: ['tiger-k-high', 'doping', 'sol-max']
  },

  // 8. STORMY
  'stormy': {
    h1Title: 'کود کلسیم مایع استورمی (Stormy) - استحکام دیواره سلولی، پیشگیری از پوسیدگی گلگاه و ترکیدگی میوه',
    h1TitleEn: 'Stormy High-Absorption Liquid Calcium - Cell Wall Fortifier & Blossom End Rot Prevention',
    h1TitleAr: 'سماد الكالسيوم السائل ستورمي (Stormy) - مقوي الجدر الخلوية ومانع عفن الطرف الزهري',
    metaTitle: 'کود کلسیم مایع استورمی | پیشگامان پایدار فلات نیک',
    metaTitleEn: 'Stormy Liquid Calcium | Pishgaman Falat Nik',
    metaTitleAr: 'سماد الكالسيوم ستورمي | شركة بيشغامان فلات نيك',
    metaDescription: 'کود کلسیم مایع استورمی با کمپلکس اسیدهای آمینه و قند-الکل‌ها. جلوگیری قطعی از پوسیدگی گلگاه در گوجه‌فرنگی و هندوانه، لکه تلخی سیب، ترکیدگی انار و مرکبات.',
    metaDescriptionEn: 'Stormy Liquid Calcium features high-mobility chelated calcium enriched with sugar alcohols and amino acids to stop blossom end rot and bitter pit.',
    metaDescriptionAr: 'سماد الكالسيوم ستورمي سريع الحركة والامتصاص، مصمم للوقاية من عفن الطرف الزهري في الطماطم والبطيخ، وتشقق ثمار الرمان والحمضيات.',
    longIntro: 'کود کلسیم مایع استورمی (Stormy) راهکاری علمی و آزموده‌شده برای رفع یکی از بزرگترین معضلات باغبانی و صیفی‌کاری، یعنی کمبود کلسیم و پیامدهای فیزیولوژیک آن است. کلسیم عنصری با تحرک بسیار اندک در آوندهای آبکش گیاه است. استورمی با بهره‌گیری از حامل‌های بیولوژیک قند-الکل و اسیدهای آمینه کلاته‌کننده، نفوذ کلسیم از روزنه‌های برگی و پوست میوه را ممکن ساخته و مستقیماً تیغه میانی سلول‌ها را استحکام می‌بخشد. مصرف استورمی مانع از پوسیدگی گلگاه، ترک‌خوردگی پوست و فساد زودهنگام در انبار می‌شود.',
    longIntroEn: 'Stormy Liquid Calcium addresses the systemic immobility of calcium inside crop phloem conduits. Complexed with specific amino carrier molecules, Stormy enables direct cuticular penetration, reinforcing middle lamellae structures to halt blossom end rot, internal browning, and fruit splitting.',
    longIntroAr: 'ستورمي هو مركب كالسيوم سائل فائق النفاذية، معزز بحوامل عضوية تضمن انتقاله داخل أنسجة الثمار لمنع تشققها وزيادة صلابتها وقدرتها التخزينية.',
    analysis: [
      'کلسیم محلول فعال (CaO): ۲۰٪',
      'نیتروژن با جذب سریع (N): ۸٪',
      'حامل‌های اسید آمینه و قند-الکل: ۴٪',
      'بُر جهت تسهیل انتقال کلسیم (B): ۰.۵٪',
      'عاری از کلراید و عناصر سنگین'
    ],
    analysisEn: [
      'Bioavailable Calcium Oxide (CaO): 20%',
      'Nitrate Nitrogen (N): 8%',
      'Organic Amino & Polyol Carriers: 4%',
      'Synergistic Boron (B): 0.5%',
      'Chlorine and heavy metal-free'
    ],
    analysisAr: [
      'أكسيد الكالسيوم الذائب (CaO): ٢٠٪',
      'نيتروجين نتراتي: ٨٪',
      'حوامل عضوية وأحماض أمينية: ٤٪',
      'بورون محفز لانتقال الكالسيوم: ٠.٥٪',
      'خالٍ من الكلور والمعادن الثقيلة'
    ],
    tankMixes: [
      { productName: 'فول شارژر (فروت ست)', slug: 'full-charger', reason: 'هم‌افزایی بی‌نظیر کلسیم و بُر در سلامت جوانه و میوه‌چه' },
      { productName: 'آنجلا (فسفیت پتاسیم)', slug: 'angela', reason: 'تقویت همزمان مقاومت بافتی و پیشگیری از پوسیدگی‌های قارچی' },
      { productName: 'سیلیگارد (سیلیکات پتاسیم)', slug: 'siligard', reason: 'دو بال استحکام پوست میوه در باغات انار، مرکبات و پسته' }
    ],
    cautions: [
      'هرگز کلسیم را با کودهای حاوی فسفات یا سولفات در یک تانکر به صورت غلیظ مخلوط نکنید (احتمال رسوب کلسیم سولفات یا فسفات).',
      'محلول‌پاشی بر روی میوه‌های جوان در ساعات بدون تابش شدید انجام گیرد.',
      'ظرف در دمای بالای ۵ درجه سانتی‌گراد نگهداری شود.'
    ],
    cautionsEn: [
      'Do not mix concentrated calcium directly with phosphates or sulfates in a single tank.',
      'Spray young developing fruitlets during cool periods without direct solar radiation.',
      'Store above 5°C to avoid crystallization.'
    ],
    cautionsAr: [
      'لا تخلط الكالسيوم المركز مباشرة مع الفوسفات أو الكبريتات لتجنب الترسيب.',
      'يُرش على الثمار الصغيرة في أوقات خالية من أشعة الشمس الشديدة.',
      'يُحفظ في درجة حرارة أعلى من ٥ درجات مئوية.'
    ],
    faqs: [
      {
        question: 'چرا پوسیدگی گلگاه گوجه‌فرنگی و هندوانه با استورمی درمان می‌شود؟',
        answer: 'پوسیدگی گلگاه ناشی از فروپاشی دیواره سلولی انتهای میوه به دلیل کمبود کلسیم است؛ استورمی با رساندن مستقیم کلسیم کلاته به این نقطه، بافت را ترمیم و از سیاهی گلگاه جلوگیری می‌کند.'
      },
      {
        question: 'دوز مصرف استورمی در محلول‌پاشی چقدر است؟',
        answer: '۲ تا ۲.۵ لیتر در ۱۰۰۰ لیتر آب برای درختان میوه و صیفی‌جات در ۲ تا ۳ نوبت از زمان تشکیل میوه تا قبل از رسیدگی کامل توصیه می‌شود.'
      },
      {
        question: 'آیا استورمی برای افزایش ماندگاری سیب در سردخانه موثر است؟',
        answer: 'بله؛ محلول‌پاشی منظم استورمی در طول تابستان از بیماری لکه تلخی (Bitter Pit) و آردی شدن بافت سیب در انبارداری جلوگیری می‌نماید.'
      },
      {
        question: 'آیا می‌توان استورمی را همراه با آب آبیاری مصرف کرد؟',
        answer: 'بله؛ مصرف ۵ تا ۱۰ لیتر در هکتار همراه با آب آبیاری علاوه بر تغذیه کلسیمی، به اصلاح خاک‌های سدیمی نیز کمک می‌نماید.'
      },
      {
        question: 'آیا استورمی از ترکیدگی پوست انار و مرکبات جلوگیری می‌کند؟',
        answer: 'بسیار موثر است؛ با افزایش الاستیسیته و ضخامت پوست میوه، مانع از ترک‌خوردگی ناشی از نوسان دور آبیاری می‌شود.'
      }
    ],
    relatedArticleSlugs: ['calcium-boron', 'vegetable-salinity-stress-isfahan', 'potassium-fertigation'],
    relatedProductSlugs: ['full-charger', 'angela', 'siligard']
  },

  // 9. FICTION
  'fiction': {
    h1Title: 'عصاره خالص جلبک دریایی فیکشن (Fiction) - هورمون‌های زیستی طبیعی، سیتوکینین و ضد تنش سرما و گرما',
    h1TitleEn: 'Fiction Pure Ascophyllum Nodosum Seaweed Extract - Cytokinin, Auxin & Abiotic Stress Resistance',
    h1TitleAr: 'مستخلص الطحالب البحرية النقية فيكشن (Fiction) - محفز هرموني طبيعي ومقاوم للإجهادات المناخية',
    metaTitle: 'عصاره جلبک دریایی فیکشن | پیشگامان پایدار فلات نیک',
    metaTitleEn: 'Fiction Seaweed Extract | Pishgaman Falat Nik',
    metaTitleAr: 'مستخلص الطحالب البحرية فيكشن | شركة بيشغامان فلات نيك',
    metaDescription: 'کود محرک رشد زیستی فیکشن بر پایه عصاره جلبک دریایی آسکوفیلوم نودوسوم با سیتوکینین طبیعی، الژینیک اسید و بتائین. افزایش تقسیم سلولی، ریشه‌زایی و بازگشت سریع گیاه از تنش.',
    metaDescriptionEn: 'Fiction 100% natural Ascophyllum Nodosum seaweed extract stimulates continuous cell division, root proliferation, and cold/heat abiotic stress recovery.',
    metaDescriptionAr: 'مستخلص طحالب أسكوفيلوم نودوسوم النقي فيكشن، غني بالسيتوكينين وحمض الألجينيك والبيتين لتنشيط النمو الخضري ومقاومة الصقيع والحرارة.',
    longIntro: 'فیکشن (Fiction) عصاره طبیعی و غلیظ جلبک قهوه‌ای آسکوفیلوم نودوسوم (Ascophyllum Nodosum) است که به روش هیدرولیز سرد فرموله شده تا تمامی ترکیبات زیستی حساس نظیر هورمون‌های گیاهی طبیعی (سیتوکینین، اکسین، بتائین و جیبرلین)، اسید آلژینیک و مانیتول حفظ گردند. فیکشن با تحریک مستقیم تقسیم سلولی در مریستم‌های انتهایی، نرخ رشد شاخه‌ها و باروری میوه را افزایش داده و سیستم ایمنی گیاه را در برابر سرمازدگی‌های بهاره و شوک‌های ناشی از سمپاشی‌های سنگین به سرعت بازسازی می‌نماید.',
    longIntroEn: 'Fiction Pure Seaweed Extract is derived from premium Ascophyllum Nodosum via non-destructive extraction. Packed with bio-active alginates, natural betaines, mannitol, and phytohormones, Fiction energizes chloroplast efficiency and activates systemic resistance mechanisms across all growth stages.',
    longIntroAr: 'فيكشن هو خلاصة طحالب بحرية طبيعية مركزة تم استخلاصها بأحدث التقنيات للحفاظ على الهرمونات النباتية ومضادات الأكسدة التي تحفز التزهير ومقاومة التقلبات الجوية.',
    analysis: [
      'عصاره خالص جلبک دریایی (Ascophyllum Nodosum Extract): ۲۰٪',
      'اسید آلژینیک فعال: ۵٪',
      'مانیتول و ترکیبات ضدتنش اسمزی: ۳٪',
      'پتاسیم ارگانیک (K2O): ۴٪',
      'ویتامین‌ها و پلی‌ساکاریدهای زیستی طبیعی: ۲٪'
    ],
    analysisEn: [
      'Pure Ascophyllum Nodosum Extract: 20%',
      'Active Alginic Acid: 5%',
      'Mannitol & Osmoprotectants: 3%',
      'Organic Potash (K2O): 4%',
      'Natural Bio-vitamins & Polysaccharides: 2%'
    ],
    analysisAr: [
      'مستخلص طحالب أسكوفيلوم نودوسوم نقي: ٢٠٪',
      'حمض الألجينيك النشط: ٥٪',
      'مانيتول ومركبات حماية الأسموزية: ٣٪',
      'بوتاسيوم عضوي (K2O): ٤٪',
      'فيتامينات طبيعية ومحفزات حيوية: ٢٪'
    ],
    tankMixes: [
      { productName: 'دوپینگ (محرک رشد و رنگ)', slug: 'doping', reason: 'ترکیب جلبک و آمینواسید برای جهش رشد و افزایش بریکس میوه' },
      { productName: 'جامپر (ریشه‌زای قوی)', slug: 'jumper', reason: 'هم‌افزایی سیتوکینین جلبک با فسفر زیستی در ریشه‌دوانی نشاء' },
      { productName: 'تایگر K High (ژل پتاسیم)', slug: 'tiger-k-high', reason: 'تسریع انتقال مواد قندی به دانه‌ها و میوه‌ها در انتهای فصل' }
    ],
    cautions: [
      'از قرار دادن بطری در برابر تابش مستقیم نور خورشید و گرمای شدید خودداری شود.',
      'با اکثر کودها و سموم سازگار است اما قبل از ترکیب با روغن‌های سنگین تست اختلاط انجام شود.',
      'پیش از مصرف ظرف را به خوبی تکان دهید.'
    ],
    cautionsEn: [
      'Keep container away from direct sunlight and extreme heat.',
      'Compatible with most agrochemicals; run jar test before pairing with heavy mineral oils.',
      'Agitate thoroughly prior to pouring into spray vat.'
    ],
    cautionsAr: [
      'يُحفظ بعيداً عن أشعة الشمس المباشرة والحرارة المرتفعة.',
      'متوافق مع معظم الأسمدة والمبيدات؛ يُجرى اختبار توافق مع الزيوت المعدنية.',
      'رج العبوة جيداً قبل الاستعمال.'
    ],
    faqs: [
      {
        question: 'چگونه فیکشن به احیای گیاه پس از سرمازدگی یا مسمومیت سم کمک می‌کند؟',
        answer: 'بتائین و مانیتول موجود در فیکشن با تنظیم اسمزی سلول و هورمون‌های سیتوکینین با بازسازی غشای تیلاکوئید کلروپلاست، گیاه شوک‌زده را ظرف ۴۸ تا ۷۲ ساعت مجدداً به چرخه فتوسنتز فعال بازمی‌گردانند.'
      },
      {
        question: 'دوز مصرف فیکشن در محلول‌پاشی چقدر است؟',
        answer: '۱ تا ۱.۵ لیتر در ۱۰۰۰ لیتر آب در محلول‌پاشی برگی برای باغات و مزارع، و ۲ تا ۳ لیتر در هکتار همراه با آب آبیاری توصیه می‌شود.'
      },
      {
        question: 'آیا فیکشن در افزایش باروری و تلقیح گل‌ها تاثیر دارد؟',
        answer: 'بله؛ محلول‌پاشی قبل از گلدهی موجب افزایش درصد گل‌های ماده بارور و افزایش ماندگاری لوله گرده می‌شود.'
      },
      {
        question: 'آیا جلبک دریایی فیکشن طبیعی و ارگانیک است؟',
        answer: 'بله؛ فیکشن ۱۰۰٪ منشأ دریایی و ارگانیک دارد و برای کشت‌های صادراتی و باغات ارگانیک کاملاً بی‌خطر و فاقد دوره کارنس است.'
      },
      {
        question: 'آیا می‌توان فیکشن را با کودهای میکرو و ماکرو ترکیب کرد؟',
        answer: 'بله؛ اسید آلژینیک موجود در فیکشن به عنوان یک شلاتور طبیعی عمل کرده و جذب عناصر همراه را تا ۲ برابر افزایش می‌دهد.'
      }
    ],
    relatedArticleSlugs: ['seaweed-extract', 'heat-drought-stress', 'rice-fertilization-guilan'],
    relatedProductSlugs: ['doping', 'jumper', 'tiger-k-high']
  },

  // 10. TOP STAR
  'top-star': {
    h1Title: 'کود نیتروژن مایع تاپ استار (Top Star) غنی‌شده با اسید آمینه - محرک فتوسنتز و رشد رویشی انفجاری',
    h1TitleEn: 'Top Star Amino-Enriched Liquid Nitrogen - Vegetative Vigor, Protein Synthesis & Tillering',
    h1TitleAr: 'سماد النيتروجين السائل توب ستار (Top Star) المعزز بالأحماض الأمينية - منشط النمو الخضري',
    metaTitle: 'کود نیتروژن مایع تاپ استار | پیشگامان پایدار فلات نیک',
    metaTitleEn: 'Top Star Amino Liquid Nitrogen | Pishgaman Falat Nik',
    metaTitleAr: 'سماد النيتروجين توب ستار | شركة بيشغامان فلات نيك',
    metaDescription: 'کود نیتروژن مایع تاپ استار با ۳ فرم نیتروژن، اسیدهای آمینه آزاد و منیزیم. جایگزین هوشمند کود سرک اوره در گندم و جو، محرک شاخه‌زایی درختان و سبزینگی سریع.',
    metaDescriptionEn: 'Top Star Liquid Nitrogen combines triple-form nitrogen with bioactive L-amino acids and magnesium, boosting leaf chlorophyll density and crop tillering.',
    metaDescriptionAr: 'سماد توب ستار النيتروجيني السائل المدعم بالأحماض الأمينية والمغنيسيوم، البديل الفعال للأسمدة النيتروجينية التقليدية لزيادة النمو الخضري.',
    longIntro: 'کود تاپ استار (Top Star) پاسخ مدرن و کارآمد به نیاز حیاتی گیاهان به نیتروژن با راندمان بالا و بدون تلفات آبشویی اوره سنتی است. این کود با دارا بودن سه فرم نیتروژن (آمونیومی، نیتراتی و آمیدی کنترل‌شده) به همراه اسیدهای آمینه آزاد و منیزیم فعال، انرژی فتوسنتز را به سرعت تقویت می‌نماید. تاپ استار در مزارع غلات جایگزین یا مکمل ایده‌آل کود سرک بوده و در باغات میوه، توسعه تاج و شاخه‌زایی جوانه‌های سال آینده را بدون ایجاد بافت‌های علفی حساس تضمین می‌کند.',
    longIntroEn: 'Top Star Liquid Nitrogen is formulated to eliminate the volatilization and leaching losses typical of solid urea. By combining three nitrogen phases with free amino acids and active magnesium, Top Star provides both instantaneous green-up and steady protein synthesis across tillering and stem elongation.',
    longIntroAr: 'توب ستار هو سماد نيتروجيني سائل متكامل يجمع بين النيتروجين متعدد الأشكال والأحماض الأمينية لتأمين نمو خضري قوي وتكوين البروتين دون فقد بالغسيل.',
    analysis: [
      'نیتروژن کل (Total Nitrogen): ۲۸٪',
      'نیتروژن نیتراتی، آمونیومی و اوره‌ای: متعادل',
      'اسیدهای آمینه آزاد فعال (Free Amino Acids): ۵٪',
      'منیزیم کلاته (MgO): ۲٪',
      'عناصر ریزمغذی هم‌افزا (Fe, Zn): ۰.۵٪'
    ],
    analysisEn: [
      'Total Multi-Form Nitrogen (N): 28%',
      'Balanced Nitrate, Ammoniacal & Urea-N fractions',
      'Free Bioactive L-Amino Acids: 5%',
      'Chelated Magnesium (MgO): 2%',
      'Synergistic Trace Elements (Fe, Zn): 0.5%'
    ],
    analysisAr: [
      'النيتروجين الكلي متعدد الأشكال (N): ٢٨٪',
      'توزيع متوازن بين النترات والأمونيوم واليوريا',
      'أحماض أمينية حرة نقية: ٥٪',
      'مغنيسيوم مخلبي (MgO): ٢٪',
      'عناصر صغرى داعمة (حديد، زنك): ٠.٥٪'
    ],
    tankMixes: [
      { productName: 'چلنجر (هیومیک پودری)', slug: 'challenger', reason: 'هم‌افزایی عالی در مرحله پنجه‌زنی گندم و جذب حداکثری ازت' },
      { productName: 'فول شارژر (فروت ست)', slug: 'full-charger', reason: 'تغذیه شروع فصل باغات جهت جهش رشد شاخه‌ها و جوانه‌ها' },
      { productName: 'هیومی فارم (هیومیک مایع)', slug: 'humifarm', reason: 'جلوگیری از آبشویی نیتروژن و پایدارسازی رطوبت خاک' }
    ],
    cautions: [
      'در اواخر فصل باردهی و زمان رسیدن میوه از مصرف بی‌رویه خودداری شود تا تاخیر در رسیدن رخ ندهد.',
      'در محلول‌پاشی غلظت مجاز رعایت شود و روی گیاهان تشنه سمپاشی صورت نگیرد.',
      'در انبار خنک و دور از گرما نگهداری شود.'
    ],
    cautionsEn: [
      'Avoid excessive application close to harvest to prevent delayed fruit maturation.',
      'Adhere to recommended spray concentration; never spray drought-stressed crops.',
      'Store in a cool, ventilated warehouse away from direct heat.'
    ],
    cautionsAr: [
      'تجنب الإفراط في الرش قرب موعد الحصاد لتفادي تأخير نضج الثمار.',
      'التزم بالتركيزات الموصى بها ولا ترش على نباتات تعاني من العطش الشديد.',
      'يُحفظ في مكان بارد وجيد التهوية.'
    ],
    faqs: [
      {
        question: 'چرا تاپ استار نسبت به کود اوره سنتی ارجحیت دارد؟',
        answer: 'اوره سنتی تا ۶۰ درصد از طریق تصعید گاز آمونیاک و آبشویی نیترات تلف می‌شود؛ تاپ استار مایع با آمینواسیدها و منیزیم تلفات نزدیک به صفر دارد و جذب برگی و ریشه‌ای آن ۹۰٪ بیشتر است.'
      },
      {
        question: 'دوز مصرف تاپ استار در مزارع گندم و جو چقدر است؟',
        answer: 'در مرحله پنجه‌زنی و ساقه‌دهی، ۳ تا ۵ لیتر در هکتار در محلول‌پاشی برگی، یا ۱۰ تا ۱۵ لیتر در هکتار همراه با آب آبیاری سرک توصیه می‌شود.'
      },
      {
        question: 'نقش منیزیم موجود در تاپ استار چیست؟',
        answer: 'منیزیم هسته مرکزی مولکول کلروفیل است؛ وجود آن در کنار نیتروژن، نرخ فتوسنتز و سنتز نشاسته و پروتئین را چند برابر می‌کند.'
      },
      {
        question: 'آیا برای صیفی‌جات گلخانه‌ای و بوته‌ای مناسب است؟',
        answer: 'بله؛ مصرف هفتگی تاپ استار با دوز ملایم باعث رشد مداوم شاخه‌ها، گل‌انگیزی پیوسته و عدم پیری زودرس بوته‌های خیار و گوجه می‌شود.'
      },
      {
        question: 'آیا تاپ استار را می‌توان با علف‌کش‌های پهن‌برگ مخلوط کرد؟',
        answer: 'در اکثر موارد با دوز کم (۱ تا ۲ لیتر در هکتار) قابل اختلاط است، اما تست مقدماتی و رعایت دستورالعمل سم توصیه می‌گردد.'
      }
    ],
    relatedArticleSlugs: ['wheat-topdressing-fars', 'cotton-boll-retention-golestan', 'sugar-beet-nutrition-khorasan'],
    relatedProductSlugs: ['challenger', 'full-charger', 'humifarm']
  },

  // 11. TIGER K HIGH
  'tiger-k-high': {
    h1Title: 'کود ژل پتاسیم بالا تایگر K High - افزایش سایز، وزن حجمی دانه، بریکس و تناژ رکورد',
    h1TitleEn: 'Tiger High K Gel Fertilizer (50% K2O) - Fruit Sizing, Heavy Grain Fill & Drought Defense',
    h1TitleAr: 'سماد جل البوتاسيوم فائق التركيز تايكر K High - لتحجيم الثمار وامتلاء الحبوب ورفع الإنتاجية',
    metaTitle: 'ژل پتاسیم بالا تایگر K High | پیشگامان پایدار فلات نیک',
    metaTitleEn: 'Tiger High K Gel Fertilizer | Pishgaman Falat Nik',
    metaTitleAr: 'سماد جل تايكر ك عالي البوتاسيوم | شركة بيشغامان فلات نيك',
    metaDescription: 'کود غلیظ ژل تایگر K High با فرمولاسیون انقلابی پتاسیم ۵۰٪، تکنولوژی کلاته و چسبندگی عالی برگی. درشت شدن دانه گندم و پسته، رنگ‌پذیری و تناژ ماکزیمم.',
    metaDescriptionEn: 'Tiger High K Gel provides ultra-dense 50% potassium oxide in a water-soluble gel suspension, maximizing fruit tonnage, Brix, and grain test weight.',
    metaDescriptionAr: 'سماد جل تايكر عالي البوتاسيوم ٥٠٪، تركيبة ثورية سريعة الذوبان والامتصاص لملء الحبوب وتحجيم الثمار ورفع جودة المحاصيل التسويقية.',
    longIntro: 'کود ژل تایگر K High (Tiger High K) اوج فناوری فرمولاسیون‌های کودی دنیا در تامین پتاسیم غلیظ است. این محصول با داشتن بیش از ۵۰٪ پتاسیم فعال در قالب ساختار فیزیکی ژل نیمه‌مایع، غلظتی به مراتب بالاتر از کودهای پودری و مایع معمول دارد. پتاسیم موجود در تایگر با مواد فعال‌کننده سطحی پوشش داده شده که چسبندگی قطرات به برگ را افزایش داده و از هدررفت و آبشویی جلوگیری می‌نماید. مصرف این ژل در مراحل پایانی رشد، انتقال تمامی قندها را به سمت میوه تسریع کرده و موجب درشتی و خندانی پسته، پر شدن دانه‌های برنج و گندم، و افزایش عیار قند چغندر می‌شود.',
    longIntroEn: 'Tiger High K is an ultra-concentrated gel formulation engineered for crops with intense potassium appetite during fruit enlargement and seed maturation. Incorporating organo-mineral surfactants, it adheres tenaciously to foliar cuticles, preventing wash-off while driving carbohydrate sink-strength.',
    longIntroAr: 'تايكر K High هو سماد هلامي فائق التركيز يحتوي على ٥٠٪ بوتاسيوم، مصمم لزيادة وزن وحجم الثمار ورفع السكريات وتحسين التلوين في مختلف المحاصيل.',
    analysis: [
      'پتاسیم محلول فعال (K2O): ۵۰٪',
      'نیتروژن با رهایش کنترل‌شده (N): ۵٪',
      'منیزیم کلاته (MgO): ۱.۵٪',
      'سورفکتانت‌های چسبنده زیستی و عوامل ضدتبخیر: ۳٪',
      'حلالیت سریع ۱۰۰٪ بدون کوچک‌ترین ته‌نشینی'
    ],
    analysisEn: [
      'Bio-Available Potash (K2O): 50%',
      'Controlled-Release Nitrogen (N): 5%',
      'Chelated Magnesium (MgO): 1.5%',
      'Bio-surfactants & Anti-evaporation Adjuvants: 3%',
      '100% Rapid Dissolution without tank sediment'
    ],
    analysisAr: [
      'بوتاسيوم ذائب نشط (K2O): ٥٠٪',
      'نيتروجين تدريجي التحرر: ٥٪',
      'مغنيسيوم مخلبي (MgO): ١.٥٪',
      'مواد ناشرة ولاصقة حيوية: ٣٪',
      'ذوبان كامل وسريع دون أي رواسب'
    ],
    tankMixes: [
      { productName: 'سیلیگارد (سیلیکات پتاسیم)', slug: 'siligard', reason: 'سپر دفاعی سلولی در کنار پر شدن سریع بافت میوه و مغز پسته' },
      { productName: 'دوپینگ (محرک رشد و رنگ)', slug: 'doping', reason: 'تقویت نفوذ پتاسیم و تسریع رسیدگی یکنواخت محصول' },
      { productName: 'استورمی (کلسیم مایع)', slug: 'stormy', reason: 'تغذیه نوبتی کلسیم و پتاسیم جهت پیشگیری همزمان از ترکیدگی میوه' }
    ],
    cautions: [
      'به دلیل غلظت فوق‌العاده بالا، ژل ابتدا در یک سطل آب ولرم پیش‌حل شده و سپس به تانکر سمپاشی اضافه گردد.',
      'از محلول‌پاشی در ساعات بسیار گرم ظهر خودداری شود.',
      'در بسته‌بندی اصلی و در جای خشک نگهداری شود.'
    ],
    cautionsEn: [
      'Due to ultra-dense viscosity, pre-dissolve gel in a bucket of warm water before adding to vat.',
      'Avoid spraying during intense direct sunlight and high ambient heat.',
      'Keep sealed in original packaging in a dry store.'
    ],
    cautionsAr: [
      'نظراً للكثافة العالية، قم بإذابة الجل مسبقاً في دلو ماء قبل إضافته لخزان الرش.',
      'تجنب الرش في ساعات الظهيرة الحارة.',
      'يُحفظ في عبوته الأصلية في مكان جاف.'
    ],
    faqs: [
      {
        question: 'چرا فرم ژل تایگر برتر از کودهای پودری سولوپتاس یا مایع پتاسیم است؟',
        answer: 'فرم ژل خلوص و پایداری بالاتری دارد، جذب برگی آن به دلیل چسبنده‌های زیستی تا ۳ برابر کودهای پودری است و فاقد کلر و شوری مضر برای برگ‌هاست.'
      },
      {
        question: 'دوز مصرف تایگر K High در محلول‌پاشی چقدر است؟',
        answer: '۲ تا ۳ کیلوگرم در ۱۰۰۰ لیتر آب در محلول‌پاشی برگی، یا ۵ تا ۱۰ کیلوگرم در هکتار همراه با آب آبیاری توصیه می‌شود.'
      },
      {
        question: 'چه زمانی در باغات پسته باید مصرف شود؟',
        answer: 'از اواخر خرداد تا اواسط مردادماه در مرحله پر کردن مغز پسته در ۲ نوبت؛ این امر وزن هزار دانه و خندانی پسته را به حداکثر می‌رساند.'
      },
      {
        question: 'آیا برای مزارع برنج و گندم مناسب است؟',
        answer: 'بله؛ مصرف در مرحله ساقه و پر شدن دانه باعث جلوگیری از چروکیدگی دانه، افزایش وزن هکتولیتر و مهار ورس ساقه می‌شود.'
      },
      {
        question: 'آیا در مزارع زعفران کاربرد دارد؟',
        answer: 'بسیار کلیدی است؛ مصرف تایگر K High در زاچ‌آب زعفران باعث درشت شدن پیاز دختری و تضمین گلدهی فوق‌العاده در سال بعد می‌گردد.'
      }
    ],
    relatedArticleSlugs: ['potassium-fertigation', 'saffron-nutrition-khorasan', 'apple-alternate-bearing-azerbaijan'],
    relatedProductSlugs: ['siligard', 'doping', 'stormy']
  },

  // 12. TIGER P HIGH
  'tiger-p-high': {
    h1Title: 'کود ژل فسفر بالا تایگر P High - تامین انرژی ATP، انفجار ریشه‌زایی، گل‌انگیزی و پنجه‌زنی',
    h1TitleEn: 'Tiger High P Gel Fertilizer - Concentrated Bio-Phosphorus for Rooting & Floral Initiation',
    h1TitleAr: 'سماد جل الفوسفور عالي التركيز تايكر P High - لتنشيط الجذور وتكوين الطاقة والتزهير',
    metaTitle: 'ژل فسفر بالا تایگر P High | پیشگامان پایدار فلات نیک',
    metaTitleEn: 'Tiger High P Gel Fertilizer | Pishgaman Falat Nik',
    metaTitleAr: 'سماد جل تايكر بي عالي الفوسفور | شركة بيشغامان فلات نيك',
    metaDescription: 'کود ژل فسفر غلیظ تایگر P High با تکنولوژی پیشرفته، کلاته و ۱۰۰٪ قابل جذب در خاک‌های آهکی. ریشه‌زایی قوی نشاء، تامین انرژی ATP و افزایش گلدهی و پنجه‌زنی.',
    metaDescriptionEn: 'Tiger High P Gel delivers concentrated bioavailable phosphate protected against calcareous soil fixation, fueling ATP energy pools and extensive tillering.',
    metaDescriptionAr: 'سماد جل تايكر عالي الفوسفور، صُمم لحماية الفوسفور من التثبيت في الترب الكلسية، وتأمين طاقة النمو وتنشيط الجذور والتزهير المبكر.',
    longIntro: 'ژل تایگر P High محصول انحصاری شرکت پیشگامان پایدار فلات نیک در رفع چالش قفل شدن فسفر در خاک‌های آهکی و قلیایی است. در اکثر خاک‌های ایران، بیش از ۸۰٪ کودهای فسفره مرسوم (نظیر سوپرفسفات و DAP) به دلیل پیوند با کلسیم تثبیت شده و از دسترس خارج می‌شوند. تایگر P High با فرمول ژل محافظت‌شده، یون فسفات را در فرم زیستی آزاد حفظ کرده و انرژی لازم برای سنتز ATP، ریشه‌دوانی گسترده، پنجه‌زنی غلات و انگیزش جوانه‌های زایشی را تامین می‌نماید.',
    longIntroEn: 'Tiger High P Gel provides a breakthrough solution for crops grown on calcium-carbonate-rich soils where phosphate precipitation is severe. Its gel-chelated architecture prevents phosphate-calcium lockup, driving rapid lateral root formation, vigorous early tillering, and heavy flower bud differentiation.',
    longIntroAr: 'تايكر P High هو سماد جل مبتكر لحل مشكلة تثبيت الفوسفور في الترب الكلسية، يوفر فوسفوراً عالي الجاهزية لتعزيز التجذير والتبكير في التزهير.',
    analysis: [
      'فسفر قابل دسترس زیستی (P2O5): ۴۵٪',
      'نیتروژن اولیه هم‌افزا (N): ۱۰٪',
      'روی کلاته EDTA (Zn): ۲٪',
      'عوامل کلاته‌کننده آلی ضدتثبیت فسفر در خاک آهکی: ۴٪',
      'حلالیت ۱۰۰٪ بدون ایجاد رسوب در نازل‌های آبیاری'
    ],
    analysisEn: [
      'Bioavailable Phosphate (P2O5): 45%',
      'Starter Nitrogen (N): 10%',
      'Chelated Zinc (Zn-EDTA): 2%',
      'Anti-fixation organic chelators: 4%',
      '100% water solubility with zero drip clogging'
    ],
    analysisAr: [
      'فوسفور متاح حيوي (P2O5): ٤٥٪',
      'نيتروجين تمهيدي: ١٠٪',
      'زنك مخلبي: ٢٪',
      'مخلبيات عضوية مانعة لتثبيت الفوسفور: ٤٪',
      'ذوبان كامل دون ترسب في شبكات التنقيط'
    ],
    tankMixes: [
      { productName: 'جامپر (محرک ریشه)', slug: 'jumper', reason: 'هم‌پوشانی فوق‌العاده در ابتدای کاشت نشاء و احیای ریشه‌های آسیب‌دیده' },
      { productName: 'تایگر K High (ژل پتاسیم)', slug: 'tiger-k-high', reason: 'مدیریت توازن عناصر غذایی در مراحل رویشی و زایشی' },
      { productName: 'فول شارژر (فروت ست)', slug: 'full-charger', reason: 'انرژی‌بخشی به شکوفه‌ها و افزایش تعداد گل‌های بارور' }
    ],
    cautions: [
      'مانند سایر ژل‌ها، ابتدا در یک سطل آب حل کرده و سپس به مخزن سمپاش اضافه فرمایید.',
      'با کودهای غلیظ حاوی کلسیم کلاته‌نشده در یک ظرف مخلوط نشود.',
      'در جای خشک و خنک نگهداری شود.'
    ],
    cautionsEn: [
      'Pre-mix in a container of water prior to pouring into the main tank.',
      'Do not combine directly with unchelated concentrated calcium.',
      'Store in a cool and dry location.'
    ],
    cautionsAr: [
      'قم بإذابة الجل في كمية من الماء قبل إضافته إلى الخزان الرئيسي.',
      'تجنب الخلط المباشر مع مركبات الكالسيوم غير المخلبية المركزة.',
      'يُحفظ في مكان بارد وجاف.'
    ],
    faqs: [
      {
        question: 'چرا فسفر ژل تایگر در خاک آهکی قفل نمی‌شود؟',
        answer: 'به دلیل احاطه شدن یون‌های فسفات توسط پلیمرهای محافظ ژل که مانع از برخورد مستقیم و واکنش با کاتیون‌های کلسیم خاک می‌شوند.'
      },
      {
        question: 'دوز مصرف تایگر P High چقدر است؟',
        answer: '۲ تا ۲.۵ کیلوگرم در ۱۰۰۰ لیتر آب در محلول‌پاشی برگی، یا ۵ تا ۱۰ کیلوگرم در هکتار همراه با آب آبیاری در ابتدای فصل رشد توصیه می‌شود.'
      },
      {
        question: 'تاثیر تایگر P High بر پنجه‌زنی گندم و جو چیست؟',
        answer: 'مصرف در مرحله ۳ تا ۴ برگی باعث افزایش تعداد پنجه‌های موثر بارور، قطور شدن طوقه و افزایش چشمگیر سنبله در هکتار می‌شود.'
      },
      {
        question: 'آیا برای نشاءکاری برنج در گیلان مناسب است؟',
        answer: 'بله؛ مصرف در خزانه و هفته اول پس از نشاءکاری باعث استقرار فوق‌العاده و پنجه‌زنی متراکم بوته‌های برنج می‌گردد.'
      },
      {
        question: 'آیا برای گلدهی صیفی‌جات گلخانه‌ای کاربرد دارد؟',
        answer: 'بسیار موثر است؛ مصرف منظم فسفر ژل مانع از سقط گل‌ها شده و تعداد گل‌آذین‌های بارور را به طور پیوسته حفظ می‌کند.'
      }
    ],
    relatedArticleSlugs: ['rice-fertilization-guilan', 'humic-fulvic-root-development', 'zinc-boron-fruit-setting'],
    relatedProductSlugs: ['jumper', 'tiger-k-high', 'full-charger']
  },

  // 13. SOL-MAX
  'sol-max': {
    h1Title: 'گوگرد مایع اصلاح‌کننده سول مکس (Sol-Max) - تعدیل اسیدیته خاک، ضدعفونی ریشه و مهار قارچ و شته',
    h1TitleEn: 'Sol-Max Liquid Sulfur (High Active S) - Soil pH Neutralizer, Root Fungicide & Mildew Control',
    h1TitleAr: 'الكبريت السائل سول ماكس (Sol-Max) - لتعديل حموضة التربة ومكافحة الفطريات ونيماتودا الجذور',
    metaTitle: 'گوگرد مایع اصلاح‌کننده سول مکس | پیشگامان پایدار فلات نیک',
    metaTitleEn: 'Sol-Max Liquid Sulfur | Pishgaman Falat Nik',
    metaTitleAr: 'الكبريت السائل سول ماكس | شركة بيشغامان فلات نيك',
    metaDescription: 'کود گوگرد مایع سول مکس با درصد خلوص بالا، اکسیداسیون سریع در خاک و خاصیت قارچ‌کشی. اصلاح pH خاک‌های آهکی، کنترل سفیدک سطحی و ضدعفونی ریشه در باغات و زراعت.',
    metaDescriptionEn: 'Sol-Max Liquid Sulfur features ultra-fine micronized sulfur particles with rapid biological oxidation, lowering soil pH and repelling soil-borne fungi and pests.',
    metaDescriptionAr: 'كبريت سائل عالي النقاوة سول ماكس، يخفض قلوية التربة الكلسية، يحرر العناصر المغلقة ويعمل كطارد ومكافح فطري للبياض الدقيقي وعفن الجذور.',
    longIntro: 'سول مکس (Sol-Max) یکی از استراتژیک‌ترین محصولات شرکت پیشگامان پایدار فلات نیک جهت اصلاح اساسی خاک‌های قلیایی و آهکی کشور است. گوگردهای پودری و بنتونیت‌دار سنتی سال‌ها طول می‌کشد تا اکسیده شوند، اما ذرات مایع و میکرونیزه سول مکس ظرف چند روز در خاک توسط باکتری‌های تیوباسیلوس اکسید شده و با تولید اسید سولفوریک موضعی، کربنات کلسیم نامحلول را به کلسیم محلول و قابل دسترس تبدیل می‌نمایند. سول مکس علاوه بر اصلاح pH، به عنوان یک قارچ‌کش و حشره‌کش بیولوژیک قوی در مهار سفیدک سطحی، نماتد و کنه عمل می‌کند.',
    longIntroEn: 'Sol-Max Liquid Sulfur is formulated with ultra-micronized elemental and polysulfide sulfur for rapid soil chemo-biological oxidation. Unlike slow granular sulfur, Sol-Max lowers rhizosphere micro-pH within days, mobilizing fixed phosphorus, calcium, and iron while suppressing soil nematodes and foliar powdery mildew.',
    longIntroAr: 'سول ماكس هو كبريت سائل فائق النعومة والفاعلية، يُحدث تحمضاً موضعياً سريعاً في الترب القلوية لإطلاق العناصر المحتبسة ومكافحة أمراض البياض الدقيقي والنيماتودا.',
    analysis: [
      'گوگرد کل فعال (Active Sulfur S): ۴۰٪',
      'پتاسیم محلول (K2O): ۱۰٪',
      'اندازه ذرات میکرونیزه: زیر ۲ میکرون جهت اکسیداسیون فوری',
      'پایداری سوسپانسیون: عالی بدون ته‌نشینی سخت',
      'خواص قارچ‌کشی و کنه‌کشی سطحی و خاکی'
    ],
    analysisEn: [
      'Total Active Sulfur (S): 40%',
      'Soluble Potash (K2O): 10%',
      'Micronized Particle Size: Below 2 microns for rapid microbial oxidation',
      'Suspension Stability: Superior anti-settling profile',
      'Foliar and soil anti-fungal/acaricidal efficacy'
    ],
    analysisAr: [
      'الكبريت الكلي النشط (S): ٤٠٪',
      'بوتاسيوم ذائب (K2O): ١٠٪',
      'حجم الجزيئات: أقل من ٢ ميكرون للأكسدة السريعة',
      'ثبات معلق فائق دون ترسب',
      'أثر مبيد للفطريات والأكاروسات والنيماتودا'
    ],
    tankMixes: [
      { productName: 'سالت استاپ (ضد شوری)', slug: 'salt-stop', reason: 'نسخه طلایی رفع شوری خاک، آبشویی سدیم و آزادسازی کلسیم در پسته و مرکبات' },
      { productName: 'پی‌اچ بست (تنظیم‌کننده pH)', slug: 'ph-best', reason: 'بهینه‌سازی کامل شرایط جذب کودها در سیستم آبیاری' },
      { productName: 'ردفول (کود آهن EDDHA)', slug: 'redfol', reason: 'آزادسازی طبیعی آهن و هم‌افزایی در رفع زردی برگ‌ها' }
    ],
    cautions: [
      'از محلول‌پاشی در دمای بالای ۳۲ درجه سانتی‌گراد به شدت خودداری شود (خطر سوزندگی گوگردی در آفتاب شدید).',
      'حداقل فاصله ۲۱ روزه با سمپاشی روغن‌های امولسیون‌شونده (روغن ولک) رعایت شود.',
      'در مخزن با آب کافی مخلوط و هم‌زن تا پایان کار روشن باشد.'
    ],
    cautionsEn: [
      'Never spray foliarly when ambient temperatures exceed 32°C (risk of sulfur burn).',
      'Maintain at least a 21-day interval between sulfur spraying and mineral oils (dormant oils).',
      'Keep agitation running continuously during application.'
    ],
    cautionsAr: [
      'تجنب الرش الورقي تماماً عند تجاوز درجات الحرارة ٣٢ درجة مئوية لتفادي الحروق.',
      'حافظ على فاصل زمني لا يقل عن ٢١ يوماً بين الكبريت والزيوت المعدنية الشتوية أو الصيفية.',
      'شغل مضخة التقليب باستمرار أثناء التطبيق.'
    ],
    faqs: [
      {
        question: 'چگونه سول مکس شوری خاک را کاهش می‌دهد؟',
        answer: 'گوگرد با اکسید شدن در خاک، کربنات کلسیم نامحلول را به کلسیم محلول (گچ) تبدیل می‌کند؛ سپس این کلسیم، یون‌های سدیم مضر را از کلوئیدهای خاک جدا کرده و آبشویی آن‌ها را رقم می‌زند.'
      },
      {
        question: 'دوز مصرف سول مکس در سیستم آبیاری چقدر است؟',
        answer: '۱۰ تا ۲۰ لیتر در هکتار در باغات پسته، مرکبات و مزارع در ۲ تا ۳ نوبت در طول فصل رشد توصیه می‌شود.'
      },
      {
        question: 'آیا سول مکس در محلول‌پاشی برای سفیدک سطحی کاربرد دارد؟',
        answer: 'بله؛ با دوز ۲ تا ۳ لیتر در ۱۰۰۰ لیتر آب در ساعات خنک صبح یا غروب، به طور قطعی سفیدک پودری در انگور، گوجه‌فرنگی و کدوئیان را مهار می‌کند.'
      },
      {
        question: 'تفاوت سول مکس با گوگردهای معدنی یا پودری بنتونیت‌دار چیست؟',
        answer: 'گوگرد پودری به دلیل درشتی ذرات ماه‌ها تا سال‌ها دست‌نخورده در خاک می‌ماند؛ ذرات ساب‌میکرون سول مکس ظرف چند روز توسط میکروارگانیسم‌ها فعال و اثرگذار می‌شوند.'
      },
      {
        question: 'آیا برای باغات پسته رفسنجان و سیرجان مناسب است؟',
        answer: 'این محصول پرمصرف‌ترین اصلاح‌کننده در باغات پسته استان‌های کرمان و یزد است و سالانه صدها هکتار باغ شور را احیا می‌نماید.'
      }
    ],
    relatedArticleSlugs: ['liquid-sulfur', 'salinity-remediation-pistachio-rafsanjan', 'soil-salinity-management'],
    relatedProductSlugs: ['salt-stop', 'ph-best', 'redfol']
  },

  // 14. SALT STOP
  'salt-stop': {
    h1Title: 'کود ضد شوری و آبشویی سدیم سالت استاپ (Salt Stop) - کاهش EC و احیای خاک‌های شور کشاورزی',
    h1TitleEn: 'Salt Stop Sodium Displacer & Soil Salinity Remediator - High Organic Calcium & Polyhydroxy Acids',
    h1TitleAr: 'مضاد الملوحة وغسيل الصوديوم سالت ستوب (Salt Stop) - لخفض ملوحة التربة ومياه الري EC',
    metaTitle: 'ضد شوری سالت استاپ | پیشگامان پایدار فلات نیک',
    metaTitleEn: 'Salt Stop Soil Salinity Remediator | Pishgaman Falat Nik',
    metaTitleAr: 'طارد الأملاح سالت ستوب | شركة بيشغامان فلات نیک',
    metaDescription: 'کود ضد شوری سالت استاپ با کلسیم فعال آلی، پلی‌هیدروکسی اسیدها و عوامل آبشویی سدیم. کاهش چشمگیر EC خاک، جایگزینی سدیم با کلسیم و احیای ریشه‌ها در خاک‌های شور.',
    metaDescriptionEn: 'Salt Stop is an advanced soil desalination agent featuring bio-chelated calcium and polyhydroxy compounds to exchange toxic sodium ions and lower soil EC.',
    metaDescriptionAr: 'سالت ستوب هو مركب متخصص لكسر وغسيل أملاح الصوديوم الضارة وخفض الناقلية الكهربائية EC للتربة ومياه الري، معوضاً الكالسيوم النشط لحماية الجذور.',
    longIntro: 'سالت استاپ (Salt Stop) تخصصی‌ترین محصول کشور برای مبارزه با بزرگترین چالش کشاورزی فلات ایران، یعنی شوری آب و خاک (Salinity & Sodicity) است. شوری ناشی از تجمع سدیم (Na) ساختار خاک را متلاشی، تهویه را مسدود و ریشه را دچار مسمومیت اسمزی می‌سازد. سالت استاپ با بهره‌گیری از کلسیم کمپلکس‌شده با اسیدهای پلی‌هیدروکسی کربوکسیلیک (PHCA)، به سرعت جایگزین یون‌های سدیم بر روی ذرات خاک شده و سدیم آزادشده را به شکل کمپلکس‌های محلول درآورده تا با آب آبیاری به زیر لایه ریشه هدایت و آبشویی شوند.',
    longIntroEn: 'Salt Stop is a high-performance soil amendment formulated to combat severe soil and water salinity across arid agricultural zones. Leveraging polyhydroxy carboxylic acids (PHCA) and bioavailable calcium, Salt Stop replaces exchangeable sodium with beneficial calcium, flocculating compacted clay platelets and purging toxic salts below the active root zone.',
    longIntroAr: 'سالت ستوب هو الحل العلمي الأول لمشكلة ملوحة التربة والمياه في المناطق الجافة، حيث يحل الكالسيوم النشط محل الصوديوم الضار ويسهل غسيله بعيداً عن منطقة الجذور.',
    analysis: [
      'کلسیم کلاته زیستی فعال (CaO): ۱۵٪',
      'اسیدهای پلی‌هیدروکسی کربوکسیلیک (PHCA): ۱۰٪',
      'پتاسیم محلول (K2O): ۴٪',
      'عوامل کاهنده کشش سطحی و تسریع آبشویی: ۳٪',
      'ماده آلی کربنی فعال: ۸٪'
    ],
    analysisEn: [
      'Bio-Chelated Calcium Oxide (CaO): 15%',
      'Polyhydroxy Carboxylic Acids (PHCA): 10%',
      'Soluble Potash (K2O): 4%',
      'Surfactant-driven sodium leaching facilitators: 3%',
      'Active organic carbon fraction: 8%'
    ],
    analysisAr: [
      'أكسيد الكالسيوم المخلبي النشط (CaO): ١٥٪',
      'أحماض بولي هيدروكسي كربوكسيلية (PHCA): ١٠٪',
      'بوتاسيوم ذائب: ٤٪',
      'محفزات خفض التوتر السطحي وغسيل الأملاح: ٣٪',
      'كربون عضوي نشط: ٨٪'
    ],
    tankMixes: [
      { productName: 'سول مکس (گوگرد مایع)', slug: 'sol-max', reason: 'قوی‌ترین پکیج اصلاح شوری و قلیاییت خاک در باغات پسته، انار و صیفی‌جات' },
      { productName: 'چلنجر (هیومیک پودری)', slug: 'challenger', reason: 'بازسازی کامل خاکدانه‌ها و تسریع رشد ریشه‌های نوپا' },
      { productName: 'پی‌اچ بست (تنظیم‌کننده pH)', slug: 'ph-best', reason: 'تعدیل سختی آب آبیاری و روان‌سازی جریان آب در بافت خاک' }
    ],
    cautions: [
      'سالت استاپ اختصاصاً برای مصرف خاکی همراه با آب آبیاری فرموله شده است.',
      'در نوبت مصرف سالت استاپ، حجم آبیاری باید به اندازه‌ای باشد که آبشویی سدیم به اعماق خاک به خوبی صورت پذیرد.',
      'در جای خشک و خنک نگهداری شود.'
    ],
    cautionsEn: [
      'Formulated strictly for soil fertigation via flood or drip irrigation.',
      'Ensure adequate leaching water volume accompanies application to push sodium below root depth.',
      'Store in a cool and well-ventilated space.'
    ],
    cautionsAr: [
      'مخصص للتسميد الأرضي عبر شبكات الري بالتنقيط أو الغمر.',
      'يجب تأمين كمية مياه ري كافية لضمان غسيل الصوديوم إلى أسفل منطقة الجذور.',
      'يُحفظ في مكان بارد وجاف.'
    ],
    faqs: [
      {
        question: 'چگونه سالت استاپ هدایت الکتریکی (EC) خاک را کاهش می‌دهد؟',
        answer: 'سالت استاپ با شکستن پیوند سدیم با ذرات رس خاک و تبدیل آن به نمک‌های قابل شستشو، با یک نوبت آبیاری سنگین پس از مصرف، بخش عمده املاح را از محدوده ریشه خارج ساخته و EC را پایین می‌آورد.'
      },
      {
        question: 'دوز مصرف سالت استاپ در هر هکتار چقدر است؟',
        answer: 'بسته به میزان شوری خاک و آب (EC)، بین ۱۰ تا ۲۰ لیتر در هکتار در هر نوبت مصرف همراه با آب آبیاری (۲ تا ۳ نوبت در فصل) توصیه می‌شود.'
      },
      {
        question: 'آیا سالت استاپ باعث بهبود نفوذپذیری آب در خاک‌های سخت می‌شود؟',
        answer: 'بله؛ با حذف اثر تخریبی سدیم که باعث فشردگی خاک می‌شود، دانه‌بندی خاک اصلاح شده و آب به سرعت در عمق نفوذ می‌کند.'
      },
      {
        question: 'آیا برای باغات پسته کرمان و خوزستان کاربرد دارد؟',
        answer: 'بله؛ این محصول رتبه اول رضایت کشاورزان در مناطق با آب‌های لب‌شور و باغات پسته و نخلستان‌ها را به خود اختصاص داده است.'
      },
      {
        question: 'آیا می‌توان سالت استاپ را با هیومیک اسید مخلوط کرد؟',
        answer: 'ترکیب همزمان سالت استاپ با چلنجر یا هیومی فارم هم‌افزایی چشمگیری در نجات باغ از تنش شوری ایجاد می‌نماید.'
      }
    ],
    relatedArticleSlugs: ['soil-salinity-management', 'salinity-remediation-pistachio-rafsanjan', 'vegetable-salinity-stress-isfahan'],
    relatedProductSlugs: ['sol-max', 'challenger', 'ph-best']
  },

  // 15. ANGELA
  'angela': {
    h1Title: 'کود فسفیت پتاسیم سیستمیک آنجلا (Angela) - القای مقاومت سیستمیک گیاه و قارچ‌کش بیولوژیک ریشه و طوقه',
    h1TitleEn: 'Angela Systemic Potassium Phosphite - SAR Elicitor, Downy Mildew & Phytophthora Suppressor',
    h1TitleAr: 'سماد فوسفيت البوتاسيوم الجهازي آنجلا (Angela) - محفز المناعة ومبيد فطري لأعفان الجذور واللفحة',
    metaTitle: 'فسفیت پتاسیم آنجلا | پیشگامان پایدار فلات نیک',
    metaTitleEn: 'Angela Potassium Phosphite | Pishgaman Falat Nik',
    metaTitleAr: 'فوسفيت البوتاسيوم آنجلا | شركة بيشغامان فلات نيك',
    metaDescription: 'کود فسفیت پتاسیم سیستمیک آنجلا با حرکت دوطرفه در آوندها. القای سنتز فیتوالکسین‌ها، پیشگیری و درمان گموز پسته و مرکبات، فیتوفتورا و سفیدک داخلی صیفی‌جات.',
    metaDescriptionEn: 'Angela Potassium Phosphite activates Systemic Acquired Resistance (SAR), moving bidirectionally through xylem and phloem to curb Phytophthora, Pythium, and downy mildew.',
    metaDescriptionAr: 'مركب فوسفيت البوتاسيوم الجهازي آنجلا، يحفز المناعة الذاتية للنبات ضد الفطريات البيضية وأعفان الجذور والتصمغ (الجموز) في الحمضيات والفستق.',
    longIntro: 'آنجلا (Angela) فرمولاسیون تخصصی فسفیت پتاسیم مایع با خلوص بالا و حرکت دوطرفه (Amphimobile) در تمامی بافت‌های گیاهی است. بر خلاف فسفات معمولی، یون فسفیت (PO3) پس از جذب، بلافاصله ژن‌های دفاعی گیاه را تحریک کرده و موجب تولید انبوه فیتوالکسین‌ها (آنتی‌بیوتیک‌های طبیعی گیاهی) و ضخیم شدن دیواره سلولی می‌گردد. آنجلا قوی‌ترین سد بیولوژیک در برابر بیماری‌های مخرب قارچی نظیر گموز پسته و مرکبات (Phytophthora)، بوته‌میری صیفی‌جات، و سفیدک‌های دروغین است.',
    longIntroEn: 'Angela Potassium Phosphite functions as both high-efficiency systemic nutrition and an aggressive elicitor of Systemic Acquired Resistance (SAR). Its amphimobile translocation allows it to descend via phloem to protect root tips from water molds while ascending to defend foliage from downy mildew and anthracnose.',
    longIntroAr: 'آنجلا هو سماد فوسفيت البوتاسيوم المبتكر ذو الحركة الجهازية المزدوجة صعوداً وهبوطاً داخل النبات، يحفز المناعة الطبيعية ويقضي على الفطريات دون متبقيات كيميائية ضارة.',
    analysis: [
      'فسفر در فرم فسفیت قابل جذب (P2O3): ۳۰٪',
      'پتاسیم محلول فعال (K2O): ۲۰٪',
      'حرکت سیستمیک دوطرفه در آوند چوب و آبکش',
      'عوامل القاکننده فیتوالکسین و مقاومت القایی (SAR)',
      'فاقد دوره کارنس و ایمن برای صادرات محصولات'
    ],
    analysisEn: [
      'Phosphorus as Phosphite (P2O3): 30%',
      'Active Potash (K2O): 20%',
      'True Amphimobile (two-way xylem/phloem) translocation',
      'Bio-elicitors triggering Phytoalexin production',
      'Zero Pre-Harvest Interval (PHI) suitable for export crops'
    ],
    analysisAr: [
      'الفوسفور بصيغة فوسفيت متاح (P2O3): ٣٠٪',
      'بوتاسيوم ذائب نشط (K2O): ٢٠٪',
      'حركة جهازية مزدوجة في اللحاء والخشب',
      'محفزات تخليق الفيتوالكسينات المناعية',
      'فترة أمان صفرية (Zero PHI) آمن للمحاصيل التصديرية'
    ],
    tankMixes: [
      { productName: 'سیلیگارد (سیلیکات پتاسیم)', slug: 'siligard', reason: 'هم‌پوشانی محافظت فیزیکی سیلیس با ایمنی سیستمیک فسفیت' },
      { productName: 'استورمی (کلسیم مایع)', slug: 'stormy', reason: 'افزایش چشمگیر ضخامت دیواره سلولی و مهار بیماری‌های پوسیدگی میوه' },
      { productName: 'تایگر K High (ژل پتاسیم)', slug: 'tiger-k-high', reason: 'تقویت باروری و ایمنی کامل بوته در انتهای فصل' }
    ],
    cautions: [
      'با ترکیبات مس و گوگرد غلیظ همزمان در یک تانکر بدون تست اختلاط ترکیب نشود.',
      'در زمان وقوع بیماری حاد قارچی، مصرف در دو نوبت با فاصله ۱۰ تا ۱۴ روز تکرار گردد.',
      'در دمای خنک و دور از نور نگهداری شود.'
    ],
    cautionsEn: [
      'Do not mix simultaneously with heavy coppers or concentrated sulfur without jar verification.',
      'During acute fungal pressure, repeat application after 10-14 days.',
      'Store in a cool warehouse away from direct sunlight.'
    ],
    cautionsAr: [
      'تجنب الخلط المباشر مع النحاس الثقيل أو الكبريت المركز دون اختبار.',
      'في حالات الإصابة الشديدة، كرر الرش بعد ١٠ إلى ١٤ يوماً.',
      'يُحفظ في مكان بارد بعيداً عن الشمس.'
    ],
    faqs: [
      {
        question: 'چگونه آنجلا بیماری گموز (شیره سیاه طوقه) پسته و مرکبات را مهار می‌کند؟',
        answer: 'فسفیت پتاسیم پس از محلول‌پاشی، از طریق آوند آبکش مستقیماً به سمت طوقه و ریشه حرکت کرده، دیواره قارچ فیتوفتورا را تخریب و ترشح صمغ را متوقف می‌سازد.'
      },
      {
        question: 'دوز مصرف آنجلا در محلول‌پاشی برگی چقدر است؟',
        answer: '۲ تا ۲.۵ لیتر در ۱۰۰۰ لیتر آب برای درختان میوه و صیفی‌جات در ۲ تا ۳ نوبت توصیه می‌شود.'
      },
      {
        question: 'آیا آنجلا برای مصرف خاکی و آبکود مناسب است؟',
        answer: 'بله؛ مصرف ۵ تا ۷ لیتر در هکتار همراه با آب آبیاری، سیستم ریشه را در برابر پوسیدگی ریشه پیتیوم و فیتوفتورا کاملاً ایمن می‌کند.'
      },
      {
        question: 'آیا آنجلا دوره کارنس (ماندگاری سم) دارد؟',
        answer: 'خیر؛ آنجلا یک کود مغذی با اثر القای مقاومت طبیعی است و دوره کارنس آن صفر روز است، بنابراین حتی یک روز قبل از برداشت قابل استفاده است.'
      },
      {
        question: 'آیا برای سفیدک داخلی (داونی میلدیو) خیار و گوجه موثر است؟',
        answer: 'فوق‌العاده موثر است و در گلخانه‌ها مصرف منظم آن مانع از همه‌گیری سفیدک داخلی در دوره‌های ابری و مرطوب می‌شود.'
      }
    ],
    relatedArticleSlugs: ['potassium-fertigation', 'liquid-sulfur', 'citrus-winter-nutrition-mazandaran'],
    relatedProductSlugs: ['siligard', 'stormy', 'tiger-k-high']
  },

  // 16. PH BEST
  'ph-best': {
    h1Title: 'تنظیم‌کننده pH و سختی آب سمپاشی PH Best - مهار هیدرولیز قلیایی و افزایش ۲ برابری راندمان کود و سم',
    h1TitleEn: 'PH Best Spray Water Acidifier & Water Conditioner - Anti-Alkaline Hydrolysis & Adjuvant',
    h1TitleAr: 'منظم حموضة وعسر مياه الرش PH Best - مانع التحلل القلوي ومضاعف كفاءة المبيدات والأسمدة',
    metaTitle: 'تنظیم‌کننده pH آب سمپاشی PH Best | پیشگامان پایدار فلات نیک',
    metaTitleEn: 'PH Best Spray Water Conditioner | Pishgaman Falat Nik',
    metaTitleAr: 'منظم حموضة مياه الرش PH Best | شركة بيشغامان فلات نيك',
    metaDescription: 'تنظیم‌کننده و بافر تخصصی pH و عسر آب سمپاشی PH Best با شناساگر رنگی (Color Indicator). جلوگیری از خنثی شدن سموم و کودهای برگی در آب‌های سنگین و قلیایی ایران.',
    metaDescriptionEn: 'PH Best is an advanced spray tank water conditioner and acidifier featuring a built-in colorimetric indicator to neutralize bicarbonate hardness and prevent pesticide hydrolysis.',
    metaDescriptionAr: 'مركب PH Best المتخصص لضبط درجة حموضة وعسر مياه الرش الزراعي مع مؤشر لوني، يمنع تحلل المبيدات الحشرية والفطرية ويرفع فاعلية التسميد الورقي.',
    longIntro: 'محصول پی‌اچ بست (PH Best) پاسخی علمی به یک واقعیت تلخ در کشاورزی کشور است: بیش از ۸۰٪ چاه‌های کشاورزی ایران دارای آبی قلیایی (pH بالای ۷.۸) و همراه با سختی و بی‌کربنات‌های سنگین هستند. در این آب‌ها، سموم حشره‌کش، قارچ‌کش و کودهای برگی ظرف چند دقیقه هیدرولیز و غیرفعال می‌شوند! پی‌اچ بست با داشتن شناساگر تغییر رنگ هوشمند (Color Indicator)، اسیدیته آب تانکر را به محدوده طلایی ۵.۵ تا ۶.۲ رسانده، یون‌های کلسیم و منیزیم مزاحم را بلوکه کرده و کشش سطحی قطرات را کاهش می‌دهد تا راندمان هر سمپاشی حداقل دو برابر شود.',
    longIntroEn: 'PH Best is a specialized buffering adjuvant and water conditioner engineered for alkaline, hard well water. Featuring a visual color-shift indicator, PH Best neutralizes calcium-magnesium bicarbonates that deactivate organophosphate, pyrethroid, and foliar fertilizer sprays, transforming hard water into an ideal carrier solution.',
    longIntroAr: 'بي إتش بست هو مركب فريد لتنظيم ومعادلة عسر وقلوية مياه الرش مع مؤشر لوني ذكي، يحمي المادة الفعالة للمبيدات من التحلل القلوي ويضمن أقصى نفاذية عبر الثغور.',
    analysis: [
      'کمپلکس اسیدهای آلی بافرکننده pH: ۳۵٪',
      'عوامل غیرفعال‌کننده سختی آب (Sequestering Agents): ۱۵٪',
      'سورفکتانت‌های کاهنده کشش سطحی (Adjuvants): ۱۰٪',
      'شناساگر رنگی هوشمند (Colorimetric pH Indicator)',
      'فسفر فعال زیستی (P2O5): ۱۰٪'
    ],
    analysisEn: [
      'Organic Buffering Acid Complexes: 35%',
      'Water Hardness Sequestering & Chelation Agents: 15%',
      'Surface Tension Reduction Adjuvants: 10%',
      'Smart Colorimetric pH Shift Indicator',
      'Available Bio-Phosphorus (P2O5): 10%'
    ],
    analysisAr: [
      'مركبات أحماض عضوية منظمة للحموضة: ٣٥٪',
      'عوامل حجز وعزل أملاح العسر (كالسيوم ومغنيسيوم): ١٥٪',
      'مواد ناشرة وخافضة للتوتر السطحي: ١٠٪',
      'مؤشر لوني ذكي لتحديد درجة الحموضة المثالية',
      'فوسفور متاح (P2O5): ١٠٪'
    ],
    tankMixes: [
      { productName: 'سول مکس (گوگرد مایع)', slug: 'sol-max', reason: 'تنظیم اولیه آب سمپاشی قبل از افزودن گوگرد جهت افزایش پوشش برگی' },
      { productName: 'سالت استاپ (ضد شوری)', slug: 'salt-stop', reason: 'پکیج کامل رفع املاح مضر آب و خاک' },
      { productName: 'فیکشن (جلبک دریایی)', slug: 'fiction', reason: 'تضمین نفوذ حداکثری ترکیبات زیستی جلبک از روزنه‌های برگی' }
    ],
    cautions: [
      'همیشه پی‌اچ بست را قبل از هرگونه سم یا کود، به عنوان اولین ترکیب به تانکر آب اضافه کنید.',
      'به تغییر رنگ آب تانکر دقت فرمایید تا به رنگ صورتی/قرمز ملایم (pH=5.5-6) برسد.',
      'از تماس مستقیم مایع غلیظ با پوست و چشم خودداری فرمایید.'
    ],
    cautionsEn: [
      'Always add PH Best to the spray tank first before introducing any pesticides or fertilizers.',
      'Monitor water color shift to achieve desired pinkish hue corresponding to pH 5.5-6.0.',
      'Avoid direct contact of concentrated liquid with skin and eyes.'
    ],
    cautionsAr: [
      'أضف دائماً PH Best إلى خزان الرش أولاً قبل وضع أي مبيد أو سماد.',
      'راقب تغير لون الماء حتى يصل إلى اللون الوردي/البرتقالي الدال على pH ٥.٥ إلى ٦.',
      'تجنب ملامسة السائل المركز للعين أو الجلد.'
    ],
    faqs: [
      {
        question: 'چرا باید پی‌اچ بست اولین ماده‌ای باشد که به مخزن سمپاش اضافه می‌شود؟',
        answer: 'چون وظیفه آن خنثی‌سازی کربنات‌ها و یون‌های مزاحم آب است؛ اگر سم قبل از پی‌اچ بست ریخته شود، در همان دقایق اول در آب قلیایی تجزیه و بی‌اثر می‌گردد.'
      },
      {
        question: 'میزان مصرف پی‌اچ بست در ۱۰۰۰ لیتر آب چقدر است؟',
        answer: 'بسته به سختی آب چاه، ۵۰ تا ۱۰۰ سی‌سی در هر ۱۰۰۰ لیتر آب کافی است تا آب به pH مطلوب برسد (شناساگر رنگی تغییر رنگ را نشان می‌دهد).'
      },
      {
        question: 'شناساگر رنگی پی‌اچ بست چگونه کار می‌کند؟',
        answer: 'با ریختن پی‌اچ بست، آب ابتدا زرد و با رسیدن به اسیدیته ایده‌آل (حدود ۵.۵ تا ۶) به رنگ صورتی/نارنجی ملایم درمی‌آید که نشان‌دهنده زمان مناسب افزودن سموم است.'
      },
      {
        question: 'آیا برای سمپاشی پسیل پسته و کرم خراط موثر است؟',
        answer: 'فوق‌العاده حیاتی است؛ سمومی نظیر استامی‌پراید و موونتو در آب‌های شور قلیایی پسته پایداری خود را از دست می‌دهند اما با پی‌اچ بست اثر کامل خود را حفظ می‌کنند.'
      },
      {
        question: 'آیا پی‌اچ بست خطوط لوله و نازل‌های سمپاش را باز می‌کند؟',
        answer: 'بله؛ با حل کردن رسوبات کلسیمی و کربناتی درون لوله‌ها و نازل‌ها، گرفتگی فیلترها و نازل‌های سمپاشی را به طور کامل برطرف می‌سازد.'
      }
    ],
    relatedArticleSlugs: ['spray-water-ph-conditioning', 'liquid-sulfur', 'soil-salinity-management'],
    relatedProductSlugs: ['sol-max', 'salt-stop', 'fiction']
  }
};
