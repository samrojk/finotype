import React from "react";
import Line from "../assets/Line";
import { FaCheckCircle } from "react-icons/fa";
import { motion } from "framer-motion";

// Card animation variants
const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

const Pricing = () => {
  return (
    <div className="mx-[42px] mt-[28px] flex flex-col gap-10.5 justify-items-center">
      {/* Heading (no animation here) */}
      <div className="h-15.5 text-4xl font-medium flex flex-col justify-between items-center ">
        <span className="tracking-[1.12px]">Our Pricing!</span>
        <Line />
      </div>

      {/* Cards */}
      <div className="flex flex-row gap-10 justify-center">
        {[
          {
            title: "Basic plan",
            price: 5,
            features: ["Single user", "500MB Cloud storage", "10 files/day"],
            disabled: [
              "Download Files",
              "API Access",
              "Recover deleted files",
              "24×7 customer support",
            ],
          },
          {
            title: "Standard plan",
            price: 29,
            features: [
              "2 team members",
              "2GB Cloud storage",
              "50 files/day",
              "10 downloads/day",
            ],
            disabled: [
              "API Access",
              "Recover deleted files",
              "24×7 customer support",
            ],
          },
          {
            title: "Enterprise plan",
            price: 49,
            features: [
              "5 team members",
              "10GB Cloud storage",
              "No file creation limit",
              "No Download limit",
              "API Access",
              "Recover deleted files",
              "24×7 customer support",
            ],
            disabled: [],
          },
        ].map((plan, index) => (
          <motion.div
            key={index}
            className="w-[350px] p-4 bg-[#FFF8F2] border border-gray-200 rounded-lg shadow-sm"
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
          >
            <h5 className="mb-4 text-xl font-medium text-gray-500">
              {plan.title}
            </h5>
            <div className="flex items-baseline text-gray-900">
              <span className="text-3xl font-semibold">$</span>
              <span className="text-5xl font-extrabold tracking-tight">
                {plan.price}
              </span>
              <span className="ms-1 text-xl font-normal text-gray-500">
                /month
              </span>
            </div>

            <ul role="list" className="space-y-5 my-7">
              {plan.features.map((f, i) => (
                <li className="flex items-center" key={i}>
                  <FaCheckCircle className="text-amber-500" />
                  <span className="text-base font-normal leading-tight text-gray-500 ms-3">
                    {f}
                  </span>
                </li>
              ))}
              {plan.disabled.map((f, i) => (
                <li className="flex line-through decoration-gray-500" key={i}>
                  <FaCheckCircle className="text-gray-400" />
                  <span className="text-base font-normal leading-tight text-gray-500 ms-3">
                    {f}
                  </span>
                </li>
              ))}
            </ul>

            <button
              type="button"
              className="text-white bg-[#202020] hover:bg-black focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center"
            >
              Choose plan
            </button>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
