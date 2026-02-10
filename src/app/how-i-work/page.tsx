import type { Metadata } from "next";
import { Container } from "@/components/Container";

export const metadata: Metadata = {
  title: "How I Work",
  description:
    "My engineering philosophy, workflow, and principles for building great software.",
  alternates: { canonical: "/how-i-work" },
};

export default function HowIWorkPage() {
  return (
    <Container>
      <h1 className="text-3xl font-bold tracking-tight">How I Work</h1>
      <p className="mt-4 text-foreground/70 leading-relaxed">
        A look at how I think about building software — my principles,
        workflow, and what I value in engineering.
      </p>

      <div className="mt-10 space-y-12">
        {/* Engineering Philosophy */}
        <section>
          <h2 className="text-xl font-semibold tracking-tight">
            Engineering Philosophy
          </h2>
          <ul className="mt-4 space-y-3 text-foreground/80 leading-relaxed">
            <li className="flex gap-3">
              <span className="mt-1 block h-1.5 w-1.5 shrink-0 rounded-full bg-foreground/40" />
              <span>
                <strong>Ship, then iterate.</strong> I prefer getting a working
                version out early and improving based on real feedback over
                perfecting in isolation.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="mt-1 block h-1.5 w-1.5 shrink-0 rounded-full bg-foreground/40" />
              <span>
                <strong>Simplicity over cleverness.</strong> The best code is
                code that&apos;s easy to read, change, and delete. I avoid
                premature abstractions.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="mt-1 block h-1.5 w-1.5 shrink-0 rounded-full bg-foreground/40" />
              <span>
                <strong>Own the outcome, not just the task.</strong> I care
                about the user impact, not just closing tickets.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="mt-1 block h-1.5 w-1.5 shrink-0 rounded-full bg-foreground/40" />
              <span>
                <strong>Design for change.</strong> Requirements shift.
                I write code that&apos;s modular enough to adapt without
                rewriting everything.
              </span>
            </li>
          </ul>
        </section>

        {/* Workflow */}
        <section>
          <h2 className="text-xl font-semibold tracking-tight">
            My Workflow
          </h2>
          <div className="mt-4 space-y-6">
            <div>
              <h3 className="font-medium">1. Understand the problem</h3>
              <p className="mt-1 text-sm text-foreground/70 leading-relaxed">
                Before writing any code, I make sure I understand the why — the
                user need, the business context, and the constraints.
              </p>
            </div>
            <div>
              <h3 className="font-medium">2. Design the approach</h3>
              <p className="mt-1 text-sm text-foreground/70 leading-relaxed">
                I sketch out the architecture, identify edge cases early, and
                pick the simplest approach that solves the problem well.
              </p>
            </div>
            <div>
              <h3 className="font-medium">3. Build incrementally</h3>
              <p className="mt-1 text-sm text-foreground/70 leading-relaxed">
                Small, focused commits. Each step should leave the codebase in
                a working state. I integrate early and often.
              </p>
            </div>
            <div>
              <h3 className="font-medium">4. Review and refine</h3>
              <p className="mt-1 text-sm text-foreground/70 leading-relaxed">
                I actively seek code review feedback and treat it as a learning
                opportunity. Clean code matters — it&apos;s a team asset.
              </p>
            </div>
          </div>
        </section>

        {/* Tools & Stack */}
        <section>
          <h2 className="text-xl font-semibold tracking-tight">
            Tools &amp; Stack I Reach For
          </h2>
          <div className="mt-4 grid gap-6 sm:grid-cols-2">
            <div>
              <h3 className="text-sm font-medium text-foreground/60">
                Languages
              </h3>
              <p className="mt-1 text-foreground/80">
                Kotlin, Java, Swift, Objective-C, JavaScript, TypeScript, C++
              </p>
            </div>
            <div>
              <h3 className="text-sm font-medium text-foreground/60">
                Mobile
              </h3>
              <p className="mt-1 text-foreground/80">
                Android (Jetpack Compose), iOS (SwiftUI), React Native
              </p>
            </div>
            <div>
              <h3 className="text-sm font-medium text-foreground/60">Web</h3>
              <p className="mt-1 text-foreground/80">
                React, Next.js, Tailwind CSS, Node.js
              </p>
            </div>
            <div>
              <h3 className="text-sm font-medium text-foreground/60">
                Backend &amp; Infra
              </h3>
              <p className="mt-1 text-foreground/80">
                Firebase, REST APIs, CI/CD
              </p>
            </div>
          </div>
        </section>

        {/* What I Value in Teams */}
        <section>
          <h2 className="text-xl font-semibold tracking-tight">
            What I Value in Teams
          </h2>
          <ul className="mt-4 space-y-2 text-foreground/80 leading-relaxed">
            <li className="flex gap-3">
              <span className="mt-1 block h-1.5 w-1.5 shrink-0 rounded-full bg-foreground/40" />
              Clear ownership and autonomy
            </li>
            <li className="flex gap-3">
              <span className="mt-1 block h-1.5 w-1.5 shrink-0 rounded-full bg-foreground/40" />
              Honest, direct communication
            </li>
            <li className="flex gap-3">
              <span className="mt-1 block h-1.5 w-1.5 shrink-0 rounded-full bg-foreground/40" />
              A culture that ships — not one that debates endlessly
            </li>
            <li className="flex gap-3">
              <span className="mt-1 block h-1.5 w-1.5 shrink-0 rounded-full bg-foreground/40" />
              Learning from production, not just from theory
            </li>
          </ul>
        </section>
      </div>
    </Container>
  );
}
