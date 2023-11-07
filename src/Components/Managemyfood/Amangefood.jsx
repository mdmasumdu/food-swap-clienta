/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";


const Amangefood = ({food,idx,deleteavailavle}) => {
    console.log("dast",food)
    return (
        <tr>
        <th>{idx+1}</th>
        <th><img className="w-12" src={food.food_image} alt="" /></th>
        <th>{food.food_name}</th>
        <th><Link to={`/editfood/${food._id}`}><button className="btn bg-orange-300">Edit</button></Link></th>
        <th><button className="btn bg-orange-300" onClick={()=>deleteavailavle(food._id)}>Delete</button></th>
        <th><Link to={`/managing/${food._id}`}><button className="btn bg-orange-300">Manage</button></Link></th>
      </tr>
    );
};

export default Amangefood;