
import React from 'react'
import PhoneCard from './comp/PhoneCard'
const Contact = () => {
  return (
    <div className='flex flex-col items-center justify-center py-10 '>

      <div className='w-full rounded-xl px-8 flex flex-col  '>

        <div className='bg-black flex items-center justify-center h-12 text-foreground rounded-t-xl'>
          <h2>contactMe@ashusingh@gmail.com</h2>

        </div>

        <div className='bg-blur bg-blue-200 h-100 p-5'>
          <h2 className='text-lg'>Enter <span>your Email here</span></h2>
          
          <div className='flex gap-5 text-center '>
            <h2 className='flex gap-2 items-center justify-center '>
            
            <svg  xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24" >
          <path d="M6 13h6v4l6-5-6-5v4H6z"></path>
          </svg>

          <span className='text-2xl py-1'>{'~'}</span></h2>

          <input type='text' placeholder='Enter email:' className='text-xl'/>
          </div>
        </div>

       
      </div>
     

    </div>
  )
}

export default Contact