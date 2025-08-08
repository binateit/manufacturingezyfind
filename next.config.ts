import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // ✅ Enable Compression for smaller file sizes
  compress: true,
  // ✅ Optimize Images with next/image
  images: {
    unoptimized: true,
    // domains: ["www.manufacturingezyfind.co.za"], // Add external image domains
    formats: ["image/avif", "image/webp"], // Modern image formats
    minimumCacheTTL: 60 * 60 * 24 * 7, // Cache for 1 week
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.manufacturingezyfind.co.za',
        pathname: '/Documents/**',
        search: '',
      },
    ],
  },

  // ✅ Enable Experimental Features
  experimental: {
    optimizeCss: true, // Reduce CSS size
    scrollRestoration: true, // Better navigation UX
  },

  async rewrites() {
    return [
      {
        source: '/manufacturing/business/:id/:slug.html',
        destination: '/manufacturing/business/:id/:slug', // maps to [...companyId].tsx
      },
      {
        source: '/manufacturing/product/:id/:slug.html',
        destination: '/manufacturing/product/:id/:slug', // maps to [...productId].tsx
      },
      {
        source: '/manufacturing/article/:id/:slug.html',
        destination: '/manufacturing/article/:id/:slug', // maps to [...articleId].tsx
      },
      {
        source: '/manufacturing/jobs/:id/:slug.html',
        destination: '/manufacturing/jobs/:id/:slug', // maps to [...jobId].tsx
      },
      {
        source: '/manufacturing/tenders/:id/:slug.html',
        destination: '/manufacturing/tenders/:id/:slug', // maps to [...tenderId].tsx
      },
      {
        source: '/manufacturing/digital/:id/:slug.html',
        destination: '/manufacturing/digital/:id/:slug', // maps to [...eflyerId].tsx
      },
    ];
  },

  // ✅ Enable HTTP/2 & Cache-Control Headers
  async headers() {
    return [
      {
        source: "/(.*)", // Applies to all routes
        headers: [
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" }, // Cache assets
          { key: "Strict-Transport-Security", value: "max-age=31536000; includeSubDomains; preload" }, // Enforce HTTPS
        ],
      },
    ];
  },

  // ✅ Optimize Server Rendering
  output: "export", // Reduce server-side bundle size

  // ✅ Enable Web Analytics for Core Web Vitals
  // analyticsId: process.env.NEXT_PUBLIC_ANALYTICS_ID || "",

  // ✅ React Strict Mode (Recommended)
  reactStrictMode: true,

  // ✅ Optimize JavaScript Bundles with splitChunks
  webpack(config, { isServer }) {
    if (!isServer) {
      config.optimization.splitChunks = {
        chunks: 'all',
        // More fine-grained configuration can be added if needed
      };
    }
    return config;
  },

};

export default nextConfig;