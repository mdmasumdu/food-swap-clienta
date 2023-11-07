
import { useEffect, useState } from "react";
import Food from "./Food";
import useAxios from "../../Hooks/useAxios";
import { Link } from "react-router-dom";


const Foods = () => {

    const axiosSecure =useAxios()

    const [foods,setFoods] =useState([]);
    useEffect(()=>{
        axiosSecure.get("/availablefood")
        .then(res=>setFoods(res.data))
    },[axiosSecure])

    const available =foods.filter(food=>food.status ==="available");
    const sorteddata = available.sort((a,b)=>b.food_quantity -a.food_quantity);
   

    
    return (
       <div>
        <h1 className="text-center font-bold text-4xl mt-10 mb-5">Featured Foods</h1>
         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {
                sorteddata.slice(0,6).map(food=><Food key={food._id} food={food}></Food>)
            }
            
        </div>
        <div className="flex justify-center">
        <Link to="/availablefoods"><button className="btn bg-orange-600 w-64 m-10">Show ALL</button></Link>
        </div>
       </div>
    );
};

export default Foods;