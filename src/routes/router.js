import {createBrowserRouter} from "react-router-dom";
import Index from "../pages/user";
import AuthLayout from "../pages/auth/authLayout";
import Header from "../componets/.common/header/header";
import Login from "../pages/auth/login";
import Register from "../pages/auth/register";
import Layout from "../pages/layout";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout/>,
        children: [
            {
                path: "/home",
                element: <Index/>,
            }
        ]
    },
    {
        path: "/",
        element: <AuthLayout />,
        children: [
            {
                path: "/login",
                element: <Login />,
            },
            {
                path: "/register",
                element: <Register />,
            }
        ]
    }
])

export default router;