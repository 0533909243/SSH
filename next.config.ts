import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath: "/SSH",
  assetPrefix: "/SSH/",
};

export default nextConfig;
