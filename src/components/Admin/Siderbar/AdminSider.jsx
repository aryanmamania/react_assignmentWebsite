import React from "react";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { MdOutlineDashboard } from "react-icons/md";
import { AiOutlineUsergroupAdd } from "react-icons/ai";
import { TbBrandBooking } from "react-icons/tb";
import { MdOutlineLogout } from "react-icons/md";
import { Link } from "react-router-dom";

const AdminNavbar = () => {
  const navigate = useNavigate();

  const menus = [
    { name: "Dashboard", link: "/admin/dashboard", icon: MdOutlineDashboard },
    { name: "User", link: "/admin/user", icon: AiOutlineUsergroupAdd },
    { name: "Booking", link: "/admin/booking", icon: TbBrandBooking },
    {
      name: "Logout",
      link: "/admin/login",
      icon: MdOutlineLogout,
      onClick: () => {
        localStorage.removeItem("admin");
        navigate("/admin/login");
      },
    },
  ];
  const [open, setOpen] = useState(true);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 640) {
        setOpen(false);
      } else {
        setOpen(true);
      }
    }
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="flex ">
      <div
        className={`bg-gray-200 min-h-screen ${
          open ? "w-[200px]" : "w-14"
        } duration-500 text-gray-900 px-4 `}
      >
        <div className="lg:hidden">
          <div className="py-3 flex justify-end">
            <HiMenuAlt3
              size={26}
              className="cursor-pointer"
              onClick={() => setOpen(!open)}
            />
          </div>
        </div>
        <div className="text-lg font-slab hidden lg:block p-3">PaperPlane</div>

        <div className="mt-4 flex flex-col gap-4 relative">
          {menus?.map((menu, i) => (
            <Link
              to={menu?.link}
              key={i}
              onClick={menu?.onClick}
              className=" group flex items-center text-sm gap-3.5 font-medium p-2 hover:bg-green-200 rounded-2xl"
            >
              <div>{React.createElement(menu?.icon, { size: "20" })}</div>
              <h2
                style={{
                  transitionDelay: `${i + 3}00ms`,
                }}
                className={`whitespace-pre duration-500 ${
                  !open && "opacity-0 translate-x-28 overflow-hidden"
                }`}
              >
                {menu?.name}
              </h2>
              <h2
                className={`${
                  open && "hidden"
                } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-2xl drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1
                group-hover:left-14 group-hover:duration-300 group-hover:w-fit`}
              >
                {menu?.name}
              </h2>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AdminNavbar;
