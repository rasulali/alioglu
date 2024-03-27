import type { Metadata } from "next";
import "./globals.css";
import '@fontsource/poppins'
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: "Alioglu - Tikinti və Dizayn",
  description: "Xəyalları Dizayn, Gələcəyi İnşa Edirik!",
};

export const runtime = 'edge'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body
        style={{
          fontFamily: 'Poppins, sans-serif',
        }}
        className="bg-grayA"
      >
        {children}
        <Footer />
      </body>
    </html>
  );
}
