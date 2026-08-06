import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Flowtra Intelligence",
  description:
    "Flowtra Intelligence builds applied AI products for operationally complex environments.",
  icons: {
    icon: "/flowtra-mark-192.png",
    shortcut: "/flowtra-mark-192.png",
    apple: "/flowtra-mark-192.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
