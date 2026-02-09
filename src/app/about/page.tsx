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
          Hi, I&apos;m Dhruval — a Software Engineer at Meta, where I build
          Android experiences at scale. I&apos;m passionate about clean
          architecture, performance, and building products that genuinely
          improve people&apos;s lives.
        </p>
        <p>
          I started my journey in Surat, India, earning a Diploma in Computer
          Engineering (CGPA 9.42) from Tapi Diploma Engineering College,
          followed by a B.E. in Computer Engineering (CGPA 8.34) from Shree
          Swami Atmanand Saraswati Institute of Technology. Along the way, I
          developed a deep focus on mobile engineering — from native Android
          and iOS to cross-platform solutions.
        </p>
        <p>
          Before Meta, I worked as a Senior Mobile Developer at KG Krunch
          Solutions, where I led mobile app development across platforms,
          mentored junior engineers, and contributed to embedded systems
          projects. I also served as a Teaching Assistant at NJIT for
          CS 338 (Android Development), helping 40+ students learn the
          fundamentals of building real Android apps.
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
          <li>Cloud services (Firebase, AWS, Google Cloud)</li>
        </ul>
      </div>
    </Container>
  );
}
