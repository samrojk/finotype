import React from 'react'
import { FaChevronDown } from "react-icons/fa6";
import { FiRefreshCcw, FiSave, FiTool } from "react-icons/fi";

const StartupForm = () => {
  return (
    <div className="mx-[42px] mt-[42px] flex flex-col justify-center items-center gap-[32px] ">
      {/* Main Field----------------- */}
      <form className="w-full max-w-[835px] flex flex-col justify-center items-center gap-[42px] ">

        {/* startup bar--------- */}
        <div className="w-full flex justify-between items-center self-stretch">
          <span className="px-[25px] py-[12px] flex justify-center items-center gap-[10px] rounded-[100px] border-[2px] border-solid border-[#D5D5D5] text-[#1A1A1A] text-[18px] font-medium leading-normal ">
            $ USD
            <FaChevronDown size={20} />

          </span>
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

                {/* ----------------------------------- */}
                <span className="flex justify-center items-center gap-[10px] ">
                  <p className="text-[#1A1A1A] text-[24px] font-normal leading-normal tracking-[0.96px]">$</p>
                  {/* ----------------------------------- */}
                  <span className="px-[25px] py-[12px] w-[168px] h-[52px] bg-[#FFF8F2] flex flex-col justify-center items-center gap-[10px] rounded-[100px] ">
                    {/* ----------------------------------- */}
                    <span className="flex justify-center items-center gap-[10px]">

                      <p className="text-[#1A1A1A] text-[18px] font-medium leading-normal ">One Time</p>
                      <FaChevronDown size={20} />
                    </span>

                  </span>
                </span>
              </span>
            </span>
          </span>

          {/* 3-------xxxxxxxxxxxxxxxxxxxxxx---------- */}
          <span className="w-full flex justify-center items-center gap-[10px] ">
            <span className="w-[225px] h-[64px] px-[25px] py-[12px] flex flex-col justify-center items-center gap-[10px] rounded-[100px] border-[2px] border-solid border-[#D5D5D5]">
              <p className="text-[rgb(26,26,26)] text-[18px] font-medium leading-normal">Subscription Costs</p>
            </span>

            {/* ----------------------------------- */}
            <span className="w-full max-w-[600px] h-[64px] py-[10px] flex flex-col justify-center items-center gap-[10px] rounded-[100px] border-[2px] border-solid border-[#F1F1F1] ">
              {/* ----------------------------------- */}
              <span className=" w-full max-w-[586px] flex justify-between items-center">
                {/* ----------------------------------- */}
                <input type="number" className=" px-[12px] w-full  text-[#1A1A1A] text-[18px] font-normal leading-normal tracking-[0.72px] outline-none focus:ring-0 selection:bg-[#EEBC73]" placeholder="enter all your subscription costs" />

                {/* ----------------------------------- */}
                <span className="flex justify-center items-center gap-[10px] ">
                  <p className="text-[#1A1A1A] text-[24px] font-normal leading-normal tracking-[0.96px]">$</p>
                  {/* ----------------------------------- */}
                  <span className="px-[25px] py-[12px] w-[168px] h-[52px] bg-[#FFF8F2] flex flex-col justify-center items-center gap-[10px] rounded-[100px] ">
                    {/* ----------------------------------- */}
                    <span className="flex justify-center items-center gap-[10px]">

                      <p className="text-[#1A1A1A] text-[18px] font-medium leading-normal ">Monthly</p>
                      <FaChevronDown size={20} />
                    </span>

                  </span>
                </span>
              </span>
            </span>
          </span>

          {/* 4-------xxxxxxxxxxxxxxxxxxxxxx---------- */}
          <span className="w-full flex justify-center items-center gap-[10px] ">
            <span className="w-[225px] h-[64px] px-[25px] py-[12px] flex flex-col justify-center items-center gap-[10px] rounded-[100px] border-[2px] border-solid border-[#D5D5D5]">
              <p className="text-[#1A1A1A] text-[18px] font-medium leading-normal">Legal & Licensing</p>
            </span>

            {/* ----------------------------------- */}
            <span className="w-full max-w-[600px] h-[64px] py-[10px] flex flex-col justify-center items-center gap-[10px] rounded-[100px] border-[2px] border-solid border-[#F1F1F1] ">
              {/* ----------------------------------- */}
              <span className=" w-full max-w-[586px] flex justify-between items-center">
                {/* ----------------------------------- */}
                <input type="number" className=" px-[12px] w-full  text-[#1A1A1A] text-[18px] font-normal leading-normal tracking-[0.72px] outline-none focus:ring-0 selection:bg-[#EEBC73]" placeholder="enter all your licensing costs" />

                {/* ----------------------------------- */}
                <span className="flex justify-center items-center gap-[10px] ">
                  <p className="text-[#1A1A1A] text-[24px] font-normal leading-normal tracking-[0.96px]">$</p>
                  {/* ----------------------------------- */}
                  <span className="px-[25px] py-[12px] w-[168px] h-[52px] bg-[#FFF8F2] flex flex-col justify-center items-center gap-[10px] rounded-[100px] ">
                    {/* ----------------------------------- */}
                    <span className="flex justify-center items-center gap-[10px]">

                      <p className="text-[#1A1A1A] text-[18px] font-medium leading-normal ">Yearly</p>
                      <FaChevronDown size={20} />
                    </span>

                  </span>
                </span>
              </span>
            </span>
          </span>

          {/* 5-------xxxxxxxxxxxxxxxxxxxxxx---------- */}
          <span className="w-full flex justify-center items-center gap-[10px] ">
            <span className="w-[225px] h-[64px] px-[25px] py-[12px] flex flex-col justify-center items-center gap-[10px] rounded-[100px] border-[2px] border-solid border-[#D5D5D5]">
              <p className="text-[#1A1A1A] text-[18px] font-medium leading-normal">Employee Costs</p>
            </span>

            {/* ----------------------------------- */}
            <span className="w-full max-w-[600px] h-[64px] py-[10px] flex flex-col justify-center items-center gap-[10px] rounded-[100px] border-[2px] border-solid border-[#F1F1F1] ">
              {/* ----------------------------------- */}
              <span className=" w-full max-w-[586px] flex justify-between items-center">
                {/* ----------------------------------- */}
                <input type="number" className=" px-[12px] w-full  text-[#1A1A1A] text-[18px] font-normal leading-normal tracking-[0.72px] outline-none focus:ring-0 selection:bg-[#EEBC73]" placeholder="enter all your employee costs" />
                {/* ----------------------------------- */}
                <span className="flex justify-center items-center gap-[10px] ">
                  <p className="text-[#1A1A1A] text-[24px] font-normal leading-normal tracking-[0.96px]">$</p>
                  {/* ----------------------------------- */}
                  <span className="px-[25px] py-[12px] w-[168px] h-[52px] bg-[#FFF8F2] flex flex-col justify-center items-center gap-[10px] rounded-[100px] ">
                    {/* ----------------------------------- */}
                    <span className="flex justify-center items-center gap-[10px]">

                      <p className="text-[#1A1A1A] text-[18px] font-medium leading-normal ">Monthly</p>
                      <FaChevronDown size={20} />
                    </span>

                  </span>
                </span>
              </span>
            </span>
          </span>

          {/* 6-------xxxxxxxxxxxxxxxxxxxxxx---------- */}
          <span className="w-full flex justify-center items-center gap-[10px] ">
            <span className="w-[225px] h-[64px] px-[25px] py-[12px] flex flex-col justify-center items-center gap-[10px] rounded-[100px] border-[2px] border-solid border-[#D5D5D5]">
              <p className="text-[#1A1A1A] text-[18px] font-medium leading-normal">Marketing Costs</p>
            </span>

            {/* ----------------------------------- */}
            <span className="w-full max-w-[600px] h-[64px] py-[10px] flex flex-col justify-center items-center gap-[10px] rounded-[100px] border-[2px] border-solid border-[#F1F1F1] ">
              {/* ----------------------------------- */}
              <span className=" w-full max-w-[586px] flex justify-between items-center">
                {/* ----------------------------------- */}
                <input type="number" className=" px-[12px] w-full  text-[#1A1A1A] text-[18px] font-normal leading-normal tracking-[0.72px] outline-none focus:ring-0 selection:bg-[#EEBC73]" placeholder="enter all your marketing costs" />

                {/* ----------------------------------- */}
                <span className="flex justify-center items-center gap-[10px] ">
                  <p className="text-[#1A1A1A] text-[24px] font-normal leading-normal tracking-[0.96px]">$</p>
                  {/* ----------------------------------- */}
                  <span className="px-[25px] py-[12px] w-[168px] h-[52px] bg-[#FFF8F2] flex flex-col justify-center items-center gap-[10px] rounded-[100px] ">
                    {/* ----------------------------------- */}
                    <span className="flex justify-center items-center gap-[10px]">

                      <p className="text-[#1A1A1A] text-[18px] font-medium leading-normal ">Monthly</p>
                      <FaChevronDown size={20} />
                    </span>

                  </span>
                </span>
              </span>
            </span>
          </span>

          {/* 7-------xxxxxxxxxxxxxxxxxxxxxx---------- */}
          <span className="w-full flex justify-center items-center gap-[10px] ">
            <span className="w-[225px] h-[64px] px-[25px] py-[12px] flex flex-col justify-center items-center gap-[10px] rounded-[100px] border-[2px] border-solid border-[#D5D5D5]">
              <p className="text-[#1A1A1A] text-[18px] font-medium leading-normal">Emergency Funds</p>
            </span>

            {/* ----------------------------------- */}
            <span className="w-full max-w-[600px] h-[64px] py-[10px] flex flex-col justify-center items-center gap-[10px] rounded-[100px] border-[2px] border-solid border-[#F1F1F1] ">
              {/* ----------------------------------- */}
              <span className=" w-full max-w-[586px] flex justify-between items-center">
                {/* ----------------------------------- */}
                <input type="number" className=" px-[12px] w-full  text-[#1A1A1A] text-[18px] font-normal leading-normal tracking-[0.72px] outline-none focus:ring-0 selection:bg-[#EEBC73]" placeholder="enter all your monthly expenses" />

                {/* ----------------------------------- */}
                <span className="flex justify-center items-center gap-[10px] ">
                  <p className="text-[#1A1A1A] text-[24px] font-normal leading-normal tracking-[0.96px]">$</p>
                  {/* ----------------------------------- */}
                  <span className="px-[25px] py-[12px] w-[168px] h-[52px] bg-[#FFF8F2] flex flex-col justify-center items-center gap-[10px] rounded-[100px] ">
                    {/* ----------------------------------- */}
                    <span className="flex justify-center items-center gap-[10px]">

                      <p className="text-[#1A1A1A] text-[18px] font-medium leading-normal ">Yearly</p>
                      <FaChevronDown size={20} />
                    </span>

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

export default StartupForm;