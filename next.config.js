/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  typescript: {
    ignoreBuildErrors: true,
  },
  swcMinify: true,
  compiler: {
    removeConsole: true,
  },
  transpilePackages: ['antd', 'rc-picker', 'date-fns'],
  images: {
    domains: ['cdn.coinranking.com'],
  },
};

module.exports = nextConfig;
