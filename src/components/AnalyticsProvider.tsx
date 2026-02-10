"use client";

import { useEffect } from "react";
import { initAnalytics } from "@/lib/firebase";

export function AnalyticsProvider() {
  useEffect(() => {
    initAnalytics().then((a) => {
      if (a) {
        console.log("[Analytics] Firebase initialized");
      } else {
        console.log("[Analytics] Firebase not initialized");
      }
    });
  }, []);

  return null;
}
