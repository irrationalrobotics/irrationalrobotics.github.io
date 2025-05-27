import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { MainNav } from "@/components/main-nav";
import { Footer } from "@/components/footer";
import { ScrollToTop } from "@/components/scroll-to-top";
import { Toaster } from "sonner";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Irrational Robotics | VEX Team 14142",
  description:
    "Irrational Robotics (14142) - Parent organization for Teams 14142A Axiom and 14142T Theorem from VEX Robotics in Allen, Texas",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased flex flex-col",
          fontSans.variable
        )}
      >
        <div className="container mx-auto px-4 flex-1 flex flex-col">
          <MainNav />
          <main className="flex-1">{children}</main>
        </div>
        <Footer />
        {typeof window !== "undefined" && (
          <>
            <ScrollToTop />
            <Toaster theme="dark" />
          </>
        )}
      </body>
    </html>
  );
}
