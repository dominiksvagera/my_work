import type { Metadata } from "next";
import { Charis_SIL } from "next/font/google";
import "./globals.css";

const charisSIL = Charis_SIL({
  weight: ["400", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Michaela & Dominik - Budeme se brát",
  description: "Pozvánka na naši svatbu",
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="cs">
      <body className={`${charisSIL.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
