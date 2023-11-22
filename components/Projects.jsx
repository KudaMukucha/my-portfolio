import Image from "next/image"
import Link from "next/link"
import ProjectItem from "./ProjectItem"
import DiscoverImg from '../public/discover.PNG'

const Projects = () => {
  return (
    <div id='projects' className="w-full">
        <div className="max-w-[1240px] mx-auto px-2 py-16">
            <p className="text-xl tracking-widest text-[#5651e5] uppercase">Projects</p>
            <h2 className="py-4">What I Have Built</h2>
            <div className="grid md:grid-cols-2 gap-8">

                <ProjectItem title={'Discover Places'} backgroundImg ={DiscoverImg} techStack={'Next JS'} projectUrl ={'/property'}/>
                <ProjectItem title={'Next JS Dashboard'} backgroundImg ={DiscoverImg} techStack={'Next JS'} projectUrl ={'/property'}/>

            </div>
        </div>
    </div>
  )
}

export default Projects