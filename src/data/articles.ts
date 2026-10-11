import { Article } from '../types';

import imgAmino from '../assets/images/amino_stress_crop_1791738546562.jpg';
import imgSeaweed from '../assets/images/seaweed_bio_crop_1791738561930.jpg';
import imgPotassium from '../assets/images/potassium_fruit_sizing_1791738580126.jpg';
import imgSulfur from '../assets/images/sulfur_soil_drip_1791738596980.jpg';
import imgCalciumBoron from '../assets/images/calcium_boron_crop_1791738615645.jpg';
import imgLab from '../assets/images/agri_research_lab_1791480948724.jpg';
import imgGoldenWheat from '../assets/images/golden_wheat_field_1791481535252.jpg';
import imgWheatField from '../assets/images/hero_wheat_field_1791480930784.jpg';

export const articlesData: Article[] = [
  // --- 1. Google Trend #1: Amino Acids & Biostimulants ---
  {
    id: 'amino-acids-heat-stress',
    slug: 'amino-acids-heat-stress',
    imageUrl: imgAmino,
    googleTrendKeyword: {
      fa: 'آمینواسید کشاورزی، تنش گرمایی و خشکی تابستان',
      en: 'Plant Biostimulants & Amino Acids for Heat Stress Recovery',
      ar: 'الأحماض الأمينية للنبات ومكافحة الإجهاد الحراري والجفاف'
    },
    fa: {
      title: 'نقش بیوشیمیایی آمینواسیدهای آزاد و ال-پرولین در بازیابی گیاه پس از تنش‌های حرارتی و خشکی',
      category: 'محرک‌های رشد و ضد تنش',
      readTime: '۸ دقیقه',
      date: 'مهر ۱۴۰۴',
      author: 'دکتر راستین رستمی - مدیر علمی شرکت پیشگامان پایدار فلات نیک',
      summary: 'بررسی نقش اسیدهای آمینه چپ‌گرد (L-α-Amino Acids) به ویژه پرولین و گلیسین بتائین در حفظ فشار تورژسانس سلولی، پاکسازی گونه‌های فعال اکسیژن (ROS) و فعال‌سازی مجدد سنتز پروتئین با مکمل دوپینگ (Doping).',
      abstract: 'با افزایش موج‌های گرمایی شدید در فصول گرم و کاهش منابع آب، تنش‌های غیرزیستی (Abiotic Stresses) عامل اصلی افت ۴۰ تا ۶۰ درصدی عملکرد مزارع و باغات پسته، گوجه‌فرنگی و صیفی‌جات هستند. در این مقاله به بررسی سینتیک اسمولیت‌های آلی و مکانیسم جذب برگی آمینواسیدهای هیدرولیز آنزیمی پرداخته شده است.',
      contentSections: [
        {
          heading: 'تنش اکسیداتیو و بسته شدن روزنه‌های برگ',
          text: 'هنگامی که دمای محیط از ۳۵ درجه سانتی‌گراد فراتر می‌رود، گیاه جهت جلوگیری از اتلاف آب روزنه‌های خود را می‌بندد. این پدیده فتوسنتز را متوقف کرده و تجمع رادیکال‌های آزاد اکسیژن (ROS) را رقم می‌زند که باعث تجزیه کلروفیل و کلروز حرارتی می‌شود.'
        },
        {
          heading: 'نقش نجات‌بخش پرولین و اسید گلوتامیک',
          text: 'اسید آمینه ال-پرولین به عنوان قوی‌ترین اسمولیت درون‌سلولی، فشار اسمزی سیتوپلاسم را حفظ کرده و ساختار آنزیم روبیسکو را در برابر دناتوره شدن حرارتی محافظت می‌کند. گلوتامیک اسید نیز به عنوان پیش‌ساز کلروفیل، بازسازی سبزینگی را تسریع می‌بخشد.'
        },
        {
          heading: 'فرمولاسیون تخصصی دوپینگ (Doping)',
          text: 'محصول دوپینگ شرکت پیشگامان با دارا بودن درصد بالای آمینواسیدهای آزاد به فرم L به همراه عناصر میکروی هم‌افزا، به سرعت از کوتیکول برگ جذب شده و ظرف ۴۸ ساعت علائم سوختگی ناشی از بادزدگی و موج گرما را مهار می‌کند.'
        },
        {
          heading: 'برنامه مصرف میدانی',
          text: 'محلول‌پاشی با دوز ۱.۵ تا ۲ لیتر در هزار لیتر آب ۲۴ تا ۴۸ ساعت قبل از ورود موج گرمایی یا بلافاصله پس از کاهش شوک اولیه، مقاومت و باردهی محصول را حفظ می‌کند.'
        }
      ],
      references: [
        'Ashraf, M., & Foolad, M. R. (2007). "Roles of glycine betaine and proline in improving plant abiotic stress resistance". Environmental and Experimental Botany, 59(2), 206-216.',
        'FAO (2022). "Plant Biostimulants in Sustainable Crop Production". Rome.',
        'Kaur, G., & Asthir, B. (2015). "Proline: a key player in plant abiotic stress tolerance". Biologia Plantarum, 59(4), 609-619.'
      ],
      relatedProducts: ['دوپینگ (Doping)', 'جامپر (Jumper)', 'فیکشن (عصاره جلبک دریایی)']
    },
    en: {
      title: 'Biochemical Role of Free L-Amino Acids and Proline in Crop Recovery from Heat & Drought Stress',
      category: 'Biostimulants & Stress Relief',
      readTime: '8 min',
      date: 'October 2024',
      author: 'Dr. Rastin Rostami - Chief Agronomy Scientist, Pishgaman Paydar Falat Nik',
      summary: 'Exploring the enzymatic mechanism of left-handed L-α-amino acids, specifically proline and glutamic acid, in sustaining cellular turgor, scavenging reactive oxygen species (ROS), and reactivating protein synthesis through Doping biostimulant.',
      abstract: 'Abiotic heatwaves and drought spells represent the leading causes of 40-60% yield losses in commercial orchards and open-field vegetables. This paper evaluates the kinetic absorption of enzymatically hydrolyzed free amino acids and their osmotic regulating functions under extreme climatic stress.',
      contentSections: [
        {
          heading: 'Oxidative Stress and Stomatal Closure Dynamics',
          text: 'When ambient canopy temperatures exceed 35°C, crops initiate stomatal closure to minimize transpiration. Consequently, CO2 starvation arrests photosynthesis, causing excess photon accumulation that generates cytotoxic reactive oxygen species (ROS) and severe thermal chlorosis.'
        },
        {
          heading: 'Protective Mechanisms of Proline and Glutamate',
          text: 'L-Proline serves as a premier compatible osmolyte, preserving cytoplasmic hydration and stabilizing Rubisco enzyme folding against thermal denaturation. L-Glutamic acid acts as the direct biochemical precursor to chlorophyll synthesis, restoring foliage vigor.'
        },
        {
          heading: 'Specialized Formulation of Doping Biostimulant',
          text: 'Pishgaman Doping formulation provides biologically active L-configured free amino acids combined with chelated micronutrient cofactors. Its formulation penetrates leaf cuticle barriers rapidly, restoring vegetative vigor within 48 hours of application.'
        },
        {
          heading: 'Agronomic Application Protocol',
          text: 'Foliar application at 1.5 - 2 Liters per 1,000 Liters of water 24-48 hours before predicted heat spikes, or immediately following acute stress, ensures optimal crop recovery and fruit retention.'
        }
      ],
      references: [
        'Ashraf, M., & Foolad, M. R. (2007). "Roles of glycine betaine and proline in improving plant abiotic stress resistance". Environmental and Experimental Botany, 59(2), 206-216.',
        'FAO (2022). "Plant Biostimulants in Sustainable Crop Production". Rome.',
        'Kaur, G., & Asthir, B. (2015). "Proline: a key player in plant abiotic stress tolerance". Biologia Plantarum, 59(4), 609-619.'
      ],
      relatedProducts: ['Doping (L-Amino Acids)', 'Jumper', 'Fiction (Seaweed Extract)']
    },
    ar: {
      title: 'الدور الكيميائي الحيوي للأحماض الأمينية الحرة والبرولين في تعافي المحاصيل من الإجهاد الحراري والجفاف',
      category: 'محفزات النمو ومضادات الإجهاد',
      readTime: '٨ دقائق',
      date: 'أكتوبر ٢٠٢٤',
      author: 'د. راستين رستمي - كبير المستشارين العلميين بشركة بيشغامان بايدار فلات نيك',
      summary: 'دراسة تأثير الأحماض الأمينية اليسارية (L-Amino Acids) وخاصة البرولين وحمض الجلوتاميك في الحفاظ على ضغط الامتلاء الخلوي وإزالة الشوارد الحرة وتنشيط النمو عبر مركب دوبينغ (Doping).',
      abstract: 'تعد موجات الحرارة المرتفعة والجفاف من أكثر التحديات تسبباً في خسارة ٤٠-٦٠٪ من المحصول في بساتين الفستق والخضروات المكشوفة. يتناول هذا البحث سلوك الأحماض الأمينية الحرة ومضادات الإجهاد الحيوية في حماية بروتينات الخلية النباتية.',
      contentSections: [
        {
          heading: 'الإجهاد التأكسدي وانغلاق الثغور التنفسية',
          text: 'مع تجاوز درجات الحرارة حاجز ٣٥ درجة مئوية، تغلق النباتات ثغورها للحد من التبخر. يؤدي ذلك إلى توقف البناء الضوئي وتراكم مركبات الأكسجين النشطة (ROS) التي تهاجم الأغشية الخلوية وتسبب احتراق حواف الأوراق.'
        },
        {
          heading: 'دور البرولين وحمض الجلوتاميك في الحماية',
          text: 'يعمل مركب إل-برولين كمنظم أسموزي قوي يحافظ على توازن الماء داخل السيتوبلازم ويحمي إنزيم الروبيسكو من التفكك الحراري، بينما يسرع الجلوتاميك من إعادة تكوين الكلوروفيل والكلوروبلاست.'
        },
        {
          heading: 'فعالية مركب دوبينغ (Doping) التخصصي',
          text: 'يحتوي مركب دوبينغ من شركة بيشغامان على تركيز عالٍ من الأحماض الأمينية النقية بهيئة L سريعة الامتصاص عبر طبقة الكيوتيكل الورقية، مما يمنح النبات حيوية فورية خلال ٤٨ ساعة فقط.'
        },
        {
          heading: 'توصيات الجرعات الميدانية',
          text: 'ينصح بالرش الورقي بمعدل ١.٥ إلى ٢ لتر لكل ١٠٠٠ لتر ماء قبل موجات الحر الشديدة بـ ٢٤-٤٨ ساعة أو فور التعرض للصدمة المناخية لضمان استمرار التحجيم وتثبيت الثمار.'
        }
      ],
      references: [
        'Ashraf, M., & Foolad, M. R. (2007). "Roles of glycine betaine and proline in improving plant abiotic stress resistance". Environmental and Experimental Botany, 59(2), 206-216.',
        'FAO (2022). "Plant Biostimulants in Sustainable Crop Production". Rome.',
        'Kaur, G., & Asthir, B. (2015). "Proline: a key player in plant abiotic stress tolerance". Biologia Plantarum, 59(4), 609-619.'
      ],
      relatedProducts: ['دوبينغ (Doping)', 'جامبر (Jumper)', 'فيكشن (مستخلص الطحالب البحرية)']
    }
  },

  // --- 2. Google Trend #2: Seaweed Extract & Natural Phytohormones ---
  {
    id: 'seaweed-extract-phytohormones',
    slug: 'seaweed-extract-phytohormones',
    imageUrl: imgSeaweed,
    googleTrendKeyword: {
      fa: 'عصاره جلبک دریایی، هورمون سیتوکینین و افزایش تناژ',
      en: 'Ascophyllum Nodosum Seaweed Extract & Cytokinins for Crop Yield',
      ar: 'مستخلص الطحالب البحرية والسيتوكينين لزيادة الإنتاج والتحجيم'
    },
    fa: {
      title: 'مکانیزم اثر عصاره جلبک دریایی (اسکوفیلوم نودوسوم) در القای تقسیم سلولی و افزایش تناژ مزارع',
      category: 'تغذیه ارگانیک و محرک‌ها',
      readTime: '۷ دقیقه',
      date: 'مهر ۱۴۰۴',
      author: 'واحد بیوتکنولوژی و تغذیه ارگانیک شرکت پیشگامان',
      summary: 'تحلیل بیومولکولی بتائین‌ها، مانیتول، اسید آلژینیک و هورمون‌های فیتوکرومی طبیعی موجود در عصاره جلبک دریایی فیکشن (Fiction) در تحریک سنتز کلروفیل و طویل‌شدن سلول‌های میوه.',
      abstract: 'عصاره خالص جلبک دریایی قهوه‌ای Ascophyllum nodosum یکی از استراتژیک‌ترین بیواستیمولانت‌های جهان است. حضور فیتوهورمون‌های طبیعی نظیر سیتوکینین، اکسین و جیبرلین در کنار پلی‌ساکاریدهای آلژینات، نفوذپذیری غشای ریشه را ارتقا داده و عملکرد تناژ بوته‌ها را تا ۳۵٪ بالا می‌برد.',
      contentSections: [
        {
          heading: 'سیتوکینین و تشدید فاز تقسیم سلولی (Cell Division)',
          text: 'در مراحل اولیه تشکیل میوه و پس از ریزش گلبرگ‌ها، تعداد سلول‌های میوه تعیین‌کننده نهایی پتانسیل درشت‌شدن و تناژ نهایی هستند. سیتوکینین طبیعی موجود در جلبک دریایی فیکشن با تسریع چرخه‌های میتوز، سلول‌بندی حداکثری میوه را تضمین می‌کند.'
        },
        {
          heading: 'آلژینات و مانیتول: عوامل کلات‌کننده طبیعی',
          text: 'اسید آلژینیک با دارا بودن ظرفیت کلات‌کنندگی کاتیون‌ها، عناصر کمیاب نظیر روی و بور را به فرم ارگانیک و قابل جذب درآورده و مانع از بلوکه شدن آن‌ها در بافت برگی می‌شود.'
        },
        {
          heading: 'کاربرد محصول فیکشن (Fiction)',
          text: 'فیکشن شرکت پیشگامان فرآوری‌شده به شیوه استخراج سرد (Cold Extraction) جهت حفظ کامل ساختار بیولوژیک هورمون‌ها است و بهترین مکمل برای بهبود گل‌انگیزی و مقاومت در برابر سرمازدگی دیررس بهاره به شمار می‌آید.'
        }
      ],
      references: [
        'Khan, W., et al. (2009). "Seaweed extracts as biostimulants of plant growth and development". Journal of Plant Growth Regulation, 28(4), 386-399.',
        'Battacharyya, D., et al. (2015). "Seaweed extracts by Ascophyllum nodosum improve crop productivity". Scientia Horticulturae, 196, 39-48.',
        'Craigie, J. S. (2011). "Seaweed extract stimuli in plant science and agriculture". Journal of Applied Phycology, 23(3), 371-393.'
      ],
      relatedProducts: ['فیکشن (Fiction)', 'چلنجر (Challenger)', 'فول شارژر (Full Charger)']
    },
    en: {
      title: 'Physiological Mode of Action of Ascophyllum Nodosum Seaweed Extracts in Fruit Cell Division and Biomass Yield',
      category: 'Organic Nutrition & Stimulants',
      readTime: '7 min',
      date: 'October 2024',
      author: 'Biotechnology & Plant Science Division, Pishgaman Paydar Falat Nik',
      summary: 'Biomolecular evaluation of betaines, mannitol, alginic acid, and natural phytohormones in Fiction seaweed formulation for stimulating chlorophyll biosynthesis and expanding fruit cell count.',
      abstract: 'Ascophyllum nodosum cold-extracted seaweed extract represents one of the most effective natural biostimulants globally. The rich profile of natural cytokinins, auxins, and alginate oligosaccharides directly stimulates cell division phases and boosts harvest weight up to 35%.',
      contentSections: [
        {
          heading: 'Cytokinin Elevation and Rapid Fruit Cell Division',
          text: 'In post-pollination fruitlet stages, the total cell count established during the initial 3-4 weeks dictates ultimate fruit size potential. Natural cytokinins in Fiction stimulate mitosis, resulting in greater cell density and structural resilience.'
        },
        {
          heading: 'Alginates & Mannitol as Endogenous Chelating Ligands',
          text: 'Alginic acid complexes micronutrient cations into organically bound forms, dramatically enhancing foliar translocation and mitigating nutrient fixation in calcareous conditions.'
        },
        {
          heading: 'Agronomic Application of Fiction Formulation',
          text: 'Pishgaman Fiction is processed via low-temperature cold extraction to preserve bioactive peptides and hormonal integrity, providing unparalleled frost resilience and enhanced fruit set.'
        }
      ],
      references: [
        'Khan, W., et al. (2009). "Seaweed extracts as biostimulants of plant growth and development". Journal of Plant Growth Regulation, 28(4), 386-399.',
        'Battacharyya, D., et al. (2015). "Seaweed extracts by Ascophyllum nodosum improve crop productivity". Scientia Horticulturae, 196, 39-48.',
        'Craigie, J. S. (2011). "Seaweed extract stimuli in plant science and agriculture". Journal of Applied Phycology, 23(3), 371-393.'
      ],
      relatedProducts: ['Fiction (Ascophyllum Nodosum)', 'Challenger', 'Full Charger']
    },
    ar: {
      title: 'آلية عمل مستخلص الطحالب البحرية (أسكوفيلوم نودوسوم) في تنشيط الانقسام الخلوي وزيادة إنتاجية المحاصيل',
      category: 'التغذية العضوية والمحفزات',
      readTime: '٧ دقائق',
      date: 'أكتوبر ٢٠٢٤',
      author: 'قسم التكنولوجيا الحيوية والتغذية - شركة بيشغامان',
      summary: 'تحليل جزيئي لمحتوى حمض الألجينيك، المانيتول، والهورمونات الطبيعية (السيتوكينينات) في مستخلص فيكشن (Fiction) لتعزيز البناء الضوئي وحجم الثمار.',
      abstract: 'يعتبر مستخلص طحالب أسكوفيلوم نودوسوم من أقوى المحفزات الحيوية في الزراعة الحديثة. تحتوي هذه الطحالب على سيتوكينات وأكسينات طبيعية تحفز انقسام الخلايا في الثمار الصغيرة وترفع الإنتاجية الإجمالية بنسبة تصل إلى ٣٥٪.',
      contentSections: [
        {
          heading: 'السيتوكينين وتحفيز انقسام الخلايا المبكر',
          text: 'في المرحلة التي تلي عقد الثمار مباشرة، يحدد عدد الخلايا المتكونة الحجم النهائي للثمرة. تعمل السيتوكينات الطبيعية في مركب فيكشن على تحفيز الانقسام الخلوي السريع مما يمنع تشوه الثمار.'
        },
        {
          heading: 'حمض الألجينيك والمانيتول كناقلات مخلبية',
          text: 'يقوم حمض الألجينيك بخلب العناصر الدقيقة طبيعياً، مما يسهل انتقالها السريع عبر الأنسجة الوعائية للنبات ويمنع ترسبها في الأراضي الكلسية.'
        },
        {
          heading: 'مزايا مركب فيكشن (Fiction) المستخلص على البارد',
          text: 'يتم إنتاج فيكشن بتقنية الاستخلاص على البارد للحفاظ على حيوية الهرمونات والإنزيمات، ويعد السلاح الأمثل للمزارع لتحسين العقد وحماية الأشجار من الصقيع الربيعي.'
        }
      ],
      references: [
        'Khan, W., et al. (2009). "Seaweed extracts as biostimulants of plant growth and development". Journal of Plant Growth Regulation, 28(4), 386-399.',
        'Battacharyya, D., et al. (2015). "Seaweed extracts by Ascophyllum nodosum improve crop productivity". Scientia Horticulturae, 196, 39-48.',
        'Craigie, J. S. (2011). "Seaweed extract stimuli in plant science and agriculture". Journal of Applied Phycology, 23(3), 371-393.'
      ],
      relatedProducts: ['فيكشن (Fiction)', 'چلنجر (Challenger)', 'فول شارژر (Full Charger)']
    }
  },

  // --- 3. Google Trend #3: Liquid Potassium & Fruit Sizing ---
  {
    id: 'liquid-potassium-fruit-sizing',
    slug: 'liquid-potassium-fruit-sizing',
    imageUrl: imgPotassium,
    googleTrendKeyword: {
      fa: 'پتاس بالا، درشت شدن میوه، قند و بریکس، جلوگیری از ترکیدگی',
      en: 'High Potassium Fertigation, Fruit Sizing, Brix & Anti-Cracking',
      ar: 'سماد بوتاسيوم عالي، تحجيم الثمار، رفع نسبة السكر ومنع التشقق'
    },
    fa: {
      title: 'نقش کودهای پتاسیم بالا و ژل K High در انتقال کربوهیدرات‌ها، درشت شدن دانه و مهار ترکیدگی پوست میوه',
      category: 'ژل‌های تغذیه و عناصر ماکرو',
      readTime: '۹ دقیقه',
      date: 'شهریور ۱۴۰۴',
      author: 'دکتر راستین رستمی - کارشناس ارشد فیزیولوژی گیاهی پیشگامان',
      summary: 'تحلیل بیوشیمیایی نقش عنصر پتاسیم (K+) در بارگیری آوندی قندها (Phloem Loading)، افزایش شاخص بریکس (Brix)، ضخامت دیواره سلولی و عملکرد ژل تایگر K High در باغات پسته، مرکبات و مزارع هندوانه و گوجه‌فرنگی.',
      abstract: 'پتاسیم عنصری حیاتی در تنظیم باز و بسته شدن روزنه‌ها و فعال‌کننده بیش از ۶۰ سیستم آنزیمی سنتز نشاسته است. در مرحله پر شدن مغز پسته و درشت شدن میوه‌ها، کمبود پتاسیم باعث پوکی، سبکی دانه و ترکیدگی پوست ناشی از عدم تعادل اسمزی می‌گردد. در این مقاله اثر ژل غلیظ تایگر K High ارزیابی شده است.',
      contentSections: [
        {
          heading: 'بارگیری آبکش و انتقال مواد فتوسنتزی به میوه',
          text: 'پتاسیم نیروی محرکه اصلی گرادیان الکتروشیمیایی برای انتقال قندهای سنتز شده از برگ‌ها به مخزن‌های نهایی (دانه‌ها و میوه‌ها) است. مصرف ناکافی پتاس در تابستان موجب تجمع کربوهیدرات در برگ و زردی فیزیولوژیک می‌گردد.'
        },
        {
          heading: 'جلوگیری از عارضه ترکیدگی پوست میوه (Fruit Cracking)',
          text: 'نوسانات آبیاری در کنار کمبود پتاسیم و کلسیم موجب ناهماهنگی رشد گوشت و پوست میوه شده و ترکیدگی را ایجاد می‌کند. یون K با تنظیم خاصیت ارتجاعی دیواره‌ها، این تنش را خنثی می‌سازد.'
        },
        {
          heading: 'برتری تکنولوژی ژل تایگر K High',
          text: 'کود ژل تایگر پتاس بالا شرکت پیشگامان دارای غلظت بالای K2O خالص با حلالیت ۱۰۰٪ و بدون کلر و سدیم است. فرمولاسیون ژله‌ای چسبندگی فوق‌العاده‌ای روی برگ ایجاد کرده و شسته‌شدن با شبنم را به صفر می‌رساند.'
        }
      ],
      references: [
        'Marschner, H. (2012). "Marschner\'s Mineral Nutrition of Higher Plants". Academic Press.',
        'Oosterhuis, D. M., et al. (2013). "The role of potassium in crop yield and quality". Agronomy Journal, 105(3), 856-867.',
        'Pettigrew, W. T. (2008). "Potassium influences on yield and quality production for maize, wheat, and fruits". Physiologia Plantarum, 133(4), 670-681.'
      ],
      relatedProducts: ['تایگر K High (کود ژل پتاس)', 'تایگر متوازن (Tiger Balance)', 'سیلیگارد (سیلیکات پتاسیم)']
    },
    en: {
      title: 'High-Potassium Fertigation Mechanics in Phloem Sugar Translocation, Fruit Sizing & Anti-Cracking Protection',
      category: 'Nutrition Gels & Macro Nutrients',
      readTime: '9 min',
      date: 'September 2024',
      author: 'Dr. Rastin Rostami - Lead Agronomist, Pishgaman Paydar Falat Nik',
      summary: 'Biochemical investigation of potassium (K+) in phloem sucrose loading, brix elevation, cell wall elastic pressure, and the efficiency of Tiger K High Gel across pistachio, citrus, melon, and tomato crops.',
      abstract: 'Potassium is indispensable for turgor maintenance and activating over 60 enzymatic reactions involved in carbohydrate partitioning. In late vegetative and fruit bulking phases, sub-optimal K levels trigger premature ripening, hollow kernels, and catastrophic fruit cracking.',
      contentSections: [
        {
          heading: 'Phloem Loading and Osmotic Sugar Transport',
          text: 'K+ acts as the osmotic counter-ion driving mass flow of sucrose from source leaves to developing fruit sink tissues. Adequate potassium directly accelerates kernel weight accumulation and color development.'
        },
        {
          heading: 'Prevention of Fruit Cracking and Physiological Splitting',
          text: 'Irregular irrigation intervals combined with calcium-potassium imbalances induce rapid internal flesh expansion beyond epidermal elasticity limits. K buffering sustains uniform cell turgidity.'
        },
        {
          heading: 'Technological Superiority of Tiger K High Gel',
          text: 'Pishgaman Tiger K High Gel offers superior K2O density with 100% water solubility and zero harmful chlorides. The specialized gel matrix provides exceptional leaf adherence and extended nutrient release.'
        }
      ],
      references: [
        'Marschner, H. (2012). "Marschner\'s Mineral Nutrition of Higher Plants". Academic Press.',
        'Oosterhuis, D. M., et al. (2013). "The role of potassium in crop yield and quality". Agronomy Journal, 105(3), 856-867.',
        'Pettigrew, W. T. (2008). "Potassium influences on yield and quality production for maize, wheat, and fruits". Physiologia Plantarum, 133(4), 670-681.'
      ],
      relatedProducts: ['Tiger K High (Potassium Gel)', 'Tiger Balance', 'Siligard (Potassium Silicate)']
    },
    ar: {
      title: 'أهمية التسميد بالبوتاسيوم عالي التركيز وجل K High في نقل السكريات، تحجيم الثمار ومنع التشقق',
      category: 'جل التغذية والعناصر الكبرى',
      readTime: '٩ دقائق',
      date: 'سبتمبر ٢٠٢٤',
      author: 'د. راستين رستمي - خبير التغذية الزراعية بشركة بيشغامان',
      summary: 'دراسة فسيولوجية لدور عنصر البوتاسيوم (K+) في تحفيز تدفق السكريات عبر اللحاء، رفع نسبة البريكس (Brix)، ومنع تشقق القشرة باستخدام سماد تايكر جل عالي البوتاسيوم.',
      abstract: 'يعتبر البوتاسيوم العنصر المسؤول الأول عن حجم وجودة الثمار وتنشيط أكثر من ٦٠ إنزيماً مسؤولاً عن تخليق النشا والسكريات. في مرحلة امتلاء حبات الفستق ونضج الثمار، يؤدي نقص البوتاسيوم إلى صغر الحجم وتشقق الثمار.',
      contentSections: [
        {
          heading: 'نقل السكريات عبر أوعية اللحاء إلى الثمار',
          text: 'يعمل البوتاسيوم كمحرك أسموزي رئيسي يدفع السكريات المصنعة في الأوراق نحو الثمار، مما يزيد من وزن المحصول ويرفع نسبة المادة الجافة وحلاوة الطعم.'
        },
        {
          heading: 'حماية الثمار من ظاهرة التشقق (Fruit Cracking)',
          text: 'يسبب تذبذب الري ونقص البوتاسيوم عدم تناسق نمو اللب مع القشرة الخارجية، مما يسبب انفلاق الثمار وخسارة قيمتها التسويقية. يمنح البوتاسيوم جدران الخلايا المرونة اللازمة.'
        },
        {
          heading: 'ميزات تركيبة تايكر جل بوتاسيوم عالي (Tiger K High)',
          text: 'يتميز تايكر جل بنقاوة ١٠٠٪ وخلوه التام من الكلور والصوديوم، مع قوام هلامي مميز يلتصق بالأوراق ويمنع غسيل السماد مما يضمن امتصاصاً فائق السرعة.'
        }
      ],
      references: [
        'Marschner, H. (2012). "Marschner\'s Mineral Nutrition of Higher Plants". Academic Press.',
        'Oosterhuis, D. M., et al. (2013). "The role of potassium in crop yield and quality". Agronomy Journal, 105(3), 856-867.',
        'Pettigrew, W. T. (2008). "Potassium influences on yield and quality production for maize, wheat, and fruits". Physiologia Plantarum, 133(4), 670-681.'
      ],
      relatedProducts: ['تايكر K High (جل بوتاسيوم)', 'تايكر متوازن (Tiger Balance)', 'سيليغارد (سيليكات البوتاسيوم)']
    }
  },

  // --- 4. Google Trend #4: Liquid Sulfur in Soil Conditioning & Disease Prevention ---
  {
    id: 'liquid-sulfur-soil-ph',
    slug: 'liquid-sulfur-soil-ph',
    imageUrl: imgSulfur,
    googleTrendKeyword: {
      fa: 'گوگرد مایع، کاهش pH خاک قلیایی، کنترل قارچ و سفیدک',
      en: 'Liquid Sulfur Fertigation for Soil pH Remediation & Fungus Control',
      ar: 'الكبريت السائل لمعالجة قلوية التربة ومكافحة الفطريات والبياض الدقيقي'
    },
    fa: {
      title: 'کاربرد گوگرد مایع (سول مکس) در تعدیل موضعی اسیدیته خاک‌های آهکی، ضدعفونی ریشه و مهار نماتد و قارچ‌ها',
      category: 'اصلاح خاک و ضدعفونی',
      readTime: '۸ دقیقه',
      date: 'مهر ۱۴۰۴',
      author: 'دپارتمان اصلاح خاک و بیماری‌شناسی گیاهی پیشگامان',
      summary: 'بررسی سینتیک اکسیداسیون بیولوژیک گوگرد توسط باکتری‌های تیوباسیلوس و آزادسازی اسید سولفوریک ملایم در ریزوسفر جهت آزادسازی فسفر و ریزمغذی‌ها با سول مکس (Sulmax).',
      abstract: 'بیش از ۸۵ درصد از اراضی کشاورزی ایران دارای بی‌کربنات بالا و pH بالای ۸ هستند. گوگرد پودری سنتی به دلیل آبگریزی سال‌ها در خاک بدون تجزیه باقی می‌ماند، اما فرم گوگرد مایع کلوئیدی سول مکس واکنشی سریع در بستر خاک ایجاد کرده و علاوه بر اصلاح pH، سپری مستحکم علیه قارچ‌های فوزاریوم و پیتیوم می‌سازد.',
      contentSections: [
        {
          heading: 'محدودیت‌های گوگرد گرانول در برابر برتری گوگرد مایع',
          text: 'گوگرد عنصری معمولی نیازمند ماهها زمان و رطوبت پیوسته برای اکسیداسیون است. گوگرد مایع سول مکس به دلیل اندازه ذرات در مقیاس میکرون، با آب آبیاری به طور یکنواخت به ناحیه ریشه نفوذ کرده و بلافاصله فرآیند اسیدی‌سازی را آغاز می‌کند.'
        },
        {
          heading: 'آزادسازی فسفر و روی بلوکه‌شده در خاک آهکی',
          text: 'با کاهش pH ناحیه ریشه به میزان ۰.۵ تا ۱ واحد، فسفات‌های کلسیمی نامحلول شکسته شده و فسفر، روی و آهن در دسترس ریشه قرار می‌گیرند.'
        },
        {
          heading: 'اثر قارچ‌کشی و کنه‌کشی طبیعی',
          text: 'بخارات گوگردی حاصل از سول مکس مانع از جوانه‌زنی اسپور قارچ‌های بیماری‌زا مانند سفیدک سطحی و لکه طاووسی شده و جمعیت نماتدهای خسارت‌زا را به شدت کاهش می‌دهد.'
        }
      ],
      references: [
        'Havlin, J. L., et al. (2016). "Soil Fertility and Fertilizers". Pearson.',
        'Scherer, H. W. (2001). "Sulfur in crop production — an overview". European Journal of Agronomy, 14(2), 81-111.',
        'Vidyalakshmi, R., et al. (2009). "Sulfur oxidizing bacteria and their role in plant nutrition". Research Journal of Agriculture and Biological Sciences, 5(5), 708-723.'
      ],
      relatedProducts: ['سول مکس (گوگرد مایع)', 'سالت استاپ (Salt Stop)', 'پی‌اچ بست (PH Best)']
    },
    en: {
      title: 'Agronomic Efficacy of Liquid Sulfur (Sulmax) in Rhizosphere Acidification, Nutrient Mobilization & Soil Pathogen Suppression',
      category: 'Soil Conditioners & Disinfection',
      readTime: '8 min',
      date: 'October 2024',
      author: 'Soil Science & Plant Pathology Group, Pishgaman Paydar Falat Nik',
      summary: 'Biological oxidation kinetics of micronized colloidal sulfur by Thiobacillus bacteria, lowering rhizosphere pH to mobilize fixed phosphorus and micronutrients with Sulmax Liquid Sulfur.',
      abstract: 'High carbonate and bicarbonate levels sustain soil pH above 8.0 across arid agricultural belts, severely locking essential macro and micro elements. Unlike insoluble granular sulfur, Sulmax micronized liquid sulfur disperses uniformly via drip systems to actively remediate rootzone alkalinity and suppress fungal pathogens.',
      contentSections: [
        {
          heading: 'Micro-Particle Dispersion vs Conventional Granular Sulfur',
          text: 'Conventional elemental sulfur particles resist hydration and require years for microbial oxidation. Sulmax liquid sulfur features sub-micron colloidal particles that disperse instantly through drip emitters, establishing rapid rhizosphere acidification.'
        },
        {
          heading: 'Solubilization of Fixed Soil Phosphorus & Zinc',
          text: 'Mild local pH reduction dissolves insoluble calcium-phosphate complexes, freeing bioavailable ortho-phosphate and chelated zinc for immediate root uptake.'
        },
        {
          heading: 'Fungicidal Shield Against Soil-Borne Fungal Spores',
          text: 'Sulmax emits active sulfur vapor that disrupts fungal respiratory chains in powdery mildew and Fusarium, while deterring soil-dwelling mites and phytophagous pests.'
        }
      ],
      references: [
        'Havlin, J. L., et al. (2016). "Soil Fertility and Fertilizers". Pearson.',
        'Scherer, H. W. (2001). "Sulfur in crop production — an overview". European Journal of Agronomy, 14(2), 81-111.',
        'Vidyalakshmi, R., et al. (2009). "Sulfur oxidizing bacteria and their role in plant nutrition". Research Journal of Agriculture and Biological Sciences, 5(5), 708-723.'
      ],
      relatedProducts: ['Sulmax (Liquid Sulfur)', 'Salt Stop', 'PH Best']
    },
    ar: {
      title: 'استخدام الكبريت السائل (سول ماكس) لتعديل قلوية التربة وتطهير الجذور ومكافحة الفطريات والنيماتودا',
      category: 'معالجة التربة والتطهير',
      readTime: '٨ دقائق',
      date: 'أكتوبر ٢٠٢٤',
      author: 'قسم علوم التربة وأمراض النبات - شركة بيشغامان',
      summary: 'دراسة تحلل الكبريت الميكروني بواسطة بكتيريا الثيوباسيلوس وخفض درجة حموضة منطقة الجذور لتحرير الفوسفور والعناصر الصغرى عبر كبريت سول ماكس (Sulmax).',
      abstract: 'تعاني معظم الأراضي الزراعية في الشرق الأوسط من ارتفاع نسبة الكربونات وقلوية تتجاوز ٨ درجات، مما يؤدي إلى تثبيت الفوسفور والزنك والحديد. يوفر الكبريت السائل سول ماكس حلاً فورياً عبر شبكات الري بالتنقيط لمعادلة القلوية وتطهير التربة من الفطريات.',
      contentSections: [
        {
          heading: 'تفوق الكبريت السائل الميكروني على الكبريت المحبب',
          text: 'يحتاج الكبريت الحبيبي إلى سنوات ليتحلل بسبب عدم ذوبانه في الماء. بينما يمتاز سول ماكس السائل بجزيئات غروية متناهية الصغر تنتشر مباشرة مع مياه الري وتبدأ في خفض الـ pH فوراً.'
        },
        {
          heading: 'تحرير الفوسفور والزنك والحديد المقيد في التربة',
          text: 'يؤدي الانخفاض الطفيف في حموضة منطقة الجذور إلى إذابة مركبات فوسفات الكالسيوم غير القابلة للامتصاص، مما يغذي النبات دون الحاجة لزيادة الأسمدة الفوسفاتية.'
        },
        {
          heading: 'التأثير الفطري الوقائي ومكافحة البياض الدقيقي',
          text: 'يطلق سول ماكس أبخرة كبريتية تقضي على جراثيم فطريات الفيوزاريوم والبياض الدقيقي كما تحد من تكاثر الأكاروسات الضارة في الحقل.'
        }
      ],
      references: [
        'Havlin, J. L., et al. (2016). "Soil Fertility and Fertilizers". Pearson.',
        'Scherer, H. W. (2001). "Sulfur in crop production — an overview". European Journal of Agronomy, 14(2), 81-111.',
        'Vidyalakshmi, R., et al. (2009). "Sulfur oxidizing bacteria and their role in plant nutrition". Research Journal of Agriculture and Biological Sciences, 5(5), 708-723.'
      ],
      relatedProducts: ['سول ماكس (كبريت سائل)', 'سالت استوب (Salt Stop)', 'بي إتش بست (PH Best)']
    }
  },

  // --- 5. Google Trend #5: Calcium-Boron & Blossom End Rot ---
  {
    id: 'calcium-boron-blossom-end-rot',
    slug: 'calcium-boron-blossom-end-rot',
    imageUrl: imgCalciumBoron,
    googleTrendKeyword: {
      fa: 'پوسیدگی گلگاه گوجه فرنگی، کلسیم بور، سفتی پوست میوه',
      en: 'Calcium-Boron Synergy for Blossom End Rot & Fruit Firmness',
      ar: 'رش الكالسيوم والبورون لعلاج عفن الطرف الزهري وصلابة الثمار'
    },
    fa: {
      title: 'هم‌افزایی کلسیم و بُر در استحکام تیغه میانی سلول‌ها، پیشگیری از پوسیدگی گلگاه و بهبود ماندگاری انبارداری',
      category: 'تغذیه تخصصی و باروری',
      readTime: '۷ دقیقه',
      date: 'شهریور ۱۴۰۴',
      author: 'مهندسی باغبانی و صیفی‌جات پیشگامان پایدار فلات نیک',
      summary: 'مکانیسم عدم تحرک کلسیم در آوند آبکش، نقش ساختاری بُر در پل‌های پکتاتی دیواره سلولی و چگونگی پیشگیری قطعی از عارضه لکه تلخ سیب و پوسیدگی گلگاه صیفی‌جات با کودهای پیشگامان.',
      abstract: 'عارضه پوسیدگی گلگاه (Blossom End Rot) در گوجه‌فرنگی، فلفل دلمه‌ای، هندوانه و لکه تلخ در سیب ناشی از کمبود موضعی کلسیم در انتهای میوه است. از آنجا که کلسیم تنها از طریق آوند چوبی و تعرق جابجا می‌شود، محلول‌پاشی تخصصی کلسیم همراه با بُر برای نفوذ سریع از طریق پوست میوه ضروری است.',
      contentSections: [
        {
          heading: 'چرا کلسیم در اندام‌های میوه دچار کمبود می‌شود؟',
          text: 'میوه‌ها تعرق بسیار پایینی در مقایسه با برگ‌ها دارند، بنابراین جریان شیره خام حامل کلسیم عمدتاً به سمت برگ‌ها منحرف شده و میوه‌های در حال رشد سریع از کلسیم محروم می‌مانند که فروپاشی غشای سلولی گلگاه را رقم می‌زند.'
        },
        {
          heading: 'نقش هم‌افزای بُر (B) در اتصال شبکه‌ای کلسیم',
          text: 'عنصر بُر پیوندهای بورات-دی‌استری را در مولکول‌های رامنومانوگالاکتورونان پکتین دیواره تثبیت می‌کند. بدون حضور بُر، کلسیم قادر به تشکیل اتصالات محکم نخواهد بود.'
        },
        {
          heading: 'راهکار تخصصی شرکت پیشگامان',
          text: 'محلول‌پاشی ترکیبی فول شارژر (حاوی روی و بُر کلاته) همراه با ترکیبات غنی از کلسیم در فواصل ۱۰ روزه پس از فندقی شدن میوه، استحکام بافت، تردی محصول و ماندگاری انبارداری صادراتی را تضمین می‌نماید.'
        }
      ],
      references: [
        'Ho, L. C., & White, P. J. (2005). "A cellular hypothesis for the induction of blossom-end rot in tomato fruit". Annals of Botany, 95(4), 571-581.',
        'Brown, P. H., et al. (2002). "Boron in plant biology". Plant Biology, 4(2), 205-223.',
        'Saure, M. C. (2001). "Blossom-end rot: a review of causing factors". Journal of Horticultural Science and Biotechnology, 76(4), 380-388.'
      ],
      relatedProducts: ['فول شارژر (Full Charger)', 'دوپینگ (Doping)', 'سیلیگارد (Siligard)']
    },
    en: {
      title: 'Calcium and Boron Synergy in Pectin Middle Lamella Stability, Blossom-End Rot Prevention & Shelf Life Extension',
      category: 'Specialized Nutrition & Fertility',
      readTime: '7 min',
      date: 'September 2024',
      author: 'Horticultural Sciences Division, Pishgaman Paydar Falat Nik',
      summary: 'Investigating xylem immobility of calcium, borate-diester structural cross-linking in cell walls, and agronomic management of blossom end rot in solanaceous crops and bitter pit in apples.',
      abstract: 'Blossom End Rot (BER) in tomatoes, peppers, melons, and bitter pit in apples stems from localized calcium deficiency at distal fruit tissues during rapid cell enlargement. Because Ca2+ moves strictly via transpiration-driven xylem streams, targeted foliar sprays co-formulated with boron are imperative.',
      contentSections: [
        {
          heading: 'Localized Calcium Partitioning Deficiency',
          text: 'Developing fruits possess minimal transpiration rates compared to leafy canopies. As xylem sap flows toward transpiring foliage, expanding distal fruit cells face catastrophic calcium deficits, triggering plasma membrane collapse.'
        },
        {
          heading: 'Boron Cross-Linking in Cell Wall Pectin Networks',
          text: 'Boron cross-links rhamnogalacturonan-II dimers in cell wall pectin matrices, anchoring calcium into durable structural complexes that reinforce peel firmness.'
        },
        {
          heading: 'Pishgaman Nutritional Regimen',
          text: 'Foliar application of Full Charger (chelated Zn & B) combined with calcium solutions at 10-14 day intervals ensures flawless fruit skin, eliminates blossom end rot, and maximizes post-harvest export grade.'
        }
      ],
      references: [
        'Ho, L. C., & White, P. J. (2005). "A cellular hypothesis for the induction of blossom-end rot in tomato fruit". Annals of Botany, 95(4), 571-581.',
        'Brown, P. H., et al. (2002). "Boron in plant biology". Plant Biology, 4(2), 205-223.',
        'Saure, M. C. (2001). "Blossom-end rot: a review of causing factors". Journal of Horticultural Science and Biotechnology, 76(4), 380-388.'
      ],
      relatedProducts: ['Full Charger', 'Doping', 'Siligard (Silicon Shield)']
    },
    ar: {
      title: 'التكامل بين الكالسيوم والبورون في تدعيم جدران الخلايا، منع عفن الطرف الزهري وزيادة فترة التخزين',
      category: 'التغذية التخصصية والخصوبة',
      readTime: '٧ دقائق',
      date: 'سبتمبر ٢٠٢٤',
      author: 'قسم البستنة والمحاصيل الحقلية - شركة بيشغامان',
      summary: 'شرح أسباب عدم تحرك الكالسيوم في أوعية اللحاء ودور البورون في ربط ألياف البكتين لمنع تسود أسفل الثمار في الطماطم والفلفل ونقاط التخزين المرة في التفاح.',
      abstract: 'يعد عفن الطرف الزهري (Blossom End Rot) في الطماطم والفلفل الرومي والبطيخ من أخطر الأعراض الفسيولوجية الناتجة عن نقص الكالسيوم الموضعي. ولأن الكالسيوم ينتقل فقط مع نتح الماء عبر الخشب، يصبح الرش الورقي بالبورون والكالسيوم حلاً إلزامياً.',
      contentSections: [
        {
          heading: 'لماذا يحدث نقص الكالسيوم في الثمار رغم توفره بالتربة؟',
          text: 'تمتلك الثمار ثغوراً نتحية قليلة جداً مقارنة بالأوراق، لذلك تتوجه معظم مياه النتح المحملة بالكالسيوم نحو الأوراق، مما يترك قمة الثمرة النامية في حالة عوز شديد يسبب موت الخلايا.'
        },
        {
          heading: 'دور البورون في تثبيت جزيئات الكالسيوم',
          text: 'يعمل عنصر البورون كحلقة وصل كيميائية تربط سلاسل البكتين، مما يمنح الثمرة صلابة قوية ومقاومة للكدمات أثناء النقل والتصدير.'
        },
        {
          heading: 'البرنامج العلاجي من شركة بيشغامان',
          text: 'يوصى بالرش الدوري بمركب فول شارجر (زنك وبورون مخلبي) مع الكالسيوم بعد عقد الثمار كل ١٠ إلى ١٤ يوماً لضمان ثمار صلبة خالية تماماً من العفن الأسود.'
        }
      ],
      references: [
        'Ho, L. C., & White, P. J. (2005). "A cellular hypothesis for the induction of blossom-end rot in tomato fruit". Annals of Botany, 95(4), 571-581.',
        'Brown, P. H., et al. (2002). "Boron in plant biology". Plant Biology, 4(2), 205-223.',
        'Saure, M. C. (2001). "Blossom-end rot: a review of causing factors". Journal of Horticultural Science and Biotechnology, 76(4), 380-388.'
      ],
      relatedProducts: ['فول شارجر (Full Charger)', 'دوبينغ (Doping)', 'سيليغارد (Siligard)']
    }
  },

  // --- 6. Foundation Article 1: Soil Salinity Management & Sodium Leaching ---
  {
    id: 'soil-salinity-management',
    slug: 'soil-salinity-management',
    imageUrl: imgLab,
    googleTrendKeyword: {
      fa: 'شوری خاک، آبشویی سدیم باغات پسته، سالت استاپ',
      en: 'Soil Salinity Leaching & Sodium Remediation in Orchards',
      ar: 'معالجة ملوحة التربة وغسيل الصوديوم في البساتين'
    },
    fa: {
      title: 'مدیریت شوری خاک و مکانیزم‌های نوین آبشویی سدیم در باغات پسته و مزارع صیفی',
      category: 'مدیریت خاک و آب',
      readTime: '۷ دقیقه',
      date: 'مهر ۱۴۰۴',
      author: 'واحد تحقیق و توسعه شرکت پیشگامان پایدار فلات نیک',
      summary: 'بررسی اثرات تخریبی هدایت الکتریکی بالا (EC) و تجمع یون‌های سدیم و کلر بر نفوذپذیری خاک و راهکارهای بیوشیمیایی آزادسازی کاتیون‌های مفید و اصلاح نفوذپذیری با ترکیب سالت استاپ.',
      abstract: 'شوری آب و خاک (Salinity Stress) یکی از بحرانی‌ترین چالش‌های فیزیولوژیک در باغات پسته و مزارع کشاورزی فلات مرکزی ایران است. تجمع سدیم تبادلی (ESP) باعث پراکنش ذرات رس، تخریب ساختمان خاک و افت شدید تهویه ریشه می‌گردد. در این پژوهش کاربردی، اثر ترکیبات پلی‌هیدروکسی کربوکسیلیک و اسیدهای آلی اصلاح‌کننده (سالت استاپ) در جابجایی سدیم از فاز تبادلی به فاز محلول و تسهیل آبشویی ریشه مورد ارزیابی قرار گرفته است.',
      contentSections: [
        {
          heading: 'مقدمه و اثر اسمزی شوری بر فیزیولوژی گیاه',
          text: 'وقتی هدایت الکتریکی عصاره اشباع خاک (ECe) از آستانه تحمل گیاه (برای پسته حدود ۴ دسی‌زیمنس بر متر) فراتر رود، پتانسیل اسمزی آب خاک به شدت منفی شده و گیاه علیرغم حضور رطوبت کافی دچار تنش خشکی فیزیولوژیک می‌گردد. جذب بیش از حد یون‌های سدیم (Na+) و کلر (Cl-) موجب سمیت سلولی، سوختگی حاشیه برگ‌ها و اختلال در جذب پتاسیم (K+) و کلسیم (Ca2+) می‌شود.'
        },
        {
          heading: 'تخریب ساختمان فیزیکی خاک و کاهش نفوذپذیری',
          text: 'تجمع یون‌های سدیم هیدراته باعث تورم صفحات رس و فروپاشی خاکدانه‌ها (Dispersion) می‌شود. این پدیده منجر به تشکیل سله سخت سطحی، کاهش هدایت هیدرولیکی خاک و عدم نفوذ عمقی آب آبیاری می‌گردد که ریشه‌ها را در معرض خفگی قرار می‌دهد.'
        },
        {
          heading: 'مکانیزم اصلاح‌کننده‌های بیوشیمیایی خاک (سالت استاپ)',
          text: 'محصولاتی مانند سالت استاپ با دارا بودن بنیان‌های فعال کلسیم محلول کلاته‌شده به همراه اسیدهای پلی‌کربوکسیلیک، یون‌های سدیم را از سایت‌های تبادلی رس جدا کرده و کلسیم با ظرفیت پیوندی بالاتر جایگزین آن می‌شود. سدیم آزادشده در حضور آب آبیاری به اعماق پایین‌تر از زون ریشه شسته می‌شود.'
        },
        {
          heading: 'توصیه‌های کاربردی و دوز مصرف در باغات و مزارع',
          text: 'مصرف ۵ تا ۱۵ لیتر در هکتار سالت استاپ به صورت کودآبیاری در مراحل حساس به همراه یک آبشویی سنگین، بازگشت نفوذپذیری خاک و کاهش تنش اسمزی را تضمین می‌نماید.'
        }
      ],
      references: [
        'FAO (2020). "Management of Saline and Sodic Soils in Arid Zones". Irrigation and Drainage Paper No. 29, Rome.',
        'Maas, E. V., & Hoffman, G. J. (1977). "Crop salt tolerance—current assessment". Journal of Irrigation and Drainage, 103(2), 115-134.',
        'Rengasamy, P., & Marchuk, A. (2011). "Cation ratio of structural stability (CROSS) in relation to soil dispersion". Soil Research, 49(3), 280-285.'
      ],
      relatedProducts: ['سالت استاپ (Salt Stop)', 'سول مکس (گوگرد مایع)', 'چلنجر (هیومیک اسید)']
    },
    en: {
      title: 'Soil Salinity Management and Advanced Sodium Leaching Kinetics in Arid Orchards & Open Fields',
      category: 'Soil & Water Management',
      readTime: '7 min',
      date: 'October 2024',
      author: 'R&D Department, Pishgaman Paydar Falat Nik Co.',
      summary: 'Investigating high electrical conductivity (EC), exchangeable sodium percentage (ESP), soil dispersibility, and biochemical sodium displacement via Salt Stop formulation.',
      abstract: 'Saline-sodic soil stress is the foremost physiological bottleneck across arid crop production. Excessive exchangeable sodium disperses clay aggregates, crippling hydraulic conductivity and root respiration. This paper presents biochemical mechanisms of poly-hydroxy carboxylic conditioners in facilitating deep sodium leaching.',
      contentSections: [
        {
          heading: 'Osmotic Drag and Cellular Toxicity',
          text: 'When soil saturation extract electrical conductivity exceeds crop thresholds, osmotic potential turns intensely negative. Roots suffer physiological drought despite standing water, while Na+ and Cl- bioaccumulation induces leaf margin necrosis and blocks potassium and calcium channels.'
        },
        {
          heading: 'Structural Clay Dispersion and Compaction',
          text: 'Hydrated sodium ions possess extensive ionic radii that force clay platelet repulsion, causing hardpan formation, crusting, and severe hypoxia in the active root horizon.'
        },
        {
          heading: 'Biochemical Displacement via Salt Stop Formulation',
          text: 'Salt Stop provides high-affinity soluble calcium accompanied by activating carboxylic acids. It aggressively exchanges Na+ from clay surfaces, allowing displaced sodium to leach safely beyond root depths with irrigation water.'
        },
        {
          heading: 'Practical Grower Dosage Protocols',
          text: 'Applying 5 to 15 Liters per hectare of Salt Stop via fertigation during pre-bloom, nut-sizing, or post-harvest followed by an adequate leaching flush restores optimal hydraulic conductivity.'
        }
      ],
      references: [
        'FAO (2020). "Management of Saline and Sodic Soils in Arid Zones". Irrigation and Drainage Paper No. 29, Rome.',
        'Maas, E. V., & Hoffman, G. J. (1977). "Crop salt tolerance—current assessment". Journal of Irrigation and Drainage, 103(2), 115-134.',
        'Rengasamy, P., & Marchuk, A. (2011). "Cation ratio of structural stability (CROSS) in relation to soil dispersion". Soil Research, 49(3), 280-285.'
      ],
      relatedProducts: ['Salt Stop', 'Sulmax (Liquid Sulfur)', 'Challenger (Humic Acid)']
    },
    ar: {
      title: 'إدارة ملوحة التربة والآليات الحديثة لغسيل الصوديوم في بساتين الفستق والخضروات',
      category: 'إدارة التربة والمياه',
      readTime: '٧ دقائق',
      date: 'أكتوبر ٢٠٢٤',
      author: 'قسم البحث والتطوير - شركة بيشغامان بايدار فلات نيك',
      summary: 'دراسة الآثار السلبية لارتفاع التوصيل الكهربائي (EC) وتراكم أيونات الصوديوم والكلور على نفاذية التربة، والحلول الكيميائية الحيوية باستخدام مركب سالت استوب (Salt Stop).',
      abstract: 'يعتبر إجهاد الملوحة من أخطر التحديات الفسيولوجية في الأراضي الجافة وشبه الجافة. يؤدي تراكم الصوديوم إلى تفتت حبيبات الطين واختناق الجذور. يوضح هذا البحث دور المركبات الكربوكسيلية والكالسيوم النشط في إزاحة الصوديوم وتسهيل غسيله إلى ما دون منطقة انتشار الجذور.',
      contentSections: [
        {
          heading: 'التأثير الأسموزي للملوحة وسمية أيونات الصوديوم',
          text: 'عندما يتجاوز التوصيل الكهربائي (EC) حدود تحمل المحصول، يتعرض النبات لجفاف فسيولوجي حاد رغم وجود الرطوبة، ويسبب تراكم الصوديوم والكلور احتراق حواف الأوراق وإعاقة امتصاص البوتاسيوم.'
        },
        {
          heading: 'تدهور البناء الطبيعي للتربة وانخفاض النفاذية',
          text: 'تتسبب أيونات الصوديوم في تباعد صفائح الطين وتفكك حبيبات التربة مما يشكل طبقة صلبة غير منفذة تمنع تهوية الجذور وتسبب اختناقها.'
        },
        {
          heading: 'آلية عمل مصلح التربة المتخصص سالت استوب (Salt Stop)',
          text: 'يحتوي سالت استوب على كالسيوم ذائب نشط وأحماض كربوكسيلية متخصصة تحل محل الصوديوم المتبادل على أسطح الطين، ليتم غسيل الصوديوم الحر مع مياه الري بعيداً عن منطقة الجذور.'
        },
        {
          heading: 'التوصيات الحقلية والجرعات المقترحة',
          text: 'حقن ٥ إلى ١٥ لتراً للهكتار من سالت استوب عبر مياه الري متبوعة برية غسيل كافية يعيد بناء التربة ويستعيد قدرة الجذور على الامتصاص النشط.'
        }
      ],
      references: [
        'FAO (2020). "Management of Saline and Sodic Soils in Arid Zones". Irrigation and Drainage Paper No. 29, Rome.',
        'Maas, E. V., & Hoffman, G. J. (1977). "Crop salt tolerance—current assessment". Journal of Irrigation and Drainage, 103(2), 115-134.',
        'Rengasamy, P., & Marchuk, A. (2011). "Cation ratio of structural stability (CROSS) in relation to soil dispersion". Soil Research, 49(3), 280-285.'
      ],
      relatedProducts: ['سالت استوب (Salt Stop)', 'سول ماكس (كبريت سائل)', 'چلنجر (هيوميك أسيد)']
    }
  },

  // --- 7. Foundation Article 2: Humic & Fulvic Root Development ---
  {
    id: 'humic-fulvic-root-development',
    slug: 'humic-fulvic-root-development',
    imageUrl: imgGoldenWheat,
    googleTrendKeyword: {
      fa: 'هیومیک اسید، فولویک اسید، ریشه‌زایی موئین، چلنجر',
      en: 'Humic & Fulvic Acids for Root Hairs & Nutrient Chelation',
      ar: 'أحماض الهيوميك والفولفيك لتنشيط الجذور وتيسير العناصر'
    },
    fa: {
      title: 'رفتار فیزیولوژیک اسید هیومیک و فولویک در توسعه ریشه‌های موئین و جذب عناصر ماکرو و میکرو',
      category: 'تغذیه و مواد آلی',
      readTime: '۶ دقیقه',
      date: 'مهر ۱۴۰۴',
      author: 'دکتر راستین رستمی - مدیر علمی شرکت پیشگامان پایدار فلات نیک',
      summary: 'بررسی اثر مولکولی اسیدهای هیومیک و فولویک غنی‌شده با ریزمغذی‌ها در تحریک پمپ پروتونی ریشه (H+-ATPase) و آزادسازی فسفر و روی در خاک‌های آهکی.',
      abstract: 'مواد هیومیکی با وزن‌های مولکولی مختلف نقش هورمون‌مانند (Auxin-like activity) در القای تقسیم سلولی و تشکیل ریشه‌های جانبی ایفا می‌کنند. این مقاله اثرات هم‌افزایی مکمل پودری چلنجر و هیومی فارم مایع را در افزایش ظرفیت تبادل کاتیونی (CEC) خاک تشریح می‌کند.',
      contentSections: [
        {
          heading: 'ماهیت بیوشیمیایی و پایداری هیومات‌ها',
          text: 'اسید هیومیک حاصل از لئوناردیت با درجه خلوص بالا، حاوی گروه‌های عاملی کربوکسیل (-COOH) و فنولیک (-OH) است که کاتیون‌های فلزی مانند آهن و روی را کمپلکس کرده و مانع از تشکیل رسوب‌های نامحلول کربنات و فسفات می‌شوند.'
        },
        {
          heading: 'تحریک پمپ‌های پروتونی و تمایز ریشه‌های موئین',
          text: 'نفوذ مولکول‌های فولویک اسید به درون ریشه، بیان ژن‌های مربوط به پمپ H+-ATPase را افزایش می‌دهد و ترشح اسیدهای آلی از نوک ریشه را تشدید کرده و دسترسی به فسفر بلوکه‌شده را تا ۳۰۰٪ افزایش می‌دهد.'
        },
        {
          heading: 'مزایای چلنجر و هیومی فارم',
          text: 'ترکیب چلنجر شرکت پیشگامان به دلیل همراهی عصاره جلبک دریایی، آمینواسیدها و عناصر کلات‌شده، شوک‌های حرارتی تابستان را مهار کرده و ریشه‌زایی فعال را حفظ می‌کند.'
        }
      ],
      references: [
        'Chen, Y., & Aviad, T. (1990). "Effects of humic substances on plant growth". Humic Substances in Soil and Crop Sciences.',
        'Nardi, S., et al. (2002). "Physiological effects of humic substances on higher plants". Soil Biology and Biochemistry, 34(11), 1527-1536.',
        'Canellas, L. P., et al. (2015). "Humic and fulvic acids as biostimulants in horticulture". Scientia Horticulturae, 196, 15-27.'
      ],
      relatedProducts: ['چلنجر (Challenger)', 'هیومی فارم (Humifarm)', 'جامپر (Jumper)']
    },
    en: {
      title: 'Physiological Kinetics of Humic & Fulvic Acids in Fine Root Branching and Macro/Micronutrient Acquisition',
      category: 'Organic Nutrition & Humates',
      readTime: '6 min',
      date: 'October 2024',
      author: 'Dr. Rastin Rostami - Lead Scientific Director, Pishgaman Paydar Falat Nik',
      summary: 'Molecular investigation of high-purity humic and fulvic acid complexes in activating root plasma membrane H+-ATPase proton pumping and chelating immobilized soil phosphorus and zinc.',
      abstract: 'Humic substances demonstrate direct auxin-like signaling that triggers lateral root differentiation and root hair density. This paper analyzes the synergistic behavior of Challenger powder and Humifarm liquid in boosting cation exchange capacity (CEC) and nutrient uptake.',
      contentSections: [
        {
          heading: 'Biochemical Structure and Ligand Stability',
          text: 'High-grade leonardite-derived humic fractions contain dense carboxyl and phenolic hydroxyl groups. At alkaline pH, these groups bear strong negative charges that chelate metal ions, shielding them from insoluble phosphate and carbonate precipitation.'
        },
        {
          heading: 'H+-ATPase Activation and Root Rhizosphere Exudation',
          text: 'Low molecular weight fulvic fractions permeate root epidermal cells, up-regulating membrane proton pumps. This stimulates organic acid root exudates, rendering locked calcium-phosphate reserves bioavailable.'
        },
        {
          heading: 'Challenger & Humifarm Agronomic Edge',
          text: 'Pishgaman Challenger combines fulvic-humic complexes with sea kelp and essential micronutrients, sustaining continuous fine root flush through summer heat spikes.'
        }
      ],
      references: [
        'Chen, Y., & Aviad, T. (1990). "Effects of humic substances on plant growth". Humic Substances in Soil and Crop Sciences.',
        'Nardi, S., et al. (2002). "Physiological effects of humic substances on higher plants". Soil Biology and Biochemistry, 34(11), 1527-1536.',
        'Canellas, L. P., et al. (2015). "Humic and fulvic acids as biostimulants in horticulture". Scientia Horticulturae, 196, 15-27.'
      ],
      relatedProducts: ['Challenger', 'Humifarm', 'Jumper']
    },
    ar: {
      title: 'السلوك الفسيولوجي لأحماض الهيوميك والفولفيك في تنمية الشعيرات الجذرية وامتصاص العناصر الكبرى والصغرى',
      category: 'التغذية والمواد العضوية',
      readTime: '٦ دقائق',
      date: 'أكتوبر ٢٠٢٤',
      author: 'د. راستين رستمي - المدير العلمي لشركة بيشغامان بايدار فلات نيك',
      summary: 'دراسة التأثير الجزيئي لأحماض الهيوميك والفولفيك الغنية بالعناصر الصغرى في تحفيز مضخات البروتون بالجذور (H+-ATPase) وتحرير الفوسفور والزنك في الأراضي الكلسية.',
      abstract: 'تلعب المواد الهيوميكية دوراً شبيهاً بالهورمونات النباتية (Auxin-like) في تحفيز الانقسام الخلوي وتكوين الجذور الجانبية. يوضح هذا المقال دور سماد چلنجر البودرة وهيومي فارم السائل في رفع السعة التبادلية الكاتيونية (CEC) للتربة.',
      contentSections: [
        {
          heading: 'الطبيعة البيوكيميائية للهيومات وثباتها',
          text: 'يحتوي حمض الهيوميك المستخرج من الليونارديت عالي النقاوة على مجموعات كربوكسيل وفينول فعالة تقوم بخلب الأيونات المعدنية مثل الحديد والزنك وتمنع ترسبها في الأراضي القلوية.'
        },
        {
          heading: 'تنشيط مضخات البروتون ونمو الشعيرات الجذرية',
          text: 'تخترق جزيئات حمض الفولفيك جدران الخلايا الجذرية لتنشط مضخات البروتون، مما يحفز إفراز الأحماض العضوية من قمة الجذور ويزيد من تيسر الفوسفور المثبت بنسبة تصل إلى ٣٠٠٪.'
        },
        {
          heading: 'مزايا چلنجر وهيومي فارم التخصصية',
          text: 'يمتاز مركب چلنجر باحتوائه على مستخلص الطحالب البحرية والأحماض الأمينية، مما يحمي الجذور من صدمات حرارة الصيف ويحافظ على استمرار امتصاص الغذاء.'
        }
      ],
      references: [
        'Chen, Y., & Aviad, T. (1990). "Effects of humic substances on plant growth". Humic Substances in Soil and Crop Sciences.',
        'Nardi, S., et al. (2002). "Physiological effects of humic substances on higher plants". Soil Biology and Biochemistry, 34(11), 1527-1536.',
        'Canellas, L. P., et al. (2015). "Humic and fulvic acids as biostimulants in horticulture". Scientia Horticulturae, 196, 15-27.'
      ],
      relatedProducts: ['چلنجر (Challenger)', 'هيومي فارم (Humifarm)', 'جامبر (Jumper)']
    }
  },

  // --- 8. Foundation Article 3: Iron Fe-EDDHA Chlorosis ---
  {
    id: 'iron-eddha-chlorosis',
    slug: 'iron-eddha-chlorosis',
    imageUrl: imgWheatField,
    googleTrendKeyword: {
      fa: 'کود آهن، ارتو ارتو، زردی برگ، کلات EDDHA، ردفول',
      en: 'Fe-EDDHA Iron Chelate Ortho-Ortho Kinetics in Alkaline Soils',
      ar: 'شيلات الحديد EDDHA ونسبة أورثو-أورثو لعلاج اصفرار الأوراق'
    },
    fa: {
      title: 'سینتیک جذب کلات‌های آهن Fe-EDDHA با درصد ارتو-ارتو بالا در خاک‌های آهکی (pH بالای ۸)',
      category: 'عناصر میکرو و کلات‌ها',
      readTime: '۸ دقیقه',
      date: 'شهریور ۱۴۰۴',
      author: 'دپارتمان شیمی گیاهی پیشگامان پایدار فلات نیک',
      summary: 'مقایسه ثبات کلات‌های EDTA، DTPA و EDDHA در خاک‌های کربناته ایران و اهمیت ایزومر ارتو-ارتو (o-o) کود آهن ردفول (Red Full) در رفع فوری کلروز آهن در باغات و صیفی‌جات.',
      abstract: 'کلروز ناشی از کمبود آهن (Iron Deficiency Chlorosis) شایع‌ترین عارضه فیزیولوژیک در باغات میوه و زراعت‌های صیفی کشور است که ناشی از وجود یون‌های بی‌کربنات (HCO3-) و واکنش شدیداً قلیایی خاک می‌باشد. این مقاله پایداری ترمودینامیکی کلات آهن ردفول را بررسی می‌نماید.',
      contentSections: [
        {
          heading: 'چرا سولفات آهن و EDTA در خاک‌های آهکی ناکارآمد هستند؟',
          text: 'در خاک‌هایی با pH بالاتر از ۷.۵، یون‌های آهن فوراً با یون هیدروکسید واکنش داده و به اکسید آهن نامحلول تبدیل می‌شوند که غیرقابل جذب است. EDTA در pH بالای ۶.۵ کلسیم را جایگزین آهن کرده و آهن رسوب می‌کند.'
        },
        {
          heading: 'برتری ایزومر ارتو-ارتو در کلات EDDHA',
          text: 'عامل کلاته‌کننده EDDHA دارای دو ایزومر فضایی ارتو-ارتو و ارتو-پارا است. پیوندهای شش‌گانه در ایزومر ارتو-ارتو به شدت پایدار بوده و مولکول آهن را حتی در pH بالای ۹ کاملاً محافظت می‌کند.'
        },
        {
          heading: 'اثربخشی بالینی کود آهن ردفول (Red Full)',
          text: 'کود آهن ردفول با داشتن درصد ارتو-ارتو استاندارد و خلوص ۱۰۰٪ محلول در آب، ظرف ۴ تا ۷ روز فرآیند سنتز کلروفیل در برگ‌های جوان را احیا کرده و افت عملکرد باغات را متوقف می‌سازد.'
        }
      ],
      references: [
        'Lucena, J. J. (2003). "Fe chelates for remediation of iron chlorosis in plants". Journal of Plant Nutrition, 26(10-11), 1969-1983.',
        'Römheld, V., & Marschner, H. (1986). "Mobilization of iron in the rhizosphere". Advances in Plant Nutrition, 2, 155-204.',
        'Schenkeveld, W. D., et al. (2010). "The mechanism of iron mobilization by Fe-EDDHA isomers in calcareous soils". European Journal of Soil Science, 61(6), 875-886.'
      ],
      relatedProducts: ['ردفول (Red Full)', 'تاپ استار (میکس آهن، روی، منگنز)', 'پی‌اچ بست (PH Best)']
    },
    en: {
      title: 'Absorption Kinetics of High Ortho-Ortho Fe-EDDHA Chelates in Alkaline Calcareous Soils (pH > 8.0)',
      category: 'Micronutrients & Chelates',
      readTime: '8 min',
      date: 'September 2024',
      author: 'Plant Biochemistry Department, Pishgaman Paydar Falat Nik',
      summary: 'Comparative stability of EDTA, DTPA, and EDDHA ligands in carbonate-rich soils, detailing the chemical stability of Red Full Fe-EDDHA in correcting severe iron chlorosis.',
      abstract: 'Iron Deficiency Chlorosis (IDC) is the most widespread nutritional disorder across calcareous belts. High bicarbonate ions neutralize ferric reductase at the root plasma membrane. This research assesses thermodynamic stability of Red Full Fe-EDDHA in overcoming alkaline precipitation.',
      contentSections: [
        {
          heading: 'Why Iron Sulfate and EDTA Fail in Alkaline Soils',
          text: 'At pH above 7.5, Fe2+/Fe3+ ions from inorganic sulfates or EDTA ligands rapidly precipitate as insoluble ferric hydroxides. In calcareous soils, abundant Ca2+ ions displace iron from EDTA, rendering it bio-unavailable.'
        },
        {
          heading: 'Thermodynamic Superiority of the Ortho-Ortho Isomer',
          text: 'The EDDHA chelating ligand features two stereoisomers: ortho-ortho (o-o) and ortho-para (o-p). The hexadentate bonds of the o-o isomer encase ferric iron within a protective molecular cage that withstands hydroxide attack even above pH 9.0.'
        },
        {
          heading: 'Agronomic Efficacy of Red Full Iron',
          text: 'Pishgaman Red Full delivers verified high ortho-ortho ratios and 100% water solubility, restoring deep green foliage and chlorophyll biosynthesis within 4 to 7 days after fertigation.'
        }
      ],
      references: [
        'Lucena, J. J. (2003). "Fe chelates for remediation of iron chlorosis in plants". Journal of Plant Nutrition, 26(10-11), 1969-1983.',
        'Römheld, V., & Marschner, H. (1986). "Mobilization of iron in the rhizosphere". Advances in Plant Nutrition, 2, 155-204.',
        'Schenkeveld, W. D., et al. (2010). "The mechanism of iron mobilization by Fe-EDDHA isomers in calcareous soils". European Journal of Soil Science, 61(6), 875-886.'
      ],
      relatedProducts: ['Red Full (Fe-EDDHA)', 'Top Star (Fe-Zn-Mn Mix)', 'PH Best']
    },
    ar: {
      title: 'حركية امتصاص شيلات الحديد Fe-EDDHA ذات النسبة العالية من أورثو-أورثو في الأراضي الكلسية القلوية',
      category: 'العناصر الصغرى والمخلبيات',
      readTime: '٨ دقائق',
      date: 'سبتمبر ٢٠٢٤',
      author: 'قسم الكيمياء الزراعية - شركة بيشغامان بايدار فلات نيك',
      summary: 'مقارنة استقرار مخلبيات EDTA و DTPA و EDDHA في أراضي الشرق الأوسط وأهمية أيزومر أورثو-أورثو في سماد ريد فول (Red Full) لعلاج اصفرار الأوراق الفوري.',
      abstract: 'يعد اصفرار نقص الحديد من أكثر المشاكل انتشاراً في الأشجار والمحاصيل في الأراضي ذات الـ pH المرتفع المحتوية على كربونات الكالسيوم. يتناول هذا المقال الثبات الكيميائي لشيلات الحديد ريد فول في البيئات القلوية الشديدة.',
      contentSections: [
        {
          heading: 'لماذا تفشل كبريتات الحديد وشيلات EDTA في التربة الكلسية؟',
          text: 'في الأراضي التي يتجاوز فيها الـ pH حاجز ٧.٥، يترسب الحديد غير المحمي بهيئة هيدروكسيد حديد غير قابل للذوبان، وتفقد شيلات EDTA الحديد لصالح الكالسيوم المتوفر بكثرة.'
        },
        {
          heading: 'قوة أيزومر أورثو-أورثو في شيلات EDDHA',
          text: 'يحتوي مركب EDDHA على شكلين فراغيين، ويمتاز أورثو-أورثو بروابط سداسية فائقة الثبات تحمي ذرة الحديد تماماً من هجوم أيونات الهيدروكسيل حتى في درجة pH تفوق ٩.٠.'
        },
        {
          heading: 'النتائج الحقلية لسماد الحديد ريد فول (Red Full)',
          text: 'يقدم سماد ريد فول نسبة عالية من أورثو-أورثو تذوب بنسبة ١٠٠٪ في الماء، ويعيد اللون الأخضر وتخليق الكلوروفيل للأوراق الصفراء خلال ٤ إلى ٧ أيام من الري.'
        }
      ],
      references: [
        'Lucena, J. J. (2003). "Fe chelates for remediation of iron chlorosis in plants". Journal of Plant Nutrition, 26(10-11), 1969-1983.',
        'Römheld, V., & Marschner, H. (1986). "Mobilization of iron in the rhizosphere". Advances in Plant Nutrition, 2, 155-204.',
        'Schenkeveld, W. D., et al. (2010). "The mechanism of iron mobilization by Fe-EDDHA isomers in calcareous soils". European Journal of Soil Science, 61(6), 875-886.'
      ],
      relatedProducts: ['ريد فول (Red Full)', 'توب ستار (Top Star)', 'بي إتش بست (PH Best)']
    }
  },

  // --- 9. Foundation Article 4: Zinc & Boron Fruit Set ---
  {
    id: 'zinc-boron-fruit-setting',
    slug: 'zinc-boron-fruit-setting',
    imageUrl: imgGoldenWheat,
    googleTrendKeyword: {
      fa: 'فروت ست، گرده‌افشانی، ریزش گل بهاره، روی و بور، فول شارژر',
      en: 'Fruit Set Foliar Spray, Zinc & Boron Synergy for Pollen Viability',
      ar: 'مركب فروت ست، رش الزنك والبورون لتثبيت العقد ومنع تساقط الأزهار'
    },
    fa: {
      title: 'اثر هم‌افزایی روی (Zn) و بُر (B) بر ماندگاری دانه گرده، تلقیح و جلوگیری از ریزش جوانه گل',
      category: 'تغذیه تخصصی و باروری',
      readTime: '۵ دقیقه',
      date: 'مهر ۱۴۰۴',
      author: 'تیم مشاوره باغبانی شرکت پیشگامان فلات نیک',
      summary: 'بررسی نقش ساختاری بُر در تشکیل لوله گرده و سنتز اکسین توسط روی، و زمان‌بندی طلایی محلول‌پاشی فروت‌ست با فول شارژر (Full Charger).',
      abstract: 'ریزش گل و میوه‌چه‌ها در ابتدای بهار از عوامل اصلی افت تناژ درختان هسته‌دار، دانه‌دار، پسته و مرکبات است. عناصر روی و بُر دو کاتالیزور بیوشیمیایی اصلی در هورمون‌زایی و لقاح تخمدان هستند. در این مقاله نتایج کاربرد فول شارژر تشریح می‌گردد.',
      contentSections: [
        {
          heading: 'نقش روی در سنتز اکسین و خروج از خواب زمستانه',
          text: 'عنصر روی پیش‌ساز اسیدآمینه تریپتوفان است که پیش‌نیاز ساخت هورمون اکسین (IAA) می‌باشد. کمبود روی موجب تاخیر در باز شدن جوانه‌ها، برگ‌های جارویی و کوچک‌ماندگی برگ‌های اولیه می‌شود.'
        },
        {
          heading: 'نقش بُر در جوانه‌زنی دانه گرده و استحکام دیواره',
          text: 'بُر در ساخت ترکیبات پکتیکی دیواره سلولی و افزایش طول لوله گرده نقشی اساسی دارد. بدون حضور بُر کافی، دانه گرده قبل از رسیدن به تخمدان از بین رفته و میوه پوک تشکیل می‌شود.'
        },
        {
          heading: 'مزیت فرمولاسیون فول شارژر (Full Charger)',
          text: 'محلول فول شارژر با بالانس دقیق Zn و B به همراه نیتروژن آمینی، جذب فوری از طریق بافت جوانه‌ها را در زمان تورم جوانه میسر ساخته و تبدیل گل به میوه را تا ۴۰ درصد افزایش می‌دهد.'
        }
      ],
      references: [
        'Brown, P. H., et al. (2002). "Boron in plant biology". Plant Biology, 4(2), 205-223.',
        'Marschner, P. (2012). "Marschner\'s Mineral Nutrition of Higher Plants". Academic Press.',
        'Nyomora, A. M., et al. (1999). "Foliar application of boron to almond trees affects fruit set and yield". HortScience, 34(3), 442-445.'
      ],
      relatedProducts: ['فول شارژر (Full Charger)', 'دوپینگ (Doping)', 'تایگر K High']
    },
    en: {
      title: 'Synergistic Roles of Zinc (Zn) and Boron (B) in Pollen Tube Elongation, Fertilization & Flower Abscission Mitigation',
      category: 'Fertility & Fruit Setting',
      readTime: '5 min',
      date: 'October 2024',
      author: 'Horticulture Advisory Council, Pishgaman Paydar Falat Nik',
      summary: 'Evaluating boron in pollen grain viability and zinc in tryptophan-mediated auxin biosynthesis, establishing optimal fruit-set foliar timing with Full Charger.',
      abstract: 'Spring flower and fruitlet drop causes severe yield decline in deciduous stone fruit, pome, pistachio, and citrus orchards. Zinc and boron serve as catalytic cofactors in hormonal signaling and ovule fertilization. This paper highlights Full Charger in maximizing fruit set conversion.',
      contentSections: [
        {
          heading: 'Zinc in Tryptophan and Auxin Biosynthesis',
          text: 'Zinc serves as an essential cofactor for tryptophan synthesis, the direct precursor of indole-3-acetic acid (IAA). Zinc deficits delay bud burst, causing rosette shoots and stunted early leaf blades.'
        },
        {
          heading: 'Boron in Pollen Tube Germination',
          text: 'Boron participates in pectin cell wall assembly and pollen tube germination. Inadequate boron induces premature tube collapse prior to ovary fertilization, producing blank or deformed fruits.'
        },
        {
          heading: 'Full Charger Formulation Advantage',
          text: 'Pishgaman Full Charger delivers an exact balance of chelated Zn and B alongside amine nitrogen, ensuring rapid bud absorption during green tip and popcorn stages, elevating fruit set by up to 40%.'
        }
      ],
      references: [
        'Brown, P. H., et al. (2002). "Boron in plant biology". Plant Biology, 4(2), 205-223.',
        'Marschner, P. (2012). "Marschner\'s Mineral Nutrition of Higher Plants". Academic Press.',
        'Nyomora, A. M., et al. (1999). "Foliar application of boron to almond trees affects fruit set and yield". HortScience, 34(3), 442-445.'
      ],
      relatedProducts: ['Full Charger', 'Doping', 'Tiger K High']
    },
    ar: {
      title: 'التأثير التكاملي للزنك (Zn) والبورون (B) على حيوية حبوب اللقاح والتلقيح ومنع تساقط أزهار الربيع',
      category: 'التغذية التخصصية والخصوبة',
      readTime: '٥ دقائق',
      date: 'أكتوبر ٢٠٢٤',
      author: 'فريق الاستشارات البستانية - شركة بيشغامان بايدار فلات نيك',
      summary: 'دراسة دور البورون في تكوين أنبوبة اللقاح والزنك في تخليق هرمون الأوكسين، والموعد الذهبي لرش مركب فول شارجر (Full Charger).',
      abstract: 'يعد تساقط الأزهار والثمار الصغيرة في مطلع الربيع من أهم أسباب انخفاض إنتاجية أشجار الفاكهة واللوزيات والفستق والحمضيات. يشكل الزنك والبورون محفزين حيويين للتلقيح وعقد الثمار.',
      contentSections: [
        {
          heading: 'دور الزنك في تخليق الأوكسين وكسر السكون',
          text: 'يعتبر الزنك المحفز الأساسي لحمض التريبتوفان المسؤول عن إنتاج هرمون الأوكسين (IAA)، ويؤدي نقصه إلى تأخر تفتح البراعم وصغر حجم الأوراق الحديثة.'
        },
        {
          heading: 'دور البورون في إنبات حبوب اللقاح',
          text: 'يلعب البورون دوراً حاسماً في بناء جدار أنبوبة اللقاح لتصل بنجاح إلى المبيض، وبدونه تموت حبة اللقاح مبكراً وينتج عن ذلك ثمار فارغة أو مشوهة.'
        },
        {
          heading: 'ميزة تركيبة فول شارجر (Full Charger)',
          text: 'توفر تركيبة فول شارجر توازناً دقيقاً بين الزنك والبورون والنيتروجين السريع، مما يضمن امتصاصاً فورياً للأنسجة الزهرية ويرفع نسبة العقد بنسبة تصل إلى ٤٠٪.'
        }
      ],
      references: [
        'Brown, P. H., et al. (2002). "Boron in plant biology". Plant Biology, 4(2), 205-223.',
        'Marschner, P. (2012). "Marschner\'s Mineral Nutrition of Higher Plants". Academic Press.',
        'Nyomora, A. M., et al. (1999). "Foliar application of boron to almond trees affects fruit set and yield". HortScience, 34(3), 442-445.'
      ],
      relatedProducts: ['فول شارجر (Full Charger)', 'دوبينغ (Doping)', 'تايكر K High']
    }
  },

  // --- 10. Foundation Article 5: Spray Water pH Conditioning ---
  {
    id: 'spray-water-ph-conditioning',
    slug: 'spray-water-ph-conditioning',
    imageUrl: imgLab,
    googleTrendKeyword: {
      fa: 'تنظیم pH آب سمپاشی، سختی آب، هیدرولیز قلیایی، پی‌اچ بست',
      en: 'Foliar Spray Water Acidification & Alkaline Hydrolysis Prevention',
      ar: 'تعديل حموضة مياه الرش ومكافحة التحلل القلوي للمبيدات والأسمدة'
    },
    fa: {
      title: 'اهمیت اسیدی‌سازی آب تانکر سمپاشی و کنترل سختی در جلوگیری از هیدرولیز قلیایی سموم و کودها',
      category: 'تکنولوژی کاربرد سموم و کودها',
      readTime: '۶ دقیقه',
      date: 'شهریور ۱۴۰۴',
      author: 'واحد فنی و مهندسی پیشگامان پایدار فلات نیک',
      summary: 'چگونگی تخریب مولکول سموم و کودهای برگی در آب‌های سنگین و قلیایی و راهکارهای تنظیم اسیدیته با محلول پی‌اچ بست (PH Best).',
      abstract: 'اکثر منابع آب چاه کشاورزی دارای pH بین ۷.۸ تا ۸.۸ و سختی بالایی از کلسیم و منیزیم هستند. این شرایط باعث تجزیه سریع (Alkaline Hydrolysis) آفت‌کش‌ها و قفل شدن ریزمغذی‌ها در تانکر سمپاش می‌شود. در این مقاله اصول علمی بهینه‌سازی آب با PH Best تدوین شده است.',
      contentSections: [
        {
          heading: 'هیدرولیز قلیایی و افت کارایی آفت‌کش‌ها',
          text: 'نیمه‌عمر بسیاری از سموم فسفره و حشره‌کش‌ها در آب با pH=8 کمتر از ۲۰ دقیقه است! یعنی پیش از آنکه سم روی گیاه پاشیده شود، نیمی از ماده موثره آن در تانکر خنثی شده است. تنظیم pH آب به دامنه ۵.۵ تا ۶.۵ مانع از این تخریب می‌شود.'
        },
        {
          heading: 'اثر سختی آب بر جذب کودهای محلول‌پاش',
          text: 'یون‌های کلسیم و منیزیم موجود در آب سنگین با فرم‌های فسفاتی و ریزمغذی‌های کود واکنش داده و رسوب‌های غیرقابل جذبی را روی سطح برگ تشکیل می‌دهند.'
        },
        {
          heading: 'عملکرد محصول PH Best',
          text: 'پی‌اچ بست با دوز ۵۰ تا ۱۰۰ سی‌سی در ۱۰۰۰ لیتر آب، اسیدیته را به دامنه ایده‌آل ۶ رسانده و سختی آب را کلات می‌کند تا کارایی کلیه سموم و کودها حداکثر گردد.'
        }
      ],
      references: [
        'University of California (2018). "Water Quality and Pesticide Performance". UC IPM Guidelines.',
        'Green, J. M., & Hale, T. (2005). "Increasing weed control with water conditioners". Weed Technology, 19(2), 345-352.',
        'Devkota, P., & Johnson, W. G. (2019). "Influence of carrier water pH and hardness on pesticide efficacy". Weed Science, 67(4), 412-421.'
      ],
      relatedProducts: ['پی‌اچ بست (PH Best)', 'سول مکس (Sulmax)', 'فیکشن (جلبک دریایی)']
    },
    en: {
      title: 'Crucial Role of Spray Tank Water Acidification & Hardness Conditioning in Preventing Alkaline Hydrolysis',
      category: 'Application Technology & Adjuvants',
      readTime: '6 min',
      date: 'September 2024',
      author: 'Agricultural Engineering Council, Pishgaman Paydar Falat Nik',
      summary: 'Preventing the degradation of agrochemical molecules and foliar fertilizers in alkaline, hard carrier waters using PH Best conditioner.',
      abstract: 'Most agricultural deep-well irrigation waters exhibit pH values between 7.8 and 8.8 combined with elevated calcium and magnesium hardness. These parameters trigger instantaneous alkaline hydrolysis of pesticides and nutrient lockup. This paper outlines optimal tank-mix conditioning.',
      contentSections: [
        {
          heading: 'Alkaline Hydrolysis and Agrochemical Inactivation',
          text: 'The chemical half-life of organophosphates and synthetic pyrethroids collapses below 20 minutes at pH 8.0. Regulating spray water pH between 5.5 and 6.5 completely halts active ingredient degradation.'
        },
        {
          heading: 'Hardness Interference in Foliar Nutrient Cuticular Penetration',
          text: 'Dissolved Ca2+ and Mg2+ cations bond with anionic phosphates and micronutrient ligands, forming insoluble salt crystals on leaf surfaces that cannot cross stomatal cuticles.'
        },
        {
          heading: 'PH Best Conditioner Performance',
          text: 'At 50 to 100 mL per 1,000 Liters of water, Pishgaman PH Best buffers tank pH to optimal 5.8-6.2 and chelates hardness cations, ensuring maximum pesticide and foliar fertilizer efficiency.'
        }
      ],
      references: [
        'University of California (2018). "Water Quality and Pesticide Performance". UC IPM Guidelines.',
        'Green, J. M., & Hale, T. (2005). "Increasing weed control with water conditioners". Weed Technology, 19(2), 345-352.',
        'Devkota, P., & Johnson, W. G. (2019). "Influence of carrier water pH and hardness on pesticide efficacy". Weed Science, 67(4), 412-421.'
      ],
      relatedProducts: ['PH Best', 'Sulmax (Liquid Sulfur)', 'Fiction (Seaweed)']
    },
    ar: {
      title: 'أهمية ضبط ومعادلة حموضة مياه الرش ومكافحة عسر الماء لمنع التحلل القلوي للمبيدات والأسمدة',
      category: 'تكنولوجيا الرش والمحسنات',
      readTime: '٦ دقائق',
      date: 'سبتمبر ٢٠٢٤',
      author: 'قسم الهندسة الزراعية - شركة بيشغامان بايدار فلات نيك',
      summary: 'كيف تدمر المياه القلوية والعسرة جزيئات المبيدات والأسمدة الورقية وطرق ضبط الحموضة باستخدام مركب بي إتش بست (PH Best).',
      abstract: 'تحتوي معظم مياه الآبار الزراعية على درجة قلوية بين ٧.٨ و ٨.٨ ونسبة عسر عالية من الكالسيوم والمغنيسيوم. تسبب هذه البيئة تحللاً مائياً قلوياً سريعاً (Alkaline Hydrolysis) للمواد الفعالة. يوضح هذا البحث المعايير العلمية لتصحيح مياه الرش.',
      contentSections: [
        {
          heading: 'التحلل القلوي وفقدان فاعلية المبيدات الحشرية والفطرية',
          text: 'ينخفض نصف عمر العديد من المبيدات الفوسفورية والبيروثرودية في ماء ذي pH=8 إلى أقل من ٢٠ دقيقة فقط! أي أن نصف المادة الفعالة تفقد قوتها داخل خزان الرش قبل وصولها إلى الورقة. ضبط الحموضة بين ٥.٥ و ٦.٥ يحمي المبيد تماماً.'
        },
        {
          heading: 'تأثير عسر الماء على امتصاص الأسمدة الورقية',
          text: 'تتفاعل أيونات الكالسيوم والمغنيسيوم في الماء العسر مع الفوسفات والعناصر الصغرى مكونة رواسب غير ذائبة تسد فوهات الرش وتمنع النفاذ عبر ثغور الأوراق.'
        },
        {
          heading: 'كفاءة مركب بي إتش بست (PH Best)',
          text: 'بإضافة ٥٠ إلى ١٠٠ مل لكل ١٠٠٠ لتر ماء، يضبط بي إتش بست الحموضة إلى المعدل المثالي ٦ ويعزل عسر الماء، مما يضمن أقصى استفادة من كل رشة سماد ومبيد.'
        }
      ],
      references: [
        'University of California (2018). "Water Quality and Pesticide Performance". UC IPM Guidelines.',
        'Green, J. M., & Hale, T. (2005). "Increasing weed control with water conditioners". Weed Technology, 19(2), 345-352.',
        'Devkota, P., & Johnson, W. G. (2019). "Influence of carrier water pH and hardness on pesticide efficacy". Weed Science, 67(4), 412-421.'
      ],
      relatedProducts: ['بي إتش بست (PH Best)', 'سول ماكس (Sulmax)', 'فيكشن (جلبک دریایی)']
    }
  }
];
