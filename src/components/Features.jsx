import React from 'react'
import Titles from '../layouts/Titles'
import Card from '../layouts/Card'
import { FaBarcode } from "react-icons/fa6";
import { FaAppStore, FaAws, FaDatabase, FaGit, FaGithub, FaNodeJs, FaReact } from 'react-icons/fa';

const Features = () => {
  return (
    <section id='features' className='w-full   py-20 border-b-[1px] border-gray-400 '>
    <Titles title={"Features"} description={"What I Do"}/>
    <div className='w-full  grid lg:grid-cols-3 gap-20'>
        <Card title={"Front-End Development"} des={" Crafting intuitive and responsive UI using React.js, Redux, and modern JavaScript frameworks."} icon={<FaReact/>}/>
        <Card title={"Back-End Development"} des={"Building robust RESTful APIs with Node.js, Express.js, and integrating databases with MongoDB."} icon={<FaNodeJs/>}/>
        <Card title={"Database Management"} des={"Designing optimized schemas and handling data efficiently in MongoDB and MySQL."} icon={<FaDatabase/>}/>
        <Card title={"Deployment & DevOps"} des={"Deploying applications using cloud platforms like AWS, Firebase, and Heroku."} icon={<FaAws/>}/>
        <Card title={"Version Control & Collab"} des={"Managing projects with Git and GitHub, following best practices, pull requests, and team collaboration."} icon={<FaGithub/>}/>
        <Card title={"Full-Stack Integration"} des={"Combining front-end and back-end expertise to build fully functional and scalable web applications."} icon={<FaAppStore/>}/>
        

    </div>
</section>
  )
}

export default Features