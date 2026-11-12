import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";

import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Page not found · Crewmark",
};

// URLs that match no route. The app has three root layouts (marketing, dashboard and sign-in), so this page brings
// its own <html> and styles.
export default function GlobalNotFound() {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col items-center justify-center gap-3 p-6 text-center">
        <p className="text-sm text-muted-foreground">404</p>
        <h1 className="text-2xl font-semibold tracking-tight">This page doesn&apos;t exist</h1>
        <Link href="/" className="mt-2 text-sm underline underline-offset-4">
          Back to Crewmark
        </Link>
      </body>
    </html>
  );
}
