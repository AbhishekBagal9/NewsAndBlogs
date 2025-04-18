import React from 'react'
import Footer from './Footer'
import Header from './Header'
import MainSection from './MainSection'

const MainLayout = () => {
  return (
    <div className='layout'>
      <Header/>
      <MainSection/>
      <Footer/>
    </div>
  )
}

export default MainLayout