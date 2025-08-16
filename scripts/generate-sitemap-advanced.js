const fs = require('fs');
const path = require('path');

// Base URL for your website
const BASE_URL = 'https://manufacturingezyfind.com';

// Configuration for different types of pages
const PAGE_CONFIG = {
  static: [
    { path: '', priority: '1.0', changefreq: 'daily' },
    { path: '/manufacturing', priority: '0.9', changefreq: 'daily' },
    { path: '/manufacturing/about', priority: '0.7', changefreq: 'monthly' },
    { path: '/manufacturing/contact', priority: '0.7', changefreq: 'monthly' },
    { path: '/manufacturing/businesses', priority: '0.8', changefreq: 'weekly' },
    { path: '/manufacturing/products', priority: '0.8', changefreq: 'weekly' },
    { path: '/manufacturing/jobs', priority: '0.8', changefreq: 'weekly' },
    { path: '/manufacturing/tenders', priority: '0.8', changefreq: 'weekly' },
    { path: '/manufacturing/articles', priority: '0.8', changefreq: 'weekly' },
    { path: '/pricing', priority: '0.7', changefreq: 'monthly' },
    { path: '/login', priority: '0.5', changefreq: 'monthly' },
    { path: '/register', priority: '0.5', changefreq: 'monthly' },
    { path: '/cart', priority: '0.6', changefreq: 'weekly' }
  ],
  // Add dynamic routes here if you have them
  dynamic: [
    // Example: { path: '/manufacturing/business/[id]', priority: '0.8', changefreq: 'weekly' },
    // Example: { path: '/manufacturing/product/[id]', priority: '0.8', changefreq: 'weekly' },
  ]
};

// Function to generate sitemap XML
function generateSitemap() {
  const currentDate = new Date().toISOString();
  
  let sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
`;

  // Add static pages
  PAGE_CONFIG.static.forEach(page => {
    const url = page.path === '' ? BASE_URL : `${BASE_URL}${page.path}`;
    sitemap += `  <url>
    <loc>${url}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>
`;
  });

  // Add dynamic pages (if any)
  PAGE_CONFIG.dynamic.forEach(page => {
    const url = `${BASE_URL}${page.path}`;
    sitemap += `  <url>
    <loc>${url}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>
`;
  });

  sitemap += `</urlset>`;

  return sitemap;
}

// Function to generate robots.txt
function generateRobotsTxt() {
  return `User-agent: *
Allow: /

# Sitemap location
Sitemap: ${BASE_URL}/sitemap.xml

# Disallow admin and private areas
Disallow: /admin/
Disallow: /api/
Disallow: /_next/
Disallow: /private/
Disallow: /_vercel/

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
}

// Function to write files
function writeFiles() {
  try {
    // Ensure public directory exists
    const publicDir = path.join(__dirname, '..', 'public');
    if (!fs.existsSync(publicDir)) {
      fs.mkdirSync(publicDir, { recursive: true });
    }

    // Generate and write sitemap
    const sitemap = generateSitemap();
    const sitemapPath = path.join(publicDir, 'sitemap.xml');
    fs.writeFileSync(sitemapPath, sitemap);
    
    // Generate and write robots.txt
    const robotsContent = generateRobotsTxt();
    const robotsPath = path.join(publicDir, 'robots.txt');
    fs.writeFileSync(robotsPath, robotsContent);

    return { sitemapPath, robotsPath };
  } catch (error) {
    throw new Error(`Failed to write files: ${error.message}`);
  }
}

// Main execution
if (require.main === module) {
  try {
    console.log('🚀 Starting advanced sitemap generation...\n');
    
    const { sitemapPath, robotsPath } = writeFiles();
    
    console.log('✅ Sitemap generated successfully!');
    console.log(`📁 Location: ${sitemapPath}`);
    console.log(`🔗 URL: ${BASE_URL}/sitemap.xml`);
    
    console.log('\n✅ Robots.txt generated successfully!');
    console.log(`📁 Location: ${robotsPath}`);
    
    const totalUrls = PAGE_CONFIG.static.length + PAGE_CONFIG.dynamic.length;
    console.log(`\n📊 Total URLs: ${totalUrls}`);
    console.log('🎉 All files generated successfully!');
    
  } catch (error) {
    console.error('❌ Error generating sitemap:', error.message);
    process.exit(1);
  }
}

// Export for use in other scripts
module.exports = {
  generateSitemap,
  generateRobotsTxt,
  writeFiles
};
