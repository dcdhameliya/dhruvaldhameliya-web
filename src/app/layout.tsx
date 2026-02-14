import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { AnalyticsProvider } from "@/components/AnalyticsProvider";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://dhruvaldhameliya.com"),
  title: {
    default: "Dhruval Dhameliya",
    template: "%s | Dhruval Dhameliya",
  },
  description:
    "Software Engineer, Android at Meta. Building mobile experiences at scale. Projects, blog, and more.",
  openGraph: {
    title: "Dhruval Dhameliya",
    description:
      "Software Engineer, Android at Meta. Building mobile experiences at scale. Projects, blog, and more.",
    url: "https://dhruvaldhameliya.com",
    siteName: "Dhruval Dhameliya",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dhruval Dhameliya",
    description:
      "Software Engineer, Android at Meta. Building mobile experiences at scale.",
  },
  icons: {
    icon: "/images/favicon.webp",
    apple: "/images/favicon.webp",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem("theme");if(t==="dark"){document.documentElement.classList.add("dark")}}catch(e){}})()`,
          }}
        />
      </head>
      <body className="min-h-screen bg-background font-sans text-foreground antialiased">
        <AnalyticsProvider />
        <div className="flex min-h-screen flex-col">
          <Header />
          <main className="flex-1 py-12">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
