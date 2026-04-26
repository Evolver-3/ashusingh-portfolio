import React from 'react'

const Footer = () => {
  return (
    <div className='flex flex-col text-foreground items-center justify-center gap-2'>
      <h2 className='text-xl font-semibold'>Designed and Coded by <span className='text-2xl'>Ashu.</span></h2>

      <h3>© {new Date().getFullYear()}  All rights reserved.</h3>

      <h2>Open to internships and freelance opportunities.</h2>

      <h2>Kanpur U.P India</h2>
      

    </div>
  )
}

export default Footer