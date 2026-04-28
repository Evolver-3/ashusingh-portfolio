import React from 'react'
import PageReuse from '../comp/PageReuse'
const NewHero = () => {
  return (
    <div className='flex flex-col gap-5' >

     <div className='px-10 mt-20 md:px-20'>
       <div className='flex gap-4 '>
        <img src='/ProfilePic.jpg' alt="profile-pic" 
        className='size-45  border border-smallcard rounded-xl object-cover'/>

        <div
        className='flex-1  py-10 flex flex-col gap-2'>

          <h2 className="text-xl font-semibold leading-tight text-foreground"
          >Ashu Singh</h2>
          <h2
          className='text-lg text-textxl'>25 | Software Engineer</h2>

        </div>
      </div>
     </div>

     <PageReuse text={"About Me"}>
       <div className=' flex flex-col gap-2 text-lg text-textxl px-2'>
         <li className="leading-snug">
            Still looking to became better then i was yesterday. I enjoy working on making different things.
         </li>
          <li className='leading-snug'>
            Always want to try out new technologies and learn how does they work and how can i use them to make something new and usefull.
          </li>
       </div>
        
        

      </PageReuse>
    </div>
  )
}

export default NewHero