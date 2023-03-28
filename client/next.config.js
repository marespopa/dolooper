/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['api.producthunt.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'producthunt.com',
        pathname: '/widgets/embed-image/**',
      },
    ],
  },
}

module.exports = nextConfig
