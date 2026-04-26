import React from 'react'
import {motion} from 'motion/react'

const CharAnimate = ({text,className}) => {

const words=text.split("")
  return (
    <motion.div className={`${className=""}`}>
              {words.map((word,i)=>(
                <motion.span
                className=" inline-block"
                key={i}
                initial={{opacity:0,x:0,filter:"blur(3px)"}}
                animate={{opacity:1, x: [0, -3, 0],filter:"blur(0px)"}}
                viewport={{once:true}}
                transition={{
                  delay:i * 0.1,
                  duration:0.3
                }}>
                  {word ===" "? "\u00A0" :word}
                </motion.span>
              ))}
    </motion.div>
  )
}

export default CharAnimate