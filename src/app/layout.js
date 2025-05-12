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
  title: "Space Clubs LASU | Community of Space Enthusiasts",
  description:
    "Join our community of space enthusiasts and explore the cosmos together. Discover events, resources, and connect with fellow space lovers.",
  icons: {
    icon: [{ url: "/images/ARCH 1080.png", type: "image/png" }],
  },
};

export const viewport = {
  themeColor: "#000000",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={openSans.variable}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/ARCH 1080.png" type="image/png" />
      </head>
      <body className="">
        <Navbar />
        <main className="pt-24">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
