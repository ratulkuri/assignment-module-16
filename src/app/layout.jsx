import Footer from "@/components/Footer";
import "./globals.css";

import localFont from 'next/font/local';
import { Poppins } from 'next/font/google';
import Header from "@/components/NavBar/Header";

import NextTopLoader from 'nextjs-toploader';
import { getSiteMeta } from "@/utilities/api";

const avenir = localFont({
  src: [
    {
      path: '../../public/assets/fonts/Avenir-Medium.ttf',
      weight: '500'
    },
  ],
  variable: '--font-avenir',
})

const poppins = Poppins({
  weight: ['400', '500', '600', '700'],
  style: ['normal'],
  subsets: ['latin'],
  variable: '--font-poppin',
})

export async function generateMetadata() {
  // SEO DATA FETCH
  const siteMetaData = await getSiteMeta('home');
  return {
    title: siteMetaData?.title || "Design Agency",
    description: siteMetaData?.description,
    keywords: siteMetaData?.keywords,
    image: siteMetaData?.image,
    url: "https://assignment-module-16.vercel.app",
    type: "website",
  };
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${avenir.variable} ${poppins.variable}`}>
      <body>
        <NextTopLoader
          color='#20B15A'
          showSpinner={false}
        />
        <Header /> {children} <Footer />
      </body>
    </html>
  );
}
