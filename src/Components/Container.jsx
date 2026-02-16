import { motion } from "motion/react"

const Container = ({ children, className = "" }) => {
  return (
    <div className={`max-w-7xl mx-auto w-full bg-background shadow-acer ${className} transition-colors duration-500`}>
        {children}

    </div>
  )
}

export default Container
