import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/mainLayout";
import Home from "../pages/Home/Home";
import Donation from "../pages/Donation/Donation";
import Statistics from "../pages/Statistics/Statistics";
import Error from "../pages/Error/Error";
import DonationDetails from "../pages/DonationDetails/DonationDetails";

const myCreatedRoute = createBrowserRouter([
    {
        path : "/",
        element : <MainLayout></MainLayout>,
        errorElement:<Error></Error>,
        children : [
            {
                path : "/",
                element :<Home></Home>,
                loader : ()=> fetch("/data.json")
            },
            {
                path : "/donation",
                element:<Donation></Donation>
            },
            {
                path : "/statistics",
                element :<Statistics></Statistics>
            },
            {
                path : "/donationdetails/:category",
                element: <DonationDetails></DonationDetails>,
                loader : ()=> fetch("/data.json")
            }
        ]
    }
]) 

export default myCreatedRoute;