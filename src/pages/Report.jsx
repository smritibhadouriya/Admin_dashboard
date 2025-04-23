import React from 'react';
import Pie from '../components/Report1';
import Line from '../components/Report2';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import Belownav from '../components/belownav';
import Bar from '../components/Chart';
import List from '../components/List'
const Report = () => {
  return (
    <> 

<div className="flex flex-col min-h-screen bg-stone-100">

      <div className="hidden md:block">
        <Navbar />
      </div>
      <Sidebar/>
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

      <div className="flex flex-1">
       
       
        {/* Main Content */}
       <div className="flex-1 p-4 mt-14 md:mt-0 md:ml-60 absolute top-4 left-3 md:top-12  md:w-145 lg:w-315 bg-stone-100
         min-h-screen">
       

          <h2 className="text-2xl font-semibold text-gray-800 mb-6 md:ml-3">Reports Overview</h2>

          {/* Grid for Charts */}
          <div className="grid grid-cols-1 lg:grid-cols-3 mb-6 md:ml-3 gap-4">
  {/* Pie Chart */}
  <div className="bg-white shadow-md rounded-xl p-4 lg:p-6 h-[400px] w-full lg:h-80 outline-1 outline-stone-500">
  <h3 className="text-lg font-semibold mb-3 underline underline-offset-4 decoration-stone-400">
      Signup Trends
      </h3>
    <Pie />
  </div>

  {/* Line Chart */}
  <div className="bg-white shadow-md rounded-xl p-4 lg:p-8 h-[400px] w-full lg:h-80 outline-1 outline-stone-500">
  <h3 className="text-lg font-semibold mb-3 underline underline-offset-4 decoration-stone-400">
      User Distribution
      </h3>
    <Line />
  </div>

    {/* Bar Chart */}
    <div className="bg-white shadow-md rounded-xl p-4  lg:p-8  h-[300px] w-full lg:row-span-2 lg:h-80 outline-1 outline-stone-500">
    <h3 className="text-lg font-semibold mb-3 underline underline-offset-4 decoration-stone-400">
    To-do List
      </h3>
    <List />
  </div>

    {/* Bar Chart */}
    <div className="bg-white shadow-md rounded-xl p-4  lg:p-8  h-[200px] md:h-[400px] w-full lg:col-span-2 lg:h-80 outline-1 outline-stone-500">
    <h3 className="text-lg font-semibold mb-3 underline underline-offset-4 decoration-stone-400">
    User Per Month
      </h3>
    <Bar />
  </div>

</div>



          {/* Grid for Stats */} 
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-rows-3 gap-6
          ">
            <div className="flex items-center justify-between  outline-1 outline-stone-500 bg-white p-4 rounded-xl shadow-md md:h-17
            ">
              <span className="text-gray-700 text-base font-medium">Total Visit</span>
              <div className="text-indigo-600 text-lg font-semibold">1,200</div>
            </div>

            <div className="flex items-center justify-between outline-1 outline-stone-500 bg-white p-4 rounded-xl  shadow-md mb-12 lg:mb-0 md:h-17
            ">
              <span className="text-gray-700 text-base font-medium">Average Session</span>
              <div className="text-indigo-600 text-lg font-semibold">5 min</div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Navbar for small screens only */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-50">
        <Belownav />
      </div>
    </div>

    </>
  
  );
};

export default Report;
