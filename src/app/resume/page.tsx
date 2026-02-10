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
                Meta (Instagram &ndash; Monetization Client Platform), Menlo
                Park, CA &middot; Mar 2025 &ndash; Present
              </p>
              <p className="mt-2 text-sm text-foreground/80 leading-relaxed">
                Android engineer on Instagram&apos;s Monetization Client
                Platform, owning experimentation logic for the Reels surface.
              </p>
              <ul className="mt-2 space-y-1.5 text-sm text-foreground/80 leading-relaxed list-disc pl-5">
                <li>
                  Delivered client-side monetization features with direct
                  revenue, infrastructure, and reliability impact on Reels ads.
                </li>
                <li>
                  Own experiment-driven rollout strategy — from employee
                  testing through staged audience validation to full launch
                  based on metric signals.
                </li>
                <li>
                  Analyze revenue and behavioral experiment results to make
                  go / no-go / iterate decisions in partnership with product
                  and data science.
                </li>
                <li>
                  Built and evolved shared client platform components that
                  support monetization delivery and experimentation at scale.
                </li>
                <li>
                  Improved safety and robustness of delivery flows through
                  controlled rollouts, monitoring, and data-backed validation
                  under high traffic.
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-medium">Teaching Assistant — CS 338 Android Development</h3>
              <p className="text-sm text-foreground/60">
                New Jersey Institute of Technology (NJIT) &middot; Jan 2023 &ndash; May 2024
              </p>
              <p className="mt-2 text-sm text-foreground/80 leading-relaxed">
                Partnered with Dr. Baruch Schieber to deliver the CS 338 Android
                development course to 40+ students. Led weekly lab sessions,
                provided hands-on code reviews, and graded assignments with
                detailed feedback. Created supplementary learning materials and
                contributed to curriculum development, bringing real-world Android
                expertise into the classroom to raise the bar on student outcomes.
              </p>
            </div>

            <div>
              <h3 className="font-medium">Senior Mobile Developer</h3>
              <p className="text-sm text-foreground/60">
                KG Krunch Solutions &middot; Dec 2019 &ndash; Jun 2022
              </p>
              <ul className="mt-2 space-y-1.5 text-sm text-foreground/80 leading-relaxed list-disc pl-5">
                <li>
                  Led end-to-end development of iOS and Android apps using
                  Kotlin, Swift, Java, and React Native — from architecture
                  through App Store / Play Store deployment.
                </li>
                <li>
                  Architected apps with MVVM, MVI, Clean Architecture, and
                  VIPER patterns; introduced dependency injection (Dagger2),
                  reactive programming (RxJava/RxSwift, Coroutines), and
                  modular codebases.
                </li>
                <li>
                  Integrated RESTful APIs, GraphQL, OAuth, and third-party
                  services (payment gateways, social login, Google Maps,
                  MapKit) to extend app capabilities.
                </li>
                <li>
                  Built CI/CD pipelines with Jenkins, Fastlane, and GitHub
                  Actions; enforced automated testing (JUnit, Espresso,
                  XCTest) to ship with confidence.
                </li>
                <li>
                  Implemented cloud backends on Firebase (Firestore, Cloud
                  Functions, FCM/APNS push notifications).
                </li>
                <li>
                  Contributed to embedded systems projects — firmware
                  development, RTOS integration, and hardware communication
                  via I2C, SPI, and UART protocols.
                </li>
                <li>
                  Mentored junior developers through code reviews and
                  technical guidance, streamlining team processes and
                  fostering continuous learning.
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Education */}
        <section>
          <h2 className="text-xl font-semibold tracking-tight border-b border-neutral-200 pb-2 dark:border-neutral-800">
            Education
          </h2>
          <div className="mt-6 space-y-8">
            <div>
              <h3 className="font-medium">
                M.S. in Computer Science
              </h3>
              <p className="text-sm text-foreground/60">
                New Jersey Institute of Technology (NJIT), Ying Wu College of
                Computing, Newark, NJ &middot; Sep 2022 &ndash; May 2024
                &middot; GPA: 3.4
              </p>
              <p className="mt-2 text-sm text-foreground/80 leading-relaxed">
                Coursework: Data Mining, Web Systems Development, Java
                Programming, Data Structures &amp; Algorithms, Operating Systems
                Design, AI, Machine Learning, Big Data.
              </p>
            </div>
            <div>
              <h3 className="font-medium">
                B.E. in Computer Engineering
              </h3>
              <p className="text-sm text-foreground/60">
                Shree Swami Atmanand Saraswati Institute of Technology, Surat
                (Gujarat Technological University) &middot; Jan 2016 &ndash; Aug
                2020 &middot; CGPA: 8.34
              </p>
              <p className="mt-2 text-sm text-foreground/80 leading-relaxed">
                Coursework: Data Mining, Python Programming, OOP with C++ &amp;
                Java, Artificial Intelligence.
              </p>
            </div>
            <div>
              <h3 className="font-medium">
                Diploma in Computer Engineering
              </h3>
              <p className="text-sm text-foreground/60">
                Tapi Diploma Engineering College, Surat (Gujarat Technological
                University) &middot; Aug 2014 &ndash; Jun 2017 &middot; CGPA:
                9.42
              </p>
              <p className="mt-2 text-sm text-foreground/80 leading-relaxed">
                Coursework: Java Programming, Data Structures, DBMS, Mobile
                Computing.
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
                {["Kotlin", "Java", "Swift", "Objective-C", "JavaScript", "TypeScript", "C++"].map(
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
                  "iOS",
                  "SwiftUI",
                  "React Native",
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
                  "Firebase",
                  "REST APIs",
                  "React",
                  "Next.js",
                  "Node.js",
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
                  "CI/CD",
                  "Jenkins",
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
