import { createBrowserRouter } from "react-router-dom";
import Mainlayout from "../Components/Mainlayout/Mainlayout";
import Home from "../Components/Home/Home";
import Login from "../Components/Login/Login";
import Register from "../Components/Register/Register";
import Details from "../Components/Details/Details";
import Private from "../Components/Private";
import Availablefoods from "../Components/Availablefoods/Availablefoods";
import Addfood from "../Components/Addfood/Addfood";

const mycreatedroute =createBrowserRouter([
    {
        path:"/",
        element:<Mainlayout></Mainlayout>,
        children:[
            {
                path:"/",
                element:<Home></Home>
            },
            {
                path:"/login",
                element:<Login></Login>
            },
            {
                path:"/register",
                element:<Register></Register>
            },
            {
                path:"/details/:id",
                loader:({params})=>fetch(`http://localhost:5000/availablefood/${params.id}`),
                element:<Private><Details></Details></Private>
            }
            ,
            {
                path:"/availablefoods",
                loader:()=>fetch("http://localhost:5000/availablefood"),
                element:<Availablefoods></Availablefoods>
            },
            {
                path:"/addfood",
                element:<Private><Addfood></Addfood></Private>
            }
        ]
    }
])
export default mycreatedroute;