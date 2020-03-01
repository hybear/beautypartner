const withPlugins = require('next-compose-plugins');

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});
const withOffline = require('next-offline')({
  // generateInDevMode: true,
  devSwSrc: './service-worker.js',
});

const nextConfig = {
  target: 'serverless',
  webpack: config => {
    config.node = {
      fs: 'empty',
    };
    return config;
  },
};

module.exports = withPlugins([withBundleAnalyzer, withOffline], nextConfig);
