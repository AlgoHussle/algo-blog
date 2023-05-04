import React, {useContext} from 'react';

import Link from 'next/link';

const categories = [{ name: 'React', slug: 'react' }, { name: 'Web Developme'}]

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
                <input className='border-2 border-gray-800 bg-transparent rounded-lg text-sm text-white w-64 px-4 pl-8 py-1 focus:outline-none focus:shadow-outline' type='text' placeholder='Search' />

            </div>
        </div>
    </div>
  )
}

export default Header