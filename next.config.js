const svgr = require("next-svgr");
/** @type {import('next').NextConfig} */
const nextConfig = svgr({
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
});

module.exports = nextConfig;
