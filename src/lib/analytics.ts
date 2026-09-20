export const GA_MEASUREMENT_ID = "G-VVHFJ30WYW";
export const META_PIXEL_ID = "992190207227536";

type GtagWindow = Window & { gtag?: (...args: unknown[]) => void };

// No-ops when GA is blocked (ad blockers) or hasn't loaded, so tracking never breaks the page.
export function track(event: string, params: Record<string, string> = {}) {
  if (typeof window === "undefined") return;
  (window as GtagWindow).gtag?.("event", event, params);
}
