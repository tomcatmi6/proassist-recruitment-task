"use client";
import { NextIntlClientProvider } from "next-intl";
import Image from "next/image";
import plMessages from '../assets/i18n/pl.json';
import "../assets/styles/styles.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
      <NextIntlClientProvider locale="pl" messages={plMessages}>
        <header className="header-wrapper">
          <Image
             className="logo-wrapper"
             src="/images/logo_mobile.svg"
             alt="logo with rounded image of a vawed lines resembling a fingerprint on the left and the text 'ACME Institute' on the right"
             height={58}
             width={185}
             priority
           />
        </header>
        {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
