/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true, // Required for static hosting
  },
  trailingSlash: true, // Adds a trailing slash to all paths
};

module.exports = nextConfig;
