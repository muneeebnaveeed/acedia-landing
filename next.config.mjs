/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
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
