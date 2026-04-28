import React from 'react'

const Footer = () => {
  return (
    <div className='flex flex-col text-foreground items-center justify-center gap-1'>
      <h2 className='text-lg font-semibold'>Designed and Coded by <span className='text-xl'>Ashu.</span></h2>

      <h3 className='text-sm'>© {new Date().getFullYear()}  All rights reserved.</h3>

      <h2 className='text-sm'>Open to internships and freelance opportunities.</h2>

      <h2 className='text-sm'>Kanpur U.P India</h2>
      

    </div>
  )
}

export default Footer