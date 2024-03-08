import type { Metadata } from "next";
import "./globals.css";
import { Poppins } from 'next/font/google'
import dynamic from 'next/dynamic'
import Loading from "./loading";

const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-poppins',
})

const Home = dynamic(
  async () => {
    return Promise.all([
      import("@/app/page"),
      new Promise(resolve => setTimeout(resolve, 2500))
    ])
      .then(([moduleExports]) => moduleExports);
  },
  {
    loading: () => <Loading />
  }
)

export const metadata: Metadata = {
  title: "Alioglu - Tikinti və Dizayn",
  description: "Xəyalları Dizayn, Gələcəyi İnşa Edirik!",
};

const RootLayout = () => {
  return (
    <html>
      <body className={`${poppins.variable}`}>
        <Home />
      </body>
    </html>
  );
}

export default RootLayout
