import React from 'react'
import { useTypewriter, Cursor } from 'react-simple-typewriter'
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaReact, FaInstagram } from "react-icons/fa";
import { SiTailwindcss, SiExpress, SiNodedotjs, SiReact, SiSpringboot } from "react-icons/si";
import profile from '../assets/images/profile7.png'

const Banner = () => {
    const [text] = useTypewriter({
        words: ['Frontend Developer.', 'Web Developer.', 'Full Stack Developer.', 'Professional Coder.'],
        loop: true,
        typeSpeed: 20,
        deleteSpeed: 50,
        delaySpeed: 2000
    })
    return (
        <section id='home' className='w-full    pt-10 pb-20 lg:flex border-b-[1px] border-gray-400 items-center'>

            <div className='lg:w-1/2 lg:flex flex-col gap-20'>
                <div className='flex flex-col gap-5'>
                    <h1 className='text-xl uppercase'>Welcome to My PortFolio</h1>
                    <h1 className='text-6xl'>Hi,{" "} I'm <span className='text-pink-700'>Sabari</span></h1>
                    <h1 className='text-3xl '>a {" "}<span>{text}</span>
                        <Cursor cursorColor='red' /></h1>
                    <a className='text-md'>Hi, I'm Sabari, a passionate MERN Full Stack Developer with a strong focus on building high-performance, scalable web applications. With expertise in MongoDB, Express.js, React, and Node.js, I love crafting seamless user experiences and solving complex problems with efficient, clean code.</a>
                </div>
                <div className='lg:flex justify-between mt-5 lg:mt-0 '>
                    <div className='flex flex-col gap-5'>
                        <h1 className='text-2xl'>Find me in</h1>
                        <div className='flex gap-5'>
                            <a href="https://www.instagram.com/tobi__sabi?igsh=MTBxeGZqdHNuNXVyYg==" className='bannerIcon text-pink-600'><FaInstagram /></a>
                            <a href='https://www.linkedin.com/in/sabari32/' className='bannerIcon text-blue-500'><FaLinkedinIn /></a>
                            <a href='' className='bannerIcon text-blue-500'><FaTwitter /></a>
                        </div>
                    </div>
                    <div className='flex flex-col gap-5 mt-5 lg:mt-0'>
                        <h1 className='text-2xl'>Best Skill On</h1>
                        <div className='flex gap-5'>
                            <span className='bannerIcon text-blue-500'><SiReact /></span>
                            <span className='bannerIcon text-yellow-300'><SiExpress /></span>
                            <span className='bannerIcon text-sky-400'><SiTailwindcss /></span>
                            <span className='bannerIcon text-green-400'><SiNodedotjs /></span>
                            <span className='bannerIcon text-green-500'><SiSpringboot /></span>
                        </div>
                    </div>
                </div>

            </div>
            <div className='lg:w-1/2 justify-center items-center flex relative'>
            <img src={profile} className='h-[680px] w-[500px] z-10'></img>
            <div className='absolute h-[500px] w-full lg:w-[500px] px-5 lg:px-0 boxBg shadow-xl shadow-black bottom-0'></div>

            </div>
        </section>
    )
}

export default Banner