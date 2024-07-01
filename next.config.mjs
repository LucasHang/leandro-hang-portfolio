/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            { protocol: 'https', hostname: 'media.graphcms.com' },
            { protocol: 'https', hostname: 'media.graphassets.com' },
            { protocol: 'https', hostname: 'www.youtube.com' },
            { protocol: 'https', hostname: 'img.youtube.com' },
            { protocol: 'https', hostname: 'player.vimeo.com' },
        ],
    },
};

export default nextConfig;
