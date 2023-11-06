// food_image,food_name,donator_image,donator_name,food_quantity,pickup_location,expired_date,expired_time,additional_notes

import Swal from "sweetalert2";
import useAuth from "../Hooks/useAuth";
import useAxios from "../Hooks/useAxios";

const Addfood = () => {

    const {user} =useAuth();
    const axiosSecure =useAxios()
  console.log(user.photoURL)
    const addfoodhandler=(e)=>{
        e.preventDefault()

        const form =e.target;
        const food_name =form.name.value;
        const food_image =form.photoURL.value;
        const donator_image =user.photoURL;
        const food_quantity =form.quantity.value;
       const  pickup_location = form.location.value;
       const expired_date =form.expired.value;
       const expired_time =form.time.value;
       const additional_notes=form.additional.value;
       const donator_name = user.displayName;
       const donator_email =user.email;
           const thefood ={food_name,food_image,donator_image,food_quantity,pickup_location,expired_date,expired_time,additional_notes,donator_name,donator_email,status:"available"}
        

           axiosSecure.post("/availablefood",thefood)
           .then(res=>{
            if(res.data.insertedId){
                Swal.fire({
                    title: 'succsess!',
                    text: 'succsesfully added a product',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  })
            }
           })
    }
    return (
        <div>
          
        <div className="">
          <form onSubmit={addfoodhandler}>

            {/* form row */}
            <div className="flex justify-center gap-3 w-full">
            <div className="form-control md:w-1/3">
              <label className="label">
                <span className="label-text">Food Name</span>
              </label>
              <input type="text" placeholder="name" name="name" className="input input-bordered" required />
            </div>
            <div className="form-control md:w-1/3">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input type="email" placeholder="email" name="email" defaultValue={user?.email} className="input input-bordered" required />
            </div>

            </div>

             {/* form row */}
            <div  className="flex justify-center w-full gap-3">
            <div className="form-control w-1/3">
              <label className="label">
                <span className="label-text">Food Quantity</span>
              </label>
              <input type="text" placeholder="Quantity" name="quantity" className="input input-bordered" required />
             
            </div>
            <div className="form-control w-1/3">
              <label className="label">
                <span className="label-text">Food PhotoURL</span>
              </label>
              <input type="text" placeholder="PhotoURl" name="photoURL" className="input input-bordered" required />
              
            </div>
            </div>

              {/* form row */}

          <div className="flex  justify-center w-full gap-3">
          <div className="form-control md:w-1/3">
              <label className="label">
                <span className="label-text">pickup location</span>
              </label>
              <input type="text" placeholder="pickup_location" name="location" className="input input-bordered" required />
              
            </div>
            <div className="form-control md:w-1/3">
              <label className="label">
                <span className="label-text">expired_date</span>
              </label>
              <input type="date" placeholder="expired_date" name="expired" className="input input-bordered" required />
              
            </div>
          </div>
                 {/* form row */}

               <div className="flex  justify-center gap-3">
               <div className="form-control md:w-1/3">
              <label className="label">
                <span className="label-text">expired_time</span>
              </label>
              <input type="time" placeholder="expired_time" name="time" className="input input-bordered" required />
              
            </div>
            <div className="form-control md:w-1/3">
              <label className="label">
                <span className="label-text">additional_notes</span>
              </label>
              <input type="text" placeholder="additional_notes" name="additional" className="input input-bordered" required />
              
            </div>
               </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary w-96 mx-auto">Addfood</button>
            </div>
          </form>


       
        </div>
      </div>

    );
};

export default Addfood;