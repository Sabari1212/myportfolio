import React from 'react'

const Titles = ({title,description}) => {
  return (
    <div className='flex flex-col gap-4 pb-10'>
        <h1 className='text-xl text-pink-600'>{title}</h1>
        <h1 className='text-3xl font-bold'>{description}</h1>
    </div>
  )
}

export default Titles