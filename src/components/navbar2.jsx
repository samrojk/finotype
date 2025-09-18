import React, { useState, useEffect } from "react";
import Logo from "../assets/ft-black.webp";
import DeleteModal from "./delmodal.jsx";
import Profile from "../assets/profile.webp";
import {
  FaChevronDown,
  FaMoneyBill1Wave,
  FaPersonRunning,
  FaUserPen,
  FaUserMinus,
  FaUserXmark,
} from "react-icons/fa6";
import { PiLinkBreakBold } from "react-icons/pi";
import { Link, NavLink } from "react-router-dom";
import { account } from "../lib/appwrite";

const Navbar = ({ setIsLoggedIn }) => {
  // Dropdown for Our Features
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Dropdown for Profile
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [avatarUrl, setAvatarUrl] = useState("");

  // Delete Account Modal
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);

  const [isOnline, setIsOnline] = useState(navigator.onLine);

  // Network Status
  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  useEffect(() => {
    const fetchUserAvatar = async () => {
      try {
        const user = await account.get();

        // check if user already has avatar seed
        let seed = user.prefs.avatarSeed;

        if (!seed) {
          // generate random seed once
          seed = Math.floor(Math.random() * 10000).toString();
          await account.updatePrefs({ avatarSeed: seed });
        }

        // generate avatar URL with DiceBear "notionists" (professional style)
        setAvatarUrl(
          `https://api.dicebear.com/7.x/notionists/svg?seed=${seed}&backgroundColor=ffdfbf`
        );
      } catch (err) {
        console.error("Failed to fetch avatar:", err);
      }
    };

    fetchUserAvatar();
  }, []);

  const handleEditProfile = async () => {
    try {
      const newSeed = Math.floor(Math.random() * 10000).toString();
      await account.updatePrefs({ avatarSeed: newSeed });
      setAvatarUrl(
        `https://api.dicebear.com/7.x/notionists/svg?seed=${newSeed}&backgroundColor=ffdfbf`
      );
    } catch (error) {
      console.error("Failed to update avatar:", error);
    }
  };

  const handleLogout = async () => {
    try {
      await account.deleteSession("current"); // end session
      setIsLoggedIn(false); // update parent App.jsx state
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  // Delete Account Trigger
  const handleDeleteAccount = async () => {
    try {
      await account.delete(); // delete account from Appwrite
      setIsLoggedIn(false);
      setIsDeleteOpen(false);
      window.location.href = "/"; // redirect after deletion
    } catch (error) {
      console.error("Delete account failed:", error);
    }
  };

  return (
    <nav
      id="navbar"
      className="mx-[42px] mt-6 h-15.5 flex justify-between items-center"
    >
      {/* Logo */}
      <div className="h-15.5 flex items-center">
        <img className="h-15.5 w-15.5" src={Logo} alt="Finotype Logo" />
        <span className="text-2xl font-semibold cursor-default">Finotype</span>
      </div>

      {/* Tabs */}
      <div className=" w-100 font-medium flex justify-between items-center ">
        <NavLink
          to="/home"
          className={({ isActive }) =>
            isActive
              ? "underline underline-offset-2"
              : "hover:underline hover:underline-offset-2"
          }
        >
          Home
        </NavLink>

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
              to="/startupcost"
              className="block w-full px-4 py-2 hover:bg-amber-50 transition-colors duration-180 hover:text-amber-500 cursor-pointer rounded bg-transparent text-left"
            >
              <span className="flex flex-row justify-between items-center mx-1">
                Startup Cost{" "}
                <FaMoneyBill1Wave size={20} className="mt-[3.5px]" />
              </span>
            </Link>

            <Link
              to="/runway"
              className="block w-full px-4 py-2 hover:bg-amber-50 transition-colors duration-180 hover:text-amber-500 cursor-pointer rounded bg-transparent text-left"
            >
              <span className="flex flex-row justify-between items-center mx-1">
                Runway <FaPersonRunning size={20} className="mt-[3.5px]" />
              </span>
            </Link>

            <Link
              to="/breakeven"
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

      {/* Profile Pic */}
      <div className="font-sans font-medium mr-1 flex flex-row gap-[10px]">
        <div
          className="relative"
          title={isOnline ? "You're Online" : "You're Offline"}
        >
          <img
            src={avatarUrl || Profile}
            alt="profile pic"
            className="h-[48px] rounded-full ring-2 ring-gray-200 ring-offset-2"
          />
          <span
            className={`bottom-[4px] left-10 absolute w-[12px] h-[12px] border-2 border-white rounded-full transition-colors duration-300 ${
              isOnline ? "bg-[#24D600]" : "bg-red-500"
            }`}
          ></span>
        </div>

        {/* Profile Dropdown */}
        <button
          onClick={() => setIsProfileOpen(!isProfileOpen)}
          className={`flex felx-row gap-[4px] px-7 py-2.75 border-2 border-black rounded-full justify-center items-center transition-colors duration-180 cursor-pointer
    ${
      isProfileOpen
        ? "bg-black text-white"
        : "bg-white hover:bg-black hover:text-white"
    }`}
        >
          Profile{" "}
          <FaChevronDown
            size={14}
            className={`transition-transform duration-200 ${
              isProfileOpen ? "rotate-180" : "rotate-0"
            }`}
          />
        </button>

        {/* Dropdown Menu */}
        {isProfileOpen && (
          <div className="absolute bg-white shadow-md rounded-2xl mt-[60px] w-46 z-40">
            <Link
              // to="/editprofile"
              onClick={handleEditProfile}
              className="w-full block px-4 py-2 hover:bg-amber-50 hover:text-amber-500 rounded-t-2xl transition-colors duration-180 bg-transparent text-left cursor-pointer"
            >
              <span className="flex flex-row justify-between items-center mx-1">
                Change Avatar <FaUserPen size={20} className="mt-[3.5px]" />
              </span>
            </Link>

            <button
              onClick={handleLogout}
              className="w-full block px-4 py-2 hover:bg-blue-50 hover:text-blue-500 rounded transition-colors duration-180 bg-transparent text-left cursor-pointer"
            >
              <span className="flex flex-row justify-between items-center mx-1">
                Log Out <FaUserMinus size={20} className="mt-[3.5px]" />
              </span>
            </button>

            <button
              onClick={() => setIsDeleteOpen(true)}
              className="w-full block px-4 py-2 hover:bg-red-100 hover:text-red-500 rounded-b-2xl transition-colors duration-180 bg-transparent text-left cursor-pointer"
            >
              <span className="flex flex-row justify-between items-center mx-1">
                Delete Account <FaUserXmark size={20} className="mt-[3.5px]" />
              </span>
            </button>
          </div>
        )}
      </div>
      <DeleteModal
        isOpen={isDeleteOpen}
        onClose={() => setIsDeleteOpen(false)}
        onConfirm={handleDeleteAccount}
      />
    </nav>
  );
};

export default Navbar;
