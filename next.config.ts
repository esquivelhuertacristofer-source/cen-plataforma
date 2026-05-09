import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'i.pravatar.cc' },
    ],
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 60 * 60 * 24 * 30,
  },
  compress: true,
  poweredByHeader: false,
  experimental: {
    optimizePackageImports: ['lucide-react', 'framer-motion'],
  },
  // Garantiza que Vercel incluya los JSON de actividades en el bundle de deployment
  // (necesario para que la API route los lea con fs.readFileSync en producción)
  outputFileTracingIncludes: {
    '/api/activity/[activityId]': ['./src/data/actividades/**/*.json'],
  },
};

export default nextConfig;
