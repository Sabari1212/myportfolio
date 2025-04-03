import React, { useState } from 'react'
import Titles from '../layouts/Titles'
import ResumeCard from '../layouts/ResumeCard'
import Education from './Education'
import Skills from './Skills'
import Achievements from './Achievements'

const Resume = () => {
  const [edu,setEdu]=useState(true)
  const [skills,setSkills]=useState(false)
  const [ach,setAch]=useState(false)
  return (
    <section id='resume' className='w-full   py-20 lg:py-28 border-b-[1px] border-gray-400 '>
    <div className='flex justify-center items-center text-center'>
        <Titles title={"1+ YEARS OF EXPERIENCE"} description={"My Resume"}/>
    </div>
    <div>
        <ul className='w-full grid grid-cols-3 '>
            <li className={`${edu ? "border-pink-700":"border-transparent"} resumeLi`} onClick={()=>setEdu(true) & setAch(false) & setSkills(false)}>Education</li>
            <li className={`${skills ? "border-pink-700":"border-transparent"} resumeLi`}  onClick={()=>setEdu(false) & setSkills(true) & setAch(false)}>Skills</li>
            <li className={`${ach ? "border-pink-700":"border-transparent"} resumeLi`} onClick={()=>setEdu(false) & setSkills(false) & setAch(true)}>Certificates</li>
        </ul>
    </div>
    {edu && <Education/>}
    {skills && <Skills/>}
    {ach && <Achievements/>}
    {/* <div className=' w-full flex gap-20'>
      <div className='w-1/2'>
      <div className='py-12'>
        <Titles title={"Currently Pursuing B.E from UCEA"} description={"My Resume"}/>
        
        </div>
        <div className='border-l-[6px] border-black w-full h-[1000px] flex flex-col gap-10 '>
        <ResumeCard title={"School 10 th"} year={"2019 to 2021"} percent={"100%"} desc={"fsgsja dshsdgjadsj dsadsgadsj djagdkg djgkdgas j gdjgjad djdjda  gfjkfb g a gdkjag"}/>
        <ResumeCard title={"School 10 th"} year={"2019 to 2021"} percent={"100%"} desc={"fsgsja dshsdgjadsj dsadsgadsj djagdkg djgkdgas j gdjgjad djdjda  gfjkfb g a gdkjag"}/>
        <ResumeCard title={"School 10 th"} year={"2019 to 2021"} percent={"100%"} desc={"fsgsja dshsdgjadsj dsadsgadsj djagdkg djgkdgas j gdjgjad djdjda  gfjkfb g a gdkjag"}/>
      
       

        </div>

      </div>
      <div className='w-1/2'>
      <div className='py-12'>
        <Titles title={"Currently Pursuing B.E from UCEA"} description={"My Resume"}/>
        
        </div>
        <div className='border-l-[6px] border-black w-full h-[1000px] flex flex-col gap-10 '>
        <ResumeCard title={"School 10 th"} year={"2019 to 2021"} percent={"100%"} desc={"fsgsja dshsdgjadsj dsadsgadsj djagdkg djgkdgas j gdjgjad djdjda  gfjkfb g a gdkjag"}/>
        <ResumeCard title={"School 10 th"} year={"2019 to 2021"} percent={"100%"} desc={"fsgsja dshsdgjadsj dsadsgadsj djagdkg djgkdgas j gdjgjad djdjda  gfjkfb g a gdkjag"}/>
        <ResumeCard title={"School 10 th"} year={"2019 to 2021"} percent={"100%"} desc={"fsgsja dshsdgjadsj dsadsgadsj djagdkg djgkdgas j gdjgjad djdjda  gfjkfb g a gdkjag"}/>
      
       

        </div>

      </div>
        
        

    </div> */}
    </section>
  )
}

export default Resume