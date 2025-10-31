/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  basePath: '/lp-decorative-laminates',
  assetPrefix: '/lp-decorative-laminates/',
  experimental: { typedRoutes: true },
  images: {
    domains: ['blob.v0.app', 'blobs.vusercontent.net', 'aicasunmica.com', 'localhost:3000'],
    unoptimized: true,
  }
};
export default nextConfig;