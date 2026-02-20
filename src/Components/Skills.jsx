import React, { useEffect, useState } from 'react'
import  {motion, useAnimate,useInView} from 'motion/react'
import CharAnimate from './comp/CharAnimate'
import AnimatedSvgPath from './comp/AnimatedSvgPath'
import LinesAnimated from './comp/LinesAnimated'

const Skills = () => {


  const [scope,animate]=useAnimate()

  const isInView=useInView(scope,{margin:"100px"})
  const [shimmerOne,setShimmerOne]=useState(false)
  const [shimmerTwo,setShimmerTwo]=useState(false)


  const AnimationTree=async()=>{
    await animate(".first",{opacity:1,filter:"blur(0px)",y:0},{delay:0.2,duration:1,ease:"easeIn"})

    await Promise.all([
      animate(".svgOne",{pathLength:1},{duration:1,ease:"easeInOut"}),
      animate(".svgTwo",{pathLength:1},{duration:1,ease:"easeInOut"}),
      animate(".svgThree",{pathLength:1},{duration:1,ease:"easeInOut"})
    ])
    setShimmerOne(true)

    await Promise.all([
      animate(".secOne",{opacity:1,filter:"blur(0px)",y:0},{duration:1,ease:"easeIn"}),
      
      animate(".secTwo",{opacity:1,filter:"blur(0px)",y:0},{duration:1,ease:"easeIn"}),
      
      animate(".secThree",{opacity:1,filter:"blur(0px)",y:0},{duration:1,ease:"easeIn"})
    ])

    await Promise.all([
      animate(".svgFour",{pathLength:1},{duration:1,ease:"easeInOut"}),
      animate(".svgFive",{pathLength:1},{duration:1,ease:"easeInOut"})
    ])
    setShimmerTwo(true)

    await Promise.all([

      animate(".thirdOne",{opacity:1,filter:"blur(0px)",y:0},{duration:1,ease:"easeIn"}),

      animate(".thirdTwo",{opacity:1,filter:"blur(0px)",y:0},{duration:1,ease:"easeIn"})
    ])

  }

  useEffect(()=>{

    if(isInView){
      AnimationTree()
    }else{
        animate(".first", {opacity:0, y:-40})
        animate(".svgOne",{pathLength:0})
        animate(".svgTwo",{pathLength:0})
        animate(".svgThree",{pathLength:0})
        setShimmerOne(false)
        animate(".secOne", {opacity:0, y:-15})
        animate(".secTwo", {opacity:0, y:-15})
        animate(".secThree", {opacity:0, y:-15})
        animate(".svgFour",{pathLength:0})
        animate(".svgFive",{pathLength:0})
        setShimmerTwo(false)
        animate(".thirdOne", {opacity:0, y:-10})
        animate(".thirdTwo", {opacity:0, y:-10})
      
    }
  },[isInView])

  
  const lineColors={
    blue:"bg-gradient-to-r from-blue-200 via-blue-400 to-blue-200",
    red:"bg-gradient-to-r from-red-200 via-red-400 to-red-200",
    rose:"bg-gradient-to-r from-rose-200 via-rose-400 to-rose-200",

  }

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

          <AnimatedSvgPath
          width="106"
          height="85"
          viewBox="0 0 106 85"
          d="M0.5 0V38H105V78.5V84.5"
          className="rotate-y-180 "
          className2='svgOne'
          color="var(--color-red-600)"
          lineColor="var(--color-neutral-300)"
          spanColor="var(--color-red-300)"
          shimmer={shimmerOne}/>
        
          <LinesAnimated
          width="3"
          height="85"
          viewBox="0 0 3 85"
          d="M0.5 0V96"
          className2='svgTwo'
          color="var(--color-yellow-600)"
          lineColor="var(--color-neutral-300)"
           spanColor="var(--color-yellow-300)"
          shimmer={shimmerOne}/>


          <AnimatedSvgPath
          width="106"
          height="85"
          viewBox="0 0 106 85"
          d="M0.5 0V38H105V78.5V84.5"
          className2='svgThree'
          color="var(--color-red-600)"
          lineColor="var(--color-neutral-300)"
           spanColor="var(--color-red-300)"
          shimmer={shimmerOne}/>
        </div>

        <div className='grid grid-cols-3 gap-2 sm:gap-20 place-items-center'>
          <SmallItem data={"JavaScript"} className='secTwo'
          initial={{opacity:0,filter:"blur(3px)"}}
          initialPosition={{y:-15}}/>

          <SmallItem data={"HTML5"}  className='secOne'
          initial={{opacity:0,filter:"blur(3px)"}}
          initialPosition={{y:-15}}/>

          <SmallItem data={'CSS3'} className='secThree'
          initial={{opacity:0,filter:"blur(3px)"}}
          initialPosition={{y:-15}}/>
        </div>
 
        <div className='grid grid-cols-2 gap-58 sm:gap-92'>


          <LinesAnimated
          width="3"
          height="44"
          viewBox="0 0 3 44"
          d="M0.5 0V96"
          className2="svgFour"
          color="var(--color-red-600)"
          lineColor="var(--color-neutral-300)"
           spanColor="var(--color-red-300)"
          shimmer={shimmerTwo}/>


          <LinesAnimated
          width="3"
          height="44"
          viewBox="0 0 3 44"
          d="M0.5 0V96"
          className2='svgFive'
          color="var(--color-red-600)"
          lineColor="var(--color-neutral-300)"
           spanColor="var(--color-red-300)"
          shimmer={shimmerTwo}/>
        </div>

        <div className='grid grid-cols-2 gap-16 sm:gap-46 place-items-start'>
          <SmallItem data={"React"}  className='thirdOne'
          initial={{opacity:0,filter:"blur(3px)"}}
          initialPosition={{y:-10}}/>

          <SmallItem data={'Tailwind CSS'} className='thirdTwo'
          initial={{opacity:0,filter:"blur(3px)"}}
          initialPosition={{y:-10}}/>
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