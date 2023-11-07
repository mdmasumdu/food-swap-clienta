/* eslint-disable react/prop-types */


const Amanging = ({data,updatehander}) => {
    console.log(data)
    return (
        <tr>
         <th><img className="w-12" src={data.req_img} alt="" /></th>
         <td>{data.req_name}</td>
         <td>{data.req_email}</td>
         <td>{data.requestdate}</td>
         <td className="text-green-300 font-bold">{data.status}</td>
         <td><button className="btn bg-orange-300" onClick={()=>updatehander(data._id,data.foodid)}>MARK AS DELIVERED</button></td>
      </tr>
    );
};

export default Amanging;