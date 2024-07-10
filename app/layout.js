import { Inter } from "next/font/google";
import "./globals.css";
import "@/public/styles/apropos.css"
import "@/public/styles/professionnel.css"

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "INNOV-T Madagascar",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
