/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'upload.wikimedia.org',
        port: '',
        pathname: '**/640px-Google_2015_logo.svg.png'
      }
    ]
  },
}

module.exports = nextConfig
