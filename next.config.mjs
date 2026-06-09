/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  experimental: {
    cacheComponents: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "api-nightclub.onrender.com",
      },
    ],
  },
};

export default nextConfig;
