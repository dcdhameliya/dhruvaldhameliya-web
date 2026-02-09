import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { TrackedLink } from "@/components/TrackedLink";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Dhruval Dhameliya.",
  alternates: { canonical: "/contact" },
};

const contactLinks = [
  {
    label: "Email",
    href: "mailto:hello@dhruvaldhameliya.com",
    display: "hello@dhruvaldhameliya.com",
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/dcdhameliya",
    display: "linkedin.com/in/dcdhameliya",
  },
  {
    label: "GitHub",
    href: "https://github.com/dcdhameliya",
    display: "github.com/dcdhameliya",
  },
];

export default function ContactPage() {
  return (
    <Container>
      <h1 className="text-3xl font-bold tracking-tight">Contact</h1>
      <p className="mt-4 text-foreground/70 leading-relaxed">
        Feel free to reach out — whether it&apos;s about a role, a project, or
        just to connect.
      </p>

      <div className="mt-10 space-y-6">
        {contactLinks.map((link) => (
          <div key={link.label}>
            <h3 className="text-sm font-medium text-foreground/60">
              {link.label}
            </h3>
            <TrackedLink
              trackAs="contact"
              label={link.label}
              href={link.href}
              target={link.href.startsWith("mailto") ? undefined : "_blank"}
              rel={
                link.href.startsWith("mailto")
                  ? undefined
                  : "noopener noreferrer"
              }
              className="text-blue-600 hover:underline dark:text-blue-400"
            >
              {link.display}
            </TrackedLink>
          </div>
        ))}
      </div>
    </Container>
  );
}
