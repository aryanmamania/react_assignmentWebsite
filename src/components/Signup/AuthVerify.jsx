import React, { useRef, useEffect, useState } from "react";
import Brand from "../../assets/paper.png";
import leftimg from "../../assets/loginAsset.png";
import otpimg from "../../assets/otp.png";
import { Formik, Form, Field } from "formik";
import { phoneSchema } from "../../Schema/authlogin";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setPhoneNumber } from "../../store/slice/Authnumber";
import Loader from "../Loader/Loader";
import { AuthOtpSend } from "../../api/user/signupApi";
export default function AuthVerify() {
  const [loader, setLoader] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const inputRef = useRef(null);
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  return (
    <>
      <div className="bg-white h-screen w-full">
        {loader && (
          <div className="fixed z-20 w-full h-full flex justify-center items-center  bg-black/30">
            <Loader />
          </div>
        )}
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

              <Formik
                initialValues={{
                  phone: "",
                }}
                validationSchema={phoneSchema}
                onSubmit={(values) => {
                  dispatch(setPhoneNumber(values));
                  setLoader(true)
                    AuthOtpSend(values).then((res) => {
                     console.log(res)
                     if(res.data.action===true) {
                       navigate("/otp");
                     }
                   }).catch(err => console.log(err)).finally(() => setLoader(false))
                }}
              >
                {({ errors, touched }) => (
                  <Form className="ml-8 mt-8 md:mt-0 md:ml-0">
                    <label
                      className="font-sans font-semibold flex text-black/70 "
                      htmlFor="phone"
                    >
                      Phone Number
                    </label>

                    <Field
                      innerRef={inputRef}
                      className="md:w-[300px] -ml-2 mt-2 w-[250px] outline-none bg-slate-50 h-12 rounded-full border-2 hover:border-blue-500"
                      placeholder=" Phone"
                      style={{ paddingLeft: "20px" }}
                      type="number"
                      name="phone"
                    />
                    {errors.phone && touched.phone ? (
                      <div className="text-red-500 font-sans text-sm ">
                        {errors.phone}
                      </div>
                    ) : null}
                    <div>
                      <button
                        type="submit"
                        className="md:w-[100px] w-[100px] mt-3 md:ml-20 ml-14 bg-blue-600 h-10 rounded-full text-white font-bold transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-100 duration-300 "
                      >
                        SEND OTP
                      </button>
                    </div>
                  </Form>
                )}
              </Formik>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
