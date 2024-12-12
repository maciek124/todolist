/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/todolist',
  assetPrefix: '/todolist',
};

module.exports = nextConfig;
