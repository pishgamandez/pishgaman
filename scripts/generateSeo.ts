import fs from 'fs';
import path from 'path';
import { createRequire } from 'module';
import esbuild from 'esbuild';

const require = createRequire(import.meta.url);

const rootDir = process.cwd();
const publicDir = path.resolve(rootDir, 'public');
const distDir = path.resolve(rootDir, 'dist');
const baseUrl = 'https://pishgamandez.github.io/pishgaman';

function ensureDir(dirPath: string) {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
}

function toGregorianIsoDate(rawDate?: string): string {
  if (!rawDate) return '2026-10-11';
  const str = rawDate
    .replace(/[۰-۹]/g, d => '۰۱۲۳۴۵۶۷۸۹'.indexOf(d).toString())
    .replace(/[٠-٩]/g, d => '٠١٢٣٤٥٦٧٨٩'.indexOf(d).toString())
    .trim();
  if (/^\d{4}-\d{2}-\d{2}$/.test(str)) {
    return str;
  }
  const parts = str.split(/[\/\-]/);
  if (parts.length === 3) {
    const y = parseInt(parts[0], 10);
    const m = parseInt(parts[1], 10);
    const d = parseInt(parts[2], 10);
    if (y >= 1400 && y <= 1410) {
      const gregYear = y + 621;
      const mm = String(m).padStart(2, '0');
      const dd = String(d).padStart(2, '0');
      return `${gregYear}-${mm}-${dd}`;
    }
  }
  return '2026-10-11';
}

async function loadArticles(): Promise<any[]> {
  const result = await esbuild.build({
    entryPoints: [path.resolve(rootDir, 'src/data/articles.ts')],
    bundle: true,
    write: false,
    format: 'cjs',
    loader: { '.jpg': 'text', '.png': 'text', '.svg': 'text' },
  });

  const code = result.outputFiles[0].text;
  const m = { exports: {} as any };
  const fn = new Function('exports', 'module', 'require', code);
  fn(m.exports, m, require);
  return m.exports.articlesData || [];
}

async function loadProducts(): Promise<any[]> {
  const result = await esbuild.build({
    entryPoints: [path.resolve(rootDir, 'src/data/products.ts')],
    bundle: true,
    write: false,
    format: 'cjs',
    loader: { '.jpg': 'text', '.png': 'text', '.svg': 'text' },
  });

  const code = result.outputFiles[0].text;
  const m = { exports: {} as any };
  const fn = new Function('exports', 'module', 'require', code);
  fn(m.exports, m, require);
  return m.exports.initialProducts || [];
}

// 1. Generate comprehensive sitemap.xml
function generateSitemap(articles: any[]) {
  const currentDate = new Date().toISOString().split('T')[0];
  let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
  <!-- 1. Homepages -->
  <url>
    <loc>${baseUrl}/</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
    <xhtml:link rel="alternate" hreflang="fa" href="${baseUrl}/" />
    <xhtml:link rel="alternate" hreflang="en" href="${baseUrl}/?lang=en" />
    <xhtml:link rel="alternate" hreflang="ar" href="${baseUrl}/?lang=ar" />
    <xhtml:link rel="alternate" hreflang="x-default" href="${baseUrl}/" />
  </url>
  <url>
    <loc>${baseUrl}/?lang=en</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>daily</changefreq>
    <priority>0.9</priority>
    <xhtml:link rel="alternate" hreflang="fa" href="${baseUrl}/" />
    <xhtml:link rel="alternate" hreflang="en" href="${baseUrl}/?lang=en" />
    <xhtml:link rel="alternate" hreflang="ar" href="${baseUrl}/?lang=ar" />
    <xhtml:link rel="alternate" hreflang="x-default" href="${baseUrl}/" />
  </url>
  <url>
    <loc>${baseUrl}/?lang=ar</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>daily</changefreq>
    <priority>0.9</priority>
    <xhtml:link rel="alternate" hreflang="fa" href="${baseUrl}/" />
    <xhtml:link rel="alternate" hreflang="en" href="${baseUrl}/?lang=en" />
    <xhtml:link rel="alternate" hreflang="ar" href="${baseUrl}/?lang=ar" />
    <xhtml:link rel="alternate" hreflang="x-default" href="${baseUrl}/" />
  </url>
  <url>
    <loc>${baseUrl}/?lang=ur</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>daily</changefreq>
    <priority>0.9</priority>
    <xhtml:link rel="alternate" hreflang="fa" href="${baseUrl}/" />
    <xhtml:link rel="alternate" hreflang="en" href="${baseUrl}/?lang=en" />
    <xhtml:link rel="alternate" hreflang="ar" href="${baseUrl}/?lang=ar" />
    <xhtml:link rel="alternate" hreflang="ur" href="${baseUrl}/?lang=ur" />
    <xhtml:link rel="alternate" hreflang="x-default" href="${baseUrl}/" />
  </url>

  <!-- 2. Articles Index Pages -->
  <url>
    <loc>${baseUrl}/articles/</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.95</priority>
    <xhtml:link rel="alternate" hreflang="fa" href="${baseUrl}/articles/" />
    <xhtml:link rel="alternate" hreflang="en" href="${baseUrl}/en/articles/" />
    <xhtml:link rel="alternate" hreflang="ar" href="${baseUrl}/ar/articles/" />
    <xhtml:link rel="alternate" hreflang="ur" href="${baseUrl}/ur/articles/" />
    <xhtml:link rel="alternate" hreflang="x-default" href="${baseUrl}/articles/" />
  </url>
  <url>
    <loc>${baseUrl}/en/articles/</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
    <xhtml:link rel="alternate" hreflang="fa" href="${baseUrl}/articles/" />
    <xhtml:link rel="alternate" hreflang="en" href="${baseUrl}/en/articles/" />
    <xhtml:link rel="alternate" hreflang="ar" href="${baseUrl}/ar/articles/" />
    <xhtml:link rel="alternate" hreflang="ur" href="${baseUrl}/ur/articles/" />
    <xhtml:link rel="alternate" hreflang="x-default" href="${baseUrl}/articles/" />
  </url>
  <url>
    <loc>${baseUrl}/ar/articles/</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
    <xhtml:link rel="alternate" hreflang="fa" href="${baseUrl}/articles/" />
    <xhtml:link rel="alternate" hreflang="en" href="${baseUrl}/en/articles/" />
    <xhtml:link rel="alternate" hreflang="ar" href="${baseUrl}/ar/articles/" />
    <xhtml:link rel="alternate" hreflang="ur" href="${baseUrl}/ur/articles/" />
    <xhtml:link rel="alternate" hreflang="x-default" href="${baseUrl}/articles/" />
  </url>
  <url>
    <loc>${baseUrl}/ur/articles/</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
    <xhtml:link rel="alternate" hreflang="fa" href="${baseUrl}/articles/" />
    <xhtml:link rel="alternate" hreflang="en" href="${baseUrl}/en/articles/" />
    <xhtml:link rel="alternate" hreflang="ar" href="${baseUrl}/ar/articles/" />
    <xhtml:link rel="alternate" hreflang="ur" href="${baseUrl}/ur/articles/" />
    <xhtml:link rel="alternate" hreflang="x-default" href="${baseUrl}/articles/" />
  </url>
`;

  // Add all 20 individual articles
  articles.forEach(art => {
    const lastMod = toGregorianIsoDate(art.fa.lastModified);
    const faUrl = `${baseUrl}/articles/${art.slug}/`;
    const enUrl = `${baseUrl}/en/articles/${art.slug}/`;
    const arUrl = `${baseUrl}/ar/articles/${art.slug}/`;
    const urUrl = `${baseUrl}/ur/articles/${art.slug}/`;

    xml += `
  <!-- Article: ${art.slug} -->
  <url>
    <loc>${faUrl}</loc>
    <lastmod>${lastMod}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.85</priority>
    <xhtml:link rel="alternate" hreflang="fa" href="${faUrl}" />
    <xhtml:link rel="alternate" hreflang="en" href="${enUrl}" />
    <xhtml:link rel="alternate" hreflang="ar" href="${arUrl}" />
    <xhtml:link rel="alternate" hreflang="ur" href="${urUrl}" />
    <xhtml:link rel="alternate" hreflang="x-default" href="${faUrl}" />
  </url>`;
  });

  // Add all 16 strategic products in FA, EN, AR, UR both as .html and directory format
  const productSlugs = [
    'challenger', 'humifarm', 'jumper', 'full-charger',
    'redfol', 'doping', 'siligard', 'stormy',
    'fiction', 'top-star', 'tiger-k-high', 'tiger-p-high',
    'sol-max', 'salt-stop', 'angela', 'ph-best'
  ];

  productSlugs.forEach(slug => {
    const htmlUrl = `${baseUrl}/${slug}.html`;
    const faUrl = `${baseUrl}/products/${slug}/`;
    const enUrl = `${baseUrl}/en/products/${slug}/`;
    const arUrl = `${baseUrl}/ar/products/${slug}/`;
    const urUrl = `${baseUrl}/ur/products/${slug}/`;

    xml += `
  <!-- Product Standalone HTML: ${slug} -->
  <url>
    <loc>${htmlUrl}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.95</priority>
    <xhtml:link rel="alternate" hreflang="fa" href="${htmlUrl}" />
    <xhtml:link rel="alternate" hreflang="en" href="${enUrl}" />
    <xhtml:link rel="alternate" hreflang="ar" href="${arUrl}" />
    <xhtml:link rel="alternate" hreflang="ur" href="${urUrl}" />
    <xhtml:link rel="alternate" hreflang="x-default" href="${htmlUrl}" />
  </url>
  <url>
    <loc>${faUrl}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.90</priority>
  </url>`;
  });

  xml += `\n</urlset>\n`;

  ensureDir(publicDir);
  const sitemapPublic = path.resolve(publicDir, 'sitemap.xml');
  fs.writeFileSync(sitemapPublic, xml, 'utf-8');
  console.log(`✓ Generated sitemap.xml with updated URLs.`);

  if (fs.existsSync(distDir)) {
    fs.writeFileSync(path.resolve(distDir, 'sitemap.xml'), xml, 'utf-8');
  }
}

// 2. Build pre-rendered static HTML for articles
function buildArticleHtml(art: any, lang: 'fa' | 'en' | 'ar') {
  const content = art[lang] || art.fa;
  const isRtl = lang !== 'en';
  const dir = isRtl ? 'rtl' : 'ltr';
  const langAttr = lang === 'en' ? 'en' : lang === 'ar' ? 'ar' : 'fa';

  const canonicalUrl = lang === 'en'
    ? `${baseUrl}/en/articles/${art.slug}/`
    : lang === 'ar'
    ? `${baseUrl}/ar/articles/${art.slug}/`
    : `${baseUrl}/articles/${art.slug}/`;

  const faUrl = `${baseUrl}/articles/${art.slug}/`;
  const enUrl = `${baseUrl}/en/articles/${art.slug}/`;
  const arUrl = `${baseUrl}/ar/articles/${art.slug}/`;

  const metaDesc = (content.metaDescription || content.summary || content.abstract || '').replace(/"/g, '&quot;');
  const pageTitle = `${content.title} | پیشگامان پایدار فلات نیک`;
  const rawLastMod = content.lastModified || art.fa?.lastModified || '2026-10-11';
  const isoLastMod = toGregorianIsoDate(rawLastMod);
  const authorName = content.author || 'دپارتمان تحقیقات و توسعه علمی پیشگامان';
  const isPersonAuthor = /دکتر|مهندس|دکتور|استاد|نژاد|رستمی|پژوهشگر|Dr\.|Eng\./i.test(authorName);

  const schemas: any[] = [
    {
      '@context': 'https://schema.org',
      '@type': 'BlogPosting',
      'headline': content.title,
      'description': metaDesc,
      'image': [`${baseUrl}/logo.png`],
      'datePublished': '2024-10-01T08:00:00+03:30',
      'dateModified': `${isoLastMod}T10:00:00+03:30`,
      'author': {
        '@type': isPersonAuthor ? 'Person' : 'Organization',
        'name': authorName,
        'url': `${baseUrl}/`
      },
      'publisher': {
        '@type': 'Organization',
        'name': 'پیشگامان پایدار فلات نیک',
        'logo': {
          '@type': 'ImageObject',
          'url': `${baseUrl}/logo.png`
        }
      },
      'mainEntityOfPage': {
        '@type': 'WebPage',
        '@id': canonicalUrl
      }
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      'itemListElement': [
        {
          '@type': 'ListItem',
          'position': 1,
          'name': lang === 'en' ? 'Home' : lang === 'ar' ? 'الرئيسية' : 'صفحه اصلی',
          'item': `${baseUrl}/`
        },
        {
          '@type': 'ListItem',
          'position': 2,
          'name': lang === 'en' ? 'Agronomy Articles' : lang === 'ar' ? 'المقالات التخصصية' : 'مقالات تخصصی',
          'item': `${baseUrl}/articles/`
        },
        {
          '@type': 'ListItem',
          'position': 3,
          'name': content.title,
          'item': canonicalUrl
        }
      ]
    }
  ];

  if (content.faqs && content.faqs.length > 0) {
    schemas.push({
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      'mainEntity': content.faqs.map((faq: any) => ({
        '@type': 'Question',
        'name': faq.question,
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': faq.answer
        }
      }))
    });
  }

  const sectionsHtml = (content.contentSections || []).map((sec: any, idx: number) => `
    <section style="margin-bottom: 2rem;">
      <h2 style="font-size: 1.35rem; font-weight: 800; color: #1c1917; margin-bottom: 0.75rem;">${idx + 1}. ${sec.heading}</h2>
      <div style="font-size: 0.95rem; line-height: 1.85; color: #44403c; white-space: pre-line;">${sec.text}</div>
    </section>
  `).join('\n');

  let dosageHtml = '';
  if (content.dosageTable && content.dosageTable.length > 0) {
    const rows = content.dosageTable.map((row: any) => `
      <tr style="border-bottom: 1px solid #e7e5e4;">
        <td style="padding: 10px; font-weight: 700;">${row.stage}</td>
        <td style="padding: 10px;">${row.crop}</td>
        <td style="padding: 10px; color: #065f46; font-weight: 700;">${row.rate}</td>
        <td style="padding: 10px;">${row.timing}</td>
      </tr>
    `).join('\n');

    dosageHtml = `
      <section style="margin: 2rem 0; padding: 1.25rem; background: #fafaf9; border: 1px solid #e7e5e4; border-radius: 1rem;">
        <h2 style="font-size: 1.25rem; font-weight: 800; color: #1c1917; margin-bottom: 1rem;">جدول دوز و زمان‌بندی مصرف در منطقه</h2>
        <div style="overflow-x: auto;">
          <table style="width: 100%; border-collapse: collapse; font-size: 0.875rem; text-align: ${isRtl ? 'right' : 'left'};">
            <thead>
              <tr style="background: #f5f5f4; border-bottom: 2px solid #d6d3d1;">
                <th style="padding: 10px;">مرحله رشد</th>
                <th style="padding: 10px;">گیاه / محصول</th>
                <th style="padding: 10px;">دوز مصرف</th>
                <th style="padding: 10px;">زمان و روش</th>
              </tr>
            </thead>
            <tbody>
              ${rows}
            </tbody>
          </table>
        </div>
      </section>
    `;
  }

  let faqsHtml = '';
  if (content.faqs && content.faqs.length > 0) {
    const faqCards = content.faqs.map((f: any) => `
      <div style="background: #ffffff; border: 1px solid #e7e5e4; border-radius: 0.75rem; padding: 1rem; margin-bottom: 0.75rem;">
        <h3 style="font-size: 0.95rem; font-weight: 700; color: #065f46; margin-bottom: 0.5rem;">؟ ${f.question}</h3>
        <p style="font-size: 0.875rem; color: #57534e; line-height: 1.7;">${f.answer}</p>
      </div>
    `).join('\n');

    faqsHtml = `
      <section style="margin: 2.5rem 0;">
        <h2 style="font-size: 1.3rem; font-weight: 800; color: #1c1917; margin-bottom: 1rem;">سوالات متداول کشاورزان و باغداران</h2>
        ${faqCards}
      </section>
    `;
  }

  const refsHtml = (content.references || []).map((r: string, idx: number) => `
    <li style="margin-bottom: 0.5rem; font-family: monospace; font-size: 0.8rem; color: #44403c;">
      <strong>[${idx + 1}]</strong> ${r}
    </li>
  `).join('\n');

  const productsHtml = (content.relatedProducts || []).map((pName: string) => `
    <a href="${baseUrl}/#products" style="display: inline-block; background: #ffffff; border: 1px solid #d6d3d1; padding: 6px 14px; border-radius: 8px; font-size: 0.8rem; font-weight: 700; color: #065f46; text-decoration: none; margin: 4px;">
      ✓ ${pName}
    </a>
  `).join('\n');

  return `<!doctype html>
<html lang="${langAttr}" dir="${dir}">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>${pageTitle}</title>
    <meta name="description" content="${metaDesc}" />
    <link rel="canonical" href="${canonicalUrl}" />
    <link rel="alternate" hreflang="fa" href="${faUrl}" />
    <link rel="alternate" hreflang="en" href="${enUrl}" />
    <link rel="alternate" hreflang="ar" href="${arUrl}" />
    <link rel="alternate" hreflang="x-default" href="${faUrl}" />
    
    <meta property="og:type" content="article" />
    <meta property="og:title" content="${pageTitle}" />
    <meta property="og:description" content="${metaDesc}" />
    <meta property="og:url" content="${canonicalUrl}" />
    <meta property="og:site_name" content="شرکت پیشگامان پایدار فلات نیک (برند پرواز نهاده)" />
    <meta property="og:locale" content="${lang === 'en' ? 'en_US' : lang === 'ar' ? 'ar_AR' : 'fa_IR'}" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${pageTitle}" />
    <meta name="twitter:description" content="${metaDesc}" />
    <meta name="author" content="${content.author || 'دپارتمان تحقیقات پیشگامان'}" />
    <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large" />

    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Vazirmatn:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet">
    
    <!-- Rich Structured Data Schemas -->
    <script type="application/ld+json">
${JSON.stringify(schemas, null, 2)}
    </script>
    <style>
      body { font-family: 'Vazirmatn', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; background-color: #fafaf9; color: #292524; margin: 0; padding: 0; }
      .container { max-width: 860px; margin: 0 auto; padding: 20px; }
      a { color: #047857; }
    </style>
  </head>
  <body>
    <div id="root">
      <header style="background: #1c1917; color: #ffffff; padding: 2.5rem 1rem; border-bottom: 3px solid #047857;">
        <div class="container" style="text-align: center;">
          <a href="${baseUrl}/" style="color: #6ee7b7; text-decoration: none; font-size: 0.85rem; font-weight: 700; display: inline-block; margin-bottom: 0.75rem;">
            ← بازگشت به صفحه اصلی شرکت پیشگامان
          </a>
          <div style="font-size: 0.8rem; color: #a8a29e; margin-bottom: 0.5rem;">
            ${content.category} | ${content.date}
          </div>
          <h1 style="font-size: 1.85rem; font-weight: 900; line-height: 1.35; margin: 0.5rem 0; color: #ffffff;">
            ${content.title}
          </h1>
          <div style="font-size: 0.8rem; color: #cbd5e1; margin-top: 0.5rem;">
            هیئت علمی و تدوین: <strong>${content.author || 'دپارتمان تحقیقات پیشگامان'}</strong> | آخرین بروزرسانی: ${content.lastModified || '2026-10-11'}
          </div>
        </div>
      </header>

      <main class="container" style="margin-top: 1.5rem;">
        <div style="background: #ecfdf5; border-${isRtl ? 'right' : 'left'}: 4px solid #059669; padding: 1.25rem; border-radius: 1rem; margin-bottom: 2rem;">
          <h2 style="font-size: 0.95rem; font-weight: 800; color: #065f46; margin-top: 0;">چکیده پژوهش و مبانی کاربردی</h2>
          <p style="font-size: 0.9rem; line-height: 1.8; color: #374151; margin-bottom: 0;">${content.abstract}</p>
        </div>

        ${sectionsHtml}
        ${dosageHtml}
        ${faqsHtml}

        <section style="background: #f5f5f4; border: 1px solid #e7e5e4; border-radius: 1rem; padding: 1.25rem; margin: 2rem 0;">
          <h2 style="font-size: 1rem; font-weight: 800; color: #1c1917; margin-top: 0; margin-bottom: 0.75rem;">محصولات استراتژیک مرتبط پیشگامان:</h2>
          <div>
            ${productsHtml}
          </div>
        </section>

        <div style="background: linear-gradient(135deg, #065f46, #1c1917); color: white; padding: 2rem; border-radius: 1.25rem; text-align: center; margin: 2.5rem 0;">
          <h3 style="font-size: 1.3rem; font-weight: 900; margin-top: 0;">نیاز به مشاوره تخصصی زراعی یا خرید آنلاین دارید؟</h3>
          <p style="font-size: 0.85rem; color: #d1fae5; margin-bottom: 1.25rem;">
            ارسال به سراسر کشور | مشاوره مستقیم با کارشناسان پیشگامان فلات نیک
          </p>
          <a href="https://wa.me/989128247415?text=${encodeURIComponent(`سلام، در مورد مقاله «${content.title}» راهنمایی می‌خواستم.`)}" target="_blank" style="background: #10b981; color: #022c22; font-weight: 900; padding: 10px 24px; border-radius: 12px; text-decoration: none; display: inline-block; font-size: 0.9rem;">
            ارتباط مستقیم در واتس‌اپ: 09128247415
          </a>
        </div>

        <section style="border-top: 2px solid #e7e5e4; padding-top: 1.5rem; margin-top: 2rem;">
          <h2 style="font-size: 1rem; font-weight: 800; color: #1c1917;">منابع و استنادهای علمی معتبر بین‌المللی (FAO / ISI):</h2>
          <ul style="list-style-type: none; padding-${isRtl ? 'right' : 'left'}: 0;">
            ${refsHtml}
          </ul>
        </section>
      </main>

      <footer style="background: #f5f5f4; border-top: 1px solid #e7e5e4; padding: 1.5rem; text-align: center; font-size: 0.8rem; color: #78716c; margin-top: 3rem;">
        <p>شرکت پیشگامان پایدار فلات نیک (برند پرواز نهاده) | کلیه حقوق محفوظ است.</p>
        <p>تلفن مستقیم: 09128247415 | آدرس: خوزستان، دزفول</p>
      </footer>
    </div>
  </body>
</html>`;
}

// 3. Build standalone HTML for each of the 16 strategic products (ItemPage schema, zero price error)
function buildProductHtml(prod: any): string {
  const title = prod.detail?.h1Title || `کود ${prod.nameFa} (${prod.nameEn}) | شرکت پیشگامان پایدار فلات نیک`;
  const metaDesc = (prod.detail?.metaDescription || prod.description || '').replace(/"/g, '&quot;');
  const canonicalUrl = `${baseUrl}/${prod.slug}.html`;

  const schemas: any[] = [
    {
      '@context': 'https://schema.org',
      '@type': 'ItemPage',
      'name': `${prod.nameFa} (${prod.nameEn})`,
      'description': metaDesc,
      'url': canonicalUrl,
      'mainEntity': {
        '@type': 'Thing',
        'name': prod.nameFa,
        'alternateName': prod.nameEn,
        'description': metaDesc,
        'brand': {
          '@type': 'Brand',
          'name': 'پرواز نهاده'
        },
        'manufacturer': {
          '@type': 'Organization',
          'name': 'شرکت پیشگامان پایدار فلات نیک',
          'url': `${baseUrl}/`
        }
      }
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      'itemListElement': [
        {
          '@type': 'ListItem',
          'position': 1,
          'name': 'صفحه اصلی',
          'item': `${baseUrl}/`
        },
        {
          '@type': 'ListItem',
          'position': 2,
          'name': 'محصولات ۱۶ گانه',
          'item': `${baseUrl}/#products`
        },
        {
          '@type': 'ListItem',
          'position': 3,
          'name': prod.nameFa,
          'item': canonicalUrl
        }
      ]
    }
  ];

  if (prod.detail?.faqs && prod.detail.faqs.length > 0) {
    schemas.push({
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      'mainEntity': prod.detail.faqs.map((f: any) => ({
        '@type': 'Question',
        'name': f.question,
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': f.answer
        }
      }))
    });
  }

  // Analysis HTML
  let analysisHtml = '';
  if (prod.detail?.analysis && prod.detail.analysis.length > 0) {
    const listItems = prod.detail.analysis.map((item: string) => `
      <li style="padding: 10px 14px; background: #ffffff; border: 1px solid #e7e5e4; border-radius: 8px; margin-bottom: 6px; font-size: 0.9rem; color: #1c1917; display: flex; align-items: center; gap: 8px;">
        <span style="color: #059669; font-weight: bold; font-size: 1.1rem;">✓</span>
        <span>${item}</span>
      </li>
    `).join('\n');
    analysisHtml = `
      <section style="margin: 2rem 0; padding: 1.5rem; background: #f0fdf4; border: 1px solid #bbf7d0; border-radius: 1rem;">
        <h2 style="font-size: 1.25rem; font-weight: 800; color: #065f46; margin-top: 0; margin-bottom: 1rem;">ترکیبات، آنالیز عناصر و درصد خلوص</h2>
        <ul style="list-style: none; padding: 0; margin: 0;">
          ${listItems}
        </ul>
      </section>
    `;
  }

  // Benefits HTML
  let benefitsHtml = '';
  if (prod.benefits && prod.benefits.length > 0) {
    const listItems = prod.benefits.map((b: string) => `
      <li style="padding: 12px 16px; background: #ffffff; border: 1px solid #e7e5e4; border-radius: 10px; margin-bottom: 8px; font-size: 0.9rem; color: #292524; line-height: 1.7;">
        <strong style="color: #047857; font-size: 1.1rem;">•</strong> ${b}
      </li>
    `).join('\n');
    benefitsHtml = `
      <section style="margin: 2.5rem 0;">
        <h2 style="font-size: 1.3rem; font-weight: 800; color: #1c1917; margin-bottom: 1rem;">مزایا و اثرات تخصصی در خاک و عملکرد محصول</h2>
        <ul style="list-style: none; padding: 0; margin: 0;">
          ${listItems}
        </ul>
      </section>
    `;
  }

  // Dosage Table HTML
  let dosageHtml = '';
  if (prod.dosageTable && prod.dosageTable.length > 0) {
    const rows = prod.dosageTable.map((r: any) => `
      <tr style="border-bottom: 1px solid #e7e5e4;">
        <td style="padding: 12px 14px; font-weight: 800; color: #1c1917;">${r.crop}</td>
        <td style="padding: 12px 14px; color: #44403c;">${r.method}</td>
        <td style="padding: 12px 14px; color: #047857; font-weight: 800;">${r.rate}</td>
        <td style="padding: 12px 14px; color: #57534e; font-size: 0.85rem;">${r.timing || '-'}</td>
      </tr>
    `).join('\n');
    dosageHtml = `
      <section style="margin: 2.5rem 0; padding: 1.5rem; background: #fafaf9; border: 1px solid #e7e5e4; border-radius: 1rem;">
        <h2 style="font-size: 1.3rem; font-weight: 800; color: #1c1917; margin-top: 0; margin-bottom: 1rem;">جدول استاندارد دوز و شیوه مصرف در محصولات زراعی و باغی</h2>
        <div style="overflow-x: auto;">
          <table style="width: 100%; border-collapse: collapse; font-size: 0.88rem; text-align: right;">
            <thead>
              <tr style="background: #f5f5f4; border-bottom: 2px solid #d6d3d1;">
                <th style="padding: 12px 14px;">محصول / گیاه</th>
                <th style="padding: 12px 14px;">نحوه مصرف</th>
                <th style="padding: 12px 14px;">دوز و میزان مصرف</th>
                <th style="padding: 12px 14px;">زمان مصرف و توضیحات</th>
              </tr>
            </thead>
            <tbody>
              ${rows}
            </tbody>
          </table>
        </div>
      </section>
    `;
  }

  // Cautions HTML
  let cautionsHtml = '';
  if (prod.detail?.cautions && prod.detail.cautions.length > 0) {
    const listItems = prod.detail.cautions.map((c: string) => `
      <li style="margin-bottom: 8px; font-size: 0.88rem; color: #44403c; line-height: 1.6;">⚠️ ${c}</li>
    `).join('\n');
    cautionsHtml = `
      <section style="margin: 2rem 0; padding: 1.25rem; background: #fffbeb; border: 1px solid #fde68a; border-radius: 1rem;">
        <h3 style="font-size: 1.05rem; font-weight: 800; color: #92400e; margin-top: 0; margin-bottom: 0.75rem;">هشدارها و نکات ایمنی اختلاط (Tank-Mix)</h3>
        <ul style="list-style: none; padding: 0; margin: 0;">
          ${listItems}
        </ul>
      </section>
    `;
  }

  // FAQs HTML
  let faqsHtml = '';
  if (prod.detail?.faqs && prod.detail.faqs.length > 0) {
    const faqItems = prod.detail.faqs.map((f: any) => `
      <div style="background: #ffffff; border: 1px solid #e7e5e4; border-radius: 12px; padding: 1.15rem 1.25rem; margin-bottom: 0.75rem;">
        <h3 style="font-size: 0.98rem; font-weight: 800; color: #065f46; margin-top: 0; margin-bottom: 0.5rem;">❓ ${f.question}</h3>
        <p style="font-size: 0.88rem; color: #44403c; line-height: 1.7; margin: 0;">${f.answer}</p>
      </div>
    `).join('\n');
    faqsHtml = `
      <section style="margin: 2.5rem 0;">
        <h2 style="font-size: 1.3rem; font-weight: 800; color: #1c1917; margin-bottom: 1rem;">سوالات متداول کشاورزان درباره این محصول</h2>
        ${faqItems}
      </section>
    `;
  }

  return `<!doctype html>
<html lang="fa" dir="rtl">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>${title}</title>
    <meta name="description" content="${metaDesc}" />
    <link rel="canonical" href="${canonicalUrl}" />
    
    <meta property="og:type" content="website" />
    <meta property="og:title" content="${title}" />
    <meta property="og:description" content="${metaDesc}" />
    <meta property="og:url" content="${canonicalUrl}" />
    <meta property="og:site_name" content="شرکت پیشگامان پایدار فلات نیک (برند پرواز نهاده)" />
    <meta property="og:image" content="${baseUrl}/logo.jpg" />
    <meta property="og:locale" content="fa_IR" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${title}" />
    <meta name="twitter:description" content="${metaDesc}" />
    <meta name="author" content="دکتر راستین رستمی نیا - شرکت پیشگامان پایدار فلات نیک" />
    <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large" />

    <link rel="icon" type="image/jpeg" href="${baseUrl}/logo.jpg" />
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Vazirmatn:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet">
    
    <!-- Schema.org Rich Structured Data -->
    <script type="application/ld+json">
${JSON.stringify(schemas, null, 2)}
    </script>
    <style>
      * { box-sizing: border-box; }
      body { font-family: 'Vazirmatn', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; background-color: #fafaf9; color: #292524; margin: 0; padding: 0; line-height: 1.6; }
      .container { max-width: 900px; margin: 0 auto; padding: 1.25rem; }
      a { color: #047857; text-decoration: none; }
      a:hover { text-decoration: underline; }
      .badge { display: inline-block; padding: 4px 12px; border-radius: 9999px; font-size: 0.75rem; font-weight: 700; margin-bottom: 0.75rem; }
      .btn { display: inline-flex; align-items: center; justify-content: center; gap: 8px; padding: 10px 20px; border-radius: 12px; font-weight: 700; font-size: 0.88rem; cursor: pointer; text-decoration: none !important; }
      .btn-primary { background: #047857; color: #ffffff; }
      .btn-primary:hover { background: #065f46; }
      .btn-secondary { background: #ffffff; color: #1c1917; border: 1px solid #d6d3d1; }
      .btn-secondary:hover { background: #f5f5f4; }
    </style>
  </head>
  <body>
    <!-- Top Corporate Bar -->
    <header style="background: #1c1917; color: #ffffff; padding: 1.5rem 1rem; border-bottom: 3px solid #047857;">
      <div class="container" style="display: flex; flex-wrap: wrap; align-items: center; justify-content: space-between; gap: 1rem;">
        <div style="display: flex; align-items: center; gap: 12px;">
          <a href="${baseUrl}/" style="display: flex; align-items: center; gap: 10px; color: #ffffff; text-decoration: none;">
            <img src="${baseUrl}/logo.jpg" alt="پیشگامان" style="height: 48px; width: auto; border-radius: 8px; background: white; padding: 2px;" />
            <div>
              <div style="font-weight: 900; font-size: 1.1rem; line-height: 1.2;">پیشگامان پایدار فلات نیک</div>
              <div style="font-size: 0.75rem; color: #10b981; font-weight: 600;">برند رسمی: پرواز نهاده | مدیریت: دکتر راستین رستمی نیا</div>
            </div>
          </a>
        </div>
        <div style="display: flex; gap: 8px; align-items: center;">
          <a href="${baseUrl}/" class="btn btn-secondary" style="font-size: 0.8rem; padding: 6px 14px;">
            ← بازگشت به صفحه اصلی سایت
          </a>
        </div>
      </div>
    </header>

    <!-- Breadcrumbs -->
    <nav class="container" style="padding-top: 1rem; padding-bottom: 0.5rem; font-size: 0.82rem; color: #78716c;">
      <a href="${baseUrl}/" style="color: #78716c;">صفحه اصلی</a>
      <span style="margin: 0 6px;">/</span>
      <a href="${baseUrl}/#products" style="color: #78716c;">محصولات ۱۶ گانه</a>
      <span style="margin: 0 6px;">/</span>
      <span style="color: #047857; font-weight: 700;">${prod.nameFa}</span>
    </nav>

    <main class="container">
      <!-- Product Header Hero -->
      <section style="background: #ffffff; border: 1px solid #e7e5e4; border-radius: 1.25rem; padding: 2rem; margin-top: 0.5rem; box-shadow: 0 2px 8px rgba(0,0,0,0.03);">
        <div style="display: flex; flex-wrap: wrap; gap: 10px; margin-bottom: 0.75rem;">
          ${prod.badge ? `<span class="badge" style="background: #ecfdf5; color: #065f46; border: 1px solid #a7f3d0;">${prod.badge}</span>` : ''}
          <span class="badge" style="background: #f5f5f4; color: #44403c;">${prod.categoryTitle}</span>
          <span class="badge" style="background: #f5f5f4; color: #44403c;">بسته‌بندی: ${prod.packaging}</span>
          <span class="badge" style="background: #f5f5f4; color: #44403c;">شکل ظاهری: ${prod.appearance}</span>
        </div>

        <h1 style="font-size: 1.85rem; font-weight: 900; color: #1c1917; margin: 0 0 0.5rem 0; line-height: 1.35;">
          ${prod.detail?.h1Title || `کود ${prod.nameFa} (${prod.nameEn})`}
        </h1>
        <p style="font-size: 1.05rem; font-weight: 600; color: #047857; margin: 0 0 1.25rem 0;">
          ${prod.tagline}
        </p>
        <p style="font-size: 0.95rem; color: #44403c; line-height: 1.85; margin: 0;">
          ${prod.detail?.longIntro || prod.description}
        </p>

        <!-- Fast Action CTA Buttons -->
        <div style="display: flex; flex-wrap: wrap; gap: 10px; margin-top: 1.5rem; padding-top: 1.25rem; border-top: 1px solid #f5f5f4;">
          <a href="https://wa.me/989128247415?text=${encodeURIComponent(`سلام وقت بخیر جناب دکتر رستمی نیا، برای دریافت مشاوره و استعلام قیمت محصول «${prod.nameFa}» پیام می‌دهم.`)}" target="_blank" class="btn btn-primary" style="background: #059669;">
            💬 مشاوره و استعلام در واتس‌اپ
          </a>
          <a href="tel:09128247415" class="btn btn-secondary">
            📞 تماس مستقیم با مدیریت (09128247415)
          </a>
          <a href="${baseUrl}/#/product-${prod.slug}" class="btn btn-secondary" style="color: #047857; font-weight: 800;">
            🌐 مشاهده در کاتالوگ تعاملی سایت
          </a>
        </div>
      </section>

      ${analysisHtml}
      ${benefitsHtml}
      ${dosageHtml}
      ${cautionsHtml}
      ${faqsHtml}

      <!-- Bottom Consultation Box -->
      <section style="background: linear-gradient(135deg, #065f46, #1c1917); color: white; padding: 2.25rem 1.5rem; border-radius: 1.25rem; text-align: center; margin: 3rem 0;">
        <h3 style="font-size: 1.35rem; font-weight: 900; margin-top: 0; margin-bottom: 0.5rem;">مشاوره فنی، نسخه اختصاصی کوددهی و استعلام قیمت</h3>
        <p style="font-size: 0.9rem; color: #d1fae5; margin-bottom: 1.5rem; max-width: 600px; margin-left: auto; margin-right: auto;">
          ارسال مستقیم به تمام استان‌ها و شهرستان‌های کشور. جهت دریافت توصیه بر اساس نتایج آزمایش آب و خاک با دپارتمان فنی تماس حاصل فرمایید.
        </p>
        <div style="display: flex; justify-content: center; flex-wrap: wrap; gap: 12px;">
          <a href="tel:09128247415" style="background: #ffffff; color: #065f46; font-weight: 900; padding: 12px 24px; border-radius: 12px; font-size: 0.9rem; text-decoration: none;">
            📞 تماس تلفنی: 09128247415
          </a>
          <a href="https://wa.me/989128247415?text=${encodeURIComponent(`درخواست مشاوره کودی برای محصول ${prod.nameFa}`)}" target="_blank" style="background: #10b981; color: #022c22; font-weight: 900; padding: 12px 24px; border-radius: 12px; font-size: 0.9rem; text-decoration: none;">
            ارتباط واتس‌اپ با دکتر رستمی نیا
          </a>
        </div>
      </section>
    </main>

    <!-- Footer -->
    <footer style="background: #f5f5f4; border-top: 1px solid #e7e5e4; padding: 2rem 1rem; text-align: center; font-size: 0.85rem; color: #78716c; margin-top: 3rem;">
      <div class="container">
        <p style="font-weight: 700; color: #1c1917; margin-bottom: 0.5rem;">
          شرکت پیشگامان پایدار فلات نیک | برند رسمی پرواز نهاده
        </p>
        <p style="margin: 0.25rem 0;">مدیریت و مشاوره ارشد: دکتر راستین رستمی نیا</p>
        <p style="margin: 0.25rem 0;">دفتر تهران: فلکه اول صادقیه، خیابان پاییزان | تلفن: 02144281549</p>
        <p style="margin: 0.25rem 0;">تلفن همراه مدیریت: 09128247415 | کلیه حقوق محفوظ است.</p>
      </div>
    </footer>
  </body>
</html>`;
}

function prerenderAll(articles: any[], products: any[]) {
  const targets = [publicDir];
  if (fs.existsSync(distDir)) targets.push(distDir);

  targets.forEach(targetDir => {
    ensureDir(targetDir);

    // 1. Articles pre-rendering
    articles.forEach(art => {
      // FA
      const faDir = path.resolve(targetDir, 'articles', art.slug);
      ensureDir(faDir);
      fs.writeFileSync(path.resolve(faDir, 'index.html'), buildArticleHtml(art, 'fa'), 'utf-8');

      // EN
      const enDir = path.resolve(targetDir, 'en', 'articles', art.slug);
      ensureDir(enDir);
      fs.writeFileSync(path.resolve(enDir, 'index.html'), buildArticleHtml(art, 'en'), 'utf-8');

      // AR
      const arDir = path.resolve(targetDir, 'ar', 'articles', art.slug);
      ensureDir(arDir);
      fs.writeFileSync(path.resolve(arDir, 'index.html'), buildArticleHtml(art, 'ar'), 'utf-8');

      // Aliases
      if (art.aliases && art.aliases.length > 0) {
        art.aliases.forEach((alias: string) => {
          const aliasFaDir = path.resolve(targetDir, 'articles', alias);
          ensureDir(aliasFaDir);
          fs.writeFileSync(path.resolve(aliasFaDir, 'index.html'), buildArticleHtml(art, 'fa'), 'utf-8');
        });
      }
    });

    // 2. All 16 Products pre-rendering (both .html and directory format)
    products.forEach(prod => {
      const htmlContent = buildProductHtml(prod);

      // (a) Standalone .html in root (e.g. /challenger.html)
      fs.writeFileSync(path.resolve(targetDir, `${prod.slug}.html`), htmlContent, 'utf-8');

      // (b) Directory index.html (e.g. /products/challenger/index.html)
      const prodDir = path.resolve(targetDir, 'products', prod.slug);
      ensureDir(prodDir);
      fs.writeFileSync(path.resolve(prodDir, 'index.html'), htmlContent, 'utf-8');

      // (c) Also handle aliases (e.g. red-full.html, sulmax.html, tiger-k.html, tiger-p.html)
      if (prod.aliases && prod.aliases.length > 0) {
        prod.aliases.forEach((alias: string) => {
          fs.writeFileSync(path.resolve(targetDir, `${alias}.html`), htmlContent, 'utf-8');
          const aliasDir = path.resolve(targetDir, 'products', alias);
          ensureDir(aliasDir);
          fs.writeFileSync(path.resolve(aliasDir, 'index.html'), htmlContent, 'utf-8');
        });
      }
    });

    console.log(`✓ Pre-rendered ${articles.length * 3} articles and ${products.length} products in ${targetDir}`);
  });
}

function generate404() {
  const html404 = `<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>شرکت پیشگامان پایدار فلات نیک</title>
    <script>
      var pathSegmentsToKeep = 1;
      var l = window.location;
      l.replace(
        l.protocol + '//' + l.hostname + (l.port ? ':' + l.port : '') +
        l.pathname.split('/').slice(0, 1 + pathSegmentsToKeep).join('/') + '/?/' +
        l.pathname.slice(1).split('/').slice(pathSegmentsToKeep).join('/').replace(/&/g, '~and~') +
        (l.search ? '&' + l.search.slice(1).replace(/&/g, '~and~') : '') +
        l.hash
      );
    </script>
  </head>
  <body>
    <p>در حال بارگذاری صفحه...</p>
  </body>
</html>`;

  ensureDir(publicDir);
  fs.writeFileSync(path.resolve(publicDir, '404.html'), html404, 'utf-8');
  if (fs.existsSync(distDir)) {
    fs.writeFileSync(path.resolve(distDir, '404.html'), html404, 'utf-8');
  }
  console.log('✓ Generated 404.html fallback.');
}

async function main() {
  console.log('=== Starting SEO & Pre-rendering Generation ===');
  const articles = await loadArticles();
  const products = await loadProducts();
  console.log(`Loaded ${articles.length} articles and ${products.length} products from source.`);
  generateSitemap(articles);
  prerenderAll(articles, products);
  generate404();
  console.log('=== Finished Successfully ===');
}

main().catch(err => {
  console.error('Fatal error in generateSeo:', err);
  process.exit(1);
});

