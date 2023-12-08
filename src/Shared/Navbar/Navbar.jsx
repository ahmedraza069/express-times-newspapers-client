import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import useAdmin from "../../hooks/useAdmin";


const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [isAdmin] = useAdmin()
  const navLinks = (
    <>
      <li>
        <NavLink to={"/"}>Home</NavLink>
      </li>
      <li>
        <NavLink to={"/add-articles"}>Add Article</NavLink>
      </li>
      <li>
        <NavLink to={"/all-articles"}>All Articles</NavLink>
      </li>
      {user &&   <li>
        <NavLink to={"/my-articles"}>My Articles</NavLink>
      </li>}
    {user &&   <li>
        <NavLink to={"/premium-articles"}>Premium Articles</NavLink>
      </li>}
      <li>
        <NavLink to={"/subscription"}>Subscription</NavLink>
      </li>
      <li>
        <NavLink to={"/contact"}>Contact Us</NavLink>
      </li>
    
    </>
  );
  const handleLogout = () => {
    logOut().then().catch();
  };
  return (
    <div>
      <div className="navbar fixed z-10 bg-opacity-20 py-4 px-3 bg-black container mx-auto text-white">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navLinks}
            </ul>
          </div>
          <div>
            <img
              className="w-24"
              src="https://i.ibb.co/y8ZQXVB/express-time-logo-design-961981-63-removebg-preview.png"
              alt="navbar_logo"
            />
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navLinks}</ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <div className="flex justify-center items-center">
              <div className="dropdown dropdown-end flex justify-center items-center gap-1">
                <div className="hidden md:block lg:block">
                  <p className="text-white font-medium pl-3 text-sm">
                    {user.email}
                  </p>
                </div>
                <div>
                  <label
                    tabIndex={0}
                    className="btn btn-ghost btn-circle avatar"
                  >
                    <div className="w-10 rounded-full">
                      <img src={user?.photoURL} />
                    </div>
                  </label>
                  <ul
                    tabIndex={0}
                    className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow flex justify-center items-center bg-base-100 rounded-box w-36"
                  >
                        <li>
                      <Link to={'/profile'}><p className="text-center text-black py-3 uppercase">Profile</p></Link>
                    </li>
                    <li>
                      <p className="text-center text-black py-3">{user.displayName}</p>
                    </li>
                    {
                      isAdmin && <li>
                      <NavLink to={'/dashboard/summary'} className="text-center text-black py-3 uppercase">Dashboard</NavLink>
                    </li>
                    }

                    <li>
                      <Link
                        className="py-3 px-5 text-white font-semibold uppercase text-base border bg-gradient-to-r from-pink-500 to-orange-500"
                        onClick={handleLogout}
                      >
                        Logout
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          ) : (
            <Link to="/login">
              <button className="btn text-white font-semibold uppercase text-base border bg-gradient-to-r from-pink-500 to-orange-500">
                Log In
              </button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
