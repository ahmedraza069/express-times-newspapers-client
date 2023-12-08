import { Helmet } from "react-helmet-async";

import { NavLink, Outlet } from "react-router-dom";
import PageTitle from "../Shared/PageTitle/PageTitle";
import Navbar from "../Shared/Navbar/Navbar";
import { MdSpaceDashboard } from "react-icons/md";
import { FaUsers } from "react-icons/fa";
import { LuNewspaper } from "react-icons/lu";
import { MdPublishedWithChanges } from "react-icons/md";

const Dashboard = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Helmet>
        <title>Express Times | Dashboard</title>
      </Helmet>
      <PageTitle
        pageTitle={"Discover Our Extensive"}
        animateTitle={"Article Library"}
      ></PageTitle>
      <div>
        <div className="drawer lg:drawer-open">
          <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
          <div
            className="drawer-content flex flex-col  rounded-r-lg text-black"
            style={{
              backgroundImage:
                "url(https://i.ibb.co/FmBjsdW/cool-background-6.png)",
            }}
          >
            <Outlet></Outlet>
            <label
              htmlFor="my-drawer-2"
              className="btn btn-primary drawer-button lg:hidden"
            >
              Open drawer
            </label>
          </div>
          <div className="drawer-side rounded-l-lg"  style={{
              backgroundImage:
                "url(https://i.ibb.co/HgkJnZC/cool-background-4.png)",
            }}>
                <p className=""></p>
            <div className="flex items-center space-x-4 bg-gray-500 text-white rounded-l-lg shadow-lg p-6" >
              <img
                src="https://source.unsplash.com/100x100/?portrait"
                alt=""
                className="w-12 h-12 rounded-full dark:bg-gray-500"
              />
              <div>
                <h2 className="text-lg font-semibold">Leroy Jenkins</h2>
                <span className="flex items-center space-x-1">
                  <a
                    rel="noopener noreferrer"
                    href="#"
                    className="text-xs hover:underline dark:text-gray-400"
                  >
                    View profile
                  </a>
                </span>
              </div>
            </div>
            <label
              htmlFor="my-drawer-2"
              aria-label="close sidebar"
             
            ></label>
            <ul className="menu p-6 rounded-l-lg w-80 min-h-full space-y-3 text-lg font-medium text-base-content">
              {/* Sidebar content here */}
              <li>
                <NavLink to="/dashboard/summary"><MdSpaceDashboard /> Dashboard</NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/all-users"><FaUsers /> All Users</NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/all-articles"><LuNewspaper /> All Articles</NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/add-publisher"><MdPublishedWithChanges /> Add Publisher</NavLink>
              </li>
             
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
