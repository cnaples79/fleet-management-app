/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true, // Keeps your existing strict mode setting

  // Add 'lucide-react' to the list of packages to transpile
  transpilePackages: ['lucide-react'],
}

module.exports = nextConfig;
