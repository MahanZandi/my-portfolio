import { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";
import withPWAInit from "@ducanh2912/next-pwa";

const withPWA = withPWAInit({
  dest: "public",
  workboxOptions: {
    skipWaiting: true,
    clientsClaim: true,
    exclude: [/middleware-manifest\.json$/],
    runtimeCaching: [
      {
        // Cache static assets (JS, CSS, images, etc.)
        urlPattern: /\.(?:js|css|png|jpg|jpeg|svg|gif|woff2|ico)$/,
        handler: "CacheFirst",
        options: {
          cacheName: "static-assets",
          expiration: {
            maxEntries: 50,
            maxAgeSeconds: 30 * 24 * 60 * 60, // Cache for 30 days
          },
        },
      },
      {
        // Cache dynamic pages like /[projectSlug]
        urlPattern: ({ request, url }) =>
          request.mode === "navigate" && url.pathname.match(/^\/[a-zA-Z0-9-]+$/),
        handler: "CacheFirst",
        options: {
          cacheName: "dynamic-pages",
          expiration: {
            maxEntries: 20,
            maxAgeSeconds: 7 * 24 * 60 * 60, // Cache for 7 days
          },
        },
      },
    ],
  },
});

const nextConfig: NextConfig = {};

const withNextIntl = createNextIntlPlugin();

export default withNextIntl(withPWA(nextConfig));