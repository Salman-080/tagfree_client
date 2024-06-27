import { Outlet } from "react-router-dom";
import Navbar from "../FixedComponents/Navbar/Navbar";


const Root = () => {
    
    return (

        
        <div className="bg-black h-screen flex flex-col">
            <Navbar></Navbar>
            {/* <p className="text-white">{size}</p> */}

            <div className="bg-black flex-1">
                <Outlet></Outlet>
            </div>
            {/* <div className="bg-black min-h-[calc(100vh-126.400px)] h-[calc(100vh-126.400px)] lg:min-h-[calc(100vh-134.4px)]  w-full">
                <Outlet></Outlet>
            </div> */}


        </div>





    );
};

export default Root;