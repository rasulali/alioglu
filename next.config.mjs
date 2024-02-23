/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basepath: "/alioglu",
  assetPrefix: "/alioglu/",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
