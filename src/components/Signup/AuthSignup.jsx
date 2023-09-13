import React, { useRef, useEffect } from "react";
import Brand from "../../assets/paper.png";
import leftimg from "../../assets/loginAsset.png";
import otpimg from "../../assets/otp.png";
import SignupForm from "../AuthForm/SIgnFrom";
export default function AuthSignup() {
  
  return (
    <>
      <div className="bg-white h-screen w-full">
        
        <div className="flex justify-center items-center py-10">
          <img className="w-[150px] " src={Brand} alt="logo_png" />
        </div>
        
        <div className="flex justify-center items-center -mt-4">
          <div className="bg-slate-100 md:h-[500px] md:w-2/3 h-[850px] w-[350px] flex md:flex-row flex-col  rounded-xl shadow-black/20 shadow-xl">
            <div className=" md:w-[500px]">
              <img
                className="md:w-[400px] md:ml-7 ml-3 mt-12"
                src={leftimg}
                alt="img-png"
              />
            </div>
            <div className="md:w-[500px] -mt-4 ml-4">
              <h1 className="font-sans text-3xl text-purple-800 font-bold ml-[100px] py-6  ">
               Sign up 
              </h1>
              <p className="text-md font-semibold ">Welcome to our clinic family!   </p>
               <p className="text-md font-semibold ">  Your health and well-being are our top priorities.</p>
                 <SignupForm/>
              
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
