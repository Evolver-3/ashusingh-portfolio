import React, { useState } from 'react' 
import {motion, useMotionValueEvent, useScroll} from 'motion/react'
import Container from './Container';


const Navbar = () => {

  const navItems=[
    {
      title:"About",
      href:'/about',
    },
    {
      title:"Projects",
      href:'/projects'
    },
    {
      title:"Contact",
      href:"/contact"
    },
    {
      title:"Blog",
      href:'/blog'
    }
  ];

  const [hovered,setHovered]=useState();
  const {scrollY}=useScroll();

  const[scrolled,setScrolled]=useState(false)


  useMotionValueEvent(scrollY,"change",(latest)=>{
   if(latest > 15){
    setScrolled(true);
   }else{
    setScrolled(false)
   }
  })

  return (
    <Container>

    <motion.nav
    animate={{
       boxShadow:scrolled ? "var(--shadow-acer)" : "none",
       width:scrolled ? "70%":"100%",
       y:scrolled ? 10:0,
       borderRadius:scrolled? "10rem":"0"
    }}
    transition={{
      duration:.3,
      ease:"easeInOut"
    }}
    
    className=' fixed inset-x-0 top-0 mx-auto max-w-7xl flex items-center justify-between p-2 bg-nav md:px-10'>

      <img className='w-10 h-10 rounded-full' src="/profile.jpg" height="100" width="100" alt="profile"></img>



      <div className='flex items-center'>

        {navItems.map((item,index)=>(

          <a href={item.href} key={index} className='text-sm text-foreground relative px-2 py-1'
          onMouseEnter={()=>setHovered(index)}
          onMouseLeave={()=>setHovered(null)}>

            { hovered ===index &&
              (<motion.span layoutId='hovered-span' className='h-full w-full absolute inset-0 rounded-md bg-neutral-100 '>
              </motion.span>)
            }

            <span className='z-10 relative'> {item.title} </span>

          </a>
        ))}
      </div>
      
    </motion.nav>
    </Container>
   
  )
}

export default Navbar