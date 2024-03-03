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
      {
        protocol: "https",
        hostname: "**.gstatic.com",
        port: "",
      },
    ],
  },
};

export default nextConfig;
