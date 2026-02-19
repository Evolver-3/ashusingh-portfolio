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
      className='relative md:w-1/2'>


        <SmallItem data={"Frontend Technology"} className='absolute top-10 left-1/2 -translate-x-1/2 first'
        initial={{opacity:0,filter:"blur(3px)"}}
        initialPosition={{y:-40}}/>

        {/* <svg className='absolute top-17 left-1/3 -translate-x-1/2' width="104" height="90" viewBox="0 10 91 51" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M90 0V34.5H0.5V71" stroke="black"/>
        </svg> */}

        <svg className='absolute top-[68px] left-1/3 -translate-x-1/2 rotate-y-180' width="106" height="85" viewBox="0 0 106 85" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0.5 0V38H105V78.5V84.5" stroke="black"/>
        </svg>


        <SmallItem data={"JavaScript"} className='absolute top-40 left-[10%] secTwo'
        initial={{opacity:0,filter:"blur(3px)"}}
        initialPosition={{x:120}}/>

        <svg className='absolute top-[68px] left-1/2 translate-x-1/2' width="1" height="82" viewBox="0 0 1 96" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.5 0V96" stroke="black"/></svg>




        <SmallItem data={"HTML5"}  className='absolute top-40 left-1/2 -translate-x-1/2 secOne'
        initial={{opacity:0,filter:"blur(3px)"}}
        initialPosition={{y:-35}}/>

      <svg className='absolute top-[68px] right-1/3 translate-x-1/2' width="106" height="85" viewBox="0 0 106 85" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0.5 0V38H105V78.5V84.5" stroke="black"/>
      </svg>


        <SmallItem data={'CSS3'} className='absolute top-40 right-[15%] secThree'
        initial={{opacity:0,filter:"blur(3px)"}}
        initialPosition={{x:-150}}/>

        <svg className='absolute top-[182px] right-1/5  translate-x-1/2' width="1" height="44" viewBox="0 0 1 96" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.5 0V96" stroke="black"/></svg>

        <SmallItem data={"React"}  className='absolute top-60 left-[15%]  thirdOne'
        initial={{opacity:0,filter:"blur(3px)"}}
        initialPosition={{y:-100}}/>

        <svg className='absolute top-[182px] left-1/5 translate-x-1/2' width="1" height="44" viewBox="0 0 1 96" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.5 0V96" stroke="black"/></svg>

        <SmallItem data={'Tailwind CSS'}  className='absolute top-60 right-[5%] thirdTwo'
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