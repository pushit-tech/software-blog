const { withContentlayer } = require("next-contentlayer");

/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n: {
    locales: ["en-US", "es"],
    defaultLocale: "en-US",
  },
  react: {
    reactStrictMode: true,
    swcMinify: true,
  },
};

module.exports = withContentlayer(nextConfig);
