import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import DARK from "../assets/Dark.jpeg";
import LIGHT from "../assets/White.jpeg";

const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isDarkTheme, setDarkTheme] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  const menuItems = [
    {
      id: "analytics",
      label: "Home",
      path: "/dash",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-5 h-5 mr-2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125
             c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 
             1.125-1.125h2.25c.621 0 1.125.504 
             1.125 1.125V21h4.125c.621 0 
             1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
          />
        </svg>
      ),
    },
    {
      id: "sales",
      label: "Report",
      path: "/report",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-5 h-5 mr-2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.182 15.182a4.5 4.5 0 0 1-6.364 0M21 12a9 9 
        0 1 1-18 0 9 9 0 0 1 18 0ZM9.75 9.75c0 .414-.168.75-.375.75S9 
        10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75Zm-.375 
        0h.008v.015h-.008V9.75Zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75Zm-.375 
        0h.008v.015h-.008V9.75Z"
          />
        </svg>
      ),
    },
    {
      id: "monthly",
      label: "User List",
      path: "/table",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          className="w-5 h-5 mr-2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
          />
        </svg>
      ),
    },
    {
      id: "profile",
      label: "Profile",
      path: "/profile",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          className="w-5 h-5 mr-2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
          />
        </svg>
      ),
    },
    {
      id: "employee",
      label: "Employee",
      path: "/employee",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          className="w-5 h-5 mr-2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m5.231 13.481L15 17.25m-4.5-15H5.625c-.621 0-1.125.504-1.125 1.125v16.5c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Zm3.75 11.625a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z"
          />
        </svg>
      ),
    },
  ];

  const handleNavigation = (path) => {
    setIsSidebarOpen(false);
    navigate(path);
  };

  return (
    <>
      <button
        onClick={toggleSidebar}
        className="sm:hidden z-50 p-2 bg-blur rounded-md shadow-md"
      >
        {isSidebarOpen ? (
          // X icon
          <svg className="w-6 h-6 absolute top-4.5 left-48 mb-100" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
            />
          </svg>
        ) : (
          // Hamburger icon
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M3 5h14a1 1 0 110 2H3a1 1 0 110-2zm0 4h14a1 1 0 110 2H3a1 1 0 110-2zm0 4h14a1 1 0 110 2H3a1 1 0 110-2z"
            />
          </svg>
        )}
      </button>

      <div
        className={`${
          isSidebarOpen ? "block" : "hidden"
        } sm:block fixed top-2 md:top-12 lg:top-4  md:left-2 lg:left-2 rounded-2xl outline-1 outline-gray-400 
         left-0 z-40 h-[calc(100%-3rem)] md:h-280 lg:h-180 w-60 shadow-lg p-4 space-y-2 transition-all duration-300
         ${
           isDarkTheme
             ? "bg-stone-700 text-white"
             : " text-stone-700 bg-white  "
         }`}
      >
        <h1 className="text-xl font-semibold mt-7 md:mt-0">ADMIN DASHBOARD</h1>

        <div className="flex items-center my-4 mt-10  border-stone-500 ">
          <div className="flex-grow border-t"></div>
          <span className="px-4 text-sm whitespace-nowrap">Navigation</span>
          <div className="flex-grow border-t"></div>
        </div>

        {menuItems.map((item) => (
          <button
            key={item.id}
            onClick={() => handleNavigation(item.path)}
            className={`flex items-center w-full  text-left px-4 py-2 rounded-lg font-medium transition cursor-pointer 
              ${
                location.pathname === item.path
                  ? "bg-stone-500 text-white"
                  : isDarkTheme
                  ? "hover:bg-stone-700"
                  : "hover:bg-stone-200"
              }`}
          >
            {item.icon}
            {item.label}
          </button>
        ))}

        <div className="flex items-center my-4  border-stone-500 ">
          <div className="flex-grow border-t "></div>
          <span className="px-4  text-sm whitespace-nowrap">Setting</span>
          <div className="flex-grow border-t"></div>
        </div>
        <p className="ml-2">Theme</p>
        <div className="flex gap-2">
          <img
            src={DARK}
            alt="Dark"
            onClick={() => setDarkTheme(true)}
            className="cursor-pointer h-10 w-10 rounded-full outline-2 outline-stone-500 hover:h-11 hover:w-11 "
          />
          <img
            src={LIGHT}
            alt="Light"
            onClick={() => setDarkTheme(false)}
            className="cursor-pointer h-10 w-10 rounded-full outline-2 outline-stone-500 hover:h-11 hover:w-11"
          />
        </div>
      </div>
    </>
  );
};

export default Sidebar;
