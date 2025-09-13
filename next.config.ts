import { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";
import withPWAInit from "@ducanh2912/next-pwa";

const withPWA = withPWAInit({
  dest: "public",
  register: true,
  skipWaiting: true,
  disable: process.env.NODE_ENV === "development",
  additionalManifestEntries: [
    { url: "/", revision: "1" },
    { url: "/offline.html", revision: "1" },
  ],
  runtimeCaching: [
    {
      urlPattern: /^https?:.*\.(?:png|jpg|jpeg|svg|gif|webp|avif)$/i,
      handler: "StaleWhileRevalidate",
      options: {
        cacheName: "images-cache",
        expiration: { maxEntries: 200, maxAgeSeconds: 60 * 60 * 24 * 30 },
        cacheableResponse: { statuses: [0, 200] },
      },
    },
    {
      urlPattern: /^https?:.*\.(?:css|js)$/i,
      handler: "StaleWhileRevalidate",
      options: {
        cacheName: "static-resources",
        expiration: { maxEntries: 50, maxAgeSeconds: 60 * 60 * 24 * 7 },
      },
    },
    {
      urlPattern: /^https?:.*\/api\/.*$/i,
      handler: "NetworkFirst",
      options: {
        cacheName: "next-api",
        networkTimeoutSeconds: 3,
        expiration: { maxEntries: 50, maxAgeSeconds: 60 * 60 },
      },
    },
    {
      urlPattern: /^https?:.*$/i,
      handler: "NetworkFirst",
      options: {
        cacheName: "http-cache",
        networkTimeoutSeconds: 3,
        expiration: { maxEntries: 200 },
      },
    },
  ],
// eslint-disable-next-line @typescript-eslint/no-explicit-any
} as any);


const nextConfig: NextConfig = {};

const withNextIntl = createNextIntlPlugin();

export default withNextIntl(withPWA(nextConfig));
