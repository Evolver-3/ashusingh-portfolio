import React from 'react'
import {motion} from 'motion/react'

const CharAnimate = ({text}) => {

const words=text.split("")
  return (
    <motion.div className="text-3xl font-bold leading-tight">
              {words.map((word,i)=>(
                <motion.span
                className=" inline-block"
                key={i}
                initial={{opacity:0,y:0,filter:"blur(3px)"}}
                whileInView={{opacity:1, y: [0, -10, 0],filter:"blur(0px)"}}
                transition={{
                  delay:i * 0.5,
                  duration:0.4
                }}>
                  {word ===" "? "\u00A0" :word}
                </motion.span>
              ))}
    </motion.div>
  )
}

export default CharAnimate