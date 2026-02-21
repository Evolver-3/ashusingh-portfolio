import React, { useEffect, useState } from 'react'
import  {JSAnimation, motion, useAnimate,useInView} from 'motion/react'
import AnimatedSvgPath from './comp/AnimatedSvgPath'
import LinesAnimated from './comp/LinesAnimated'
import BorderAnimate from './comp/BorderAnimate'
import  { Css3Wordmark, Html5, Javascript, ReactDark, ReactLight, Tailwindcss } from '../assets/index.jsx'
import HoveredEffect from './HoveredEffect.jsx'

const Skills = ({dark}) => {


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

    await animate(".animations",{opacity:1,filter:"blur(0px)",x:0},{duration:1,ease:"easeIn"})
    await animate(".svgSix",{pathLength:1},{duration:1,ease:"easeInOut",delay:0.3})
    setShimmerTwo(true)
    
    await animate(".motion",{opacity:1,filter:"blur(0px)",x:0},{duration:1,ease:"easeIn"})


  }

  useEffect(()=>{

    if(isInView){
      AnimationTree()
    }else{
        animate(".first", {opacity:0, y:-40,filter:"blur(5px)"})
        animate(".svgOne",{pathLength:0})
        animate(".svgTwo",{pathLength:0})
        animate(".svgThree",{pathLength:0})
        setShimmerOne(false)
        animate(".secOne", {opacity:0, y:-15,filter:"blur(5px)"})
        animate(".secTwo", {opacity:0, y:-15,filter:"blur(5px)"})
        animate(".secThree", {opacity:0, y:-15,filter:"blur(5px)"})
        animate(".svgFour",{pathLength:0})
        animate(".svgFive",{pathLength:0})
        setShimmerTwo(false)
        animate(".thirdOne", {opacity:0, y:-10,filter:"blur(5px)"})
        animate(".thirdTwo", {opacity:0, y:-10,filter:"blur(5px)"})
        animate(".animations", {opacity:0, x:-10,filter:"blur(5px)"})
        animate(".svgSix",{pathLength:0})
        setShimmerTwo(false)
        animate(".motion", {opacity:0,x:-10,filter:"blur(5px)"})

      
    }
  },[isInView])

  return (


  <div className='w-full flex flex-col items-center justify-center my-10 
 
  '>
    <h2 className='relative text-5xl text-foreground'>Skills
    </h2>

    <motion.div
    initial={{opacity:0,x:-200,filter:"blur(10px)"}}
    whileInView={{opacity:1,x:0,filter:"blur(0px)"}}
    transition={{delay:0.2,duration:1}}
     className='w-full shadow-acer mx-auto rounded-md mt-10 md:mx-10 flex flex-col md:flex-row justify-around h-fit bg-smallcard'
     ref={scope}
     >

      <motion.div
      className=' md:w-1/2 flex flex-col items-center justify-center py-10'>


        <BorderAnimate textItem={"Frontend Technology"} 
        className=' first'
        initial={{opacity:0,filter:"blur(5px)"}}
        initialPosition={{y:-40}}/>

        <div className='flex gap-1 sm:gap-18 '>

          <AnimatedSvgPath
          width="106"
          height="85"
          viewBox="0 0 106 85"
          d="M0.5 0V38H105V78.5V84.5"
          className="rotate-y-180 "
          className2='svgOne'
          color="var(--color-purple)"
          lineColor="var(--color-neutral-300)"
          spanColor="var(--color-lightpurple)"
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
          color="var(--color-purple)"
          lineColor="var(--color-neutral-300)"
           spanColor="var(--color-lightpurple)"
          shimmer={shimmerOne}/>
        </div>

        <div className='grid grid-cols-3 gap-2 sm:gap-20 place-items-center'>
          <BorderAnimate textItem={"JavaScript"}
          imageSpan={<Javascript/>}
          className='secTwo'
          initial={{opacity:0,filter:"blur(5px)"}}
          initialPosition={{y:-15}}/>

          <BorderAnimate textItem={"HTML5"}  className='secOne'
          imageSpan={<Html5/>} 
          initial={{opacity:0,filter:"blur(5px)"}}
          initialPosition={{y:-15}}/>

          <BorderAnimate textItem={'CSS3'}
          imageSpan={<Css3Wordmark/>} 
          className='secThree'
          initial={{opacity:0,filter:"blur(5px)"}}
          initialPosition={{y:-15}}/>
        </div>
 
        <div className='grid grid-cols-2 gap-58 sm:gap-92'>


          <LinesAnimated
          width="3"
          height="44"
          viewBox="0 0 3 44"
          d="M0.5 0V96"
          className2="svgFour"
          color="var(--color-purple)"
          lineColor="var(--color-neutral-300)"
           spanColor="var(--color-lightpurple)"
          shimmer={shimmerTwo}/>


          <LinesAnimated
          width="3"
          height="44"
          viewBox="0 0 3 44"
          d="M0.5 0V96"
          className2='svgFive'
          color="var(--color-purple)"
          lineColor="var(--color-neutral-300)"
           spanColor="var(--color-lightpurple)"
          shimmer={shimmerTwo}/>
        </div>

        <div className='grid grid-cols-2 gap-16 sm:gap-46 place-items-start'>
          <BorderAnimate textItem={"React"}  className='thirdOne'
          imageSpan={dark? <ReactDark/> : <ReactLight/>} 
          initial={{opacity:0,filter:"blur(5px)"}}
          initialPosition={{y:-10}}/>

          <BorderAnimate textItem={'Tailwind CSS'} imageSpan={<Tailwindcss/>} className='thirdTwo'
          initial={{opacity:0,filter:"blur(5px)"}}
          initialPosition={{y:-10}}/>
        </div>
   
      </motion.div>

      <div className='md:w-1/2 flex items-center justify-center py-10'>

        <BorderAnimate textItem={"Animations"} className="animations"
        initial={{opacity:0,filter:"blur(5px)"}}
        initialPosition={{x:-10}} />

        <AnimatedSvgPath
          width="150"
          height="3"
          viewBox="0 0 150 3"
          d="M0 0.5H179"
          className2="svgSix"
          color="var(--color-purple)"
          lineColor="var(--color-neutral-300)"
          spanColor="var(--color-lightpurple)"
          shimmer={shimmerTwo}/>

        <BorderAnimate textItem={"Framer Motion"} className="motion"
        initial={{opacity:0,filter:"blur(5px)"}}
        initialPosition={{x:-10}}
        />
      </div>

      <div>

      </div>

    </motion.div>
  </div>


  )
}

export default Skills
