import React from 'react'
import PageReuse from '../comp/PageReuse'
import { LinksBtn } from '../Links/LinkPage'

const skillgroups=[
  "React","Javascript","Tailwind","ExpressJs",
  "MongoDB","NodeJs","Git","Github","JWT","Redux","Motion","Postman","Vercel","VSCode"
]

const NewSkillpage = () => {
  return (
    <PageReuse text={"Stack and Tools"}>
      <div className='leading loose'>
      
      {skillgroups.map((skill,i)=>(
        <span key={i}
        className='inline-block m-2'>
          <LinksBtn>
          {skill}
          </LinksBtn>
        </span>
      ))}


      </div>
    </PageReuse>
  )
}

export default NewSkillpage