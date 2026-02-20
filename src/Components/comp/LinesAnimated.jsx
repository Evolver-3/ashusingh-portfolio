import React, { useId, useState } from 'react'
import {motion} from 'motion/react'

const LinesAnimated = ({width,height,viewBox,d,color,className,lineColor,className2,shimmer,spanColor}) => {


  const gradientId=useId()
  return (
    

      <motion.svg width={width} height={height} viewBox={viewBox} fill="none" className={`${className}`}>

        <defs>
          <motion.linearGradient
          id={gradientId}
          gradientUnits="userSpaceOnUse"
          x1="0%"
          y1="-100%"
            
          animate={
            shimmer && {
              y1:["-100%","200%"],
              y2:["0%","300%"]
            }
          }
          transition={{duration:2,ease:"linear",repeat:Infinity}}>
            <stop offset="0%" stopColor="transparent"/>
            <stop offset="30%" stopColor={spanColor}/>
            <stop offset="50%" stopColor={color}/>
            <stop offset="70%" stopColor={spanColor}/>
            <stop offset="100%" stopColor='transparent'/>
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
          strokeWidth="2"
          strokeLinecap="round"
          style={{
            filter:"drop-shadow(0 0 0px white)"
          }}
          
          />
        )}

      </motion.svg>
  )
}

export default LinesAnimated