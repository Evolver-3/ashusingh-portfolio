import Container from './Container'

const projectCards=[
  {
    id:1,
    imgLight:"Finta-light.png",
    imgDark:"finta-dark.png",
    name:"Finta Ui",
    year:2026,
    live:"Website",
    git:"Source",
    Stack:{
      language:["React","Javascript","Tailwindcss","Framer Motion"]
    }

  }
] 

const Projects = ({dark}) => {


  return (

    <div className='w-full h-screen '>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto' >
        
        {projectCards.map((card,i)=>(
          <div className='w-full shadow-acer border border-neutral-300 rounded-md dark:border-neutral-500' key={card.id}>

            <img src={dark? card.imgDark:card.imgLight} alt={card.name} className='object-cover rounded-md' />
          </div>
        ))}

      </div>
      
    </div>
 
  )
}

export default Projects