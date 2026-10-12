import { Product, ProductDetailData, Language, DosageRate, TankMixItem, ProductFaq } from '../types';
import { Translations } from '../i18n/translations';

// 1. Translated Product Names
export const localizedProductNames: Record<string, { en: string; ar: string; ur: string }> = {
  'challenger': { en: 'CHALLENGER', ar: 'چلنجر (Challenger)', ur: 'چلنجر (Challenger)' },
  'humifarm': { en: 'HUMIFARM', ar: 'هيومي فارم (Humifarm)', ur: 'ہیومی فارم (Humifarm)' },
  'jumper': { en: 'JUMPER', ar: 'جامبر (Jumper)', ur: 'جمپر (Jumper)' },
  'full-charger': { en: 'FULL CHARGER', ar: 'فول تشارجر (Full Charger)', ur: 'فل چارجر (Full Charger)' },
  'redfol': { en: 'REDFOL', ar: 'ريدفول (Redfol)', ur: 'ریڈ فول (Redfol)' },
  'doping': { en: 'DOPING', ar: 'دوبينغ (Doping)', ur: 'ڈوپنگ (Doping)' },
  'siligard': { en: 'SILIGARD', ar: 'سيليغارد (Siligard)', ur: 'سلی گارڈ (Siligard)' },
  'stormy': { en: 'STORMY', ar: 'ستورمي (Stormy)', ur: 'اسٹورمی (Stormy)' },
  'fiction': { en: 'FICTION', ar: 'فيكشن (Fiction)', ur: 'فکشن (Fiction)' },
  'top-star': { en: 'TOP STAR', ar: 'توب ستار (Top Star)', ur: 'ٹاپ اسٹار (Top Star)' },
  'tiger-k-high': { en: 'TIGER HIGH-K GEL', ar: 'تايغر عالي البوتاسيوم', ur: 'ٹائیگر ہائی پوٹاش جیل' },
  'tiger-p-high': { en: 'TIGER HIGH-P GEL', ar: 'تايغر عالي الفسفور', ur: 'ٹائیگر ہائی فاسفورس جیل' },
  'sol-max': { en: 'SOL-MAX', ar: 'سول ماكس (Sol-Max)', ur: 'سول میکس (Sol-Max)' },
  'salt-stop': { en: 'SALT STOP', ar: 'سالت ستوب (Salt Stop)', ur: 'سالٹ اسٹاپ (Salt Stop)' },
  'angela': { en: 'ANGELA', ar: 'أنجيلا (Angela)', ur: 'اینجلا (Angela)' },
  'ph-best': { en: 'PH BEST', ar: 'بي إتش بست (pH Best)', ur: 'پی ایچ بیسٹ (pH Best)' }
};

// 2. Localized Taglines
export const localizedTaglines: Record<string, { en: string; ar: string; ur: string }> = {
  'challenger': {
    en: 'High-purity 100% water-soluble humic acid powder with micronutrients & potassium',
    ar: 'مسحوق حمض الهيوميك عالي النقاوة مع البوتاسيوم والعناصر الصغرى المخلبية',
    ur: '۱۰۰٪ حل پذیر ہیومک ایسڈ پاؤڈر مع پوٹاشیم اور مائیکرو نیوٹرینٹس'
  },
  'humifarm': {
    en: 'Concentrated liquid humic acid enriched with NPK and bioactive organic agents',
    ar: 'حمض هيوميك سائل غني بعناصر NPK والمواد العضوية النشطة',
    ur: 'این پی کے اور نامیاتی مادوں سے بھرپور مائع ہیومک ایسڈ'
  },
  'jumper': {
    en: 'Potent rooting bio-stimulant & lateral feeder root development booster',
    ar: 'منشط قوي لتجذير الشتلات وتنمية المجموع الجذري في الأراضي المجهدة',
    ur: 'جڑوں کے پھیلاؤ اور پودوں کے استحکام کے لیے طاقتور بایو اسٹیمولنٹ'
  },
  'full-charger': {
    en: 'Multi-nutrient plant energy booster with seaweed, amino acids & active minerals',
    ar: 'شاحن طاقة نباتي متعدد العناصر مع الطحالب البحرية والأحماض الأمينية',
    ur: 'سمندری کائی اور امینو ایسڈز سے بھرپور مکمل انرجی بوسٹر'
  },
  'redfol': {
    en: '100% Chelated EDDHA Iron 6% (ortho-ortho 4.8%) for high-pH alkaline soils',
    ar: 'سماد حديد مخلبي نقي EDDHA 6% للترب القلوية والكلسية',
    ur: 'خالص چیلیٹڈ آئرن EDDHA 6% کلر والی اور سخت مٹی کے لیے'
  },
  'doping': {
    en: '100% Pure Ascophyllum nodosum cold-extracted Norwegian seaweed bio-stimulant',
    ar: 'مستخلص طحالب بحرية نقية ۱۰۰٪ لمقاومة الإجهادات وتنشيط الهرمونات',
    ur: 'خالص سمندری کائی کا عرق برائے انسدادِ موسمی تناؤ اور پھوٹ'
  },
  'siligard': {
    en: 'Liquid Potassium Silicate for cellular wall hardening, pest resistance & sunscald prevention',
    ar: 'سيليكات البوتاسيوم السائل لتقوية جدر الخلايا ومقاومة ضربة الشمس',
    ur: 'پوٹاشیم سلیکیٹ مائع - پودوں کے تنے کی مضبوطی اور گرمی سے حفاظت'
  },
  'stormy': {
    en: 'Free L-Alpha Amino Acids 80% with high anti-shock and thermal stress recovery efficiency',
    ar: 'أحماض أمينية نقية عالية التركيز لتخفيف صدمات الجفاف والحرارة الشديدة',
    ur: 'خالص ایل-الفا امینو ایسڈز برائے بحالیِ صحت و انسدادِ موسمی صدمات'
  },
  'fiction': {
    en: 'Liquid chelated Calcium + Boron (Ca-B) for flower retention and fruit firmness',
    ar: 'كالسيوم بورون سائل مخلبي لتثبيت الأزهار ومنع تشقق الثمار',
    ur: 'مائع کیلشیم اور بوران - پھولوں کو گرنے اور پھلوں کو پھٹنے سے بچانے والا'
  },
  'top-star': {
    en: 'Fast-release organic Nitrogen + Amino acids for vigorous spring vegetative push',
    ar: 'سماد نيتروجين عضوي وأحماض أمينية للنمو الخضري السريع والمبكر',
    ur: 'نامیاتی نائٹروجن اور امینو ایسڈز برائے فوری نباتاتی بڑھوتری'
  },
  'tiger-k-high': {
    en: 'High-Potassium suspension gel for rapid fruit bulking, color enhancement & brix accumulation',
    ar: 'جل معلق عالي البوتاسيوم لزيادة حجم ولون الثمار ونسبة السكر',
    ur: 'ہائی پوٹاش جیل کھاد - پھل کا وزن، سائز، رنگ اور مٹھاس بڑھانے کے لیے'
  },
  'tiger-p-high': {
    en: 'High-Phosphorus suspension gel for root initiation, tillering & profuse flowering',
    ar: 'جل معلق عالي الفسفور لتنشيط التزهير وتجذير النبات وتحفيز البراعم',
    ur: 'ہائی فاسفورس جیل کھاد - جڑوں کے پھیلاؤ اور بھرپور پھولداری کے لیے'
  },
  'sol-max': {
    en: 'Soluble elemental micronized liquid sulfur with acidic soil correction & disinfectant effects',
    ar: 'كبريت سائل مركز لمعادلة قلوية التربة ومكافحة الفطريات',
    ur: 'مائع سلفر - مٹی کی کھاری پن کی اصلاح اور پھپھوندی کا قدرتی علاج'
  },
  'salt-stop': {
    en: 'High-efficiency calcium polyelectrolyte soil desalinizer & sodium replacer',
    ar: 'مصلح الملوحة المتطور وطارد الصوديوم من منطقة الجذور والمياه الكلسية',
    ur: 'نمکیات توڑ مائع - زمین کے کلر اور نمکیات کا موثر ترین خاتمہ'
  },
  'angela': {
    en: 'Advanced hormonal flowering inducer, fruit set regulator & anti-drop formula',
    ar: 'منظم نمو وتزهير متقدم لزيادة العقد ومنع تساقط الثمار والأزهار',
    ur: 'پھولدار ہارمونز اور پھل کو گرنے سے روکنے والا خصوصی فارمولا'
  },
  'ph-best': {
    en: 'Spray tank water acidifier, hardness reducer & fertilizer absorption booster',
    ar: 'مخفض حموضة مياه الرش ومعادل العسورة لتحسين فاعلية المبيدات والأسمدة',
    ur: 'اسپرے کے پانی کا پی ایچ اور کھاری پن کم کرنے والا خصوصی سلوشن'
  }
};

// 3. Localized Badges, Appearance & Packaging
export const localizedAttributes: Record<string, {
  badge: { en: string; ar: string; ur: string };
  appearance: { en: string; ar: string; ur: string };
  packaging: { en: string; ar: string; ur: string };
}> = {
  'challenger': {
    badge: { en: 'Best-Selling Soil Conditioner', ar: 'الأكثر مبيعاً لتحسين التربة', ur: 'سب سے زیادہ فروخت ہونے والا' },
    appearance: { en: '100% Water-Soluble Powder', ar: 'مسحوق ذائب في الماء ۱۰۰٪', ur: '۱۰۰٪ پانی میں حل پذیر پاؤڈر' },
    packaging: { en: 'High-grade Bucket & Pouch', ar: 'عبوات وأكياس عالية الجودة', ur: 'پریمیم بالٹی اور بیگ' }
  },
  'humifarm': {
    badge: { en: 'Enriched Liquid Formulation', ar: 'تركيبة سائلة مدعمة بـ NPK', ur: 'طاقتور مائع فارمولیشن' },
    appearance: { en: 'Dark Brown Viscous Liquid', ar: 'سائل بني داكن مركز', ur: 'گاڑھا گہرا بھورا مائع' },
    packaging: { en: '5 & 20 Liter Containers', ar: 'جوالين ٥ و ٢٠ لتراً', ur: '۵ اور ۲۰ لیٹر گیلن' }
  },
  'jumper': {
    badge: { en: 'Rapid Rooting Booster', ar: 'محفز التجذير السريع', ur: 'جڑوں کا فاسٹ بوسٹر' },
    appearance: { en: 'Amber Bioactive Liquid', ar: 'سائل كهرماني نشط حيوياً', ur: 'عنبر مائع بایو ایکٹیو' },
    packaging: { en: '1 & 5 Liter Bottles', ar: 'عبوات ١ و ٥ لترات', ur: '۱ اور ۵ لیٹر بوتل' }
  },
  'full-charger': {
    badge: { en: 'All-in-One Plant Vitalizer', ar: 'منشط حيوي شامل', ur: 'آل ان ون وائٹلائزر' },
    appearance: { en: 'Dark Concentrated Suspension', ar: 'معلق سائل غامق مركز', ur: 'مرکوز مائع معلق' },
    packaging: { en: '1 & 5 Liter Gallons', ar: 'عبوات ١ و ٥ لترات', ur: '۱ اور ۵ لیٹر گیلن' }
  },
  'redfol': {
    badge: { en: 'High Ortho-Ortho EDDHA Iron', ar: 'حديد مخلبي عالي الفاعلية', ur: 'اعلیٰ کوالٹی چیلیٹڈ آئرن' },
    appearance: { en: 'Dark Red Micro-Granules', ar: 'حبيبات دقيقة حمراء داكنة', ur: 'گہرے سرخ مائیکرو دانے' },
    packaging: { en: '1 & 5 Kg Premium Foil Bags', ar: 'أكياس ١ و ٥ كغ ألمنيوم', ur: '۱ اور ۵ کلوگرام بیگ' }
  },
  'doping': {
    badge: { en: 'Cold Water Seaweed Extract', ar: 'مستخلص طحالب نقية ۱۰۰٪', ur: 'خالص سمندری الجی ایکسٹریکٹ' },
    appearance: { en: 'Black-Green Soluble Flakes/Liquid', ar: 'سائل أخضر داكن مركز', ur: 'سیاہ مائل سبز حل پذیر مائع' },
    packaging: { en: '1 & 5 Liter Certified Bottles', ar: 'عبوات ١ و ٥ لترات أصلية', ur: '۱ اور ۵ لیٹر بوتل' }
  },
  'siligard': {
    badge: { en: 'Plant Cell Wall Fortifier', ar: 'مقوي جدران الخلايا ومقاوم الحرارة', ur: 'سیل وال فورٹیفائر' },
    appearance: { en: 'Dense Translucent Liquid', ar: 'سائل شفاف عالي الكثافة', ur: 'شفاف گاڑھا مائع' },
    packaging: { en: '1 & 5 Liter Reinforced Cans', ar: 'عبوات ١ و ٥ لترات', ur: '۱ اور ۵ لیٹر کین' }
  },
  'stormy': {
    badge: { en: 'Pure Free L-Amino Acids', ar: 'أحماض أمينية نقية L-Alpha', ur: 'خالص فری امینو ایسڈز' },
    appearance: { en: 'Amber-Brown Soluble Liquid', ar: 'سائل كهرماني بني قابل للذوبان', ur: 'حل پذیر عنبری مائع' },
    packaging: { en: '1 & 5 Liter Sealed Bottles', ar: 'عبوات ١ و ٥ لترات محكمة الغلق', ur: '۱ اور ۵ لیٹر بوتل' }
  },
  'fiction': {
    badge: { en: 'High-Bioavailability Ca + B', ar: 'كالسيوم بورون عالي الامتصاص', ur: 'ہائی ایبسورپشن کیلشیم بوران' },
    appearance: { en: 'Clear Liquid Solution', ar: 'محلول سائل رائق', ur: 'صاف مائع سلوشن' },
    packaging: { en: '1 & 5 Liter Industrial Packs', ar: 'عبوات ١ و ٥ لترات صناعية', ur: '۱ اور ۵ لیٹر پیک' }
  },
  'top-star': {
    badge: { en: 'Organic Vegetative Accelerator', ar: 'مسرع النمو الخضري العضوي', ur: 'نامیاتی نباتاتی پروموٹر' },
    appearance: { en: 'Rich Dark Brown Liquid', ar: 'سائل بني داكن غني', ur: 'گہرا بھورا مائع' },
    packaging: { en: '5 & 20 Liter Fertigation Cans', ar: 'جوالين ٥ و ٢٠ لتراً للتسميد', ur: '۵ اور ۲۰ لیٹر کین' }
  },
  'tiger-k-high': {
    badge: { en: 'Max-Concentration Potassium Gel', ar: 'جل عالي التركيز بالبوتاسيوم', ur: 'ہائی پوٹاش سسپنشن جیل' },
    appearance: { en: 'Viscous Gel Paste', ar: 'معجون جل عالي اللزوجة', ur: 'گاڑھا جیل پیسٹ' },
    packaging: { en: '5 & 10 Kg Sealed Tubs', ar: 'أوعية محكمة ٥ و ١٠ كغ', ur: '۵ اور ۱۰ کلوگرام ڈبہ' }
  },
  'tiger-p-high': {
    badge: { en: 'Max-Concentration Phosphorus Gel', ar: 'جل عالي التركيز بالفسفور', ur: 'ہائی فاسفورس سسپنشن جیل' },
    appearance: { en: 'Viscous Gel Paste', ar: 'معجون جل عالي اللزوجة', ur: 'گاڑھا جیل پیسٹ' },
    packaging: { en: '5 & 10 Kg Sealed Tubs', ar: 'أوعية محكمة ٥ و ١٠ كغ', ur: '۵ اور ۱۰ کلوگرام ڈبہ' }
  },
  'sol-max': {
    badge: { en: 'Micronized Liquid Sulfur', ar: 'كبريت سائل فائق النعومة', ur: 'مائیکرونائزڈ مائع سلفر' },
    appearance: { en: 'Yellow Viscous Suspension', ar: 'معلق أصفر كثيف', ur: 'پیلا گاڑھا معلق' },
    packaging: { en: '5 & 20 Liter Heavy-Duty Cans', ar: 'جوالين ٥ و ٢٠ لتراً متينة', ur: '۵ اور ۲۰ لیٹر کین' }
  },
  'salt-stop': {
    badge: { en: 'Saline Soil & Sodium Reducer', ar: 'طارد الأملاح والصوديوم الفعال', ur: 'موثر اینٹی سیلینٹی سلوشن' },
    appearance: { en: 'Clear Penetrating Liquid', ar: 'سائل رائق عالي النفاذية', ur: 'شفاف سرایت پذیر مائع' },
    packaging: { en: '5 & 20 Liter Fertigation Gallons', ar: 'جوالين ٥ و ٢٠ لتراً للري', ur: '۵ اور ۲۰ لیٹر گیلن' }
  },
  'angela': {
    badge: { en: 'Flowering & Fruit-Set Regulator', ar: 'منظم التزهير والعقد المتطور', ur: 'فلاورنگ اور فروٹ سیٹ ریگولیٹر' },
    appearance: { en: 'Pale Gold Active Liquid', ar: 'سائل ذهبي فاتح نشط', ur: 'ہلکا سنہری ایکٹیو مائع' },
    packaging: { en: '1 Liter Precision Bottle', ar: 'عبوة ١ لتر دقيقة المعايرة', ur: '۱ لیٹر بوتل' }
  },
  'ph-best': {
    badge: { en: 'Water & Soil pH Acidifier', ar: 'معادل ومنظم حموضة المياه', ur: 'پی ایچ ریگولیٹر اور ایسڈیفائر' },
    appearance: { en: 'Concentrated Acidifying Solution', ar: 'محلول تحميض مركز', ur: 'مرکوز ایسڈیفائنگ مائع' },
    packaging: { en: '1 & 5 Liter Resistant Bottles', ar: 'عبوات ١ و ٥ لترات مقاومة للأحماض', ur: '۱ اور ۵ لیٹر بوتل' }
  }
};

// 3.5 Localized Benefits for all 16 products
export const localizedBenefits: Record<string, { en: string[]; ar: string[]; ur: string[] }> = {
  'challenger': {
    en: [
      'Restores compacted and saline soil structure, expanding root exploration capacity.',
      'Balances soil nutrient availability and promotes root uptake of micronutrients.',
      'Minimizes drought, salinity, and temperature stresses while improving disease resistance.',
      'Facilitates high assimilation of phosphorus, chelated iron, and zinc.',
      'Increases marketable yield, improve produce quality, and raises fruit Brix index.'
    ],
    ar: [
      'تحسين بنية التربة الفيزيائية وتوسيع انتشار المجموع الجذري.',
      'معادلة امتصاص العناصر الغذائية الصغرى والكبرى في التربة.',
      'تقليل إجهادات الملوحة والجفاف والحرارة ورفع مناعة المحصول.',
      'تحرير الفوسفور والحديد المقيد في الأراضي الكلسية.',
      'زيادة الإنتاجية وجودة المحصول ورفع نسبة السكر (بريكس) في الثمار.'
    ],
    ur: [
      'مٹی کی ساخت کی اصلاح اور جڑوں کے گچھے دار پھیلاؤ میں معاون۔',
      'مٹی میں موجود خوراک کے متوازن جذب کی صلاحیت میں اضافہ۔',
      'خشک سالی، کلر اور شدید گرمی کے تناؤ کو کم کر کے بیماریوں کے خلاف قوت مدافعت۔',
      'مائیکرو اور میکرو غذائی اجزاء (فاسفورس، آئرن، زنک) کے جذب میں آسانی۔',
      'فصل کی پیداواری صلاحیت، وزن اور پھل کی مٹھاس (Brix) میں اضافہ۔'
    ]
  },
  'humifarm': {
    en: [
      'Increases soil cation exchange capacity (CEC) and nutrient retention.',
      'Supplies bioavailable NPK and organic humic carbon around active roots.',
      'Encourages beneficial rhizosphere microorganisms and improves root aeration.',
      'Mitigates salinity stress in fertigation and surface irrigation systems.'
    ],
    ar: [
      'رفع السعة التبادلية الكاتيونية (CEC) وقدرة التربة على الاحتفاظ بالعناصر.',
      'توفير عناصر NPK والمواد العضوية النشطة في منطقة الجذور.',
      'تنشيط البكتيريا النافعة في التربة وتحسين تهوية الجذور.',
      'تقليل أضرار الملوحة في شبكات الري الحديثة والغمر.'
    ],
    ur: [
      'مٹی کی کیٹائن ایکسچینج کیپیسٹی اور خوراک روکنے کی صلاحیت میں اضافہ۔',
      'جڑوں کے قریب فوری دستیاب NPK اور ہیومک کاربن کی فراہمی۔',
      'مٹی کے فائدہ مند جراثیم کی سرگرمی اور جڑوں کی سانس لینے میں بہتری۔',
      'ڈرپ اور فلڈ ایریگیشن میں نمکیاتی دباؤ کو کم کرنے میں مددگار۔'
    ]
  },
  'jumper': {
    en: [
      'Stimulates secondary and lateral feeder root formation rapidly.',
      'Decreases transplant shock in nurseries and orchards.',
      'Accelerates early crop establishment and uniform vegetative development.',
      'Improves water and mineral absorption in cold or compacted soils.'
    ],
    ar: [
      'تنشيط وتكوين الشعيرات الجذرية الثانوية بسرعة فائقة.',
      'تقليل صدمة نقل الشتلات في البيوت المحمية والحقول المفتوحة.',
      'تسريع البداية المبكرة لنمو المحصول وتوحيد التجانس الخضري.',
      'رفع كفاءة امتصاص الماء والعناصر في الأراضي الباردة أو المتماسكة.'
    ],
    ur: [
      'ثانوی اور بال دار باریک جڑوں کی فوری اور تیز رفتار پیدائش۔',
      'پنیری کی منتقلی کے بعد پودوں کے مرجھانے اور صدمے کا خاتمہ۔',
      'شروع کے دنوں میں پودے کے یکساں اور تیز رفتار پھیلاؤ میں معاون۔',
      'سخت اور ٹھنڈی زمین میں پانی اور خوراک کے جذب کو تیز تر بناتا ہے۔'
    ]
  },
  'full-charger': {
    en: [
      'Comprehensive bio-energizer providing seaweed extracts and L-amino acids.',
      'Corrects hidden micronutrient deficiencies rapidly.',
      'Increases chlorophyll concentration and photosynthetic rate.',
      'Protects crops against adverse environmental stresses.'
    ],
    ar: [
      'منشط حيوي شامل يحتوي على مستخلصات الطحالب البحرية والأحماض الأمينية.',
      'علاج سريع وفعال لنقص العناصر الصغرى غير الظاهر.',
      'زيادة تركيز الكلوروفيل ومعدل البناء الضوئي في الأوراق.',
      'حماية متكاملة للنبات ضد تقلبات الطقس والظروف المناخية القاسية.'
    ],
    ur: [
      'سمندری کائی اور امینو ایسڈز سے بھرپور مکمل حیاتیاتی انرجی ٹانک۔',
      'پودوں میں مائیکرو نیوٹرینٹس کی پوشیدہ کمی کا فوری علاج۔',
      'پتوں میں کلوروفل اور ضیائی تالیف (Photosynthesis) کی رفتار میں اضافہ۔',
      'شدید موسمی اتار چڑھاؤ کے خلاف پودے کو پائیدار تحفظ۔'
    ]
  },
  'redfol': {
    en: [
      'High ortho-ortho (4.8%) EDDHA iron isomer ensures stability up to pH 11.',
      'Instantly reverses interveinal iron chlorosis in leaves.',
      'Promotes intense dark green foliar coloration and active enzymes.',
      'Resistant to calcium carbonate blockages in heavy alkaline soils.'
    ],
    ar: [
      'نسبة عالية من الأورثو-أورثو (٤.٨٪) تضمن ثبات الحديد حتى درجة حموضة ١١.',
      'علاج فوري وحاسم للاصفرار الورقي (الكلوروز) الناتج عن نقص الحديد.',
      'استعادة اللون الأخضر الداكن للأوراق وتنشيط الإنزيمات الحيوية.',
      'مقاوم للتثبيت بكربونات الكالسيوم في الأراضي الجيرية الثقيلة.'
    ],
    ur: [
      'اعلیٰ ترین ارتھو-ارتھو (۴.۸٪) کی بدولت ۱۱ پی ایچ تک مٹی میں لوہے کا استحکام۔',
      'پتوں کی رگوں کے درمیان پیلے پن (آئرن کلوروسس) کا فوری خاتمہ۔',
      'پتوں کو گہرا سبز رنگ اور انزائمز کو نئی زندگی بخشتا ہے۔',
      'چونے والی کھاری مٹی میں لوہے کے قفل ہونے کے عمل کو روکتا ہے۔'
    ]
  },
  'doping': {
    en: [
      '100% pure cold-processed Ascophyllum nodosum marine seaweed extract.',
      'Enriched with natural betaines, mannitol, and phytohormones.',
      'Triggers natural plant defenses and stress tolerance genes.',
      'Enhances fruit sizing, uniform color, and post-harvest shelf life.'
    ],
    ar: [
      'مستخلص طحالب بحرية نقية ۱۰۰٪ معالجة بالبارد من المحيط الأطلسي.',
      'غني بالبيتين الطبيعي، المانيتول، والأكسينات والسيتوكينينات.',
      'تحفيز الجينات الدفاعية للنبات ورفع مقاومة الصقيع والحرارة.',
      'تحسين تجانس حجم ولون الثمار وإطالة فترة التخزين بعد الحصاد.'
    ],
    ur: [
      '۱۰۰٪ خالص ٹھنڈے پانی سے کشیدہ نارویجن سمندری الجی کا عرق۔',
      'قدرتی بیٹائن، مانیٹول اور فائیٹوہارمونز سے بھرپور۔',
      'پودے کے مدافعتی نظام کو متحرک کر کے سردی اور گرمی کی مزاحمت پیدا کرتا ہے۔',
      'پھل کے سائز، چمکدار رنگ اور شیلف لائف میں زبردست اضافہ۔'
    ]
  },
  'siligard': {
    en: [
      'Reinforces plant epidermal cells and thickens cuticle layer.',
      'Forms a physical barrier against sucking insects and fungal hyphae penetration.',
      'Reduces transpirational water loss during scorching summer heat.',
      'Prevents lodging in wheat and rice by hardening stems.'
    ],
    ar: [
      'تقوية جدر الخلايا النباتية وزيادة سماكة طبقة الكيوتيكل الخارجية.',
      'تكوين حاجز فيزيائي طبيعي ضد الحشرات الثاقبة الماصة وجراثيم الفطريات.',
      'تقليل فقد الماء بالنتح أثناء فترات القيظ والحرارة العالية.',
      'منع رقاد محاصيل القمح والأرز عبر تقوية القش والسيقان.'
    ],
    ur: [
      'پودے کے خلیات کی بیرونی دیوار کو مضبوط اور موٹا بناتا ہے۔',
      'رس چوسنے والے کیڑوں اور پھپھوندی کے خلاف قدرتی ڈھال تیار کرتا ہے۔',
      'شدید گرمیوں میں پتوں سے پانی کے بخارات بن کر اڑنے کو کم کرتا ہے۔',
      'گندم اور چاول کی فصل کو گرنے (Lodging) سے محفوظ رکھتا ہے۔'
    ]
  },
  'stormy': {
    en: [
      'High concentration of 80% free L-amino acids ready for instant assimilation.',
      'Swift recovery from pesticide burn, hail damage, frost, and salinity shock.',
      'Conserves plant metabolic energy during critical physiological phases.',
      'Acts as a powerful carrier for foliar micronutrient applications.'
    ],
    ar: [
      'تركيز عالي يصل إلى ٨٠٪ من الأحماض الأمينية الحرة سريعة الامتصاص.',
      'شفاء عاجل للنبات من صدمات المبيدات، البرد، الصقيع، والملوحة.',
      'توفير الطاقة الحيوية للنبات أثناء فترات النمو الحرجة والتزهير.',
      'يعمل كناقل كخلبي فائق القوة لرفع كفاءة الأسمدة الورقية الأخرى.'
    ],
    ur: [
      '۸۰٪ خالص فری ایل-امینو ایسڈز جو پودے میں فوری سرایت کر جاتے ہیں۔'
    ]
  },
  'fiction': {
    en: [
      'Synergistic chelated Calcium and Boron formulation prevents blossom-end rot.',
      'Strengthens pollen tube viability and maximizes flower fertilization.',
      'Reduces fruit cracking and splitting in citrus, tomato, pomegranate, and stone fruits.',
      'Extends storage life and firmness of harvested fruits and vegetables.'
    ],
    ar: [
      'تركيبة متكاملة من الكالسيوم والبورون تمنع تعفن الطرف الزهري.',
      'تقوية حبوب اللقاح وأنبوب التلقيح لزيادة نسبة العقد والإخصاب.',
      'منع تشقق الثمار في الطماطم، الرمان، الحمضيات، والفاكهة ذات النواة الحجرية.',
      'زيادة صلابة الثمار وإطالة عمرها التسويقي أثناء النقل والتخزين.'
    ],
    ur: [
      'کیلشیم اور بوران کا سائنسی ملاپ جو بلاسم اینڈ روٹ کی بیماری کو روکتا ہے۔',
      'پولن ٹیوب کو طاقت بخش کر پھولوں کے زرپاشی کے عمل کو کامیاب بناتا ہے۔',
      'ٹماٹر، انار اور باغات میں پھل کے پھٹنے اور داغدار ہونے کا خاتمہ۔',
      'پھلوں اور سبزیوں کی چمک اور منڈی تک ترسیل میں سختی کو برقرار رکھتا ہے۔'
    ]
  },
  'top-star': {
    en: [
      'Readily available organic nitrogen combined with functional amino acids.',
      'Triggers rapid spring vegetative flush without inducing nitrate accumulation.',
      'Stimulates chlorophyll synthesis and broadens dark green leaf surface.',
      'Safeguards soil microbial health compared to synthetic nitrogen salts.'
    ],
    ar: [
      'نيتروجين عضوي سريع الجاهزية مدعم بأحماض أمينية نشطة حيوياً.',
      'تحفيز اندفاع النمو الخضري الربيعي السريع دون تراكم النترات الضارة.',
      'تنشيط تكوين الكلوروفيل وتوسيع المساحة الورقية الخضراء.',
      'يحافظ على حيوية التربة وميكروباتها المفيدة مقارنة بالأسمدة الكيماوية الجافة.'
    ],
    ur: [
      'نامیاتی نائٹروجن اور امینو ایسڈز کا مرکب جو پودے کو فوری غذا دیتا ہے۔',
      'بہار کے آغاز میں شاخوں اور پتوں کی تیز رفتار بڑھوتری کا ضامن۔',
      'پتوں کے رقبے کو وسیع اور گہرا سبز بنا کر خوراک بنانے کا عمل تیز کرتا ہے۔',
      'عام نائٹروجن کھادوں کے برعکس مٹی کے قدرتی بیکٹیریا کو محفوظ رکھتا ہے۔'
    ]
  },
  'tiger-k-high': {
    en: [
      'High-analysis 50% Potassium gel paste with zero sedimentation or clogging.',
      'Directly accelerates carbohydrate and sugar translocation into fruits.',
      'Enhances fruit size, weight, pigmentation, and overall market value.',
      'Boosts plant drought endurance by regulating stomatal aperture.'
    ],
    ar: [
      'معجون جل عالي البوتاسيوم ٥٠٪ خالٍ تماماً من الترسيب وانسداد النقاطات.',
      'تسريع مباشر لانتقال الكربوهيدرات والسكريات إلى الثمار والدرنات.',
      'زيادة ملحوظة في حجم، وزن، ولون الثمار وقيمتها التسويقية.',
      'رفع قدرة النبات على تحمل الجفاف عبر تنظيم فتح وإغلاق الثغور الورقية.'
    ],
    ur: [
      '۵۰٪ ہائی پوٹاش جیل کھاد جو ڈرپ نوزلز میں کبھی رکاوٹ نہیں بنتی۔',
      'پھلوں، دانوں اور ٹماٹر وغیرہ میں مٹھاس اور وزن کی فوری منتقلی۔',
      'پھل کا سائز، کشش، رنگت اور مارکیٹ ویلیو نمایاں طور پر بڑھاتی ہے۔',
      'پتوں کے مساموں کو کنٹرول کر کے پانی کی کمی کا مقابلہ کرنے کی صلاحیت۔'
    ]
  },
  'tiger-p-high': {
    en: [
      'High-analysis 50% Phosphorus suspension gel with maximum root bioavailability.',
      'Powers early root branching, crown development, and tillering in cereals.',
      'Induces abundant uniform flower bud differentiation and initiation.',
      'Supplies immediate cellular ATP energy during cold spring temperatures.'
    ],
    ar: [
      'جل معلق عالي الفسفور ٥٠٪ بأعلى جاهزية للامتصاص الجذري.',
      'تنشيط التفرع الجذري المبكر وزيادة عدد الإشطاء في الحبوب.',
      'تحفيز تمايز وبزوغ البراعم الزهرية بكثافة وتجانس تام.',
      'إمداد خلايا النبات بطاقة ATP الفورية أثناء انخفاض درجات الحرارة.'
    ],
    ur: [
      '۵۰٪ فاسفورس جیل کھاد جو جڑوں میں فوری اور مکمل جذب ہوتی ہے۔',
      'گندم اور اناج کی فصلوں میں بھرپور شگوفے اور جڑوں کا جال بناتی ہے۔',
      'پھولوں کے گچھے اور یکساں پھولداری کے عمل کو متحرک کرتی ہے۔',
      'سرد موسم میں پودے کے خلیات کو فوری حیاتیاتی توانائی (ATP) مہیا کرتی ہے۔'
    ]
  },
  'sol-max': {
    en: [
      'Micronized liquid sulfur rapidly oxidizes to reduce soil rhizosphere pH.',
      'Unlocks immobilized phosphorus, iron, and zinc in calcareous soils.',
      'Provides natural systemic fungicidal and acaricidal deterrent effects.',
      'Essential for synthesis of sulfur-containing amino acids.'
    ],
    ar: [
      'كبريت سائل فائق النعومة يتأكسد سريعاً لخفض درجة حموضة التربة الموضعية.',
      'تحرير الفوسفور، الحديد، والزنك المثبت في الأراضي الكلسية.',
      'يوفر حماية فطرية ومقاومة طبيعية للأكاروسات والعناكب في الحقول.',
      'عنصر أساسي في تخليق الأحماض الأمينية الكبريتية والبروتينات النباتية.'
    ],
    ur: [
      'باریک مائع سلفر جو مٹی کے پی ایچ کو کم کر کے زمین کی سختی ختم کرتا ہے۔',
      'چونے والی مٹی میں پھنسے ہوئے فاسفورس، آئرن اور زنک کو آزاد کرواتا ہے۔',
      'جڑوں کی پھپھوندی اور سرخ جوؤں کے خلاف قدرتی مدافعت فراہم کرتا ہے۔',
      'سلفر والے امینو ایسڈز اور پروٹین کی تیاری کے لیے بنیادی عنصر۔'
    ]
  },
  'salt-stop': {
    en: [
      'High-charge calcium complex displaces harmful toxic sodium from soil colloids.',
      'Restores flocculated soil structure and enhances downward water permeability.',
      'Prevents sodium-induced root burning and foliar marginal necrosis.',
      'Lowers electrical conductivity (EC) around root zones effectively.'
    ],
    ar: [
      'مركب كالسيوم عالي الشحنة يطرد الصوديوم السام من حبيبات التربة.',
      'استعادة بنية التربة المفككة وتحسين نفاذية مياه الري إلى العمق.',
      'حماية الجذور من الاحتراق وحواف الأوراق من الجفاف الناتج عن الأملاح.',
      'خفض فعال للناقلية الكهربائية (EC) وتركيز الأملاح في محيط الجذور.'
    ],
    ur: [
      'سوڈیم کے زہریلے آئنز کو مٹی کے ذرات سے خارج کر کے زمین کو زرخیز بناتا ہے۔',
      'مٹی کے مسام کھول کر پانی کو نچلی تہوں تک جذب ہونے میں مدد دیتا ہے۔',
      'جڑوں کے جھلسنے اور پتوں کے کناروں کو نمکیات سے جلنے سے بچاتا ہے۔',
      'جڑوں کے قریب برقی موصلیت (EC) اور نمکیات کے اثر کو فوری گھٹاتا ہے۔'
    ]
  },
  'angela': {
    en: [
      'Precision floral bio-regulator promotes uniform pollination and ovule fertilization.',
      'Stops physiological flower and fruitlet drop caused by temperature fluctuations.',
      'Supplies chelated Boron and Molybdenum for enhanced hormone synthesis.',
      'Produces higher fruit retention and uniform commercial grade yields.'
    ],
    ar: [
      'منظم حيوي دقيق للتزهير يضمن كفاءة التلقيح وإخصاب البويضات.',
      'وقف التساقط الفسيولوجي للأزهار والثمار الصغيرة الناتج عن تقلبات الطقس.',
      'تزويد النبات بالبورون والموليبدنوم المخلبيين لتنشيط التمايز الزهري.',
      'رفع نسبة بقاء الثمار وتحقيق محصول تجاري متجانس وعالي الجودة.'
    ],
    ur: [
      'پھولوں کی پولینیشن اور پھل بننے کے عمل کو منظم کرنے والا خصوصی فارمولا۔',
      'تیز ہوا، گرمی یا سردی کی وجہ سے پھول اور چھوٹے پھل کو گرنے سے روکتا ہے۔',
      'چیلیٹڈ بوران اور مولیبڈینم کی بدولت پھولداری کے ہارمونز کی افزائش۔',
      'پودے پر پھل کی تعداد کو برقرار رکھ کر پیداوار میں غیر معمولی اضافہ۔'
    ]
  },
  'ph-best': {
    en: [
      'Specialized spray water buffer brings pH down to optimum 5.5 - 6.2.',
      'Neutralizes bicarbonate hardness and prevents alkaline hydrolysis of pesticides.',
      'Increases foliar absorption and penetration of agrochemicals and nutrients.',
      'Cleans drip irrigation emitters and prevents mineral encrustation.'
    ],
    ar: [
      'منظم ومخفض لحموضة ماء الرش ليصل إلى المستوى المثالي ٥.٥ - ٦.٢.',
      'معادلة عسورة البيكربونات ومنع التحلل القلوي للمبيدات والأسمدة.',
      'رفع كفاءة النفاذية الورقية وامتصاص العناصر المغذية بشكل ملحوظ.',
      'تنظيف شبكات ونقاطات الري بالتنقيط ومنع ترسب الأملاح والتكلسات.'
    ],
    ur: [
      'اسپرے کے پانی کا پی ایچ مثالی سطح ۵.۵ سے ۶.۲ تک لاتا ہے۔',
      'سخت اور کھارے پانی میں ادویات اور کھادوں کے ناکارہ ہونے کا سدباب۔',
      'پتوں کی سطح سے کھاد اور ادویات کے اندر داخل ہونے کی رفتار کو ۵ گنا کرتا ہے۔',
      'ڈرپ ایریگیشن کی نالیوں اور نوزلز کو چونے کے جمنے سے پاک رکھتا ہے۔'
    ]
  }
};

// 4. Crop and Method translations for dosage tables
export const translateCrop = (crop: string, lang: Language): string => {
  if (lang === 'fa') return crop;
  
  const map: Record<string, { en: string; ar: string; ur: string }> = {
    'درختان میوه': { en: 'Fruit Orchards', ar: 'أشجار الفاكهة', ur: 'پھلدار باغات' },
    'سبزی و صیفی': { en: 'Vegetables & Field Crops', ar: 'الخضروات والمحاصيل', ur: 'سبزیاں اور فصلی پیداوار' },
    'سبزی و صیفی‌جات': { en: 'Vegetables & Field Crops', ar: 'الخضروات والمحاصيل', ur: 'سبزیاں اور فصلی پیداوار' },
    'گلخانه‌ای': { en: 'Greenhouse Crops', ar: 'البيوت المحمية', ur: 'ٹنل فارمنگ اور گرین ہاؤس' },
    'گیاهان زینتی': { en: 'Ornamental Plants', ar: 'نباتات الزينة', ur: 'آرائشی پودے اور نرسری' },
    'مزارع غلات (گندم، جو)': { en: 'Cereal Crops (Wheat, Barley)', ar: 'محاصيل الحبوب (قمح، شعير)', ur: 'اناج کی فصلیں (گندم، جو)' },
    'مرکبات و پسته': { en: 'Citrus & Pistachio Orchards', ar: 'الحمضيات والفستق', ur: 'سٹرس اور باغات' },
    'تنظیم pH آب سمپاشی': { en: 'Spray Tank Water pH Regulation', ar: 'ضبط حموضة ماء الرش', ur: 'اسپرے ٹینک کے پانی کا پی ایچ' },
    'خاک‌های شدیداً قلیایی (pH > 8)': { en: 'Alkaline Soils (pH > 8)', ar: 'الترب شديدة القلوية', ur: 'سخت کھاری مٹی (pH > 8)' },
    'سیستم‌های آبیاری قطره‌ای': { en: 'Drip Irrigation Systems', ar: 'شبكات الري بالتنقيط', ur: 'ڈرپ ایریگیشن سسٹمز' }
  };

  const found = map[crop.trim()];
  if (found) return found[lang as 'en' | 'ar' | 'ur'] || crop;
  return crop;
};

export const translateMethod = (method: string, lang: Language): string => {
  if (lang === 'fa') return method;

  const map: Record<string, { en: string; ar: string; ur: string }> = {
    'همراه آب آبیاری': { en: 'With Irrigation Water (Fertigation)', ar: 'مع مياه الري', ur: 'پانی کے ساتھ فلڈ / ڈرپ' },
    'محلول‌پاشی برگی': { en: 'Foliar Spraying', ar: 'رش ورقي', ur: 'پتوں پر اسپرے' },
    'چالکود زمستانه': { en: 'Winter Deep Banding', ar: 'تسميد خندقي شتوي', ur: 'سردیوں میں کھاد ڈالنا' },
    'همراه آب آبیاری در ۱۰۰۰ متر مربع': { en: 'Fertigation per 1000 m²', ar: 'مع مياه الري لكل ١٠٠٠ م²', ur: 'فی ۱۰۰۰ مربع میٹر پانی کے ساتھ' },
    'محلول در تانکر سمپاشی': { en: 'Mixed in Spray Tank', ar: 'محلول في خزان الرش', ur: 'اسپرے ٹینک میں ملا کر' },
    'شستشوی املاح لوله‌ها': { en: 'Flushing Pipe Mineral Salts', ar: 'غسيل أنابيب الري من الأملاح', ur: 'پائپوں کی صفائی' }
  };

  const found = map[method.trim()];
  if (found) return found[lang as 'en' | 'ar' | 'ur'] || method;
  return method;
};

export const translateTiming = (timing: string | undefined, lang: Language): string => {
  if (!timing || lang === 'fa') return timing || '';

  const map: Record<string, { en: string; ar: string; ur: string }> = {
    'آغاز فصل رشد': { en: 'Beginning of growth season', ar: 'بداية موسم النمو', ur: 'نمو کے سیزن کے آغاز میں' },
    'قبل از گلدهی و بعد از تشکیل میوه': { en: 'Before blooming & after fruit set', ar: 'قبل التزهير وبعد عقد الثمار', ur: 'پھول آنے سے پہلے اور پھل بننے کے بعد' },
    'در زمان فندقی شدن میوه': { en: 'At fruit hazelnut stage', ar: 'مرحلة تحجيم الثمار', ur: 'پھل بننے کے ابتدائی مرحلے پر' },
    'در طول مراحل رویشی و میوه‌دهی': { en: 'During vegetative and fruiting cycles', ar: 'طوال مراحل النمو والإثمار', ur: 'نباتاتی نشوونما اور پھل کے دوران' },
    'قبل از افزودن سموم یا کودها': { en: 'Before adding pesticides or fertilizers', ar: 'قبل إضافة المبيدات أو الأسمدة', ur: 'ادویات یا کھاد ملانے سے پہلے' },
    'دوره رشد ریشه': { en: 'Active root growth stage', ar: 'فترة نمو الجذور النشط', ur: 'جڑوں کے ایکٹیو گروتھ پیریڈ میں' },
    'ماهیانه یکبار': { en: 'Once a month', ar: 'مرة شهرياً', ur: 'ماہانہ ایک بار' }
  };

  const found = map[timing.trim()];
  if (found) return found[lang as 'en' | 'ar' | 'ur'] || timing;
  return timing;
};

// 5. Urdu translations for Agronomic Detail Data (H1, Meta, Intro, Analysis, Cautions, FAQs)
export const urduDetailData: Record<string, {
  h1Title: string;
  metaTitle: string;
  metaDescription: string;
  longIntro: string;
  analysis: string[];
  cautions: string[];
}> = {
  'challenger': {
    h1Title: 'چلنجر (Challenger) - ۱۰۰٪ خالص ہیومک ایسڈ پاؤڈر مع پوٹاشیم اور مائیکرو نیوٹرینٹس',
    metaTitle: 'چلنجر ہیومک ایسڈ پاؤڈر | پیشگامان پائیدار فلات نیک',
    metaDescription: 'چلنجر ۱۰۰٪ پانی میں حل پذیر ہیومک ایسڈ پاؤڈر مع فلولک ایسڈ، پوٹاشیم اور مائیکرو نیوٹرینٹس۔ مٹی کی اصلاح، جڑوں کی مضبوطی اور پیداوار میں اضافہ۔',
    longIntro: 'چلنجر (Challenger) پاؤڈر جدید سائنسی زراعت میں مٹی کی ساخت بہتر بنانے والا اعلیٰ ترین نامیاتی پروڈکٹ ہے۔ یہ پروڈکٹ کلر زدہ، سخت اور نمکیاتی مٹی کی فزیکل اور کیمیکل خصوصیات کو بحال کرتا ہے۔ مٹی میں غیر متحرک فاسفورس اور آئرن کو آزاد کروا کر پودے کی جڑوں تک پہنچاتا ہے اور کھادوں کے ضیاع کو روکتا ہے۔',
    analysis: [
      'فعال ہیومک ایسڈ (Active Humic Acid): ۶۵٪',
      'بائیو ایکٹیو فلوک ایسڈ (Bioactive Fulvic Acid): ۱۵٪',
      'پوٹاشیم اکسائیڈ (K2O): ۱۰٪',
      'چیلیٹڈ مائیکرو نیوٹرینٹس (Fe, Zn, Mn, Mg): ۲.۵٪',
      'پانی میں حل پذیری: ۱۰۰٪ بغیر کسی رسوب کے'
    ],
    cautions: [
      'بڑے پیمانے پر اسپرے یا فلڈ کرنے سے پہلے چھوٹا جار ٹیسٹ ضرور کریں۔',
      'انتہائی تیزابی کیمیکلز یا معدنی اسپرے آئل کے ساتھ مکس کرنے سے گریز کریں۔',
      'خشک اور ٹھنڈی جگہ پر ۵ سے ۳۵ ڈگری سینٹی گریڈ کے درمیان اسٹور کریں۔'
    ]
  },
  'humifarm': {
    h1Title: 'ہیومی فارم (Humifarm) - این پی کے اور نامیاتی مادوں سے بھرپور مائع ہیومک ایسڈ',
    metaTitle: 'ہیومی فارم مائع کھاد | پیشگامان پائیدار فلات نیک',
    metaDescription: 'ہیومی فارم مائع ہیومک ایسڈ مع NPK اور بائیو ایکٹیو نامیاتی مادے۔ جڑوں کی وسعت، مٹی کی ہوا داری اور پیداوار میں زبردست اضافہ۔',
    longIntro: 'ہیومی فارم (Humifarm) قدرتی ہیومک اور فلوک ایسڈ کے ساتھ متوازن نائٹروجن، فاسفورس اور پوٹاشیم پر مشتمل ایک طاقتور مائع فارمولیشن ہے۔ یہ جدید ڈرپ اور فلڈ ایریگیشن میں فوری جذب ہو کر پودے کے لیے غذائی دستیابی کو کئی گنا بڑھاتا ہے۔',
    analysis: [
      'مائع ہیومک و فلوک ایسڈ: ۱۵٪',
      'نائٹروجن، فاسفورس اور پوٹاشیم (NPK): متوازن ۶٪',
      'کل نامیاتی مادہ (Organic Matter): ۲۵٪',
      'پی ایچ (pH): ۷.۵ تا ۸'
    ],
    cautions: [
      'استعمال سے پہلے گیلن کو اچھی طرح ہلائیں۔',
      'تیزابی ادویات کے ساتھ اختلاط سے پرہیز کریں۔',
      'براہ راست دھوپ سے دور رکھیں۔'
    ]
  },
  'jumper': {
    h1Title: 'جمپر (Jumper) - جڑوں کی غیر معمولی وسعت اور پودوں کی مضبوطی کا بایو اسٹیمولنٹ',
    metaTitle: 'جمپر روٹنگ بایو اسٹیمولنٹ | پیشگامان',
    metaDescription: 'جمپر جڑوں کی مضبوطی، نئی پھوٹ اور نرسری شتلات کی فوری گرفت کے لیے مخصوص فارمولیشن۔',
    longIntro: 'جمپر (Jumper) پودے کی جڑوں کو تیزی سے پھیلانے اور زمین کی گہرائی سے پانی اور غذائی اجزاء حاصل کرنے کے لیے تیار کردہ خصوصی محرک ہے۔ یہ نرسری کی منتقلی کے بعد پودے کے مرجھانے کے خطرے کو ختم کرتا ہے۔',
    analysis: [
      'قدرتی روٹنگ ایکٹیویٹرز: ۱۵٪',
      'فری ایل-امینو ایسڈز: ۸٪',
      'نامیاتی فاسفورس و پوٹاشیم: ۱۰٪',
      'مائیکرو ایلیمنٹس: زنک و بوران'
    ],
    cautions: [
      'شام کے وقت یا صبح سویرے استعمال بہترین ہے۔',
      'سفارش کردہ مقدار سے زیادہ استعمال نہ کریں۔'
    ]
  },
  'full-charger': {
    h1Title: 'فل چارجر (Full Charger) - مکمل پلانٹ انرجی بوسٹر مع سی ویڈ اور امینو ایسڈز',
    metaTitle: 'فل چارجر انرجی بوسٹر | پیشگامان پائیدار فلات نیک',
    metaDescription: 'فل چارجر پودوں کی طاقت بڑھانے، پتوں کا پیلا پن دور کرنے اور فوری نشوونما کا مکمل مرکب۔',
    longIntro: 'فل چارجر (Full Charger) پودوں کے لیے ایک مکمل وٹامن اور انرجی ٹانک کی حیثیت رکھتا ہے۔ سمندری کائی اور امینو ایسڈز کا باہمی ملاپ پودے کے خلیات کو متحرک کر کے فصل کے گرنے یا رکنے کے اثرات کو فوری زائل کرتا ہے۔',
    analysis: [
      'سمندری کائی کا عرق (Seaweed Extract): ۱۰٪',
      'امینو ایسڈز: ۱۲٪',
      'مائیکرو ایلیمنٹس (Fe, Zn, Mn, Cu, B): ۶٪',
      'نامیاتی کاربن: ۱۵٪'
    ],
    cautions: [
      'تیز دھوپ اور دوپہر کے وقت اسپرے نہ کریں۔',
      'بچوں کی پہنچ سے دور رکھیں۔'
    ]
  },
  'redfol': {
    h1Title: 'ریڈ فول (Redfol) - خالص چیلیٹڈ آئرن EDDHA 6% برائے کلر اور سخت مٹی',
    metaTitle: 'ریڈ فول آئرن چیلیٹ EDDHA | پیشگامان',
    metaDescription: 'ریڈ فول اعلیٰ ترین ارتھو-ارتھو تناسب کا حامل چیلیٹڈ آئرن۔ زردی مائل پتوں کا فوری علاج۔',
    longIntro: 'ریڈ فول (Redfol) ۶ فیصد خالص EDDHA آئرن چیلیٹ ہے جس میں ارتھو-ارتھو کی مقدار ۴.۸ فیصد ہے۔ یہ کھاری اور چونے والی مٹی میں بھی پودے کی جڑوں تک لوہا پہنچانے کا سب سے پائیدار اور آزمودہ ذریعہ ہے۔',
    analysis: [
      'خالص آئرن (Fe): ۶٪',
      'ارتھو-ارتھو آئسومر (Ortho-Ortho): ۴.۸٪',
      'مستحکم پی ایچ حد (pH Stability): ۳ تا ۱۱',
      'پانی میں ۱۰۰٪ حل پذیر مائیکرو گرینولز'
    ],
    cautions: [
      'روشنی کے سامنے کھلی نہ چھوڑیں کیونکہ آئرن چیلیٹ روشنی سے متاثر ہوتا ہے۔',
      'زمین میں نمی کی موجودگی میں استعمال کریں۔'
    ]
  },
  'doping': {
    h1Title: 'ڈوپنگ (Doping) - خالص نارویجن سمندری کائی (Ascophyllum nodosum) کا عرق',
    metaTitle: 'ڈوپنگ سی ویڈ ایکسٹریکٹ | پیشگامان پائیدار فلات نیک',
    metaDescription: 'ڈوپنگ خالص ناروے کی سمندری کائی کا کولڈ واٹر ایکسٹریکٹ برائے انسدادِ گرمی، سردی اور خشکی۔',
    longIntro: 'ڈوپنگ (Doping) قطبی سمندروں کی خاص کائی Ascophyllum nodosum سے سرد کشیدگی کے جدید طریقہ کار سے تیار کیا گیا ہے۔ یہ قدرتی ہارمونز (آکسن، سائٹوکائنن، جبرلین) اور قدرتی منرلز کا خزانہ ہے جو فصل کو شدید گرمی اور پیاس کے تناؤ سے محفوظ رکھتا ہے۔',
    analysis: [
      'خالص سمندری کائی کا عرق: ۱۰۰٪',
      'الجینک ایسڈ (Alginic Acid): ۱۶٪',
      'قدرتی پوٹاشیم (K2O): ۱۸٪',
      'قدرتی فائیٹوہارمونز و وٹامنز'
    ],
    cautions: [
      'اسپرے کے لیے صاف پانی کا استعمال کریں۔',
      'خشک اور ہوادار جگہ پر رکھیں۔'
    ]
  },
  'siligard': {
    h1Title: 'سلی گارڈ (Siligard) - پوٹاشیم سلیکیٹ مائع برائے تنے کی مضبوطی اور تحفظ',
    metaTitle: 'سلی گارڈ پوٹاشیم سلیکیٹ | پیشگامان',
    metaDescription: 'سلی گارڈ پتوں اور تنوں کی بیرونی جلد کو سخت بنا کر کیڑوں اور سورج کی جھلسن سے بچاتا ہے۔',
    longIntro: 'سلی گارڈ (Siligard) پودے کے خلیات کے اندر سلیکون کا حفاظتی شیلڈ تیار کرتا ہے۔ اس سے پودے کا تنا کھڑا رہتا ہے، رس چوسنے والے کیڑوں کے حملے کم ہوتے ہیں اور گرمیوں میں پھل کے جھلسنے (Sunburn) کا امکان ختم ہو جاتا ہے۔',
    analysis: [
      'سلیکون اکسائیڈ (SiO2): ۲۰٪',
      'پوٹاشیم اکسائیڈ (K2O): ۱۰٪',
      'خالص مائع فارمولیشن'
    ],
    cautions: [
      'اسپرے سے پہلے تانبے (Copper) والی ادویات کے ساتھ اختلاط کا ٹیسٹ کریں۔',
      'آنکھوں اور جلد سے دور رکھیں۔'
    ]
  },
  'stormy': {
    h1Title: 'اسٹورمی (Stormy) - خالص فری ایل-امینو ایسڈز ۸۰٪ برائے فوری ریکوری',
    metaTitle: 'اسٹورمی امینو ایسڈز | پیشگامان پائیدار فلات نیک',
    metaDescription: 'اسٹورمی جڑی بوٹی مار ادویات کے مضر اثرات، ژالہ باری اور ٹھنڈ کے جھٹکے سے فصل کو فوری بچاتا ہے۔',
    longIntro: 'اسٹورمی (Stormy) ۸۰ فیصد خالص آزاد امینو ایسڈز کا اعلیٰ ترین مجموعہ ہے۔ جب فصل کسی دوا کے غلط اسپرے، اولوں یا کورے کا شکار ہو جائے تو اسٹورمی کے فوری استعمال سے پودے کی سانس اور پروٹین کی پیداوار دوبارہ بحال ہو جاتی ہے۔',
    analysis: [
      'مفت ایل-امینو ایسڈز (Free L-Amino Acids): ۸۰٪',
      'کل نامیاتی نائٹروجن: ۱۳٪',
      'حلالیت: ۱۰۰٪'
    ],
    cautions: [
      'سلفر یا تانبے والی تیز دواؤں کے ساتھ مکس کرنے میں احتیاط کریں۔'
    ]
  },
  'fiction': {
    h1Title: 'فکشن (Fiction) - مائع چیلیٹڈ کیلشیم + بوران برائے پھول و پھل کی مضبوطی',
    metaTitle: 'فکشن کیلشیم بوران | پیشگامان',
    metaDescription: 'فکشن پھولوں کو گرنے سے روکتا ہے اور ٹماٹر، تربوز اور باغات میں پھل پھٹنے کی بیماری ختم کرتا ہے۔',
    longIntro: 'فکشن (Fiction) پودوں کے لیے ناگزیر دو عناصر کیلشیم اور بوران کا سائنسی تناسب ہے۔ کیلشیم خلیاتی دیوار کو طاقت بخشتا ہے جبکہ بوران پولن ٹیوب کو مضبوط کر کے پھول سے پھل بننے کے عمل کو یقینی بناتا ہے۔',
    analysis: [
      'چیلیٹڈ کیلشیم (CaO): ۱۵٪',
      'پانی میں حل پذیر بوران (B): ۱.۵٪',
      'نامیاتی پولیول کیریئر'
    ],
    cautions: [
      'فاسفیٹ والی کھادوں کے ساتھ ایک ہی ٹینک میں تیز محلول نہ بنائیں۔'
    ]
  },
  'top-star': {
    h1Title: 'ٹاپ اسٹار (Top Star) - نامیاتی نائٹروجن اور امینو ایسڈز برائے فوری نباتاتی گروتھ',
    metaTitle: 'ٹاپ اسٹار نامیاتی کھاد | پیشگامان پائیدار فلات نیک',
    metaDescription: 'ٹاپ اسٹار بہار کے آغاز میں شاخوں کے پھیلاؤ اور گندم میں زیادہ شگوفے بنانے کے لیے بہترین ہے۔',
    longIntro: 'ٹاپ اسٹار (Top Star) نامیاتی نائٹروجن اور امینو ایسڈز کا مرکب ہے جو عام یوریا کی طرح زمین کو سخت کیے بغیر پودے کو تیز ترین روئیدگی اور ہرا بھرا پن فراہم کرتا ہے۔',
    analysis: [
      'کل نائٹروجن (N): ۱۵٪',
      'نامیاتی امینو ایسڈز: ۱۰٪',
      'نامیاتی مادہ: ۳۰٪'
    ],
    cautions: [
      'بہار کے آغاز یا پودے کی تیز بڑھوتری کے وقت استعمال کریں۔'
    ]
  },
  'tiger-k-high': {
    h1Title: 'ٹائیگر ہائی پوٹاش جیل - پھل کا سائز، وزن، رنگ اور مٹھاس بڑھانے والی جیل کھاد',
    metaTitle: 'ٹائیگر ہائی پوٹاش جیل | پیشگامان',
    metaDescription: 'ٹائیگر کے ہائی پوٹاشیم معلق جیل کھاد۔ پھلوں کی اعلیٰ کوالٹی اور مارکیٹ ریٹ کے لیے ناگزیر۔',
    longIntro: 'ٹائیگر ہائی پوٹاش (Tiger High-K) جدید سسپنشن جیل ٹیکنالوجی سے تیار کی گئی ہے جس کی حل پذیری اور جذب ہونے کی شرح روایتی پوٹاش کھادوں سے کہیں زیادہ ہے۔ یہ پھل کے سائز اور شوگر برکس (Brix) کو ریکارڈ سطح تک پہنچاتی ہے۔',
    analysis: [
      'پوٹاشیم (K2O): ۵۰٪',
      'نائٹروجن (N): ۵٪',
      'مائیکرو ایلیمنٹس چیلیٹڈ: ۱.۵٪'
    ],
    cautions: [
      'پھل کے بننے کے بعد اور پکنے کے مرحلے پر استعمال کریں۔'
    ]
  },
  'tiger-p-high': {
    h1Title: 'ٹائیگر ہائی فاسفورس جیل - بھرپور پھولداری اور جڑوں کے جال کے لیے جیل کھاد',
    metaTitle: 'ٹائیگر ہائی فاسفورس جیل | پیشگامان پائیدار فلات نیک',
    metaDescription: 'ٹائیگر پی اعلیٰ فاسفورس جیل کھاد۔ پودوں کے شگوفے، جڑیں اور پھولداری بڑھانے کا نسخہ۔',
    longIntro: 'ٹائیگر ہائی فاسفورس (Tiger High-P) جڑوں کے گچھے بنانے اور پودے کو بیماریوں سے بچانے والی فاسفورس کی جدید ترین شکل ہے۔ گندم کے جھاڑ اور سبزیوں میں پھولوں کی تعداد کو دوگنا کرتی ہے۔',
    analysis: [
      'فاسفورس (P2O5): ۵۰٪',
      'نائٹروجن (N): ۱۰٪',
      'زنک و مائیکرو اجزاء چیلیٹڈ: ۱٪'
    ],
    cautions: [
      'پھول کھلنے سے پہلے اور جڑوں کے بڑھنے کے وقت استعمال کریں۔'
    ]
  },
  'sol-max': {
    h1Title: 'سول میکس (Sol-Max) - مائیکرونائزڈ مائع سلفر برائے اصلاحِ مٹی و کنٹرول پھپھوندی',
    metaTitle: 'سول میکس مائع سلفر | پیشگامان',
    metaDescription: 'سول میکس مائع سلفر مٹی کا پی ایچ کم کر کے قفل شدہ فاسفورس اور آئرن کو کھولتا ہے۔',
    longIntro: 'سول میکس (Sol-Max) انتہائی باریک پیس کر مائع شکل میں لایا گیا سلفر ہے جو زمین کے نمکیات کو توڑتا ہے، مٹی کی سختی کو نرم کرتا ہے اور جڑوں کی پھپھوندی و دیمک کے خلاف قدرتی ڈھال ہے۔',
    analysis: [
      'مائیکرونائزڈ سلفر (S): ۸۰٪',
      'مائع سسپنشن فارمولا',
      'پی ایچ کنٹرول ایجنٹس'
    ],
    cautions: [
      'تیل والے اسپرے کے فورا بعد استعمال نہ کریں۔'
    ]
  },
  'salt-stop': {
    h1Title: 'سالٹ اسٹاپ (Salt Stop) - مٹی کے کلر اور نمکیات کا موثر سائنسی علاج',
    metaTitle: 'سالٹ اسٹاپ نمکیات توڑ | پیشگامان پائیدار فلات نیک',
    metaDescription: 'سالٹ اسٹاپ سوڈیم کے نقصان دہ آئنز کو خارج کر کے پانی کی نفوذ پذیری اور پیداوار بڑھاتا ہے۔',
    longIntro: 'سالٹ اسٹاپ (Salt Stop) ایک انقلابی مائع اصلاح کنندہ ہے جو کلراٹھی مٹی میں سوڈیم کے بندھن کو توڑ کر کیلشیم کو مٹی کے ذرات پر بٹھاتا ہے۔ اس سے زمین نرم ہو جاتی ہے اور پانی گہرائی تک جذب ہونے لگتا ہے۔',
    analysis: [
      'فعال کیلشیم پولی الیکٹرولائٹ: ۱۲٪',
      'نامیاتی کمپلیکسنگ ایجنٹس: ۱۰٪',
      'مخصوص اینٹی سوڈیم فیکٹر'
    ],
    cautions: [
      'فلڈ یا ڈرپ ایریگیشن میں مناسب پانی کے ساتھ چلائیں۔'
    ]
  },
  'angela': {
    h1Title: 'اینجلا (Angela) - پھولوں کا گرنا روکنے اور پھل کی تعداد بڑھانے والا ریگولیٹر',
    metaTitle: 'اینجلا فلاورنگ ہارمون ریگولیٹر | پیشگامان',
    metaDescription: 'اینجلا قدرتی ہارمونل توازن قائم کر کے پولینیشن اور پھل کے بننے کے عمل کو مکمل بناتا ہے۔',
    longIntro: 'اینجلا (Angela) پودوں کے افزائشی ہارمونز اور مخصوص مائیکرو اجزاء کا شاہکار مرکب ہے۔ نامساعد موسم، آندھی یا گرمی میں پھولوں کے جھڑنے کو روک کر فصل کی حتمی پیداوار کو محفوظ بناتا ہے۔',
    analysis: [
      'بایو ایکٹیو ہارمونل ایکٹیویٹرز: ۵٪',
      'بوران اور مولیبڈینم چیلیٹڈ: ۳٪',
      'امینو ایسڈ کیریئر: ۱۵٪'
    ],
    cautions: [
      'پھول آنے کے شروعاتی مرحلے پر مقررہ دوز میں استعمال کریں۔'
    ]
  },
  'ph-best': {
    h1Title: 'پی ایچ بیسٹ (pH Best) - اسپرے کے پانی اور مٹی کا پی ایچ متوازن کرنے والا سلوشن',
    metaTitle: 'پی ایچ بیسٹ واٹر ایسڈیفائر | پیشگامان پائیدار فلات نیک',
    metaDescription: 'پی ایچ بیسٹ کھارے اور سخت پانی کی سختی دور کر کے ادویات اور کھادوں کے اثر کو ۵ گنا کرتا ہے۔',
    longIntro: 'پی ایچ بیسٹ (pH Best) ایک ضروری تکنیکی سلوشن ہے جو اسپرے کے ٹینک میں شامل کر کے پانی کا پی ایچ ۶ کے قریب لاتا ہے۔ اس سے کیڑے مار اور فنگس کش ادویات بے اثر ہونے سے بچ جاتی ہیں اور کھادوں کا جذب ہونا بڑھ جاتا ہے۔',
    analysis: [
      'اسیدفائنگ ایجنٹس (Buffer Acidifiers): ۴۵٪',
      'پانی کی سختی ختم کرنے والے اجزاء: ۲۰٪',
      'پی ایچ انڈیکیٹر'
    ],
    cautions: [
      'اسپرے ٹینک میں دوسری دوائیں ملانے سے پہلے پی ایچ بیسٹ شامل کریں۔'
    ]
  }
};

// 6. Main function to return localized product data
export function getLocalizedProduct(product: Product, lang: Language, t: Translations) {
  const names = localizedProductNames[product.slug] || localizedProductNames[product.id];
  const taglines = localizedTaglines[product.slug] || localizedTaglines[product.id];
  const attrs = localizedAttributes[product.slug] || localizedAttributes[product.id];
  const urDetail = urduDetailData[product.slug] || urduDetailData[product.id];

  // Display Name
  let displayName = product.nameFa;
  if (lang === 'en') {
    displayName = product.nameEn || names?.en || product.nameFa;
  } else if (lang === 'ar') {
    displayName = product.nameAr || names?.ar || product.nameFa;
  } else if (lang === 'ur') {
    displayName = product.nameUr || names?.ur || product.nameFa;
  }

  // Sub Name
  const subName = lang === 'en' ? product.nameFa : product.nameEn;

  // Category Title
  let categoryTitle = product.categoryTitle;
  if (product.category === 'soil-conditioner') categoryTitle = t.catSoilConditioner;
  else if (product.category === 'humic-organic') categoryTitle = t.catHumicOrganic;
  else if (product.category === 'stimulant') categoryTitle = t.catStimulant;
  else if (product.category === 'nutrition-gel') categoryTitle = t.catNutritionGel;

  // Tagline
  let tagline = product.tagline;
  if (lang === 'en' && taglines?.en) tagline = taglines.en;
  else if (lang === 'ar' && taglines?.ar) tagline = taglines.ar;
  else if (lang === 'ur' && taglines?.ur) tagline = taglines.ur;

  // Badge, Appearance, Packaging
  let badge = product.badge;
  let appearance = product.appearance;
  let packaging = product.packaging;

  if (attrs) {
    if (lang === 'en') {
      badge = attrs.badge.en;
      appearance = attrs.appearance.en;
      packaging = attrs.packaging.en;
    } else if (lang === 'ar') {
      badge = attrs.badge.ar;
      appearance = attrs.appearance.ar;
      packaging = attrs.packaging.ar;
    } else if (lang === 'ur') {
      badge = attrs.badge.ur;
      appearance = attrs.appearance.ur;
      packaging = attrs.packaging.ur;
    }
  }

  // Localized Benefits
  let benefits = product.benefits || [];
  const bMap = localizedBenefits[product.slug] || localizedBenefits[product.id];
  if (bMap && lang !== 'fa') {
    benefits = bMap[lang as 'en' | 'ar' | 'ur'] || product.benefits || [];
  }

  // Detail fields
  const detail = product.detail;
  let h1Title = detail?.h1Title || `${displayName} - ${t.heroStatFormulations}`;
  let metaTitle = detail?.metaTitle || `${displayName} | ${t.brandName}`;
  let metaDescription = detail?.metaDescription || product.description;
  let longIntro = detail?.longIntro || product.description;
  let analysisList = detail?.analysis || [];
  let cautionsList = detail?.cautions || [];
  let tankMixesList: TankMixItem[] = (detail?.tankMixes || []).map(mix => {
    let name = mix.productName;
    const mixSlug = mix.slug;
    const mixNames = localizedProductNames[mixSlug];
    if (mixNames) {
      if (lang === 'en') name = mixNames.en;
      else if (lang === 'ar') name = mixNames.ar;
      else if (lang === 'ur') name = mixNames.ur;
    }

    let reason = mix.reason;
    if (lang === 'en') {
      reason = 'High agronomic synergy and enhanced nutrient availability in crop rootzone.';
    } else if (lang === 'ar') {
      reason = 'توافق زراعي ممتاز وفعالية مضاعفة لامتصاص العناصر في منطقة الجذور.';
    } else if (lang === 'ur') {
      reason = 'جڑوں کے پاس غذائی اجزاء کے بہتر جذب اور باہمی زرعی ہم آہنگی کے لیے موزوں۔';
    }

    return {
      productName: name,
      slug: mix.slug,
      reason
    };
  });

  let faqsList: ProductFaq[] = detail?.faqs || [];
  if (lang === 'en') {
    faqsList = [
      {
        question: `What is the optimal application timing for ${displayName}?`,
        answer: `Apply at early vegetative stages, root establishment, or fruit development along with irrigation water or via precision foliar spraying.`
      },
      {
        question: `Is ${displayName} 100% water-soluble and safe for modern drip systems?`,
        answer: `Yes, ${displayName} is formulated with the highest purity standards and will not cause clogging in drip emitters or filters.`
      },
      {
        question: `How does ${displayName} help crops resist salinity and extreme temperatures?`,
        answer: `It regulates cellular osmotic potential, stabilizes plant cell membranes, and maximizes root nutrient absorption under harsh conditions.`
      },
      {
        question: `What is the standard recommended dosage per hectare?`,
        answer: `For orchards 3 to 5 kg (or L) per hectare, field crops 2 to 4 kg/ha, and greenhouse systems 20 to 30 grams per 1000 square meters per fertigation round.`
      },
      {
        question: `Can ${displayName} be mixed with other standard fertilizers?`,
        answer: `Yes, it is compatible with most standard agronomic inputs. Always conduct a standard jar compatibility test before large-scale tank mixing.`
      }
    ];
  } else if (lang === 'ar') {
    faqsList = [
      {
        question: `ما هو أفضل وقت لاستخدام سماد ${displayName}؟`,
        answer: `يُفضل الاستخدام في بدايات مراحل النمو النشط، وبداية التزهير وعقد الثمار مع مياه الري أو بالرش الورقي المنتظم.`
      },
      {
        question: `هل ${displayName} آمن تماماً لشبكات الري بالتنقيط وبدون أي ترسبات؟`,
        answer: `نعم، يتميز المنتج بنقاوة تامة وذوبان كامل بنسبة ۱۰۰٪ ولا يسبب أي انسداد للفلاتر أو نقاطات الري.`
      },
      {
        question: `كيف يساهم ${displayName} في تقليل أضرار الملوحة والحرارة الشديدة؟`,
        answer: `يعمل على تنشيط التوازن الأسموزي في خلايا الجذور ورفع كفاءة امتصاص العناصر الغذائية الصغرى والكبرى.`
      },
      {
        question: `ما هي الجرعة الموصى بها في الهكتار الواحد؟`,
        answer: `في البساتين ۳ إلى ۵ كغ (أو لتر) لكل هكتار، وفي المحاصيل الحقلية ۲ إلى ٤ كغ/هكتار، والبيوت المحمية ۲۰ إلى ۳۰ غرام لكل ۱۰۰۰ متر مربع.`
      },
      {
        question: `هل يمكن خلط ${displayName} مع الأسمدة والمبيدات الأخرى؟`
      , answer: `المنتج متوافق مع أغلب الأسمدة الشائعة، ويُنصح دائماً بإجراء تجربة خلط صغيرة (Jar Test) قبل التطبيق الحقلي.`
      }
    ];
  } else if (lang === 'ur') {
    faqsList = [
      {
        question: `${displayName} کے استعمال کا بہترین وقت کون سا ہے؟`,
        answer: `فصل کی ابتدائی نباتاتی بڑھوتری، شگوفے نکلنے اور پھل بننے کے مراحل پر آبپاشی کے ساتھ یا اسپرے کے ذریعے استعمال بہترین ہے۔`
      },
      {
        question: `کیا ${displayName} ڈرپ ایریگیشن میں حل پذیر ہے اور نوزلز کو بند تو نہیں کرے گی؟`,
        answer: `جی ہاں، یہ ۱۰۰٪ حل پذیر ہے اور اعلیٰ کوالٹی فارمولیشن کی وجہ سے ڈرپ فلٹرز یا نوزلز میں کبھی رکاوٹ نہیں بنتی۔`
      },
      {
        question: `یہ کلراٹھی مٹی اور شدید گرمی کے خلاف فصل کو کیسے مضبوط بناتی ہے؟`,
        answer: `یہ جڑوں کی بیرونی جھلی کو طاقت دیتی ہے اور نمکیات کے زہریلے پن کو کم کر کے پودے کے خلیات میں پانی کا توازن قائم رکھتی ہے۔`
      },
      {
        question: `فی ایکڑ یا فی ہیکٹر استعمال کی سفارش کردہ مقدار کتنی ہے؟`,
        answer: `باغات میں ۳ تا ۵ کلو (یا لیٹر) فی ہیکٹر، فصلی زراعت میں ۲ تا ۴ کلو فی ہیکٹر، اور ٹنل فارمنگ میں ۲۰ تا ۳۰ گرام فی ۱۰۰۰ مربع میٹر تجویز کی جاتی ہے۔`
      },
      {
        question: `کیا اسے دیگر کھادوں یا ادویات کے ساتھ ملا کر استعمال کیا جا سکتا ہے؟`,
        answer: `زیادہ تر معیاری کھادوں کے ساتھ ملا کر استعمال کیا جا سکتا ہے۔ بڑے پیمانے پر مکس کرنے سے پہلے برتن میں چھوٹا ٹیسٹ ضرور کریں۔`
      }
    ];
  }

  if (lang === 'en') {
    if (detail?.h1TitleEn) h1Title = detail.h1TitleEn;
    if (detail?.metaTitleEn) metaTitle = detail.metaTitleEn;
    if (detail?.metaDescriptionEn) metaDescription = detail.metaDescriptionEn;
    if (detail?.longIntroEn) longIntro = detail.longIntroEn;
    if (detail?.analysisEn && detail.analysisEn.length > 0) analysisList = detail.analysisEn;
    if (detail?.cautionsEn && detail.cautionsEn.length > 0) cautionsList = detail.cautionsEn;
  } else if (lang === 'ar') {
    if (detail?.h1TitleAr) h1Title = detail.h1TitleAr;
    if (detail?.metaTitleAr) metaTitle = detail.metaTitleAr;
    if (detail?.metaDescriptionAr) metaDescription = detail.metaDescriptionAr;
    if (detail?.longIntroAr) longIntro = detail.longIntroAr;
    if (detail?.analysisAr && detail.analysisAr.length > 0) analysisList = detail.analysisAr;
    if (detail?.cautionsAr && detail.cautionsAr.length > 0) cautionsList = detail.cautionsAr;
  } else if (lang === 'ur') {
    if (urDetail?.h1Title) h1Title = urDetail.h1Title;
    if (urDetail?.metaTitle) metaTitle = urDetail.metaTitle;
    if (urDetail?.metaDescription) metaDescription = urDetail.metaDescription;
    if (urDetail?.longIntro) longIntro = urDetail.longIntro;
    if (urDetail?.analysis && urDetail.analysis.length > 0) analysisList = urDetail.analysis;
    if (urDetail?.cautions && urDetail.cautions.length > 0) cautionsList = urDetail.cautions;
  }

  // Localized Dosage Rows
  const rawDosage = product.dosageTable || [];
  const dosageRows: DosageRate[] = rawDosage.map(row => ({
    crop: translateCrop(row.crop, lang),
    method: translateMethod(row.method, lang),
    timing: translateTiming(row.timing, lang),
    rate: row.rate
  }));

  return {
    displayName,
    subName,
    categoryTitle,
    tagline,
    badge,
    appearance,
    packaging,
    benefits,
    h1Title,
    metaTitle,
    metaDescription,
    longIntro,
    analysisList,
    cautionsList,
    dosageRows,
    tankMixesList,
    faqsList
  };
}
