import React, { useState } from "react";
import Logo from "../assets/ft-black.png";
import { FaTwitter } from "react-icons/fa";
import { IoLogoFacebook } from "react-icons/io";
import { IoLogoGithub } from "react-icons/io5";
import { FaLinkedin } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";

const footer = ({ isLoggedIn }) => {
  const navigate = useNavigate();

  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
  };

  // function to handle protected links
  const handleProtectedClick = (e, path) => {
    e.preventDefault();
    if (isLoggedIn) {
      navigate(path);
    } else {
      navigate("/signup");
    }
  };

  return (
    <footer className="mx-[42px] mt-[60px] mb-7.75 flex flex-col justify-center items-center gap-[24px]">
      {/* main links---------- */}
      <div className=" h-15.5 flex justify-between items-center self-stretch">
        {/* logo and name */}
        <div className="h-15.5 flex items-center gap-[-40px]">
          <img className="h-15.5 w-15.5" src={Logo} alt="Finotype Logo" />
          <span className="text-2xl font-semibold cursor-default">
            Finotype
          </span>
        </div>

        {/* home/features/about/contact mail */}
        <div className="w-100 font-medium flex justify-between items-center">
          <Link
            to="/home"
            onClick={() => scrollToSection("navbar")}
            className="hover:text-gray-800 hover:underline underline-offset-2 decoration-gray-800"
          >
            {" "}
            Home{" "}
          </Link>

          <Link
            to="/"
            onClick={() => scrollToSection("features")}
            className="hover:text-gray-800 hover:underline underline-offset-2 decoration-gray-800"
          >
            {" "}
            Our features{" "}
          </Link>

          <Link
            to="/about"
            onClick={() => scrollToSection("navbar")}
            className="hover:text-gray-800 hover:underline underline-offset-2 decoration-gray-800"
          >
            {" "}
            About us{" "}
          </Link>

          <a
            className="hover:text-gray-800 hover:underline underline-offset-2 decoration-gray-800"
            href="#"
          >
            {" "}
            Contact mail{" "}
          </a>
        </div>

        {/* icons links */}
        <div className=" mr-1 flex justify-center items-center gap-[16px] ">
          <a href="https://x.com" target="_blank">
            <FaTwitter className="w-8 h-8  transition-transform duration-150 ease-in-out hover:scale-108" />
          </a>
          <a href="https://facebook.com" target="_blank">
            <IoLogoFacebook className="w-8 h-8  transition-transform duration-150 ease-in-out hover:scale-108" />
          </a>
          <a href="https://github.com" target="_blank">
            <IoLogoGithub className="w-8 h-8  transition-transform duration-150 ease-in-out hover:scale-108" />
          </a>
          <a href="https://linkedin.com" target="_blank">
            <FaLinkedin className="w-8 h-8  transition-transform duration-150 ease-in-out hover:scale-108" />
          </a>
        </div>
      </div>

      {/* sub footer-------------- */}
      <div className="flex justify-between items-center self-stretch ">
        <div className="ml-[12px] flex justify-center items-center gap-[24px] ">
          <span className="text-[#939393] text-[14px] font-normal leading-normal">
            © 2025 Finotype
          </span>
          <a
            className="text-[#939393] text-[14px] font-normal leading-normal hover:text-[#333] transition-colors duration-200"
            href="#"
          >
            Terms
          </a>
          <a
            className="text-[#939393] text-[14px] font-normal leading-normal hover:text-[#333] transition-colors duration-200"
            href="#"
          >
            Privacy
          </a>
          <a
            className="text-[#939393] text-[14px] font-normal leading-normal hover:text-[#333] transition-colors duration-200"
            href="#"
          >
            Cookies
          </a>
        </div>

        <div className="flex justify-center items-center gap-[24px] ">
          <Link
            to="/startupcost"
            onClick={(e) => handleProtectedClick(e, "/startupcost")}
            className="text-[#939393] text-[14px] font-normal leading-normal hover:text-[#333] transition-colors duration-200"
          >
            Startup Cost
          </Link>
          <Link
            to="/runway"
            onClick={(e) => handleProtectedClick(e, "/runway")}
            className="text-[#939393] text-[14px] font-normal leading-normal hover:text-[#333] transition-colors duration-200"
          >
            Runway Calculator
          </Link>
          <Link
            to="/breakeven"
            onClick={(e) => handleProtectedClick(e, "/breakeven")}
            className="text-[#939393] text-[14px] font-normal leading-normal hover:text-[#333] transition-colors duration-200"
          >
            BreakEven
          </Link>
          <Link
            to="/pricing"
            className="text-[#939393] text-[14px] font-normal leading-normal hover:text-[#333] transition-colors duration-200"
          >
            Pricing
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default footer;
