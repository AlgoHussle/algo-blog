
import Head from 'next/head'

const posts = [
  { title: 'React Testing', excerpt: 'Learn React Testing'},
  { title: 'React Testing With Tailwind', excerpt: 'learn React Testing With Tailwind'},
];

export default function Home() {
  return (
    <div className='container mx-auto px-10 mb-8 bg-gray-50'>
      <Head>
        <title>CMS Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='grid grid-cols-1 lg:grid-cols-12 gap-12'>
        <div>

        {posts.map((post, index) => (
          <div>
            {post.title}
            
          </div>
        ))}
        </div>
      <div className='lg:col-span-4 col-span-1'>

      </div>
      </div>

      </div>
  )
}
