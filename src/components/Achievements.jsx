import React from 'react'
import Titles from '../layouts/Titles'
import ResumeCard from '../layouts/ResumeCard'
import { motion } from 'framer-motion'
import ResumeCard1 from '../layouts/ResumeCard1'
import c1 from '../assets/images/certificates/c1.png'
import c2 from '../assets/images/certificates/c2.png'
import c3 from '../assets/images/certificates/c3.png'
import c4 from '../assets/images/certificates/c4.png'
import c5 from '../assets/images/certificates/c5.png'

const Achievements = () => {
  return (
    <motion.div initial={{opacity: 0}} animate={{opacity:1, transition:{duration:1}}} className=' w-full lg:flex gap-20'>
    <div className='lg:w-1/2'>
    <div className='py-12'>
      <Titles title={"Features"} description={"Internship Certificates"}/>
      
      </div>
      <div className='border-l-[6px] border-black w-full lg:h-[1000px] flex flex-col gap-10 '>
      <ResumeCard1 title={c1} desc={"Full Stack Web Development - Industrial Training (Edu-versity)Completed from 01/09/2024 to 30/10/2024 .Developed industry-relevant skills in web development."}/>
      <ResumeCard1 title={c3} desc={"Certificate of Participation - Full Stack Web Development (Edu-versity) Program Duration: 01/09/2024 to 30/10/2024. Recognized for participation in an intensive web development internship program."}/>
      <ResumeCard1 title={c5} desc={"Full Stack Web Development - Industrial Internship (Edu-versity) Internship Duration: 01/09/2024 to 30/10/2024. Gained hands-on experience in full-stack development. Worked on real-world projects using the MERN stack."}/>

    
     

      </div>

    </div>
    <div className='lg:w-1/2'>
    <div className='py-12'>
      <Titles title={"Features"} description={"Professional Certificates"}/>
      
      </div>
      <div className='border-l-[6px] border-black w-full lg:h-[1000px] flex flex-col gap-10 '>
      <ResumeCard1 title={c2} desc={"Neural Networks and Deep Learning (GUVI - Naan Mudhalvan Scheme) Issued on 03/04/2025 Gained expertise in AI, machine learning, and deep learning concepts."}/>
      <ResumeCard1 title={c4} desc={"Tamil Nadu Skill Development Corporation - Naan Mudhalvan Scheme (StartupTN) Issued on 03/04/2025 Successfully completed skill development training."}/>
     
    
     

      </div>

    </div>
      
      

  </motion.div>
  )
}

export default Achievements