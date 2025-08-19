import { useState } from "react";
import Line from "../assets/Line";
import { FaPlus } from "react-icons/fa6";

const faqs = [
  {
    question: "Is my data safe and private?",
    answer:
      "Yes, all your projects are securely stored and only accessible to you unless you choose to share them.",
  },
  {
    question: "Do I need finance experience to use it?",
    answer:
      "No, Finotype is user-friendly and made for everyone, no finance knowledge needed.",
  },
  {
    question: "Can I export my data or reports?",
    answer: "Yes, you can export your data or reports anytime in pdf formats.",
  },
  {
    question: "Do I need to sign up to use Finotype?",
    answer:
      "Yes, you have to signup with your email address or directly with google!",
  },
];

export default function FAQCard() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="mx-[42px] mt-[100px] flex flex-col items-center gap-[42px]">
      {/* Frequently Asked Questions section_______ */}
      <div className="h-15.5 text-4xl font-medium flex flex-col justify-between items-center">
        <span className="tracking-[1.12px]">Frequently Asked Questions</span>
        <Line />
      </div>

      {/* FAQ table__________ */}

      <div className="flex flex-col justify-items-center gap-6">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={`transition-all duration-300 border-[#D5D5D5] ${
              openIndex === index
                ? "bg-[#FFF8F2] h-40"
                : "border-2 border-[#D5D5D5] h-20"
            } w-[800px] px-10 py-5.25 flex flex-col justify-center items-center self-stretch rounded-[40px]`}
          >
            <div
              className="w-183 h-28.5 flex justify-between items-center cursor-pointer "
              onClick={() => toggle(index)}
            >
              <div className="w-162.25 h-28.5 flex flex-col justify-center items-start shrink-0 gap-3">
                <p className="w-162.25 h-9 text-[#333333] text-2xl font-medium ">
                  {faq.question}
                </p>
                {openIndex === index && (
                  <p className="w-162.25 h-16.5 text-[#939393] text-[22px] font-normal">
                    {faq.answer}
                  </p>
                )}
              </div>

              {/* Toggle Icon */}
              <span
                className={`cursor-pointer flex justify-center items-center rounded-full group transition-transform ${
                  openIndex === index
                    ? "bg-[#333333] w-10.5 h-10.5"
                    : "bg-[#F3E6DD] w-9.5 h-9.5"
                }`}
              >
                {openIndex === index ? (
                  <FaPlus
                    className="w-[24px] h-[24px] transition-transform duration-200 ease-in-out group-hover:scale-108 rotate-45"
                    color="#FFF8F2"
                  />
                ) : (
                  <FaPlus
                    className="w-[24px] h-[24px] transition-transform duration-200 ease-in-out group-hover:scale-108"
                    color="#333333"
                  />
                )}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
