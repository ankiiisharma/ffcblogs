import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { SigninInput } from "@ankiiisharma/blog";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import { BACKEND_URL } from "../utils/contif";

const Auth = () => {
  const navigate = useNavigate();
  const [loading,setLoading] = useState<boolean>(false);

  const [postInputs, setPostInputs] = useState<SigninInput>({
    username: "",
    password: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      setLoading(true);
      const response = await axios.post(
        `${BACKEND_URL}/api/v1/user/signin`,
        postInputs
      );

      const jwt = response.data;
      console.log(jwt.jwt);
      localStorage.setItem("token", jwt.jwt);

      setPostInputs({
        username: "",
        password: "",
      });

      setLoading(false)

      navigate("/blogs");
    } catch (e) {
      console.log("error" + e);
    }
  };

  return (
    <div className="h-screen flex justify-center items-center flex-col">
      <div className="max-w-lg flex flex-col items-center justify-center text-2xl font-bold text-gray-700">
        <h1>Welcome Back, User! </h1>
        <p className="font-normal text-[13px] tracking-tight">
          Don't have account?{" "}
          <span
            className="text-blue-500 font-semibold cursor-pointer"
            onClick={() => navigate("/signup")}
          >
            signup
          </span>{" "}
        </p>
      </div>
      <div className=" max-w-lg w-full flex flex-col justify-start mt-4"></div>

      <form
        onSubmit={handleSubmit}
        className="max-w-lg flex flex-col justify-start mt-1 md:justify-center"
      >
        <label
          htmlFor="username"
          className="font-medium text-gray-600 mt-1 mb-1"
        >
          Username
        </label>
        <input
          type="text"
          id="username"
          placeholder="Username"
          className="px-[30px] border py-2 rounded-lg border-gray-400"
          onChange={(e) =>
            setPostInputs({ ...postInputs, username: e.target.value })
          }
        />

        <label
          htmlFor="password"
          className="font-medium text-gray-600 mt-1 mb-1"
        >
          Password
        </label>
        <input
          type="password"
          id="password"
          placeholder="Password"
          className="px-[30px] border py-2 rounded-lg border-gray-400"
          onChange={(e) =>
            setPostInputs({ ...postInputs, password: e.target.value })
          }
        />

        <button
          type="submit"
          className="bg-sky-500 text-white px-[113px] py-2 rounded-lg font-semibold border  mt-5"
        >
          {!loading ?(
              'signin'
          ):(
            <svg aria-hidden="true" role="status" className="inline w-4 h-4 me-3 text-gray-200 animate-spin " viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
<path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="#1C64F2"/>
</svg>)}
        </button>

        <button className="text-slate-600 px-[85px] items-center flex py-2 rounded-lg border font-semibold tracking-tighter mt-5">
          signin with <FcGoogle className="ml-1" />
        </button>
      </form>
    </div>
  );
};

export default Auth;
