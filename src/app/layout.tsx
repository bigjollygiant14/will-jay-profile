import type { Metadata } from "next";
import Link from "next/link";
import { MantineProvider } from "@mantine/core";
import { Geist, Geist_Mono } from "next/font/google";
// Components
import StyledNavigationMenu from "@/components/organisms/StyledNavigationMenu";
import RotatingBenzene from "@/components/RotatingBenzene";
// Stylesheets
import "./globals.css";
import '@mantine/core/styles.css';
import '@mantine/code-highlight/styles.css';


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Will Jay All Day",
  description: "Human Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Header Section */}
        <header className="p-6 text-3xl flex justify-between w-full font-bold text-center bg-gray-800">
          <Link href="/" className="flex items-center text-white"><RotatingBenzene />Will Jay</Link>
          <StyledNavigationMenu />
        </header>

        <MantineProvider>
          {children}
        </MantineProvider>

        {/* Footer Section */}
        <footer className="p-6 text-center bg-gray-800">
          <Link href="/about" className="mx-4 hover:underline">
            Portfolio
          </Link>
          <Link href="/contact" className="mx-4 hover:underline">
            Contact
          </Link>
          <Link href="https://github.com/bigjollygiant14" className="mx-4 hover:underline" target="_blank" rel="noopener noreferrer">
            GitHub
          </Link>
        </footer>
      </body>
    </html>
  );
}
