import React from 'react'
import {motion} from 'motion/react'

const Hero = () => {

  const containerVariant={
    hidden:{},
    show:{
      transition:{
        delay:0.5,
        staggerChildren:0.9
      }
    }
  }

 
  
  return (
    <div className='w-full bg-background '>

      <div className='flex flex-col overflow-hidden '>

        <motion.div className='pt-40 flex flex-col gap-4 text-foreground mx-10 pb-20'
        variants={containerVariant}
        initial="hidden"
        whileInView="show"
        viewport={{once:true}}>

          <HideOut>
            <h2 className='relative text-7xl font-bold overflow-hidden'>
             Hi,I'm Ashu<span className='text-fullColor'>{"."}</span>
          </h2>
          </HideOut>

          <HideOut>
            <h2
            className='text-3xl relative overflow-hidden'>I'm a <span className='text-fullColor text-4xl'>Frontend Developer</span>
            </h2>
          </HideOut>

          <HideOut>
            <h2
            className='text-2xl max-w-xl leading-tight relative'>A 25 year guy who like to build cool looking websites and deploy them.
            </h2>
          </HideOut>

          <HideOut>
            <button
            className='relative mt-5 ml-2 overflow-hidden w-fit h-fit  rounded-md px-4 py-1.5 text-3xl text-white bg-fullColor border-2 border-dashed border-black font-semibold uppercase transition-all duration-300 hover:-translate-x-2 hover:-translate-y-2 hover:rounded-xl hover:shadow-[4px_4px_0px_var(--color-foreground)] active:translate-x-0 active:translate-y-0 active:rounded-md active:shadow-none'>
            <span className=''>Contact me.</span>
          </button>
          </HideOut>
        </motion.div>

        <div>

        </div>

      
      </div>

    </div>
  )
}

export default Hero

 const childVariant={
    hidden:{
      opacity:0,
      y:80
    },
    show:{
      opacity:1,
      y:0,
      transition:{
   
        duration:1,
        ease:"easOut"
      }
    }
  }

  const spanVariant={
    hidden:{
      left:0
    },
    show:{
      left:"100%",
      transition:{
        duration:0.8,ease:"easeInOut"
      }
    }
  }

 
const HideOut=({children})=>{
  return (
    <motion.div
    className='relative w-fit overflow-hidden'
    variants={childVariant}>

     {children}

      <motion.div
      variants={spanVariant}
      className='absolute inset-0 bg-fullColor z-20'/>

    </motion.div>
  )
}