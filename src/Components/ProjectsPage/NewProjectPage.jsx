import React from 'react'
import PageReuse from '../comp/PageReuse'
import { GitSvg } from '../Links/LinkPage'

const projectCards=[
  {
    id:1,
    name:"Re-Ai",
    text:"ReAi is an AI powered website that provides output based on the user resume, self description and  job description. On based of the input it provides a Questions and answers that can be asked in the interview. It also provides score based on your resume and provide skills that you need to upgrade to get the entered job.",
    year:2026,
    live:"https://auth-form-jet.vercel.app",
    git:"https://github.com/Evolver-3/Re-Ai.git",
    Stack:["React","Javascript","Tailwindcss","Framer Motion","NodeJs","ExpressJs","MongoDB","JWT","Gemini Api"]
    

  },
  {
    id:2,
    name:"Finta Ui",
    text:"Finta Ui is based on the original Finta, which is a tax related website. We have added dark mode and also the site is responsive on most of the devices.",
    year:2026,
    live:"https://newfintaupload.vercel.app/",
    git:"https://github.com/Evolver-3/newfintaupload.git",
    Stack:["React","Javascript","Tailwindcss","Framer Motion"]
    

  },
  {
    id:3,
    name:"BMW Car Website",
    text:"A modern approach to the BMW classic website, with a sleek design and user-friendly interface. The website features a responsive layout, allowing users to easily navigate and explore the various BMW models and services on any device.",
    year:2026,
    live:"https://motioncarwebu-vercel.vercel.app/",
    git:"https://github.com/Evolver-3/motioncarwebu-vercel.git",
    Stack:["React","Javascript","Tailwindcss","Framer Motion"]
    

  }
] 
const NewProjectPage = () => {
  return (
   <PageReuse text={"Projects"}>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-4 text-foreground">
      {projectCards.map((pro)=>(
        <div key={pro.id}
        className='w-full rounded-xl shadow-finta p-5 flex flex-col gap-5'>
          <div className='flex justify-between'>
            <h2 className='text-xl font-semibold'>{pro.name}</h2>
            <h2 className='text-rose-500 text-sm'>0{pro.id}</h2>
          </div>

          <p className='text-lg leading-snug'>
            {pro.text}
          </p>

          <div className='flex-wrap gap-2 flex'>
            {pro.Stack.map((tech,i)=>(
              <span key={i} className='px-2 py-1 rounded-lg shadow-acer text-sm text-textxl bg-bdrlight'>
                {tech}
              </span>
            ))}
          </div>

          <div className='w-full h-px border  border-neutral-300'/>

          <div
          className='flex justify-between '>

            <a href={pro.git}
            target='_blank'
            rel="noopener noreferrer"
            className='flex items-center rounded-full p-1 border border-borderlight bg-smallcard'
            >
             <GitSvg/>
            </a>
 
            <a href={pro.live}
            target='_blank'
            rel="noopener noreferrer" 
            className='text-sm leading-tight hover:underline hover:underline-offset-2 transition-all duration-200 ease-in-out hover:text-green-600 '
            >
             visit project
            </a>

            
          </div>
        </div>
      ))}

    </div>
   </PageReuse>
  )
}

export default NewProjectPage