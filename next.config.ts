import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "https://api.unphishable.io/:path*",
        //destination: "http://localhost:8080/:path*",
      },
    ];
  },
  eslint: {
    // 在生產環境建構時忽略 ESLint 錯誤
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
};

export default nextConfig;
