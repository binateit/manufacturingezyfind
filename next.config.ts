import type { NextConfig } from "next";

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

  output: "standalone", // fully static

  reactStrictMode: true,

  webpack(config, { isServer }) {
    if (!isServer) {
      config.optimization.splitChunks = {
        chunks: 'all',
      };
    }
    return config;
  },
};

export default nextConfig;
