/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ['antd', 'rc-picker', 'date-fns'],
  images: {
    domains: ['cdn.coinranking.com'],
  },
};

module.exports = nextConfig;
