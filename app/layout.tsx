import type { Metadata } from "next";
import { Nunito_Sans } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const nunito = Nunito_Sans({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-nunito",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Patrick Aurelio",
  description: "Product leadership, UX design, and strategy — 4x TEC Award-winning.",
  openGraph: {
    title: "Patrick Aurelio",
    description: "Product leadership, UX design, and strategy — 4x TEC Award-winning.",
    url: "https://patrickaurelio.com",
    siteName: "Patrick Aurelio",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://patrickaurelio.com/images/og-image.png",
        width: 1180,
        height: 630,
        alt: "Patrick Aurelio — Product Leadership & Design",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={nunito.variable}>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
