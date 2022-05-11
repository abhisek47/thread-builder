import React from 'react'

const Footer = () => {
  return (
    <div className='flex  gap-2  items-center absolute bottom-0 my-4'>
      <button className='py-2 px-6 bg-orange-500 text-gray-100 rounded-3xl text-sm'>Scheduled</button>
      <button className='py-2 px-6 bg-blue-500 text-gray-100 rounded-3xl text-sm'>Tweet</button>
    </div>
  )
}

export default Footer
