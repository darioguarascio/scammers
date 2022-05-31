/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

module.exports = {
  nextConfig,
  env: {
    APP_DIRECTUS_URL: process.env.APP_DIRECTUS_URL,
    CF_ACCESS_CLIENT_SECRET: process.env.CF_ACCESS_CLIENT_SECRET,
    CF_ACCESS_CLIENT_ID: process.env.CF_ACCESS_CLIENT_ID,
    DIRECTUS_TOKEN: process.env.DIRECTUS_TOKEN,
  },
  images: {
    domains: ["*"],
  },
};
