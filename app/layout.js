import { roboto_flex } from "./fonts";
import "./globals.css";

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
      <body className={`${roboto_flex.className} antialiased`}>{children}</body>
    </html>
  );
}
