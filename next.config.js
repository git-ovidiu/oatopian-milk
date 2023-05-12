/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['res.cloudinary.com', 'via.placeholder.com'],
    deviceSizes: [320, 420, 768, 1024, 1200],
  },
}

module.exports = nextConfig
