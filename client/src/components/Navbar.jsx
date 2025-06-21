import { Navigate, NavLink, useNavigate } from "react-router-dom";
import { CivicAuthProvider, UserButton, useUser } from "@civic/auth/react";

export const Navbar = () => {
  const { user, signIn } = useUser();
  const navigate = useNavigate();

  const handleSignIn = () => {
    signIn();
    navigate("/login/metamask");
  };

  return (
    <div className="top-5 left-0 w-full shadow-lg backdrop-blur-md  flex  justify-between py-4 px-40 z-20">
      {/* <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
          </div>
        </div>
        
      </div> */}
      <a className=" text-xl"><img src="./v3.png"  className=" rounded-full absolute top-5  h-15 w-15" alt="Logo" /></a>
      <div className="navbar-end flex gap-4">
        <NavLink to='/'>Home</NavLink>
        <div>
          {
            user?
            <NavLink to='/create-tournament'>Create</NavLink>
            :
            <button className="hidden"></button>
          }
        </div>
        <div>
          {
            user ?
              <UserButton className="btn! btn-outline! btn-success! z-20" dropdownButtonStyle={{}}/>
              :
              <button onClick={handleSignIn}>Sign In</button>
          }
        </div>
      </div>
    </div>
  );
};