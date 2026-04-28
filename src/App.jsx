import React, { useEffect, useState } from 'react'
import Navbar from './Components/Navbar/Navbar'
import Body from './Components/Body'
import Projects from './Components/ProjectsPage/Projects'
import Dark from './Components/DarkMode/Dark'
import Container from './Components/Container'
import {motion} from 'motion/react'
import Skills from './Components/SkillPage/Skills'
import Footer from './Components/Footer'
import Hero from './Components/HeroPage/Hero'
import Contact from './Components/EmailService/Contact'
import Education from './Components/Education'
import LinkPage from './Components/Links/LinkPage'
import NewHero from './Components/HeroPage/NewHero'
import NewSkillpage from './Components/SkillPage/NewSkillpage'
import NewProjectPage from './Components/ProjectsPage/NewProjectPage'


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

    className='w-full bg-smallcard'
   >

      <Container>
        
      <Navbar dark={dark} setDark={setDark} />

      <NewHero />
      <LinkPage/>
      <Education/>
      <NewProjectPage/>
      <NewSkillpage/>

        <Contact/>
        <Footer/>
      </Container>
    </motion.div>
  )
}

export default App