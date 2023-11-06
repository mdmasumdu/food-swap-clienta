import { useLoaderData } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import { useEffect, useState } from "react";
import useAxios from "../Hooks/useAxios";
import Swal from "sweetalert2";


const Details = () => {

    const axiosSecure =useAxios()
    const {user} =useAuth();
    const food =useLoaderData();
    const {donator_email,_id,food_image,food_name,donator_image,donator_name,food_quantity,pickup_location,expired_date,expired_time,additional_notes} =food
    
    const [currentDate, setCurrentDate] = useState(new Date());





 
    useEffect(() => {
        const intervalId = setInterval(() => {
          setCurrentDate(new Date());
        }, 1000);
    
        return () => {
          clearInterval(intervalId);
        };
      }, []);


      const requesthandler=(e)=>{
        e.preventDefault()
        const donation_amount = e.target.donation.value;
        const  reqfood ={
            donator_name,
            donation_amount,
            expired_date,
            requestdate:currentDate.toString(),
            pickup_location,
            email:user.email,
            status:"Available",
            foodid:_id
        }
    axiosSecure.post('/requested',reqfood)
    .then(res=>{
      console.log(res.data.insertedId)
      if(res.data.insertedId){
    
        Swal.fire({
          title: 'succsess!',
          text: 'succsesfully posted a food request',
          icon: 'success',
          confirmButtonText: 'Cool'
        })
      }
    })
        
       console.log(reqfood)
      }
 
    // console.log(food)
    return (
        <div className="flex p-5 shadow-xl">
  <div className="flex-1">
  <figure><img className="" src={food_image} alt="Album"/></figure>
  </div>
  <div className="card-body">
  <div className=" flex flex-col items-center bg-slate-200 w-72 mx-auto rounded-lg">
    <h1 className="text-3xl font-bold">Donator</h1>
    <div className="avatar rounded-full">
    <div className="w-24">
      <img src={donator_image} />
    </div> 
 </div>
     <h1> {donator_name}</h1>
    </div>
    <h2 className="card-title text-3xl text-orange-500">{food_name}</h2>
    <p><span className="font-bold">Available Qunatity:</span> {food_quantity}</p>
    <p><span className="font-bold">Pickup Location:</span> {pickup_location}</p>
    <p><span className="font-bold">Expire Date:</span> {expired_date}</p>
    <p> <span className="font-bold">Expire time:</span> {expired_time}</p>
    <p> <span className="font-bold">Details:</span> {additional_notes}</p>
    <div className="card-actions justify-end">
    {
      food.status === 'available' ? <><button className="btn bg-orange-400" onClick={()=>document.getElementById('my_modal_1').showModal()}>Request</button>
      <dialog id="my_modal_1" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg">{food_name}</h3>
          <img className="w-24" src={food_image} alt="" />
          <h1><span className="font-bold">id:</span> {_id}</h1>
          <p><span className="font-bold">Donator Email:</span> {donator_email}</p>
          <p><span className="font-bold">Donator Name:</span> {donator_name}</p>
          <p><span className="font-bold">Your email:</span> {user?.email}</p>
          <p><span className="font-bold">Current Date:</span> {currentDate.toString()}</p>
          <p><span className="font-bold">Pickup location:</span> {pickup_location}</p>
          <p><span className="font-bold">Expire date:</span> {expired_date}</p>
          {/* <p className="py-4">Press ESC key or click the button below to close</p> */}
          <div>
            <form onSubmit={requesthandler} method="dialog">
      
              {/* if there is a button in form, it will close the modal */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Addtional Notes</span>
                </label>
                <input type="text" placeholder="addtional notes" name="notes" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Donation Money</span>
                </label>
                <input type="text" placeholder="donation money $" name="donation" className="input input-bordered" required />
              </div>
              <button onClick={()=>document.getElementById('my_modal_1').close()} className="btn mt-5">Request</button>
            </form>
          </div>
        </div>
      </dialog></> : <button className="text-orange-700 text-3xl">Already Delivered</button>
    }
           
    </div>
  </div>
</div>
    );
};

export default Details;