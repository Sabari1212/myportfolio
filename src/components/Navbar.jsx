import React, { useState } from 'react'
import profile from '../assets/images/profile11.png'
import { navilinksdata } from '../constants'
import {Link} from 'react-scroll'
import { motion } from 'framer-motion'
import { FiMenu } from 'react-icons/fi'
import { IoMdClose } from 'react-icons/io'
const Navbar = () => {
    const [menu,setMenu]=useState(false)
  return (
    <div className='w-full h-24 mx-auto flex justify-between items-center border-b-[1px] border-gray-400 sticky top-0 bodyColor z-50  '>
        <div className='flex items-center gap-5'>
            <img src={profile} className='h-20 w-20 rounded-full border-gray-100 border-1'></img>
            <h1 className='text-xl font-bold lightText'>SABARI S</h1>

        </div>
        <div className='hidden  lg:block'>
            <ul className=' flex items-center gap-10'>
                {navilinksdata.map((navlink)=>(
                    <li key={navlink._id} className='lightText  font-normal tracking-wide  text-lg cursor-pointer
                     hover:text-pink-700 duration-300'><Link activeClass='active' to={navlink.link} spy={true} smooth={true} duration={300} offset={-70} >{navlink.title}</Link></li>
                ))}

            </ul>

        </div>
            <button onClick={()=>setMenu(true)} className='block lg:hidden text-4xl font-bold lightText'><FiMenu/></button>

        
       {menu && <motion.div
        initial={{x:"-100%",opacity:0}}
        animate={{x:0,opacity:1}}
        transition={{duration:0.5,}}  className='block lg:hidden absolute top-0 left-0 pt-44 w-full h-[100vh] bg-black ' onClick={()=>setMenu(false)}>
            <ul className=' flex flex-col items-center gap-10  ' onClick={()=>setMenu(false)}>
                {navilinksdata.map((navlink)=>(
                    <li key={navlink._id}   className='lightText  font-normal tracking-wide  text-lg cursor-pointer
                     hover:text-pink-700 duration-300' ><Link activeClass='active' to={navlink.link} spy={true} smooth={true} duration={300} offset={-70} onClick={()=>setMenu(false)}>{navlink.title} </Link></li>
                ))}

            </ul>
            <button className='absolute top-2 right-2 text-3xl text-pink-600' onClick={()=>setMenu(false)}><IoMdClose/> </button>

        </motion.div>
            }
    </div>
  )
}

export default Navbar