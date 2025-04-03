import React from 'react'
import ResumeCard from '../layouts/ResumeCard'
import Titles from '../layouts/Titles'
import { motion } from 'framer-motion'

const Skills = () => {
  return (
    <motion.div initial={{opacity: 0}} animate={{opacity:1, transition:{duration:1}}}  className=' w-full lg:flex gap-20'>
    <div className='lg:w-1/2'>
    <div className='py-12'>
      <Titles title={"Features"} description={"Soft Skills"}/>
      
      </div>
      <div className=' w-full flex flex-col gap-6 '>
      <div className='overflow-x-hidden'>
            <p className='text-sm uppercase font-medium'>problem solving</p>
            <span
             className='w-full h-2 bg-gray-800 inline-flex rounded-md mt-2'>
                <motion.span 
            initial={{x:"-100%",opacity:0}}
            animate={{x:0,opacity:1}}
            transition={{duration:0.5,delay:0.5}} className='w-[80%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative'>
                <span className='absolute -top-8 right-0'>80%</span>
                </motion.span>
               
            </span>
        </div>
        <div className='overflow-x-hidden'>
            <p className='text-sm uppercase font-medium'>adaptability</p>
            <span
             className='w-full h-2 bg-gray-800 inline-flex rounded-md mt-2'>
                <motion.span 
            initial={{x:"-100%",opacity:0}}
            animate={{x:0,opacity:1}}
            transition={{duration:0.5,delay:0.5}} className='w-[90%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative'>
                <span className='absolute -top-8 right-0'>90%</span>
                </motion.span>
               
            </span>
        </div>
        <div className='overflow-x-hidden'>
            <p className='text-sm uppercase font-medium'>teamwork</p>
            <span
             className='w-full h-2 bg-gray-800 inline-flex rounded-md mt-2'>
                <motion.span 
            initial={{x:"-100%",opacity:0}}
            animate={{x:0,opacity:1}}
            transition={{duration:0.5,delay:0.5}} className='w-full h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative'>
                <span className='absolute -top-8 right-0'>100%</span>
                </motion.span>
               
            </span>
        </div>
        <div className='overflow-x-hidden'>
            <p className='text-sm uppercase font-medium'>communication</p>
            <span
             className='w-full h-2 bg-gray-800 inline-flex rounded-md mt-2'>
                <motion.span 
            initial={{x:"-100%",opacity:0}}
            animate={{x:0,opacity:1}}
            transition={{duration:0.5,delay:0.5}} className='w-[80%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative'>
                <span className='absolute -top-8 right-0'>80%</span>
                </motion.span>
               
            </span>
        </div>
        <div className='overflow-x-hidden'>
            <p className='text-sm uppercase font-medium'>time management</p>
            <span
             className='w-full h-2 bg-gray-800 inline-flex rounded-md mt-2'>
                <motion.span 
            initial={{x:"-100%",opacity:0}}
            animate={{x:0,opacity:1}}
            transition={{duration:0.5,delay:0.5}} className='w-[95%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative'>
                <span className='absolute -top-8 right-0'>95%</span>
                </motion.span>
               
            </span>
        </div>
      
     
     

      </div>

    </div>
    <div className='lg:w-1/2'>
    <div className='py-12'>
      <Titles title={"Features"} description={"Technical Skills"}/>
      
      </div>
      <div className=' w-full flex flex-col gap-6 '>
      <div className='overflow-x-hidden'>
            <p className='text-sm uppercase font-medium'>REACT</p>
            <span
             className='w-full h-2 bg-gray-800 inline-flex rounded-md mt-2'>
                <motion.span 
            initial={{x:"-100%",opacity:0}}
            animate={{x:0,opacity:1}}
            transition={{duration:0.5,delay:0.5}} className='w-[90%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative'>
                <span className='absolute -top-8 right-0'>90%</span>
                </motion.span>
               
            </span>
        </div>
       
        <div className='overflow-x-hidden'>
            <p className='text-sm uppercase font-medium'>JAVASCRIPT</p>
            <span
             className='w-full h-2 bg-gray-800 inline-flex rounded-md mt-2'>
                <motion.span 
            initial={{x:"-100%",opacity:0}}
            animate={{x:0,opacity:1}}
            transition={{duration:0.5,delay:0.5}} className='w-[80%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative'>
                <span className='absolute -top-8 right-0'>80%</span>
                </motion.span>
               
            </span>
        </div>
        <div className='overflow-x-hidden'>
            <p className='text-sm uppercase font-medium'>NODE</p>
            <span
             className='w-full h-2 bg-gray-800 inline-flex rounded-md mt-2'>
                <motion.span 
            initial={{x:"-100%",opacity:0}}
            animate={{x:0,opacity:1}}
            transition={{duration:0.5,delay:0.5}} className='w-[70%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative'>
                <span className='absolute -top-8 right-0'>70%</span>
                </motion.span>
               
            </span>
        </div>
        <div className='overflow-x-hidden'>
            <p className='text-sm uppercase font-medium'>SPRINGBOOT</p>
            <span
             className='w-full h-2 bg-gray-800 inline-flex rounded-md mt-2'>
                <motion.span 
            initial={{x:"-100%",opacity:0}}
            animate={{x:0,opacity:1}}
            transition={{duration:0.5,delay:0.5}} className='w-[65%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative'>
                <span className='absolute -top-8 right-0'>65%</span>
                </motion.span>
               
            </span>
        </div>
        <div className='overflow-x-hidden'>
            <p className='text-sm uppercase font-medium'>SQL</p>
            <span
             className='w-full h-2 bg-gray-800 inline-flex rounded-md mt-2'>
                <motion.span 
            initial={{x:"-100%",opacity:0}}
            animate={{x:0,opacity:1}}
            transition={{duration:0.5,delay:0.5}} className='w-[80%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative'>
                <span className='absolute -top-8 right-0'>80%</span>
                </motion.span>
               
            </span>
        </div>
     
     

      </div>
    
     

      </div>

    
      
      

  </motion.div>
  )
}

export default Skills