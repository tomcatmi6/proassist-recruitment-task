"use client";
import { NextIntlClientProvider } from "next-intl";
import plMessages from '../assets/i18n/pl.json';
import "../assets/styles/styles.css";
import { GlobalProvider } from "@/context/globalContext";
import Header from "@/components/Header";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl">
      <body>
      <NextIntlClientProvider locale="pl" messages={plMessages} timeZone="Europe/Warsaw">
      <Header />
          <GlobalProvider>
            {children}
            <ToastContainer
              position="top-right"
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
            />
          </GlobalProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
