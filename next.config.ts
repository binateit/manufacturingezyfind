import type { NextConfig } from "next";
import { writeFileSync, existsSync, mkdirSync } from "fs";
import { join } from "path";

// Sitemap generation function
function generateSitemap() {
  const BASE_URL = 'https://manufacturingezyfind.com';
  
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
    ]
  };

  const currentDate = new Date().toISOString();
  
  let sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
`;

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

  sitemap += `</urlset>`;

  // Generate robots.txt
  const robotsContent = `User-agent: *
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

  return { sitemap, robotsContent };
}

const nextConfig: NextConfig = {
  compress: true,

  images: {
    unoptimized: true, // required for export
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 60 * 60 * 24 * 7,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.manufacturingezyfind.co.za',
        pathname: '/Documents/**',
      },
    ],
  },

  experimental: {
    optimizeCss: false,
    scrollRestoration: true,
  },

  output: "export", // fully static

  reactStrictMode: true,

  webpack(config, { isServer }) {
    if (!isServer) {
      config.optimization.splitChunks = {
        chunks: 'all',
      };
    }
    return config;
  },

  // Build hook to generate sitemap and robots.txt
  async afterBuild() {
    try {
      console.log('🚀 Generating sitemap and robots.txt...');
      
      const { sitemap, robotsContent } = generateSitemap();
      
      // Ensure public directory exists
      const publicDir = join(process.cwd(), 'public');
      if (!existsSync(publicDir)) {
        mkdirSync(publicDir, { recursive: true });
      }

      // Write sitemap
      const sitemapPath = join(publicDir, 'sitemap.xml');
      writeFileSync(sitemapPath, sitemap);
      
      // Write robots.txt
      const robotsPath = join(publicDir, 'robots.txt');
      writeFileSync(robotsPath, robotsContent);
      
      console.log('✅ Sitemap and robots.txt generated successfully!');
      console.log(`📁 Sitemap: ${sitemapPath}`);
      console.log(`📁 Robots: ${robotsPath}`);
    } catch (error) {
      console.error('❌ Error generating sitemap:', error);
    }
  },
};

export default nextConfig;
