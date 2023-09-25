import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/mainLayout";
import Home from "../pages/Home/Home";
import Donation from "../pages/Donation/Donation";
import Statistics from "../pages/Statistics/Statistics";

const myCreatedRoute = createBrowserRouter([
    {
        path : "/",
        element : <MainLayout></MainLayout>,
        children : [
            {
                path : "/",
                element :<Home></Home>
            },
            {
                path : "/donation",
                element:<Donation></Donation>
            },
            {
                path : "/statistics",
                element :<Statistics></Statistics>
            }
        ]
    }
]) 

export default myCreatedRoute;