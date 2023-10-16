import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const ProjectItem = ({title,backgroundImg,techStack, projectUrl}) => {
  return (
    <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group bg-gradient-to-r from-[#5651e5] to-[#709dff]">
                    <Image src={backgroundImg} alt={'Project One'} width={1000} height={1000} className="rounded-xl group-hover:opacity-10"/>
                    <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
                        <h3 className="text-2xl tracking-widest text-center text-white">{title}</h3>
                        <p className="pb-4 pt-4 text-white text-center">{techStack}</p>
                        <Link href={projectUrl}>
                            <p className="text-center p-3 rounded-lg bg-white text-gray-700 text-lg cursor-pointer hover:text-blue-700">More Info</p>
                        </Link>
                    </div>
                </div>
  )
}

export default ProjectItem