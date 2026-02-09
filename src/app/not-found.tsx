import Link from "next/link";
import { Container } from "@/components/Container";

export default function NotFound() {
  return (
    <Container className="py-20 text-center">
      <h1 className="text-6xl font-bold tracking-tight">404</h1>
      <p className="mt-4 text-foreground/60">
        This page doesn&apos;t exist.
      </p>
      <Link
        href="/"
        className="mt-6 inline-block rounded-lg bg-foreground px-4 py-2 text-sm font-medium text-background transition-colors hover:bg-foreground/90"
      >
        Go home
      </Link>
    </Container>
  );
}
