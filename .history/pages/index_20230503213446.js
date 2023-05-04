
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
        <div className='lg:col-span-8 col-span-1'>
        {posts.map((post, index) => (
          <div>
            {post.title}
            {posts.excerpt}
          </div>
        ))}
        </div>
      <div className='lg:col-span-4 col-span-1'>
        <div className='bg-white p-4'>
          <h3 className='text-xl font-bold'>About Me</h3>
          
      </div>
      </div>

      </div>
  )
}
