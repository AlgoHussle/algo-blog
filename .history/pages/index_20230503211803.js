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
      <p className="text-center font-serif text-lg">Hello World</p>
      <p className="text-center font-mono text-lg">Hello World</p>
      <p className="text-center font-display text-lg">Hello World</p>
      <p className="text-center font-body text-lg">Hello World</p>
      <p className="text-center font-heading text-lg">Hello World</p>
  )
}
