import type { Metadata } from "next";
import { Inter, Nanum_Gothic } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import ModeToggle from "@/components/modetoggle";

const inter = Inter({
  subsets: ["latin"]});

export const metadata: Metadata = {
  title: "Innova Studio",
  description: "Uebfaqja zyrtare për Innova Studio",
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
