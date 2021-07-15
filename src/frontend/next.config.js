const withImages = require("next-images");

const nextConfig = {
  experimental: {
    craCompat: true,
  },
  target: "serverless",
};

module.exports = withImages(nextConfig);
