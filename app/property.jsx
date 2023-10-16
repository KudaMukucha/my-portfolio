import Image from 'next/image'
import React from 'react'
import propertyImg from '../public/property.jpg'

const property = () => {
  return (
    <>
    <div className='w-full'>
        <div className='w-screen h-[30vh] lg:w-[40vh] relative'>
            <div className='absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10'/>
            <Image src={propertyImg} alt={'/'}/>
        </div>
    </div>
    </>
  )
}

export default property