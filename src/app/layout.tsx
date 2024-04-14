import type { Metadata } from "next";
import "./globals.css";
import { Poppins } from 'next/font/google'
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/react"

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
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
      <body
        style={poppins.style}
        className="bg-grayA"
      >
        {children}
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
