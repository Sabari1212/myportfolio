import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6";

const Card = ({title,des,icon}) => {
  return (
    <div className='h-72 cards overflow-y-hidden  group '>
    <div className='h-full card hover:boxBg flex flex-col gap-6  px-6 lg:px-10 py-10 translate-y-10'>
      <div>
      <span className='text-3xl text-pink-600'>{icon}</span>

      </div>
      <div>
      <h1 className='text-2xl font-bold'>{title}</h1>

      </div>
      <div>
      <h1>{des}</h1>

      </div>
      <span className='text-2xl text-pink-600'><FaArrowRightLong/></span>
       
        
      
    </div>
    </div>
  )
}

export default Card