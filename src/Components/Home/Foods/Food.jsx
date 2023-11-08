/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";
import { motion } from "framer-motion"
import { useState } from "react";

const hiddenMask = `repeating-linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 30px, rgba(0,0,0,1) 30px, rgba(0,0,0,1) 30px)`;
const visibleMask = `repeating-linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 0px, rgba(0,0,0,1) 0px, rgba(0,0,0,1) 30px)`;

const Food = ({food}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);



    const {_id,food_image,food_name,donator_image,donator_name,food_quantity,pickup_location,expired_date,expired_time,additional_notes} =food
    return (
        <motion.div initial={false} 
        animate={
          isLoaded && isInView
            ? { WebkitMaskImage: visibleMask, maskImage: visibleMask }
            : { WebkitMaskImage: hiddenMask, maskImage: hiddenMask }
        }
        transition={{ duration: 1, delay: 1 }}
        viewport={{ once: true }}
        onViewportEnter={() => setIsInView(true)}
        onLoad={() => setIsLoaded(true)}
    
       className="card w-96 bg-base-100 shadow-xl">
  <figure className="px-10 pt-10 h-64">
    <img  src={food_image} alt="foods" className="rounded-xl" />
  </figure>
  <div className="flex items-center justify-around">
  <div className=" flex flex-col items-center">
    <div className="avatar mt-3 ">
    <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
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
</motion.div>
    );
};

export default Food;