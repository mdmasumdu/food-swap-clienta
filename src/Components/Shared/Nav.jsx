import { Link, NavLink } from "react-router-dom";
import useAuth from "../Hooks/useAuth";


const Nav = () => {
  const {user,logout} =useAuth();
    const links =<>
    <NavLink to="/">Home</NavLink>
    <NavLink to="/availablefoods">Available-Food</NavLink>
    {
      user ? <><NavLink to="/">Add-Food</NavLink>

      <NavLink to="/">Manage-My-Foods</NavLink>

      <NavLink to="/">My-Food-Request</NavLink> </> 

      : <NavLink to="/login">Login</NavLink>
    }
    </>


const handlelogout=()=>{
  logout()
  .then(()=>{})
  .catch(()=>{})
}
    return (
        <div className="navbar bg-orange-600 text-white">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        {links}
      </ul>
    </div>
    <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
  </div>
  <div className="navbar-center hidden lg:flex ">
    <ul className="menu menu-horizontal px-1 gap-5 text-xl">
      {links}
    </ul>
  </div>
  <div className="navbar-end">
  <div className="avatar mr-3">
  <div className="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
    <img src={user?.photoURL} />
  </div>
</div>
  {
    user ? <button className="btn" onClick={handlelogout}>Logout</button> :  <Link to="/register"> <button className="btn bg-orange-400">Register</button></Link>
  }
  </div>
</div>
    );
};

export default Nav;