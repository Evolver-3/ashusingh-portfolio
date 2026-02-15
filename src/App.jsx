import React from 'react'
import Navbar from './Components/Navbar'
import Body from './Components/Body'
import Projects from './Components/Projects'

const App = () => {
  return (
    <div className='bg-card'>
      <Navbar/>
      <Body/>
      <Projects/>
    </div>
  )
}

export default App