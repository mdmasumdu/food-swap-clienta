import { Link } from "react-router-dom";
import useAuth from "../Hooks/useAuth";




const Login = () => {

   
const { logingoogle} =useAuth();

console.log(logingoogle)
   
    const googleloginhandle =()=>{
        logingoogle()
        .then(res=>console.log(res))
        .catch(err=>console.error(err))

    }
    return (
        <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Login now!</h1>
      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
      </form>

      <div className="w-10 ml-5" onClick={googleloginhandle}>
        <img src={"https://imagizer.imageshack.com/img922/453/4Hxr5L.png"} alt="" />
      </div>

      <div className="p-5">
            Have an Account? <Link className="text-blue-400" to="/register">Register</Link>
          </div>
    </div>
  </div>
</div>
    );
};

export default Login;