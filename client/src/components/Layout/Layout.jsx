import React from 'react'
import Header from './Header'
import Footer from './Footer'
import {Helmet} from 'react-helmet';

const Layout = ({children}) => {
  return (
    <div>
     <Header/>
    <main style={{minHeight:'70vh'}}>
      {children}
    </main>
    <Footer/>
    </div>
  )
}

export default Layout
