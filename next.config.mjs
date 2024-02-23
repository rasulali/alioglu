/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  imagesPublicPath: "/wallisconsultancy/_next/static/images/",
  basepath: "/alioglu",
  assetPrefix: "/alioglu/",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
