import { useEffect, useState } from "react";
import useAuth from "../Hooks/useAuth";
import useAxios from "../Hooks/useAxios";
import Amangefood from "./Amangefood";
import Swal from "sweetalert2";


const Managemyfood = () => {
    const {user} =useAuth();
    const axiosSecure =useAxios ();
    const [foods,setFoods]=useState([]);
  


   

    useEffect(()=>{
        axiosSecure.get(`/myfood/?email=${user?.email}`,{
          withCredentials:true
        })
        .then(response => {
            setFoods(response.data);
          })
    },[axiosSecure,user])

    
      const deleteavailavle=(id)=>{
        Swal.fire({
            title: "Do you really want to delete this?",
            showDenyButton: true,
            showCancelButton: true,
            confirmButtonText: "Yes",
            denyButtonText: `No`
          }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
                axiosSecure.delete(`/availablefood/${id}`)
                .then(res=>{
                    if(res.data.deletedCount){
                        const remaining = foods.filter(food=>food._id !==id);
                        setFoods(remaining)
                        Swal.fire({
                            title: 'succsess!',
                            text: 'succsesfully registerd,please login now',
                            icon: 'success',
                            confirmButtonText: 'Cool'
                          })
                    }
                })
            } else if (result.isDenied) {
              Swal.fire("You cancelled the request", "", "info");
            }
          });
       

      }
    return (
        <div className="min-h-screen">

        
           {
            foods == "" ? <p className="text-orange-600 text-center text-4xl mt-10">You have not added a food </p>: <table className="table">
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
              foods?.map((food,idx)=><Amangefood key={food._id} food={food} deleteavailavle={deleteavailavle} idx={idx}></Amangefood>)
            }
             
            </tbody>
          </table>
           }
          </div>
        
        
    
);
    
};

export default Managemyfood;