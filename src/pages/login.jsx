import React, { useState } from "react";
import Logo from "../assets/ft-black.webp";
import { FcGoogle } from "react-icons/fc";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";
import { account } from "../lib/appwrite";

const Login = ({ setIsLoggedIn }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  // Email/Password login
  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    try {
      await account.createEmailPasswordSession(email, password);
      setIsLoggedIn(true);
      navigate("/home");
    } catch (err) {
      console.error("Login failed:", err);
      setError("Invalid email or password. Try again.");
    }
  };

  // Google login
  const handleGoogleLogin = async () => {
    try {
      account.createOAuth2Session(
        "google",
        `${window.location.origin}/home`,
        `${window.location.origin}/login`
      );
    } catch (err) {
      console.error("Google login failed:", err);
      setError("Google login failed. Try again.");
    }
  };

  return (
    <div className="flex flex-col items-center gap-[10px] justify-center min-h-screen bg-white cursor-default">
      <div className="flex justify-center items-center">
        <img src={Logo} alt="logo" className="w-[60px] aspect-square" />
        <h2 className="text-black text-[30px] font-semibold leading-normal">
          Log in
        </h2>
      </div>

      <div className="bg-[#fff7f0] pb-[40px] pt-[30px] px-[25px] flex flex-col justify-center items-center rounded-[10px] gap-[10px] shadow-sm w-full max-w-[650px]">
        <form
          onSubmit={handleLogin}
          className="w-full max-w-[450px] flex flex-col justify-center items-start gap-[12px]"
        >
          <span className="flex flex-col justify-center items-start gap-[2px]">
            <h3 className="text-[#000] text-[28px] font-medium leading-normal">
              Log into your account
            </h3>
            <p className="text-[#3b3a3a] text-[16px] font-normal leading-normal tracking-[0.72px]">
              Don’t have an account?{" "}
              <Link
                to="/signup"
                className="underline font-medium hover:text-black hover:underline-offset-2 transition-discrete duration-150"
              >
                Sign Up
              </Link>
            </p>
          </span>

          <span className="flex flex-col justify-center items-center self-stretch gap-[12px]">
            <input
              type="email"
              placeholder="Email"
              required
              className="w-full px-[28px] py-[14px] text-[16px] font-normal border-[2px] border-solid border-[#939393] rounded-[6px] placeholder:text-[#939393] selection:bg-[#EEBC73]"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <div className="relative w-full flex items-center">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                required
                minLength={6}
                maxLength={12}
                className="w-full px-[28px] py-[14px] text-[16px] font-normal border-[2px] border-solid border-[#939393] rounded-[6px] placeholder:text-[#939393] selection:bg-[#EEBC73]"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

              <span
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-8.5 cursor-pointer bg-[#fff7f0] text-[#333] text-xl font-light"
              >
                {showPassword ? (
                  <FaRegEyeSlash className="w-[20px] h-[20px] text-[#333]" />
                ) : (
                  <FaRegEye className="w-[18px] h-[18px] text-[#333]" />
                )}
              </span>
            </div>
          </span>

          {error && <p className="text-red-500 text-sm">{error}</p>}

          <button
            type="submit"
            className="w-full py-[14px] text-[18px] font-medium text-center border-[2px] border-solid rounded-[6px] bg-[#333333] text-[#fff] hover:bg-[#000] transition-colors duration-200 cursor-pointer"
          >
            Log in
          </button>

          <span className="w-full flex items-center gap-[15.5px]">
            <hr className="flex-grow border-[1px] rounded border-[#333]" />
            <span className="text-[#333] text-[16px] font-medium leading-normal tracking-[0.72px]">
              Or continue with
            </span>
            <hr className="flex-grow border-[1px] rounded border-[#333]" />
          </span>

          <button
            type="button"
            onClick={handleGoogleLogin}
            className="w-full py-[12px] text-[#333] text-[18px] font-medium border-[2px] border-solid border-[#000] rounded-[6px] flex items-center justify-center gap-[12px] hover:bg-[#F3E6DD] transition-colors duration-200"
          >
            <FcGoogle className="w-[32px] h-[33px]" />
            Google
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
