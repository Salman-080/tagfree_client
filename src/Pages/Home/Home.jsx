
const Home = () => {
    return (
        <div className=" overflow-hidden " >

            <div className="md:flex md:justify-around md:gap-14 lg:gap-0">
                <div className="text-white md:ml-28 lg:ml-20 mt-14  lg:w-auto md:w-[300px]" >
                    <h2 className="md:text-3xl lg:text-4xl mt-7">Smart Taggr</h2>
                    <div className="md:text-3xl lg:text-7xl md:mt-10 lg:mt-16 flex flex-col md:gap-1 lg:gap-5">
                        <p>Connect. Track.</p>

                        <p>Thrive.</p>
                    </div>

                </div>

                <div className="md:h-[500px] md:w-[500px] lg:h-[650px] lg:w-[650px] ">
                    <img className="h-auto w-auto  " src="/banner_img_1.png" alt="" />
                </div>

                <div>

                </div>
            </div>




            <div className="h-[400px] w-[400px] md:mx-auto md:-mt-80 lg:-mt-96 lg:ml-6 relative lg:mx-0">
                <div className="relative">
                    <img className="-mt-12 md:-mt-24 lg:-mt-32 h-full w-full" src="/banner_btn.png" alt="" />
                    <div className="absolute inset-0 flex items-center justify-center">
                        <button className="text-white text-3xl md:text-xl lg:text-lg px-8 py-[10px] rounded-lg relative z-10">
                            Buy Now
                        </button>
                    </div>
                </div>
                <div className="absolute top-[46%] left-full -ml-24 flex items-center justify-center">
                    <hr className="border text-red-600 w-10 mt-[5px]" />
                    <p className="w-10 text-white ">|</p>
                </div>
                <div className="text-white absolute top-[46%] left-full w-[130px] -ml-5">
                    <p className="w-fit">Starting at ₹Xxx.xx</p>
                </div>
            </div>


            <div className="h-auto w-[350px]">
                <img className="h-auto w-auto" src="/banner_img_2.png" alt="" />
            </div>

        </div>
    );
};

export default Home;