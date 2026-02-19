import React, { useEffect, useState } from 'react'
import  {motion, useAnimate,useInView} from 'motion/react'
import CharAnimate from './comp/CharAnimate'

const Skills = () => {


  const [scope,animate]=useAnimate()

  const isInView=useInView(scope,{margin:"100px"})

  const spring = {
  type: "spring",
  stiffness: 60,
  damping: 15,
  mass: 3.5
  }

  const AnimationTree=async()=>{
    await animate(".first",{opacity:1,filter:"blur(0px)",y:0},{delay:0.3,...spring})

  

    await animate(".secOne",{opacity:1,filter:"blur(0px)",y:0},{delay:0.3,...spring})

    await Promise.all([
    animate(".secTwo",{opacity:1,filter:"blur(0px)",x:0},spring),

    animate(".secThree",{opacity:1,filter:"blur(0px)",x:0},spring)
    ])

  

    await Promise.all([
    animate(".thirdOne",{opacity:1,filter:"blur(0px)",y:0},{delay:0.3,...spring}),

    animate(".thirdTwo",{opacity:1,filter:"blur(0px)",y:0},spring)
    ])

  }

  useEffect(()=>{

    if(isInView){
      AnimationTree()
    }else{
        animate(".first", {opacity:0, y:-40})
        animate(".secOne", {opacity:0, y:-35})
        animate(".secTwo", {opacity:0, x:120})
        animate(".secThree", {opacity:0, x:-150})
        animate(".thirdOne", {opacity:0, y:-100})
        animate(".thirdTwo", {opacity:0, y:-100})
      
    }
  },[isInView])


  return (
  <div className='w-full flex flex-col items-center justify-center my-10 h-screen'>
    <h2 className='relative text-5xl text-foreground   '>Skills
    </h2>

    <div className='w-full  shadow-acer border border-foreground mx-auto rounded-md mt-10 md:mx-10 flex flex-col md:flex-row justify-around h-80 '
     ref={scope}
     >

      <motion.div
      className=' md:w-1/2 flex flex-col items-center justify-center py-10'>


        <SmallItem data={"Frontend Technology"} className=' first'
        initial={{opacity:0,filter:"blur(3px)"}}
        initialPosition={{y:-40}}/>

        <div className='flex gap-1 sm:gap-18 '>
          <svg className=' rotate-y-180 text-foreground' width="106" height="85" viewBox="0 0 106 85" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0.5 0V38H105V78.5V84.5" stroke="currentColor"/>
        </svg>

        <svg className=' text-foreground' width="1" height="85" viewBox="0 0 1 96" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.5 0V96" stroke="currentColor"/></svg>

        <svg className=' text-foreground' width="106" height="85" viewBox="0 0 106 85" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0.5 0V38H105V78.5V84.5" stroke="currentColor"/>
        </svg>
        </div>

        <div className='grid grid-cols-3 gap-2 sm:gap-20 place-items-center'>
        <SmallItem data={"JavaScript"} className='secTwo'
        initial={{opacity:0,filter:"blur(3px)"}}
        initialPosition={{x:120}}/>

        <SmallItem data={"HTML5"}  className='secOne'
        initial={{opacity:0,filter:"blur(3px)"}}
        initialPosition={{y:-35}}/>

        <SmallItem data={'CSS3'} className='secThree'
        initial={{opacity:0,filter:"blur(3px)"}}
        initialPosition={{x:-150}}/>
        </div>
 
        <div className='grid grid-cols-2 gap-58 sm:gap-92'>
          <svg className='text-foreground' width="1" height="44" viewBox="0 0 1 96" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.5 0V96" stroke="currentColor"/></svg>

        <svg className='text-foreground' width="1" height="44" viewBox="0 0 1 96" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.5 0V96" stroke="currentColor"/></svg>
        </div>

        <div className='grid grid-cols-2 gap-16 sm:gap-49 place-items-start'>
          <SmallItem data={"React"}  className='thirdOne'
        initial={{opacity:0,filter:"blur(3px)"}}
        initialPosition={{y:-100}}/>

        <SmallItem data={'Tailwind CSS'}  className='thirdTwo'
        initial={{opacity:0,filter:"blur(3px)"}}
        initialPosition={{y:-100}}/>
        </div>
   
      </motion.div>

      <div className='flex flex-col gap-30 items-center'>

        <SmallItem data={"Animations"} />

        <SmallItem data={"Framer Motion"}/>
      </div>

      <div>

      </div>

    </div>
  </div>
  )
}

export default Skills

const SmallItem=({data,className,initialPosition})=>{


  return(
    <motion.div className={`inline-block text-foreground bg-card rounded-md px-2 py-1 border border-bg ${className}`}
    initial={{
      opacity:0,
      filter:"blur(3px)",
      ...(initialPosition || {})
    }}>
      <CharAnimate text={data}/>
    </motion.div>
  )
}