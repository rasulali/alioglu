import type { Metadata } from "next";
import "./globals.css";
import { Poppins } from 'next/font/google'
import { Suspense, lazy } from "react";
import Loading from "./loading";
const Home = lazy(async () => {
  return Promise.all([
    import("@/app/page"),
    new Promise(resolve => setTimeout(resolve, 2500))
  ])
    .then(([moduleExports]) => moduleExports);
});

const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-poppins',
})


export const metadata: Metadata = {
  title: "Alioglu - Tikinti və Dizayn",
  description: "Xəyalları Dizayn, Gələcəyi İnşa Edirik!",
};

const RootLayout = () => {
  return (
    <html lang="az">
      <body className={`${poppins.variable}`}>
        {/* <Suspense fallback={<Loading />}>{<Home />}</Suspense> */}
        <Home />
      </body>
    </html>
  );
}
export default RootLayout;
