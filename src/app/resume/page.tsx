import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { TrackedLink } from "@/components/TrackedLink";

export const metadata: Metadata = {
  title: "Resume",
  description:
    "Dhruval Dhameliya's professional resume — Software Engineer, Android at Meta.",
  alternates: { canonical: "/resume" },
};

export default function ResumePage() {
  return (
    <Container>
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">Resume</h1>
        <TrackedLink
          trackAs="resume"
          href="/resume.pdf"
          download
          className="rounded-lg bg-foreground px-4 py-2 text-sm font-medium text-background transition-colors hover:bg-foreground/90"
        >
          Download PDF
        </TrackedLink>
      </div>

      <div className="mt-10 space-y-10">
        {/* Experience */}
        <section>
          <h2 className="text-xl font-semibold tracking-tight border-b border-neutral-200 pb-2 dark:border-neutral-800">
            Experience
          </h2>
          <div className="mt-6 space-y-8">
            <div>
              <h3 className="font-medium">Software Engineer, Android</h3>
              <p className="text-sm text-foreground/60">
                Meta &middot; Present
              </p>
              <p className="mt-2 text-sm text-foreground/80 leading-relaxed">
                Building Android experiences at scale. Working on features used
                by billions of users, focusing on performance, reliability, and
                clean architecture across Meta&apos;s family of apps.
              </p>
            </div>

            <div>
              <h3 className="font-medium">Senior Mobile Developer</h3>
              <p className="text-sm text-foreground/60">
                KG Krunch Solutions
              </p>
              <p className="mt-2 text-sm text-foreground/80 leading-relaxed">
                Led development of mobile applications for iOS and Android
                platforms. Designed and implemented features using reactive
                programming, modular architecture, and dependency injection.
                Mentored junior developers through code reviews and technical
                guidance. Contributed to embedded development projects,
                integrating hardware and software systems.
              </p>
            </div>

            <div>
              <h3 className="font-medium">Teaching Assistant — CS 338 Android Development</h3>
              <p className="text-sm text-foreground/60">
                New Jersey Institute of Technology (NJIT)
              </p>
              <p className="mt-2 text-sm text-foreground/80 leading-relaxed">
                Collaborated with Dr. Baruch Schieber to facilitate the Android
                development course. Organized weekly lab sessions, graded
                assignments, conducted code reviews, and created supplementary
                materials for 40+ students.
              </p>
            </div>
          </div>
        </section>

        {/* Education */}
        <section>
          <h2 className="text-xl font-semibold tracking-tight border-b border-neutral-200 pb-2 dark:border-neutral-800">
            Education
          </h2>
          <div className="mt-6 space-y-6">
            <div>
              <h3 className="font-medium">
                B.E. in Computer Engineering
              </h3>
              <p className="text-sm text-foreground/60">
                Shree Swami Atmanand Saraswati Institute of Technology, Surat
                &middot; August 2020 &middot; CGPA: 8.34
              </p>
            </div>
            <div>
              <h3 className="font-medium">
                Diploma in Computer Engineering
              </h3>
              <p className="text-sm text-foreground/60">
                Tapi Diploma Engineering College, Surat &middot; June 2017
                &middot; CGPA: 9.42
              </p>
            </div>
          </div>
        </section>

        {/* Skills */}
        <section>
          <h2 className="text-xl font-semibold tracking-tight border-b border-neutral-200 pb-2 dark:border-neutral-800">
            Skills
          </h2>
          <div className="mt-6 space-y-4">
            <div>
              <h3 className="text-sm font-medium text-foreground/60">
                Languages
              </h3>
              <div className="mt-2 flex flex-wrap gap-2">
                {["Kotlin", "Java", "TypeScript", "Swift", "JavaScript", "C++", "Objective-C"].map(
                  (skill) => (
                    <span
                      key={skill}
                      className="rounded-full bg-neutral-100 px-3 py-1 text-sm dark:bg-neutral-800"
                    >
                      {skill}
                    </span>
                  )
                )}
              </div>
            </div>
            <div>
              <h3 className="text-sm font-medium text-foreground/60">
                Mobile
              </h3>
              <div className="mt-2 flex flex-wrap gap-2">
                {[
                  "Android",
                  "Jetpack Compose",
                  "SwiftUI",
                  "React Native",
                  "iOS",
                ].map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full bg-neutral-100 px-3 py-1 text-sm dark:bg-neutral-800"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-sm font-medium text-foreground/60">
                Web &amp; Backend
              </h3>
              <div className="mt-2 flex flex-wrap gap-2">
                {[
                  "React",
                  "Next.js",
                  "Node.js",
                  "Firebase",
                  "AWS",
                  "Google Cloud",
                  "REST APIs",
                ].map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full bg-neutral-100 px-3 py-1 text-sm dark:bg-neutral-800"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-sm font-medium text-foreground/60">
                Tools &amp; Practices
              </h3>
              <div className="mt-2 flex flex-wrap gap-2">
                {[
                  "Android Studio",
                  "Xcode",
                  "Git",
                  "Jenkins",
                  "CI/CD",
                  "System Design",
                  "Clean Architecture",
                ].map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full bg-neutral-100 px-3 py-1 text-sm dark:bg-neutral-800"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </Container>
  );
}
