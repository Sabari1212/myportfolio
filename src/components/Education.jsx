import React from 'react'
import ResumeCard from '../layouts/ResumeCard'
import Titles from '../layouts/Titles'
import { motion } from 'framer-motion'

const Education = () => {
  return (
    <motion.div initial={{opacity: 0}} animate={{opacity:1, transition:{duration:1}}} className=' w-full lg:flex gap-20'>
    <div className='lg:w-1/2'>
    <div className='py-12'>
      <Titles title={"2019-2025"} description={"My Education"}/>
      
      </div>
      <div className='border-l-[6px] border-black w-full lg:h-[1000px] flex flex-col gap-10 '>
      <ResumeCard title={"BE in Computer Science"} year={"University College of Engineering Arni [2021-2025]"} percent={"8.04 CGPA"} desc={"I am currently pursuing my Bachelor's in Computer Science, where I have gained expertise in full-stack web development, data structures, algorithms, and software engineering principles."}/>
      <ResumeCard title={"HSC"} year={"Sri Lakshmi Vidhyalaya matric higher secondary school , Arakandanallur [2020-2021]"} percent={"87.8%"} desc={"Completed my Higher Secondary Education with a strong foundation in Mathematics, Physics, and Computer Science. Developed analytical skills and problem-solving abilities that helped shape my technical mindset."}/>
      <ResumeCard title={"SSLC"} year={"Sri Lakshmi Vidhyalaya matric higher secondary school , Arakandanallur [2018-2019]"} percent={"81.6%"} desc={"Built a solid academic base with a focus on Science and Mathematics, fostering my interest in technology and programming."}/>
    
     

      </div>

    </div>
    <div className='lg:w-1/2'>
    <div className='py-12'>
      <Titles title={"2019-2025"} description={"My Experiences"}/>
      
      </div>
      <div className='border-l-[6px] border-black w-full lg:h-[1000px] flex flex-col gap-10 '>
      <ResumeCard title={"1Month Internship"} year={"National Institute and Technology, Karaikal [2024]"} percent={"100%"} desc={"Worked on Deep Learning applications, exploring Neural Networks, Computer Vision, and Model Optimization. Gained hands-on experience with TensorFlow, PyTorch, and dataset preprocessing while working on a real-world project."}/>
      <ResumeCard title={"MERN Stack Course"} year={" At Eduversity Educational Institue [2024]"} percent={"100%"} desc={"Mastered MERN (MongoDB, Express.js, React.js, Node.js) for full-stack development. Built and deployed scalable web applications, handling both frontend and backend integrations effectively."}/>
      <ResumeCard title={"2Month Internship"} year={"At Eduversity Educational Institue [2024]"} percent={"100%"} desc={"Worked on MERN Stack (MongoDB, Express.js, React.js, Node.js) to develop dynamic and responsive web applications. Gained expertise in REST APIs, authentication, database management, and deployment. Applied Agile methodologies and worked on real-world projects to enhance problem-solving and development skills."}/>
    
     

      </div>

    </div>
      
      

  </motion.div>
  )
}

export default Education