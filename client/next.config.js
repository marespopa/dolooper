/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ['react-gfm', 'react-syntax-highlighter'],
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'producthunt.com',
        pathname: '/widgets/embed-image/**',
      },
    ],
  },
}
const prod = process.env.NODE_ENV === 'production'

const withPWA = require('next-pwa')({
  dest: 'public',
  disable: prod ? false : true,
})

module.exports = withPWA({ ...nextConfig })
