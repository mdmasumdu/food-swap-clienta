/* eslint-disable react/prop-types */

import Swal from "sweetalert2";
import useAxios from "../Hooks/useAxios";


const Myfoosreq = ({request,idx,setRequests,requests}) => {
    const{_id,donator_name,pickup_location,expired_date,requestdate,donation_amount,status} =request;

    const axiosSecure =useAxios()



    const deletehandler =(id) =>{

        const sta =status.toLowerCase()
        console.log(sta)
        if(sta==="available" ==false){
            return Swal.fire({
                title: 'error!',
                text: 'Already delivered,So you can not delete',
                icon: 'error',
                confirmButtonText: 'Cool'
              })
        }

    
        axiosSecure.delete(`/requested/${id}`)
        .then(res=>{
            if(res.data.deletedCount){

                const remaining =requests.filter(requesta=>requesta._id !==id)
                setRequests(remaining)
                console.log("remaining",remaining)
                Swal.fire({
                    title: 'succsess!',
                    text: 'succsesfully registerd,please login now',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  })

            }
        })
          

    }
    return (
        <tr>
        <th>{idx+1}</th>
        <td>{donator_name}</td>
        <td>{pickup_location}</td>
        <td>{expired_date}</td>
        <td>{requestdate}</td>
        <td>$ {donation_amount}</td>
        <td>{status}</td>
        <td><button className="btn bg-orange-400 dis"   onClick={()=>deletehandler(_id)}>X</button></td>
      </tr>
    );
};

export default Myfoosreq;