import React, { useEffect, useState } from 'react'
import Navbar from './Components/Navbar'
import Body from './Components/Body'
import Projects from './Components/Projects'
import Dark from './Components/DarkMode/Dark'
import Container from './Components/Container'
import {motion} from 'motion/react'

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
    <div className=' relative h-screen w-full overflow-hidden'>

       <motion.div
       initial={{scale:1,opacity:1}}
        animate={{scale:[1,1.1,1],opacity:[1,0.9,0.7,0.9,1] }}
        transition={{ duration: 20, repeat: Infinity }}
        className={`
          absolute inset-0 z-0
          opacity-20 mix-blend-overlay pointer-events-none
          transition-colors duration-500 ${dark?"bg-black":"bg-white"}`}
/>
      <Container>
      
        <Navbar/>
        <Dark dark={dark} setDark={setDark} />
        <Body/>
        <Projects dark={dark}/>
      </Container>
    </div>
  )
}

export default App