import Image from "next/image"

const Skills = () => {
  return (
    <div id='skills' className="w-full lg:h-screen p-2">
        <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
            <p className="text-xl tracking-widest uppercase text-[#5651e5]">Skills</p>
            <h2 className="py-4">What I Can Do</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

                <div className="p-6 shadow-xl rounded-xl  hover:scale-105 ease-in duration-300">  
                    <div className="grid grid-cols-2 gap-4 justify-center items-center">
                        <div className="m-auto">
                            <Image src={'/html.png'} width={64} height={64} alt={'html'}/>
                        </div>
                        <div className="flex flex-col items-center justify-center">
                            HTML
                        </div>
                    </div>
                </div>


                <div className="p-6 shadow-xl rounded-xl  hover:scale-105 ease-in duration-300">  
                    <div className="grid grid-cols-2 gap-4 justify-center items-center">
                        <div className="m-auto">
                            <Image src={'/css.png'} width={64} height={64} alt={'css'}/>
                        </div>
                        <div className="flex flex-col items-center justify-center">
                            CSS
                        </div>
                    </div>
                </div>
                
                <div className="p-6 shadow-xl rounded-xl  hover:scale-105 ease-in duration-300">  
                    <div className="grid grid-cols-2 gap-4 justify-center items-center">
                        <div className="m-auto">
                            <Image src={'/javascript.png'} width={64} height={64} alt={'javascript'}/>
                        </div>
                        <div className="flex flex-col items-center justify-center">
                            JavaScript
                        </div>
                    </div>
                </div>

                <div className="p-6 shadow-xl rounded-xl  hover:scale-105 ease-in duration-300">  
                    <div className="grid grid-cols-2 gap-4 justify-center items-center">
                        <div className="m-auto">
                            <Image src={'/react.png'} width={64} height={64} alt={'react js'}/>
                        </div>
                        <div className="flex flex-col items-center justify-center">
                            React
                        </div>
                    </div>
                </div>

                <div className="p-6 shadow-xl rounded-xl  hover:scale-105 ease-in duration-300">  
                    <div className="grid grid-cols-2 gap-4 justify-center items-center">
                        <div className="m-auto">
                            <Image src={'/tailwind.png'} width={64} height={64} alt={'tailwind'}/>
                        </div>
                        <div className="flex flex-col items-center justify-center">
                            Tailwind
                        </div>
                    </div>
                </div>

                <div className="p-6 shadow-xl rounded-xl  hover:scale-105 ease-in duration-300">  
                    <div className="grid grid-cols-2 gap-4 justify-center items-center">
                        <div className="m-auto">
                            <Image src={'/nextjs.png'} width={64} height={64} alt={'nextjs'}/>
                        </div>
                        <div className="flex flex-col items-center justify-center">
                            Next JS
                        </div>
                    </div>
                </div>

                <div className="p-6 shadow-xl rounded-xl  hover:scale-105 ease-in duration-300">  
                    <div className="grid grid-cols-2 gap-4 justify-center items-center">
                        <div className="m-auto">
                            <Image src={'/postgre.png'} width={64} height={64} alt={'postgre'}/>
                        </div>
                        <div className="flex flex-col items-center justify-center">
                           Postgres
                        </div>
                    </div>
                </div>

                <div className="p-6 shadow-xl rounded-xl  hover:scale-105 ease-in duration-300">  
                    <div className="grid grid-cols-2 gap-4 justify-center items-center">
                        <div className="m-auto">
                            <Image src={'/mongo.png'} width={64} height={64} alt={'mongo'}/>
                        </div>
                        <div className="flex flex-col items-center justify-center">
                          Mongo
                        </div>
                    </div>
                </div>

                <div className="p-6 shadow-xl rounded-xl  hover:scale-105 ease-in duration-300">  
                    <div className="grid grid-cols-2 gap-4 justify-center items-center">
                        <div className="m-auto">
                            <Image src={'/mysql.png'} width={64} height={64} alt={'mysql'}/>
                        </div>
                        <div className="flex flex-col items-center justify-center">
                          MySQL
                        </div>
                    </div>
                </div>

                <div className="p-6 shadow-xl rounded-xl  hover:scale-105 ease-in duration-300">  
                    <div className="grid grid-cols-2 gap-4 justify-center items-center">
                        <div className="m-auto">
                            <Image src={'/firebase.png'} width={64} height={64} alt={'firebase'}/>
                        </div>
                        <div className="flex flex-col items-center justify-center">
                          Firebase
                        </div>
                    </div>
                </div>

                <div className="p-6 shadow-xl rounded-xl  hover:scale-105 ease-in duration-300">  
                    <div className="grid grid-cols-2 gap-4 justify-center items-center">
                        <div className="m-auto">
                            <Image src={'/node.png'} width={64} height={64} alt={'node'}/>
                        </div>
                        <div className="flex flex-col items-center justify-center">
                          Node
                        </div>
                    </div>
                </div>

                <div className="p-6 shadow-xl rounded-xl  hover:scale-105 ease-in duration-300">  
                    <div className="grid grid-cols-2 gap-4 justify-center items-center">
                        <div className="m-auto">
                            <Image src={'/git.png'} width={64} height={64} alt={'git'}/>
                        </div>
                        <div className="flex flex-col items-center justify-center">
                          Git
                        </div>
                    </div>
                </div>

                <div className="p-6 shadow-xl rounded-xl  hover:scale-105 ease-in duration-300">  
                    <div className="grid grid-cols-2 gap-4 justify-center items-center">
                        <div className="m-auto">
                            <Image src={'/react.png'} width={64} height={64} alt={'react native'}/>
                        </div>
                        <div className="flex flex-col items-center justify-center">
                          React Native
                        </div>
                    </div>
                </div>

                <div className="p-6 shadow-xl rounded-xl  hover:scale-105 ease-in duration-300">  
                    <div className="grid grid-cols-2 gap-4 justify-center items-center">
                        <div className="m-auto">
                            <Image src={'/aws.png'} width={64} height={64} alt={'AWS'}/>
                        </div>
                        <div className="flex flex-col items-center justify-center">
                          AWS
                        </div>
                    </div>
                </div>

                <div className="p-6 shadow-xl rounded-xl  hover:scale-105 ease-in duration-300">  
                    <div className="grid grid-cols-2 gap-4 justify-center items-center">
                        <div className="m-auto">
                            <Image src={'/wordpress.png'} width={64} height={64} alt={'wordpress'}/>
                        </div>
                        <div className="flex flex-col items-center justify-center">
                          WordPress
                        </div>
                    </div>
                </div>

                <div className="p-6 shadow-xl rounded-xl  hover:scale-105 ease-in duration-300">  
                    <div className="grid grid-cols-2 gap-4 justify-center items-center">
                        <div className="m-auto">
                            <Image src={'/figma.png'} width={64} height={64} alt={'figma'}/>
                        </div>
                        <div className="flex flex-col items-center justify-center">
                          Figma
                        </div>
                    </div>
                </div>

                
            </div>
        </div>
    </div>
  )
}

export default Skills