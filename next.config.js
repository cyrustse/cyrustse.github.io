/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // Optional: Add a custom output directory (default is 'out')
  distDir: 'out',
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig
