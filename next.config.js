/** @type {import('next').NextConfig} */

const nextConfig = {
    output: 'export',
    distDir: 'build',
    images: {
        unoptimized: true,
        domains: ["avatars.githubusercontent.com"],
    },

}

module.exports = nextConfig
