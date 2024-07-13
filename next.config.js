// next.config.js
const nextConfig = {
  // Your existing config settings
  
  typescript: {
    // Ignores TypeScript errors on build
    ignoreBuildErrors: true,
  },
  
  // Other configurations like transpilePackages if necessary
  transpilePackages: ['lucide-react'],
};

module.exports = nextConfig;
