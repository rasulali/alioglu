/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: process.env.NODE_ENV === "production" ? "/alioglu" : undefined,
  assetPrefix: process.env.NODE_ENV === "production" ? "/alioglu/" : undefined,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
