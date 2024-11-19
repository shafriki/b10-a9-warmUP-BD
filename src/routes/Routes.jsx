import { createBrowserRouter, Navigate } from "react-router-dom";
import ErrorPage from "../pages/ErrorPage";
import MainLayout from "../layouts/MainLayout";
import Home from '../pages/Home'
import Donation from "../pages/Donation";
import Help from "../pages/Help";
import Dashboard from "../pages/Dashboard";
import Login from "../pages/Login";
import Register from "../pages/Register";

// Update your routes to include loader for '/donation'
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
        path: '/donation',
        element: <Donation />,
        loader: () => fetch('/Campaigns.json').then(res => res.json()), // Fetch and return data as JSON
      },
      {
        path: '/help',
        element: <Help></Help>,
      },
      {
        path: '/dashboard',
        element: <Dashboard></Dashboard>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
    ]
  }
]);

export default Routes;
