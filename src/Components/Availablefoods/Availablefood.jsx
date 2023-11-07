/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";


const Availablefood = ({food}) => {
    const {_id,food_image,food_name,donator_image,donator_name,food_quantity,pickup_location,expired_date,expired_time,additional_notes} =food
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
        <figure className="px-10 pt-10 h-64">
          <img  src={food_image} alt="foods" className="rounded-xl" />
        </figure>
        <div className="flex items-center justify-around">
        <div className=" flex flex-col items-center">
          <div className="avatar rounded-full">
          <div className="w-16">
            <img src={donator_image} />
          </div> 
       </div>
           <h1> {donator_name}</h1>
          </div>
          <h2 className="text-xl font-bold text-orange-600">{food_name}</h2>
        </div>
        <div className="card-body items-center text-center">
         
          <p> <span className="font-bold">Quantity:</span> {food_quantity}</p>
          <p><span className="font-bold">Location:</span> {pickup_location}</p>
          <p><span className="font-bold">Expire Date:</span> {expired_date}</p>
          <p><span className="font-bold">Expire Time:</span>  {expired_time}</p>
          <p> {additional_notes}</p>
        
          <div className="card-actions">
            <Link to={`/details/${_id}`}><button className="btn bg-orange-300">Show Details</button></Link>
          </div>
        </div>
      </div>
    );
};

export default Availablefood;