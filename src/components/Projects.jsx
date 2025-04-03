import React from 'react'
import Titles from '../layouts/Titles'
import ProjectCard from '../layouts/ProjectCard'
import download from '../assets/images/download.png'
import p1 from '../assets/images/p1.png'
import p2 from '../assets/images/p2.png'
import p3 from '../assets/images/p3.jpg'
import p4 from '../assets/images/p4.png'
import { motion } from 'framer-motion'
const Projects = () => {
  return (
    <section id='projects' className='w-full   py-20 border-b-[1px] border-gray-400 '>
        <div className='flex justify-center items-center text-center'>
            <Titles title={"VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"} description={"My Projects"}/>
        </div>
        <motion.div  className='w-full  grid lg:grid-cols-3 gap-20 '>
          <ProjectCard title={"Advocate Consultancy"} description={"A platform to connect clients with legal consultants and provide legal services."} src={p1} github={"https://github.com/Sabari1212/advocate.git"} link={"https://advocate-two.vercel.app/"}/>
          <ProjectCard title={"My Portfolio"} description={"Personal portfolio showcasing my skills, projects, and experience as a Full Stack Developer."} src={p2} link={"https://tobi-sabi-portfolio.vercel.app/"} github={"https://github.com/Sabari1212/portfolio.git"}/>
          <ProjectCard title={"Tea Leaf Disease Identification"} description={"An AI-based web app to detect tea leaf diseases through image analysis."} src={p3} github={"https://github.com/Sabari1212/tea_leaf_disease.git"}/>
          <ProjectCard title={"Task Management"} description={"A web app to create, assign, and track tasks efficiently with real-time updates."} src={p4} github={"https://github.com/Sabari1212/Task-App.git"}/>
  
       
        </motion.div>
    
</section>
    
  )
}

export default Projects