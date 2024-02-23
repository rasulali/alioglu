/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  imagesPublicPath: "/alioglu/_next/static/images/",
  basepath: "/alioglu",
  assetPrefix: "/alioglu/",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
