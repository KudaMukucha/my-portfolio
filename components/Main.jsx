import Link from "next/link"
import { FaGithub, FaLinkedin, FaTwitter, FaWhatsapp } from "react-icons/fa"

const Main = () => {
  return (
    <div className="w-full h-screen text-center">
        <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
            <div>
                <p className="uppercase tracking-widest text-gray-600">Let's build something legendary together.</p>
                <h1 className="py-4 text-gray-700">Hi, I'm <span className="text-[#5651e5]">Kudakwashe</span></h1>
                <h1 className="py-2">A Front-End Web Developer</h1>
                <p className="py-4 text-gray-600 max-w-[70%] m-auto">I'm a front-end web developer specializing in
                     building exceptional digital experiences. Currently, I'm focused on building responsive front-end
                    web applications while learning back-end technologies.
                </p>

                <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
                    <Link href={'https://www.linkedin.com/in/kudakwashe-mukucha-998b3b178/'} className='rounded-full shadow-lg shadow-gray-300 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                    <FaLinkedin/>
                    </Link>

                    <Link href={'https://github.com/KudaMukucha'} className='rounded-full shadow-lg shadow-gray-300 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                    <FaGithub/>
                    </Link>

                    <Link href={'https://twitter.com/kudamukucha_'} className='rounded-full shadow-lg shadow-gray-300 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                    <FaTwitter/>
                    </Link>
                    
                    <Link href={'https://wa.me/263783291884'} className='rounded-full shadow-lg shadow-gray-300 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                    <FaWhatsapp/>
                    </Link>
                   
                </div>
            </div>
        </div>
    </div>
  )
}

export default Main