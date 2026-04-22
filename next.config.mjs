/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath: "/equilbrio-em-pontos",
  trailingSlash: true,
};

export default nextConfig;