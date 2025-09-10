// import React, { useState } from "react";
import React, { useState } from 'react'
import { FaChevronDown } from "react-icons/fa6";
import { FiRefreshCcw, FiSave, FiTool } from "react-icons/fi";


const RunwayForm = () => {

  // Dropdown for $ / ₹ toggle
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isDropdownOpen2, setIsDropdownOpen2] = useState(false);
  const [isDropdownOpen3, setIsDropdownOpen3] = useState(false);
  const [isDropdownOpen4, setIsDropdownOpen4] = useState(false);

  // State for currency
  const [currency, setCurrency] = useState("usd");

  // Mapping for symbols
  const currencySymbols = {
    usd: "$",
    inr: "₹",
  };

  return (
    <div className="mx-[42px] mt-[42px] flex flex-col justify-center items-center gap-[32px] ">
      {/* Main Field----------------- */}
      <form className="w-full max-w-[835px] flex flex-col justify-center items-center gap-[42px] ">

        {/* startup bar--------- */}
        <div className="w-full flex justify-between items-center self-stretch">

          {/* Dropdown for $ / ₹ toggle */}
          <div className="relative ">
            <select onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              value={currency}
              onChange={(e) => setCurrency(e.target.value)}
              className=" appearance-none px-[25px] py-[12px] pr-[50px] flex justify-center items-center rounded-[100px] border-[2px] border-solid border-[#D5D5D5] text-[#1A1A1A] text-[18px] font-medium leading-normal  focus:outline-none "
            >
              <option value="usd" className="bg-[#F3E6DD] ">$ USD</option>
              <option value="inr" className="bg-[#F3E6DD] ">₹ INR</option>
            </select>
            <FaChevronDown
              size={18}
              className={`absolute right-5 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none transition-transform duration-200 ${isDropdownOpen ? "rotate-180" : "rotate-0"
                }`}
            />
          </div>

          <span className="flex justify-center items-center gap-[10px]">
            <span className="px-[25px] py-[12px] flex justify-center items-center gap-[10px] rounded-[100px] border-[2px] border-solid border-[#D5D5D5] text-[#1A1A1A] text-[18px] font-medium leading-normal ">
              Reset
              <FiRefreshCcw size={20} />
            </span>
            <span className="px-[25px] py-[12px] flex justify-center items-center gap-[10px] rounded-[100px] border-[2px] border-solid border-[#D5D5D5] text-[#1A1A1A] text-[18px] font-medium leading-normal ">
              Save
              <FiSave size={20} />
            </span>
          </span>
        </div>

        {/* main-box------------ */}
        <div className="w-full flex flex-col justify-center items-center self-stretch gap-[20px]">

          {/* 1-------xxxxxxxxxxxxxxxxxxxxxx---------- */}
          <span className="w-full flex justify-center items-center gap-[10px] ">
            <span className="w-[225px] h-[64px] px-[25px] py-[12px] flex flex-col justify-center items-center gap-[10px] rounded-[100px] border-[2px] border-solid border-[#D5D5D5]">
              <p className="text-[#1A1A1A] text-[18px] font-medium leading-normal">Business Title</p>
            </span>

            {/* ----------------------------------- */}
            <span className="w-full max-w-[600px] h-[64px] py-[10px] flex flex-col justify-center items-center gap-[10px] rounded-[100px] border-[2px] border-solid border-[#F1F1F1] ">
              {/* ----------------------------------- */}
              <span className=" w-full max-w-[586px] flex items-center">
                {/* ----------------------------------- */}
                <input type="text" className=" px-[12px] w-full text-[#1A1A1A] text-[18px] font-normal leading-normal tracking-[0.72px] outline-none focus:ring-0 selection:bg-[#EEBC73]" placeholder="enter your startup name" />
              </span>
            </span>
          </span>

          {/* 2-------xxxxxxxxxxxxxxxxxxxxxx---------- */}
          <span className="w-full flex justify-center items-center gap-[10px] ">
            <span className="w-[225px] h-[64px] px-[25px] py-[12px] flex flex-col justify-center items-center gap-[10px] rounded-[100px] border-[2px] border-solid border-[#D5D5D5]">
              <p className="text-[#1A1A1A] text-[18px] font-medium leading-normal">Total Funds</p>
            </span>

            {/* ----------------------------------- */}
            <span className="w-full max-w-[600px] h-[64px] py-[10px] flex flex-col justify-center items-center gap-[10px] rounded-[100px] border-[2px] border-solid border-[#F1F1F1] ">
              {/* ----------------------------------- */}
              <span className=" w-full max-w-[586px] flex justify-between items-center">
                {/* ----------------------------------- */}
                <input type="number" className=" px-[12px] w-full  text-[#1A1A1A] text-[18px] font-normal leading-normal tracking-[0.72px] outline-none focus:ring-0 selection:bg-[#EEBC73]" placeholder="enter all your funds & investments" />

                {/* Currency----------------------------------- */}
                <span className="flex justify-center items-center gap-[10px] ">
                  <p className="text-[#1A1A1A] text-[24px] font-normal leading-normal tracking-[0.96px]">{currencySymbols[currency]}</p>
                  {/* ----------------------------------- */}
                  <span className="px-[25px] py-[12px] w-[168px] h-[52px] bg-[#FFF8F2] flex flex-col justify-center items-center gap-[10px] rounded-[100px] ">
                    {/* ----------------------------------- */}
                    <div className="relative flex justify-center items-center gap-[10px] ">
                      <select onClick={() => setIsDropdownOpen2(!isDropdownOpen2)} onChange={""} className=" appearance-none px-[25px] py-[12px] pr-[40px] text-[#1A1A1A] text-[18px] font-medium leading-normal  focus:outline-none  "
                      >
                        <option value="onetime" className="bg-[#F3E6DD] ">One Time</option>
                        <option value="monthly" className="bg-[#F3E6DD] ">Monthly</option>
                        <option value="yearly" className="bg-[#F3E6DD] ">Yearly</option>
                      </select>
                      <FaChevronDown
                        size={18}
                        className={`absolute right-5 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none transition-transform duration-200 ${isDropdownOpen2 ? "rotate-180" : "rotate-0"
                          }`}
                      />
                    </div>
                  </span>
                </span>
              </span>
            </span>
          </span>

          {/* 3-------xxxxxxxxxxxxxxxxxxxxxx---------- */}
          <span className="w-full flex justify-center items-center gap-[10px] ">
            <span className="w-[225px] h-[64px] px-[25px] py-[12px] flex flex-col justify-center items-center gap-[10px] rounded-[100px] border-[2px] border-solid border-[#D5D5D5]">
              <p className="text-[rgb(26,26,26)] text-[18px] font-medium leading-normal">Burn Rate</p>
            </span>

            {/* ----------------------------------- */}
            <span className="w-full max-w-[600px] h-[64px] py-[10px] flex flex-col justify-center items-center gap-[10px] rounded-[100px] border-[2px] border-solid border-[#F1F1F1] ">
              {/* ----------------------------------- */}
              <span className=" w-full max-w-[586px] flex justify-between items-center">
                {/* ----------------------------------- */}
                <input type="number" className=" px-[12px] w-full  text-[#1A1A1A] text-[18px] font-normal leading-normal tracking-[0.72px] outline-none focus:ring-0 selection:bg-[#EEBC73]" placeholder="enter your total monthly expenses" />

                {/* Currency----------------------------------- */}
                <span className="flex justify-center items-center gap-[10px] ">
                  <p className="text-[#1A1A1A] text-[24px] font-normal leading-normal tracking-[0.96px]">{currencySymbols[currency]}</p>
                  {/* ----------------------------------- */}
                  <span className="px-[25px] py-[12px] w-[168px] h-[52px] bg-[#FFF8F2] flex flex-col justify-center items-center gap-[10px] rounded-[100px] ">
                    {/* ----------------------------------- */}

                    <div className="relative flex justify-center items-center gap-[10px] ">
                      <select onClick={() => setIsDropdownOpen3(!isDropdownOpen3)} onChange={""} className=" appearance-none px-[25px] py-[12px] pr-[40px] text-[#1A1A1A] text-[18px] font-medium leading-normal  focus:outline-none  "
                      >
                        <option value="onetime" className="bg-[#F3E6DD] ">One Time</option>
                        <option value="monthly" className="bg-[#F3E6DD] ">Monthly</option>
                        <option value="yearly" className="bg-[#F3E6DD] ">Yearly</option>
                      </select>
                      <FaChevronDown
                        size={18}
                        className={`absolute right-5 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none transition-transform duration-200 ${isDropdownOpen3 ? "rotate-180" : "rotate-0"
                          }`}
                      />
                    </div>

                  </span>
                </span>
              </span>
            </span>
          </span>

          {/* 4-------xxxxxxxxxxxxxxxxxxxxxx---------- */}
          <span className="w-full flex justify-center items-center gap-[10px] ">
            <span className="w-[225px] h-[64px] px-[25px] py-[12px] flex flex-col justify-center items-center gap-[10px] rounded-[100px] border-[2px] border-solid border-[#D5D5D5]">
              <p className="text-[#1A1A1A] text-[18px] font-medium leading-normal">Revenue</p>
            </span>

            {/* ----------------------------------- */}
            <span className="w-full max-w-[600px] h-[64px] py-[10px] flex flex-col justify-center items-center gap-[10px] rounded-[100px] border-[2px] border-solid border-[#F1F1F1] ">
              {/* ----------------------------------- */}
              <span className=" w-full max-w-[586px] flex justify-between items-center">
                {/* ----------------------------------- */}
                <input type="number" className=" px-[12px] w-full  text-[#1A1A1A] text-[18px] font-normal leading-normal tracking-[0.72px] outline-none focus:ring-0 selection:bg-[#EEBC73]" placeholder="enter your expected monthly revenue" />

                {/* Currency----------------------------------- */}
                <span className="flex justify-center items-center gap-[10px] ">
                  <p className="text-[#1A1A1A] text-[24px] font-normal leading-normal tracking-[0.96px]">{currencySymbols[currency]}</p>
                  {/* ----------------------------------- */}
                  <span className="px-[25px] py-[12px] w-[168px] h-[52px] bg-[#FFF8F2] flex flex-col justify-center items-center gap-[10px] rounded-[100px] ">
                    {/* ----------------------------------- */}

                    <div className="relative flex justify-center items-center gap-[10px] ">
                      <select onClick={() => setIsDropdownOpen4(!isDropdownOpen4)} onChange={""} className=" appearance-none px-[25px] py-[12px] pr-[40px] text-[#1A1A1A] text-[18px] font-medium leading-normal  focus:outline-none  "
                      >
                        <option value="onetime" className="bg-[#F3E6DD] ">One Time</option>
                        <option value="monthly" className="bg-[#F3E6DD] ">Monthly</option>
                        <option value="yearly" className="bg-[#F3E6DD] ">Yearly</option>
                      </select>
                      <FaChevronDown
                        size={18}
                        className={`absolute right-5 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none transition-transform duration-200 ${isDropdownOpen4 ? "rotate-180" : "rotate-0"
                          }`}
                      />
                    </div>
                  </span>
                </span>
              </span>
            </span>
          </span>
        </div>

        {/* calculate-btn------------ */}
        <button type="submit" className="bg-[#1A1A1A] px-[33px] py-[12px] flex justify-center items-center rounded-[100px] gap-[10px] text-[#FFF] text-[24px] font-medium leading-normal  ">
          Calculate <FiTool size={20} />

        </button>
      </form>
    </div>
  )
}

export default RunwayForm