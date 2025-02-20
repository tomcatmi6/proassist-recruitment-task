import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../assets/styles/styles.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Proassist Recruitment Task",
  description: "Recruitment task for Proassist - blog list with filters",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <header className="header-wrapper">
          header
        </header>
        {children}
      </body>
    </html>
  );
}
