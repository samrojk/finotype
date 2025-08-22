import React, { useState, useEffect, useNavigate } from "react";
import Logo from "../assets/ft-black.png";
import Profile1 from "../assets/profile1.jpeg";
import {
  FaChevronDown,
  FaMoneyBill1Wave,
  FaPersonRunning,
} from "react-icons/fa6";
import { PiLinkBreakBold } from "react-icons/pi";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  // Dropdown for Our Features
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <nav
      id="navbar"
      className="mx-[42px] mt-6 h-15.5 flex justify-between items-center"
    >
      {/* Logo */}
      <div className="h-15.5 flex items-center gap-[-40px]">
        <img className="h-15.5 w-15.5" src={Logo} alt="Finotype Logo" />
        <span className="text-2xl font-semibold cursor-default">Finotype</span>
      </div>

      {/* Tabs */}
      <div className="w-100 font-medium flex justify-between items-center">
        <Link
          to="/home"
          className="hover:text-gray-800 hover:underline underline-offset-2 decoration-gray-800 cursor-pointer"
        >
          Home
        </Link>

        {/* Features Dropdown */}
        <div className="relative">
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="gap-[4px] cursor-pointer flex items-center focus:outline-none hover:text-gray-800"
          >
            Our features{" "}
            <FaChevronDown
              size={14}
              className={`transition-transform duration-300 ${
                isDropdownOpen ? "rotate-180" : "rotate-0"
              }`}
            />
          </button>

          {/* Dropdown Menu */}
          <div
            className={`absolute bg-white shadow-md rounded mt-2 w-48 z-10 transform transition-all duration-200 origin-top ${
              isDropdownOpen
                ? "opacity-100 scale-100"
                : "opacity-0 scale-90 pointer-events-none"
            }`}
          >
            <Link
              to="/signup"
              className="block w-full px-4 py-2 hover:bg-amber-50 transition-colors duration-180 hover:text-amber-500 cursor-pointer rounded bg-transparent text-left"
            >
              <span className="flex flex-row justify-between items-center mx-1">
                Startup Cost{" "}
                <FaMoneyBill1Wave size={20} className="mt-[3.5px]" />
              </span>
            </Link>

            <Link
              to="/signup"
              className="block w-full px-4 py-2 hover:bg-amber-50 transition-colors duration-180 hover:text-amber-500 cursor-pointer rounded bg-transparent text-left"
            >
              <span className="flex flex-row justify-between items-center mx-1">
                Runway <FaPersonRunning size={20} className="mt-[3.5px]" />
              </span>
            </Link>

            <Link
              to="/signup"
              className="block w-full px-4 py-2 hover:bg-amber-50 transition-colors duration-180 hover:text-amber-500 cursor-pointer rounded bg-transparent text-left"
            >
              <span className="flex flex-row justify-between items-center mx-1">
                BreakEven <PiLinkBreakBold size={20} className="mt-[3.5px]" />
              </span>
            </Link>
          </div>
        </div>

        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive
              ? "underline underline-offset-2"
              : "hover:underline hover:underline-offset-2"
          }
        >
          About Us
        </NavLink>
      </div>

      {/* Login & Sign up Buttons */}
      <div className="font-sans font-medium mr-1">
        <Link
          to="/login"
          className="cursor-pointer mr-7.5 hover:text-gray-800 hover:underline underline-offset-2 decoration-gray-800"
        >
          Log in
        </Link>

        <Link
          to="/signup"
          className="cursor-pointer px-[25px] py-[11px] border-2 border-black rounded-sm justify-center items-center hover:bg-black hover:text-white transition-colors duration-180"
        >
          Sign up
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
