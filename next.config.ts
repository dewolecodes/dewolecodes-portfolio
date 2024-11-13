/** @type {import('next').NextConfig} */
const nextConfig: import("next").NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "picsum.photos",
        pathname: "/**",
      },
    ],
  },
};

// const withPWA: import("next").NextConfig = {
//   ...nextConfig,
//   pwa: {
//     dest: "public",
//   },
// };

export default nextConfig;
