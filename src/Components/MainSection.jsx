import React from 'react'
import Wheater from './Wheater'
import Calender from './Calender'
import "./MainSection.css"

const MainSection = () => {
  return (
    <div className='flex'>
      <nav className='navbar'>
      <div className="user">
sadfasf
      </div>
      <div className="categories">
asdfdasfasf
      </div>
      </nav>
      <div className="newsSection">
      <div className="heading">
akffl
      </div>
        <div className="newsCards">
            <h1>News Cards</h1>
      </div>
      </div>
      <div className="myBlogs">
blogsss
      </div>
      <div className="sidebar">
        <Wheater/>
        <Calender/>
      </div>
    </div>
  )
}

export default MainSection;