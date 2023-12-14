/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  // images: {
  //   domains: ['strapi.uwp.digital'],
  // },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'strapi.uwp.digital',
      },
    ],
  },
}

module.exports = nextConfig
