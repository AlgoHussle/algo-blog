import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      <h1 className="text-4xl font-bold text-center">Hello World</h1>
      <Image
        src="/vercel.svg"
        alt="Vercel Logo"
        width={72}
        height={16}
        className="mx-auto"
      />
      <p className="text-center font-sans text-lg">Hello World</p>
      
  )
}
