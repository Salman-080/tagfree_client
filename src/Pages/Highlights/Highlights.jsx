
const Highlights = () => {
    return (
        <div className="bg-black" >

            <div className="md:flex md:justify-around ">
                <div className="text-white md:ml-20 lg:ml-20   lg:w-auto md:w-[300px]" >

                    <h2 className=" text-3xl md:text-xl lg:text-4xl mt-20 md:mt-10 lg:mt-7 text-center md:text-left">Smart Taggr</h2>
                    <div className="text-4xl md:text-3xl lg:text-7xl mt-4 md:mt-5 lg:mt-16 flex flex-col md:gap-1 lg:gap-5 text-center md:text-left">
                        <p>Connect. Track.</p>

                        <p>Thrive.</p>
                    </div>



                    <div className="flex items-center mt-6 md:mt-9 lg:mt-16 justify-center md:justify-normal">


                        <div style={{ backgroundImage: "url(/banner_btn.png)" }} className="bg-no-repeat bg-center h-[50px] w-[110px] md:h-[30px] md:w-[80px] lg:h-[46px] lg:w-[170px] text-center rounded-full z-50 " >
                            <button className="h-full w-full md:text-xs lg:text-xl">Buy Now</button>
                        </div>

                        <div className="flex items-center justify-center ml-[18px] ">
                            <hr className="border text-red-600 w-10" />
                            <p className="w-10 text-white mb-[3px]">|</p>
                        </div>
                        <div className="text-white -ml-[20px]">
                            <p className="md:text-sm lg:text-lg">Starting at ₹Xxx.xx</p>
                        </div>
                    </div>



                </div>

                <div className="hidden md:flex w-[70px] h-[70px] md:h-[200px] md:w-[200px] lg:h-[400px] lg:w-[400px] md:mt-8 lg:mt-9 md:mr-16 lg:mr-0">
                    <img className="h-full w-full  " src="/banner_img_1.png" alt="" />
                </div>

                <div>

                </div>
            </div>

            <img className="text-black h-[70px] w-[80px] md:h-[70px] md:w-[80px] lg:h-[140px] lg:w-[160px] absolute bottom-0 " src="/banner_img_2.png" alt="" />


        </div>
    );
};

export default Highlights;