import useAxios from "../../Hooks/useAxios";

import { useEffect, useState } from "react";
import Contributor from "./Contributor";


const Contributors = () => {

    const axiosSecure =useAxios();
    const [contributors,setContributos] =useState([]);

    useEffect(()=>{
        axiosSecure.get('contributors')
        .then(res=>setContributos(res.data))

    },[axiosSecure])
    return (
        <div>
            <h1 className="text-center font-bold text-4xl mt-10 mb-5">Our Top Contribtor</h1>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 p-5">
                {
                    contributors.map(contributor=><Contributor key={contributor._id} contributor={contributor}></Contributor>)
                }
              </div>
            
        </div>
    );
};

export default Contributors;