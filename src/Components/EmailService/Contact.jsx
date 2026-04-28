import React, { useEffect, useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import { motion } from 'motion/react'

const Contact = () => {

  const formRef=useRef()
  const [successMessage,setSuccessMessage]=useState()
  const [errorMessage,setErrorMessage]=useState()
  const [loading,setLoading]=useState(false)

  const sendEmail=(e)=>{
    e.preventDefault()

    setLoading(true)
    emailjs.sendForm(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      formRef.current,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    ).then(()=>{
      setSuccessMessage("Your message has been sent !!")
      formRef.current.reset()
      setLoading(false)
    }).catch((error)=>{
      console.error(error)
      setErrorMessage("Please Try again later !!")
      setLoading(false)
    })
  }

  useEffect(()=>{
    if(successMessage||errorMessage){
      const timer=setTimeout(()=>{
        setSuccessMessage("")
        setErrorMessage("")
      },4000)

      return()=>clearTimeout(timer)
    }
  },[successMessage,errorMessage])

 

  return (
    <div
    id='contact'
    className='flex flex-col items-center justify-center py-10 px-10 relative w-full md:px-50'>

      {
        errorMessage && (
          <LogMessage text={errorMessage} type={"error"}/>
        )
      }
      {
        successMessage &&(
          <LogMessage text={successMessage} />
        )
      }

      <div className='bg-nav flex items-center justify-center h-12 text-foreground rounded-t-xl w-full'>
          <h2 className='text-foreground'>contactMe <span className='text-rose-700'>@ashusingh@gmail.com</span> </h2>

        </div>

      <form
      ref={formRef}
      onSubmit={sendEmail}
       className='w-full rounded-b-xl px-8 flex flex-col shadow-weird bg-background text-foreground border-t-0 border border-borderlight items-center py-5 perspective-dramatic 
       '>
        <InputData text={"Enter your Email here"} type={"email"} placeholder={"Enter email"} name={"user_email"}/>

        <InputData text={"Enter your name here"} type={"text"} placeholder={"Enter name"} name={"user_name"}/>

        <InputData text={"Enter Message"} placeholder={"Message"} input={false} name={"message"}/>

        <ButtonLoad text={"Send Message"} loading={loading}/>
   
      </form>
    
    </div>
  )
}

export default Contact

const InputData=({text,type,placeholder,name,input=true})=>{
  return(
    <div className='p-2 flex flex-col m-3 w-full shadow-finta rounded-sm '>
      <h2 className='text-lg'>{text}</h2>
        <div className='flex gap-3 items-center justify-center '>
          
          {input?(
            <input type={type} placeholder={placeholder} 
            name={name} className='text-md outline-none w-full bg-inputcolor rounded-md px-2 py-1 ' required/>
          ):(
            <textarea placeholder={placeholder} 
            name={name}
            className='text-md outline-none resize-none w-full bg-inputcolor rounded-md px-2 py-1 ' required/>
          )}
          
          </div>
    </div>
  )
}

const LogMessage=({text,type})=>{
  return(
    <motion.div
    initial={{opacity:0,scale:0,x:100}}
    animate={{opacity:1,scale:1,x:0}}
    className={`absolute right-5 top-0  px-4 rounded-md text-sm md:text-md py-2 ${type==="error"?"bg-red-100 ring ring-red-300 text-red-500":"bg-green-100 ring ring-green-300 text-green-500"}`}>
      <h2>{text}</h2>
    </motion.div>
  )
}


const ButtonLoad=({text,loading})=>{

  return(
    <button
    type="submit"
    disabled={loading}
 
    className='py-1 w-1/2 mt-5 rounded-xl hover:ring-2 hover:text-shadow-xs text-lg bg-inputcolor hover:bg-hovered  hover:ring-rose-200 transition-colors duration-200 delay-75 active:translate-3d text-foreground active:translate-y-px ease-in-out transform-content font-semibold bg-linear-to-r hover:shadow-weird '>
      {loading ?(
        <div
     
        className='flex gap-2 items-center justify-center'>
          <LoaderSvg/>
          <h2>Sending...</h2>
        </div>
      ):(
        <motion.h2

        >{text}</motion.h2>
      )}
    </button>
  )
}

const LoaderSvg=()=>{
  return(
  <div className='animate-spin size-4 '>
    
    <svg  xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" >
      <path d="M12 18a2 2 0 1 0 0 4 2 2 0 1 0 0-4m0-16a2 2 0 1 0 0 4 2 2 0 1 0 0-4M7.76 19.07c-.78.78-2.05.78-2.83 0s-.78-2.05 0-2.83 2.05-.78 2.83 0 .78 2.05 0 2.83M19.07 7.76c-.78.78-2.05.78-2.83 0s-.78-2.05 0-2.83 2.05-.78 2.83 0 .78 2.05 0 2.83M4 14c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2m16 0c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2M4.93 7.76c-.78-.78-.78-2.05 0-2.83s2.05-.78 2.83 0 .78 2.05 0 2.83-2.05.78-2.83 0m11.31 11.31c-.78-.78-.78-2.05 0-2.83s2.05-.78 2.83 0 .78 2.05 0 2.83-2.05.78-2.83 0"></path>
    </svg>
  </div>
  )
}

