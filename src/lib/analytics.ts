import { logEvent } from "firebase/analytics";
import { getFirebaseAnalytics } from "./firebase";

function track(eventName: string, params?: Record<string, string>) {
  const analytics = getFirebaseAnalytics();
  if (!analytics) return;
  logEvent(analytics, eventName, params);
}

export function trackOutboundClick(url: string, label?: string) {
  track("outbound_click", { url, link_label: label ?? url });
}

export function trackContactClick(method: string) {
  track("contact_click", { method });
}

export function trackResumeDownload() {
  track("resume_download");
}
