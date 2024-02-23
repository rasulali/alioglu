/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  imagesPublicPath: process.env.NODE_ENV === "production" ? "/alioglu/_next/static/images/" : undefined,
  basePath: process.env.NODE_ENV === "production" ? "/alioglu" : undefined,
  assetPrefix: process.env.NODE_ENV === "production" ? "/alioglu/" : undefined,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
