import { Outlet } from "react-router-dom";
import Navbar from "../components/Header/Navbar/Navbar";


const mainLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
        <Outlet></Outlet>
        </div>
    );
};

export default mainLayout;