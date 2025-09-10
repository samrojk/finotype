import React, { useState } from "react";
import { PiDownloadSimpleBold } from "react-icons/pi";
import { FiHome, FiEdit } from "react-icons/fi";
import { LuTrash2, LuArrowUpRight } from "react-icons/lu";

const RunwayResult = () => {
    const [selected, setSelected] = useState(null);
    const cards = [
        {
            id: 1,
            title: "Total Funding",
            amount: "$50,000",
            subText: "This is the total money you had",
        },
        {
            id: 2,
            title: "Runway Duration",
            amount: "7 months",
            subText: "This is how many months you can operate.",
        },
        {
            id: 3,
            title: "Monthly Burn",
            amount: "$7,000",
            subText: "This is the money you spend every month.",
        },
        {
            id: 4,
            title: "Projected End Date",
            amount: "April 2026",
            subText: "This is when your funds are expected to end.",
        },
    ];

    return (
        <div className="mx-[42px] mt-[42px] flex flex-col justify-center items-center gap-[32px] ">
            <div className="w-full max-w-[800px] flex flex-col justify-center items-center gap-[32px]">
                {/* Heading */}
                <h3 className="text-[#000] text-[36px] font-medium leading-normal tracking-[1.44px] ">
                    Result
                </h3>

                {/* Cards grid */}
                <div className="grid grid-cols-2 gap-[20px]">
                    {cards.map((card) => {
                        const isActive = selected === card.id;
                        return (
                            <div
                                key={card.id}
                                onClick={() => setSelected(card.id)}
                                className={`cursor-pointer px-[23.5px] py-[16px] flex flex-col justify-center items-center gap-[8px] rounded-[20px] transition-colors duration-300 ${isActive ? "bg-[#333] text-white" : "bg-[#F1F1F1] text-black"
                                    }`}
                            >
                                <div className="w-[340px] flex flex-col justify-center items-start gap-[6px]">
                                    {/* Title + icon */}
                                    <div className="w-full flex justify-between items-center gap-[51px]">
                                        <p
                                            className={`w-full max-w-[240px] text-[22px] font-medium leading-normal tracking-[0.96px] ${isActive ? "text-white" : "text-[#333]"
                                                }`}
                                        >
                                            {card.title}
                                        </p>
                                        <span
                                            className={`w-[32px] h-[32px] p-[2px] flex justify-center items-center gap-[10px] border-[2px] rounded-full transition-colors duration-200 ${isActive
                                                    ? "border-[#D5D5D5] text-white hover:bg-[#D5D5D5] hover:text-[#333]"
                                                    : "border-[#000] hover:bg-[#D5D5D5] hover:text-[#333]"
                                                }`}
                                        >
                                            <LuArrowUpRight size={20} />
                                        </span>
                                    </div>

                                    {/* Amount */}
                                    <span
                                        className={`text-[40px] font-semibold leading-normal tracking-[1.92px] flex items-center ${isActive ? "text-white" : "text-[#1A1A1A]"
                                            }`}
                                    >
                                        {card.amount}
                                    </span>

                                    {/* Sub-text */}
                                    <p
                                        className={`text-[14px] font-normal leading-normal tracking-[0.64px] ${isActive ? "text-[#D1D1D1]" : "text-[#939393]"
                                            }`}
                                    >
                                        {card.subText}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* bottom btns_______ */}
                <div className="h-[52px] flex justify-between items-center self-stretch">
                    {/* Go Home / edit / delete btns_______ */}
                    <span className="flex justify-center items-center gap-[10px]">
                        {/* Go home */}
                        <button className="h-[46px] px-[25px] py-[12px] bg-[#fff] flex flex-col justify-center items-center gap-[10px] rounded-[100px] border-solid border-[2px] border-[#F1F1F1] hover:bg-[#F1F1F1] transition-colors duration-200">
                            <span className="text-[#1A1A1A] flex justify-center items-center gap-[10px]">
                                <p className="text-[14px] font-medium leading-normal">Go Home</p>
                                <FiHome size={18} />
                            </span>
                        </button>

                        {/* Edit */}
                        <button className="h-[46px] px-[25px] py-[12px] bg-[#fff] flex flex-col justify-center items-center gap-[10px] rounded-[100px] border-solid border-[2px] border-[#F1F1F1] hover:bg-[#F1F1F1] transition-colors duration-200">
                            <span className="text-[#1A1A1A] flex justify-center items-center gap-[10px]">
                                <p className="text-[14px] font-medium leading-normal">Edit</p>
                                <FiEdit size={18} />
                            </span>
                        </button>

                        {/* Delete */}
                        <button className="h-[46px] px-[25px] py-[12px] bg-[#fff] flex flex-col justify-center items-center gap-[10px] rounded-[100px] border-solid border-[2px] border-[#F1F1F1] hover:bg-[#F1F1F1] transition-colors duration-200">
                            <span className="text-[#1A1A1A] flex justify-center items-center gap-[10px]">
                                <p className="text-[14px] font-medium leading-normal">Delete</p>
                                <LuTrash2 size={18} />
                            </span>
                        </button>
                    </span>

                    {/* Download btn_______ */}
                    <button className="h-[46px] px-[25px] py-[12px] bg-[#333333] flex flex-col justify-center items-center gap-[10px] rounded-[100px] border-solid border-[2px] border-[#F1F1F1] hover:bg-[#000] transition-colors duration-200">
                        <span className="text-[#F1F1F1] flex justify-center items-center gap-[10px]">
                            <p className="text-[14px] font-medium leading-normal">
                                Download PDF
                            </p>
                            <PiDownloadSimpleBold size={20} />
                        </span>
                    </button>
                </div>
            </div>
        </div>
    );
};
export default RunwayResult;