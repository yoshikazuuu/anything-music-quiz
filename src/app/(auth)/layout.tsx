import "@/styles/globals.css";
import { Inter as FontSans } from "next/font/google";

import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/theme/theme-provider";
import { Metadata } from "next";
import { UserProfile } from "./components/user-profile";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Anything Music Quiz",
  description: "Your so music quiz but customizable (i guess).",
  openGraph: {
    url: "https://anythingmusicquiz.com",
    siteName: "Anything Music Quiz",
    images: [
      {
        url: "https://anythingmusicquiz.com/og.png",
        width: 1200,
        height: 630,
      },
      {
        url: "https://anythingmusicquiz.com/og.png",
        width: 1200,
        height: 630,
        alt: "og",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    site: "Anything Music Quiz",
    description: "Your so music quiz but customizable (i guess).",
    images: [
      {
        url: "https://anythingmusicquiz.com/og.png",
        width: 1200,
        height: 630,
      },
      {
        url: "https://anythingmusicquiz.com/og.png",
        width: 1200,
        height: 630,
        alt: "og",
      },
    ],
    card: "summary_large_image",
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex h-screen items-center justify-between flex-col p-10">
            <p className="text-balance h-16 w-[102%] bg-gradient-to-r from-purple-400 to-yellow-400 bg-clip-text text-center text-5xl font-extrabold tracking-tighter text-transparent  dark:bg-gradient-to-r dark:from-teal-400 dark:to-yellow-200">
              Anything Music Quiz
            </p>
            {children}
            <div className="place-content-end">
              <UserProfile />
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
