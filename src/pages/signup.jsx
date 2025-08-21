import React, { useState } from 'react';
import Logo from "../assets/ft-black.png";
import { FcGoogle } from "react-icons/fc";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";
import { Link } from "react-router-dom";

const signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;
    // Allow only alphabets (remove numbers & symbols)
    if (/^[A-Za-z]*$/.test(value)) {
      setName(value);
    }
  };

  const handleEmailChange = (e) => {
    const value = e.target.value;
    // Allow common email characters only
    if (/^[A-Za-z0-9@._-]*$/.test(value)) {
      setEmail(value);
    }
  };

  return (
    // Sign Up page--------------
    <div className=" flex flex-col items-center gap-[10px] justify-center min-h-screen bg-white cursor-default">

      {/* signup text_________ */}
      <div className="flex justify-center items-center">
        <img src={Logo} alt="logo" className="w-[60px] aspect-square" />
        <h2 className="text-black text-[30px] font-semibold leading-normal">Sign Up</h2>
      </div>

      {/* main box------------- */}
      <div className="bg-[#fff7f0] pb-[40px] pt-[30px] px-[25px] flex flex-col justify-center items-center rounded-[10px] gap-[10px] shadow-sm w-full max-w-[650px]" >

        {/* main signup form------------ */}
        <form action="" className=" w-full max-w-[450px] flex flex-col justify-center items-start gap-[12px]">

          {/* header text_________ */}
          <span className="flex flex-col justify-center items-start gap-[2px]">
            <h3 className="text-[#000] text-[28px] font-medium leading-normal">Create an account</h3>
            <p className="text-[#3b3a3a] text-[16px] font-normal leading-normal tracking-[0.72px] ">
              Already have an account?{' '}
              <Link to="/login" className=" underline font-medium hover:text-black hover:underline-offset-2 transition-discrete duration-150">Log in</Link>
            </p>
          </span>

          {/* main form-------------- */}
          <span className=" flex flex-col justify-center items-center self-stretch gap-[12px]">

            {/* Name-text */}
            <input type="text" placeholder="Name" required className="w-full px-[28px] py-[14px] text-[16px] font-normal leading-normal flex items-center gap-[10px] self-stretch border-[2px] border-solid border-[#939393] rounded-[6px] placeholder:text-[#939393] selection:bg-[#EEBC73]" value={name} onChange={handleChange} />

            {/* Email-text */}
            <input type="email" placeholder="Email" required className="w-full px-[28px] py-[14px] text-[16px] font-normal leading-normal flex items-center gap-[10px] self-stretch border-[2px] border-solid border-[#939393] rounded-[6px] placeholder:text-[#939393] selection:bg-[#EEBC73]" value={email} onChange={handleEmailChange} />

            {/* ----------------------------------------------------------------------------- */}
            {/* password field with toggle */}
            <div className="relative w-full flex items-center">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                required
                className="w-full px-[28px] py-[14px] text-[16px] font-normal leading-normal border-[2px] border-solid border-[#939393] rounded-[6px] placeholder:text-[#939393] selection:bg-[#EEBC73]" />

              {/* Eye toggle button */}
              <span
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-8.5 cursor-pointer bg-[#fff7f0] text-[#333] text-xl font-light"
              >
                {showPassword ? <FaRegEyeSlash className="w-[20px] h-[20px] text-[#333] " />
                  : <FaRegEye className="w-[18px] h-[18px] text-[#333]" />
                }
              </span>
            </div>
          </span>

          {/* create account btn */}
          <button className=" w-full py-[14px] text-[18px] font-medium leading-normal text-center gap-[10px] self-stretch border-[2px] border-solid rounded-[6px] placeholder:text-[#939393] bg-[#333333] text-[#fff] hover:bg-[#000] transition-colors duration-200 cursor-pointer">
            Create account
          </button>

          {/* -----------divider---------- */}
          <span className="w-full flex items-center gap-[15.5px]">
            <hr className="flex-grow border-[1px] rounded border-[#333]" />
            <span className="text-[#333] text-[16px] font-medium leading-normal tracking-[0.72px] ">Or register with</span>
            <hr className="flex-grow border-[1px] rounded border-[#333]" />
          </span>

          <a href="#" className="w-full py-[12px] text-[#333] text-[18px] font-medium leading-normal border-[2px] border-solid border-[#000] rounded-[6px] flex items-center justify-center gap-[12px] self-stretch hover:bg-[#F3E6DD] transition-colors duration-200 ">
            <FcGoogle className="w-[32px] h-[33px] " />
            Google
          </a>
        </form>
      </div>
    </div>
  )
}
export default signup