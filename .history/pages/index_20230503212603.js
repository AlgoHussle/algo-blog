
import Head from 'next/head'

const posts = [
  { title: 'React Testing', excerpt: 'learn React Testing'},
  { title: 'React Testing With Tailwind', excerpt: 'learn React Testing With Tailwind'},
];

export default function Home() {
  return (
    <div className='container mx-auto px-10 mb-8'>
      <Head>
        <title>CMS Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='grid grid-cols-1 lg:grid-cols-12 gap-12'>
        {posts.map((post, index) => (
          <div key={index} className='col-span-1 lg:col-span-6'>
            <div className='bg-white rounded-lg shadow-lg p-5'>
              <h3 className='text-2xl font-bold mb-3'>{post.title}</h3>
              
        ))}
      </div>
      </div>
  )
}
