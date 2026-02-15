import React, { useEffect, useState } from 'react'
import Navbar from './Components/Navbar'
import Body from './Components/Body'
import Projects from './Components/Projects'
import Dark from './Components/DarkMode/Dark'

const App = () => {
  const [dark,setDark]=useState(
    localStorage.getItem("theme")==="dark"
  )

  useEffect(()=>{
    if(dark){
      document.documentElement.classList.add('dark')
      localStorage.setIteme("theme","dark")
    }else{
      document.documentElement.classList.remove("dark")
      localStorage.setItem("theme","light")
    }
  },[dark])
  
  return (
    <div className='bg-card relative '>
      <Dark dark={dark} setDark={setDark} className='absolute right-100'/>
      <Navbar/>
      <Body/>
      <Projects dark={dark}/>
    </div>
  )
}

export default App