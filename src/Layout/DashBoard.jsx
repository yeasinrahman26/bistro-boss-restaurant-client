import { NavLink, Outlet } from "react-router-dom";
import {
  FaCalendar,
  FaCartShopping,
  FaEnvelope,
  FaList,
  FaUsers,
  FaUtensils,
} from "react-icons/fa6";
import { FaHome } from "react-icons/fa";
import { MdOutlineRateReview } from "react-icons/md";
import { TbBrandBooking } from "react-icons/tb";
import { IoMenu } from "react-icons/io5";
import useCart from "../hooks/useCart";
import useAdmin from "../hooks/useAdmin";

const DashBoard = () => {
  const [cart] = useCart();

  // TODO: get is admin from the database
  const [isAdmin] = useAdmin();
  return (
    <div className="drawer lg:drawer-open">
      {/* Sidebar drawer toggle button */}
      <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        {/* Main Content */}
        <div className="navbar bg-[#D1A054] lg:hidden">
          <label htmlFor="dashboard-drawer" className="btn btn-ghost lg:hidden">
            <IoMenu className="text-2xl" />
          </label>
          <h1 className="text-2xl font-bold">BISTRO BOSS</h1>
        </div>
        <div className="p-8">
          <Outlet />
        </div>
      </div>
      <div className="drawer-side overflow-y-auto">
        <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
        <div className="w-64 min-h-screen bg-[#D1A054] overflow-y-auto">
          <div className="flex flex-col my-10 items-center justify-center">
            <h1 className="text-4xl font-bold">BISTRO BOSS</h1>
            <h1 className="text-4xl font-semibold">Restaurant</h1>
          </div>
          <ul className="menu text-xl font-medium">
            {isAdmin ? (
              <>
                <li>
                  <NavLink to="/dashboard/adminHome">
                    <FaHome />
                    Admin Home
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/addItems">
                    <FaUtensils />
                    Add Items
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/manageItems">
                    <FaList />
                    Manage Items
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/review">
                    <MdOutlineRateReview />
                    Review
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/ManageBookings">
                    <TbBrandBooking />
                    Manages Bookings
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/allUsers">
                    <FaUsers />
                    All Users
                  </NavLink>
                </li>
              </>
            ) : (
              <>
                <li>
                  <NavLink to="/dashboard/UserHome">
                    <FaHome />
                    User Home
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/reservation">
                    <FaCalendar />
                    Reservation
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/cart">
                    <FaCartShopping />
                    My Cart ({cart.length})
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/review">
                    <MdOutlineRateReview />
                    Review
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/bookings">
                    <TbBrandBooking />
                    My Bookings
                  </NavLink>
                </li>
              </>
            )}
            {/* shared nav links */}
            <div className="divider"></div>
            <li>
              <NavLink to="/">
                <FaHome />
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/menu">
                <IoMenu />
                Menu
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact">
                <FaEnvelope />
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
