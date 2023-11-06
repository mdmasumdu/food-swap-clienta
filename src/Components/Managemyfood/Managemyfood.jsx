import { useEffect, useState } from "react";
import useAuth from "../Hooks/useAuth";
import useAxios from "../Hooks/useAxios";
import Amangefood from "./Amangefood";


const Managemyfood = () => {
    const {user} =useAuth();
    const axiosSecure =useAxios ();
    const [foods,setFoods]=useState([]);
  


   

    useEffect(()=>{
        axiosSecure.get(`/myfood/?email=${user?.email}`)
        .then(response => {
            setFoods(response.data);
          })
    },[axiosSecure,user])

    

    return (
        <div className="min-h-screen">

        
            <table className="table">
              {/* head */}
              <thead>
                <tr>
                  <th>Serial</th>
                  <th>img</th>
                  <th>Food Name</th>
                  <th>Edit</th>
                  <th>Delete</th>
                  <th>Manage</th>
                </tr>
              </thead>  
              <tbody>
              {
                foods?.map((food,idx)=><Amangefood key={food._id} food={food} idx={idx}></Amangefood>)
              }
               
              </tbody>
            </table>
          </div>
        
        
    
);
    
};

export default Managemyfood;