/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

module.exports = {
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination:
          "https://https://godzilla-api-next-js.vercel.app/api/monsters",
      },
    ];
  },
};
