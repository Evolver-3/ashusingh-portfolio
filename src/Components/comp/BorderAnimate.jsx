import React from 'react'

const BorderAnimate = ({textItem,className}) => {
  return (

    <div className={`relative inline-block w-fit h-fit bg- rounded-sm bg-neutral-300 z-20  p-px overflow-hidden ${className}`}>
    <div className='relative w-full h-full bg-card text-foreground rounded-sm z-20 py-1 px-2'>
    {textItem}
    </div>

      <div className='absolute h-full inset-0 bg-[conic-gradient(at_center,transparent,var(--color-golden)_20%,transparent_30%)] animate-[spin_3s_linear_infinite] scale-200 rotate-180'></div>


    <div className='absolute h-full inset-0 bg-[conic-gradient(at_center,transparent,var(--color-pup)_20%,transparent_30%)]  animate-[spin_3s_linear_infinite] scale-200 '></div>

    
    </div>
  )
}

export default BorderAnimate