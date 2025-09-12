import { registerRoute } from "workbox-routing";
import { NetworkFirst } from "workbox-strategies";

registerRoute(
  ({ url }) => url.pathname.startsWith("/api/"),
  new NetworkFirst({
    cacheName: "api-cache",
    networkTimeoutSeconds: 5,
  })
);

registerRoute(
  ({ request }) => request.destination === "image",
  new NetworkFirst({
    cacheName: "image-cache",
  })
);
