import type { Metadata } from "next";
import { Work_Sans } from "next/font/google";
import "./globals.css";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const workSans = Work_Sans({
  subsets: ["latin"],
  variable: "--font-work-sans",
});

export const metadata: Metadata = {
  title: "Yello.bar - Announce product updates, promos, or maintenance in seconds",
  description: "Yello makes it stupidly easy to create and embed bars that actually get noticed. Templates, easy embedding, mobile-friendly.",
  icons: {
    icon: "/favicon_yello.png",
    shortcut: "/favicon_yello.png",
    apple: "/favicon_yello.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${workSans.variable} font-sans antialiased`}
      >
        <Header />
        <main>
          {children}
        </main>
        <Footer />
        <script src="https://app.yello.bar/embed/ceglrd.js" defer></script>
      </body>
    </html>
  );
}
