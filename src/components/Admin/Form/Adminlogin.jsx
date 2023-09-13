import React, { useRef, useEffect, useState } from "react";
import { Formik, Form, Field } from "formik";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { AdminLoginSchema } from "../../../Schema/adminlogin";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { AdminLoginApi } from "../../../api/admin/userFetch";
export default function AdminLogin() {
  const navigate = useNavigate()
   const inputRef = useRef(null);
  const [hide, setHide] = useState(false);
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
      
    }
  }, []);
  return (
    <>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validationSchema={AdminLoginSchema}
        onSubmit={(values) => {
          AdminLoginApi(values).then((res)=>{
            if(res?.data.success){
              localStorage.setItem("admin", res.data.token);
                navigate('/admin/dashboard')
                toast.success('login Success')
                
             } if(res?.data.action){
              toast.error('Invalid Credentials')
             }  if(res?.data.success=== false) {
              toast.error('password not match')
             }
  
           }).catch((err)=>console.log(err))
          
        }}
      >
        {({ errors, touched }) => (
          <Form>
            <div className="md:ml-[150px] mt-5 ml-7">
              <label htmlFor="email"></label>
              <Field
               innerRef={inputRef}
                className="md:w-[460px] w-[340px] focus:outline-none bg-slate-50 drop-shadow-md border-zinc-50 h-12 rounded-md hover:drop-shadow-xl"
                placeholder="Email"
                style={{ paddingLeft: "20px" }}
                type="email"
                name="email"
               
              />
              {errors.email && touched.email ? (
                <div className="text-red-500 font-sans text-sm ">
                  {errors.email}
                </div>
              ) : null}
              <div className="md:w-[460px] w-[340px]  mt-4 bg-slate-50 drop-shadow-lg border-zinc-50 h-12 rounded-md hover:drop-shadow-xl flex">
                <label htmlFor="password"></label>
                <Field
                  className="outline-none w-[420px] bg-slate-50  "
                  placeholder="Password"
                  name="password"
                  style={{ paddingLeft: "20px" }}
                  type={`${hide ? "title" : "password"}`}
                />
                <h1 className="text-2xl mt-3 mr-4 text-gray-500 " onClick={() => setHide(!hide)}>
                  {hide ? <FaEyeSlash /> : <FaEye />}
                </h1>
              </div>
              {errors.password && touched.password ? (
                  <div className="text-red-500 font-sans text-sm ">
                    {errors.password}
                  </div>
                ) : null}

              <button
                type="submit"
                className="md:w-[460px] w-[340px] mt-5 bg-blue-600 h-12 rounded-md text-white font-bold transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-100 duration-300 "
              >
                Login
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
}
