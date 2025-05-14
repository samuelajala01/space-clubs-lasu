import "./globals.css";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";


export const metadata = {
  title: "Space Clubs LASU | Community of Space Enthusiasts in The Lagos State University",
  description:
    "Join our community of space enthusiasts and explore the cosmos together. Discover events, resources, and connect with fellow space lovers.",
  icons: {
    icon: '/icon.jpg',
  },
};

export const viewport = {
  themeColor: "#000000",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/ARCH 1080.png" type="image/png" />
        <link rel="preload" href="/images/home-bg.png" as="image" />
        <link rel="preload" href="/images/about-bg.jpg" as="image" />
        <link rel="preload" href="/images/join-bg.jpg" as="image" />
        <link rel="preload" href="/images/event-bg.jpg" as="image" />
      </head> */}
      <body className="bg-black">
        <Navbar />
        <main className="pt-24">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
