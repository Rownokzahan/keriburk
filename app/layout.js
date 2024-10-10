import { roboto_flex } from "./fonts";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./globals.css";
import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";

export const metadata = {
  title: "Keriburk",
  description: "A Spice Brand Website",
  icons: {
    icon: "/icons/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${roboto_flex.className} antialiased bg-ui-white`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
