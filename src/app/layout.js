import "./globals.css";
import { Ubuntu } from "next/font/google";
import Footer from "@/components/Footer";

const ubuntu = Ubuntu({
  subsets: ["latin"],
  weight: ["400", "500"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="da">
      <body className={ubuntu.className}>
        {children}
        <Footer />
      </body>
    </html>
  );
}
