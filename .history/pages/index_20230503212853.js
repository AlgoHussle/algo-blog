
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
        {posts.map((post, index) => (
          <div key={index} className='col-span-1 lg:col-span-6'>
            <div className='bg-white rounded-lg shadow-lg p-5'>
              <h3 className='text-2xl font-bold mb-3'>{post.title}</h3>
              <p className='text-gray-700 text-sm'>{post.excerpt}</p>
            </div>
          </div>
        ))}
      <div className='lg:col-span-4 col-span-1'>

      </div>
      </div>

      </div>
  )
}
