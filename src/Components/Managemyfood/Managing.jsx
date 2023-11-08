import { useLoaderData } from "react-router-dom";
import Amanging from "./Amanging";
import { useState } from "react";
import useAxios from "../Hooks/useAxios";


const Managing = () => {

    const datas= useLoaderData()
      const [fodda,setfodda] =useState(datas)
      const axiosSecure=useAxios()


    const updatehander =(id,foodid)=>{
        console.log(id,foodid)

        axiosSecure.patch(`/requested/${id}`)
        .then(res=>{
            if(res.data.modifiedCount){
                const remaining = fodda.filter(fodd=>fodd._id !==id);
                const updated =fodda.find(fodd=>fodd._id === id)
                updated.status ="Delivered";
                const newdata =[updated,...remaining]
                setfodda(newdata)
                axiosSecure.patch(`/availablefood/${foodid}`)
                .then(res=>console.log("ischanged from available",res.data))
            }
        })

    }
    return (
        <div className="min-h-screen">
              {
                fodda == "" ? <p className="text-center text-4xl mt-10 font-bold">no one  requested for this food yet</p> :  <table className="table">
                {/* head */}
                <thead>
                  <tr>
                    <th>Requester img</th>
                    <th>Requester Name</th>
                    <th>Requester Email</th>
                    <th>Request Date and Request time</th>
                    <th>status</th>
                    <th>Mark As delivered</th>
                  
                  
                  </tr>
                </thead>  
                <tbody>
                  {/* row  */}
                  
              {
                  fodda.map(data=><Amanging key={data._id} data={data} updatehander={updatehander}></Amanging>)
              }
                 
                </tbody>
              </table>
              }
            
        </div>
    );
};

export default Managing;