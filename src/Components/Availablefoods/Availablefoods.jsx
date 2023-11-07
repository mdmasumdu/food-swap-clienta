import { useLoaderData } from "react-router-dom";
import Availablefood from "./Availablefood";
import { useRef, useState } from "react";


const Availablefoods = () => {

    const foods =useLoaderData();
    const myref =useRef()

    const [showfood,setShowfood] =useState(foods)
    
const convertdate =(first, last) =>{
    const datefirst = new Date(last.expired_date);
    const datelast = new Date(first.expired_date);
  
    return datelast - datefirst;
  }
  

  foods.sort(convertdate);


const seachhandler =(e)=>{
    e.preventDefault()
    const value =myref.current.value.toLowerCase()
const data =foods.filter(food=>food.food_name.toLowerCase().includes(value))
setShowfood(data)

}

  
  
  

    return (
        <div>
            <h1 className="text-center font-bold text-4xl mt-10 mb-5">Available Foods</h1>

          <div className="flex justify-center">
          <form onSubmit={seachhandler} action="">
                <input type="text" ref={myref} placeholder="search by food name" className="p-3 rounded"/>
                <input type="submit"   value="serach" className="p-3 bg-orange-600 rounded"/>
            </form>
          </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 p-5">
            {
                showfood.map(food=><Availablefood key={food._id} food={food}></Availablefood>)
            }
        </div>
        </div>
    );
};

export default Availablefoods;