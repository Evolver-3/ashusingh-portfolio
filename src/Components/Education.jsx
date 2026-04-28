import React from 'react'
import PageReuse from './comp/PageReuse'

const eduCards=[
  {
    id:1,
    text:"Master's of Computer Applications",
    year:`2023-2025`,
    college:"Axis Business School"
    
  },
  {
    id:2,
    text:"Bachelor's of Computer Applications",
    year:`2020-2023`,
    college:"Dr. Virendra Swarup Institute of Computer Studies"
  },
  {
    id:3,
    text:"Intermediate",
    year:`2018`,
    college:"Guru Nanak Public School"
  }
]

const Education = () => {
  return (
   <PageReuse text={"Education"}>
    <div className='flex flex-col gap-5'>
      {
        eduCards.map((card)=>(
          <div 
          key={card.id}
          className='w-full flex flex-col gap-2 md:gap-5 md:px-20'>
             <div className='flex gap-4 items-center text-foreground '>
              <Edulogo/>
        
              <h2 className='text-xl leading-snug font-bold '>
                {card.college}
              </h2>
              </div>

              <div
              className='flex gap-1 pl-11 flex-col text-lg leading-tight text-textxl'> 
                <h2 className=''>{card.text}</h2>
                
                <h2 >{card.year}</h2>
              </div>
         
          </div>
        ))
      }
    </div>
   </PageReuse>
  )
}

export default Education

const Edulogo=()=>{
  return(
    <div className=' p-1 rounded-md bg-smallcard text-foreground border-borderlight ring-1 hover:bg-hovered transition-colors duration-200 '>
      <svg
      className='size-5'
      xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-graduation-cap size-4" aria-hidden="true"><path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z"></path><path d="M22 10v6"></path><path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5"></path></svg>
    </div>
  )
}