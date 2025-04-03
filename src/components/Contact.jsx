import React, { useState } from 'react'
import { FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa'
import Titles from '../layouts/Titles'
import contact from '../assets/images/contact.webp'

const Contact = () => {
      const [n,setN]=useState(false)
      const [p,setP]=useState(false)
      const [e,setE]=useState(false)
      const [s,setS]=useState(false)
      const [y,setY]=useState(false)
      const [mes,setMes]=useState(false)
  return (
    <section id='contact' className='w-full   py-20 border-b-[1px] border-gray-400 '>
        <div className='flex justify-center items-center text-center'>
            <Titles title={"CONTACT"} description={"Contact With Me"}/>
        </div>

        <div className='lg:flex  justify-between items-center  mx-auto'>
            <div className='lg:w-[25%] project boxBg p-5  flex flex-col gap-3 px-8 text-gray-300 mb-20 '>
                <img className='h-40 w-80 mx-auto mb-5 rounded-sm shadow-xl' src={contact}></img>
                <h1 className='font-bold '>Sabari S</h1>
                <p className='text-md'>MERN Stack Developer</p>
                <p className='text-sm'>I am a passionate MERN Stack Developer with experience in building responsive and dynamic web applications. I specialize in JavaScript technologies, including React, Node.js, Express, and MongoDB</p>
                <h1 className='text-sm'>Phone : <span className='text-pink-700 font-semibold'>9750371420</span></h1>
                <h1 className='text-sm'>Email : <span className='text-pink-700 font-semibold'>sabarisankar1212@gmail.com</span></h1>
                <div className='flex flex-col gap-3'>
                    <h1 className='font-bold'>Find me in</h1>
                    <div className='flex gap-5'>
                                                <a href="https://www.instagram.com/tobi__sabi?igsh=MTBxeGZqdHNuNXVyYg==" className='bannerIcon text-pink-600'><FaInstagram /></a>
                                                                           <a href='https://www.linkedin.com/in/sabari32/' className='bannerIcon text-blue-500'><FaLinkedinIn /></a>
                                                                           <a href='' className='bannerIcon text-blue-500'><FaTwitter /></a>
                                           </div>
                </div>

            </div>
            <div className='lg:w-[70%] project boxBg flex flex-col gap-10 p-5'>
                <div className='lg:flex   w-full gap-10 '>
                <div className='lg:w-1/2 flex flex-col gap-3 pb-8 lg:pb-0'>
                    <h1>YOUR NAME</h1>
                    <input type='text' className={`${n ? "border-pink-700":"border-transparent"} w-full  outline-none border-[1px] rounded-sm boxBg shadow-md h-10`} 
                    onClick={()=>setN(true) & setE(false) & setP(false) & setS(false) & setY(false)}
                    ></input>
                </div>
                <div className='lg:w-1/2 flex flex-col gap-3'>
                    <h1>PHONE NUMBER</h1>
                    <input type='text' className={`${p ? "border-pink-700":"border-transparent"} w-full  outline-none border-[1px] rounded-sm boxBg shadow-md h-10`} 
                    onClick={()=>setN(false) & setE(false) & setP(true) & setS(false) & setY(false)}></input>
                </div>
                </div>
                <div className='w-full flex flex-col gap-3'>
                    <h1>EMAIL</h1>
                    <input type='text' className={`${e ? "border-pink-700":"border-transparent"} w-full  outline-none border-[1px] rounded-sm boxBg shadow-md h-10`} 
                    onClick={()=>setN(false) & setE(true) & setP(false) & setS(false) & setY(false)}></input>
                </div>
                <div className='w-full flex flex-col gap-3'>
                    <h1>SUBJECT</h1>
                    <input type='text' className={`${s ? "border-pink-700":"border-transparent"} w-full  outline-none border-[1px] rounded-sm boxBg shadow-md h-10`} 
                    onClick={()=>setN(false) & setE(false) & setP(false) & setS(true) & setY(false)}></input>
                </div>
                <div className='w-full flex flex-col gap-3'>
                    <h1>YOUR MESSAGE</h1>
                    <textarea className={`${y ? "border-pink-700":"border-transparent"} w-full  outline-none border-[1px] rounded-sm boxBg shadow-md h-30`} 
                    onClick={()=>setN(false) & setE(false) & setP(false) & setS(false) & setY(true)}></textarea>
                </div>
                <div>
                <button className='w-full h-12 boxBg hover:text-pink-700 hover:bg-black duration-300 cursor-pointer'
                onClick={()=>setN(false) & setE(false) & setP(false) & setS(false) & setY(false) & setMes(true)}>Send Message </button>
                    
                </div>
              {mes &&  <div className='w-full flex justify-center'>
                <h1 className='text-green-600'>Message Sent SuccessFul</h1>
                    
                </div>
}

            </div>

        </div>
       
    </section>
  )
}

export default Contact