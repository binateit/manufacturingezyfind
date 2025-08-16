const fs = require('fs');
const path = require('path');

// Base URL for your website
const BASE_URL = 'https://manufacturingezyfind.com';

// Static pages that should be included in sitemap
const STATIC_PAGES = [
  '',
  '/manufacturing',
  '/manufacturing/about',
  '/manufacturing/contact',
  '/manufacturing/businesses',
  '/manufacturing/products',
  '/manufacturing/jobs',
  '/manufacturing/tenders',
  '/manufacturing/articles',
  '/pricing',
  '/login',
  '/register',
  '/cart'
];

// Function to generate sitemap XML
function generateSitemap() {
  const currentDate = new Date().toISOString();
  
  let sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
`;

  // Add static pages
  STATIC_PAGES.forEach(page => {
    const url = page === '' ? BASE_URL : `${BASE_URL}${page}`;
    sitemap += `  <url>
    <loc>${url}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${page === '' ? '1.0' : '0.8'}</priority>
  </url>
`;
  });

  sitemap += `</urlset>`;

  // Write sitemap to public directory
  const sitemapPath = path.join(__dirname, '..', 'public', 'sitemap.xml');
  fs.writeFileSync(sitemapPath, sitemap);
  
  console.log('✅ Sitemap generated successfully!');
  console.log(`📁 Location: ${sitemapPath}`);
  console.log(`🔗 URL: ${BASE_URL}/sitemap.xml`);
  console.log(`📊 Total URLs: ${STATIC_PAGES.length}`);
}

// Function to generate robots.txt with sitemap reference
function generateRobotsTxt() {
  const robotsContent = `User-agent: *
Allow: /

# Sitemap location
Sitemap: ${BASE_URL}/sitemap.xml

# Disallow admin and private areas
Disallow: /admin/
Disallow: /api/
Disallow: /_next/
Disallow: /private/

# Allow important pages
Allow: /manufacturing/
Allow: /manufacturing/businesses/
Allow: /manufacturing/products/
Allow: /manufacturing/jobs/
Allow: /manufacturing/tenders/
Allow: /manufacturing/articles/
Allow: /manufacturing/about/
Allow: /manufacturing/contact/
Allow: /pricing
Allow: /login
Allow: /register

# Crawl delay (optional)
Crawl-delay: 1
`;

  const robotsPath = path.join(__dirname, '..', 'public', 'robots.txt');
  fs.writeFileSync(robotsPath, robotsContent);
  
  console.log('✅ Robots.txt generated successfully!');
  console.log(`📁 Location: ${robotsPath}`);
}

// Main execution
try {
  console.log('🚀 Starting sitemap generation...\n');
  
  // Ensure public directory exists
  const publicDir = path.join(__dirname, '..', 'public');
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }
  
  generateSitemap();
  generateRobotsTxt();
  
  console.log('\n🎉 All files generated successfully!');
} catch (error) {
  console.error('❌ Error generating sitemap:', error.message);
  process.exit(1);
}
