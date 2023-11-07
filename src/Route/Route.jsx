import { createBrowserRouter } from "react-router-dom";
import Mainlayout from "../Components/Mainlayout/Mainlayout";
import Home from "../Components/Home/Home";
import Login from "../Components/Login/Login";
import Register from "../Components/Register/Register";
import Details from "../Components/Details/Details";
import Private from "../Components/Private";
import Availablefoods from "../Components/Availablefoods/Availablefoods";
import Addfood from "../Components/Addfood/Addfood";
import Managemyfood from "../Components/Managemyfood/Managemyfood";
import Myfoodreqs from "../Components/Myfoodreqs/Myfoodreqs";
import Editfood from "../Components/Managemyfood/Editfood";
import Managing from "../Components/Managemyfood/Managing";
import Error from "../Components/Error";


const mycreatedroute =createBrowserRouter([
    {
        path:"/",
        element:<Mainlayout></Mainlayout>,
        errorElement:<Error></Error>,
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
            },
            {
                path:"/managemyfood",
                element:<Private><Managemyfood></Managemyfood></Private>
            },
            {
                path:"/myfoodreqs",
                element:<Private><Myfoodreqs></Myfoodreqs></Private>
            },
        
            {
                path:"/editfood/:id",
                loader:({params})=>fetch(`http://localhost:5000/availablefood/${params.id}`),
                element:<Private><Editfood></Editfood></Private>
            },
            {
                path:"/managing/:id",
                loader:({params})=>fetch(`http://localhost:5000/requested/${params.id}`),
                element:<Private><Managing></Managing></Private>
            }
        
        ]
    }
])
export default mycreatedroute;