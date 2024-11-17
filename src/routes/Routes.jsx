import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../pages/ErrorPage";
import MainLayout from "../layouts/MainLayout";
import Home from '../pages/Home'
import Donation from "../pages/Donation";
import Help from "../pages/Help";
import Dashboard from "../pages/Dashboard";

const Routes = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path:'/',
                element: <Home></Home>,
            },
            {
                path:'/donation',
                element: <Donation></Donation>,
            },
            {
                path:'/help',
                element: <Help></Help>,
            },
            {
                path:'/dashboard',
                element: <Dashboard></Dashboard>
            },
        ]
    }

])

export default Routes;