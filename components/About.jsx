import Image from 'next/image'
import React from 'react'

const About = () => {
  return (
    <div id='about' className='w-full md:h-screen flex items-center py-16'>
        <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
            <div className='col-span-2'>
                <p className='uppercase text-2xl tracking-widest text-[#5651e5]'>About</p>
                <h2 className='py-4'>Who I Am</h2>
                <p className='py-2 text-gray-600'>/* I transform ideas into functional realities. */</p>
                <p className='py-2 text-gray-600'>
                My tech journey began with HTML, CSS, and Bootstrap, where I discovered the foundations of web development. 
                Eager to expand my skills, I delved into React, which opened up a world of interactive and dynamic user
                interfaces. With a thirst for efficiency, I embraced Tailwind CSS, streamlining my styling process. 
                Seeking optimal performance, I then ventured into Next.js, empowering me to create fast and scalable web 
                applications.
                </p>
                <p className='py-2 text-gray-600'>
                With three years of experience under my belt, I have honed my skills in web development.
                Combining my practical knowledge with a solid educational foundation, I obtained a BSc Honors Degree in Informatics
                from National University of Science & Technology,Zimbabwe. Throughout my studies, I delved into various aspects of 
                software development, including algorithms, data structures, and database management. This comprehensive academic 
                background, coupled with hands-on experience, has equipped me with the expertise and versatility to tackle complex 
                tech projects with confidence and precision.
                </p>

                <p className='py-2 text-gray-600 underline cursor-pointer'>Check out some of my latest projects.</p>
            </div>
            <div className='w-full h-auto m-auto shadow-xl  shadow-gray-400 rounded-xl flex items-center p-4 hover:scale-105 ease-in duration-300'>
                <Image src={'/about.jpg'} alt={'about-image'} width={640} height={800} className={'rounded-xl'}/>
            </div>
        </div>
    </div>
  )
}

export default About