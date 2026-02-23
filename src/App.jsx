import React, { useEffect, useState } from 'react'
import Navbar from './Components/Navbar'
import Body from './Components/Body'
import Projects from './Components/Projects'
import Dark from './Components/DarkMode/Dark'
import Container from './Components/Container'
import {motion} from 'motion/react'
import Skills from './Components/Skills'
import Footer from './Components/Footer'
import Hero from './Components/Hero'
import Contact from './Components/Contact'



const App = () => {
  const [dark,setDark]=useState(
    localStorage.getItem("theme")==="dark"
  )

  useEffect(()=>{
    if(dark){
      document.documentElement.classList.add('dark')
      localStorage.setItem("theme","dark")
    }else{
      document.documentElement.classList.remove("dark")
      localStorage.setItem("theme","light")
    }
  },[dark])
  
  return (
    <motion.div 

    className='w-full bg-card'>

      <Navbar/>
      <Container>
      <Hero/>
        
        <Dark dark={dark} setDark={setDark} />
    
        <Projects dark={dark}/>
        <Skills dark={dark} />

        <Footer/>
        
        
    
      </Container>
    </motion.div>
  )
}

export default App