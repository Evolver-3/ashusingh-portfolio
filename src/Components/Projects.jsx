import Container from './Container'

const projectCards=[
  {
    id:1,
    imgLight:"Finta-light.png",
    imgDark:"finta-dark.png",
    name:"Finta Ui",
    text:"Finta Ui is based on the original Finta, which is a tax related website. We have added dark mode and also the site is responsive on most of the devices.",
    year:2026,
    live:"https://newfintaupload.vercel.app/",
    git:"https://github.com/Evolver-3/newfintaupload.git",
    Stack:{
      language:["React","Javascript","Tailwindcss","Framer Motion"]
    }

  }
] 

const Projects = ({dark}) => {


  return (

    <div className='w-full flex flex-col gap-5 items-center justify-center'>

      <h2 className='text-[40px] text-foreground font-semibold'>My Projects</h2>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl md:mx-auto px-4' >
        
        {projectCards.map((card,i)=>(
          <div className='w-full shadow-acer border border-bdr rounded-md bg-bottom' key={card.id}>

            <img src={dark? card.imgDark:card.imgLight} alt={card.name} className='object-cover aspect-video rounded-md' />

            <div className=' text-foreground flex flex-col gap-2 py-2 px-3'>
              <h2 className='font-bold text-shadow-xs'>{card.name}</h2>
              <h3 className='text-neutral-600'>{card.year}</h3>
              <p className='leading-tight text-neutral-500'>{card.text}</p>
            </div>

            <div className='px-3 py-2 flex gap-1 md:gap-4 text-md '>
              {card.Stack.language.map((stack)=>(
                <div key={stack} className='rounded-md border border-btn shadow-acer bg-card text-foreground px-1 md:px-2 text-shadow-sm '>
                  {stack}
                </div>
              ))}
            </div>

            <div className='flex gap-5 px-3 py-2'>

              <LinkBtn logo={<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14"  fill="currentColor" viewBox="0 0 24 24" ><path d="M12 2C6.49 2 2 6.49 2 12s4.49 10 10 10 10-4.49 10-10S17.51 2 12 2m7.5 7.24c-1.05-.45-2.36-.77-3.76-.97-.2-1.4-.52-2.71-.97-3.76 2.19.81 3.92 2.55 4.73 4.73m-3.55 4.44c.03-.56.05-1.12.05-1.68s-.02-1.12-.05-1.68C18.62 10.79 20 11.64 20 12s-1.39 1.21-4.05 1.68M12 20c-.36 0-1.21-1.39-1.68-4.05.56.03 1.12.05 1.68.05s1.12-.02 1.68-.05C13.21 18.62 12.36 20 12 20m0-6c-.69 0-1.33-.03-1.93-.07-.05-.6-.07-1.24-.07-1.93s.03-1.33.07-1.93c.6-.05 1.24-.07 1.93-.07s1.33.03 1.93.07c.05.6.07 1.24.07 1.93s-.03 1.33-.07 1.93c-.6.05-1.24.07-1.93.07m-8-2c0-.36 1.39-1.21 4.05-1.68C8.02 10.88 8 11.44 8 12s.02 1.12.05 1.68C5.38 13.21 4 12.36 4 12m8-8c.36 0 1.21 1.39 1.68 4.05C13.12 8.02 12.56 8 12 8s-1.12.02-1.68.05C10.79 5.38 11.64 4 12 4m-2.76.5c-.45 1.05-.77 2.36-.97 3.76-1.4.2-2.71.52-3.76.97A8.04 8.04 0 0 1 9.24 4.5M4.51 14.76c1.05.45 2.36.77 3.76.97.2 1.4.52 2.71.97 3.76a8.04 8.04 0 0 1-4.73-4.73m10.26 4.73c.45-1.05.77-2.36.97-3.76 1.4-.2 2.71-.52 3.76-.97a8.04 8.04 0 0 1-4.73 4.73"></path></svg>} link={card.live} btnTag={"Website"}/>

              

              <LinkBtn logo={<svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 496 512" height="14px" width="14px" xmlns="http://www.w3.org/2000/svg"
              >
              <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path>
              </svg>} link={card.git} btnTag={"Source"}/>

            </div>
          </div>
        ))}

      </div>
      
    </div>
 
  )
}

export default Projects

const LinkBtn = ({ link, logo, btnTag }) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className='flex gap-2 rounded-md text-background items-center justify-center px-2 py-1 bg-foreground shadow-acer border border-background cursor-pointer hover:bg-btn hover:-translate-y-0.5 hover:scale-95 active:scale-95 transition duration-200'
    >
      <span className='text-xs'>{logo}</span>
      <span className='text-xs'>{btnTag}</span>
    </a>
  )
}
