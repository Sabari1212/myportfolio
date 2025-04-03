import React from 'react'
import c1 from '../assets/images/certificates/c1.png'

const ResumeCard1 = ({ title, year, percent,desc }) => {
  return (
    <div className='w-full lg:h-1/3 group flex text-gray-300'>
    <div className='w-10 h-[6px] bg-black mt-16 relative'>
      <span className='absolute w-5 h-5 rounded-full -top-2 -left-3 flex justify-center
      items-center bg-black'>
        <span className='w-3 h-3 rounded-full bg-gray-800 inline-flex group-hover:bg-pink-700 duration-300'></span></span></div>
    <div className='w-full boxBg rounded-lg px-10 py-10 flex flex-col justify-center gap-5 shadow-lg shadow-black'>
      <div className='flex justify-between'>
        <div className='lg:mx-auto'>
        <img alt='image' src={title} className='h-50 lg:w-90  duration-500 rounded-md hover:shadow-2xl shadow-gray-950' ></img>
          
        </div>
        
      </div>
      <p className='text-md text-gray-400 group-hover:text-white duration-300'>{desc}</p>

    </div>
  </div>
  )
}

export default ResumeCard1