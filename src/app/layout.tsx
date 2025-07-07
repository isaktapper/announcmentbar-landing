import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Announcement Bar - Add announcement bars to your site in seconds",
  description: "Customizable. Embeddable. No coding needed. Create beautiful announcement bars for your website with our easy-to-use tool.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
  <head>
    <script
      src="https://announcmentbar-9o8swpr2y-isaktappers-projects.vercel.app/embed/kkmeyz.js"
      defer
    ></script>
  </head>
      <body
        className={`${inter.variable} font-sans antialiased`}
      >
        <Header />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
