import type { Metadata } from "next";
import { Space_Mono } from "next/font/google";

// import { Header } from "@/components/layout/Header";
// import { Footer } from "@/components/layout/Footer";
import { siteConfig } from "@/config/site";
import "./globals.css";

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={spaceMono.className}>
        <div className="flex min-h-screen flex-col">
          {/* <Header /> */}
          <main className="flex-1">{children}</main>
          {/* <Footer /> */}
        </div>
      </body>
    </html>
  );
}
