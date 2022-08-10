// TODO: import Images type
/** @type {import('@remix-run/dev').AppConfig & {vercel:{images: { domains: string[]; remotePatterns?: {protocol?: 'http' | 'https';hostname: string;port?: string;pathname?: string;}[]; sizes: number[]; minimumCacheTTL?: number; formats?: Array<'image/avif' | 'image/webp'>; dangerouslyAllowSVG?: boolean; contentSecurityPolicy?: string; }}}} */
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
