import React, { useState, useEffect } from 'react';
import { Users, UserCheck, UserPlus, DollarSign, HomeIcon } from 'lucide-react';
import Report1 from '../components/Report1';
import Report2 from '../components/Report2';
import Chart from '../components/Chart';

import {MaterialReactTable} from 'material-react-table';
import { useMemo } from 'react';

import  Rando from '../assets/Rando.jpeg'
import  Back from '../assets/background.jpeg'
import  Git from '../assets/github.jpeg'
import  Google from '../assets/linkedin.webp'
import Profile from '../assets/react.svg'

const Home = () => {
  const [data, setData] = useState([]);
    const datas = 
      [
        {
          icon: Back,
          name: 'Progress Task',
          lead: Profile,
          budget: '250',
          progress: 60,
          color: 'green',
        },
        {
          icon: Google,
          name: 'Abode Photoshop',
          lead: Git,
          budget: '500',
          progress: 20,
          color: 'red',
        },
        {
          icon: Rando,
          name: 'Google Foam',
          lead: Google,
          budget: '750',
          progress: 40,
          color: 'green',
        },
        {
          icon: Back,
          name: 'Progress Task',
          lead: Rando,
          budget: '250',
          progress: 46,
          color: 'red',
        },
        {
          icon: Profile,
          name: 'Pintrest home',
          lead: Google,
          budget: '200',
          progress: 60,
          color: 'green',
        },
        {
          icon: Back,
          name: 'Progress Task',
          lead: Git,
          budget: '260',
          progress: 46,
          color: 'red',
        },
      ]
  
      useEffect(() => {
          setData(datas);
        }, []);
      
    const columns = [
        {
          header: '',
          accessorFn: (row) => row.icon,
          id: 'icon',
          Cell: ({ cell }) => (
            <img src={cell.getValue()} alt="project icon" className="h-8 w-8 rounded-full" />
          ),
          size: 40,
        },
        {
          header: 'Project Name',
          accessorKey: 'name',
        },
        {
          header: 'Project Lead',
          accessorFn: (row) => row.lead,
          id: 'lead',
          Cell: ({ cell }) => (
            <img src={cell.getValue()} alt="project lead" className="h-6 w-6 rounded-full" />
          ),
        },
        {
          header: 'Budget',
          accessorKey: 'budget',
        },
        {
          header: 'Progress',
          accessorKey: 'progress',
          Cell: ({ row }) => (
            <input
              type="range"
              min="0"
              max="100"
              value={row.original.progress}
              readOnly
              className={`w-full h-2 bg-gray-200 rounded-lg accent-${row.original.color}-500`}
            />
          ),}
        ]
    
   

  return (
    <div className="lg:w-319 min-h-screen">
      {/* Main Content */}
      <div className="  relative z-10 w-full py-6 px-1 pr-4 lg:px-6 md:px-4 md:py-4 overflow-hidden backdrop-blur-sm md:w-140 lg:w-319
      ">
        
        {/* Greeting Section */}
        <div className="mb-6 lg:ml-2">
          <h2 className="text-gray-600 text-lg">Welcome,</h2>
          <h1 className="text-black text-3xl font-bold">John Doe</h1>
        </div>
        <div className='flex'>
            <HomeIcon className='text-gray-600 absolute top-20 right-35 md:top-9 md:right-32 lg:right-65' />{" "}
            <p className=' text-gray-600 absolute top-20 right-10 md:top-9 md:right-5 lg:right-40' >/ DashBoard</p>
          </div>

        {/* Stat Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-4 gap-6 mb-10 lg:ml-2">
        
          <div className="bg-red-400 p-5  rounded-xl flex items-center justify-between shadow-lg outline-1 outline-stone-500">
            <div>
              <h1 className="text-white text-md">Total Users</h1>
              <p className="text-white text-3xl font-bold">150</p>
            </div>
            <Users className="w-10 h-10 text-white" />
          </div>

          <div className="bg-green-400 p-5 rounded-xl flex items-center justify-between shadow-lg outline-1 outline-stone-500">
            <div>
              <h1 className="text-white text-md">Active Users</h1>
              <p className="text-white text-3xl font-bold">120</p>
            </div>
            <UserCheck className="w-10 h-10 text-white" />
          </div>

          <div className="bg-yellow-400 p-5 rounded-xl flex items-center justify-between shadow-lg outline-1 outline-stone-500">
            <div>
              <h1 className="text-white text-md">New Signups</h1>
              <p className="text-white text-3xl">10</p>
            </div>
            <UserPlus className="w-10 h-10 text-white" />
          </div>

          <div className="bg-blue-400 p-5 rounded-xl flex items-center justify-between shadow-lg outline-1 outline-stone-500">
            <div>
              <h1 className="text-whitetext-md">Revenue</h1>
              <p className="text-white text-3xl">$5,000</p>
            </div>
            <DollarSign className="w-10 h-10 text-white" />
          </div>
        </div>

        {/* Reports Section */}
        <h2 className="text-xl font-semibold text-gray-700 mb-4 lg:ml-2 ">Reports Overview</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10 lg:ml-2">
  <div className="bg-white p-5 rounded-xl flex items-center justify-between shadow-lg h-60 w-full outline outline-1 outline-stone-400">
    <Chart />
  </div>
  <div className="bg-white p-1 rounded-xl flex items-center justify-between shadow-lg h-60 w-full outline outline-1 outline-stone-400">
    <Report2 />
  </div>
  <div className="bg-white p-5 rounded-xl flex items-center justify-between shadow-lg h-60 w-full outline outline-1 outline-stone-400">
    <Report1 />
  </div>

  
</div>


        {/* Extra Stats Section */}
        <h2 className="text-xl font-semibold text-gray-700 mb-4 lg:ml-2">Analytics</h2>
 <div className='bg-white lg:h-120 lg:w-308 mb-10 rounded-2xl outline outline-1 outline-stone-300 p-6 shadow-sm '>

  <h2 className='text-black text-xl font-semibold'>Projects Completed</h2>
  <p className='text-stone-500 text-sm'>
    in the last <span className='text-black font-semibold'>30</span> days
  </p>
  <hr className='border-stone-300 my-4' />
    
    <MaterialReactTable
        columns={columns}
        data={data}
        enableColumnFilters
       enableFullScreenToggle={false}
        initialState={{pagination:{pageSize: 3}}}
        muiTableContainerProps={{ sx: { maxHeight: '15rem' } }}
      />
  
  
  
</div>



      </div>
    </div>
  );
};

export default Home;
