/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "upload.wikimedia.org",
      "static.xx.fbcdn.net",
      "platform-lookaside.fbsbx.com",
      "images.pexels.com",
      "cdna.artstation.com",
      "images.unsplash.com",
    ],
  },
};

module.exports = nextConfig;
