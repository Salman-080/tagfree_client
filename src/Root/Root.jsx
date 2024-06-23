import { Outlet } from "react-router-dom";
import Navbar from "../FixedComponents/Navbar/Navbar";

const Root = () => {
    return (
        <div className="bg-black ">
            <Navbar></Navbar>

            {/* <div className="min-h-screen md:min-h-[150vh] lg:min-h-[85vh]">
                <Outlet></Outlet>
            </div> */}
          
                <Outlet></Outlet>
         

        </div>
    );
};

export default Root;