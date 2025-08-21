import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa6";
import Line from "../assets/Line";
import Feature1 from "../assets/feature-1.jpg";
import Feature2 from "../assets/feature-2.jpg";
import Feature3 from "../assets/feature-3.jpg";
import { Link } from "react-router-dom";

const features = () => {
  return (
    <div id="features" className="mx-[42px] mt-[100px] flex flex-col gap-10.5 justify-items-center">
      <div className="h-15.5 text-4xl font-medium flex flex-col justify-between items-center ">
        <span className="tracking-[1.12px]">Our features</span>
        <Line />
      </div>

      {/* Features________ */}

      <div className="flex flex-col justify-center items-center gap-[64px]">
        {/* feature 1________ */}
        <span className="w-[100%] flex justify-center items-center gap-[74px] self-stretch">
          {/* image1___________ */}
          <span className="w-74.75 h-73.5 aspect-60/59">
            <img src={Feature1} alt="Features Image" />
          </span>

          {/* text frame------ */}
          <span className="w-161.5 flex flex-col justify-center items-start gap-[24px] ">
            {/* text__________ */}
            <span className="w-[100%] flex flex-col justify-center items-start gap-[10px] self-stretch ">
              <h3 className="text-[#1A1A1A] text-[36px] font-semibold leading-normal tracking-[1.44px] ">
                Startup Cost Calculator
              </h3>

              <p className="text-[#333] text-[24px] font-normal leading-normal tracking-[0.96px] ">
                Quickly add one-time and monthly expenses. See exactly where
                your money goes from day one.
              </p>
            </span>

            {/* btn----------- */}
            <Link
              to="/signup"
              className="group text-[#333] w-46 h-15 px-[16px] py-[12px] flex flex-col justify-center items-center gap-[10px] rounded-[10px] border-solid border-[2px] border-[#333] hover:bg-[#333] hover:text-[white] transition-colors duration-200"
            >
              <span className="flex justify-center items-center gap-[8px] ">
                <p className=" text-[24px] font-semibold leading-normal ">
                  {" "}
                  Try Now
                </p>

                <FaArrowRight
                  size={22}
                  className="transition-transform duration-200 group-hover:translate-x-1"
                />
              </span>
            </Link>
          </span>
        </span>

        {/* feature 2________ */}
        <span className=" w-[100%] flex flex-row-reverse justify-center items-center gap-[74px] self-stretch">
          {/* image1___________ */}
          <span className="w-74.75 h-73.5 aspect-60/59">
            <img src={Feature2} alt="Features Image" />
          </span>

          {/* text frame------ */}
          <span className="w-161.5 flex flex-col justify-center items-start gap-[24px] ">
            {/* text__________ */}
            <span className="w-[100%] flex flex-col justify-center items-start gap-[10px] self-stretch ">
              <h3 className="text-[#1A1A1A] text-[36px] font-semibold leading-normal tracking-[1.44px] ">
                Runway Calculator
              </h3>

              <p className="text-[#333] text-[24px] font-normal leading-normal tracking-[0.96px] ">
                Know how many months your capital will last based on your
                current burn rate.
              </p>
            </span>

            {/* btn----------- */}
            <Link
              to="/signup"
              className="group text-[#333] w-46 h-15 px-[16px] py-[12px] flex flex-col justify-center items-center gap-[10px] rounded-[10px] border-solid border-[2px] border-[#333] hover:bg-[#333] hover:text-[white] transition-colors duration-200"
            >
              <span className="flex justify-center items-center gap-[8px] ">
                <p className=" text-[24px] font-semibold leading-normal ">
                  {" "}
                  Try Now
                </p>

                <FaArrowRight
                  size={22}
                  className="transition-transform duration-200 group-hover:translate-x-1"
                />
              </span>
            </Link>
          </span>
        </span>

        {/* feature 3________ */}
        <span className=" w-[100%] flex justify-center items-center gap-[74px] self-stretch">
          {/* image1___________ */}
          <span className="w-74.75 h-73.5 aspect-60/59">
            <img src={Feature3} alt="Features Image" />
          </span>

          {/* text frame------ */}
          <span className="w-161.5 flex flex-col justify-center items-start gap-[24px] ">
            {/* text__________ */}
            <span className="w-[100%] flex flex-col justify-center items-start gap-[10px] self-stretch ">
              <h3 className="text-[#1A1A1A] text-[36px] font-semibold leading-normal tracking-[1.44px] ">
                BreakEven Calculator
              </h3>

              <p className="text-[#333] text-[24px] font-normal leading-normal tracking-[0.96px] ">
                Calculate the revenue needed to cover monthly costs and hit
                sustainability.
              </p>
            </span>

            {/* btn----------- */}
            <Link
              to="/signup"
              className="group text-[#333] w-46 h-15 px-[16px] py-[12px] flex flex-col justify-center items-center gap-[10px] rounded-[10px] border-solid border-[2px] border-[#333] hover:bg-[#333] hover:text-[white] transition-colors duration-200"
            >
              <span className="flex justify-center items-center gap-[8px] ">
                <p className=" text-[24px] font-semibold leading-normal ">
                  {" "}
                  Try Now
                </p>

                <FaArrowRight
                  size={22}
                  className="transition-transform duration-200 group-hover:translate-x-1"
                />
              </span>
            </Link>
          </span>
        </span>
      </div>
    </div>
  );
};

export default features;
