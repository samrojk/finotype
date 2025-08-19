import React from "react";
import HeroImg from "../assets/hero-image.jpg";
import { FaArrowRight } from "react-icons/fa6";
import { FaChevronRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const hero = () => {
  return (
    <div className="mx-[42px] mt-2 justify-items-center">
      {/* hero section__________ */}
      <div className="h-180 gap-6 flex justify-between items-center">
        {/* hero text __________________ */}
        <div className="w-168 h-152.5 flex flex-col items-start gap-13 shrink-0">
          {/* hero text____________________ */}
          <div className="w-156 h-88 flex flex-col items-start gap-[14px] self-stretch">
            {/* see demo video_____ */}
            <span className="w-94.25 h-8 flex items-center gap-2.5">
              <p className="text-[#000] text-[18px] font-normal leading-[32px] ">
                Want to know what finotype is?
              </p>

              <button className="group bg-[#F3E6DD] text-[#1E1E1E] flex w-22 h-8 px-[18px] flex-col justify-between items-center  rounded-[100px] hover:bg-[#E7D0BE] transition-colors duration-200 in-hover:">
                <a href="https://www.youtube.com/" target="_blank">
                  <span className="flex justify-center items-center gap-0.5">
                    <span className="text-[#000] text-[14px] font-normal leading-[32px] flex justify-center items-center">
                      DEMO
                    </span>
                    <FaChevronRight
                      size={11}
                      className="transition-transform duration-200 group-hover:translate-x-1"
                    />
                  </span>
                </a>
              </button>
            </span>

            {/* hero text 1_____ */}
            <p className="text-[#000] text-[85px] font-medium leading-[112px] tracking-[3.28px]">
              Spend wisely. Plan smart.
            </p>

            {/* hero text 2_____ */}
            <p className="w-121.75 h-16 text-[#000] text-[20px] font-normal leading-[32px] tracking-[0.6px] whitespace-break-spaces">
              Visualize your startup costs, manage capital, and calculate runway
              all in one place.
            </p>
          </div>

          {/* get start btn__________ */}
          <Link
            to="/signup"
            className="group bg-[#202020] text-[#fff] w-54 h-16 px-8 py-4.75 flex flex-col justify-center items-center rounded-[6px] gap-[10px] shrink-0 hover:bg-[#000000] mt-[-8px]"
          >
            <span className="w-41.5 h-9 flex justify-between items-center gap-1">
              <span className="w-34.5 h-9 text-[22px] font-medium flex justify-center items-center ">
                Get Started
              </span>

              <FaArrowRight
                size={20}
                className="transition-transform duration-200 group-hover:translate-x-1"
              />
            </span>
          </Link>
        </div>

        {/* hero image */}
        <div>
          <img className="h-178" src={HeroImg} alt="Hero Image" />
        </div>
      </div>
    </div>
  );
};

export default hero;
