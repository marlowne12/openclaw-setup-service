import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/openclaw-setup-service",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
