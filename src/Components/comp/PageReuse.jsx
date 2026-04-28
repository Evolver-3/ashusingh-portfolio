import React from 'react'
import {motion} from 'motion/react'

const PageReuse = ({children,text}) => {

  return (
    <div
    className='w-full px-8 flex flex-col gap-3 rounded-sm  md:px-20'>

      <h2 className='text-4xl font-flamenco-light text-foreground leading-tight'>
        {text}</h2>

      <div
      
      className=' py-5 px-5 rounded-lg ring ring-smallcard shadow-finta w-full'>
        {children}
      </div>
    </div>
  )
}

export default PageReuse