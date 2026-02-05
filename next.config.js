/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'images.unsplash.com',
            },
            {
                protocol: 'https',
                hostname: '**.mapbox.com',
            },
        ],
    },

    reactStrictMode: true,
    compress: true,
};

export default nextConfig;
