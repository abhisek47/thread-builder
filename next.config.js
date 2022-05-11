/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['i.pravatar.cc']
  },
  distDir: 'build'
}

module.exports = nextConfig
