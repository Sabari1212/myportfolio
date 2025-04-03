import React from 'react'
import Navbar from './components/Navbar'
import Banner from './components/Banner'
import Features from './components/Features'
import Projects from './components/Projects'
import Resume from './components/Resume'
import Contact from './components/Contact'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className='w-full h-auto bodyColor text-white ' >
      <div className='max-w-screen  mx-auto px-5'>
      <Navbar/>
      <Banner/>
      <Features/>
      <Projects/>
      <Resume/>
      <Contact/>
      <Footer/>

      </div>
      
    </div>
  )
}

export default App