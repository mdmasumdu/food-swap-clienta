import { Link, NavLink } from "react-router-dom";
import useAuth from "../Hooks/useAuth";



const Nav = () => {
  const {user,logout} =useAuth();
    const links =<>
    <NavLink  className={({ isActive}) => isActive ? "text-black underline" : ""} to="/">Home</NavLink>
    <NavLink className={({isActive})=> isActive ? "text-black underline" : ""} to="/availablefoods">Available-Food</NavLink>
    {
      user ? <><NavLink className={({isActive})=> isActive ? "text-black underline" : ""} to="/addfood">Add-Food</NavLink>

      <NavLink className={({isActive})=> isActive ? "text-black underline" : ""} to="/managemyfood">Manage-My-Foods</NavLink>

      <NavLink className={({isActive})=> isActive ? "text-black underline" : ""} to="/myfoodreqs">My-Food-Request</NavLink> </> 

      : <NavLink className={({isActive})=> isActive ? "text-black underline" : ""} to="/login">Login</NavLink>
    }
    </>
 
 console.log(user?.photoURL)

const handlelogout=()=>{
  logout()
  .then(()=>{})
  .catch(()=>{})
}
    return (
        <div className="navbar  bg-orange-400 text-white font-bold ">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        {links}
      </ul>
    </div>
   <Link to={"/"}><img className="w-28" src={"https://i.ibb.co/28V61Gv/Yellow-Minimalist-Round-Shaped-Cafe-Logo-removebg-preview.png"} alt="" /></Link>
  </div>
  <div className="navbar-center hidden lg:flex ">
    <ul className="menu menu-horizontal px-1 gap-5 text-xl">
      {links}
    </ul>
  </div>
  <div className="navbar-end">
  {
    user?.email ?   <div className="avatar mr-3">
    <div className="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
      <img src={user?.photoURL} />
    </div>
  </div> : ""
  }
  {
    user ? <button className="btn" onClick={handlelogout}>Logout</button> :  <Link to="/register"> <button className="btn bg-orange-300">Register</button></Link>
  }
  </div>
</div>
    );
};

export default Nav;