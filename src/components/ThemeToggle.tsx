"use client";

import { useEffect, useState, useRef } from "react";


export function ThemeToggle() {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [mounted, setMounted] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    setMounted(true);
    const stored = localStorage.getItem("theme");
    if (stored === "dark" || stored === "light") {
      setTheme(stored);
    }
  }, []);

  useEffect(() => {
    if (!mounted) return;
    const root = document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme, mounted]);

  function toggle() {
    if (isAnimating) return;

    const newTheme = theme === "dark" ? "light" : "dark";

    // Try View Transitions API (modern browsers)
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const doc = document as any;
    if (typeof doc.startViewTransition === "function" && buttonRef.current) {
      const rect = buttonRef.current.getBoundingClientRect();
      const x = rect.left + rect.width / 2;
      const y = rect.top + rect.height / 2;

      const maxRadius = Math.hypot(
        Math.max(x, window.innerWidth - x),
        Math.max(y, window.innerHeight - y)
      );

      document.documentElement.style.setProperty("--toggle-x", `${x}px`);
      document.documentElement.style.setProperty("--toggle-y", `${y}px`);
      document.documentElement.style.setProperty("--toggle-radius", `${maxRadius}px`);

      setIsAnimating(true);
      const transition = doc.startViewTransition.call(doc, () => {
        setTheme(newTheme);
      });
      transition.finished.then(() => setIsAnimating(false));
    } else {
      // Fallback: simple transition for older browsers
      setIsAnimating(true);
      document.documentElement.classList.add("theme-transition");
      setTheme(newTheme);
      setTimeout(() => {
        document.documentElement.classList.remove("theme-transition");
        setIsAnimating(false);
      }, 500);
    }
  }

  if (!mounted) {
    return <div className="h-9 w-9" />;
  }

  return (
    <button
      ref={buttonRef}
      onClick={toggle}
      className="rounded-lg p-2 text-foreground/80 transition-colors hover:bg-neutral-100 hover:text-foreground dark:hover:bg-neutral-800"
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
    >
      {theme === "dark" ? (
        <svg
          className={`h-5 w-5 transition-transform duration-500 ${isAnimating ? "animate-spin-once" : ""}`}
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
          />
        </svg>
      ) : (
        <svg
          className={`h-5 w-5 transition-transform duration-500 ${isAnimating ? "animate-spin-once" : ""}`}
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
          />
        </svg>
      )}
    </button>
  );
}
