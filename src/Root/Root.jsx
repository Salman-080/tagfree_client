import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../FixedComponents/Navbar/Navbar";
import { useState } from "react";

const Root = () => {
    const location = useLocation();

    console.log(location);
    return (


        <div className="bg-black h-screen flex flex-col">
            <Navbar></Navbar>

            <div className="bg-black flex-1">
                <Outlet></Outlet>
            </div>


        </div>





    );
};

export default Root;