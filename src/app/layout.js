import "./globals.css";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";


export const metadata = {
  title: "Space Club",
  description:
    "Join our community of space enthusiasts and explore the cosmos together.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-black text-white">
        <Navbar />
        <main className="pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
