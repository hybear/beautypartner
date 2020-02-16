const withPlugins = require('next-compose-plugins');
const withOffline = require('next-offline');

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
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
