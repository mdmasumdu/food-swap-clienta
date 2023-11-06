import { useEffect, useState } from "react";
import useAuth from "../Hooks/useAuth";
import useAxios from "../Hooks/useAxios";
import Myfoosreq from "./Myfoosreq";

const Myfoodreqs = () => {

    const {user} =useAuth();
    const axiosSecure =useAxios();
const [requests,setRequests] =useState([]);
    useEffect(()=>{
        axiosSecure.get(`/myfoodreq/?email=${user?.email}`)
        .then(res=>setRequests(res.data))
        
    },[axiosSecure,user])
    return (
        <div className="min-h-screen">

            {
                requests == "" ? <p className="text-red-700 text-center text-4xl mt-10">You have not made any request</p> : <div className="overflow-x-auto">
                <table className="table">
                  {/* head */}
                  <thead>
                    <tr>
                      <th>Serial</th>
                      <th>Donar Name</th>
                      <th>Pickup Location</th>
                      <th>Expire Date</th>
                      <th>Request Date</th>
                      <th>Donation Amount</th>
                      <th>Status</th>
                      <th>Action</th>
                    </tr>
                  </thead>  
                  <tbody>
                    {/* row  */}
                    {
                     requests.map((request,idx)=><Myfoosreq key={request._id} idx={idx} requests={requests} setRequests={setRequests} request={request}></Myfoosreq>) 
                    }
                   
                  </tbody>
                </table>
              </div>
            }
            
            
        </div>
    );
};

export default Myfoodreqs;