/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**.figma.com",
        port: "",
      },
    ],
  },
};

export default nextConfig;
