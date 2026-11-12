import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import "../globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Crewmark",
  description: "Manage your AI agent crew: digital employees, KPIs and tasks.",
};

// The dashboard's root layout. The localized marketing pages and the sign-in pages have their own, so moving between
// them is a full page load. Each organization's data is loaded by org/[slug]/layout.tsx.
export default function DashboardLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <TooltipProvider>{children}</TooltipProvider>
        <Toaster />
      </body>
    </html>
  );
}
