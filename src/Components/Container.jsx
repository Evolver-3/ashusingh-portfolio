import { motion } from "motion/react"

const Container = ({ children, className = "" }) => {
  return (
    <div className={`max-w-5xl mx-auto w-full bg-background  ${className} transition-colors duration-500 overflow-hidden flex flex-col gap-10`}>
{/* 
      <div className="absolute border-l border-r border-neutral-300 h-full w-px">
        </div>
      */}
        {children}

    </div>
  )
}

export default Container
