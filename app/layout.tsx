import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sentient AGI Quiz",
  description: "Interactive quiz powered by Sentient intelligence",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
