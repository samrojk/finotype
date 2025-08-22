import React from "react";
import Line from "../assets/Line";
import { FaCheckCircle } from "react-icons/fa";

const pricing = () => {
  return (
    <div className="mx-[42px] mt-[28px] flex flex-col gap-10.5 justify-items-center">
      <div className="h-15.5 text-4xl font-medium flex flex-col justify-between items-center ">
        <span className="tracking-[1.12px]">Our Pricing!</span>
        <Line />
      </div>

      <div className="flex flex-row gap-10 justify-center">
        {/* card-1 Basic plan */}
        <div class="w-[350px] p-4 bg-[#FFF8F2] border border-gray-200 rounded-lg shadow-sm">
          <h5 class="mb-4 text-xl font-medium text-gray-500">Basic plan</h5>
          <div class="flex items-baseline text-gray-900">
            <span class="text-3xl font-semibold">$</span>
            <span class="text-5xl font-extrabold tracking-tight">5</span>
            <span class="ms-1 text-xl font-normal text-gray-500">/month</span>
          </div>
          <ul role="list" class="space-y-5 my-7">
            <li class="flex items-center">
              <FaCheckCircle className="text-amber-500" />
              <span class="text-base font-normal leading-tight text-gray-500 ms-3">
                Single user
              </span>
            </li>
            <li class="flex">
              <FaCheckCircle className="text-amber-500" />
              <span class="text-base font-normal leading-tight text-gray-500 ms-3">
                500MB Cloud storage
              </span>
            </li>
            <li class="flex">
              <FaCheckCircle className="text-amber-500" />
              <span class="text-base font-normal leading-tight text-gray-500 ms-3">
                10 files/day
              </span>
            </li>
            <li class="flex line-through decoration-gray-500">
              <FaCheckCircle className="text-gray-400" />
              <span class="text-base font-normal leading-tight text-gray-500 ms-3">
                Download Files
              </span>
            </li>
            <li class="flex line-through decoration-gray-500">
              <FaCheckCircle className="text-gray-400" />
              <span class="text-base font-normal leading-tight text-gray-500 ms-3">
                API Access
              </span>
            </li>
            <li class="flex line-through decoration-gray-500">
              <FaCheckCircle className="text-gray-400" />
              <span class="text-base font-normal leading-tight text-gray-500 ms-3">
                Recover deleted files
              </span>
            </li>
            <li class="flex line-through decoration-gray-500">
              <FaCheckCircle className="text-gray-400" />
              <span class="text-base font-normal leading-tight text-gray-500 ms-3">
                24×7 customer support
              </span>
            </li>
          </ul>
          <button
            type="button"
            class="text-white bg-[#202020] hover:bg-black focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center"
          >
            Choose plan
          </button>
        </div>

        {/* card-2 Standard plan*/}
        <div class="w-[350px] p-4 bg-[#FFF8F2] border border-gray-200 rounded-lg shadow-sm">
          <h5 class="mb-4 text-xl font-medium text-gray-500">Standard plan</h5>
          <div class="flex items-baseline text-gray-900">
            <span class="text-3xl font-semibold">$</span>
            <span class="text-5xl font-extrabold tracking-tight">29</span>
            <span class="ms-1 text-xl font-normal text-gray-500">/month</span>
          </div>
          <ul role="list" class="space-y-5 my-7">
            <li class="flex items-center">
              <FaCheckCircle className="text-amber-500" />
              <span class="text-base font-normal leading-tight text-gray-500 ms-3">
                2 team members
              </span>
            </li>
            <li class="flex">
              <FaCheckCircle className="text-amber-500" />
              <span class="text-base font-normal leading-tight text-gray-500 ms-3">
                2GB Cloud storage
              </span>
            </li>
            <li class="flex">
              <FaCheckCircle className="text-amber-500" />
              <span class="text-base font-normal leading-tight text-gray-500 ms-3">
                50 files/day
              </span>
            </li>
            <li class="flex">
              <FaCheckCircle className="text-amber-500" />
              <span class="text-base font-normal leading-tight text-gray-500 ms-3">
                10 downloads/day
              </span>
            </li>
            <li class="flex line-through decoration-gray-500">
              <FaCheckCircle className="text-gray-400" />
              <span class="text-base font-normal leading-tight text-gray-500 ms-3">
                API Access
              </span>
            </li>
            <li class="flex line-through decoration-gray-500">
              <FaCheckCircle className="text-gray-400" />
              <span class="text-base font-normal leading-tight text-gray-500 ms-3">
                Recover deleted files
              </span>
            </li>
            <li class="flex line-through decoration-gray-500">
              <FaCheckCircle className="text-gray-400" />
              <span class="text-base font-normal leading-tight text-gray-500 ms-3">
                24×7 customer support
              </span>
            </li>
          </ul>
          <button
            type="button"
            class="text-white bg-[#202020] hover:bg-black focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center"
          >
            Choose plan
          </button>
        </div>

        {/* card-3 Enterprise plan*/}
        <div class="w-[350px] p-4 bg-[#FFF8F2] border border-gray-200 rounded-lg shadow-sm">
          <h5 class="mb-4 text-xl font-medium text-gray-500">
            Enterprise plan
          </h5>
          <div class="flex items-baseline text-gray-900">
            <span class="text-3xl font-semibold">$</span>
            <span class="text-5xl font-extrabold tracking-tight">49</span>
            <span class="ms-1 text-xl font-normal text-gray-500">/month</span>
          </div>
          <ul role="list" class="space-y-5 my-7">
            <li class="flex items-center">
              <FaCheckCircle className="text-amber-500" />
              <span class="text-base font-normal leading-tight text-gray-500 ms-3">
                5 team members
              </span>
            </li>
            <li class="flex">
              <FaCheckCircle className="text-amber-500" />
              <span class="text-base font-normal leading-tight text-gray-500 ms-3">
                10GB Cloud storage
              </span>
            </li>
            <li class="flex">
              <FaCheckCircle className="text-amber-500" />
              <span class="text-base font-normal leading-tight text-gray-500 ms-3">
                No file creation limit
              </span>
            </li>
            <li class="flex decoration-gray-500">
              <FaCheckCircle className="text-amber-500" />
              <span class="text-base font-normal leading-tight text-gray-500 ms-3">
                No Download limit
              </span>
            </li>
            <li class="flex decoration-gray-500">
              <FaCheckCircle className="text-amber-500" />
              <span class="text-base font-normal leading-tight text-gray-500 ms-3">
                API Access
              </span>
            </li>
            <li class="flex decoration-gray-500">
              <FaCheckCircle className="text-amber-500" />
              <span class="text-base font-normal leading-tight text-gray-500 ms-3">
                Recover deleted files
              </span>
            </li>
            <li class="flex decoration-gray-500">
              <FaCheckCircle className="text-amber-500" />
              <span class="text-base font-normal leading-tight text-gray-500 ms-3">
                24×7 customer support
              </span>
            </li>
          </ul>
          <button
            type="button"
            class="text-white bg-[#202020] hover:bg-black focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center"
          >
            Choose plan
          </button>
        </div>
      </div>
    </div>
  );
};

export default pricing;
