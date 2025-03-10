/** @type {import('next').NextConfig} */


const nextConfig = {
  reactStrictMode: true,
  webpack: (config) => {
    config.resolve.fallback = { net: false, tls: false };
    return config;
  },
};

export default nextConfig;