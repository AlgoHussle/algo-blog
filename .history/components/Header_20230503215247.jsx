import React, {useContext} from 'react';

import Link from 'next/link';

function Header() {
  return (
    <div className='conatiner mx-auto px-10 mb-8'>
        <div className='border-b w-full inline-block border-blue-400 py-8'>
            <div className='md:float-left block'>
                <Link>
                <span></span>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Header