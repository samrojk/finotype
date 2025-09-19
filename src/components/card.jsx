import React from "react";
import { FaFileLines } from "react-icons/fa6";
import { IoWalletSharp, IoPieChart } from "react-icons/io5";
import Line from "../assets/Line";
import { motion } from "framer-motion";

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.2, ease: "easeOut" },
  }),
};

const Card = () => {
  return (
    <div className="mx-[42px] mt-[100px] flex flex-col justify-center items-center gap-10.5">
      <div className=" h-15.5 text-4xl font-medium flex flex-col justify-between items-center">
        <span className="tracking-[1.12px]">How it works?</span>
        <Line />
      </div>

      {/* How it works? CARDS________ */}
      <div className=" w-[100%] flex justify-center items-center self-stretch gap-[80px]">
        {/* card 1________ */}
        <motion.span
          custom={0}
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="bg-[#F3E6DD] w-103 h-80 px-3.5 py-3 flex flex-col justify-center items-center gap-2.5 rounded-[20px] transition-colors duration-300"
        >
          <span className="w-96 flex flex-col justify-center items-center gap-3">
            <span className="w-[100%] flex items-center gap-[6px] self-stretch">
              <span className="bg-[#FFF8F2] w-19.5 h-19.5 p-[15.853px] flex justify-center items-center gap-[11.324px] aspect-square rounded-[38.5px] ">
                <span className="w-[45.294px] h-[45.294px] flex justify-center items-center shrink-0 aspect-square">
                  <FaFileLines className="w-[30.195px] h-[37.745px]" />
                </span>
              </span>
              <span className="bg-[#FFF8F2] w-75 h-19.5 px-8 py-3.75 flex justify-center items-center gap-2.5 rounded-[100px] ">
                <h3 className="text-[#333] text-[28px] font-medium leading-normal tracking-[1.12px] ">
                  Add expenses
                </h3>
              </span>
            </span>
            <span className="bg-[#FFF8F2] w-[100%] h-50 px-8 py-6 flex justify-center items-center self-stretch gap-3 rounded-[20px]">
              <p className="w-81 text-[#000] text-[24px] text-center italic font-light leading-normal">
                ~ Add all your startup costs from tools to freelancers in one
                clean, simple interface.
              </p>
            </span>
          </span>
        </motion.span>

        {/* card 2________ */}
        <motion.span
          custom={1}
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="bg-[#F3E6DD] w-103 h-80 px-3.5 py-3 flex flex-col justify-center items-center gap-2.5 rounded-[20px] transition-colors duration-300"
        >
          <span className="w-96 flex flex-col justify-center items-center gap-3">
            <span className="w-[100%] flex items-center gap-[6px] self-stretch">
              <span className="bg-[#FFF8F2] w-19.5 h-19.5 p-[15.853px] flex justify-center items-center gap-[11.324px] aspect-square rounded-[38.5px] ">
                <span className="w-[45.294px] h-[45.294px] flex justify-center items-center shrink-0 aspect-square">
                  <IoWalletSharp className="w-[43.29px] h-[43.29px]" />
                </span>
              </span>
              <span className="bg-[#FFF8F2] w-75 h-19.5 px-8 py-3.75 flex justify-center items-center gap-2.5 rounded-[100px] ">
                <h3 className="text-[#333] text-[28px] font-medium leading-normal tracking-[1.12px] ">
                  Set capital
                </h3>
              </span>
            </span>
            <span className="bg-[#FFF8F2] w-[100%] h-50 px-8 py-6 flex justify-center items-center self-stretch gap-3 rounded-[20px]">
              <p className="w-81 text-[#000] text-[24px] text-center italic font-light leading-normal">
                ~ Input how much you’ve raised or saved to instantly calculate
                burn rate and financial runway.
              </p>
            </span>
          </span>
        </motion.span>

        {/* card 3________ */}
        <motion.span
          custom={2}
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="bg-[#F3E6DD] w-103 h-80 px-3.5 py-3 flex flex-col justify-center items-center gap-2.5 rounded-[20px] transition-colors duration-300"
        >
          <span className="w-96 flex flex-col justify-center items-center gap-3">
            <span className="w-[100%] flex items-center gap-[6px] self-stretch">
              <span className="bg-[#FFF8F2] w-19.5 h-19.5 p-[15.853px] flex justify-center items-center gap-[11.324px] aspect-square rounded-[38.5px] ">
                <span className="w-[45.294px] h-[45.294px] flex justify-center items-center shrink-0 aspect-square">
                  <IoPieChart className="w-[45.29px] h-[45.29px]" />
                </span>
              </span>
              <span className="bg-[#FFF8F2] w-75 h-19.5 px-8 py-3.75 flex justify-center items-center gap-2.5 rounded-[100px] ">
                <h3 className="text-[#333] text-[28px] font-medium leading-normal tracking-[1.12px] ">
                  See runway
                </h3>
              </span>
            </span>
            <span className="bg-[#FFF8F2] w-[100%] h-50 px-8 py-6 flex justify-center items-center self-stretch gap-3 rounded-[20px]">
              <p className="w-81 text-[#000] text-[24px] text-center italic font-light leading-normal">
                ~ See where your money’s going with clear charts, real-time
                runway, and easy PDF exports.
              </p>
            </span>
          </span>
        </motion.span>
      </div>
    </div>
  );
};

export default Card;
