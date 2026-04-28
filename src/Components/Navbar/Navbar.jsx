import React, { useState } from 'react' 
import {motion, useMotionValueEvent, useScroll} from 'motion/react'
import Container from '../Container';
import Dark from '../DarkMode/Dark';


const Navbar = ({dark,setDark}) => {

  const navItems=[
    {
      title:"About",
      href:'/about',
    },
    {
      title:"Projects",
      href:'#projects'
    },
    {
      title:"Contact",
      href:"#contact"
    },
    {
      title:"Skill",
      href:'#skills'
    }
  ];

  const [hovered,setHovered]=useState();
  const {scrollY}=useScroll();

  const[scrolled,setScrolled]=useState(false)


  useMotionValueEvent(scrollY,"change",(latest)=>{
   if(latest > 15 && !scrolled){
    setScrolled(true);
   }else if(latest <=15 && scrolled){
    setScrolled(false)
   }
  })

  return (

      
      <motion.nav
      layout
      initial={{opacity:0,y:-80}}
      animate={{
        opacity:1,
        boxShadow:scrolled ? "var(--shadow-acer)" : "none",
        width:scrolled ? "0.90":"1",
        y:scrolled ? 10:0
        }}
        transition={{
        duration:.3,
        ease:"easeInOut"
        }}
    
      className=' fixed z-50 inset-x-0 top-0 mx-auto max-w-5xl flex items-center justify-between p-2 bg-nav md:px-10'>

         <div className='flex justify-between items-center w-full pl-4 py-2'>

          <Dark dark={dark} setDark={setDark} />

         <div>
           {navItems.map((item,index)=>(

            <a href={item.href} key={index} className='text-sm text-foreground relative px-2 py-1 hover:text-background'
          onMouseEnter={()=>setHovered(index)}
          onMouseLeave={()=>setHovered(null)}>

            {hovered ===index &&
              (<motion.span layoutId='hovered-span' className='h-full w-full absolute inset-0 rounded-md bg-neutral-100 dark:bg-gray-500'>
              </motion.span>)
            }

            <span className='z-10 relative'> {item.title} </span>

          </a>
        ))}
         </div>
      </div>
      
    </motion.nav>

   
  )
}

export default Navbar