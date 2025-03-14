import type { Metadata } from "next";
import { Big_Shoulders_Display } from "next/font/google";
import "./globals.css";

const bigShoulders = Big_Shoulders_Display({
  subsets: ["latin"],
  variable: "--font-big-shoulders",
  weight: ["400", "700"], 
});

export const metadata: Metadata = {
  title: "Kalpit Thakur's Portfolio",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${bigShoulders.variable} antialiased`}>{children}</body>
    </html>
  );
}
