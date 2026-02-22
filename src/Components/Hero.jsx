import React from 'react'
import {motion} from 'motion/react'

const Hero = () => {

  const containerVariant={
    hidden:{},
    show:{
      transition:{
        staggerChildren:0.9
      }
    }
  }

  const childVariant={
    hidden:{
      x:-300,
      opacity:0,
      filter:"blur(5px)"
    },
    show:{
      x:0,
      opacity:1,
      filter:"blur(0px)",
      transition:{
        duration:1.4,
        ease:"easeOut"
      }
    }
  }
  return (
    <div className='w-full bg-background '>

      <div className='flex flex-col'>

        <motion.div className='pt-40 flex flex-col gap-4 text-foreground mx-10 pb-20'
        variants={containerVariant}
        initial="hidden"
        whileInView="show"
        viewport={{once:true}}>

          <motion.h2
          variants={childVariant}
          className='text-7xl font-bold  '>Hi,I'm Ashu<span className='text-fullColor'>{"."}</span></motion.h2>

          <motion.h2
          variants={childVariant}
          className='text-3xl '>I'm a <span className='text-fullColor text-4xl'>Frontend Developer</span></motion.h2>

          <motion.h2
          variants={childVariant}
          className='text-2xl max-w-xl leading-tight'>A 25 year guy who like to build cool looking websites and deploy them.</motion.h2>

          <motion.button
          initial={{pathLength:0}}
          animate={{pathLength:1}}
          transition={{duration:1,delay:3}}

          className='relative overflow-hidden w-fit h-fit bg-fullColor rounded-md px-4 py-1.5 text-3xl text-white  ring-2 ring-green-500 hover:'>
            <span className=''>Contact me.</span>
            

            <svg className='absolute inset-0 w-100 scale-200' viewBox="0 0 307 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                          
              <motion.path
              initial={{pathLength:1}}
              animate={{pathLength:0}}
              transition={{delay:3,duration:2}}
              d="M7.50098 43.8401C7.71916 42.3062 8.59848 38.7889 9.59021 35.2583C10.6444 31.5052 12.5654 28.2104 13.0084 22.4848C13.3444 18.1422 18.7274 16.0848 22.0332 14.7525C23.7146 14.0749 25.5638 14.0881 26.9952 14.5244C32.9418 16.3372 27.5605 30.8153 29.4084 40.1707C29.9262 42.7919 35.6266 41.8567 37.8712 41.3112C40.1158 40.7658 40.334 39.6749 40.5555 38.4583C42.2308 29.257 42.529 15.0005 45.3952 11.1228C46.0161 10.2827 47.3687 10.3459 48.1489 10.6699C51.568 12.0897 50.9125 17.817 51.5737 28.6996C52.0062 35.8185 57.0745 39.6352 60.3803 42.9476C61.8472 44.4174 64.5654 44.5013 67.2067 44.0649C68.3872 43.8699 68.9753 42.7558 69.4216 41.8699C72.6057 35.549 69.4381 24.2434 69.4249 14.3459C69.4222 12.2827 70.734 11.893 71.8381 11.9955C77.1994 12.4931 79.5539 19.1393 81.3258 24.4153C83.5539 31.0498 81.7687 36.779 82.4266 38.5377C83.1522 40.4777 84.8497 41.85 86.2778 43.06C87.0044 43.6755 87.9241 44.0517 88.7009 43.6219C94.7451 40.2784 92.5522 25.5922 93.7787 20.0583C95.3862 12.8047 98.5092 9.69138 100.708 8.14757C101.687 7.45996 102.906 7.91286 103.577 8.57071C106.818 11.7481 105.564 18.2534 106.122 25.3013C106.501 30.0819 109.967 35.2186 112.506 40.6236C113.161 42.0189 113.498 43.5889 114.159 44.5939C114.82 45.5988 115.693 46.0352 116.797 46.26C117.901 46.4848 119.21 46.4847 120.103 45.9393C125.47 42.6595 122.754 30.6434 125.617 22.822C127.723 17.0679 130.906 11.6748 133.104 10.022C134.097 9.27563 135.303 9.45997 136.301 9.78724C137.299 10.1145 138.172 10.7691 138.622 12.0881C140.687 18.1467 137.101 24.1905 134.671 30.3757C132.709 35.3708 134.655 41.3938 136.308 45.1492C137.404 47.6395 140.605 48.2434 142.582 48.9046C143.651 49.262 144.995 49.1294 146.106 48.693C150.321 47.0371 151.62 41.2219 153.392 31.4467C155.712 18.6451 154.271 9.24839 155.699 7.92609C156.356 7.31821 157.346 7.4765 158.232 7.69468C160.054 8.14341 161.98 10.3261 163.96 13.6219C169.846 23.4173 167.924 38.0881 170.906 41.1856C172.369 42.7053 174.76 43.179 177.071 42.8517C181.392 42.2397 181.385 33.5129 182.592 25.7972C183.711 18.6393 187.322 12.1178 189.742 10.1343C190.747 9.3106 191.726 9.45997 192.612 9.67815C196.142 12.0914 198.351 15.6219 199.012 18.4715C199.236 20.4484 199.236 23.5029 199.236 26.65" stroke="black" strokeWidth="15" strokeLinecap="round"/>
            
            </svg>



          </motion.button>
        </motion.div>

        <div>

        </div>

      
      </div>

      


    </div>
  )
}

export default Hero