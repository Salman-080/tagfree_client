import { useEffect, useState } from "react";


const Specification = () => {
    const [size, setSize]=useState(0);

    useEffect(()=>{
        setSize(window.innerWidth)
    },[])
    return (
        <div className="flex flex-col-reverse md:flex-row h-full overflow-hidden">
            <div className="relative mt-12 hidden md:flex">
                <div className=" h-[150px] w-[80px] md:h-[400px] md:w-[200px] lg:h-[550px] lg:w-[350px] ">
                    <img className="h-full w-full" src="/banner_3.png" alt="" />
                </div>
                <div className="hidden md:flex">
                    <img className=" md:h-[70px] md:w-[50px] lg:h-[120px] lg:w-[80px] absolute md:left-12 lg:left-24 top-3" src="/circle.png" alt="" />
                    <img className="md:h-[70px] md:w-[50px] lg:h-[120px] lg:w-[80px] absolute md:left-28 lg:left-48 md:top-[35%] lg:top-[36%]" src="/circle.png" alt="" />
                    <img className="md:h-[70px] md:w-[50px] lg:h-[120px] lg:w-[80px] absolute md:left-12 lg:left-24 md:bottom-[54px]  lg:bottom-10" src="/circle.png" alt="" />

                </div>
            </div>

            <div className="mt-4">
                <img className="h-[330px] w-[200px] md:h-[380px] md:w-[220px] lg:h-[560px] lg:w-[320px] md:-ml-16 lg:-ml-0 mx-auto" src="/tools.png" alt="" />
            </div>

            <div className="text-center space-y-12 lg:ml-36 mt-5 md:md-4 lg:mt-4">
                <div className=" space-y-2">
                    <h2 className="text-white text-2xl md:text-xl lg:text-4xl font-semibold">LIVE TRACKING </h2>
                    <p className="text-gray-400 text-base md:text-sm lg:text-lg ">
                        Provides  the exact location  <p className="text-white">{size}</p>
                        <br /> of their tagged items or devices instantly
                        <br />   through the mobile app.
                        
                    </p>
                </div>
                <div className=" space-y-2">
                    <h2 className="text-white text-2xl md:text-xl  lg:text-4xl font-semibold">LONG BATTERY LIFE</h2>
                    <p className="text-gray-400 text-base md:text-sm  lg:text-lg">
                        
                        Enjoy continuous <br />
                        tracking and peace of mind with our <br />
                        long-lasting battery.
                    </p>
                </div>
                <div className=" space-y-2">
                    <h2 className="text-white text-2xl md:text-xl lg:text-4xl font-semibold">  IOS & ANDROID</h2>
                    <p className="text-gray-400 text-base md:text-sm lg:text-lg">
                      
                        Whether you prefer <br />
                        iPhone or Android smartphones, <br />
                        our device ensures seamless connectivity <br />
                        and reliable performance.
                    </p>
                </div>
              
                


            </div>
        </div>
    );
};

export default Specification;