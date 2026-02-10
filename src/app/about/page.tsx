import type { Metadata } from "next";
import { Container } from "@/components/Container";

export const metadata: Metadata = {
  title: "About",
  description:
    "Dhruval Dhameliya — Software Engineer, Android at Meta. Background, skills, and focus areas.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <Container>
      <h1 className="text-3xl font-bold tracking-tight">About</h1>
      <div className="mt-8 space-y-6 text-foreground/80 leading-relaxed">
        <p>
          Hi, I&apos;m Dhruval — a Software Engineer on Instagram&apos;s
          Monetization Client Platform at Meta, where I own experimentation
          logic for Reels. I&apos;m passionate about building reliable,
          high-impact systems at scale and shipping with data-driven
          confidence.
        </p>
        <p>
          I started my journey in Surat, India, earning a Diploma in Computer
          Engineering from Tapi Diploma Engineering College, followed by a
          B.E. in Computer Engineering from SSASIT under Gujarat Technological
          University. I then moved to the U.S. to pursue an M.S. in Computer
          Science at NJIT&apos;s Ying Wu College of Computing, graduating in
          2024.
        </p>
        <p>
          Before Meta, I worked as a Senior Mobile Developer at KG Krunch
          Solutions, where I led mobile app development across platforms,
          mentored junior engineers, and contributed to embedded systems
          projects. I also spent over a year as a Teaching Assistant at NJIT
          for CS 338 (Android Development), partnering with Dr. Baruch Schieber
          to lead labs, code reviews, and curriculum development for 40+
          students.
        </p>
        <p>
          I care about writing code that&apos;s simple, maintainable, and
          designed for change. Whether it&apos;s a feature reaching billions
          of users at Meta or a side project, I apply the same principles:
          ship early, iterate fast, and own the outcome.
        </p>

        <h2 className="text-xl font-semibold tracking-tight pt-4">
          Focus Areas
        </h2>
        <ul className="list-disc pl-5 space-y-2">
          <li>Android engineering (Kotlin, Jetpack Compose)</li>
          <li>iOS development (Swift, SwiftUI)</li>
          <li>System design &amp; scalable architecture</li>
          <li>Cross-platform mobile (React Native)</li>
          <li>Cloud services (Firebase)</li>
        </ul>
      </div>
    </Container>
  );
}
