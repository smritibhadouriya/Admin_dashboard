import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const logout = () => {
    navigate("/Admin_dashboard/");
  };
  const report = () => {
    navigate("/report");
  };

  const user = () => {
    navigate("/table");
  };

  const home = () => {
    navigate("/dash");
  };

  const profile = () => {
    navigate("/profile");
  };

  return (
    <div className="fixed w-full h-12 bg-stone-100 flex items-center justify-between px-4 md:top-0 bottom-0">
      {/* Centered Whale text 
      <div className="absolute left-1/2 transform -translate-x-1/2">
        <h2 className="text-white font-bold text-3xl
        ">Whale</h2>
      </div>*/}

      {/* Right icons */}
      <div className="flex items-center space-x-4 ml-auto">
        {/* Home Icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-6 h-6 text-stone-600 hover:text-blue-700 cursor-pointer hover:h-9 hover:w-9"
          onClick={home}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 
              .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 
              1.125-1.125h2.25c.621 0 1.125.504 
              1.125 1.125V21h4.125c.621 0 1.125-.504 
              1.125-1.125V9.75M8.25 21h8.25"
          />
        </svg>

        {/* Reports Icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-6 h-6 text-stone-600 hover:text-blue-700 cursor-pointer hover:h-9 hover:w-9"
          onClick={report}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 
              1.125 1.125v6.75C7.5 20.496 6.996 21 
              6.375 21h-2.25A1.125 1.125 0 0 1 
              3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 
              1.125-1.125h2.25c.621 0 1.125.504 
              1.125 1.125v11.25c0 .621-.504 1.125-1.125 
              1.125h-2.25a1.125 1.125 0 0 
              1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 
              1.125-1.125h2.25C20.496 3 21 
              3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 
              1.125h-2.25a1.125 1.125 0 0 
              1-1.125-1.125V4.125Z"
          />
        </svg>
        {/*Profile*/}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          className="w-6 h-6 text-stone-600 hover:text-blue-700 cursor-pointer hover:h-9 hover:w-9"
          onClick={profile}
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
          />
        </svg>

        {/* User Icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-6 h-6 text-stone-600 hover:text-blue-700 cursor-pointer hover:h-9 hover:w-9"
          onClick={user}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 6a3.75 3.75 0 1 
              1-7.5 0 3.75 3.75 0 0 1 7.5 
              0ZM4.501 20.118a7.5 7.5 0 0 
              1 14.998 0A17.933 17.933 0 0 
              1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
          />
        </svg>

        {/* Settings Icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-6 h-6 text-stone-600 hover:text-blue-700 cursor-pointer hover:h-9 hover:w-9"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9.594 3.94c.09-.542.56-.94 
              1.11-.94h2.593c.55 0 1.02.398 
              1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 
              1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 
              0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992.005.09.008.17.008.255s-.003.165-.008.255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 
              1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 
              1-.22.128c-.331.183-.581.495-.644.869l-.213 
              1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 
              0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 
              6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 
              1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 
              1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 
              6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 
              1.125 0 0 1-.26-1.43l1.297-2.247a1.125 
              1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 
              1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
          />
        </svg>

        {/* Logout Icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-6 h-6 text-stone-600 hover:text-red-600 cursor-pointer hover:h-9 hover:w-9"
          onClick={logout}
        >
          <path
            fillRule="evenodd"
            d="M7.5 3.75A1.5 1.5 0 0 0 6 
              5.25v13.5a1.5 1.5 0 0 0 1.5 
              1.5h6a1.5 1.5 0 0 0 1.5-1.5V15a.75.75 
              0 0 1 1.5 0v3.75a3 3 0 0 1-3 
              3h-6a3 3 0 0 1-3-3V5.25a3 3 0 0 
              1 3-3h6a3 3 0 0 1 3 3V9A.75.75 
              0 0 1 15 9V5.25a1.5 1.5 0 0 
              0-1.5-1.5h-6Zm10.72 4.72a.75.75 0 
              0 1 1.06 0l3 3a.75.75 0 0 1 0 
              1.06l-3 3a.75.75 0 1 
              1-1.06-1.06l1.72-1.72H9a.75.75 
              0 0 1 0-1.5h10.94l-1.72-1.72a.75.75 
              0 0 1 0-1.06Z"
            clipRule="evenodd"
          />
        </svg>
      </div>
    </div>
  );
};

export default Navbar;
