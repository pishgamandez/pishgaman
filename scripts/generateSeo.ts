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

  <!-- 2. Articles Index Pages -->
  <url>
    <loc>${baseUrl}/articles/</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.95</priority>
    <xhtml:link rel="alternate" hreflang="fa" href="${baseUrl}/articles/" />
    <xhtml:link rel="alternate" hreflang="en" href="${baseUrl}/en/articles/" />
    <xhtml:link rel="alternate" hreflang="ar" href="${baseUrl}/ar/articles/" />
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
    <xhtml:link rel="alternate" hreflang="x-default" href="${baseUrl}/articles/" />
  </url>
`;

  // Add all 20 individual articles in FA, EN, AR
  articles.forEach(art => {
    const lastMod = art.fa.lastModified || '2026-10-11';
    const faUrl = `${baseUrl}/articles/${art.slug}/`;
    const enUrl = `${baseUrl}/en/articles/${art.slug}/`;
    const arUrl = `${baseUrl}/ar/articles/${art.slug}/`;

    xml += `
  <!-- Article: ${art.slug} (FA) -->
  <url>
    <loc>${faUrl}</loc>
    <lastmod>${lastMod}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.85</priority>
    <xhtml:link rel="alternate" hreflang="fa" href="${faUrl}" />
    <xhtml:link rel="alternate" hreflang="en" href="${enUrl}" />
    <xhtml:link rel="alternate" hreflang="ar" href="${arUrl}" />
    <xhtml:link rel="alternate" hreflang="x-default" href="${faUrl}" />
  </url>

  <!-- Article: ${art.slug} (EN) -->
  <url>
    <loc>${enUrl}</loc>
    <lastmod>${lastMod}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.80</priority>
    <xhtml:link rel="alternate" hreflang="fa" href="${faUrl}" />
    <xhtml:link rel="alternate" hreflang="en" href="${enUrl}" />
    <xhtml:link rel="alternate" hreflang="ar" href="${arUrl}" />
    <xhtml:link rel="alternate" hreflang="x-default" href="${faUrl}" />
  </url>

  <!-- Article: ${art.slug} (AR) -->
  <url>
    <loc>${arUrl}</loc>
    <lastmod>${lastMod}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.80</priority>
    <xhtml:link rel="alternate" hreflang="fa" href="${faUrl}" />
    <xhtml:link rel="alternate" hreflang="en" href="${enUrl}" />
    <xhtml:link rel="alternate" hreflang="ar" href="${arUrl}" />
    <xhtml:link rel="alternate" hreflang="x-default" href="${faUrl}" />
  </url>`;
  });

  xml += `\n</urlset>\n`;

  ensureDir(publicDir);
  const sitemapPublic = path.resolve(publicDir, 'sitemap.xml');
  fs.writeFileSync(sitemapPublic, xml, 'utf-8');
  console.log(`✓ Generated sitemap.xml with ${articles.length * 3 + 6} URLs.`);

  if (fs.existsSync(distDir)) {
    fs.writeFileSync(path.resolve(distDir, 'sitemap.xml'), xml, 'utf-8');
  }
}

// 2. Build pre-rendered static HTML
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

  const schemas: any[] = [
    {
      '@context': 'https://schema.org',
      '@type': 'BlogPosting',
      'headline': content.title,
      'description': metaDesc,
      'image': [`${baseUrl}/logo.png`],
      'datePublished': '2024-10-01T08:00:00+03:30',
      'dateModified': `${content.lastModified || '2026-10-11'}T10:00:00+03:30`,
      'author': {
        '@type': 'Organization',
        'name': content.author || 'دپارتمان تحقیقات و توسعه علمی پیشگامان',
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

function prerenderAll(articles: any[]) {
  const targets = [publicDir];
  if (fs.existsSync(distDir)) targets.push(distDir);

  targets.forEach(targetDir => {
    ensureDir(targetDir);

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

      // Also generate aliases (e.g. amino-acids-heat-stress, etc.)
      if (art.aliases && art.aliases.length > 0) {
        art.aliases.forEach((alias: string) => {
          const aliasFaDir = path.resolve(targetDir, 'articles', alias);
          ensureDir(aliasFaDir);
          fs.writeFileSync(path.resolve(aliasFaDir, 'index.html'), buildArticleHtml(art, 'fa'), 'utf-8');
        });
      }
    });

    console.log(`✓ Pre-rendered ${articles.length * 3} static HTML pages in ${targetDir}`);
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
  console.log(`Loaded ${articles.length} articles from source.`);
  generateSitemap(articles);
  prerenderAll(articles);
  generate404();
  console.log('=== Finished Successfully ===');
}

main().catch(err => {
  console.error('Fatal error in generateSeo:', err);
  process.exit(1);
});
