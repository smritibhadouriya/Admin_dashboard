import React from 'react';
import { useNavigate } from 'react-router-dom';
const BelowNav = () => {
  const navigate = useNavigate();

  const logout = () => {
    navigate("/Admin_dashboard/")
  }
  const report = () => {
    navigate("/report")
  }

  
  const user = () => {
    navigate("/table")
  }

  const home = () => {
    navigate("/dash")
  }
  
  const profile = () => {
    navigate("/profile")
  }


  return (
    <div className="fixed bottom-0 left-0 w-full bg-stone-800 flex justify-around items-center py-3 z-50">
     
      {/* User Icon */}
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
        strokeWidth="1.5" stroke="currentColor"
        className="w-8 h-8 text-white hover:text-blue-900 hover:h-9 hover:w-9
         transition-colors duration-200" onClick={user}>
        <path strokeLinecap="round" strokeLinejoin="round"
          d="M15.75 6a3.75 3.75 0 1 
          1-7.5 0 3.75 3.75 0 0 1 7.5 
          0ZM4.501 20.118a7.5 7.5 0 0 
          1 14.998 0A17.933 17.933 0 
          0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
      </svg>
      {/* Reports Icon */}
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
        strokeWidth="1.5" stroke="currentColor"
        className="w-8 h-8 text-white hover:text-blue-900 hover:h-9 hover:w-9
         transition-colors duration-200" onClick={report}>
        <path strokeLinecap="round" strokeLinejoin="round"
          d="M3 13.125C3 12.504 3.504 12 
          4.125 12h2.25c.621 0 1.125.504 
          1.125 1.125v6.75C7.5 20.496 
          6.996 21 6.375 21h-2.25A1.125 
          1.125 0 0 1 3 19.875v-6.75ZM9.75 
          8.625c0-.621.504-1.125 
          1.125-1.125h2.25c.621 0 
          1.125.504 1.125 1.125v11.25c0 
          .621-.504 1.125-1.125 
          1.125h-2.25a1.125 1.125 0 0 
          1-1.125-1.125V8.625ZM16.5 
          4.125c0-.621.504-1.125 
          1.125-1.125h2.25C20.496 3 
          21 3.504 21 4.125v15.75c0 
          .621-.504 1.125-1.125 
          1.125h-2.25a1.125 1.125 0 
          0 1-1.125-1.125V4.125Z" />
      </svg>

     
       {/* Home Icon */}
       <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
        strokeWidth="1.5" stroke="currentColor"
        className="w-8 h-8 text-white hover:text-blue-900 hover:h-9 hover:w-9
         transition-colors duration-200" onClick={home}>
        <path strokeLinecap="round" strokeLinejoin="round"
          d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 
          .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 
          1.125-1.125h2.25c.621 0 1.125.504 
          1.125 1.125V21h4.125c.621 0 1.125-.504 
          1.125-1.125V9.75M8.25 21h8.25" />
      </svg>


      {/* profile */}
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"   className="w-8 h-8 text-white hover:text-blue-900 hover:h-9 hover:w-9
         transition-colors duration-200" onClick={profile}>
      <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
    </svg>

      {/* Logout Icon */}
      <svg onClick={logout}
        xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
        strokeWidth="1.5" stroke="currentColor"
        className="w-8 h-8 text-white hover:text-red-500 hover:h-9 hover:w-9 transition-colors duration-200 cursor-pointer">
        <path strokeLinecap="round" strokeLinejoin="round"
          d="M15.75 9V5.25A2.25 2.25 0 0 
          0 13.5 3h-6a2.25 2.25 0 0 0-2.25 
          2.25v13.5A2.25 2.25 0 0 0 7.5 
          21h6a2.25 2.25 0 0 0 2.25-2.25V15m3 
          0 3-3m0 0-3-3m3 3H9" />
      </svg>
    </div>
  );
};

export default BelowNav;
