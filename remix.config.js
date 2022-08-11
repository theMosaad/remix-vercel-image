/** @type {import('@remix-run/dev').AppConfig & {vercel:{images: import('@vercel/build-utils').Images}}} */
module.exports = {
  serverBuildTarget: "vercel",
  // When running locally in development mode, we use the built in remix
  // server. This does not understand the vercel lambda module format,
  // so we default back to the standard build output.
  server: process.env.NODE_ENV === "development" ? undefined : "./server.js",
  ignoredRouteFiles: ["**/.*"],
  vercel: {
    images: {
        sizes: [256, 384, 600, 1000],
        domains: [],
        minimumCacheTTL: 60,
        formats: ['image/webp', 'image/avif'],
      },
  },
  // appDirectory: "app",
  // assetsBuildDirectory: "public/build",
  // serverBuildPath: "api/index.js",
  // publicPath: "/build/",
};
