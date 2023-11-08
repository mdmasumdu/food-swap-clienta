import { useState } from "react";
import { motion } from "framer-motion"

/* eslint-disable react/prop-types */
const hiddenMask = `repeating-linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 30px, rgba(0,0,0,1) 30px, rgba(0,0,0,1) 30px)`;
const visibleMask = `repeating-linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 0px, rgba(0,0,0,1) 0px, rgba(0,0,0,1) 30px)`;

const Contributor = ({contributor}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
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
        onLoad={() => setIsLoaded(true)} className="card bg-slate-400 rounded-2xl shadow-xl">
        <figure>
        <div className="avatar">
  <div className="w-28 mask mask-squircle">
    <img src={contributor.img} />
  </div>
</div>
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{contributor.name}</h2>
          <p className=""><span className="font-bold"> Food-Contribution: </span>{contributor.food_contributions}</p>
             <p><span className="font-bold">Phone: </span> {contributor.phone}</p>
        </div>
      </motion.div>
    );
};

export default Contributor;