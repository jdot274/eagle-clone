import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Eagle Clone - Design Asset Manager",
  description: "Organize, search and manage your design files",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
