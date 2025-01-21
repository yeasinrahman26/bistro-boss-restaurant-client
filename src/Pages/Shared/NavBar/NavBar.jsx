import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import AuthContext from "../../../providers/AuthContext";
import { FaCartShopping } from "react-icons/fa6";
import useCart from "../../../hooks/useCart";
const NavBar = () => {
  const { user, logout } = useContext(AuthContext);

  const [cart]=useCart();

  const links = (
    <>
      <li>
        <NavLink to={"/"}>Home</NavLink>
      </li>
      <li>
        <NavLink to={"menu"}>Menu</NavLink>
      </li>
      <li>
        <NavLink to={"order/salad"}>Order</NavLink>
      </li>
      <li>
        <Link to={"/dashboard/cart"}>
          <button className="flex items-center justify-center gap-2">
            <FaCartShopping />
            <div className="badge badge-secondary">+{cart.length}</div>
          </button>
        </Link>
      </li>
    </>
  );

  return (
    <div className="navbar max-w-screen-xl mx-auto fixed z-10 bg-opacity-50 text-white bg-black">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <Link to={"/"} className="btn btn-ghost text-xl">
          BISTRO BOSS{" "}
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <div className="flex gap-2 justify-center items-center">
            <img src={user?.photoURL} className="w-10 h-10" alt="" />
            <span className="mr-2">{user?.displayName}</span>
            <button onClick={logout} className="btn btn-primary">
              Logout
            </button>
          </div>
        ) : (
          <NavLink to={"login"}>
            <button className="btn btn-primary">Login</button>
          </NavLink>
        )}
      </div>
    </div>
  );
};

export default NavBar;
