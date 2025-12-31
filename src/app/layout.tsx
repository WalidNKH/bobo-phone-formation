import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "BOBOPHONE - La Formation Mobile | Devenez expert en réparation",
  description:
    "Apprenez les techniques professionnelles de réparation de smartphones et lancez votre activité dans un secteur en pleine croissance. Formation 100% en ligne avec accès à vie.",
  keywords: [
    "formation réparation smartphone",
    "réparation mobile",
    "formation téléphone",
    "micro-soudure",
    "réparation iPhone",
    "réparation Samsung",
  ],
  openGraph: {
    title: "BOBOPHONE - La Formation Mobile",
    description:
      "Devenez expert en réparation de smartphones avec notre formation complète.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
