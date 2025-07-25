import { CgProfile } from "react-icons/cg";

import { Link, NavLink } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import logo from "../../../assets/logo/pizza.png";
import { FiAlignJustify } from "react-icons/fi";
const Navbar = () => {
  const { signOutUser, user } = useAuth();

  const handleSignOut = () => {
    signOutUser()
      .then(() => {
        console.log("successful sign out");
      })
      .catch((error) => {
        console.log(
          "failed to sign out .stay here. dont leave me alone",
          error
        );
      });
  };

  const links = (
    <>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "text-[#dc5547] tracking-wider text-1xl font-Cormorant font-medium underline transition ease-out duration-400"
              : " text-white text-1xl font-Cormorant font-medium  tracking-wider"
          }
          to="/"
        >
          HOME
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "text-[#dc5547] tracking-wider text-1xl font-Cormorant font-medium underline transition ease-out duration-400"
              : " text-white text-1xl font-Cormorant font-medium  tracking-wider"
          }
          to="allproducts"
        >
          PRODUCTS
        </NavLink>
      </li>
      <li>
        <NavLink
          to="contact"
          className={({ isActive }) =>
            isActive
              ? "text-[#dc5547] tracking-wider text-1xl font-medium  font-Cormorant underline transition ease-out duration-400"
              : "text-white text-1xl font-Cormorant font-medium   tracking-wider"
          }
        >
          CONTACT-US
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "text-[#dc5547] tracking-wider text-1xl font-medium  font-Cormorant underline transition ease-out duration-400"
              : "text-white text-1xl font-Cormorant font-medium tracking-wider"
          }
          to="aboutUs"
        >
          ABOUT US
        </NavLink>
      </li>
      {/* Admin Routes */}
      {user?.email && (
        <li>
          <details>
            <summary>
              <p className="text-white text-1xl font-Cormorant font-medium uppercase">
                Admin
              </p>
            </summary>
            <ul className="p-2 bg-black w-36 uppercase">
              <li>
                <NavLink to="addProduct">Add-Product</NavLink>
              </li>
            </ul>
          </details>
        </li>
      )}

      {/* User Route */}
      {user?.email && (
        <li>
          <details>
            <summary>
              <p className="text-white text-1xl font-Cormorant font-medium uppercase">
                User
              </p>
            </summary>
            <ul className="p-2 bg-black  uppercase">
              <li>
                <NavLink to="myorder">My-order</NavLink>
              </li>

              <li>
                <NavLink to="allbooking">My-Booking</NavLink>
              </li>
            </ul>
          </details>
        </li>
      )}
    </>
  );

  return (
    <div className="navbar bg-base-100  shadow-sm max-w-7xl mx-auto  bg-black px-2 z-10 sticky top-0">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <div className="text-white">
              <FiAlignJustify />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-black  rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <div className="flex">
          <img className="w-9 h-9" src={logo} alt="" />

          <h1 className=" text-1xl font-medium p-2 font-Cormorant tracking-wider uppercase text-white hover:transition-all ease-in duration-300 ">
            Pizza<span className="text-[#dc5547]">Line</span>
          </h1>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end text-white font-Cormorant">
        {user?.email ? (
          <>
            <button
              className="uppercase text-1xl font-Cormorant"
              onClick={handleSignOut}
            >
              Sign Out
            </button>
          </>
        ) : (
          <div className="dropdown dropdown-end bg-black">
            <div
              tabIndex={0}
              role="button"
              className="btn text-white  bg-black border-none shadow-none"
            >
              <CgProfile className="text-2xl text-white" />
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content menu bg-base-100 bg-black rounded-box z-1 w-52 p-2 shadow-sm"
            >
              <li>
                <Link to="/login">LOGIN</Link>
              </li>

              <li>
                <Link to="/register">CREATE ACCOUNT</Link>
              </li>
              <li>
                <Link to="/">BACK HOME</Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
