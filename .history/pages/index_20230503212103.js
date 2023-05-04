import Image from 'next/image'
import { Inter } from 'next/font/google'
import Head from 'next/head'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      <Head>
        <title>Next.js + Tailwind CSS + Inter</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preload" href="/fonts/Inter.var.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <style>{`
          @font-face {
            font-family: 'Inter';
            font-style: normal;
            font-weight: 100 900;
            font-display: optional;
            src: url('/fonts/Inter.var.woff2') format('woff2');
          }
        `}</style>
      </div>
  )
}
