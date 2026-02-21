import React, { useId, useState } from 'react'
import {motion} from 'motion/react'

const AnimatedSvgPath = ({width,height,viewBox,d,color,className,lineColor,className2,shimmer,spanColor}) => {


  const gradientId=useId()
  return (
    

      <motion.svg width={width} height={height} viewBox={viewBox} fill="none" className={`${className}`}>

        <defs>
          <motion.linearGradient
          id={gradientId}
          gradientUnits="userSpaceOnUse"
          x1="-100%"
          y1="0%"
            
          animate={
            shimmer && {
              x1:["-100%","100%"],
              x2:["0%","200%"]
            }
          }
          transition={{duration:2,ease:"linear",repeat:Infinity}}>
            <stop offset="0%" stopColor="transparent"/>
            <stop offset="40%" stopColor={spanColor}/>
            <stop offset="50%" stopColor={color}/>
            <stop offset="60%" stopColor={spanColor}/>
            <stop offset="100%" stopColor='transparent'/>
          </motion.linearGradient>
        </defs>


       <motion.path
        d={d}
        stroke={lineColor}
        strokeWidth="2"
        strokeLinecap="butt"
        className={className2}
        initial={{pathLength:0}}/>

        {shimmer && (
          <motion.path
          d={d}
          stroke={`url(#${gradientId})`}
          strokeWidth="2"
          strokeLinecap="butt"
          style={{
            filter:"drop-shadow(0 0 0px white)"
          }}
          
          />
        )}

      </motion.svg>
  )
}

export default AnimatedSvgPath