/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  assetPrefix: "/thomas-cormican.github.io/",
  basePath: "/thomas-cormican.github.io",
};

export default nextConfig;
