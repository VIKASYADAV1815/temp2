import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Configuring Space Grotesk
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
  weight: ['300', '400', '500', '600', '700'], // Including weights for variety
});

export const metadata: Metadata = {
  title: "Cobalt - Intuitive Finance",
  description: "Manage your business like a pro with Cobalt.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body
        className={`${spaceGrotesk.variable} font-sans antialiased bg-background text-foreground overflow-x-hidden`}
      >
        {/* Navbar sits on top of everything */}
        <Navbar />
        
        {/* Main wrapper for page content */}
        <main className="relative min-h-screen">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}