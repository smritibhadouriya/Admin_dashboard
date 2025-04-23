import React from 'react'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'
import Home from '../components/Home'
import Belownav from '../components/belownav'

const Dashboard = () => {
  return (
    <div className="flex flex-col min-h-screen bg-stone-100">
      {/* Navbar only visible on medium and larger screens */}
      <div className="hidden md:block">
        <Navbar />
      </div>

        {/* Sidebar for medium and larger screens */}
      
          <Sidebar />

        
          <div className="hidden lg:flex absolute left-1/2 lg:top-2 transform -translate-x-1/2 items-center bg-white px-3 py-1 rounded-md shadow-md lg:w-150 lg:h-9 focus-within:ring-2 focus-within:ring-stone-400 outline-1 outline-stone-500">
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 text-gray-500 mr-2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197M15.803 15.803A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
  </svg>
  <input
    type="text"
    placeholder="Search"
    className="outline-none w-full text-sm text-gray-700 placeholder:text-gray-400"
  />
</div>
        {/* Main Content */}
        <div className="flex-1 p-4 w-102 md:w-screen  bg-stone-100 lg:w-0.5 absolute top-3 md:top-9  lg:top-8  md:left-57 lg:left-56 lg-330
         ">
          <Home />
        </div>


      {/* Bottom Navbar for small screens only */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-50">
        <Belownav />
      </div>
    </div>
  )
}

export default Dashboard
