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

const Projects = () => {

  const isDark=localStorage.getItem("theme")==="dark"
  return (
    <Container>
    <div className='w-full h-screen'>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto ' >
        
        {projectCards.map((card,i)=>(
          <div className='w-full shadow-finta rounded-md' key={card.id}>

            <img src={isDark? card.imgDark:card.imgLight} alt={card.text} className='object-cover' />
          </div>
        ))}

      </div>
      
    </div>
    </Container>
  )
}

export default Projects