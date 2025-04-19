import "./globals.css";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import { Open_Sans } from "next/font/google";

// Configure the font for better performance
const openSans = Open_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-open-sans",
});

export const metadata = {
  title: "Space Club | Community of Space Enthusiasts",
  description:
    "Join our community of space enthusiasts and explore the cosmos together. Discover events, resources, and connect with fellow space lovers.",
  keywords:
    "space club, astronomy, space enthusiasts, cosmos exploration, community",
  authors: [{ name: "Space Club Team" }],
  creator: "Space Club",
  publisher: "Space Club",
  openGraph: {
    title: "Space Club | Community of Space Enthusiasts",
    description:
      "Join our community of space enthusiasts and explore the cosmos together.",
    url: "https://spaceclub.com",
    siteName: "Space Club",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Space Club - Explore the Cosmos Together",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Space Club | Community of Space Enthusiasts",
    description:
      "Join our community of space enthusiasts and explore the cosmos together.",
    images: ["/twitter-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
    shortcut: "/shortcut-icon.png",
  },
  themeColor: "#000000",
  alternates: {
    canonical: "https://spaceclub.com",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={openSans.variable}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className="">
        <Navbar />
        <main className="pt-24">{children}</main>
        <Footer />
      </body>
    </html>
  );
}