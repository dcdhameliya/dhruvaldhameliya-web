import { Container } from "./Container";
import { TrackedLink } from "./TrackedLink";

const socialLinks = [
  { href: "https://github.com/dcdhameliya", label: "GitHub" },
  { href: "https://linkedin.com/in/dcdhameliya", label: "LinkedIn" },
];

export function Footer() {
  return (
    <footer className="border-t border-neutral-200 dark:border-neutral-800">
      <Container className="flex flex-col items-center justify-between gap-4 py-8 sm:flex-row">
        <p className="text-sm text-foreground/60">
          &copy; {new Date().getFullYear()} Dhruval Dhameliya
        </p>
        <div className="flex gap-4">
          {socialLinks.map((link) => (
            <TrackedLink
              key={link.href}
              trackAs="outbound"
              label={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-foreground/60 transition-colors hover:text-foreground"
            >
              {link.label}
            </TrackedLink>
          ))}
        </div>
        <p className="text-xs text-foreground/40">Built with Next.js</p>
      </Container>
    </footer>
  );
}
