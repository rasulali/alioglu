import type { Metadata } from "next";
import Head from "next/head";
import "./globals.css";
import { Poppins, Sacramento } from 'next/font/google'

import "@fortawesome/fontawesome-svg-core/styles.css"
import { config } from "@fortawesome/fontawesome-svg-core"
config.autoAddCss = false

const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-poppins',
})
const sacramento = Sacramento({
  subsets: ['latin'],
  display: 'swap',
  weight: '400',
  variable: '--font-sacramento',
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
    <html lang="az">
      <Head>
        <link rel="icon" href="./favicon.ico" sizes="any" />
      </Head>
      <body className={`${poppins.variable} ${sacramento.variable}`}>{children}</body>
    </html>
  );
}
