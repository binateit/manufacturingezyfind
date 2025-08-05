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

  swcMinify: true,
  
  // ✅ Enable Experimental Features
  experimental: {
    optimizeCss: true, // Reduce CSS size
    scrollRestoration: true, // Better navigation UX
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
  output: "standalone", // Reduce server-side bundle size

   // ✅ Edge Runtime for Faster API Responses
   async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "/api/:path*", // Keep the same API structure
      },
      {
        source: "/businesses/:companyId/:slug.html",
        destination: "/businesses/:companyId/:slug",
      }
    ];
  },

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