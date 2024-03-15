import type { Metadata } from "next";
import "./globals.css";
import { Poppins } from 'next/font/google'
import Footer from "@/components/footer";

const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
})

export const metadata: Metadata = {
  title: "Alioglu - Tikinti və Dizayn",
  description: "Xəyalları Dizayn, Gələcəyi İnşa Edirik!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body className={`${poppins.className}`}>
        {children}
        <Footer />
      </body>
    </html>
  );
}
