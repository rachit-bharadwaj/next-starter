import { ReactNode } from "react";
import type { Metadata } from "next";

// styling
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Next.js Starter",
    template: "%s | Next.js Starter",
  },
  description:
    "This is a Next.js starter template created by Rachit Bharadwaj.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${outfit.className}`}>{children}</body>
    </html>
  );
}
