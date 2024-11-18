import { createBrowserRouter, Navigate } from "react-router-dom";
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
                index: true,  
                element: <Navigate to="/home" replace />,
            },
            {
                path: '/home',
                element: <Home></Home>
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