/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  // only for github action
  // basePath: process.env.NODE_ENV === "production" ? "/alioglu" : undefined,
  // assetPrefix: process.env.NODE_ENV === "production" ? "/alioglu/" : undefined,
  // imagesPublicPath: process.env.NODE_ENV === "production" ? "/alioglu/_next/static/images/" : undefined,

  // for dev server
  // images: {
  //   unoptimized: true,
  // },
};

export default nextConfig;
