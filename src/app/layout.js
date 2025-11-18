import "./globals.css";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import { WebVitals } from "./Components/WebVitals";
import { Open_Sans } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";

// Configure the font for better performance
const openSans = Open_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-open-sans",
  preload: true,
  fallback: ["system-ui", "arial"],
});

export const metadata = {
  title: "Space Clubs LASU | Community of Space Enthusiasts",
  description:
    "Space Clubs LASU is a community of space enthusiasts in Lagos State University passionate about space science and technology. We organise events, resources, and connect, and also build with fellow space lovers.",
  other: {
    // Preconnect to essential domains
    preconnect: "https://fonts.googleapis.com",
  },
  icons: {
    icon: [
      {
        url: "/images/icons/favicon-32x32.png",
        sizes: "32x32",
        type: "image/png",
      },
      {
        url: "/images/icons/favicon-16x16.png",
        sizes: "16x16",
        type: "image/png",
      },
      { url: "/images/icons/favicon.ico", type: "image/x-icon" },
    ],
    apple: [
      {
        url: "/images/icons/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
    other: [
      {
        url: "/images/icons/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        url: "/images/icons/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  },
  manifest: "/images/icons/site.webmanifest",
};

export const viewport = {
  themeColor: "#000000",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={openSans.variable}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/icons/favicon.ico" />
        {/* Critical resource hints */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://www.spaceclubslasu.org" />
        {/* Preload critical images */}
        <link
          rel="preload"
          href="/images/home-bg.png"
          as="image"
          type="image/png"
          fetchPriority="high"
        />
        <link
          rel="preload"
          href="/images/club-icons.png"
          as="image"
          type="image/png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/images/icons/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/images/icons/favicon-16x16.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/images/icons/apple-touch-icon.png"
        />
        <link rel="manifest" href="/images/icons/site.webmanifest" />
        <link rel="preload" href="/images/home-bg.png" as="image" />
        <link rel="preload" href="/images/about-bg.jpg" as="image" />
        <link rel="preload" href="/images/join-bg.jpg" as="image" />
        <link rel="preload" href="/images/event-bg.jpg" as="image" />
      </head>
      <body className="bg-black">
        <Navbar />
        <main className="pt-24">{children}</main>
        <Footer />
        <Analytics />
        <WebVitals />
      </body>
    </html>
  );
}
