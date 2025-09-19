import React from "react";
import Line from "../assets/Line";
import About1 from "../assets/about-1.webp";
import About2 from "../assets/about-2.webp";
import About3 from "../assets/about-3.webp";
import Contributors from "../components/contibutors";
import FAQ from "../components/faq.jsx";
import { motion } from "framer-motion";

// animation variants
const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 1.2, delay: i * 0.3, ease: "easeOut" },
  }),
};

const about = () => {
  return (
    <div className="mx-[42px] mt-[42px] flex flex-col items-center">
      <div className="h-15.5 text-4xl font-medium flex flex-col justify-between items-center">
        <span className="tracking-[1.12px]">About us</span>
        <Line />
      </div>

      <div className="flex flex-col justify-items-center">
        {/* DIV 1 */}
        <motion.div
          className="w-267 h-90 flex items-center gap-10"
          variants={cardVariants}
          initial="hidden"
          animate="visible"
          whileInView="visible"
          custom={0}
          viewport={{ once: true, amount: 0.2 }}
        >
          <p className="text-[28px] font-normal leading-[150%] tracking-[1.12px]">
            <b className="font-medium">Finotype</b> helps startup founders plan
            costs, track capital, and calculate runway without spreadsheets or
            complex financial tools.
          </p>
          <img src={About1} alt="About Image" className="w-90 h-90" />
        </motion.div>

        {/* DIV 2 */}
        <motion.div
          className="w-267 h-90 flex items-center gap-10"
          variants={cardVariants}
          initial="hidden"
          animate="visible"
          whileInView="visible"
          custom={1}
          viewport={{ once: true, amount: 0.2 }}
        >
          <img src={About2} alt="About Image" className="w-90 h-90" />
          <p className="text-[28px] font-normal leading-[150%] tracking-[1.12px]">
            We built Finotype for makers, solopreneurs, and early-stage teams
            who want clarity and control over their business spending.
          </p>
        </motion.div>

        {/* DIV 3 */}
        <motion.div
          className="w-267 h-90 flex items-center gap-10"
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          custom={2}
          viewport={{ once: true, amount: 0.2 }}
        >
          <p className="text-[28px] font-normal leading-[150%] tracking-[1.12px]">
            Simple, beautiful, and smart our goal is to make financial planning
            as intuitive as building your product.
          </p>
          <img src={About3} alt="About Image" className="w-90 h-90" />
        </motion.div>
      </div>

      <Contributors />
      <FAQ />
    </div>
  );
};

export default about;
