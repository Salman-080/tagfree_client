import { Outlet } from "react-router-dom";
import Navbar from "../FixedComponents/Navbar/Navbar";

const Root = () => {
    return (
        <div className="bg-black ">
            <Navbar></Navbar>

            <div>
                <Outlet></Outlet>
            </div>

        </div>
    );
};

export default Root;