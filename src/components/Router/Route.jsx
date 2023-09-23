import { createBrowserRouter } from "react-router-dom";
import Favorites from "../Favorites/Favorites";
import MainLayout from "../Layout/MainLayout";
import Login from "../Login/Login";
import Home from "../Pages/Home/Home";

const myCreatedRouter = createBrowserRouter([
    {
       path: '/',
       element: <MainLayout></MainLayout>,

       children: [

        {
            path: '/',
            element: <Home></Home>,
            loader: ()=> { return fetch('/Phones.json')}
        },
        {
            path: '/favorites',
            element:<Favorites></Favorites>
        },
        {
            path:'/login',
            element:<Login></Login>
        }

       ]
    }
])

export default myCreatedRouter;