import React, {useContext} from 'react';

import Link from 'next/link';

const categories = [{ name: 'React', slug: 'react' }, { name: 'Web Development', slug: 'web-dev'}]

function Header() {
  return (
    <div className='conatiner mx-auto px-10 mb-8'>
        <div className='border-b w-full inline-block border-blue-400 py-8'>
            <div className='md:float-left block'>
                <Link>
                <span className='cursor-pointer font-bold text-4xl text0white'>
                     Algos Blog
                </span>
                </Link>
            </div>
            <div className='hidden md:float-left md:contents'>
                {categories.map((category) => (
                    <Link key={category.slug} href={`/category/`}></Link>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Header