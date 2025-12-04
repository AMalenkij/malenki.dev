import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "malenki.dev",
  description:
    "Specializing in the React and Next.js ecosystem. I build high-performance web applications, scalable architecture, and elegant digital products that solve business goals.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>{children}</body>
    </html>
  );
}
