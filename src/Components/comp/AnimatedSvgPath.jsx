import React, { useId, useState } from 'react'
import {motion} from 'motion/react'

const AnimatedSvgPath = ({width,height,viewBox,d,color,className,lineColor,className2,shimmer}) => {


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
            <stop offset="0.33" stopColor="transparent"/>
            <stop offset="0.66" stopColor={color}/>
            <stop offset="1" stopColor='transparent'/>
          </motion.linearGradient>

        </defs>


       <motion.path
        d={d}
        stroke={lineColor}
        strokeWidth="2"
        strokeLinecap="round"
        className={className2}
        initial={{pathLength:0}}/>

        {shimmer && (
          <motion.path
          d={d}
          stroke={`url(#${gradientId})`}
          strokeWidth="1.5"
          strokeLinecap="round"
          style={{
            filter:"drop-shadow(0 0 0px white)"
          }}
          
          />
        )}

      </motion.svg>
  )
}

export default AnimatedSvgPath