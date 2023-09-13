import { useState } from "react";
import logo from "../../../assets/paper.png";
import { NavLink } from "react-router-dom";
import { toast } from "react-hot-toast";

function NavBar() {
  const [show, setShow] = useState(false);
  const token = localStorage.getItem("user");
  const [change , setChange] = useState(true)

  const handleLogout = () => {
    localStorage.removeItem("user");
    toast.success("logout Success");
    setChange(false)
  };
  return (
    <nav className="bg-white border-gray-200 shadow-md fixed w-full z-20 top-0 left-0 border-b">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-around mx-auto p-4">
        <a href="#" className="flex items-center">
          <img
            src={logo}
            className="h-12 sm:h-12 md:h-12 lg:h-14 mr-3"
            alt=" Logo"
          />
        </a>
        <div className="flex lg:order-2 gap-2">
          {/* <button type="button" className="text-white bg-gradient-to-r from-[#4D63DD] to-[#22A1F5] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm px-4 py-2 text-center mr-3 md:mr-0 ">Download App</button>
      <button type="button" className="text-blue-600 bg-white border border-blue-700  hover:bg-blue-600 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm px-4 py-2 text-center mr-3 md:mr-0 ">Login</button> */}
          <button
            onClick={() => setShow(!show)}
            data-collapse-toggle="navbar-cta"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 "
            aria-controls="navbar-cta"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
        <div
          className={`items-center justify-between ${
            !show && "hidden"
          } w-full lg:flex lg:w-auto lg:order-1" id="navbar-cta`}
        >
          <ul className="flex flex-col font-medium p-4 lg:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 lg:flex-row lg:space-x-8 lg:mt-0 lg:border-0 lg:bg-white ">
            <li>
            
              <a
                href="#"
                className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded lg:bg-transparent lg:text-[#19BCCC] lg:p-0 "
                aria-current="page"
              >
                Home
              </a>
            </li>
            <li>
            <NavLink to={'/payment'}>
            <p
                
                className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 lg:hover:bg-transparent md:hover:text-blue-700 lg:p-0 "
              >
                Buy Now Pay Later
              </p>
                </NavLink>
              
            </li>
            <li>
              <a
                href="https://www.youtube.com/channel/UCCIs3vb1mC15PrdPQBwgdjQ"
                className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 lg:hover:bg-transparent md:hover:text-blue-700 lg:p-0 "
              >
                Videos
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 lg:p-0 "
              >
                Blogs
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 lg:p-0 "
              >
                ABHA
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 lg:p-0 "
              >
                About Us
              </a>
            </li>
            <li className="flex gap-2">
              <button
                type="button"
                className="text-white bg-gradient-to-r from-[#4D63DD] to-[#22A1F5] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm px-4 py-2 text-center mr-3 md:mr-0 "
              >
                Download App
              </button>
              {change ? (
                <button
                  type="button"
                  onClick={handleLogout}
                  className="text-blue-600 bg-white border border-blue-700  hover:bg-blue-600 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm px-4 py-2 text-center mr-3 md:mr-0 "
                >
                  Log out
                </button>
              ) : (
                <NavLink to={"/login"}>
                  <button
                    type="button"
                    className="text-blue-600 bg-white border border-blue-700  hover:bg-blue-600 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm px-4 py-2 text-center mr-3 md:mr-0 "
                  >
                    Login
                  </button>
                </NavLink>
              )}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
