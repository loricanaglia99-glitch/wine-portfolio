import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const inter = Inter({ subsets: ["latin"], variable: '--font-geist-sans' });

export const metadata: Metadata = {
  title: "Lorenzo Canaglia | Italian Wine Export Professional",
  description: "WSET Level 3 certified wine professional specializing in Italian wine export. Connecting Italian wineries with global markets through Velvet Global.",
  keywords: ["Lorenzo Canaglia", "wine export", "Italian wine", "WSET", "Velvet Global", "wine professional", "Napa Valley", "Franciacorta"],
  authors: [{ name: "Lorenzo Canaglia" }],
  openGraph: {
    title: "Lorenzo Canaglia | Italian Wine Export Professional",
    description: "WSET Level 3 certified wine professional specializing in Italian wine export",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lorenzo Canaglia | Italian Wine Export Professional",
    description: "Connecting Italian wineries with global markets",
  },
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    google: "your-google-verification-code", // Add your Google verification code
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Google Analytics - Replace with your GA4 ID */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-XXXXXXXXXX');
            `,
          }}
        />
      </head>
      <body className={`${inter.variable} antialiased`}>
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
