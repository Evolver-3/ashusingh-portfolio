import React from 'react'

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
  }
]

const Education = () => {
  return (
    <div className='flex flex-col items-center justify-center my-15'>
      <h2 className='relative text-5xl text-foreground font-semibold'>Education</h2>
      <div className='w-full px-10 flex flex-col md:flex-row gap-20 sm:gap-10 my-15'>

        {eduCards.map((card)=>(
          <div key={card.id} className='w-full rounded-3xl bg-secondary p-5 flex items-center gap-5 px-10 sm:px-5'>
            
            <img src={'/aktu logo.png'} alt='aktu logo' className='size-20 rounded-full '/>

            <div className='flex flex-col text-white'>
              <h2 className='text-xl'>{card.text} <span>({card.year})</span></h2>
              <p>{card.college}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Education