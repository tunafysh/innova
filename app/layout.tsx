import type { Metadata } from "next";
import { Inter, Nanum_Gothic } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import ModeToggle from "@/components/modetoggle";

const inter = Nanum_Gothic({
  subsets: ["latin"],
  weight: ["400", "700"],});

export const metadata: Metadata = {
  title: "Innova Creative Studio",
  description: "Uebfaqja zyrtare për Innova Creative Studio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      >
        {children}
      </ThemeProvider>
      </body>
    </html>
  );
}
