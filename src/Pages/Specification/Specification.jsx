


const Specification = () => {
    
    return (
        <div className="flex ">
            <div className="relative mt-12 hidden md:flex  md:gap-28 lg:gap-8 ">
                <div className=" h-[150px] w-[80px] md:h-[300px] md:w-[100px] lg:h-[300px] lg:[240px] ">
                    <img className="h-full w-full" src="/banner_39.png" alt="" />
                </div>
                <div className="hidden md:flex">
                    <img className=" md:h-[70px] md:w-[50px] lg:h-[80px] lg:w-[50px] absolute md:left-12 lg:left-14 top-3 md:-top-3 lg:-top-[17px]" src="/circle.png" alt="" />
                    <img className="md:h-[70px] md:w-[50px] lg:h-[80px] lg:w-[50px] absolute md:left-[100px] lg:left-28 md:top-[31%] lg:top-[33%]" src="/circle.png" alt="" />
                    <img className="md:h-[70px] md:w-[50px] lg:h-[80px] lg:w-[50px] absolute md:left-12 lg:left-14 md:bottom-[18px]  lg:bottom-[40px]" src="/circle.png" alt="" />

                </div>
            </div>

            <div className="flex flex-col-reverse md:flex-row bg-black lg:ml-32">
                <div className="mt-4 ">
                    <img className="h-[330px] w-[200px] md:h-[380px] md:w-[240px] lg:h-[400px] lg:w-[200px]  " src="/tools.png" alt="" />
                </div>

                <div className="text-center space-y-6 lg:ml-36  mt-8 md:mt-4 lg:mt-4  ">
                    <div className=" space-y-2 ">
                        <h2 className="text-white text-2xl md:text-xl lg:text-3xl font-semibold">LIVE TRACKING </h2>
                        <p className="text-gray-400 text-base md:text-sm lg:text-base  ">
                            Provides  the exact location
                            <br /> of their tagged items or devices instantly
                            <br />   through the mobile app.

                        </p>
                    </div>
                    <div className=" space-y-2 ">
                        <h2 className="text-white text-2xl md:text-xl  lg:text-3xl font-semibold">LONG BATTERY LIFE</h2>
                        <p className="text-gray-400 text-base md:text-sm  lg:text-base ">

                            Enjoy continuous <br />
                            tracking and peace of mind with our <br />
                            long-lasting battery.
                        </p>
                    </div>
                    <div className=" space-y-2 ">
                        <h2 className="text-white text-2xl md:text-xl lg:text-3xl font-semibold">  IOS & ANDROID</h2>
                        <p className="text-gray-400 text-base md:text-sm lg:text-base ">

                            Whether you prefer <br />
                            iPhone or Android smartphones, <br />
                            our device ensures seamless connectivity <br />
                            and reliable performance.
                        </p>
                    </div>




                </div>
            </div>


        </div>
    );
};

export default Specification;