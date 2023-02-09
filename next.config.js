/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['i.pravatar.cc', 'images.unsplash.com'],
  },
};

module.exports = nextConfig;
