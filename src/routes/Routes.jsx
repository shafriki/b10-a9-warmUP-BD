import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../pages/ErrorPage";

const Routes = createBrowserRouter([
    {
        path: '/',
        element: <div>hello world</div>,
        errorElement: <ErrorPage></ErrorPage>,
    }

])

export default Routes;