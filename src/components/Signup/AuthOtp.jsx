import React, { useEffect, useRef, useState } from "react";
import Brand from "../../assets/paper.png";
import leftimg from "../../assets/loginAsset.png";
import otpimg from "../../assets/bgremove.png";
import { BiSolidEditAlt } from "react-icons/bi";
import { FaWhatsapp } from "react-icons/fa";
import { BsSendFill } from "react-icons/bs";
import "./SendButton.css";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { ResendOtpApi, VerifyOtp } from "../../api/user/signupApi";
import axios from "axios";
export default function AuthOtp() {
  const phoneNumber = useSelector((state) => state.number.phoneNumber);
  const navigate = useNavigate();
  const inputRef = useRef(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const [otp, setOtp] = useState("");
  console.log(otp);
  const phone = phoneNumber.phone;

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);
  const handleClick = () => {
    setIsAnimating(true);

    setTimeout(() => {
      //
      setIsAnimating(false);
    }, 1000); // Change the delay (in milliseconds) as per your requirement
    const data = {
      otp,
      phone,
    };
    VerifyOtp(data)
      .then((res) => {
        if (res.data.success === true) {
          toast.success("Success");
          navigate("/authsignup");
        } else if (res.data.action === false) {
          toast.error("otp invaild");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleResend = async() => {
         
    await axios.post('http://localhost:2222/api/resendotp',{data:`${phone}`},
    {
      withCredentials: true,
    }).then((res)=>{
      
     if(res.data.success===true){
      toast.success("resend otp");
     }
    }).catch((err)=>console.log(err))

   
 };
  return (
    <>
      <div className="bg-white h-screen w-full">
        <div className="flex justify-center items-center py-10">
          <img className="w-[150px] " src={Brand} alt="logo_png" />
        </div>

        <div className="flex justify-center items-center">
          <div className="bg-slate-100 md:h-[450px] md:w-2/3 h-[850px] w-[350px] flex md:flex-row flex-col  rounded-xl shadow-black/20 shadow-xl">
            <div className=" md:w-[500px]">
              <img
                className="md:w-[400px] md:ml-7 ml-3 mt-12"
                src={leftimg}
                alt="img-png"
              />
            </div>
            <div className="md:w-[500px] ml-5">
              <h1 className="font-sans text-xl font-semibold ml-10 py-6 underline md:no-underline ">
                Create an Account
              </h1>
              <img
                className="md:w-[200px] w-[250px]  ml-5 -mt-3"
                src={otpimg}
                alt="otpimg"
              />
              <div className="flex">
                <h1 className="font-sans text-xl">
                  OTP sent to <strong>+91-{phoneNumber.phone}</strong>{" "}
                </h1>
                <h1 className="ml-2 mt-1 text-xl text-gray-500 cursor-pointer">
                  <BiSolidEditAlt />{" "}
                </h1>
              </div>
              <div className="flex">
                <h1 className="font-sans text-xl font-light ml-11">
                  on Whatsapp
                </h1>
                <h1 className="ml-2 mt-1 text-xl text-green-700 ">
                  <FaWhatsapp />{" "}
                </h1>
              </div>
              <div className="flex ml-9 md:ml-0">
                <input
                  ref={inputRef}
                  className="w-1/2 h-11 mt-3 ml-4 shadow-xl rounded-full outline-none first-letter "
                  placeholder="OTP"
                  style={{ paddingLeft: "20px" }}
                  value={otp}
                  onChange={(e) => setOtp(e.currentTarget.value)}
                  type="text"
                />

                <button
                  className={`send-button ${
                    isAnimating ? "send-animation" : ""
                  }`}
                  onClick={handleClick}
                >
                  <h1 className="ml-3 text-3xl mt-2 text-blue-600">
                    <BsSendFill />
                  </h1>
                </button>
              </div>

              <h1
                onClick={handleResend}
                className="text-yellow-600 cursor-pointer md:ml-5 ml-14 mt-1 "
              >
                Resend
              </h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
