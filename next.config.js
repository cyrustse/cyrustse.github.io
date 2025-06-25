/** @type {import('next').NextConfig} */
const nextConfig = {
  // Optional: Add a custom output directory (default is 'out')
  distDir: 'out',
  output: 'export',
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig

