import { Outlet } from "react-router-dom";
import Navbar from "../components/Header/Navbar/Navbar";


const mainLayout = () => {
  
      
    return (
        <div className=" max-w-screen-sm md:max-w-screen-md lg:max-w-screen-xl mx-auto">
            <Navbar></Navbar>
        <Outlet></Outlet>
        </div>
    );
};

export default mainLayout;