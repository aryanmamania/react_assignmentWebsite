import React, { useRef, useEffect, useState } from "react";
import { Formik, Form, Field } from "formik";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { loginSchema } from "../../Schema/authlogin";
import { AuthLogin } from "../../api/user/loginApi";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
export default function LoginForm() {
  const navigate = useNavigate();
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
          emailOrPhone: "",
          password: "",
        }}
        validationSchema={loginSchema}
        onSubmit={(values) => {
          AuthLogin(values).then((res) => {
            if (res.data.userData && res.data.token) {
              localStorage.setItem("user", res.data.token);
              toast.success("Welcome");
              navigate("/");
            }
            if (res.data.success === false) {
              toast.error("Password Not Matching");
            }
            if (res.data.action === false) {
              toast.error("Invalid Credentials");
            } else if (res.data.action === true) {
              toast.error("The User is Blocked");
            }
          });
        }}
      >
        {({ errors, touched }) => (
          <Form>
            <div className="md:ml-[150px] mt-5 ml-7">
              <label htmlFor="emailOrPhone"></label>
              <Field
                innerRef={inputRef}
                className="md:w-[460px] w-[340px] focus:outline-none bg-slate-50 drop-shadow-md border-zinc-50 h-12 rounded-md hover:drop-shadow-xl"
                placeholder="Phone/Email"
                style={{ paddingLeft: "20px" }}
                type="text"
                name="emailOrPhone"
              />
              {errors.emailOrPhone && touched.emailOrPhone ? (
                <div className="text-red-500 font-sans text-sm ">
                  {errors.emailOrPhone}
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
                <h1
                  className="text-2xl mt-3 mr-4 text-gray-500 "
                  onClick={() => setHide(!hide)}
                >
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
