import { Link ,useLocation,useNavigate} from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import Swal from 'sweetalert2'




const Login = () => {

   const location =useLocation();
   const navigate =useNavigate()
   console.log(location)
const { logingoogle,loginempass} =useAuth();

const loginwithemailpass =(e)=>{
  e.preventDefault()

  const email =e.target.email.value;
  const password =e.target.password.value;
  loginempass(email,password)
  .then(res=>{
    if(res.user){
      Swal.fire({
        title: 'succsess!',
        text: 'succsesfully registerd,please login now',
        icon: 'success',
        confirmButtonText: 'Cool'

      })
      location?.state ? navigate(`${location?.state}`) : navigate('/');
    }
  })
  .catch(err=>{
    Swal.fire({
      title: 'Error!',
      text: `${err.message}`,
      icon: 'error',
      confirmButtonText: 'quit'
    })
  })

}
   
    const googleloginhandle =()=>{
        logingoogle()
        .then(res=>{
          console.log(res.user)
          location?.state ? navigate(`${location?.state}`) : navigate('/');
        })
        .catch(err=>console.error(err))

    }
    return (
        <div className=" min-h-screen ">
  <div className="flex">
    <div className=" flex-1 flex flex-col items-center text-center lg:text-left">
     
     <img src={"https://i.ibb.co/Pg3Wyqc/2853458-removebg-preview.png"} alt="" />
    </div>
    <div className="flex-1 p-5">
    <h1 className="text-5xl font-bold text-center">Login now!</h1>
      <form onSubmit={loginwithemailpass} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" name="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" name="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn bg-orange-300">Login</button>
        </div>
      </form>

      <div className="w-10 ml-5" onClick={googleloginhandle}>
        <img src={"https://imagizer.imageshack.com/img922/453/4Hxr5L.png"} alt="" />
      </div>

      <div className="p-5 text-center">
            New here? Please <Link className="text-blue-300" to="/register">Register</Link>
          </div>
    </div>
  </div>
</div>
    );
};

export default Login;