import type { Metadata } from "next";
import Head from "next/head";
import "./globals.css";
import { Poppins } from 'next/font/google'

import "@fortawesome/fontawesome-svg-core/styles.css"
import { config } from "@fortawesome/fontawesome-svg-core"
config.autoAddCss = false

const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
})


export const metadata: Metadata = {
  title: "Ali Oglu - Tikinti və Dizayn",
  description: "Tezliklə xidmətinizdə",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="./favicon.ico" sizes="any" />
      </Head>
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
