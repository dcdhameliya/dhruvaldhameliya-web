"use client";

import { useState } from "react";
import Link from "next/link";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/blog", label: "Blog" },
  { href: "/about", label: "About" },
  { href: "/how-i-work", label: "How I Work" },
  { href: "/resume", label: "Resume" },
  { href: "/contact", label: "Contact" },
];

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="sm:hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 text-foreground"
        aria-label="Toggle menu"
      >
        <svg
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
        >
          {isOpen ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          )}
        </svg>
      </button>
      {isOpen && (
        <div className="absolute left-0 right-0 top-full border-b border-neutral-200 bg-background px-4 pb-4 dark:border-neutral-800">
          <nav className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-sm text-foreground/90 transition-colors hover:text-foreground"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </div>
  );
}
