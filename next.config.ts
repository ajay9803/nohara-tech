import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        port: "",
        hostname: "firebasestorage.googleapis.com",
        pathname: "/v0/b/pottery-house-33a71.appspot.com/**",
      },
      {
        protocol: "https",
        port: "",
        hostname: "firebasestorage.googleapis.com",
        pathname: "/v0/b/nohara-591ab.appspot.com/**",
      },
      {
        protocol: "https",
        port: "",
        hostname: "lh3.googleusercontent.com",
        pathname: "/a/**",
      },
    ],
  },
};

export default nextConfig;
