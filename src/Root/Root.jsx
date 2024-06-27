import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../FixedComponents/Navbar/Navbar";
import { useEffect, useState } from "react";

const Root = () => {
    const location = useLocation();
  


    console.log(location);
    return (

        
        <div className="bg-black h-screen  ">
            <Navbar></Navbar>
            {/* <p className="text-white">{size}</p> */}

            <div className="bg-black">
                <Outlet></Outlet>
            </div>


        </div>





    );
};

export default Root;