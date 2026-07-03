import type { Metadata } from "next";
import { Geist, Geist_Mono, Instrument_Serif } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from "@/components/portfolio/providers/theme-provider";
import { SoundProvider } from "@/components/portfolio/providers/sound-provider";
import { CustomCursor } from "@/components/portfolio/cursor";
import { ScrollProgress } from "@/components/portfolio/scroll-progress";
import { KeyboardShortcuts } from "@/components/portfolio/keyboard-shortcuts";
import { CommandPalette } from "@/components/portfolio/command-palette";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Alex Rivera — Full Stack Engineer",
  description:
    "Alex Rivera is a Full Stack Engineer based in San Francisco, building distributed systems, developer tooling, and design systems. Currently shipping at Vector Labs.",
  keywords: [
    "Alex Rivera",
    "Full Stack Engineer",
    "Distributed Systems",
    "Developer Tooling",
    "San Francisco",
    "TypeScript",
    "Go",
    "React",
    "Next.js",
  ],
  authors: [{ name: "Alex Rivera" }],
  openGraph: {
    title: "Alex Rivera — Full Stack Engineer",
    description:
      "Full Stack Engineer building distributed systems, developer tooling, and design systems in San Francisco.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Alex Rivera — Full Stack Engineer",
    description:
      "Full Stack Engineer building distributed systems, developer tooling, and design systems in San Francisco.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${instrumentSerif.variable} antialiased bg-background text-foreground`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange={false}
        >
          <SoundProvider>
            <CommandPalette>
              <a href="#main" className="skip-link">
                skip to content
              </a>
              <ScrollProgress />
              <CustomCursor />
              <KeyboardShortcuts />
              {children}
              <Toaster />
            </CommandPalette>
          </SoundProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
