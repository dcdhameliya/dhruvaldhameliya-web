import Link from "next/link";
import { Container } from "./Container";
import { MobileNav } from "./MobileNav";
import { ThemeToggle } from "./ThemeToggle";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/blog", label: "Blog" },
  { href: "/about", label: "About" },
  { href: "/how-i-work", label: "How I Work" },
  { href: "/resume", label: "Resume" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-neutral-200/80 bg-background/80 backdrop-blur-lg dark:border-neutral-800/80">
      <Container className="flex items-center justify-between py-4">
        <Link href="/" className="text-lg font-semibold tracking-tight">
          Dhruval Dhameliya
        </Link>
        <div className="flex items-center gap-4">
          <nav className="hidden gap-6 sm:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="nav-link text-sm text-foreground/90 transition-colors hover:text-foreground"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <ThemeToggle />
          <MobileNav />
        </div>
      </Container>
    </header>
  );
}
