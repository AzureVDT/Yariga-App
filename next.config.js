/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    images: {
        domains: ["images.unsplash.com"],
        formats: ["image/avif", "image/webp"],
        minimumCacheTTL: 60,
        disableStaticImages: true,
    },
};

module.exports = nextConfig;
