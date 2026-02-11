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

export async function trackVisitorDetails() {
  const alreadyTracked = localStorage.getItem("visitor_tracked");
  if (alreadyTracked) return;

  const deviceInfo: Record<string, string> = {
    user_agent: navigator.userAgent,
    platform: navigator.platform,
    language: navigator.language,
    screen_resolution: `${screen.width}x${screen.height}`,
    viewport: `${window.innerWidth}x${window.innerHeight}`,
    timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
    referrer: document.referrer || "direct",
  };

  try {
    const res = await fetch("https://api.ipify.org?format=json");
    const data = await res.json();
    deviceInfo.ip_address = data.ip;
  } catch {
    deviceInfo.ip_address = "unknown";
  }

  track("visitor_details", deviceInfo);
  localStorage.setItem("visitor_tracked", "true");
}
