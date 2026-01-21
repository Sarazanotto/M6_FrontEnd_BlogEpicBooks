import React from 'react'
import TopNav from '../components/topNav/TopNav'
import Hero from '../components/topNav/hero/Hero'

import MainPage from '../components/main/mainPage/MainPage'

const Homepage = () => {
  return (
    <div>
      <Hero/>
      <TopNav/>
    
      <MainPage/>
    </div>
  )
}

export default Homepage
