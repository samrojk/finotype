import React from 'react'
import HeroImg from "../assets/hero-image.jpg";
import { FaArrowRight } from "react-icons/fa6";
import { FaChevronRight } from "react-icons/fa";


const hero = () => {
  return (
    <div className=" w-330 mx-15 mt-11 mb-11">

        {/* hero section__________ */}
        <div className=" w-330 h-171.25 flex justify-between items-center">

          {/* hero text __________________ */}
          <div className=" w-156 h-152.5 flex flex-col items-start gap-13.5 shrink-0">

            {/* hero text____________________ */}
            <div className=" w-156 h-88 flex flex-col items-start gap-4 self-stretch">

              {/* see demo video_____ */}
              <span className=" w-94.25 h-8 flex items-center gap-2.5">
                <p className="text-[#000] text-[18px] font-normal leading-[32px] ">Want to know what finotype is?</p>
                <button  className="bg-[#F3E6DD] text-[#1E1E1E] flex w-22 h-8 px-[18px] flex-col justify-between items-center  rounded-[100px] hover:bg-[#E7D0BE]">
                <a href="https://www.youtube.com/" target="_blank">
                  <span className="flex justify-center items-center gap-0.5">

                    <span className="text-[#000] text-[14px] font-normal leading-[32px] flex justify-center items-center">DEMO</span>   
                    <FaChevronRight size={12}/>

                  </span>
                  </a>
                </button>
              </span>

              {/* hero text 1_____ */}
              <p className="text-[#000] text-[82px] font-medium leading-[112px] tracking-[3.28px]">Spend wisely.
                Plan smart.</p>

              {/* hero text 2_____ */}
              <p className="w-121.75 h-16 text-[#000] text-[20px] font-normal leading-[32px] tracking-[0.6px] whitespace-break-spaces">Visualize your startup costs, manage   capital, and calculate runway all in one place.</p>

            </div>

            {/* get start btn__________ */}
            <button className="bg-[#000] text-[#fff] w-57.5 h-18.5 px-8 py-4.75 flex flex-col justify-center items-center rounded-[6px] gap-[10px] shrink-0 hover:bg-[#333333]">

              <span className="w-41.5 h-9 flex justify-between items-center gap-1">

                <span className="w-34.5 h-9  text-2xl font-medium flex justify-center items-center ">
                  Get Started
                </span>

                <FaArrowRight size={22}/>
              </span>
            </button>
          </div>


          {/* hero image __________________ */}
          <div className="w-171.25 h- 171.25">
            <img className=" w-171.25 h- 171.25" src={HeroImg} alt="" />
          </div>
        </div>

      </div>
  )
}

export default hero
