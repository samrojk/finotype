import { useEffect, useState } from "react";
import { account } from "../lib/appwrite";

const home = () => {
  const [firstName, setFirstName] = useState("");

  useEffect(() => {
    const getUser = async () => {
      try {
        const user = await account.get(); // get logged in user
        if (user.name) {
          const nameParts = user.name.split(" ");
          setFirstName(nameParts[0]); // take only first name
        } else {
          setFirstName(user.email.split("@")[0]); // fallback: username from email
        }
      } catch (err) {
        console.error("Error fetching user:", err);
      }
    };

    getUser();
  }, []);

  return (
    <div className="mx-[42px] mt-[42px] flex flex-col items-center">
      <div className="h-15.5 font-medium flex flex-col gap-[8px] justify-between items-center">
        <h1 className="text-[#000] tracking-[1.12px] text-[38px]">
          Welcome {firstName}!
        </h1>
        <p className="text-[#333] text-[20px] font-normal leading-normal tracking-[0.96px]">
          Plan your costs, track your capital, and stay one step ahead!
        </p>
      </div>
    </div>
  );
};

export default home;
