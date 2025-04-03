import React from 'react'

const ResumeCard = ({ title, year, percent,desc }) => {
  return (
    <div className='w-full lg:h-1/3 group flex text-gray-300'>
      <div className='w-10 h-[6px] bg-black mt-16 relative'>
        <span className='absolute w-5 h-5 rounded-full -top-2 -left-3 flex justify-center
        items-center bg-black'>
          <span className='w-3 h-3 rounded-full bg-gray-800 inline-flex group-hover:bg-pink-700 duration-300'></span></span></div>
      <div className='w-full boxBg rounded-lg px-10 py-5 lg:py-0 flex flex-col justify-center gap-10 shadow-lg shadow-black'>
        <div className='flex justify-between'>
          <div>
            <h1 className='text-2xl font-semibold group-hover:text-white duration-300'>{title}</h1>
            <h1 className='text-sm font-semibold text-pink-800 group-hover:text-pink-600 duration-300'>{year}</h1>
          </div>
          <div>
            <h1 className='w-20 h-10 text-pink-700 boxBg rounded-lg flex justify-center items-center shadow-md shadow-black text-sm '>{percent}</h1>
          </div>
        </div>
        <p className='text-md text-gray-400 group-hover:text-white duration-300'>{desc}</p>

      </div>
    </div>
  )
}

export default ResumeCard