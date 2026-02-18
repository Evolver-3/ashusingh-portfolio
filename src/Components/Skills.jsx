import React, { useEffect, useState } from 'react'
import  {motion, useAnimate,useInView} from 'motion/react'
import CharAnimate from './comp/CharAnimate'

const Skills = () => {


  const [scope,animate]=useAnimate()

  const isInView=useInView(scope)

  const spring = {
  type: "spring",
  stiffness: 60,
  damping: 15,
  mass: 3.5
  }

  const AnimationTree=async()=>{
    await animate(".first",{opacity:1,filter:"blur(0px)",y:0},{delay:0.3,...spring})

  await new Promise(resolve => setTimeout(resolve, 100))

    await animate(".secOne",{opacity:1,filter:"blur(0px)",y:0},spring)

    await Promise.all([
    animate(".secTwo",{opacity:1,filter:"blur(0px)",x:0},spring),

    animate(".secThree",{opacity:1,filter:"blur(0px)",x:0},spring)
    ])

    await new Promise(resolve => setTimeout(resolve, 100))

    await Promise.all([
    animate(".thirdOne",{opacity:1,filter:"blur(0px)",y:0},spring),

    animate(".thirdTwo",{opacity:1,filter:"blur(0px)",y:0},spring)
    ])

  }

  useEffect(()=>{

    if(!isInView) return 
    
      AnimationTree()
    
  },[isInView])


  return (
  <div className='w-full flex flex-col items-center justify-center my-10 '>
    <h2 className='relative text-5xl text-foreground   '>Skills
    </h2>

    <div className='w-full  shadow-acer border border-foreground mx-auto rounded-md mt-10 md:mx-10 flex flex-col md:flex-row justify-around h-80 '
     ref={scope}
     >

      <motion.div
      className='relative bg-red-700 md:w-1/2'>


        <SmallItem data={"Frontend Technology"} className='absolute top-10 left-1/2 -translate-x-1/2 first'
        initial={{opacity:0,filter:"blur(3px)"}}
        initialPosition={{y:-40}}/>

        <SmallItem data={"JavaScript"} className='absolute top-40 left-[10%] secTwo'
        initial={{opacity:0,filter:"blur(3px)"}}
        initialPosition={{x:120}}/>

        <SmallItem data={"HTML5"}  className='absolute top-40 left-1/2 -translate-x-1/2 secOne'
        initial={{opacity:0,filter:"blur(3px)"}}
        initialPosition={{y:-35}}/>

        <SmallItem data={'CSS3'} className='absolute top-40 right-[10%] secThree'
        initial={{opacity:0,filter:"blur(3px)"}}
        initialPosition={{x:-150}}/>

        <SmallItem data={"React"}  className='absolute top-60 left-[10%]  thirdOne'
        initial={{opacity:0,filter:"blur(3px)"}}
        initialPosition={{y:-100}}/>

        <SmallItem data={'Tailwind CSS'}  className='absolute top-60 right-[10%] thirdTwo'
        initial={{opacity:0,filter:"blur(3px)"}}
        initialPosition={{y:-100}}/>
   
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
      ...initialPosition
    }}>
      <CharAnimate text={data}/>
    </motion.div>
  )
}