import React from "react";
import Line from "../assets/Line";
import { IoLogoGithub } from "react-icons/io5";
import { FaLinkedin } from "react-icons/fa6";
import { FaCheckCircle } from "react-icons/fa";
import Profile1 from "../assets/profile1.jpeg";
import Profile2 from "../assets/profile2.png";

const contibutors = () => {
  return (
    <div className="mx-[42px] mt-[100px] flex flex-col gap-10.5 justify-items-center">
      {/* heading------------ */}
      <div className=" h-15.5 text-4xl font-medium flex flex-col justify-between items-center ">
        <span className="tracking-[1.12px]">Contributors</span>
        <Line />
      </div>

      {/* card outer box */}
      <div className="h-100 flex items-center gap-12">
        {/* contributers card 1_____ */}

        <div className="bg-[#F3E6DD] px-7.25 py-5.5 w-130 h-100 rounded-[10px] flex items-center ">
          {/* main box */}
          <div className=" w-115 h-85.5 flex flex-col gap-5">
            {/* profile details_____ */}
            <span className="h-18.5 gap-4 flex">
              {/* w-71.75 */}
              <img
                src={Profile1}
                alt="Profile Picture"
                className="h-[74px] rounded-full"
              />
              <span className="  h-18.5 flex flex-col justify-between ">
                {/* w-49.25 */}
                <span className=" flex justify-between items-center gap-2 ">
                  <span className="font-Poppins text-2xl font-medium tracking-[0.96px]">
                    Samroj Khan
                  </span>
                  <FaCheckCircle />
                </span>
                <span className="bg-[#FFF8F2] w-45 h-8.5 rounded-[10px] flex justify-center items-center">
                  <span className="text-[#939393] text-base font-normal">
                    Frontend Engineer
                  </span>
                </span>
              </span>
            </span>

            {/* text message__________box */}

            <p className="bg-[#FFF8F2] w-115 h-47 px-7.75 py-6 rounded-[10px] text-[#333] text-xl font-light italic leading-[28px] tracking-[0.8px] text-center">
              ~Designed and developed the user interface, crafted user
              experience flows, and implemented responsive layouts using modern
              React and Tailwind components.
            </p>

            {/* github and linkdin buttons */}
            <span className="w-73.75 h-10 flex justify-between items-center gap-2.5">
              <a
                href="https://github.com/samrojk"
                target="_blank"
                className="bg-[#333333] rounded-[10px] w-34 h-10 flex text-white justify-center items-center gap-1.5 text-lg font-medium  hover:bg-[#000] transition-colors duration-200"
              >
                GitHub
                <IoLogoGithub className="w-5 h-5" />
              </a>
              {/* Linkdin button */}
              <a
                href="https://www.linkedin.com/in/samrojkhan"
                target="_blank"
                className="bg-[#333333] rounded-[10px] w-37.25 h-10 flex text-white justify-center items-center gap-1.5 text-lg font-medium  hover:bg-[#000] transition-colors duration-200"
              >
                LinkedIn
                <FaLinkedin className="w-5 h-5" />
              </a>
            </span>
          </div>
        </div>

        {/* contributers card 2_____ */}

        <div className="bg-[#F3E6DD] px-7.25 py-5.5 w-130 h-100 rounded-[10px] flex items-center ">
          {/* main box */}
          <div className=" w-115 h-85.5 flex flex-col gap-5">
            {/* profile details_____ */}
            <span className="h-18.5 gap-4 flex">
              {/* w-71.75 */}
              <img
                src={Profile2}
                alt="Profile Picture"
                className="h-[74px] rounded-full"
              />
              <span className="  h-18.5 flex flex-col justify-between ">
                {/* w-49.25 */}
                <span className=" flex justify-between items-center gap-2 ">
                  <span className="font-Poppins text-2xl font-medium tracking-[0.96px]">
                    Pushpendra
                  </span>
                  <FaCheckCircle />
                </span>
                <span className="bg-[#FFF8F2] w-45 h-8.5 rounded-[10px] flex justify-center items-center">
                  <span className="text-[#939393] text-base font-normal">
                    MERN Developer
                  </span>
                </span>
              </span>
            </span>

            {/* text message__________box */}

            <p className="bg-[#FFF8F2] w-115 h-47 px-7.75 py-6 rounded-[10px] text-[#333] text-xl font-light italic leading-[28px] tracking-[0.8px] text-center">
              ~Built and integrated backend APIs, implemented authentication,
              connected database logic, and supported frontend integration
              across the MERN stack efficiently.
            </p>

            {/* github and linkdin buttons */}
            <span className="w-73.75 h-10 flex justify-between items-center gap-2.5">
              <a
                href="https://github.com/Pushpendra081"
                target="_blank"
                className="bg-[#333333] rounded-[10px] w-34 h-10 flex text-white justify-center items-center gap-1.5 text-lg font-medium  hover:bg-[#000] transition-colors duration-200"
              >
                GitHub
                <IoLogoGithub className="w-5 h-5" />
              </a>
              {/* Linkdin button */}
              <a
                href="https://www.linkedin.com/in/pushpendravishwakarma"
                target="_blank"
                className="bg-[#333333] rounded-[10px] w-37.25 h-10 flex text-white justify-center items-center gap-1.5 text-lg font-medium  hover:bg-[#000] transition-colors duration-200"
              >
                LinkedIn
                <FaLinkedin className="w-5 h-5" />
              </a>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default contibutors;
