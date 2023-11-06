/* eslint-disable react/prop-types */


const Amangefood = ({food,idx}) => {
    console.log("dast",food)
    return (
        <tr>
        <th>{idx+1}</th>
        <th><img className="w-12" src={food.food_image} alt="" /></th>
        <th>{food.food_name}</th>
        <th><button className="btn bg-orange-400">Edit</button></th>
        <th><button className="btn bg-orange-400">Delete</button></th>
        <th><button className="btn bg-orange-400">Manage</button></th>
      </tr>
    );
};

export default Amangefood;