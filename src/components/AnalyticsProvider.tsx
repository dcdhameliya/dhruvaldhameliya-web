"use client";

import { useEffect } from "react";
import { initAnalytics } from "@/lib/firebase";
import { trackVisitorDetails } from "@/lib/analytics";

export function AnalyticsProvider() {
  useEffect(() => {
    initAnalytics().then((a) => {
      if (a) {
        console.log("[Analytics] Firebase initialized");
        trackVisitorDetails();
      } else {
        console.log("[Analytics] Firebase not initialized");
      }
    });
  }, []);

  return null;
}
