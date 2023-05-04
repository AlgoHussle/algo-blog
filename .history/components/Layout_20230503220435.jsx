import React from 'react'

import { Header } from './Header'

function Layout({}) {
  return (
    <>
        <Header />
        {children}
    </>
  )
}

export default Layout