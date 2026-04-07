import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/mortgage-calculator", destination: "/tools/mortgage-calculator", permanent: true },
      { source: "/commission-split-calculator", destination: "/tools/commission-split-calculator", permanent: true },
      { source: "/lead-roi-calculator", destination: "/tools/lead-roi-calculator", permanent: true },
      { source: "/rent-vs-buy", destination: "/tools/rent-vs-buy", permanent: true },
    ];
  },
};

export default nextConfig;
