import React, { useEffect, useState } from 'react'
import Navbar from './Components/Navbar'
import Body from './Components/Body'
import Projects from './Components/Projects'
import Dark from './Components/DarkMode/Dark'
import Container from './Components/Container'
import {motion} from 'motion/react'
import Skills from './Components/Skills'

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

    className=' relative w-full bg-card'>

      <Navbar/>
      <Container>
      
        
        <Dark dark={dark} setDark={setDark} />
        <Body/>
        <Projects dark={dark}/>
        <Skills/>
      </Container>
    </motion.div>
  )
}

export default App