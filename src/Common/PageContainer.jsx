import React from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'


const PageContainer = ({ children }) => {
  return (
    <>
        <Header />
        <main>
            {children}
        </main>
        <Footer />
    </>
  )
}

export default PageContainer