import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { MotionProvider } from "@/components/motion/MotionProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const metadata: Metadata = {
  title: "Jashanpreet Kaur | React & Next.js Developer",
  description:
    "Modern React.js & Next.js developer portfolio of Jashanpreet Kaur from Mohali, Punjab. Specializing in performant, scalable frontend engineering with premium UI.",
  metadataBase: new URL(siteUrl),
  openGraph: {
    title: "Jashanpreet Kaur | React & Next.js Developer",
    description:
      "Premium 2026 developer portfolio showcasing React.js & Next.js projects, experience, and skills.",
    url: siteUrl,
    siteName: "Jashanpreet Kaur Portfolio",
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jashanpreet Kaur | React & Next.js Developer",
    description:
      "Frontend engineer crafting modern React & Next.js experiences with premium UI.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <MotionProvider>{children}</MotionProvider>
      </body>
    </html>
  );
}
