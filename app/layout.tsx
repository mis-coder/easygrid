import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "EasyGrid",
  description: "Made learning CSS grid easier!",
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
