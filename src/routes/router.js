import {createBrowserRouter} from "react-router-dom";
// import Index from "../pages/user";
import AuthLayout from "../pages/auth/authLayout";
import Header from "../componets/.common/header/header";
import Login from "../pages/auth/login";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Header/>,
    },
    {
        path: "/",
        element: <AuthLayout />,
        children: [
            {
                path: "/login",
                element: <Login />,
            }
        ]
    }
])

export default router;