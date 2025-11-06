/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  // Ensure CSS is properly loaded in production
  swcMinify: true,
  // Compress output for better performance
  compress: true,
}

export default nextConfig
