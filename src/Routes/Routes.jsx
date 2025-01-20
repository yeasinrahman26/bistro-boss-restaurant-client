import { createBrowserRouter,  } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import Menu from "../Pages/Menu/Menu";
import Order from "../Pages/Order/Order";
import Login from "../Pages/Login/Login";


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <h1 className="text-4xl bg-red-500 p-20 m-52">Error page try </h1> ,
    children:[
        {
            path: '/',
            element: <Home></Home> ,
        },
        {
            path: 'menu',
            element: <Menu></Menu> ,
        },
        {
            path: 'order/:category',
            element: <Order></Order> ,
        },
        {
            path: 'login',
            element: <Login></Login> ,
        },
    ]
  },
]);
 
export default router