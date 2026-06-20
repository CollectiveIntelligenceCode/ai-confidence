import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'aiday.solvedtogether.co.uk',
      },
    ],
  },
};

export default nextConfig;
