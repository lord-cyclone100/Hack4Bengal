export const Navbar = () =>{
	return(
		<div className="top-0 left-0 w-full shadow-lg backdrop-blur-md bg-gradient-to-b from-white/8 via-white/4 to-white/0 flex items-center justify-center flex-column py-8 px-40">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
          </div>
        </div>
        <a className="btn btn-ghost text-xl">daisyUI</a>
      </div>
      <div className="navbar-end flex gap-4">
        <a><button className="btn btn-outline btn-success">Login</button></a>
        <a><button className="btn btn-soft btn-success">Sign Up</button></a>
      </div>
    </div>
	) 
}