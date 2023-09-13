import React  from "react";
import leftimg from "../../../assets/loginAsset.png";
import logo from "../../../assets/paper.png";
import LoginForm from "../Form/Adminlogin";
import { NavLink,Navigate } from 'react-router-dom'
export default function Login() {
  const token = localStorage.getItem("admin");
  
  return token ? (
    <Navigate to={"/admin/dashboard"} />
  ) : (
    <>
      <div className="bg-slate-50 w-full  h-screen flex md:flex-row flex-col">
        <div className="md:w-[600px] md:h-screen  bg-white md:rounded-tr-[50px]">
          <div className="flex flex-col justify-center items-center">
            <img className="w-2/5 md:py-16 py-7 mr-44 " src={logo} alt="img" />
            <img className="w-3/3" src={leftimg} alt="img" />
          </div>
        </div>
        <div className="md:w-[800px] mt-4 md:mt-0">
          <div className="md:ml-[150px] ml-6">
            <h1 className="md:text-5xl text-4xl font-bold  text-purple-950 md:mt-[230px]  font-sans">
              Sign In
            </h1>
            <h1 className="font-sans mt-2 text-lg  text-purple-900/70">
              Login with your RootAdmin Email
            </h1>
          </div>
             <LoginForm/>
        </div>
      </div>
    </>
  );
}
