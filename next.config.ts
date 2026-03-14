import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "shadcnstore.com",
      },
    ],
  },
};

export default nextConfig;
