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

import imgWalnut from '../assets/images/tuyserkan_walnut_orchard_1792856334190.jpg';
import imgPomegranate from '../assets/images/saveh_pomegranate_orchard_1792856345758.jpg';
import imgTea from '../assets/images/guilan_tea_gardens_1792856357649.jpg';
import imgPotato from '../assets/images/ardabil_potato_field_1792856368980.jpg';
import imgKiwi from '../assets/images/caspian_kiwi_orchard_1792856380944.jpg';

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
  },

  // 11. Tuyserkan & Hamedan Walnut Orchards
  {
    id: 'reg-walnut-nutrition-tuyserkan',
    slug: 'walnut-nutrition-tuyserkan-hamadan',
    aliases: ['kood-gerdoo-tuyserkan', 'gerdoo-hamadan'],
    imageUrl: imgWalnut,
    region: {
      provinceFa: 'همدان (تویسرکان، ملایر، نهاوند)',
      cropFa: 'گردو (پوست کاغذی، چندلر، جمال، گردوی بومی تویسرکان)',
      provinceEn: 'Hamedan Province (Tuyserkan & Malayer)',
      cropEn: 'Walnut Orchards',
      provinceAr: 'محافظة همدان (تويسركان)',
      cropAr: 'بساتين الجوز'
    },
    googleTrendKeyword: {
      fa: 'کود گردو تویسرکان همدان',
      en: 'Tuyserkan Walnut Nutrition Hamedan',
      ar: 'تسميد بساتين الجوز في تويسركان',
      ur: 'گردو کی دیکھ بھال اور نمو'
    },
    fa: {
      title: 'مدیریت تغذیه باغات گردوی تویسرکان و همدان: پیشگیری از سرمازدگی بهاره، پر مغز شدن و مهار بلایت با کلسیم بور و پوتاسیوم',
      category: 'باغداری گردو و مغزها',
      readTime: '۱۱ دقیقه',
      date: 'مهر ۱۴۰۴',
      lastModified: '2026-10-24',
      author: 'دپارتمان باغبانی و مغزهای پیشگامان فلات نیک',
      targetKeyword: 'کود گردو تویسرکان همدان',
      metaDescription: 'برنامه جامع تغذیه و کوددهی باغات گردوی تویسرکان و همدان: جلوگیری از سیاه شدن مغز گردو، افزایش درصد مغزداری و پایداری در برابر سرمای بهاره با کلسیم بور و ژل پتاس.',
      summary: 'تحلیل دلایل پوکی و سیاه شدن مغز گردوی تویسرکان، راهکارهای افزایش چربی و سفیدی مغز گردو و برنامه فروت‌ست بهاره جهت مهار سرمازدگی دامنه‌های الوند.',
      abstract: 'شهرستان تویسرکان به عنوان پایتخت گردوی ایران با بیش از ۵ هزار هکتار باغات گردو، با چالش‌های سرمازدگی دیررس بهاره، سقط مغز، درصد بالای پوکی و بیماری بلایت باکتریایی گردو روبروست. این مقاله علمی نقش کاربرد فروت‌ست بهاره با کلسیم-بور و کوددهی پتاسیمی ژل تایگر را در استحکام پوست چوبی و افزایش درصد چربی مغز بررسی می‌نماید.',
      contentSections: [
        {
          heading: 'اقلیم و خاک باغات گردوی تویسرکان و دامنه‌های الوند',
          text: 'در ارتفاعات تویسرکان و ملایر با زمستان‌های سخت و بهارهای متغیر، درختان گردو در زمان باز شدن شاتون‌های نر و گل‌های ماده بسیار آسیب‌پذیر هستند. خاک‌های آهکی با pH بالای ۷.۹ جذب عناصر روی، بور و پتاسیم را محدود کرده و موجب سیاه شدن چوب و مغز میوه می‌شود.'
        },
        {
          heading: 'دلایل اصلی سیاه شدن و پوکی مغز گردو در همدان',
          text: '۱. تنش گرمایی تیر و مرداد ماه هم‌زمان با فاز مغزبندی که آب مغز گردو را تبخیر کرده و آنزیم‌های اکسیدکننده را فعال می‌سازد.\n۲. کمبود عنصر بور و کلسیم در زمان تشکیل جدار سخت چوبی که باعث نفوذ قارچ‌های عامل بلایت و سیاه شدن بافت می‌شود.\n۳. عدم تامین پتاسیم در فاز پر شدن مغز که منجر به پوکی و چروکیدگی پوسته مغز می‌گردد.'
        },
        {
          heading: 'برنامه کوددهی تخصصی گردو با محصولات پیشگامان',
          text: '• مرحله تورم جوانه‌ها (اردیبهشت): محلول‌پاشی فول شارژر با دوز ۲ در هزار جهت تقویت گرده‌افشانی شاتون‌ها و مهار سرمای دیررس بهاره.\n• گردویی شدن میوه (خرداد و تیر): مصرف کلسیم بور مایع به همراه اسید آمینه دوپینگ جهت استحکام دیواره چوبی و پیشگیری از عارضه آبکیدگی.\n• مغزبندی (مرداد): مصرف ژل پتاسیم تایگر K High با دوز ۳ تا ۴ کیلوگرم در هکتار جهت پر شدن کامل، سفیدی و افزایش درصد چربی مغز گردو.'
        }
      ],
      dosageTable: [
        {
          stage: 'تورم جوانه تا ظهور شاتون‌ها (اردیبهشت)',
          crop: 'باغات گردوی تویسرکان',
          rate: 'فول شارژر ۲ لیتر در ۱۰۰۰ لیتر آب',
          timing: 'محلول‌پاشی تاج درخت'
        },
        {
          stage: 'تشکیل میوه تا گردویی شدن (خرداد)',
          crop: 'گردو',
          rate: 'کلسیم بور ۲ لیتر + دوپینگ ۱.۵ لیتر در ۱۰۰۰ لیتر آب',
          timing: 'محلول‌پاشی برگی'
        },
        {
          stage: 'پر شدن مغز (مرداد)',
          crop: 'گردو',
          rate: 'تایگر K High ۳ کیلوگرم در ۱۰۰۰ لیتر آب',
          timing: 'محلول‌پاشی برگی'
        }
      ],
      faqs: [
        {
          question: 'چگونه از سیاه شدن مغز گردوی تویسرکان در گرمای تابستان جلوگیری کنیم؟',
          answer: 'محلول‌پاشی پتاسیم خالص تایگر K High همراه با کلسیم بور در تیر و مرداد، تحمل درخت به تنش گرمایی را بالا برده و مانع از اکسیداسیون ترکیبات فنلی مغز می‌شود.'
        },
        {
          question: 'بهترین زمان محلول‌پاشی فروت‌ست گردو چه زمانی است؟',
          answer: 'نوبت اول بلافاصله پس از چیدن گردو در پاییز، و نوبت دوم در بهار هم‌زمان با تورم جوانه‌های زایشی.'
        }
      ],
      references: [
        'Solar, A., & Stampar, F. (2011). "Influence of calcium and potassium on walnut nut quality". Scientia Horticulturae, 127(3), 220-225.',
        'FAO (2020). "Walnut Production & Nutrient Requirements". FAO Plant Paper, Rome.'
      ],
      relatedProducts: ['کلسیم بور (Cal-Bor)', 'فول شارژر (Full Charger)', 'تایگر K High (کود ژل پتاس)', 'دوپینگ (Doping)'],
      relatedArticles: ['calcium-boron', 'heat-drought-stress', 'potassium-fertigation']
    },
    en: {
      title: 'Tuyserkan & Hamedan Walnut Nutrition: Spring Frost Protection & Kernel Sizing',
      category: 'Nut Crops & Walnut Orchards',
      readTime: '11 min',
      date: 'October 2024',
      lastModified: '2026-10-24',
      author: 'Walnut Physiology & Pomology Division, Pishgaman Paydar Falat Nik',
      targetKeyword: 'Tuyserkan Walnut Nutrition Hamedan',
      metaDescription: 'Complete agronomic guide for Tuyserkan walnut orchards in Hamedan: preventing spring frost injury, blank nuts, kernel darkening, and bacterial blight via Cal-Bor and Tiger K High.',
      summary: 'Enhancing kernel oil content, shell seal integrity, and late-spring frost resilience in high-altitude Zagros walnut orchards.',
      abstract: 'Tuyserkan in Hamedan province serves as Iran capital for commercial walnut production. Late spring freezes and high summer temperatures cause heavy kernel oxidation and blankness. Applying Full Charger (Zn-B) during spring budbreak and Tiger K High during kernel filling optimizes yield and oil ratios.',
      contentSections: [
        {
          heading: 'Climatic Vulnerability of Zagros Mountain Walnut Orchards',
          text: 'High altitude microclimates incur freeze risks during catkin emergence. Calcareous soils lock essential zinc and boron necessary for fertilization.'
        }
      ],
      dosageTable: [
        {
          stage: 'Spring Bud Swell (May)',
          crop: 'Walnut Orchards',
          rate: 'Full Charger 2 L / 1000 L',
          timing: 'Canopy foliar spray'
        }
      ],
      faqs: [
        {
          question: 'How to prevent walnut kernel darkening during summer?',
          answer: 'Foliar applications of Tiger K High potassium gel combined with calcium-boron maintain osmotic hydration and inhibit phenolic oxidation.'
        }
      ],
      references: [
        'Solar, A., & Stampar, F. (2011). "Influence of calcium and potassium on walnut nut quality".'
      ],
      relatedProducts: ['Cal-Bor', 'Full Charger', 'Tiger K High', 'Doping'],
      relatedArticles: ['calcium-boron', 'heat-drought-stress']
    },
    ar: {
      title: 'تسميد بساتين الجوز في تويسركان وهمدان: الوقاية من الصقيع وزيادة امتلاء اللب',
      category: 'بساتين الجوز والمكسرات',
      readTime: '١١ دقيقة',
      date: 'أكتوبر ٢٠٢٤',
      lastModified: '2026-10-24',
      author: 'قسم أبحاث المكسرات والجوز - شركة بيشغامان',
      targetKeyword: 'تسميد بساتين الجوز في تويسركان',
      metaDescription: 'برنامج تغذية بساتين الجوز في تويسركان لتفادي الصقيع الربيعي واسوداد اللب وزيادة نسبة الزيت عبر كلسيم بور وتايكر جل.',
      summary: 'تحسين جودة لب الجوز وحمايته من الصقيع الربيعي في المرتفعات.',
      abstract: 'تتعرض بساتين الجوز في تويسركان للصقيع الربيعي وارتفاع حرارة الصيف. يقدم هذا المقال برنامج التسميد بالبورون والكالسيوم والبوتاسيوم.',
      contentSections: [
        {
          heading: 'أسباب اسوداد وتفرغ لب الجوز',
          text: 'يؤدي الإجهاد الحراري ونقص البورون والكالسيوم إلى اسوداد اللب وضعف تكوين القشرة الخشبية.'
        }
      ],
      dosageTable: [
        {
          stage: 'مرحلة انتفاخ البراعم',
          crop: 'أشجار الجوز',
          rate: 'فول شارجر ٢ لتر لكل ١٠٠٠ لتر ماء',
          timing: 'رش ورقي'
        }
      ],
      faqs: [
        {
          question: 'كيف نمنع اسوداد لب الجوز؟',
          answer: 'بالرش الورقي لسماد تايكر جل كيه هاي والكالسيوم خلال شهر تموز وآب لرفع مقاومة الشجرة للحرارة.'
        }
      ],
      references: [
        'Solar, A. (2011). "Influence of calcium on walnut quality".'
      ],
      relatedProducts: ['کلسیم بور (Cal-Bor)', 'فول شارژر (Full Charger)'],
      relatedArticles: ['calcium-boron', 'heat-drought-stress']
    },
    ur: {
      title: 'تویسرکان اور ہمدان میں اخروٹ کے باغات کی سائنسی دیکھ بھال اور غذائیت',
      category: 'اخروٹ اور میوہ جات',
      readTime: '۱۱ منٹ',
      date: 'اکتوبر ۲۰۲۴',
      author: 'پیشگامان ریسرچ ٹیم',
      summary: 'اخروٹ کی گرپ کو کالا ہونے سے بچانے اور سردی سے تحفظ کے لیے کلسیم بور کا استعمال۔',
      abstract: 'اخروٹ کے باغات کو سردی اور شدید گرمی سے بچانے کے لیے سائنسی کود کا استعمال۔',
      contentSections: [
        {
          heading: 'اخروٹ کی فصل کی حفاظت',
          text: 'کلسیم اور پوٹاشیم کے استعمال سے اخروٹ کا چھلکا مضبوط ہوتا ہے اور گرپ بھاری بنتی ہے۔'
        }
      ],
      references: [
        'Solar, A. (2011).'
      ],
      relatedProducts: ['کلسیم بور (Cal-Bor)']
    }
  },

  // 12. Saveh & Neyriz Pomegranate Orchards
  {
    id: 'reg-pomegranate-cracking-saveh',
    slug: 'pomegranate-cracking-saveh-neyriz',
    aliases: ['kood-anar-saveh', 'tarakidgi-anar-neyriz'],
    imageUrl: imgPomegranate,
    region: {
      provinceFa: 'مرکزی و فارس (ساوه، نی‌ریز، فردوس، آران و بیدگل)',
      cropFa: 'انار (ملس ساوه، رباب نی‌ریز، شیشه کپ فردوس)',
      provinceEn: 'Markazi & Fars (Saveh & Neyriz)',
      cropEn: 'Pomegranate Orchards',
      provinceAr: 'محافظة مركزي وفارس (ساوه وني ريز)',
      cropAr: 'بساتين الرمان'
    },
    googleTrendKeyword: {
      fa: 'ترکیدگی انار ساوه نی ریز',
      en: 'Saveh Pomegranate Fruit Cracking Management',
      ar: 'منع تشقق ثمار الرمان في ساوه',
      ur: 'انار کے پھٹنے کا علاج'
    },
    fa: {
      title: 'کنترل ترکیدگی و آفتاب‌سوختگی پوست انار ساوه و نی‌ریز: نقش کلسیم، سیلیسیم و هیومیک در ارتقای عیار صادراتی',
      category: 'باغداری انار و میوه‌های نیمه‌گرمسیری',
      readTime: '۱۰ دقیقه',
      date: 'مهر ۱۴۰۴',
      lastModified: '2026-10-24',
      author: 'دپارتمان تحقیقات انار پیشگامان پایدار فلات نیک',
      targetKeyword: 'ترکیدگی انار ساوه نی ریز',
      metaDescription: 'راهنمای پیشگیری از ترکیدگی پوست انار ملس ساوه و رباب نی‌ریز با کلسیم بور، سیلیکات پتاسیم سیلیگارد و هیومیک اسید پیشگامان.',
      summary: 'کنترل عارضه ترکیدگی و آفتاب‌سوختگی پوست انار ناشی از نوسانات آبیاری و شدت آفتاب تابستان، افزایش سرخ‌رنگی دانه‌ها و افزایش سایز میوه صادراتی.',
      abstract: 'باغات انار ساوه و نی‌ریز قطب اصلی تولید و صادرات انار ایران هستند؛ اما عارضه ترکیدگی پوست میوه (Fruit Cracking) و آفتاب‌سوختگی در تابستان‌های گرم تا ۳۵٪ از محصول را غیرقابل صادرات می‌کند. نوسانات آبیاری، عدم انعطاف‌پذیری دیواره سلولی پوست و کمبود کلسیم و سیلیسیم عوامل اصلی این مشکل هستند. این مقاله علمی کاربرد سیلیگارد و کلسیم بور را در حل این بحران بررسی می‌کند.',
      contentSections: [
        {
          heading: 'علل فیزیولوژیک ترکیدگی پوست انار در ساوه و نی‌ریز',
          text: 'در اواخر تابستان (مرداد و شهریور) با رشد سریع آریل‌ها (دانه‌های انار) و نوسانات رطوبت خاک، فشار هیدرواستاتیک درونی میوه افزایش می‌یابد. در صورتی که پوست خارجی انار به دلیل کمبود کلسیم و سیلیسیم نازک و خشک باشد، قدرت کشسانی لازم را نداشته و دچار شکاف عمیق می‌شود.'
        },
        {
          heading: 'نقش سیلیسیم و کلسیم در ضخامت و انعطاف پوست انار',
          text: '• کلسیم بور (Cal-Bor): کلسیم پکتات دیواره سلولی را مستحکم کرده و بور نفوذ کلسیم به پوست میوه را ۳ برابر تسریع می‌کند.\n• سیلیکات پتاسیم (سیلیگارد): عنصر سیلیس لایه‌ای الاستیک و بازتاب‌دهنده نور ماوراء بنفش روی پوست انار ایجاد کرده و آفتاب‌سوختگی و ترکیدگی را مهار می‌سازد.'
        },
        {
          heading: 'دستورالعمل تغذیه تخصصی انار پیشگامان',
          text: '۱. پس از ریزش گلبرگ‌ها (خرداد): محلول‌پاشی کلسیم بور با دوز ۲ در هزار جهت تشکیل پوست اولیه قوی.\n۲. اوج گرمای تابستان (تیر و مرداد): محلول‌پاشی سیلیگارد با دوز ۲ لیتر در هکتار جهت بازتاب نور و منع آفتاب‌سوختگی.\n۳. ۳۰ روز قبل از برداشت (شهریور): مصرف ریشه‌ای هیومی فارم به همراه محلول‌پاشی پتاسیم تایگر K High جهت سرخ شدن پررنگ دانه‌ها.'
        }
      ],
      dosageTable: [
        {
          stage: 'فندقی شدن میوه (خرداد)',
          crop: 'باغات انار ساوه و نی‌ریز',
          rate: 'کلسیم بور ۲ لیتر در ۱۰۰۰ لیتر آب',
          timing: 'محلول‌پاشی برگی'
        },
        {
          stage: 'اوج تابستان و خطر آفتاب‌سوختگی (تیر و مرداد)',
          crop: 'انار',
          rate: 'سیلیگارد ۲ لیتر در ۱۰۰0 لیتر آب',
          timing: 'محلول‌پاشی برگی پوششی'
        },
        {
          stage: 'درشت شدن و رنگ‌گیری (شهریور)',
          crop: 'انار',
          rate: 'تایگر K High ۳ کیلوگرم در ۱۰۰۰ لیتر آب',
          timing: 'محلول‌پاشی برگی'
        }
      ],
      faqs: [
        {
          question: 'چگونه آبیاری در مهار ترکیدگی انار نقش دارد؟',
          answer: 'آبیاری باید منظم و بدون دوره‌های تشنگی طولانی باشد؛ ترکیب آبیاری منظم با محلول‌پاشی کلسیم بور و سیلیگارد ترکیدگی را تا ۹۰٪ مهار می‌کند.'
        },
        {
          question: 'آیا سیلیگارد بر رنگ پوست انار تاثیر منفی می‌گذارد؟',
          answer: 'خیر، سیلیگارد شفافیت و درخشندگی پوست انار را افزایش داده و مانع از سیاه شدن پوست در برابر آفتاب سوزان می‌شود.'
        }
      ],
      references: [
        'Melgarejo, P., et al. (2004). "Inhibition of pomegranate fruit cracking by calcium and boron applications". Journal of Horticultural Science, 79(2), 185-189.',
        'FAO (2019). "Pomegranate Quality Standards & Post-Harvest Guidelines". Rome.'
      ],
      relatedProducts: ['کلسیم بور (Cal-Bor)', 'سیلیگارد (سیلیکات پتاسیم)', 'تایگر K High (کود ژل پتاس)', 'هیومی فارم (Humifarm)'],
      relatedArticles: ['calcium-boron', 'heat-drought-stress', 'potassium-fertigation']
    },
    en: {
      title: 'Pomegranate Fruit Cracking & Sunscald Control in Saveh & Neyriz via Cal-Bor & Siligard',
      category: 'Subtropical Fruits & Pomegranate',
      readTime: '10 min',
      date: 'October 2024',
      lastModified: '2026-10-24',
      author: 'Subtropical Agronomy Division, Pishgaman Paydar Falat Nik',
      targetKeyword: 'Saveh Pomegranate Fruit Cracking Management',
      metaDescription: 'Agronomic protocol to prevent fruit cracking and sunscald in Saveh and Neyriz pomegranate orchards using Cal-Bor, Siligard potassium silicate, and Tiger K High.',
      summary: 'Improving peel elasticity, preventing UV sunscald, and enhancing ruby aril pigmentation in export-grade Iranian pomegranates.',
      abstract: 'Pomegranate orchards in Saveh and Neyriz lose up to 35% of yields to late-summer rind cracking and sunburn. Applications of bioavailable calcium-boron coupled with Siligard potassium silicate enhance skin tensile strength and reflect scorching UV rays.',
      contentSections: [
        {
          heading: 'Peel Tensile Mechanics and Irrigation Dynamics',
          text: 'Rapid aril expansion under high August temperatures exerts internal hydrostatic pressure. Calcium pectate cross-links preserve peel integrity.'
        }
      ],
      dosageTable: [
        {
          stage: 'Fruit Set (June)',
          crop: 'Pomegranate Orchards',
          rate: 'Cal-Bor 2 L / 1000 L water',
          timing: 'Canopy spray'
        }
      ],
      faqs: [
        {
          question: 'How does potassium silicate prevent pomegranate sunburn?',
          answer: 'Siligard deposits a micro-silica barrier over the pericarp, reflecting thermal radiation and keeping rind tissues flexible.'
        }
      ],
      references: [
        'Melgarejo, P., et al. (2004). "Inhibition of pomegranate fruit cracking".'
      ],
      relatedProducts: ['Cal-Bor', 'Siligard', 'Tiger K High', 'Humifarm'],
      relatedArticles: ['calcium-boron', 'heat-drought-stress']
    },
    ar: {
      title: 'التحكم في تشقق وثمار الرمان في ساوه وني ريز: دور الكالسيوم والسيليكون',
      category: 'بساتين الرمان والفاكهة',
      readTime: '١٠ دقائق',
      date: 'أكتوبر ٢٠٢٤',
      lastModified: '2026-10-24',
      author: 'قسم أبحاث الفاكهة - شركة بيشغامان',
      targetKeyword: 'منع تشقق ثمار الرمان في ساوه',
      metaDescription: 'حل مشكلة تشقق قشرة الرمان وحروق الشمس في بساتين ساوه وني ريز عبر سماد كلسيم بور وسيليكارد لرفع جودة التصدير.',
      summary: 'تحسين مرونة قشرة الرمان وزيادة احمرار الحبات وحمايتها من حرارة الصيف.',
      abstract: 'تسبب ضربات الشمس ونقص الكالسيوم تشقق قشرة الرمان. يقدم هذا البحث برنامجاً للرش بمركبات الكالسيوم والسيليكون السيليكارد.',
      contentSections: [
        {
          heading: 'أسباب تشقق قشرة الرمان',
          text: 'تؤدي النموات السريعة لحبات الرمان الداخلية مع جفاف القشرة الخارجية إلى تشقق الثمار وفقدان قيمتها التسويقية.'
        }
      ],
      dosageTable: [
        {
          stage: 'عقد الثمار',
          crop: 'أشجار الرمان',
          rate: 'کلسیم بور ۲ لتر لكل ۱۰۰۰ لتر ماء',
          timing: 'رش ورقي'
        }
      ],
      faqs: [
        {
          question: 'كيف يمنع السيليكون حروق الشمس في الرمان؟',
          answer: 'يشكل سيليكارد طبقة عاكسة للأشعة فوق البنفسجية تحمي القشرة من الجفاف والاحتراق.'
        }
      ],
      references: [
        'Melgarejo, P. (2004). "Inhibition of pomegranate fruit cracking".'
      ],
      relatedProducts: ['کلسیم بور (Cal-Bor)', 'سیلیگارد (سیلیکات پتاسیم)'],
      relatedArticles: ['calcium-boron', 'heat-drought-stress']
    },
    ur: {
      title: 'انار کے پھٹنے اور دھوپ سے جلنے کا سائنسی علاج',
      category: 'انار کی کاشت',
      readTime: '۱۰ منٹ',
      date: 'اکتوبر ۲۰۲۴',
      author: 'پیشگامان ریسرچ ٹیم',
      summary: 'انار کے چھلکے کو پھٹنے سے بچانے کے لیے کلسیم اور سلیکان کا استعمال۔',
      abstract: 'انار کی بہترین پیداوار کے لیے سائنسی کودی پروگرام۔',
      contentSections: [
        {
          heading: 'انار کے چھلکے کی حفاظت',
          text: 'کلسیم بور کے استعمال سے چھلکا مضبوط اور لچکدار بنتا ہے۔'
        }
      ],
      references: [
        'Melgarejo, P. (2004).'
      ],
      relatedProducts: ['کلسیم بور (Cal-Bor)']
    }
  },

  // 13. Guilan Tea Gardens
  {
    id: 'reg-tea-nutrition-guilan',
    slug: 'tea-nutrition-guilan-lahijan',
    aliases: ['kood-chay-shomal', 'chay-lahijan-roudsar'],
    imageUrl: imgTea,
    region: {
      provinceFa: 'گیلان و مازندران (لاهیجان، رودسر، املش، سیاه‌کل، رامسر)',
      cropFa: 'چای سبز و سیاه (چین بهاره، تابستانه و پاییزه)',
      provinceEn: 'Guilan & Mazandaran (Lahijan & Roudsar)',
      cropEn: 'Tea Plantations',
      provinceAr: 'محافظة غيلان (لاهيجان ورودسر)',
      cropAr: 'مزارع الشاي'
    },
    googleTrendKeyword: {
      fa: 'کود چای لاهیجان رودسر',
      en: 'Guilan Tea Plantation Nutrition Lahijan',
      ar: 'تسميد شجيرات الشاي في غيلان',
      ur: 'چائے کے باغات کی دیکھ بھال'
    },
    fa: {
      title: 'اصلاح اسیدیته خاک و تغذیه ارگانیک بوته‌های چای گیلان: افزایش چین‌دهی، شادابی برگ سبز و جذب آهن با ردفول و دوپینگ',
      category: 'چای و کشت‌های هیدرومورف',
      readTime: '۱۰ دقیقه',
      date: 'مهر ۱۴۰۴',
      lastModified: '2026-10-24',
      author: 'دپارتمان تحقیقات چای و گیاهان صنعتی پیشگامان',
      targetKeyword: 'کود چای لاهیجان رودسر',
      metaDescription: 'برنامه تغذیه ارگانیک و تخصصی باغات چای لاهیجان، املش و رودسر: افزایش وزن برگ سبز، شادابی جوانه شاه‌عباسی و رفع زردی با کلات آهن ردفول و دوپینگ.',
      summary: 'ارتقای کیفیت چین بهاره و تابستانه چای گیلان، تنظیم اسیدیته خاک‌های باغات چای و افزایش عطر و طعم چای خشک با محرک‌های رشد پیشگامان.',
      abstract: 'بوته‌های چای گیلان در لاهیجان و املش نیازمند خاک‌های اسیدی (pH بین ۴.۵ تا ۵.۵) و غنی از آهن و نیتروژن ارگانیک هستند. آهکی شدن موضعی و کاهش ماده آلی خاک سبب زردی برگ‌های جوانه چای و افت کیفیت چای خشک می‌شود. مصرف کلات آهن ردفول و محرک رشد دوپینگ شادابی و عطر برگ سبز چای را در تمام چین‌ها تضمین می‌نماید.',
      contentSections: [
        {
          heading: 'نیازهای فیزیولوژیک بوته چای در اقلیم خزری',
          text: 'بوته چای (Camellia sinensis) گیاهی اسیددوست است. برداشت مداوم غنچه و دو برگ جوان در چین‌های سه‌گانه بهاره، تابستانه و پاییزه، نیتروژن و آهن خاک را به شدت تخلیه می‌کند. کمبود آهن موجب زردی بین رگبرگی (Interveinal Chlorosis) در برگ‌های جوان تازه جوانه زده می‌شود.'
        },
        {
          heading: 'تاثیر آمینواسیدهای دوپینگ و کلات آهن ردفول در چای',
          text: '• دوپینگ (Doping): حاوی آمینواسیدهای آزاد چپ‌گرد L است که فتوسنتز جوانه شاه‌عباسی چای را ۳ برابر کرده و سرعت بازگشت بوته برای چین بعدی را افزایش می‌دهد.\n• کود آهن ردفول (Redful): آهن قابل جذب در تمامی pHهای خاک را فراهم کرده و رنگ سبز تیره و شاداب برگ چای را بازیابی می‌کند.'
        },
        {
          heading: 'دستورالعمل مصرف کودی چای در گیلان',
          text: '۱. پس از هرس زمستانه و قبل از چین بهاره (فروردین): مصرف ریشه‌ای هیومی فارم به همراه چالکود.\n۲. پس از چین اول (اردیبهشت و خرداد): محلول‌پاشی تلفیقی دوپینگ ۲ لیتر + ردفول ۵۰ گرم در ۱۰۰۰ لیتر آب جهت تحریک سریع چین دوم.\n۳. چین تابستانه (تیر و مرداد): محلول‌پاشی تاپ استار جهت افزایش ضخامت و شادابی برگ سبز.'
        }
      ],
      dosageTable: [
        {
          stage: 'استارت رشد بهاره (فروردین)',
          crop: 'باغات چای لاهیجان و املش',
          rate: 'هیومی فارم ۱۰ لیتر در هکتار',
          timing: 'آبیاری یا تزریق ریشه‌ای'
        },
        {
          stage: 'پس از برداشت چین اول (خرداد)',
          crop: 'چای',
          rate: 'دوپینگ ۲ لیتر + ردفول ۱ کیلوگرم در هکتار',
          timing: 'محلول‌پاشی برگی'
        },
        {
          stage: 'آماده‌سازی برای چین تابستانه (تیر)',
          crop: 'چای',
          rate: 'تاپ استار ۲ لیتر در ۱۰۰۰ لیتر آب',
          timing: 'محلول‌پاشی برگی'
        }
      ],
      faqs: [
        {
          question: 'چرا نباید از کودهای کلره در باغات چای استفاده کرد؟',
          answer: 'یون کلر به شدت کیفیت چای خشک را افت داده و طعم آن را گس و نامطبوع می‌کند؛ تمامی کودهای پیشگامان ۱۰۰٪ بدون کلر هستند.'
        },
        {
          question: 'چگونه می‌توان تعداد چین‌های چای را افزایش داد؟',
          answer: 'محلول‌پاشی آمینواسید دوپینگ پس از هر چین، بیداری جوانه‌های خفته را تسریع کرده و یک چین اضافه اقتصادی به باغدار می‌دهد.'
        }
      ],
      references: [
        'Mukul, R., et al. (2018). "Tea Bush Physiology and Soil Acidification Management". Journal of Tea Science, 38(2), 112-120.',
        'FAO (2021). "Sustainable Tea Cultivation in Caspian Basin". Rome.'
      ],
      relatedProducts: ['دوپینگ (Doping)', 'ردفول (Redful)', 'تاپ استار (Top Star)', 'هیومی فارم (Humifarm)'],
      relatedArticles: ['iron-eddha-chlorosis', 'heat-drought-stress', 'humic-fulvic-root-development']
    },
    en: {
      title: 'Guilan Tea Plantation Nutrition: Flushing Frequency & Organic Iron Management',
      category: 'Industrial Plantation & Tea Crops',
      readTime: '10 min',
      date: 'October 2024',
      lastModified: '2026-10-24',
      author: 'Plantation Crops Division, Pishgaman Paydar Falat Nik',
      targetKeyword: 'Guilan Tea Plantation Nutrition Lahijan',
      metaDescription: 'Optimize green tea leaf plucking flushes, restore canopy iron vigor, and elevate dried tea aroma in Guilan (Lahijan & Roudsar) with Redful iron chelate and Doping L-amino acids.',
      summary: 'Accelerating bud plucking recovery, managing acid soil iron dynamics, and enhancing aromatic polyphenol synthesis in northern Iranian tea bushes.',
      abstract: 'Tea bushes (Camellia sinensis) in Guilan demand acidic soils (pH 4.5-5.5) and dense bioavailable iron and free amino acids. Continuous harvesting of tender two-leaf buds depletes foliage reserves. Foliar Doping biostimulant combined with Redful iron chelate restores leaf chlorophyll density across spring and summer flushes.',
      contentSections: [
        {
          heading: 'Camellia Sinensis Physiology under Caspian Microclimates',
          text: 'Spring and summer plucking regimes harvest apical tender buds. Doping free amino acids reactivate dormant axillary buds rapidly.'
        }
      ],
      dosageTable: [
        {
          stage: 'Post Spring Flush (June)',
          crop: 'Tea Bushes',
          rate: 'Doping 2 L + Redful 1 kg/ha',
          timing: 'Foliar spray'
        }
      ],
      faqs: [
        {
          question: 'Why avoid chloride fertilizers in tea plantations?',
          answer: 'Chloride ions impair dried tea aroma, flavor infusion purity, and leaf firing quality; Pishgaman inputs are 100% chloride-free.'
        }
      ],
      references: [
        'Mukul, R., et al. (2018). "Tea Bush Physiology and Soil Acidification Management".'
      ],
      relatedProducts: ['Doping', 'Redful', 'Top Star', 'Humifarm'],
      relatedArticles: ['iron-eddha-chlorosis', 'heat-drought-stress']
    },
    ar: {
      title: 'تسميد شجيرات الشاي في غيلان: زيادة قطفات الشاي والحديد العضوي',
      category: 'مزارع الشاي والمحاصيل',
      readTime: '١٠ دقائق',
      date: 'أكتوبر ٢٠٢٤',
      lastModified: '2026-10-24',
      author: 'قسم المحاصيل الاستوائية - شركة بيشغامان',
      targetKeyword: 'تسميد شجيرات الشاي في غيلان',
      metaDescription: 'برنامج زيادة محصول الشاي في لاهيجان ورودسر وإعادة شحن المجموع الخضري بالحديد والأحماض الأمينية عبر دوبينغ وردفول.',
      summary: 'تحفيز نمو البراعم الزهرية للشاي وزيادة الجودة والنكهة العطرية للشاي الجاف.',
      abstract: 'يحتاج الشاي إلى تربة حمضية وتغذية مستمرة بالحديد. يقدم هذا المقال برنامج التسميد بمركب دوبينغ وشيلات الحديد ردفول لزيادة عدد القطفات.',
      contentSections: [
        {
          heading: 'احتياجات الشاي الغذائية',
          text: 'يتسبب القطاف المستمر في استنزاف مخزون شجيرة الشاي، مما يستوجب الرش الورقي بالأحماض الأمينية والحديد.'
        }
      ],
      dosageTable: [
        {
          stage: 'بعد القطفة الأولى',
          crop: 'شجيرات الشاي',
          rate: 'دوبينغ ٢ لتر + ردفول ١ كغ للهكتار',
          timing: 'رش ورقي'
        }
      ],
      faqs: [
        {
          question: 'كيف نزيد عدد قطفات الشاي في الموسم؟',
          answer: 'بالرش بمركب دوبينغ بعد كل قطفة لتحفيز البراعم الجانبية على النمو السريع.'
        }
      ],
      references: [
        'Mukul, R. (2018). "Tea Bush Physiology".'
      ],
      relatedProducts: ['دوپینگ (Doping)', 'ردفول (Redful)'],
      relatedArticles: ['iron-eddha-chlorosis', 'heat-drought-stress']
    },
    ur: {
      title: 'چائے کے باغات کی دیکھ بھال اور پیداوار میں اضافہ',
      category: 'چائے کی کاشت',
      readTime: '۱۰ منٹ',
      date: 'اکتوبر ۲۰۲۴',
      author: 'پیشگامان ریسرچ ٹیم',
      summary: 'چائے کی پتیاں تیزی سے اگانے اور لوہے کی کمی دور کرنے کا سائنسی طریقہ۔',
      abstract: 'چائے کے باغات کے لیے کودی پروگرام۔',
      contentSections: [
        {
          heading: 'چائے کی فصل کی دیکھ بھال',
          text: 'آئرن چیلیٹ اور امینو ایسڈ کے استعمال سے چائے کی پتیاں سبز اور خوشبودار بنتی ہیں۔'
        }
      ],
      references: [
        'Mukul, R. (2018).'
      ],
      relatedProducts: ['دوپینگ (Doping)', 'ردفول (Redful)']
    }
  },

  // 14. Ardabil & Fereydan Potato Fields
  {
    id: 'reg-potato-tuber-ardabil',
    slug: 'potato-tuber-bulking-ardabil-fereydan',
    aliases: ['kood-sibzamini-ardabil', 'ghasht-sibzamini-fereydan'],
    imageUrl: imgPotato,
    region: {
      provinceFa: 'اردبیل و اصفهان (دشت اردبیل، نیر، نمین، فریدن، سمیرم)',
      cropFa: 'سیب‌زمینی (ارقام آگریا، سانته، جلی، فونتانه)',
      provinceEn: 'Ardabil & Isfahan (Ardabil Plain & Fereydan)',
      cropEn: 'Potato Fields',
      provinceAr: 'محافظة أردبيل وأصفهان',
      cropAr: 'حقول البطاطس'
    },
    googleTrendKeyword: {
      fa: 'کود سیب زمینی اردبیل فریدن',
      en: 'Ardabil Potato Tuber Bulking Nutrition',
      ar: 'تسميد بطاطس أردبيل وزيادة الحجم',
      ur: 'آلو کی فصل اور جڑوں کی نمو'
    },
    fa: {
      title: 'تغذیه تخصصی مزارع سیب‌زمینی دشت اردبیل و فریدن: درشت‌شدن غده‌ها، مهار سفیدک داونی و ماندگاری انبارداری با تایگر K High و فوسفیت',
      category: 'زراعت غده‌ای و سیب‌زمینی',
      readTime: '۱۱ دقیقه',
      date: 'مهر ۱۴۰۴',
      lastModified: '2026-10-24',
      author: 'دپارتمان تحقیقات زراعت غده‌ای پیشگامان',
      targetKeyword: 'کود سیب زمینی اردبیل فریدن',
      metaDescription: 'برنامه علمی درشت شدن غده‌های سیب‌زمینی آگریا و جلی در اردبیل و فریدن: افزایش استحکام پوست، مهار بیماری بلایت و انبارداری طولانی با ژل پتاس تایگر K High و فوسفیت پتاسیم.',
      summary: 'افزایش تناژ سیب‌زمینی، یکنواختی سایز غده‌ها، پوست‌بستن کامل جهت کاهش انبارسوزی و ایجاد ایمنی در برابر قارچ بلایت سیب‌زمینی با کودهای ژل و مایع پیشگامان.',
      abstract: 'دشت اردبیل و منطقه فریدن اصفهان قطب‌های اصلی تولید سیب‌زمینی کشور هستند. غده‌بندی نامفهوم، ریز ماندن سیب‌زمینی‌ها، عارضه توخالی شدن (Hollow Heart) و حمله قارچ سفیدک دروغین (Late Blight) از چالش‌های اصلی کشاورزان است. مصرف فوسفیت پتاسیم سیستم دفاعی بوته را فعال کرده و ژل تایگر K High پمپاژ نشاسته به غده‌ها را تا دو برابر تسریع می‌نماید.',
      contentSections: [
        {
          heading: 'مراحل بحرانی تغذیه سیب‌زمینی در اردبیل و فریدن',
          text: '۱. فاز غده‌انگیزی (Tuber Initiation): ۳ تا ۴ هفته پس از سبز شدن، نیاز به فسفر کلاته و محرک ریشه جامپر جهت تشکیل تعداد حداکثری غده‌های یکنواخت.\n۲. فاز حجیم شدن غده (Tuber Bulking): مصرف پتاسیم بالای ژل تایگر K High بدون کلر که نشاسته را از بوته به غده‌ها منتقل کرده و سایز غده‌ها را به بالای ۱۵۰ گرم می‌رساند.\n۳. فاز رسيدن و پوست‌بستن (Skin Set): مصرف کلسیم بور جهت ضخیم شدن پوست سیب‌زمینی و مهار پوسیدگی انبارداری.'
        },
        {
          heading: 'کنترل بیماری بلایت سیب‌زمینی با فوسفیت پتاسیم پیشگامان',
          text: 'ترکیب فوسفیت پتاسیم با تحریک تولید فیتوآلکسین‌های درونی گیاه، دیواره قارچ‌های Phytophthora infestans را منهدم کرده و علاوه بر نقش قارچ‌کشی ارگانیک، پتاسیم و فسفر بالایی به غده‌ها می‌رساند.'
        },
        {
          heading: 'برنامه کوددهی میدانی سیب‌زمینی',
          text: '• غده‌انگیزی (تیرماه): مصرف جامپر به میزان ۱۰ کیلوگرم در هکتار همراه با آبیاری قطره‌ای نوار تیپ.\n• حجیم شدن غده (مرداد): محلول‌پاشی ژل تایگر K High با دوز ۴ کیلوگرم در هکتار در دو نوبت با فاصله ۱۵ روز.\n• پیشگیری از بلایت و افزایش ماندگاری (شهریور): محلول‌پاشی فوسفیت پتاسیم با دوز ۲ لیتر در هکتار.'
        }
      ],
      dosageTable: [
        {
          stage: 'غده‌انگیزی و شروع غده‌دهی (تیر)',
          crop: 'مزارع سیب‌زمینی اردبیل و فریدن',
          rate: 'جامپر ۱۰ کیلوگرم در هکتار',
          timing: 'همراه با آبیاری قطره‌ای'
        },
        {
          stage: 'حجیم شدن غده (مرداد)',
          crop: 'سیب‌زمینی',
          rate: 'تایگر K High ۴ کیلوگرم در هکتار',
          timing: 'محلول‌پاشی برگی'
        },
        {
          stage: 'قبل از برداشت و انبارداری (شهریور)',
          crop: 'سیب‌زمینی',
          rate: 'فوسفیت پتاسیم ۲ لیتر در هکتار',
          timing: 'محلول‌پاشی برگی'
        }
      ],
      faqs: [
        {
          question: 'چگونه از عارضه توخالی شدن (Hollow Heart) سیب‌زمینی جلوگیری کنیم؟',
          answer: 'مصرف متوازن کلسیم بور و پتاسیم تایگر K High در فاز حجیم شدن غده، تقسیم سلولی مرکز غده را منسجم کرده و مانع توخالی شدن می‌شود.'
        },
        {
          question: 'آیا ژل تایگر K High مانع جوانه زدن سیب‌زمینی در انبار می‌شود؟',
          answer: 'بله، پتاسیم بالا با مستحکم کردن پوست و تعادل رطوبت، دوره خواب غده را حفظ کرده و ماندگاری انبارداری را تا ۶ ماه بالا می‌برد.'
        }
      ],
      references: [
        'Westermann, D. T. (2005). "Nutrient management practices in potato production". American Journal of Potato Research, 82(1), 61-67.',
        'FAO (2020). "Potato Crop Disease & Nutrient Protocols". Rome.'
      ],
      relatedProducts: ['تایگر K High (کود ژل پتاس)', 'فوسفیت پتاسیم (Potassium Phosphite)', 'جامپر (Jumper)', 'کلسیم بور (Cal-Bor)'],
      relatedArticles: ['potassium-fertigation', 'calcium-boron', 'heat-drought-stress']
    },
    en: {
      title: 'Ardabil & Fereydan Potato Nutrition: Tuber Bulking & Late Blight Immunity',
      category: 'Tuber Agronomy & Potato Crops',
      readTime: '11 min',
      date: 'October 2024',
      lastModified: '2026-10-24',
      author: 'Tuber Crop Agronomy Group, Pishgaman Paydar Falat Nik',
      targetKeyword: 'Ardabil Potato Tuber Bulking Nutrition',
      metaDescription: 'Field guide to maximize Agria and Jelly potato tuber sizing, skin setting, and late blight protection in Ardabil and Fereydan using Tiger K High and Potassium Phosphite.',
      summary: 'Accelerating starch translocation into tuber sinks, strengthening periderm skin set, and activating systemic acquired resistance against Phytophthora infestans.',
      abstract: 'Ardabil plain accounts for over 20% of Iranian commercial potato production. Key losses stem from uneven tuber sizing, hollow heart disease, and late blight fungal outbreaks. Fertigating chloride-free Tiger K High potassium gel combined with foliar Potassium Phosphite activates endogenous phytoalexins while sizing tubers above 150 grams.',
      contentSections: [
        {
          heading: 'Tuberization and Starch Translocation Kinetics',
          text: 'Phloem sap starch loading requires high cellular potassium levels without toxic chloride ions.'
        }
      ],
      dosageTable: [
        {
          stage: 'Tuber Bulking (August)',
          crop: 'Potato Crops',
          rate: 'Tiger K High 4 kg/ha',
          timing: 'Foliar application'
        }
      ],
      faqs: [
        {
          question: 'How to prevent hollow heart in large Agria potatoes?',
          answer: 'Apply Cal-Bor coupled with chloride-free Tiger K High during peak bulking to synchronize internal cell division with volume growth.'
        }
      ],
      references: [
        'Westermann, D. T. (2005). "Nutrient management practices in potato production".'
      ],
      relatedProducts: ['Tiger K High', 'Potassium Phosphite', 'Jumper', 'Cal-Bor'],
      relatedArticles: ['potassium-fertigation', 'calcium-boron']
    },
    ar: {
      title: 'تسميد بطاطس أردبيل وفرايدان: زيادة حجم الدرنات والوقاية من المافات',
      category: 'زراعة البطاطس والدرنات',
      readTime: '١١ دقيقة',
      date: 'أكتوبر ٢٠٢٤',
      lastModified: '2026-10-24',
      author: 'قسم زراعة الدرنات - شركة بيشغامان',
      targetKeyword: 'تسميد بطاطس أردبيل وزيادة الحجم',
      metaDescription: 'طريقة زيادة حجم درنات البطاطس في أردبيل وتقوية القشرة للتخزين الشتوي ومكافحة الندوة المتأخرة عبر تايكر جل وفوسفيت البوتاسيوم.',
      summary: 'تحفيز انتقال النشا إلى الدرنات وزيادة صلابة القشرة ومنع التعفن أثناء التخزين.',
      abstract: 'تعتبر أردبيل المركز الرئيسي لإنتاج البطاطس. يوضح هذا المقال برنامج التسميد بالبوتاسيوم الخالي من الكلور وفوسفيت البوتاسيوم للوقاية من اللفحة الجافة.',
      contentSections: [
        {
          heading: 'مراحل تسميد البطاطس',
          text: 'تحتاج البطاطس إلى الفوسفور في مرحلة تكوين الدرنات، ثم إلى البوتاسيوم عالي النقاوة لتكبير حجم الدرنة.'
        }
      ],
      dosageTable: [
        {
          stage: 'مرحلة تحجيم الدرنات',
          crop: 'محصول البطاطس',
          rate: 'تايكر جل كيه هاي ٤ كغ للهكتار',
          timing: 'رش ورقي'
        }
      ],
      faqs: [
        {
          question: 'كيف نحمي البطاطس من مرض اللفحة (البلايت)؟',
          answer: 'بالرش بمركب فوسفيت البوتاسيوم الذي يحفز مناعة النبات الذاتية ويمد الدرنات بالبوتاسيوم.'
        }
      ],
      references: [
        'Westermann, D. T. (2005). "Nutrient management in potato".'
      ],
      relatedProducts: ['تایگر K High (کود ژل پتاس)', 'فوسفیت پتاسیم (Potassium Phosphite)'],
      relatedArticles: ['potassium-fertigation', 'calcium-boron']
    },
    ur: {
      title: 'آلو کی فصل میں جڑوں کی مضبوطی اور سائز میں اضافہ',
      category: 'آلو کی زراعت',
      readTime: '۱۱ منٹ',
      date: 'اکتوبر ۲۰۲۴',
      author: 'پیشگامان ریسرچ ٹیم',
      summary: 'آلو کے سائز کو بڑا کرنے اور بیماریوں سے بچاؤ کے لیے پوٹاشیم کا سائنسی طریقہ۔',
      abstract: 'آلو کی سائنسی کاشت اور دیکھ بھال۔',
      contentSections: [
        {
          heading: 'آلو کی پیداوار میں اضافہ',
          text: 'پوٹاشیم جل کے استعمال سے آلو کا سائز بڑا اور چھلکا مضبوط ہوتا ہے۔'
        }
      ],
      references: [
        'Westermann, D. T. (2005).'
      ],
      relatedProducts: ['تایگر K High (کود ژل پتاس)']
    }
  },

  // 15. Talesh & Tonekabon Kiwifruit Orchards
  {
    id: 'reg-kiwifruit-sizing-talesh',
    slug: 'kiwifruit-sizing-talesh-tonekabon',
    aliases: ['kood-kiwi-talesh', 'kood-kiwi-tonekabon'],
    imageUrl: imgKiwi,
    region: {
      provinceFa: 'گیلان و مازندران (تالش، آستارا، تنکابن، رامسر، عباس‌آباد)',
      cropFa: 'کیوی (هایوارد صادراتی، طلایی)',
      provinceEn: 'Guilan & Mazandaran (Talesh & Tonekabon)',
      cropEn: 'Kiwifruit Orchards (Hayward Export Grade)',
      provinceAr: 'محافظة غيلان ومازندران (تالش وتنكانبن)',
      cropAr: 'بساتين الكيوي'
    },
    googleTrendKeyword: {
      fa: 'کود کیوی تالش تنکابن',
      en: 'Talesh Kiwifruit Sizing & Brix Nutrition',
      ar: 'تسميد الكيوي في تالش وتنكانبن',
      ur: 'کیوی کی کاشت اور نگہداشت'
    },
    fa: {
      title: 'مدیریت سایزگیری و قند بریکس در باغات کیوی تالش و تنکابن: افزایش استحکام بافت، مهار نرمی و افزایش ماندگاری سردخانه‌ای',
      category: 'میوه‌های گرمسیری و کیوی',
      readTime: '۱۰ دقیقه',
      date: 'مهر ۱۴۰۴',
      lastModified: '2026-10-24',
      author: 'دپارتمان باغبانی و کیوی شمال پیشگامان',
      targetKeyword: 'کود کیوی تالش تنکابن',
      metaDescription: 'راهنمای افزایش وزن کیوی هایوارد صادراتی تالش و تنکابن به بالای ۱۰۰ گرم، پیشگیری از عارضه نرمی میوه در سردخانه با کلسیم بور و تایگر K High پیشگامان.',
      summary: 'روش‌های نوین سایزگیری کیوی، ارتقای قند بریکس بدون افت سفتی بافت، مهار عارضه نرمی زودرس و افزایش ماندگاری ۶ ماهه کیوی صادراتی شمال در سردخانه.',
      abstract: 'باغات کیوی نوار ساحلی خزر از تالش تا تنکابن بزرگ‌ترین قطب تولید و صادرات کیوی هایوارد ایران به کشورهای روسیه و حوزه خلیج فارس هستند. نرم شدن زودرس میوه در سردخانه (Softening) و عدم رسیدن به وزن صادراتی بالای ۱۰ تکه (۱۰۰ گرم به بالا) دو چالش کلیدی باغداران است. مصرف تقسیط‌شده کلسیم بور و ژل پتاسیم تایگر K High تراکم دیواره سلولی را ارتقا داده و کیفیت میوه را تضمین می‌کند.',
      contentSections: [
        {
          heading: 'فیزیولوژی رشد و تمایز سلولی میوه کیوی در شمال',
          text: 'میوه کیوی دارای بیشترین سرعت تقسیم سلولی در ۸ هفته اول پس از گرده‌افشانی است. در صورتی که عنصر کلسیم در این مقطع وارد دیواره سلولی نشود، میوه در پاییز حین انبارداری دچار افت سریع سفتی (Firmness Loss) شده و ماده اتیلن در سردخانه آزاد می‌سازد.'
        },
        {
          heading: 'برنامه کودی سایزگیری و کیفیت کیوی هایوارد',
          text: '• مرحله پس از ریزش گلبرگ‌ها (خرداد): محلول‌پاشی کلسیم بور با دوز ۲ در هزار جهت استحکام دیواره‌های سلولی اولیه میوه.\n• مرحله رشد سریع حجمی (تیر و مرداد): محلول‌پاشی تاپ استار و دوپینگ جهت تامین اسیدهای آمینه و روی برای تحریک تقسیم سلولی.\n• ۴۵ روز قبل از برداشت (شهریور و مهر): مصرف ژل پتاسیم بالای تایگر K High با دوز ۳ تا ۴ کیلوگرم در ۱۰۰۰ لیتر آب جهت پمپاژ قند، افزایش وزن به بالای ۱۰۰ گرم و افزایش عیار بریکس صادراتی.'
        }
      ],
      dosageTable: [
        {
          stage: '۳ تا ۴ هفته پس از تشکیل میوه (خرداد)',
          crop: 'باغات کیوی تالش و تنکابن',
          rate: 'کلسیم بور ۲ لیتر در ۱۰۰۰ لیتر آب',
          timing: 'محلول‌پاشی برگی'
        },
        {
          stage: 'رشد حجمی تابستانه (تیر و مرداد)',
          crop: 'کیوی',
          rate: 'تاپ استار ۲ لیتر + دوپینگ ۱.۵ لیتر در ۱۰۰۰',
          timing: 'محلول‌پاشی برگی'
        },
        {
          stage: 'درشت شدن و تجمع قند (شهریور و مهر)',
          crop: 'کیوی',
          rate: 'تایگر K High ۳ تا ۴ کیلوگرم در ۱۰۰۰',
          timing: 'محلول‌پاشی برگی نوبت اول و دوم'
        }
      ],
      faqs: [
        {
          question: 'چرا کیوی در سردخانه به سرعت نرم می‌شود؟',
          answer: 'کمبود کلسیم در دیواره سلولی و مصرف زیاد نیتروژن در اواخر فصل باعث تجزیه سریع پکتین و انتشار گاز اتیلن در سردخانه می‌شود. کلسیم بور پیشگامان این عارضه را مهار می‌سازد.'
        },
        {
          question: 'کدام کود باعث رسیدن وزن کیوی به بالای ۱۰ تکه (۱۰۰ گرم) می‌شود؟',
          answer: 'ترکیب محلول‌پاشی کلسیم بور در خرداد و ژل پتاسیم تایگر K High در شهریور، وزن متوسط هر میوه را تا ۲۰ گرم ارتقا می‌دهد.'
        }
      ],
      references: [
        'Ferguson, A. R., & Ferguson, I. B. (1990). "Kiwifruit: Science and Management". Ray Richards Publisher.',
        'FAO (2021). "Post-Harvest Handling & Nutrition of Kiwifruit". Rome.'
      ],
      relatedProducts: ['کلسیم بور (Cal-Bor)', 'تایگر K High (کود ژل پتاس)', 'دوپینگ (Doping)', 'تاپ استار (Top Star)'],
      relatedArticles: ['calcium-boron', 'potassium-fertigation', 'heat-drought-stress']
    },
    en: {
      title: 'Talesh & Tonekabon Kiwifruit Nutrition: Sizing & Cold Storage Shelf-Life',
      category: 'Subtropical Pomology & Kiwifruit',
      readTime: '10 min',
      date: 'October 2024',
      lastModified: '2026-10-24',
      author: 'Subtropical Kiwifruit R&D Group, Pishgaman Paydar Falat Nik',
      targetKeyword: 'Talesh Kiwifruit Sizing & Brix Nutrition',
      metaDescription: 'Agronomic guide to achieve > 100g fruit sizing and 6-month cold storage firmness in Caspian Hayward kiwifruit orchards using Cal-Bor and Tiger K High.',
      summary: 'Preventing premature fruit softening in cold storage, elevating Brix sugars, and optimizing Hayward kiwifruit export quality in Northern Iran.',
      abstract: 'Kiwifruit orchards along the Caspian coastline from Talesh to Tonekabon represent major export hubs to Eurasia. Premature fruit softening in cold storage compromises shipment value. Sequential fertigation of Cal-Bor during early cell division and chloride-free Tiger K High potassium gel during pre-harvest sizing secures skin firmness and Brix levels.',
      contentSections: [
        {
          heading: 'Cell Division Dynamics and Pectin Calcium Binding',
          text: 'Early calcium binding into cell wall middle lamellae determines post-harvest ethylene resistance.'
        }
      ],
      dosageTable: [
        {
          stage: 'Early Fruit Sizing (June)',
          crop: 'Kiwifruit Orchards',
          rate: 'Cal-Bor 2 L / 1000 L water',
          timing: 'Canopy spray'
        }
      ],
      faqs: [
        {
          question: 'Why does kiwifruit soften prematurely during storage?',
          answer: 'Calcium deficiency weakens cellular pectins; Cal-Bor applications fortify cell walls against enzymatic breakdown.'
        }
      ],
      references: [
        'Ferguson, A. R. (1990). "Kiwifruit: Science and Management".'
      ],
      relatedProducts: ['Cal-Bor', 'Tiger K High', 'Doping', 'Top Star'],
      relatedArticles: ['calcium-boron', 'potassium-fertigation']
    },
    ar: {
      title: 'تسميد الكيوي في تالش وتنكانبن: زيادة الحجم والصلابة للتخزين',
      category: 'بساتين الكيوي والفاكهة',
      readTime: '١٠ دقائق',
      date: 'أكتوبر ٢٠٢٤',
      lastModified: '2026-10-24',
      author: 'قسم الفاكهة الاستوائية - شركة بيشغامان',
      targetKeyword: 'تسميد الكيوي في تالش وتنكانبن',
      metaDescription: 'برنامج زيادة وزن ثمار الكيوي إلى أكثر من ١٠٠ غرام ومنع تطرية الثمار في التبريد عبر كلسيم بور وتايكر جل.',
      summary: 'رفع صلابة ثمار الكيوي وزيادة نسبة السكر وتحسين التخزين والتصدير.',
      abstract: 'تعد بساتين الكيوي في تالش وتنكانبن المورد الرئيسي للتصدير. يوضح هذا المقال برنامج التسميد بالكالسيوم والبوتاسيوم لمنع لزوجة وتطرية الثمار.',
      contentSections: [
        {
          heading: 'أهمية الكالسيوم في جدار خلايا الكيوي',
          text: 'يحافظ الكالسيوم على صلابة قشرة وثمرة الكيوي ويمنع إفراز غاز الإيثيلين المسبب للتطرية في المستودعات.'
        }
      ],
      dosageTable: [
        {
          stage: 'بعد عقد الثمار',
          crop: 'أشجار الكيوي',
          rate: 'کلسیم بور ۲ لتر لكل ۱۰۰۰ لتر ماء',
          timing: 'رش ورقي'
        }
      ],
      faqs: [
        {
          question: 'كيف نرفع وزن ثمرة الكيوي لتناسب التصدير؟',
          answer: 'بالرش الورقي لسماد تايكر جل كيه هاي والكالسيوم في مرحلة التحجيم الصيفية.'
        }
      ],
      references: [
        'Ferguson, A. R. (1990). "Kiwifruit Science".'
      ],
      relatedProducts: ['کلسیم بور (Cal-Bor)', 'تایگر K High (کود ژل پتاس)'],
      relatedArticles: ['calcium-boron', 'potassium-fertigation']
    },
    ur: {
      title: 'کیوی کی کاشت، سائز اور کولڈ اسٹوریج کی سائنس',
      category: 'کیوی کی کاشت',
      readTime: '۱۰ منٹ',
      date: 'اکتوبر ۲۰۲۴',
      author: 'پیشگامان ریسرچ ٹیم',
      summary: 'کیوی کے سائز کو بڑا کرنے اور کولڈ اسٹوریج میں سڑنے سے بچانے کا سائنسی طریقہ۔',
      abstract: 'کیوی کی کاشت اور سائنسی نگہداشت۔',
      contentSections: [
        {
          heading: 'کیوی کی فصل کی حفاظت',
          text: 'کلسیم بور کے استعمال سے کیوی کی پائیداری میں اضافہ ہوتا ہے۔'
        }
      ],
      references: [
        'Ferguson, A. R. (1990).'
      ],
      relatedProducts: ['کلسیم بور (Cal-Bor)']
    }
  }
];

