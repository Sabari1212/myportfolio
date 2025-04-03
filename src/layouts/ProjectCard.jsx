import React from 'react'
import { CiGlobe } from 'react-icons/ci';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaReact, FaGithub, FaFirefoxBrowser } from "react-icons/fa";

const ProjectCard = ({title,description,src,github,link}) => {
  return (
    <div className='h-full project boxBg  flex flex-col gap-6 px-5 lg:px-10 py-10 group'>
        <img alt='image' src={src} className='h-50 lg:w-90 group-hover:scale-110 duration-500 rounded-md hover:shadow-2xl shadow-gray-950' ></img>
        <div className='flex justify-between'> 
            <h1 className='text-2xl font-bold text-pink-600'>{title}</h1>
            <ul className='flex gap-5'>
                <li className='projectIcon' ><a href={github}><FaGithub/></a></li>
                <li className='projectIcon'><a href={link}><CiGlobe /></a></li>
            
            </ul>
        </div>
        <div>
            <p>{description}</p>
        </div>

    </div>
  )
}

export default ProjectCard