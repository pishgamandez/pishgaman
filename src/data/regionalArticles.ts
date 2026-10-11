import { Article } from '../types';

import imgPistachio from '../assets/images/pistachio_orchard_salinity_1791743720800.jpg';
import imgWheat from '../assets/images/golden_wheat_field_1791481535252.jpg';
import imgRice from '../assets/images/guilan_rice_paddy_1791743738172.jpg';
import imgCitrus from '../assets/images/mazandaran_citrus_orchard_1791743755741.jpg';
import imgApple from '../assets/images/calcium_boron_crop_1791738615645.jpg';
import imgSaffron from '../assets/images/potassium_fruit_sizing_1791738580126.jpg';
import imgDatePalm from '../assets/images/khuzestan_date_palms_1791743772908.jpg';
import imgSugarBeet from '../assets/images/seaweed_bio_crop_1791738561930.jpg';
import imgCotton from '../assets/images/hero_wheat_field_1791480930784.jpg';
import imgVegetable from '../assets/images/sulfur_soil_drip_1791738596980.jpg';

export const regionalArticlesData: Article[] = [
  // 1. Pistachio Rafsanjan & Kerman
  {
    id: 'reg-salinity-pistachio-rafsanjan',
    slug: 'salinity-remediation-pistachio-rafsanjan',
    aliases: ['kood-peste-rafsanjan', 'shoori-khak-rafsanjan'],
    imageUrl: imgPistachio,
    region: {
      provinceFa: 'کرمان و رفسنجان',
      cropFa: 'پسته (اکبری، کله‌قوچی، احمدآقایی، فندقی)',
      provinceEn: 'Kerman & Rafsanjan',
      cropEn: 'Pistachio Orchards',
      provinceAr: 'كرمان و رفسنجان',
      cropAr: 'بساتين الفستق الحلبي'
    },
    googleTrendKeyword: {
      fa: 'رفع شوری خاک پسته رفسنجان',
      en: 'Pistachio Soil Salinity Remediation Rafsanjan',
      ar: 'علاج ملوحة تربة الفستق في رفسنجان'
    },
    fa: {
      title: 'رفع شوری خاک در باغات پسته رفسنجان و کرمان با سول مکس و سالت استاپ',
      category: 'مدیریت شوری و باغات پسته',
      readTime: '۱۲ دقیقه',
      date: 'مهر ۱۴۰۴',
      lastModified: '2026-10-11',
      author: 'دپارتمان اصلاح خاک و مدیریت شوری پیشگامان',
      targetKeyword: 'رفع شوری خاک پسته رفسنجان',
      metaDescription: 'راهنمای جامع کنترل EC و رفع شوری خاک در باغات پسته رفسنجان و کرمان با کاربرد هم‌افزای ضد شوری سالت استاپ و گوگرد مایع سول مکس پیشگامان فلات نیک.',
      summary: 'بررسی علمی بحران شوری آب و خاک در دشت رفسنجان، علائم سمیت سدیم و کلر در ارقام اکبری و کله‌قوچی و برنامه عملیاتی آبشویی سدیم و اصلاح pH خاک با سالت استاپ و سول مکس.',
      abstract: 'دشت رفسنجان و انار با بیش از ۸۰ هزار هکتار باغات پسته، با چالش جدی افت کیفیت سفره‌های آب زیرزمینی و صعود EC به ارقام بالای ۸,۰۰۰ تا ۱۵,۰۰۰ میکروموس مواجه است. تجمع سدیم تبادلی (ESP) ساختار فیزیکی خاک را تخریب کرده و خفگی ریشه و حاشیه‌سوختگی برگ‌ها را رقم می‌زند. این مقاله به ارزیابی سینتیک جابجایی کاتیونی سدیم با کلسیم فعال سالت استاپ و اسیدی‌سازی موضعی ریزوسفر با گوگرد مایع سول مکس می‌پردازد.',
      contentSections: [
        {
          heading: 'مقدمه و اقلیم‌شناسی دشت رفسنجان و کرمان',
          text: 'منطقه رفسنجان، سیرجان و زرند در فلات مرکزی ایران دارای اقلیم فوق‌العاده خشک با تبخیر سالانه بیش از ۲۸۰۰ میلی‌متر و بارندگی زیر ۱۰۰ میلی‌متر است. با افت سطح ایستابی چاه‌های کشاورزی، غلظت کاتیون‌های سدیم (Na+) و آنیون‌های کلر (Cl-) و بی‌کربنات (HCO3-) به شدت افزایش یافته است. در چنین شرایطی، سیستم ریشه‌ای پسته قادر به جذب متوازن پتاسیم، منیزیم و عناصر میکرو نبوده و راندمان فتوسنتز درختان تا ۵۵٪ افت می‌کند.'
        },
        {
          heading: 'چرا شوری خاک در رفسنجان بحرانی شده است؟ (تحلیل ژئوپدولوژی)',
          text: 'لایه‌های سخت زیرین (Hardpan) حاوی گچ و آهک سخت، مانع از زهکشی طبیعی و نفوذ عمقی آب می‌شوند. با تبخیر آب آبیاری در ماه‌های گرم تابستان، املاح به واسطه خاصیت مویینگی به سطح خاک هدایت شده و لایه سفید نمکی بر سطح باغات تشکیل می‌شود. عدم حضور کلسیم محلول آزاد، سدیم را در پایگاه‌های تبادلی رس‌ها تثبیت کرده و پدیده پراکندگی ذرات خاک (Dispersion) و فشردگی غیرقابل نفوذ خاک را پدید می‌آورد.'
        },
        {
          heading: 'علائم بالینی و تشخیص سمیت شوری در درختان پسته',
          text: '۱. سوختگی حاشیه برگ‌ها با الگوی مشخص V-شکل از نوک به سمت دمبرگ.\n۲. خشکیدگی سرشاخه‌ها (Dieback) در اواسط تابستان هم‌زمان با پر شدن مغز.\n۳. تاخیر در باز شدن جوانه‌های زایشی در بهار و کاهش چشمگیر تعداد دانه در خوشه.\n۴. افزایش درصد پوکی و ناخندانی پسته و بدشکلی پوست استخوانی ناشی از تداخل جذب بور و کلسیم.'
        },
        {
          heading: 'راهکار تخصصی پیشگامان: هم‌افزایی سالت استاپ و سول مکس',
          text: 'شرکت پیشگامان پایدار فلات نیک با فرمولاسیون اختصاصی دو محصول پیشرو، فرآیند احیای باغات پسته شور را مهندسی کرده است:\n\n• سالت استاپ (Salt Stop): حامل کلسیم فعال و پلیمرهای آلی لیگنوسولفونات است که یون‌های سدیم را از ساختار خاک جدا کرده و با ایجاد کلات کلسیم، نفوذپذیری آب را بازسازی نموده و سدیم را به لایه‌های زیرین زهکش هدایت می‌کند.\n• سول مکس (Sulmax): گوگرد مایع محلول با خاصیت اکسیداسیون سریع در ریزوسفر ریشه پسته است که pH خاک را از بالای ۸.۲ به دامنه بهینه ۷.۲ تا ۷.۵ هدایت کرده و آهن، فسفر و روی تثبیت‌شده را آزاد می‌سازد.'
        },
        {
          heading: 'نتایج میدانی ثبت‌شده در باغات رفسنجان، انار و کشکوئیه',
          text: 'در آزمایش میدانی باغات پسته رقم اکبری در منطقه کشکوئیه رفسنجان با EC اولیه آب آبیاری ۹,۲۰۰ و EC خاک ۱۱,۵۰۰، پس از دو نوبت مصرف تقسیط‌شده سالت استاپ و سول مکس:\n• شوری عصاره اشباع خاک در عمق ۳۰ تا ۶۰ سانتی‌متری ریشه از ۱۱.۵ به ۶.۸ دسی‌زیمنس کاهش یافت.\n• وزن هزار دانه پسته تا ۱۸٪ افزایش یافت.\n• حاشیه‌سوختگی برگ‌ها در گرمای تیر و مرداد تا ۷۰٪ کنترل گردید.'
        }
      ],
      dosageTable: [
        {
          stage: 'نوبت اول (اسفند تا اوایل فروردین)',
          crop: 'باغات پسته بارده',
          rate: 'سالت استاپ ۲۰ تا ۲۵ لیتر + سول مکس ۱۰ تا ۱۵ لیتر در هکتار',
          timing: 'همراه با آب استارت بهاره یا آب اسفند'
        },
        {
          stage: 'نوبت دوم (تیرماه - پر شدن مغز)',
          crop: 'باغات پسته بارده',
          rate: 'سالت استاپ ۱۵ تا ۲۰ لیتر در هکتار',
          timing: 'در اوج نیاز آبی و تنش گرمایی'
        },
        {
          stage: 'نوبت سوم (شهریور تا آب پس از برداشت)',
          crop: 'باغات پسته',
          rate: 'سول مکس ۱۰ لیتر + هیومی فارم ۵ لیتر در هکتار',
          timing: 'آبشویی پاییزی و تخلیه خاک از املاح'
        }
      ],
      faqs: [
        {
          question: 'آیا سالت استاپ شوری آب آبیاری چاه را کاهش می‌دهد یا شوری خاک را؟',
          answer: 'سالت استاپ شوری خاک و اثرات سمی سدیم بر ریشه را از طریق جایگزینی سدیم با کلسیم فعال و آبشویی املاح به زیر منطقه ریشه برطرف می‌کند و مقاومت آوندی درخت به EC آب را به طور چشمگیری بالا می‌برد.'
        },
        {
          question: 'بهترین زمان مصرف گوگرد مایع سول مکس در پسته چه فصلی است؟',
          answer: 'بهترین زمان نوبت اول در اسفند همراه با آب اول، و نوبت دوم در طول فصل بهار یا پس از برداشت است. سول مکس بدون نیاز به ماه‌ها زمان برای اکسیداسیون، بلافاصله در خاک عمل می‌کند.'
        },
        {
          question: 'چگونه می‌توان از شوک گرمایی تابستان در باغات شور رفسنجان جلوگیری کرد؟',
          answer: 'ترکیب مصرف ریشه‌ای سالت استاپ با محلول‌پاشی آمینواسید دوپینگ و سیلیکات پتاسیم سیلیگارد، تعریق برگ‌ها را کاهش داده و سوختگی را مهار می‌کند.'
        },
        {
          question: 'آیا می‌توان سول مکس و سالت استاپ را همزمان در یک بشکه اختلاط کرد؟',
          answer: 'خیر، این دو محصول باید در نوبت‌های مجزا یا در دو مخزن تزریق جداگانه به سیستم آبیاری تزریق شوند تا بهترین بازدهی کاتیونی و آنیونی حاصل شود.'
        },
        {
          question: 'دوز مصرف برای نهال‌های پسته تازه کاشته‌شده چقدر است؟',
          answer: 'برای نهال‌های زیر ۳ سال، دوز مصرف سالت استاپ ۸ تا ۱۰ لیتر در هکتار و سول مکس ۵ لیتر در هکتار به صورت ملایم توصیه می‌گردد.'
        }
      ],
      references: [
        'Ayers, R. S., & Westcot, D. W. (1985). "Water quality for agriculture". FAO Irrigation and Drainage Paper 29 Rev. 1, Rome.',
        'Ferguson, L., et al. (2002). "Pistachio rootstock and scion interactions under salinity stress". California Agriculture, 56(4), 136-141.',
        'Munns, R., & Tester, M. (2008). "Mechanisms of salinity tolerance". Annual Review of Plant Biology, 59, 651-681.',
        'Pishgaman Agronomy Field Trials (2024). "Sodium Leaching Kinetics via Calcium Polysulfates in Rafsanjan Pistachio Soils".'
      ],
      relatedProducts: ['سالت استاپ (Salt Stop)', 'سول مکس (Sulmax)', 'چلنجر (Challenger)', 'دوپینگ (Doping)'],
      relatedArticles: ['soil-salinity-management', 'liquid-sulfur', 'heat-drought-stress']
    },
    en: {
      title: 'Pistachio Soil Salinity Remediation in Rafsanjan & Kerman with Sulmax & Salt Stop',
      category: 'Salinity & Pistachio Orchards',
      readTime: '12 min',
      date: 'October 2024',
      lastModified: '2026-10-11',
      author: 'Soil Science & Salinity Remediation Division, Pishgaman Paydar Falat Nik',
      targetKeyword: 'Pistachio Soil Salinity Remediation Rafsanjan',
      metaDescription: 'Field-tested agronomic protocol to control electrical conductivity (EC), leach toxic sodium, and normalize soil pH in Rafsanjan pistachio orchards using Salt Stop and Sulmax.',
      summary: 'Comprehensive soil reclamation strategy for high-salinity arid orchards in Rafsanjan and Kerman, restoring root respiration, brix accumulation, and kernel weight in Akbari and Kaleh-Ghoochi cultivars.',
      abstract: 'Rafsanjan plain spans over 80,000 hectares of commercial pistachio orchards facing critical aquifer degradation and electrical conductivities exceeding 8,000 to 15,000 µS/cm. Exchangeable sodium percentage (ESP) causes soil dispersion, hypoxia, and foliar marginal chlorosis. This paper investigates calcium exchange kinetics via Salt Stop and rhizosphere acidification using Sulmax liquid sulfur.',
      contentSections: [
        {
          heading: 'Pedological and Climatic Profile of Central Iranian Pistachio Orchards',
          text: 'With annual evaporation exceeding 2,800 mm against less than 100 mm rainfall, intense evaporative concentration pulls soluble sodium and chloride salts toward root zones, impairing moisture acquisition and potassium uptake.'
        },
        {
          heading: 'Diagnostic Symptoms of Sodium & Chloride Toxicity in Pistachio',
          text: 'V-shaped foliar necrosis, branch dieback, flower bud abscission, and elevated blankness percentages characterize salt-stressed trees.'
        },
        {
          heading: 'Dual Remediation Protocol: Salt Stop & Sulmax Synergy',
          text: 'Salt Stop provides high-affinity activated calcium complexes that displace adsorbed sodium ions, facilitating downward drainage. Sulmax liquid sulfur oxidizes rapidly, lowering rhizosphere pH from 8.3 down to 7.3, solubilizing locked micronutrients.'
        }
      ],
      dosageTable: [
        {
          stage: 'Spring Budbreak (March/April)',
          crop: 'Bearing Pistachio Orchards',
          rate: 'Salt Stop 20-25 L/ha + Sulmax 10-15 L/ha',
          timing: 'First seasonal irrigation'
        },
        {
          stage: 'Kernel Bulking (July)',
          crop: 'Bearing Pistachio Orchards',
          rate: 'Salt Stop 15-20 L/ha',
          timing: 'During peak transpiration'
        }
      ],
      faqs: [
        {
          question: 'Does Salt Stop treat well water salinity or soil salinity?',
          answer: 'It directly eliminates soil sodium toxicity and structural compaction by displacing sodium with active calcium, allowing safe leaching below the root rhizosphere.'
        },
        {
          question: 'Can Sulmax and Salt Stop be tank-mixed directly?',
          answer: 'No, apply them in alternating irrigation events or via separate fertilizer injector lines for maximum chemical efficiency.'
        }
      ],
      references: [
        'Ayers, R. S., & Westcot, D. W. (1985). "Water quality for agriculture". FAO Irrigation and Drainage Paper 29 Rev. 1, Rome.',
        'Munns, R., & Tester, M. (2008). "Mechanisms of salinity tolerance". Annual Review of Plant Biology, 59, 651-681.'
      ],
      relatedProducts: ['Salt Stop', 'Sulmax', 'Challenger', 'Doping'],
      relatedArticles: ['soil-salinity-management', 'liquid-sulfur', 'heat-drought-stress']
    },
    ar: {
      title: 'علاج ملوحة تربة بساتين الفستق في رفسنجان وكرمان بواسطة سول ماكس وسالت ستوب',
      category: 'إدارة الملوحة وبساتين الفستق',
      readTime: '١٢ دقيقة',
      date: 'أكتوبر ٢٠٢٤',
      lastModified: '2026-10-11',
      author: 'قسم استصلاح الأراضي وإدارة الملوحة - شركة بيشغامان',
      targetKeyword: 'علاج ملوحة تربة الفستق في رفسنجان',
      metaDescription: 'دليل عملي شامل لتخفيض الملوحة (EC) ومعالجة أضرار الصوديوم في مزارع الفستق برفسنجان عبر استخدام سماد سالت ستوب والكبريت السائل سول ماكس.',
      summary: 'دراسة حقلية لمعالجة ملوحة مياه وآبار الفستق، وطرد أملاح الصوديوم الضارة، وحماية الأشجار من احتراق حواف الأوراق وزيادة امتلاء الحبات.',
      abstract: 'تواجه بساتين الفستق في رفسنجان وكرمان ارتفاعاً حاداً في ملوحة التربة تتجاوز ٨٠٠٠ إلى ١٥٠٠٠ ميكروموس. يقدم هذا البحث حلولاً حقلية متكاملة لغسيل الصوديوم باستخدام سالت ستوب وخفض قلوية التربة عبر الكبريت السائل سول ماكس.',
      contentSections: [
        {
          heading: 'طبيعة المشكلة والظروف المناخية في حوض رفسنجان',
          text: 'يؤدي التبخر العالي في المناطق الجافة إلى صعود الأملاح وترسب الصوديوم والكلور حول المجموع الجذري لأشجار الفستق، مما يسبب اختناق الجذور وضعف امتصاص البوتاسيوم والحديد.'
        },
        {
          heading: 'برنامج المعالجة عبر سالت ستوب وسول ماكس',
          text: 'يوفر سالت ستوب الكالسيوم النشط لإزاحة الصوديوم وغسيله بعيداً عن منطقة الجذور، بينما يعمل سول ماكس على خفض درجة الحموضة (pH) وتحرير الفوسفور والعناصر الصغرى المثبتة.'
        }
      ],
      dosageTable: [
        {
          stage: 'بداية الموسم (الربيع)',
          crop: 'أشجار الفستق المثمرة',
          rate: 'سالت ستوب ٢٠-٢٥ لتر + سول ماكس ١٠-١٥ لتر للهكتار',
          timing: 'مع الري الأول'
        }
      ],
      faqs: [
        {
          question: 'هل يقلل سالت ستوب من ملوحة ماء البئر؟',
          answer: 'يعالج سالت ستوب أثر الملوحة في التربة ويستبدل الصوديوم الضار بالكالسيوم، مما يسهل تصريف الأملاح خارج المجموع الجذري.'
        }
      ],
      references: [
        'FAO (1985). "Water quality for agriculture". Rome.',
        'Munns, R., & Tester, M. (2008). "Mechanisms of salinity tolerance".'
      ],
      relatedProducts: ['سالت استاپ (Salt Stop)', 'سول مکس (Sulmax)'],
      relatedArticles: ['soil-salinity-management', 'liquid-sulfur']
    }
  },

  // 2. Wheat Fars Topdressing
  {
    id: 'reg-wheat-topdressing-fars',
    slug: 'wheat-topdressing-fars',
    aliases: ['kood-gandom-fars', 'sarak-gandom-fars'],
    imageUrl: imgWheat,
    region: {
      provinceFa: 'استان فارس (مرودشت، فسا، داراب، اقلید)',
      cropFa: 'گندم دیم و آبی (ارقام چمران ۲، برات، سیروان)',
      provinceEn: 'Fars Province',
      cropEn: 'Wheat Fields (Winter & Spring)',
      provinceAr: 'محافظة فارس',
      cropAr: 'حقول القمح والحبوب'
    },
    googleTrendKeyword: {
      fa: 'کود سرک گندم فارس',
      en: 'Wheat Topdressing Fertilization Fars',
      ar: 'سماد القمح والتسميد السطحي في فارس'
    },
    fa: {
      title: 'کود سرک گندم در استان فارس: بهترین زمان، مقدار و اصول افزایش تناژ با چلنجر و تاپ استار',
      category: 'زراعت و غلات',
      readTime: '۱۱ دقیقه',
      date: 'مهر ۱۴۰۴',
      lastModified: '2026-10-11',
      author: 'دپارتمان زراعت و تغذیه غلات پیشگامان',
      targetKeyword: 'کود سرک گندم فارس',
      metaDescription: 'برنامه علمی کود سرک گندم در مرودشت، فسا و اقلید استان فارس با تلفیق هیومیک اسید پودری چلنجر، تاپ استار و پتاسیم تایگر جهت افزایش وزن هزار دانه.',
      summary: 'بررسی مراحل حساس پنجه‌زنی و ساقه رفتن گندم در اقلیم فارس، جلوگیری از تلفات آبشویی ازت و افزایش راندمان کودهای سرک با مکمل‌های کلاته پیشگامان.',
      abstract: 'استان فارس با تولید استراتژیک گندم در دشت‌های آهکی با کربنات کلسیم بالا، با معضل راندمان پایین کودهای نیتروژنه اوره (کمتر از ۳۵٪) و کمبود شدید روی و منگنز روبروست. مصرف بی‌رویه اوره بدون اصلاح‌کننده‌های اسید هیومیک موجب طویل شدن میانگره‌ها و ورس (خوابیدگی) مزرعه می‌شود. این مقاله پروتکل مصرف تقسیطی سرک همراه با چلنجر و تاپ استار را ارائه می‌دهد.',
      contentSections: [
        {
          heading: 'اقلیم و خاک‌های گندم‌کاری استان فارس',
          text: 'دشت‌های حاصلخیز مرودشت، فسا، زرقان و داراب عموماً دارای خاک‌های رسی و لومی با pH بالای ۷.۸ تا ۸.۴ هستند. وجود آهک فعال، قابلیت جذب فسفر و ریزمغذی‌ها را محدود کرده و در زمان پنجه‌زنی (اواخر زمستان تا اوایل بهار)، سرمای دیررس بهاره جذب عناصر را متوقف می‌سازد.'
        },
        {
          heading: 'اشتباهات رایج گندم‌کاران فارس در مصرف کود سرک',
          text: '۱. پخش سطحی مقادیر بالای کود اوره در یک نوبت بدون اختلاط با آب یا اسید هیومیک که موجب تصعید آمونیاک تا ۴۰٪ می‌شود.\n۲. غفلت از عنصر روی (Zn) و منگنز در زمان ساقه رفتن که باعث زردی بین رگبرگی و کاهش تعداد سنبلچه می‌شود.\n۳. قطع مصرف پتاسیم در مراحل پایانی، که منجر به سبکی دانه و چروکیدگی گندم در گرمای بادهای بهاره می‌شود.'
        },
        {
          heading: 'برنامه تغذیه تقسیطی با محصولات پیشگامان',
          text: '• نوبت اول سرک (شروع پنجه‌زنی): همراه با اوره، مصرف ۲ تا ۳ کیلوگرم چلنجر (هیومیک اسید پودری محلول) باعث کلاته‌شدن ازت و تحریک توسعه ریشه‌های اولیه می‌گردد.\n• نوبت دوم سرک (ساقه رفتن / غلاف): محلول‌پاشی تاپ استار با دوز ۲ لیتر در هکتار جهت تامین روی، آهن و اسیدآمینه فعال.\n• نوبت سوم (خوشه‌دهی و گلدهی): محلول‌پاشی تایگر K High جهت پر شدن دانه و افزایش عیار پروتئین گندم.'
        }
      ],
      dosageTable: [
        {
          stage: 'پنجه‌زنی فعال (اواخر بهمن تا اسفند)',
          crop: 'گندم آبی مرودشت و فسا',
          rate: 'چلنجر ۲ تا ۳ کیلوگرم + اوره تقسیطی',
          timing: 'همراه با آب دوم یا سوم آبیاری'
        },
        {
          stage: 'ساقه رفتن (فروردین)',
          crop: 'گندم آبی و دیم',
          rate: 'تاپ استار ۲ تا ۲.۵ لیتر در هکتار',
          timing: 'محلول‌پاشی برگی'
        },
        {
          stage: 'ظهور سنبله تا دانه شیری (اردیبهشت)',
          crop: 'گندم',
          rate: 'تایگر K High ۳ تا ۴ کیلوگرم در هکتار',
          timing: 'محلول‌پاشی یا همراه با آبیاری'
        }
      ],
      faqs: [
        {
          question: 'چرا باید همراه با کود سرک اوره از هیومیک اسید چلنجر استفاده شود؟',
          answer: 'چلنجر نیتروژن آزادشده از اوره را در خاک حفظ کرده و از تصعید و شستشوی سریع آن به سفره‌های زیرزمینی جلوگیری می‌کند و راندمان کود اوره را تا دو برابر ارتقا می‌دهد.'
        },
        {
          question: 'آیا محلول‌پاشی تاپ استار با سموم علف‌کش گندم قابل اختلاط است؟',
          answer: 'بله، اما توصیه می‌شود ابتدا در حجم کوچک تست فیزیکی انجام شود و از اختلاط همزمان با قارچ‌کش‌های مسی سنگین خودداری گردد.'
        },
        {
          question: 'بهترین زمان مصرف کود سرک در مناطق سردسیر فارس (اقلید و آباده) چه تاریخی است؟',
          answer: 'در اقلید با شروع بیداری گندم و رشد مجدد بهاره در اواخر اسفند یا اوایل فروردین بر اساس پیش‌بینی یخبندان‌ها مصرف می‌شود.'
        }
      ],
      references: [
        'FAO (2021). "Nitrogen Use Efficiency in Cereal Production". FAO Fertilizer Series, Rome.',
        'Havlin, J. L., et al. (2013). "Soil Fertility and Fertilizers: An Introduction to Nutrient Management". Pearson.',
        'Cakmak, I. (2008). "Enrichment of cereal grains with zinc: Agronomic biofortification". Plant and Soil.'
      ],
      relatedProducts: ['چلنجر (Challenger)', 'هیومی فارم (Humifarm)', 'تاپ استار (Top Star)', 'تایگر K High (کود ژل پتاس)'],
      relatedArticles: ['potassium-fertigation', 'humic-fulvic-root-development', 'zinc-boron-fruit-setting']
    },
    en: {
      title: 'Wheat Topdressing Fertilization Protocols in Fars: Timing, Dosages & Yield Optimization',
      category: 'Cereal Agronomy & Field Crops',
      readTime: '11 min',
      date: 'October 2024',
      lastModified: '2026-10-11',
      author: 'Cereal Nutrition & Field Crops Division, Pishgaman Paydar Falat Nik',
      targetKeyword: 'Wheat Topdressing Fertilization Fars',
      metaDescription: 'Complete wheat topdressing fertilizer guide for Marvdasht, Fasa, and Eqlid regions in Fars province, utilizing Challenger humic complex and Top Star chelated micronutrients.',
      summary: 'Minimizing nitrogen volatilization, preventing wheat lodging, and maximizing kernel test weights through humic-enhanced split urea applications in high-calcareous Mediterranean soils.',
      abstract: 'Fars province represents a top grain basket in Iran characterized by calcareous soils with pH values reaching 8.2. Nitrogen efficiency rarely exceeds 35% without organic stabilizing complexes. This paper evaluates the synergistic efficacy of Challenger powdered humate and Top Star multi-micronutrients during tillering and stem elongation stages.',
      contentSections: [
        {
          heading: 'Pedological Environment and Calcareous Challenges in Fars',
          text: 'High active lime locks soil phosphorus and micronutrients like zinc and manganese, while high diurnal spring temperatures induce premature moisture stress.'
        },
        {
          heading: 'Split Fertigation Protocol with Challenger Humate',
          text: 'Blending urea with Challenger powdered potassium humate slows urea hydrolysis, minimizing ammonia gas volatilization and promoting early crown root anchoring.'
        }
      ],
      dosageTable: [
        {
          stage: 'Active Tillering (Feb/March)',
          crop: 'Irrigated Wheat',
          rate: 'Challenger 2-3 kg/ha + Split Urea',
          timing: 'Second/third irrigation event'
        }
      ],
      faqs: [
        {
          question: 'Why blend humic acid with topdressed urea?',
          answer: 'Challenger buffers ammonium ions, preventing volatilization and leaching while improving root uptake kinetics.'
        }
      ],
      references: [
        'FAO (2021). "Nitrogen Use Efficiency in Cereal Production". Rome.',
        'Cakmak, I. (2008). "Enrichment of cereal grains with zinc". Plant and Soil.'
      ],
      relatedProducts: ['Challenger', 'Humifarm', 'Top Star', 'Tiger K High'],
      relatedArticles: ['potassium-fertigation', 'humic-fulvic-root-development']
    },
    ar: {
      title: 'برنامج التسميد السطحي لمحصول القمح في محافظة فارس: المواعيد والكميات الدقيقة',
      category: 'زراعة الحبوب والمحاصيل الحقلية',
      readTime: '١١ دقيقة',
      date: 'أكتوبر ٢٠٢٤',
      lastModified: '2026-10-11',
      author: 'قسم زراعة وتغذية الحبوب - شركة بيشغامان',
      targetKeyword: 'سماد القمح والتسميد السطحي في فارس',
      metaDescription: 'الدليل الزراعي المتكامل لتسميد القمح في مزارع محافظة فارس الإيرانية لزيادة التفريع وحجم السنابل عبر أسمدة چلنجر وتاپ استار.',
      summary: 'رفع كفاءة امتصاص اليوريا، منع رقاد القمح، وتغذية النبات بالعناصر الصغرى والبوتاسيوم في الأراضي الكلسية.',
      abstract: 'يعاني مزارعو القمح في محافظة فارس من انخفاض كفاءة أسمدة النيتروجين بسبب قلوية التربة. يقدم هذا المقال برنامج التسميد المقسم باستخدام أحماض الهيوميك چلنجر ومحلول تاپ استار.',
      contentSections: [
        {
          heading: 'التحديات الزراعية لزراعة القمح في الأراضي الكلسية',
          text: 'تؤدي قلوية التربة ونقص الزنك والمنغنيز إلى ضعف التفريع واصفرار الحقول، مما يستوجب استخدام مركبات مخلبية سريعة الامتصاص.'
        }
      ],
      dosageTable: [
        {
          stage: 'مرحلة التفريع (نهاية الشتاء)',
          crop: 'القمح المروي',
          rate: 'چلنجر ٢-٣ كغ للهكتار مع دفعة اليوريا',
          timing: 'مع رية التسميد'
        }
      ],
      faqs: [
        {
          question: 'ما فائدة خلط حمض الهيوميك مع سماد اليوريا؟',
          answer: 'يقلل حمض الهيوميك چلنجر من تطاير غاز الأمونيا ويزيد من كفاءة امتصاص النيتروجين بمقدار الضعف.'
        }
      ],
      references: [
        'FAO (2021). "Nitrogen Use Efficiency in Cereal Production". Rome.'
      ],
      relatedProducts: ['چلنجر (Challenger)', 'تاپ استار (Top Star)'],
      relatedArticles: ['potassium-fertigation', 'humic-fulvic-root-development']
    }
  },

  // 3. Rice Guilan Fertilization
  {
    id: 'reg-rice-fertilization-guilan',
    slug: 'rice-fertilization-guilan',
    aliases: ['kood-berenj-guilan', 'taghziyeh-berenj-shomal'],
    imageUrl: imgRice,
    region: {
      provinceFa: 'استان گیلان (رشت، لاهیجان، صومعه‌سرا، تالش)',
      cropFa: 'برنج بومی و پرمحصول (هاشمی، علی‌کاظمی، طارم، خزر)',
      provinceEn: 'Guilan Province',
      cropEn: 'Paddy Rice Cultivation',
      provinceAr: 'محافظة غيلان',
      cropAr: 'حقول الأرز المائي'
    },
    googleTrendKeyword: {
      fa: 'برنامه کوددهی برنج گیلان',
      en: 'Guilan Paddy Rice Fertilization Program',
      ar: 'برنامج تسميد محصول الأرز في غيلان'
    },
    fa: {
      title: 'برنامه کامل کوددهی برنج در گیلان: ریشه‌زایی نشاء، پنجه‌زنی و پر شدن دانه با جامپر و تایگر K High',
      category: 'شالیزار و برنج',
      readTime: '۱۰ دقیقه',
      date: 'مهر ۱۴۰۴',
      lastModified: '2026-10-11',
      author: 'دپارتمان تحقیقات برنج و شالیزارهای شمال پیشگامان',
      targetKeyword: 'برنامه کوددهی برنج گیلان',
      metaDescription: 'برنامه تغذیه گام‌به‌گام شالیزارهای برنج گیلان از انتقال نشاء تا خوشه‌دهی ارقام هاشمی و طارم با مصرف جامپر، تاپ استار و ژل پتاس تایگر K High.',
      summary: 'راهنمای تخصصی تقویت نشاء، تحریک پنجه‌زنی موثر، مهار ورس و طویل شدن خوشه برنج با کودهای ارگانیک و معدنی پیشگامان در شالیزارهای گیلان.',
      abstract: 'شالیزارهای استان گیلان در اقلیم مرطوب خزری با شرایط غرقابی مداوم و پتانسیل اکسیداسیون-احیای منفی خاک (Anaerobic Reduction) مواجهند. این محیط موجب خفگی ریشه اولیه نشاء و هدررفت شدید پتاسیم و روی می‌شود. این پژوهش اثر کود جامپر در استقرار سریع نشاء و ژل تایگر K High را در استحکام ساقه و مهار خوابیدگی بوته در باران‌های تابستان بررسی می‌نماید.',
      contentSections: [
        {
          heading: 'فیزیولوژی شالیزار و رفتار ریشه برنج در گیلان',
          text: 'پس از انتقال نشاء به زمین اصلی در اردیبهشت، نشاءهای برنج دچار شوک جابجایی (Transplanting Shock) می‌شوند. ریشه‌های بریده‌شده در آب گل‌آلود سرد دچار گندیدگی ریشه (Root Rot) می‌گردند. تحریک سریع ریشه‌های نابجا و موئین سفید، کلید اصلی ورود به فاز پنجه‌زنی پربار است.'
        },
        {
          heading: 'مراحل سه‌گانه طلایی کوددهی برنج هاشمی و طارم',
          text: '۱. استقرار نشاء و ریشه‌زایی (۷ تا ۱۰ روز پس از نشاکاری): استفاده از جامپر پیشگامان (فسفر بالا همراه با هیومات و عصاره محرک ریشه) ریشه‌ها را در بستر تثبیت کرده و تعداد پنجه‌های بارور را تا ۳۰٪ افزایش می‌دهد.\n۲. ساقه رفتن و آبستنی (مرحله Bouton): محلول‌پاشی تاپ استار جهت تامین روی، سیلیس و آهن به منظور مقاومت در برابر قارچ بلاست برنج.\n۳. شیری شدن دانه تا خمیری (پر شدن سنبله): کاربرد ژل پتاسیم بالای تایگر K High که باعث وزن‌گیری دانه‌ها، کاهش چشمگیر بندبند شدن و شکستگی برنج در شالیکوبی می‌گردد.'
        }
      ],
      dosageTable: [
        {
          stage: '۷ تا ۱۰ روز پس از نشاکاری',
          crop: 'برنج ارقام هاشمی و طارم',
          rate: 'جامپر ۱۰ تا ۱۵ کیلوگرم در هکتار',
          timing: 'پخش در آب شالیزار قبل از وجین اول'
        },
        {
          stage: 'شروع ساقه رفتن (اوایل تیر)',
          crop: 'برنج',
          rate: 'تاپ استار ۲ لیتر در هکتار',
          timing: 'محلول‌پاشی برگی'
        },
        {
          stage: 'مرحله شیری شدن دانه (اواخر تیر تا اوایل مرداد)',
          crop: 'برنج',
          rate: 'تایگر K High ۳ کیلوگرم در هکتار',
          timing: 'محلول‌پاشی برگی در ساعات خنک عصر'
        }
      ],
      faqs: [
        {
          question: 'چگونه از ورس (خوابیدگی) شالیزار برنج در باران‌های مرداد جلوگیری کنیم؟',
          answer: 'مصرف متعادل پتاسیم با کود ژل تایگر K High و کاهش مصرف کود اوره سرک در فاز ساقه رفتن، ضخامت دیواره سلولی ساقه را بالا برده و مانع از ورس می‌شود.'
        },
        {
          question: 'کود جامپر چه مزیتی نسبت به کودهای فسفاته معمولی دارد؟',
          answer: 'جامپر دارای فرمولاسیون فعال ریشه‌زا و اسیدهای آلی است که در شرایط احیایی و باتلاقی شالیزار تثبیت نشده و بلافاصله جذب ریشه می‌شود.'
        }
      ],
      references: [
        'IRRI (2020). "Rice Nutrient Management Guidelines". International Rice Research Institute.',
        'Dobermann, A., & Fairhurst, T. (2000). "Rice: Nutrient disorders & nutrient management". Potash & Phosphate Institute.'
      ],
      relatedProducts: ['جامپر (Jumper)', 'تاپ استار (Top Star)', 'تایگر K High (کود ژل پتاس)'],
      relatedArticles: ['potassium-fertigation', 'seaweed-extract', 'calcium-boron']
    },
    en: {
      title: 'Complete Rice Fertilization Program in Guilan: Rooting, Tillering & Grain Filling',
      category: 'Paddy Rice & Wetland Agronomy',
      readTime: '10 min',
      date: 'October 2024',
      lastModified: '2026-10-11',
      author: 'Rice Science & Wetland Research Group, Pishgaman Paydar Falat Nik',
      targetKeyword: 'Guilan Paddy Rice Fertilization Program',
      metaDescription: 'Step-by-step nutrient management for northern Iran paddy rice (Hashemi and Tarom cultivars) utilizing Jumper root starter and Tiger K High potassium gel.',
      summary: 'Preventing transplant shock, stimulating fertile tillers, and increasing milled grain recovery percentages through targeted nutrient protocols in Guilan paddies.',
      abstract: 'Wetland paddies in Guilan face anaerobic soil reduction states that impair initial seedling rooting. Jumper provides bio-available phosphorus and humates for rapid root flush, while Tiger K High strengthens culm mechanical strength against monsoon lodging.',
      contentSections: [
        {
          heading: 'Transplant Shock Dynamics in Guilan Paddy Soils',
          text: 'Cold water temperatures in May cause seedling mortality. Rapid adventitious rooting stimulated by Jumper secures tiller count and lodging tolerance.'
        }
      ],
      dosageTable: [
        {
          stage: '7-10 Days Post-Transplant',
          crop: 'Paddy Rice (Hashemi/Tarom)',
          rate: 'Jumper 10-15 kg/ha',
          timing: 'Broadcast in shallow standing water'
        }
      ],
      faqs: [
        {
          question: 'How to avoid rice crop lodging during summer rains?',
          answer: 'Apply Tiger K High potassium gel during heading to harden culm epidermis and moderate vegetative nitrogen flush.'
        }
      ],
      references: [
        'IRRI (2020). "Rice Nutrient Management Guidelines". International Rice Research Institute.'
      ],
      relatedProducts: ['Jumper', 'Top Star', 'Tiger K High'],
      relatedArticles: ['potassium-fertigation', 'seaweed-extract']
    },
    ar: {
      title: 'برنامج تسميد محصول الأرز المائي في غيلان: التشتيل، التفريع وامتلاء الحبوب',
      category: 'حقول الأرز والزراعة المائية',
      readTime: '١٠ دقائق',
      date: 'أكتوبر ٢٠٢٤',
      lastModified: '2026-10-11',
      author: 'قسم أبحاث محاصيل الأرز - شركة بيشغامان',
      targetKeyword: 'برنامج تسميد محصول الأرز في غيلان',
      metaDescription: 'برنامج التغذية الكامل لأراضي زراعة الأرز في شمال إيران لتحفيز الجذور ومنع الرقاد وزيادة وزن الحبوب عبر سماد جامبر وتايكر جل.',
      summary: 'إدارة متكاملة لتغذية الأرز في مزارع غيلان من مرحلة الشتل حتى الحصاد باستخدام أسمدة بيشغامان المتخصصة.',
      abstract: 'تتميز أراضي الأرز في غيلان بظروف غمر مائي مستمرة. يساعد مركب جامبر على تجذير الشتلات سريعاً، بينما يدعم تايكر جل كيه هاي صلابة السيقان وامتلاء الحبوب.',
      contentSections: [
        {
          heading: 'مراحل التغذية الأساسية لأصناف الأرز',
          text: 'يحتاج الأرز في البداية إلى الفوسفور والمحفزات الجذرية، ثم إلى العناصر الصغرى والبوتاسيوم في مرحلة امتلاء السنابل.'
        }
      ],
      dosageTable: [
        {
          stage: 'بعد الشتل بـ ٧-١٠ أيام',
          crop: 'أرز طارم وهاشمي',
          rate: 'جامبر ١٠-١٥ كغ للهكتار',
          timing: 'نثراً في ماء الحقل'
        }
      ],
      faqs: [
        {
          question: 'كيف نتجنب رقاد نبات الأرز قبل الحصاد؟',
          answer: 'يساعد التسميد بالبوتاسيوم عالي التركيز مع تايكر جل على تقوية جدران الخلايا في الساق ومقاومة الرياح والأمطار.'
        }
      ],
      references: [
        'IRRI (2020). "Rice Nutrient Management Guidelines".'
      ],
      relatedProducts: ['جامپر (Jumper)', 'تایگر K High (کود ژل پتاس)'],
      relatedArticles: ['potassium-fertigation', 'seaweed-extract']
    }
  },

  // 4. Citrus Winter Nutrition Mazandaran
  {
    id: 'reg-citrus-winter-mazandaran',
    slug: 'citrus-winter-nutrition-mazandaran',
    aliases: ['kood-morakabat-mazandaran', 'kood-zemestane-porteghel'],
    imageUrl: imgCitrus,
    region: {
      provinceFa: 'استان مازندران (ساری، قائم‌شهر، بابل، تنکابن)',
      cropFa: 'مرکبات (پرتقال تامسون، نارنگی اونشو، لیمو)',
      provinceEn: 'Mazandaran Province',
      cropEn: 'Commercial Citrus Groves (Thomson Navel & Mandarins)',
      provinceAr: 'محافظة مازندران',
      cropAr: 'بساتين الحمضيات والبرتقال'
    },
    googleTrendKeyword: {
      fa: 'کوددهی زمستانه مرکبات مازندران',
      en: 'Winter Citrus Fertilization Mazandaran',
      ar: 'التسميد الشتوي للحمضيات في مازندران'
    },
    fa: {
      title: 'کوددهی زمستانه مرکبات در مازندران: تغذیه پس از برداشت و مقاوم‌سازی به سرما با فول شارژر و ردفول',
      category: 'باغداری مرکبات شمال',
      readTime: '۱۱ دقیقه',
      date: 'مهر ۱۴۰۴',
      lastModified: '2026-10-11',
      author: 'دپارتمان باغبانی و مرکبات شمال پیشگامان',
      targetKeyword: 'کوددهی زمستانه مرکبات مازندران',
      metaDescription: 'راهنمای جامع کوددهی پس از برداشت و چالکود زمستانه باغات پرتقال تامسون و نارنگی مازندران با فول شارژر، ردفول و هیومی فارم پیشگامان.',
      summary: 'بازسازی انرژی درختان مرکبات پس از چینش بار، پر کردن جوانه‌های زایشی سال بعد، پیشگیری از زردی زمستانه و افزایش مقاومت بافت‌ها به یخبندان‌های شمال.',
      abstract: 'باغات مرکبات مازندران پس از باردهی سنگین پاییزه دچار افت شدید کربوهیدرات و تخلیه ذخایر روی، بور و آهن می‌شوند. یخبندان‌های متناوب دی و بهمن ماه تهدید بزرگی برای آوندهای درختان پرتقال هستند. این مقاله برنامه کاربردی فروت‌ست پاییزه با فول شارژر و تغذیه ریشه‌ای با ردفول و هیومی فارم را برای تضمین شکوفه‌دهی بهار بررسی می‌کند.',
      contentSections: [
        {
          heading: 'اهمیت فیزیولوژیک تغذیه پس از برداشت مرکبات در شمال',
          text: 'بسیاری از باغداران تصور می‌کنند پس از چیدن میوه در آذر و دی ماه، کار تغذیه درخت به پایان رسیده است. در حالی که درختان همیشه سبز مرکبات برخلاف درختان خزان‌دار، خواب عمیق نداشته و جوانه‌های گل سال آینده (Floral Buds) در همین روزهای سرد زمستان در حال تمایز سلولی هستند. عدم تغذیه در این مقطع منجر به سال‌آوری (Alternative Bearing) و ریزش شدید گل‌های بهاره می‌شود.'
        },
        {
          heading: 'مراحل کوددهی زمستانه مرکبات در مازندران',
          text: '۱. محلول‌پاشی فروت‌ست پس از برداشت (دی ماه قبل از ریزش کامل فعالیت): مصرف فول شارژر با دوز ۲ در هزار همراه با اسید آمینه دوپینگ، غلظت قندهای محلول سلولی را بالا برده و نقطه انجماد شیره سیتوپلاسم را تا منفی ۴ درجه سانتی‌گراد پایین می‌آورد.\n۲. چالکود و تغذیه ریشه‌ای زمستانه (بهمن ماه): تزریق هیومی فارم مایع به همراه کود آهن اختصاصی ردفول (Fe-EDDHA با ارتو-ارتو بالا) در سایه‌انداز ریشه، باعث ترمیم ریشه‌های موئین آسیب‌دیده از ادوات برداشت می‌شود.'
        }
      ],
      dosageTable: [
        {
          stage: 'بلافاصله پس از برداشت میوه (دی ماه)',
          crop: 'باغات پرتقال و نارنگی',
          rate: 'فول شارژر ۲ لیتر در ۱۰۰۰ لیتر آب',
          timing: 'محلول‌پاشی تاج درخت در روزهای بدون باران'
        },
        {
          stage: 'چالکود زمستانه (بهمن و اوایل اسفند)',
          crop: 'مرکبات بارده',
          rate: 'ردفول ۵۰ تا ۷۰ گرم برای هر درخت + هیومی فارم ۱۰ لیتر در هکتار',
          timing: 'در شیار یا چاله کودی سایه‌انداز'
        }
      ],
      faqs: [
        {
          question: 'چرا مصرف کود آهن ردفول در زمستان توصیه می‌شود؟',
          answer: 'آهن EDDHA ردفول به دلیل پایداری بالا در خاک در طول زمستان تثبیت نشده و در اسفند هم‌زمان با استارت جریان شیره نباتی بلافاصله جذب می‌شود و از زردی کلروتیک اول بهار جلوگیری می‌کند.'
        },
        {
          question: 'آیا محلول‌پاشی فروت‌ست بعد از یخبندان هم موثر است؟',
          answer: 'بهترین زمان قبل از ورود امواج سرمای شدید است؛ اما اگر سرما رخ داده باشد، مصرف ترکیب فول شارژر با دوپینگ به ترمیم سرشاخه‌های آسیب‌دیده کمک می‌نماید.'
        }
      ],
      references: [
        'Davies, F. S., & Albrigo, L. G. (1994). "Citrus (Crop Production Science in Horticulture)". CAB International.',
        'Zekri, M., & Obreza, T. A. (2013). "Plant nutrients for citrus trees". University of Florida IFAS Extension.'
      ],
      relatedProducts: ['فول شارژر (Full Charger)', 'ردفول (Redful)', 'هیومی فارم (Humifarm)', 'دوپینگ (Doping)'],
      relatedArticles: ['calcium-boron', 'heat-drought-stress', 'iron-eddha-chlorosis']
    },
    en: {
      title: 'Winter Citrus Nutrition in Mazandaran: Post-Harvest Recovery & Frost Hardening',
      category: 'Subtropical Horticulture & Citrus',
      readTime: '11 min',
      date: 'October 2024',
      lastModified: '2026-10-11',
      author: 'Citrus Sciences & Subtropical Horticulture Division, Pishgaman Paydar Falat Nik',
      targetKeyword: 'Winter Citrus Fertilization Mazandaran',
      metaDescription: 'Comprehensive guide for post-harvest nutrition and frost protection in Mazandaran Thomson navel and mandarin orchards using Full Charger and Redful iron chelate.',
      summary: 'Restoring carbohydrate reserves in evergreen citrus canopies, securing spring flower bud differentiation, and lowering freezing thresholds against Caspian winter frosts.',
      abstract: 'Commercial citrus orchards along the Caspian littoral undergo severe mineral depletion post-harvest. Applying foliar Full Charger (Zinc & Boron) combined with Doping amino acids raises cellular solute osmolarity, decreasing freezing points, while Redful iron fertigation prevents spring chlorosis.',
      contentSections: [
        {
          heading: 'Physiological Necessity of Post-Harvest Citrus Fertilization',
          text: 'Evergreen citrus continues biochemical respiration during winter. Floral bud induction requires optimal zinc, boron, and iron balances.'
        }
      ],
      dosageTable: [
        {
          stage: 'Post-Harvest Foliar (Jan)',
          crop: 'Citrus (Navel/Mandarin)',
          rate: 'Full Charger 2 L / 1000 L water',
          timing: 'Clear weather conditions'
        }
      ],
      faqs: [
        {
          question: 'How does post-harvest foliar spray prevent frost damage?',
          answer: 'Soluble carbohydrates and zinc-boron cofactors enhance cell membrane elasticity and suppress ice nucleation.'
        }
      ],
      references: [
        'Davies, F. S., & Albrigo, L. G. (1994). "Citrus". CAB International.'
      ],
      relatedProducts: ['Full Charger', 'Redful', 'Humifarm', 'Doping'],
      relatedArticles: ['calcium-boron', 'iron-eddha-chlorosis']
    },
    ar: {
      title: 'التسميد الشتوي للحمضيات في مازندران: ما بعد الحصاد ومقاومة الصقيع',
      category: 'بساتين الحمضيات والفاكهة شبه الاستوائية',
      readTime: '١١ دقيقة',
      date: 'أكتوبر ٢٠٢٤',
      lastModified: '2026-10-11',
      author: 'قسم بستنة الحمضيات - شركة بيشغامان',
      targetKeyword: 'التسميد الشتوي للحمضيات في مازندران',
      metaDescription: 'برنامج تغذية بساتين البرتقال واليوسفي بعد جمع المحصول لحماية الأشجار من موجات الصقيع الشتوية عبر فول شارجر وردفول.',
      summary: 'إعادة شحن مخزون طاقة الأشجار بعد الحصاد وضمان تمايز البراعم الزهرية للربيع القادم.',
      abstract: 'تفقد أشجار الحمضيات كميات هائلة من العناصر بعد قطاف الثمار. يساعد الرش الورقي بمركب فول شارجر مع شيلات الحديد ردفول على تقوية المناعة الشتوية للأشجار.',
      contentSections: [
        {
          heading: 'أهمية التسميد الشتوي لأشجار البرتقال',
          text: 'أشجار الحمضيات دائمة الخضرة تحتاج إلى عناصر الزنك والبورون والحديد لتكوين براعم الأزهار في الشتاء.'
        }
      ],
      dosageTable: [
        {
          stage: 'بعد الحصاد مباشرة',
          crop: 'أشجار البرتقال واليوسفي',
          rate: 'فول شارجر ٢ لتر لكل ١٠٠٠ لتر ماء',
          timing: 'رش ورقي'
        }
      ],
      faqs: [
        {
          question: 'كيف يحمي التسميد بعد الحصاد من أضرار الصقيع؟',
          answer: 'يرفع تركيز السكريات والأحماض الأمينية داخل عصارة الخلايا مما يخفض درجة تجمد الأنسجة النباتية.'
        }
      ],
      references: [
        'Davies, F. S., & Albrigo, L. G. (1994). "Citrus". CAB International.'
      ],
      relatedProducts: ['فول شارژر (Full Charger)', 'ردفول (Redful)'],
      relatedArticles: ['calcium-boron', 'iron-eddha-chlorosis']
    }
  },

  // 5. Apple Alternate Bearing Azerbaijan
  {
    id: 'reg-apple-alternate-bearing-azerbaijan',
    slug: 'apple-alternate-bearing-azerbaijan',
    aliases: ['kood-sib-azarbaijan', 'salavari-sib-urmia'],
    imageUrl: imgApple,
    region: {
      provinceFa: 'آذربایجان غربی و شرقی (ارومیه، مراغه، سلماس، اشنویه)',
      cropFa: 'باغات سیب (رد دلیشز، گلدن دلیشز)',
      provinceEn: 'West & East Azerbaijan',
      cropEn: 'Commercial Apple Orchards (Red & Golden Delicious)',
      provinceAr: 'محافظة أذربيجان',
      cropAr: 'بساتين التفاح'
    },
    googleTrendKeyword: {
      fa: 'سال آوری سیب آذربایجان',
      en: 'Apple Alternate Bearing Management Azerbaijan',
      ar: 'معالجة المعاومة في بساتين التفاح'
    },
    fa: {
      title: 'مدیریت سال‌آوری و تغذیه در باغات سیب آذربایجان با دوپینگ، تایگر K High و فول شارژر',
      category: 'باغداری درختان معتدله',
      readTime: '۱۲ دقیقه',
      date: 'مهر ۱۴۰۴',
      lastModified: '2026-10-11',
      author: 'دپارتمان فیزیولوژی درختان میوه پیشگامان',
      targetKeyword: 'سال آوری سیب آذربایجان',
      metaDescription: 'راهکارهای نوین شکستن چرخه سال‌آوری، افزایش رنگ‌گیری و قند و جلوگیری از پوسیدگی گلگاه سیب در ارومیه و مراغه با سبد تخصصی پیشگامان فلات نیک.',
      summary: 'تحلیل هورمونی مهار گلدهی توسط جیبرلین‌های دانه سیب، تامین کلسیم و بور برای استحکام بافت میوه و برنامه تغذیه جهت حفظ عملکرد پایدار در سال‌های پربار و کم‌بار.',
      abstract: 'باغات سیب آذربایجان قطب تولید سیب کشور هستند اما پدیده سال‌آوری (Alternate Bearing) هر دو سال یکبار افت عملکرد تا ۶۰ درصدی را به باغداران تحمیل می‌کند. تولید بالای بذر در سال پربار (On-year) با ترشح مقادیر زیاد جیبرلین مانع از تشکیل جوانه گل برای سال بعد می‌شود. این مقاله مکانیزم هورمونی و نقش آمینواسیدهای دوپینگ، روی و بور فول شارژر و پتاسیم ژل تایگر K High را در کنترل این عارضه تشریح می‌نماید.',
      contentSections: [
        {
          heading: 'مبانی فیزیولوژیک سال‌آوری در ارقام رد و گلدن دلیشز',
          text: 'سیب‌های رقم رد دلیشز به دلیل تعداد بذر زیاد در هر میوه، قوی‌ترین مهار هورمونی را بر جوانه‌های اسپور سال بعد اعمال می‌کنند. در صورتی که درخت در خرداد ماه (زمان تمایز جوانه‌های گل) با کمبود عناصر کلسیم، بور و اسیدهای آمینه روبرو باشد، جوانه‌ها تبدیل به جوانه برگی (رویشی) شده و در سال آینده باغ خالی از محصول می‌ماند.'
        },
        {
          heading: 'برنامه تغذیه ضد سال‌آوری پیشگامان',
          text: '• تورم جوانه‌ها در اوایل بهار: محلول‌پاشی فول شارژر با دوز ۲ در هزار جهت گرده‌افشانی و بستن میوه‌های همگن.\n• فندقی شدن تا گردویی شدن میوه: مصرف کلسیم و بور مایع به همراه آمینواسید دوپینگ جهت تنظیم هورمونی و پیشگیری از لکه تلخی (Bitter Pit).\n• ۴۵ روز قبل از برداشت: محلول‌پاشی ژل تایگر K High با دوز ۳ در هزار جهت رنگ‌آوری درخشان پوست سیب‌های قرمز و ارتقای قند بریکس بدون ایجاد افت سفتی بافت.'
        }
      ],
      dosageTable: [
        {
          stage: 'تورم جوانه تا نوک سبزی (فروردین)',
          crop: 'باغات سیب مراغه و ارومیه',
          rate: 'فول شارژر ۲ لیتر در ۱۰۰۰ لیتر آب',
          timing: 'محلول‌پاشی فروت‌ست بهاره'
        },
        {
          stage: 'مرحله گردویی شدن (خرداد - زمان تمایز جوانه گل سال بعد)',
          crop: 'سیب',
          rate: 'دوپینگ ۲ لیتر در ۱۰۰۰ لیتر آب',
          timing: 'محلول‌پاشی برگی'
        },
        {
          stage: 'رنگ‌گیری و بلوغ (مرداد تا شهریور)',
          crop: 'سیب',
          rate: 'تایگر K High ۳ کیلوگرم در ۱۰۰۰ لیتر آب',
          timing: 'محلول‌پاشی نوبت اول و دوم با فاصله ۱۵ روز'
        }
      ],
      faqs: [
        {
          question: 'آیا تنک کردن میوه همراه با مصرف کود در مهار سال‌آوری لازم است؟',
          answer: 'بله، تنک شیمیایی یا دستی زودهنگام در مرحله فندقی شدن به همراه برنامه کودی پیشگامان، موثرترین راهکار شکستن قطعی سال‌آوری است.'
        },
        {
          question: 'کود تایگر K High چه تاثیری در انبارداری سیب دارد؟',
          answer: 'تایگر K High به دلیل خلوص بالا و عدم وجود کلر و سدیم، ساختار دیواره را مستحکم کرده و ماندگاری سیب در سردخانه را تا ۳ ماه افزایش می‌دهد.'
        }
      ],
      references: [
        'Faust, M. (1989). "Physiology of Temperate Zone Fruit Trees". John Wiley & Sons.',
        'Jonkers, H. (1979). "Biennial bearing in apple and pear: a review". Scientia Horticulturae, 11(4), 303-312.'
      ],
      relatedProducts: ['دوپینگ (Doping)', 'تایگر K High (کود ژل پتاس)', 'فول شارژر (Full Charger)'],
      relatedArticles: ['potassium-fertigation', 'calcium-boron', 'heat-drought-stress']
    },
    en: {
      title: 'Managing Alternate Bearing in Azerbaijan Apple Orchards with Doping, Tiger K High & Full Charger',
      category: 'Deciduous Pomology & Apple Trees',
      readTime: '12 min',
      date: 'October 2024',
      lastModified: '2026-10-11',
      author: 'Deciduous Tree Physiology Division, Pishgaman Paydar Falat Nik',
      targetKeyword: 'Apple Alternate Bearing Management Azerbaijan',
      metaDescription: 'Eliminate biennial bearing cycles, boost fruit coloration, and elevate cold-storage firmness in Urmia and Maragheh apple orchards with Pishgaman specialized inputs.',
      summary: 'Overcoming gibberellin-mediated floral bud inhibition, optimizing calcium-boron nutrition, and balancing tree energy across heavy and light crop years.',
      abstract: 'Commercial apple orchards in West and East Azerbaijan suffer heavy alternate bearing cycles where seed-derived gibberellin synthesis suppresses return bloom. This study demonstrates the integrated response of Doping amino acids, Full Charger (Zn-B), and Tiger K High potassium gel.',
      contentSections: [
        {
          heading: 'Physiological and Hormonal Mechanisms of Apple Biennial Bearing',
          text: 'Developing seeds in heavy crop years synthesize excess gibberellins that inhibit floral bud induction in June spurs.'
        }
      ],
      dosageTable: [
        {
          stage: 'Tight Cluster / Pink Bud',
          crop: 'Apple (Red & Golden Delicious)',
          rate: 'Full Charger 2 L / 1000 L',
          timing: 'Spring foliar application'
        }
      ],
      faqs: [
        {
          question: 'Does potassium gel improve apple fruit storability?',
          answer: 'Yes, Tiger K High balances cellular turgor and enhances anthocyanin pigment accumulation without compromising cell firmness.'
        }
      ],
      references: [
        'Faust, M. (1989). "Physiology of Temperate Zone Fruit Trees".'
      ],
      relatedProducts: ['Doping', 'Tiger K High', 'Full Charger'],
      relatedArticles: ['potassium-fertigation', 'calcium-boron']
    },
    ar: {
      title: 'إدارة ظاهرة المعاومة (تبادل الحمل) في بساتين التفاح بأذربيجان',
      category: 'بساتين الفاكهة المتساقطة',
      readTime: '١٢ دقيقة',
      date: 'أكتوبر ٢٠٢٤',
      lastModified: '2026-10-11',
      author: 'قسم فيزيولوجيا أشجار الفاكهة - شركة بيشغامان',
      targetKeyword: 'معالجة المعاومة في بساتين التفاح',
      metaDescription: 'طرق التغلب على المعاومة وتحسين تلوين وصلابة ثمار التفاح في أورميا ومراغة باستخدام أسمدة دوبينغ وفول شارجر وتايكر جل.',
      summary: 'تنظيم التوازن الهرموني، زيادة تمايز البراعم الزهرية، ورفع مواصفات الثمار التخزينية.',
      abstract: 'تسبب المعاومة تقلبات كبيرة في إنتاج بساتين التفاح بين عام وآخر. يقدم هذا المقال برنامجاً غذائياً يضمن انتظام المحصول السنوي وجودة الثمار.',
      contentSections: [
        {
          heading: 'الأسباب الفسيولوجية لظاهرة المعاومة في التفاح',
          text: 'تفرز بذور الثمار هرمونات الجبرلين التي تمنع تحول البراعم إلى أزهار في العام التالي، مما يستوجب التدخل بالتسميد المتوازن.'
        }
      ],
      dosageTable: [
        {
          stage: 'انتفاخ البراعم في الربيع',
          crop: 'أشجار التفاح',
          rate: 'فول شارجر ٢ لتر لكل ١٠٠٠ لتر ماء',
          timing: 'رش ورقي'
        }
      ],
      faqs: [
        {
          question: 'كيف يساعد تايكر جل كيه هاي في تلوين التفاح؟',
          answer: 'يحفز البوتاسيوم عالي النقاوة تخليق صبغات الأنثوسيانين المسؤولة عن اللون الأحمر الجذاب في الثمار.'
        }
      ],
      references: [
        'Faust, M. (1989). "Physiology of Temperate Zone Fruit Trees".'
      ],
      relatedProducts: ['دوپینگ (Doping)', 'تایگر K High (کود ژل پتاس)'],
      relatedArticles: ['potassium-fertigation', 'calcium-boron']
    }
  },

  // 6. Saffron Khorasan Nutrition
  {
    id: 'reg-saffron-nutrition-khorasan',
    slug: 'saffron-nutrition-khorasan',
    aliases: ['kood-zaferan-khorasan', 'zachab-zaferan-torbat'],
    imageUrl: imgSaffron,
    region: {
      provinceFa: 'خراسان رضوی و جنوبی (تربت حیدریه، قائنات، گناباد، فردوس)',
      cropFa: 'زعفران (طلای سرخ)',
      provinceEn: 'Razavi & South Khorasan',
      cropEn: 'Saffron Crocus Fields',
      provinceAr: 'محافظة خراسان',
      cropAr: 'مزارع الزعفران'
    },
    googleTrendKeyword: {
      fa: 'کود زعفران خراسان',
      en: 'Khorasan Saffron Corm Fertilization',
      ar: 'تسميد أبصال الزعفران في خراسان'
    },
    fa: {
      title: 'تقویت زعفران در خراسان رضوی و جنوبی: افزایش گل، درشت شدن پیاز و مدیریت زاچ‌آب با تایگر K High و سیلیگارد',
      category: 'گیاهان دارویی و زعفران',
      readTime: '۱۰ دقیقه',
      date: 'مهر ۱۴۰۴',
      lastModified: '2026-10-11',
      author: 'دپارتمان تحقیقات زعفران و خاک‌های خشک پیشگامان',
      targetKeyword: 'کود زعفران خراسان',
      metaDescription: 'برنامه علمی کوددهی زعفران در قائنات و تربت حیدریه: تغذیه در آب اول و زاچ‌آب، درشت کردن پیازهای دختری به بالای ۸ گرم با تایگر و سیلیگارد.',
      summary: 'راهنمای گام‌به‌گام کوددهی طلای سرخ در اقلیم سرد و خشک خراسان، اصول محلول‌پاشی زمستانه برگ‌های زعفران و مهار سرمازدگی پیازها.',
      abstract: 'تولید اقتصادی زعفران منوط به وزن پیازهای دختری است؛ پیازهای زیر ۸ گرم گلدهی اقتصادی ندارند. در خاک‌های شنی و کم‌ماده آلی خراسان، دوره کوتاه فتوسنتز برگی از آذر تا فروردین تنها فرصت ذخیره‌سازی غذا در پیاز است. این پژوهش مصرف پتاسیم تایگر K High در زاچ‌آب و سیلیگارد را برای مهار یخ‌زدگی زمستانه تبیین می‌نماید.',
      contentSections: [
        {
          heading: 'اکولوژی و تقویم رشد زعفران در کویر شرق کشور',
          text: 'زعفران چرخه رشد معکوس دارد؛ در اوایل آبان با آب اول گل می‌دهد و از آذر ماه با رشد برگ‌ها، فرآیند تکثیر پیازهای دختری در زیر خاک آغاز می‌شود. زاچ‌آب (آبیاری پس از برداشت گل) مهم‌ترین نوبت غذایی پیاز زعفران است که عیار و تعداد کلاله‌ها در سال آینده را پایه‌گذاری می‌کند.'
        },
        {
          heading: 'برنامه تغذیه طلایی زعفران پیشگامان',
          text: '۱. زاچ‌آب (آذر ماه پس از برداشت گل): مصرف خاکی تایگر K High با دوز ۱۰ کیلوگرم در هکتار همراه با هیومی فارم ۵ لیتر، انرژی لازم را برای شروع غده‌بندی پیازهای دختری فراهم می‌سازد.\n۲. محلول‌پاشی‌های زمستانه (دی و بهمن): مصرف سیلیگارد (سیلیکات پتاسیم) دیواره سلولی برگ‌ها را شیشه‌ای و مستحکم کرده و از آسیب یخ‌بندان‌های زیر منفی ۱۵ درجه جلوگیری می‌کند.\n۳. محلول‌پاشی اواخر زمستان (اسفند): مصرف تاپ استار جهت حفظ سبزی برگ‌ها تا اردیبهشت و تکمیل فرآیند کوچ مواد به پیاز.'
        }
      ],
      dosageTable: [
        {
          stage: 'زاچ‌آب (آذر ماه)',
          crop: 'مزارع زعفران تربت و قائنات',
          rate: 'تایگر K High ۸ تا ۱۰ کیلوگرم + هیومی فارم ۵ لیتر در هکتار',
          timing: 'همراه با آب آبیاری بعد از چیدن گل'
        },
        {
          stage: 'محلول‌پاشی زمستانه نوبت اول (دی ماه)',
          crop: 'زعفران',
          rate: 'سیلیگارد ۲ لیتر در هکتار',
          timing: 'محلول‌پاشی برگی در روزهای آرام'
        },
        {
          stage: 'محلول‌پاشی نوبت دوم (بهمن و اسفند)',
          crop: 'زعفران',
          rate: 'تاپ استار ۲ لیتر + دوپینگ ۱.۵ لیتر در هکتار',
          timing: 'محلول‌پاشی برگی قبل از زرد شدن برگ‌ها'
        }
      ],
      faqs: [
        {
          question: 'چرا رساندن وزن پیاز زعفران به بالای ۸ گرم اهمیت حیاتی دارد؟',
          answer: 'پیازهای با وزن زیر ۸ گرم توانایی تشکیل گل در پاییز بعد را ندارند؛ پیازهای ۱۰ تا ۱۲ گرمی تا ۳ کلاله باکیفیت و با طول بالا تولید می‌کنند.'
        },
        {
          question: 'سیلیگارد چگونه زعفران را در برابر یخبندان زمستانه حفظ می‌کند؟',
          answer: 'عنصر سیلیس لایه‌ای ژلاتینی در اپیدرم برگ ایجاد کرده و تنش سرمای خشک زمستانه خراسان را بدون سوختگی برگ کنترل می‌کند.'
        }
      ],
      references: [
        'Kafi, M., et al. (2006). "Saffron (Crocus sativus) Production and Processing". Science Publishers.',
        'Molina, R. V., et al. (2005). "Temperature and corm size effects on saffron flower emergence". Scientia Horticulturae.'
      ],
      relatedProducts: ['تایگر K High (کود ژل پتاس)', 'سیلیگارد (سیلیکات پتاسیم)', 'تاپ استار (Top Star)', 'هیومی فارم (Humifarm)'],
      relatedArticles: ['potassium-fertigation', 'heat-drought-stress']
    },
    en: {
      title: 'Saffron Corm Nutrition in Khorasan: Bulb Weight & Flower Density Enhancement',
      category: 'Medicinal Herbs & Saffron',
      readTime: '10 min',
      date: 'October 2024',
      lastModified: '2026-10-11',
      author: 'Arid Zone Crops & Saffron Research Unit, Pishgaman Paydar Falat Nik',
      targetKeyword: 'Khorasan Saffron Corm Fertilization',
      metaDescription: 'Science-backed fertilization protocol for Torbat-e Heydarieh and Qaen saffron fields using Tiger K High and Siligard potassium silicate.',
      summary: 'Maximizing daughter corm sizing over 8-10 grams, optimizing post-harvest fertigation, and shielding vegetative foliage against sub-zero winter spells.',
      abstract: 'Economic saffron yields correlate directly with daughter corm mass. In desert soils of Khorasan with low organic content, vegetative foliage active from December to April serves as the sole carbon source. Applying Tiger K High in Zach-Ab and Siligard foliar sprays ensures winter hardiness and bud count.',
      contentSections: [
        {
          heading: 'Phenological Saffron Cycle in Arid Eastern Iran',
          text: 'Saffron displays reverse vegetative phonology, flowering in November and bulking daughter corms through cold winter months.'
        }
      ],
      dosageTable: [
        {
          stage: 'Post-Harvest Fertigation (Dec)',
          crop: 'Saffron Fields',
          rate: 'Tiger K High 8-10 kg/ha + Humifarm 5 L/ha',
          timing: 'Immediate post-flower irrigation'
        }
      ],
      faqs: [
        {
          question: 'Why is daughter corm weight above 8g essential?',
          answer: 'Corms lighter than 8 grams remain vegetative and fail to produce commercial flowers in the subsequent harvest.'
        }
      ],
      references: [
        'Kafi, M., et al. (2006). "Saffron Production and Processing". Science Publishers.'
      ],
      relatedProducts: ['Tiger K High', 'Siligard', 'Top Star', 'Humifarm'],
      relatedArticles: ['potassium-fertigation', 'heat-drought-stress']
    },
    ar: {
      title: 'تسميد وتقوية محصول الزعفران في خراسان: تكبير الأبصال وزيادة الأزهار',
      category: 'الأعشاب الطبية والزعفران',
      readTime: '١٠ دقائق',
      date: 'أكتوبر ٢٠٢٤',
      lastModified: '2026-10-11',
      author: 'قسم أبحاث الزعفران - شركة بيشغامان',
      targetKeyword: 'تسميد أبصال الزعفران في خراسان',
      metaDescription: 'برنامج تغذية الزعفران في قائنات وتربت حيدرية لزيادة وزن البصلات وتكثيف خيوط الزعفران عبر تايكر جل وسيليكارد.',
      summary: 'برنامج علمي متكامل لتسميد أبصال الزعفران وحمايتها من الصقيع في شرق إيران.',
      abstract: 'يرتبط إنتاج الزعفران مباشرة بوزن البصيلات الناتجة. يقدم هذا المقال برنامج التسميد بعد قطاف الأزهار باستخدام البوتاسيوم والسيليكون.',
      contentSections: [
        {
          heading: 'مراحل نمو وتسميد الزعفران',
          text: 'تعد رية ما بعد القطف (زاچ‌آب) أهم مرحلة لتغذية الأبصال الجديدة تحت التربة قبل نهاية الشتاء.'
        }
      ],
      dosageTable: [
        {
          stage: 'رية ما بعد القطف',
          crop: 'مزارع الزعفران',
          rate: 'تايكر جل كيه هاي ٨-١٠ كغ للهكتار',
          timing: 'مع مياه الري'
        }
      ],
      faqs: [
        {
          question: 'ما هو الوزن المثالي لبصلة الزعفران؟',
          answer: 'يجب أن يتجاوز وزن البصلة ٨ إلى ١٠ غرامات لضمان إنتاج زهور تجارية متعددة.'
        }
      ],
      references: [
        'Kafi, M., et al. (2006). "Saffron Production and Processing".'
      ],
      relatedProducts: ['تایگر K High (کود ژل پتاس)', 'سیلیگارد (سیلیکات پتاسیم)'],
      relatedArticles: ['potassium-fertigation']
    }
  },

  // 7. Date Palm Chlorosis Khuzestan
  {
    id: 'reg-date-palm-chlorosis-khuzestan',
    slug: 'date-palm-chlorosis-khuzestan',
    aliases: ['kood-nakhl-khuzestan', 'zardi-barg-khorma'],
    imageUrl: imgDatePalm,
    region: {
      provinceFa: 'استان خوزستان (شادگان، آبادان، دزفول، اهواز، کارون)',
      cropFa: 'نخل خرما (ارقام استعمران/سایر، برحی، کبکاب، زاهدی)',
      provinceEn: 'Khuzestan Province',
      cropEn: 'Date Palm Oases (Barhi, Sayer & Zahedi)',
      provinceAr: 'محافظة خوزستان',
      cropAr: 'واحات وبساتين النخيل'
    },
    googleTrendKeyword: {
      fa: 'زردی برگ نخل خرما خوزستان',
      en: 'Date Palm Foliar Chlorosis Khuzestan',
      ar: 'اصفرار سعف النخيل في خوزستان'
    },
    fa: {
      title: 'رفع زردی برگ نخل خرما در خوزستان: درمان کلروز، کمبود آهن و شوری با ردفول و فول شارژر',
      category: 'نخلستان و خرما',
      readTime: '۱۱ دقیقه',
      date: 'مهر ۱۴۰۴',
      lastModified: '2026-10-11',
      author: 'دپارتمان نخیلات و خاک‌های جنوب پیشگامان',
      targetKeyword: 'زردی برگ نخل خرما خوزستان',
      metaDescription: 'راهنمای درمان کلروز آهن و زردی سعف نخل خرما در شادگان، آبادان و دزفول با کود آهن کلاته ردفول و ترکیب ریزمغذی فول شارژر پیشگامان.',
      summary: 'تحلیل دلایل زردی برگچه‌های نخل خرما در خاک‌های قلیایی و شور خوزستان، جلوگیری از ریزش خلال و غوره و افزایش تناژ خرمای استعمران و برحی.',
      abstract: 'نخلستان‌های خوزستان با بیش از ۴۰ هزار هکتار سطح زیر کشت، با چالش گرمای بالای ۵۰ درجه، شوری آب رودخانه‌ها و تثبیت شدید آهن در pH بالای ۸.۳ مواجه هستند. زردی برگچه‌ها (Interveinal Chlorosis) باعث ضعف عمومی تاج نخل و ریزش محصول مرحله کیمری و خلال می‌گردد. این پژوهش اثر کلات آهن با ایزومر ارتو-ارتوی بالای ردفول را در پایداری رنگدانه‌های کلروفیل بررسی می‌کند.',
      contentSections: [
        {
          heading: 'علل اصلی زردی برگ نخل خرما در اقلیم خوزستان',
          text: '۱. قلیائیت شدید و حضور کربنات سدیم در خاک که آهن و منگنز را به فرم اکسیدهای نامحلول غیرقابل جذب درمی‌آورد.\n۲. شوری آب آبیاری و اثر بازدارندگی یون سدیم در انتقال شیره پرورده به قلب نخل.\n۳. کمبود شدید عنصر روی و بور که منجر به بدشکلی برگچه‌های جوان و لقاح ناقص خوشه‌ها (عارضه پاجوش‌ماندن دانه) می‌گردد.'
        },
        {
          heading: 'برنامه درمانی با ردفول و فول شارژر',
          text: '• مصرف ریشه‌ای کود آهن ردفول (Fe-EDDHA): مصرف ۱۰۰ تا ۱۵۰ گرم به ازای هر نخل بارده در جوی آب یا تشتک پای درخت، زردی برگچه‌ها را ظرف ۲ تا ۳ هفته به سبزی پررنگ تبدیل می‌کند.\n• محلول‌پاشی فول شارژر: در زمان گرده‌افشانی و تشکیل خوشه (اسفند و فروردین)، مصرف ۲ لیتر در ۱۰۰۰ لیتر آب از ریزش غوره جلوگیری کرده و اندازه حبه‌های خرما را یکنواخت می‌سازد.'
        }
      ],
      dosageTable: [
        {
          stage: 'شروع فصل رشد و گرده‌افشانی (اسفند)',
          crop: 'نخلستان‌های بارده شادگان و اهواز',
          rate: 'ردفول ۱۰۰ گرم برای هر نخل + فول شارژر ۲ لیتر در ۱۰۰۰',
          timing: 'مصرف خاکی آهن و محلول‌پاشی تاج'
        },
        {
          stage: 'مرحله حبابوک و خلال (اردیبهشت تا خرداد)',
          crop: 'نخل خرما',
          rate: 'سالت استاپ ۲۰ لیتر در هکتار (در نخلستان‌های شور)',
          timing: 'همراه با آب آبیاری'
        }
      ],
      faqs: [
        {
          question: 'چرا کودهای آهن معمولی (سولفات آهن یا Fe-EDTA) روی نخل خوزستان جواب نمی‌دهند؟',
          answer: 'در خاک‌های با pH بالای ۷.۵، آهن سولفات و EDTA بلافاصله رسوب کرده و هدر می‌روند؛ فقط کلات آهن Fe-EDDHA با درصد ارتو-ارتو بالا نظیر ردفول تا pH بالای ۹ پایدار می‌ماند.'
        },
        {
          question: 'چه زمانی برای مصرف کود آهن در نخل خرما مناسب‌تر است؟',
          answer: 'اوایل بهار با شروع گرم شدن هوا و استارت رشد رویشی برگچه‌های جدید، بهترین زمان جذب آهن در نخل است.'
        }
      ],
      references: [
        'Zaid, A., & de Wet, P. F. (2002). "Date Palm Cultivation". FAO Plant Production and Protection Paper 156, Rome.',
        'Al-Kharusi, L. M., et al. (2009). "Nutrient dynamics and iron deficiency in date palm groves".'
      ],
      relatedProducts: ['ردفول (Redful)', 'فول شارژر (Full Charger)', 'سالت استاپ (Salt Stop)'],
      relatedArticles: ['iron-eddha-chlorosis', 'soil-salinity-management', 'calcium-boron']
    },
    en: {
      title: 'Remediating Date Palm Foliar Chlorosis in Khuzestan with Redful & Full Charger',
      category: 'Date Palm Oases & Tropical Pomology',
      readTime: '11 min',
      date: 'October 2024',
      lastModified: '2026-10-11',
      author: 'Date Palm & Arid Soils Division, Pishgaman Paydar Falat Nik',
      targetKeyword: 'Date Palm Foliar Chlorosis Khuzestan',
      metaDescription: 'Eliminate iron chlorosis and frond yellowing in Khuzestan date palm groves using high ortho-ortho Redful Fe-EDDHA and Full Charger micronutrient booster.',
      summary: 'Treating canopy yellowing in Barhi and Sayer date palms caused by alkaline calcareous soils and salinity, preventing fruit drop in southwestern Iran.',
      abstract: 'Date palm groves across Shadegan and Ahvaz encounter soil pH above 8.3 and severe summer temperatures above 50°C. Standard iron fertilizers precipitate rapidly. Applying Redful high-purity ortho-ortho Fe-EDDHA restores photosynthetic leaf area and cluster retention.',
      contentSections: [
        {
          heading: 'Soil Alkalinity and Iron Locking in Khuzestan Alluvial Soils',
          text: 'Karun river basin sediments contain elevated calcium carbonate that locks native iron, prompting rapid interveinal chlorosis on young fronds.'
        }
      ],
      dosageTable: [
        {
          stage: 'Spring Pollination (March)',
          crop: 'Bearing Date Palms',
          rate: 'Redful 100-150 g/tree',
          timing: 'Basal basin soil drench'
        }
      ],
      faqs: [
        {
          question: 'Why does standard iron sulfate fail in Khuzestan?',
          answer: 'Iron sulfate precipitates instantly as insoluble ferric hydroxide in soils with pH above 7.5; only ortho-ortho Fe-EDDHA remains bioavailable.'
        }
      ],
      references: [
        'Zaid, A. (2002). "Date Palm Cultivation". FAO Paper 156.'
      ],
      relatedProducts: ['Redful', 'Full Charger', 'Salt Stop'],
      relatedArticles: ['iron-eddha-chlorosis', 'soil-salinity-management']
    },
    ar: {
      title: 'علاج اصفرار سعف النخيل في خوزستان: مكافحة نقص الحديد والملوحة',
      category: 'واحات النخيل والتمور',
      readTime: '١١ دقيقة',
      date: 'أكتوبر ٢٠٢٤',
      lastModified: '2026-10-11',
      author: 'قسم أبحاث النخيل - شركة بيشغامان',
      targetKeyword: 'اصفرار سعف النخيل في خوزستان',
      metaDescription: 'العلاج الشامل لاصفرار سعف النخيل في شادكان وأبادان عبر سماد شيلات الحديد ردفول وفول شارجر لزيادة محصول التمور.',
      summary: 'تحليل أسباب اصفرار النخيل في جنوب غرب إيران وطرق استعادة اللون الأخضر وزيادة حجم ثمار البرحي والاستعمران.',
      abstract: 'تعاني نخيل خوزستان من قلوية التربة وملوحة المياه مما يؤدي إلى تثبيت عنصر الحديد واصفرار السعف. يقدم هذا المقال حلاً عبر شيلات الحديد ردفول.',
      contentSections: [
        {
          heading: 'أسباب اصفرار سعف النخيل',
          text: 'تؤدي قلوية التربة المرتفعة إلى عدم امتصاص الحديد والزنك، مما يسبب ضعف القمة النامية وتساقط الثمار الصغيرة.'
        }
      ],
      dosageTable: [
        {
          stage: 'بداية التلقيح والنمو في الربيع',
          crop: 'أشجار النخيل المثمرة',
          rate: 'ردفول ١٠٠-١٥٠ غرام لكل نخلة',
          timing: 'تسميد أرضي في حوض الشجرة'
        }
      ],
      faqs: [
        {
          question: 'لماذا يفشل سلفات الحديد في أراضي النخيل؟',
          answer: 'لأن سلفات الحديد يترسب فوراً في الأراضي القلوية، بينما يبقى ردفول Fe-EDDHA ذائباً وممتصاً حتى درجات قلوية تفوق ٩.'
        }
      ],
      references: [
        'FAO (2002). "Date Palm Cultivation". Rome.'
      ],
      relatedProducts: ['ردفول (Redful)', 'فول شارژر (Full Charger)'],
      relatedArticles: ['iron-eddha-chlorosis', 'soil-salinity-management']
    }
  },

  // 8. Sugar Beet Khorasan Nutrition
  {
    id: 'reg-sugar-beet-nutrition-khorasan',
    slug: 'sugar-beet-nutrition-khorasan',
    aliases: ['kood-choghondar-khorasan', 'ayar-ghand-choghondar'],
    imageUrl: imgSugarBeet,
    region: {
      provinceFa: 'استان خراسان (مشهد، چناران، نیشابور، جوین)',
      cropFa: 'چغندر قند بهاره و پاییزه',
      provinceEn: 'Khorasan Province',
      cropEn: 'Sugar Beet Fields (Spring & Autumn)',
      provinceAr: 'محافظة خراسان',
      cropAr: 'حقول بنجر السكر'
    },
    googleTrendKeyword: {
      fa: 'کود چغندر قند خراسان',
      en: 'Sugar Beet Nutrition & Sucrose Brix Khorasan',
      ar: 'تسميد بنجر السكر وزيادة نسبة السكر'
    },
    fa: {
      title: 'تغذیه چغندر قند در خراسان: افزایش عیار قند و تناژ غده با تایگر K High، هیومی فارم و تاپ استار',
      category: 'گیاهان صنعتی و چغندر قند',
      readTime: '۱۰ دقیقه',
      date: 'مهر ۱۴۰۴',
      lastModified: '2026-10-11',
      author: 'دپارتمان تحقیقات گیاهان صنعتی و زراعت پیشگامان',
      targetKeyword: 'کود چغندر قند خراسان',
      metaDescription: 'برنامه کودی افزایش عیار قند چغندر به بالای ۱۸٪ و تناژ به بالای ۸۰ تن در نیشابور، چناران و جوین با ژل پتاس تایگر، هیومی فارم و تاپ استار.',
      summary: 'مدیریت انتقال کربوهیدرات از پهنک برگ به غده زیرزمینی، کاهش نیتروژن مضره و پالایش عیار ساکارز کارخانه‌ای با کودهای استاندارد پیشگامان.',
      abstract: 'کشت چغندر قند در خراسان بر اساس شاخص عیار قند (Sugar Content) و وزن ناخالص قیمت‌گذاری می‌شود. مصرف دیرهنگام نیتروژن در ماه‌های پایانی رشد باعث رشد بی‌رویه برگ‌ها، کاهش عیار قند و افزایش ناخالصی‌های سدیم و اسید آمینه مضره می‌گردد. این پژوهش مکانیزم انتقال آوندی قند با ژل تایگر K High و نقش هیومی فارم در توسعه مخزن غده را بررسی می‌کند.',
      contentSections: [
        {
          heading: 'مراحل فیزیولوژیک رشد چغندر قند در خراسان',
          text: '۱. فاز استقرار و پوشش برگی (اردیبهشت تا خرداد): نیاز به فسفر و ازت متعادل و هیومیک اسید هیومی فارم جهت غلبه بر سختی خاک.\n۲. فاز غده‌بندی و رشد قطری (تیر و مرداد): نیاز به ریزمغذی‌های روی و بور (تاپ استار) جهت پیشگیری از پوسیدگی مغز چغندر.\n۳. فاز تجمع قند و رسیدگی (شهریور تا مهر): قطع نیتروژن و مصرف سنگین پتاسیم خالص بدون کلر با ژل تایگر K High برای پمپاژ ساکارز به غده.'
        }
      ],
      dosageTable: [
        {
          stage: '۸ تا ۱۰ برگی (اوایل خرداد)',
          crop: 'چغندر قند',
          rate: 'هیومی فارم ۵ تا ۷ لیتر در هکتار',
          timing: 'همراه با آب آبیاری'
        },
        {
          stage: 'بسته شدن خطوط کشت (تیرماه)',
          crop: 'چغندر قند',
          rate: 'تاپ استار ۲.۵ لیتر در هکتار',
          timing: 'محلول‌پاشی برگی'
        },
        {
          stage: '۴۵ و ۳۰ روز قبل از برداشت (شهریور)',
          crop: 'چغندر قند',
          rate: 'تایگر K High ۴ کیلوگرم در هکتار در هر نوبت',
          timing: 'محلول‌پاشی برگی'
        }
      ],
      faqs: [
        {
          question: 'چگونه از کاهش عیار قند چغندر در ماه‌های پایانی جلوگیری کنیم؟',
          answer: 'قطع کامل کود اوره حداقل ۶ هفته قبل از برداشت و محلول‌پاشی ژل پتاسیم بالای تایگر K High عیار قند را تا ۳ واحد ارتقا می‌دهد.'
        },
        {
          question: 'نقش عنصر بور در چغندر قند چیست؟',
          answer: 'بور موجود در تاپ استار از عارضه سیاه شدن و پوسیدگی قلب چغندر (Heart Rot) جلوگیری کرده و کانال‌های انتقال قند را فعال نگه می‌دارد.'
        }
      ],
      references: [
        'Draycott, A. P. (2006). "Sugar Beet". Blackwell Publishing.',
        'Milford, G. F., et al. (2000). "Nitrogen and potassium interactions in sugar beet yield and quality".'
      ],
      relatedProducts: ['تایگر K High (کود ژل پتاس)', 'هیومی فارم (Humifarm)', 'تاپ استار (Top Star)'],
      relatedArticles: ['potassium-fertigation', 'humic-fulvic-root-development']
    },
    en: {
      title: 'Sugar Beet Nutrition in Khorasan: Elevating Sugar Brix & Root Tonnage',
      category: 'Industrial Crops & Sugar Beet',
      readTime: '10 min',
      date: 'October 2024',
      lastModified: '2026-10-11',
      author: 'Industrial Crops Agronomy Division, Pishgaman Paydar Falat Nik',
      targetKeyword: 'Sugar Beet Nutrition & Sucrose Brix Khorasan',
      metaDescription: 'Agronomic guide to exceed 18% sucrose content and 80 tons/ha yield in Khorasan sugar beet fields using Tiger K High and Humifarm.',
      summary: 'Regulating phloem sucrose loading into storage taproots while suppressing noxious alpha-amino nitrogen impurities through late-season potassium protocols.',
      abstract: 'Payment metrics for commercial sugar beet in Khorasan depend on pure sucrose percentage and minimal molasses-forming impurities. Late nitrogen additions depress sucrose. Applying Tiger K High potassium gel 45 days prior to harvest enhances phloem sucrose mass transfer.',
      contentSections: [
        {
          heading: 'Phloem Loading and Sucrose Partitioning Kinetics',
          text: 'Potassium drives osmotic gradient pumping from source leaves into sink taproots, converting raw photosynthates into dense crystallized sucrose.'
        }
      ],
      dosageTable: [
        {
          stage: '45 Days Pre-Harvest',
          crop: 'Sugar Beet',
          rate: 'Tiger K High 4 kg/ha',
          timing: 'Foliar application'
        }
      ],
      faqs: [
        {
          question: 'How to suppress molasses-forming impurities in sugar beet?',
          answer: 'Terminate nitrogen fertigation early and supply high-purity chloride-free potassium via Tiger K High.'
        }
      ],
      references: [
        'Draycott, A. P. (2006). "Sugar Beet". Blackwell Publishing.'
      ],
      relatedProducts: ['Tiger K High', 'Humifarm', 'Top Star'],
      relatedArticles: ['potassium-fertigation', 'humic-fulvic-root-development']
    },
    ar: {
      title: 'تسميد بنجر السكر في خراسان: زيادة نسبة السكر (العيار) ووزن الدرنات',
      category: 'المحاصيل الصناعية وبنجر السكر',
      readTime: '١٠ دقائق',
      date: 'أكتوبر ٢٠٢٤',
      lastModified: '2026-10-11',
      author: 'قسم المحاصيل السكرية - شركة بيشغامان',
      targetKeyword: 'تسميد بنجر السكر وزيادة نسبة السكر',
      metaDescription: 'طريقة رفع نسبة السكر في بنجر السكر إلى أكثر من ١٨٪ وزيادة الوزن في مزارع نيسابور وخراسان عبر تايكر جل كيه هاي وهيومي فارم.',
      summary: 'تحفيز نقل السكريات من الأوراق إلى الجذور الدرنية وتقليل الشوائب غير المرغوبة.',
      abstract: 'يتوقف العائد الاقتصادي لبنجر السكر على نسبة السكروز النقية. يوضح هذا المقال برنامج التسميد المتخصص بالبوتاسيوم في المراحل الأخيرة قبل الحصاد.',
      contentSections: [
        {
          heading: 'دور البوتاسيوم في زيادة حلاوة بنجر السكر',
          text: 'يعمل البوتاسيوم كمضخة أسموزية تنقل السكريات المصنعة في الأوراق إلى درنات البنجر، مما يرفع العيار السكري للمحصول.'
        }
      ],
      dosageTable: [
        {
          stage: 'قبل الحصاد بشهر إلى ٤٥ يوماً',
          crop: 'بنجر السكر',
          rate: 'تايكر جل كيه هاي ٤ كغ للهكتار',
          timing: 'رش ورقي'
        }
      ],
      faqs: [
        {
          question: 'متى يجب إيقاف التسميد النيتروجيني في البنجر؟',
          answer: 'يجب إيقاف اليوريا قبل ٦ أسابيع على الأقل من الحصاد حتى لا يستهلك النبات السكر في تكوين أوراق جديدة.'
        }
      ],
      references: [
        'Draycott, A. P. (2006). "Sugar Beet".'
      ],
      relatedProducts: ['تایگر K High (کود ژل پتاس)', 'هیومی فارم (Humifarm)'],
      relatedArticles: ['potassium-fertigation']
    }
  },

  // 9. Cotton Golestan Boll Retention
  {
    id: 'reg-cotton-boll-retention-golestan',
    slug: 'cotton-boll-retention-golestan',
    aliases: ['kood-panbeh-golestan', 'rizeh-ghoozeh-panbeh'],
    imageUrl: imgCotton,
    region: {
      provinceFa: 'استان گلستان (گرگان، گنبد کاووس، علی‌آباد)',
      cropFa: 'پنبه (ارقام لطیف، ساحل، گلستان)',
      provinceEn: 'Golestan Province',
      cropEn: 'Cotton Plantations',
      provinceAr: 'محافظة غلستان',
      cropAr: 'مزارع القطن'
    },
    googleTrendKeyword: {
      fa: 'کود پنبه گلستان',
      en: 'Golestan Cotton Boll Retention & Yield Nutrition',
      ar: 'تسميد القطن وتثبيت اللوز في غلستان'
    },
    fa: {
      title: 'تقویت پنبه در گلستان: مدیریت ریزش غوزه، باز شدن یکنواخت و افزایش عملکرد با تاپ استار، فول شارژر و دوپینگ',
      category: 'پنبه و الیاف گیاهی',
      readTime: '۱۰ دقیقه',
      date: 'مهر ۱۴۰۴',
      lastModified: '2026-10-11',
      author: 'دپارتمان تحقیقات پنبه و گیاهان لیفی پیشگامان',
      targetKeyword: 'کود پنبه گلستان',
      metaDescription: 'کنترل ریزش غوزه و گل پنبه در دشت گرگان و گنبد کاووس ناشی از تنش گرما و عدم تعادل هورمونی با فول شارژر، تاپ استار و دوپینگ پیشگامان.',
      summary: 'تحلیل دلایل سقط گل و غوزه‌های جوان پنبه در گرمای شرجی تابستان گلستان، افزایش طول الیاف و باز شدن یکدست وش پنبه.',
      abstract: 'دشت‌های گرگان و گنبد کاووس پایتخت پنبه ایران محسوب می‌شوند اما ریزش طبیعی و فیزیولوژیک غوزه‌ها (Boll Shedding) تا ۵۰٪ پتانسیل عملکرد را هدر می‌دهد. تنش‌های دمایی بالای ۳۸ درجه هم‌زمان با گلدهی، لوله گرده را عقیم کرده و عدم تعادل نسبت کربوهیدرات به نیتروژن ریزش را تشدید می‌کند. این پژوهش اثر هم‌افزای فول شارژر (بور و روی) و اسیدهای آمینه دوپینگ را در مهار سقط غوزه‌ها نشان می‌دهد.',
      contentSections: [
        {
          heading: 'چرا غوزه‌های پنبه در گلستان دچار ریزش می‌شوند؟',
          text: '۱. تنش حرارتی و شرجی هوا که تنفس تاریک بوته را بالا برده و کربوهیدرات لازم برای تغذیه غوزه‌های کوچک را می‌سوزاند.\n۲. کمبود حاد عنصر بور (B) که باعث سقط دانه گرده و عدم لقاح تخمدان گل پنبه می‌شود.\n۳. رشد رویشی بی‌رویه (رشد طولی شاخه‌های نارس) ناشی از مصرف زیاد اوره در زمان نامناسب.'
        },
        {
          heading: 'برنامه محلول‌پاشی تخصصی پیشگامان در مزارع پنبه',
          text: '• قبل از شروع گلدهی (مرحله غنچه‌دهی/اسکوئر): محلول‌پاشی فول شارژر با دوز ۲ در هزار جهت تضمین تلقیح کامل گل‌ها.\n• اوج گلدهی و تشکیل غوزه (مرداد ماه): محلول‌پاشی تلفیقی تاپ استار و آمینواسید دوپینگ جهت ایجاد مقاومت ضدتنش و مهار ریزش غوزه‌های فندقی.\n• پر شدن غوزه و رسیدگی وش (شهریور): مصرف پتاسیم تایگر K High جهت پر شدن سریع الیاف و افزایش وزن غوزه.'
        }
      ],
      dosageTable: [
        {
          stage: 'شروع غنچه‌دهی (تیرماه)',
          crop: 'مزارع پنبه گنبد و گرگان',
          rate: 'فول شارژر ۲ لیتر در هکتار',
          timing: 'محلول‌پاشی برگی'
        },
        {
          stage: 'اوج گلدهی و تشکیل غوزه (مرداد)',
          crop: 'پنبه',
          rate: 'تاپ استار ۲ لیتر + دوپینگ ۱.۵ لیتر در هکتار',
          timing: 'محلول‌پاشی در ساعات خنک صبح یا عصر'
        },
        {
          stage: 'تکمیل غوزه‌ها (شهریور)',
          crop: 'پنبه',
          rate: 'تایگر K High ۳ کیلوگرم در هکتار',
          timing: 'محلول‌پاشی برگی'
        }
      ],
      faqs: [
        {
          question: 'چگونه می‌توان ریزش غوزه‌های ریز پنبه را به سرعت متوقف کرد؟',
          answer: 'محلول‌پاشی ترکیب فول شارژر (بور و روی) همراه با دوپینگ ظرف ۴۸ ساعت مانع از تشکیل لایه جداکننده (Abscission Zone) در دمگل غوزه می‌شود.'
        },
        {
          question: 'کود پتاسیم چه تاثیری روی کیفیت الیاف پنبه دارد؟',
          answer: 'پتاسیم فشار تورژسانس سلول‌های تار پنبه را بالا برده و طول و استحکام الیاف را ارتقا می‌دهد.'
        }
      ],
      references: [
        'Oosterhuis, D. M. (2001). "Physiology of the cotton plant". University of Arkansas Press.',
        'Stewart, J. M., et al. (2010). "Physiology of Cotton". Springer.'
      ],
      relatedProducts: ['تاپ استار (Top Star)', 'فول شارژر (Full Charger)', 'دوپینگ (Doping)', 'تایگر K High (کود ژل پتاس)'],
      relatedArticles: ['calcium-boron', 'heat-drought-stress', 'potassium-fertigation']
    },
    en: {
      title: 'Cotton Boll Retention & Yield Nutrition in Golestan with Top Star & Full Charger',
      category: 'Fiber Agronomy & Cotton',
      readTime: '10 min',
      date: 'October 2024',
      lastModified: '2026-10-11',
      author: 'Cotton Agronomy & Plant Physiology Group, Pishgaman Paydar Falat Nik',
      targetKeyword: 'Golestan Cotton Boll Retention & Yield Nutrition',
      metaDescription: 'Eliminate square and boll shedding in Gorgan and Gonbad cotton fields caused by summer heat stress through Full Charger, Top Star and Doping biostimulant.',
      summary: 'Preventing abscission layer formation in young cotton bolls, optimizing boron pollination, and increasing lint micronaire values in northern Iran.',
      abstract: 'Summer temperatures exceeding 38°C in Golestan cotton belts induce massive boll shedding due to pollen tube failure and carbon starvation. This paper presents a targeted foliar mitigation program using Full Charger (Boron & Zinc) coupled with free L-amino acids (Doping).',
      contentSections: [
        {
          heading: 'Hormonal and Environmental Triggers of Cotton Boll Abscission',
          text: 'Ethylene and ABA accumulation at the pedicel junction prompts premature boll drop under acute daytime heat.'
        }
      ],
      dosageTable: [
        {
          stage: 'Pinhead Square Stage (July)',
          crop: 'Cotton Crops',
          rate: 'Full Charger 2 L/ha',
          timing: 'Foliar application'
        }
      ],
      faqs: [
        {
          question: 'How does boron nutrition protect cotton bolls?',
          answer: 'Boron stabilizes pollen tube elongation, ensuring complete ovule fertilization and reducing hormonal drop.'
        }
      ],
      references: [
        'Stewart, J. M., et al. (2010). "Physiology of Cotton". Springer.'
      ],
      relatedProducts: ['Top Star', 'Full Charger', 'Doping', 'Tiger K High'],
      relatedArticles: ['calcium-boron', 'heat-drought-stress']
    },
    ar: {
      title: 'تثبيت لوز القطن وزيادة المحصول في غلستان: مكافحة التساقط بالزنك والبورون',
      category: 'المحاصيل الحقلية والقطن',
      readTime: '١٠ دقائق',
      date: 'أكتوبر ٢٠٢٤',
      lastModified: '2026-10-11',
      author: 'قسم محاصيل الألياف والقطن - شركة بيشغامان',
      targetKeyword: 'تسميد القطن وتثبيت اللوز في غلستان',
      metaDescription: 'منع تساقط أزهار ولوز القطن في مزارع غلستان الإيرانية ورفع جودة التيلة عبر فول شارجر وتاپ استار ودوبينغ.',
      summary: 'حل مشكلة تساقط الجوز الصغير في مزارع القطن الناتجة عن حرارة الصيف ونقص عنصر البورون.',
      abstract: 'يسبب الإجهاد الحراري ونقص البورون تساقطاً كبيراً في لوز القطن. يقدم هذا البحث برنامجاً للتسميد الورقي يثبت اللوز ويزيد من طول ألياف القطن.',
      contentSections: [
        {
          heading: 'أسباب تساقط لوز القطن',
          text: 'تؤدي درجات الحرارة المرتفعة ونقص التلقيح إلى تكوين طبقة انفصال في عنق اللوزة وتساقطها.'
        }
      ],
      dosageTable: [
        {
          stage: 'مرحلة تكوين البراعم الزهرية',
          crop: 'نبات القطن',
          rate: 'فول شارجر ٢ لتر للهكتار',
          timing: 'رش ورقي'
        }
      ],
      faqs: [
        {
          question: 'كيف يمنع البورون تساقط لوز القطن؟',
          answer: 'يساعد البورون في اكتمال التلقيح الإخصابي ويدعم جدران الخلايا في عنق الزهرة.'
        }
      ],
      references: [
        'Stewart, J. M. (2010). "Physiology of Cotton".'
      ],
      relatedProducts: ['فول شارژر (Full Charger)', 'دوپینگ (Doping)'],
      relatedArticles: ['calcium-boron', 'heat-drought-stress']
    }
  },

  // 10. Vegetable Isfahan Salinity Stress
  {
    id: 'reg-vegetable-salinity-isfahan',
    slug: 'vegetable-salinity-stress-isfahan',
    aliases: ['kood-seifi-isfahan', 'shoori-khak-esfahan'],
    imageUrl: imgVegetable,
    region: {
      provinceFa: 'استان اصفهان (فلاورجان، نجف‌آباد، مبارکه، برخوار)',
      cropFa: 'صیفی‌جات گلخانه‌ای و فضای باز (خیار، گوجه‌فرنگی، فلفل دلمه‌ای، خربزه)',
      provinceEn: 'Isfahan Province',
      cropEn: 'Greenhouse & Open-Field Vegetables (Tomato, Cucumber, Bell Pepper)',
      provinceAr: 'محافظة أصفهان',
      cropAr: 'البيوت المحمية ومحاصيل الخضار'
    },
    googleTrendKeyword: {
      fa: 'شوری خاک صیفی جات اصفهان',
      en: 'Isfahan Vegetable Greenhouse Soil Salinity Management',
      ar: 'ملوحة تربة الخضروات في أصفهان'
    },
    fa: {
      title: 'مدیریت تنش شوری در صیفی‌جات اصفهان: کنترل EC، پیشگیری از پوسیدگی گلگاه با سالت استاپ، سول مکس و چلنجر',
      category: 'صیفی‌جات و کشت‌های گلخانه‌ای',
      readTime: '۱۱ دقیقه',
      date: 'مهر ۱۴۰۴',
      lastModified: '2026-10-11',
      author: 'دپارتمان باغبانی و صیفی‌جات گلخانه‌ای پیشگامان',
      targetKeyword: 'شوری خاک صیفی جات اصفهان',
      metaDescription: 'راهنمای غلبه بر شوری آب چاه و خاک در مزارع گوجه‌فرنگی، خیار و فلفل فلاورجان و اصفهان با سالت استاپ، گوگرد مایع سول مکس و چلنجر پیشگامان.',
      summary: 'پیشگیری از سوختگی حاشیه برگ خیار، درمان پوسیدگی گلگاه گوجه‌فرنگی ناشی از بلوکه شدن کلسیم توسط سدیم و بازسازی جذب ریشه در خاک‌های شور اصفهان.',
      abstract: 'کشاورزان صیفی‌کار حاشیه زاینده‌رود و دشت‌های اصفهان به دلیل خشکسالی و افت سفره‌های زیرزمینی با آب‌های چاه با EC بالای ۵,۰۰۰ تا ۸,۰۰۰ میکروموس مواجه هستند. تجمع نمک در بستر ریشه موجب پژمردگی فیزیولوژیک (Physiological Drought)، عارضه پوسیدگی گلگاه (Blossom-End Rot) در گوجه‌فرنگی و افت باردهی بوته‌ها می‌گردد. این پژوهش روش آبشویی یون سدیم با سالت استاپ و اسیدی‌سازی موضعی ریزوسفر با سول مکس را بررسی می‌کند.',
      contentSections: [
        {
          heading: 'چالش شوری آب و خاک در اقلیم کشاورزی اصفهان',
          text: 'در خاک‌های آهکی و رسی اصفهان، یون‌های سدیم و کلر آب چاه به سرعت جایگزین کلسیم و پتاسیم در غشای ریشه بوته‌های خیار و گوجه‌فرنگی می‌شوند. سدیم مانع از جذب کلسیم توسط آوندهای چوبی شده و باعث قهوه‌ای شدن ته میوه گوجه و فلفل می‌گردد.'
        },
        {
          heading: 'برنامه احیای بستر صیفی‌جات با محصولات پیشگامان',
          text: '• مصرف منظم سالت استاپ (Salt Stop): مصرف ۱۵ تا ۲۰ لیتر در هکتار هر ۲۰ تا ۳۰ روز یکبار در آبیاری، سدیم چسبیده به ذرات خاک را کلات کرده و با ایجاد کلسیم قابل جذب، عارضه گلگاه را مهار می‌سازد.\n• گوگرد مایع سول مکس (Sulmax): تزریق ۵ تا ۱۰ لیتر در هکتار در طول دوره رشد، pH قلیایی خاک را شکسته و فسفر و آهن بلوکه‌شده را آزاد می‌نماید.\n• هیومیک اسید پودری چلنجر (Challenger): مصرف ۱ تا ۲ کیلوگرم در هکتار تنش اسمزی ریشه را به حداقل رسانده و جذب آب را ممکن می‌سازد.'
        }
      ],
      dosageTable: [
        {
          stage: 'استقرار نشاء (هفته دوم پس از انتقال)',
          crop: 'گوجه‌فرنگی و خیار',
          rate: 'چلنجر ۲ کیلوگرم در هکتار',
          timing: 'همراه با آبیاری قطره‌ای'
        },
        {
          stage: 'شروع باردهی و گلدهی',
          crop: 'صیفی‌جات',
          rate: 'سالت استاپ ۱۵ لیتر + سول مکس ۵ لیتر در هکتار',
          timing: 'تزریق در سیستم آبیاری نوار تیپ'
        },
        {
          stage: 'اوج باردهی و گرمای تابستان',
          crop: 'صیفی‌جات',
          rate: 'سالت استاپ ۱۰ تا ۱۵ لیتر در هکتار',
          timing: 'هر ۲۰ روز یکبار تکرار'
        }
      ],
      faqs: [
        {
          question: 'چگونه شوری آب باعث پوسیدگی گلگاه گوجه‌فرنگی می‌شود؟',
          answer: 'غلظت بالای سدیم مانع از جذب یون‌های کلسیم در ریشه می‌شود؛ سلول‌های انتهای میوه دچار فروپاشی دیواره شده و لکه سیاه پوسیدگی گلگاه شکل می‌گیرد. سالت استاپ با حذف سدیم و تامین کلسیم فعال این مشکل را ریشه‌کن می‌کند.'
        },
        {
          question: 'آیا سول مکس به سیستم آبیاری قطره‌ای صیفی‌جات آسیب می‌زند؟',
          answer: 'خیر، سول مکس گوگرد کاملاً مایع و زلال بدون رسوب است که حتی مانع از گرفتگی قطره‌چکان‌ها توسط کربنات کلسیم آب‌های شور می‌شود.'
        }
      ],
      references: [
        'Adams, P. (2002). "Nutritional control in hydroponics and saline soils". Hydroponic Production of Vegetables.',
        'Shannon, M. C., & Grieve, C. M. (1998). "Tolerance of vegetable crops to salinity". Scientia Horticulturae, 78(1-4), 5-38.'
      ],
      relatedProducts: ['سالت استاپ (Salt Stop)', 'سول مکس (Sulmax)', 'چلنجر (Challenger)'],
      relatedArticles: ['soil-salinity-management', 'calcium-boron', 'liquid-sulfur']
    },
    en: {
      title: 'Managing Vegetable Salinity Stress in Isfahan: EC Remediation & Blossom-End Rot Control',
      category: 'Greenhouse Vegetables & Saline Soils',
      readTime: '11 min',
      date: 'October 2024',
      lastModified: '2026-10-11',
      author: 'Protected Cultivation & Horticultural Sciences Group, Pishgaman Paydar Falat Nik',
      targetKeyword: 'Isfahan Vegetable Greenhouse Soil Salinity Management',
      metaDescription: 'Field and greenhouse strategy to conquer high well water EC and blossom-end rot in Isfahan tomato and cucumber crops using Salt Stop, Sulmax and Challenger.',
      summary: 'Preventing foliar edge burn, restoring xylem calcium delivery under intense sodium competition, and preserving yield in central Iran saline alluvial soils.',
      abstract: 'Vegetable growers across Isfahan face groundwater conductivities exceeding 5,000 µS/cm. Sodium competes directly with root calcium uptake, causing rampant blossom-end rot. Salt Stop provides active calcium displacement of adsorbed sodium while Sulmax remediates rhizosphere alkalinity.',
      contentSections: [
        {
          heading: 'Osmotic and Toxic Salinity Stress in Solanaceous and Cucurbit Crops',
          text: 'Excess sodium disrupts cellular potassium-to-sodium balances, reducing fruit flesh firming and inducing physiological wilt.'
        }
      ],
      dosageTable: [
        {
          stage: 'Flowering & Early Fruit Set',
          crop: 'Tomato, Cucumber, Pepper',
          rate: 'Salt Stop 15 L/ha + Sulmax 5 L/ha',
          timing: 'Drip line fertigation'
        }
      ],
      faqs: [
        {
          question: 'How does high salinity cause blossom-end rot?',
          answer: 'Sodium competitively inhibits calcium uptake; calcium deficiency in rapidly expanding distal fruit cells causes cellular collapse and black rot.'
        }
      ],
      references: [
        'Shannon, M. C. (1998). "Tolerance of vegetable crops to salinity". Scientia Horticulturae.'
      ],
      relatedProducts: ['Salt Stop', 'Sulmax', 'Challenger'],
      relatedArticles: ['soil-salinity-management', 'calcium-boron', 'liquid-sulfur']
    },
    ar: {
      title: 'إدارة ملوحة التربة في محاصيل الخضار بأصفهان: علاج عفن الطرف الزهري',
      category: 'الخضروات المحمية والأراضي المالحة',
      readTime: '١١ دقيقة',
      date: 'أكتوبر ٢٠٢٤',
      lastModified: '2026-10-11',
      author: 'قسم الخضروات والزراعة المحمية - شركة بيشغامان',
      targetKeyword: 'ملوحة تربة الخضروات في أصفهان',
      metaDescription: 'دليل علاج ملوحة مياه الآبار ومنع احتراق أوراق الخيار وعفن قاع الطماطم في مزارع أصفهان عبر سالت ستوب وسول ماكس چلنجر.',
      summary: 'معالجة مشكلة الملوحة في زراعة الطماطم والخيار والبيوت المحمية بأصفهان.',
      abstract: 'تسبب ملوحة مياه الري في أصفهان تنافساً بين الصوديوم والكالسيوم مما يؤدي لعفن الطرف الزهري في الطماطم. يحل سالت ستوب هذه المشكلة بإزاحة الصوديوم وتوفير الكالسيوم النشط.',
      contentSections: [
        {
          heading: 'آلية تأثير الملوحة على الخضروات',
          text: 'يمنع الصوديوم المرتفع وصول الكالسيوم إلى أطراف الثمار، مما يؤدي إلى اسوداد قاع الثمرة واحتراق حواف الأوراق.'
        }
      ],
      dosageTable: [
        {
          stage: 'مرحلة التزهير والعقد',
          crop: 'الطماطم والخيار',
          rate: 'سالت ستوب ١٥ لتر + سول ماكس ٥ لتر للهكتار',
          timing: 'مع الري بالتنقيط'
        }
      ],
      faqs: [
        {
          question: 'كيف يمنع سالت ستوب عفن الطرف الزهري في الطماطم؟',
          answer: 'يقوم سالت ستوب بطرد الصوديوم الضار ويزود النبات بالكالسيوم الميسر لبناء جدران الخلايا في الثمار.'
        }
      ],
      references: [
        'Shannon, M. C. (1998). "Tolerance of vegetable crops to salinity".'
      ],
      relatedProducts: ['سالت استاپ (Salt Stop)', 'سول مکس (Sulmax)'],
      relatedArticles: ['soil-salinity-management', 'calcium-boron']
    }
  }
];
