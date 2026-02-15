import React from 'react'


const Container = ({children,className=""}) => {
  return (<>
    
    <div className={`max-w-7xl mx-auto w-full bg-background ${className}`}>
      
      
      {children}
    </div>
    
  </>
  )
}

export default Container