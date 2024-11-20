import { createBrowserRouter, Navigate } from "react-router-dom";
import ErrorPage from "../pages/ErrorPage";
import MainLayout from "../layouts/MainLayout";
import Home from '../pages/Home';
import Donation from "../pages/Donation";
import Help from "../pages/Help";
import Dashboard from "../pages/Dashboard";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Details from "../pages/Details";
import PrivateRoute from "./PrivateRoute";
import Update from "../pages/Update";
import ForgetPass from "../pages/ForgetPass";

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
        element: <Home></Home>,
      },
      {
        path: '/donation',
        element: <Donation></Donation>,
        loader: () => fetch('/Campaigns.json').then(res => res.json()),
      },
      {
        path: '/help',
        element: (
          <PrivateRoute>
            <Help></Help>
          </PrivateRoute>
        ),
      },
      {
        path: '/dashboard',
        element: (
          <PrivateRoute>
            <Dashboard></Dashboard>
          </PrivateRoute>
        ),
      },
      {
        path: '/login',
        element: <Login></Login>,
      },
      {
        path: '/register',
        element: <Register></Register>,
      },
      {
        path: '/details/:id',
        element: (
          <PrivateRoute>
            <Details></Details>
          </PrivateRoute>
        ),
        loader: () => fetch('/Campaigns.json'),
      },
      {
        path: '/update',
        element: <Update></Update>,
      },
      {
        path: '/forget',
        element: <ForgetPass></ForgetPass>
      },
    ],
  },
]);

export default Routes;
