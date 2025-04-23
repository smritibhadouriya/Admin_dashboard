import React from 'react'
import { useState } from "react";
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'
import Belownav from '../components/belownav'
import Profilep from '../assets/Profile.jpeg'
import Github from '../assets/github.jpeg'
import { Users } from '../data/mockData.js'
import Google from '../assets/google.jpeg'
import Linkedin from  '../assets/linkedin.webp'
import Rando from '../assets/Rando.jpeg'
import { Tooltip } from '@mui/material';
const Profile = () => {
  const [toggles, setToggles] = useState({
    follow: true,
    like: false,
    mention: true,
    launch:false,
    sales:true,
    update:false
  });

  const handleToggle = (key) => {
    setToggles((prev) => ({ ...prev, [key]: !prev[key] }));
  };
  const Toggle = ({ value, onClick }) => (
    <div
      onClick={onClick}
      className={`w-12 h-6 flex items-center rounded-full p-1 cursor-pointer transition-all duration-300 ${
        value ? "bg-black" : "bg-gray-300"
      }`}
    >
      <div
        className={`bg-white w-4 h-4 rounded-full shadow-md transform transition-transform duration-300 ${
          value ? "translate-x-6" : "translate-x-0"
        }`}
      ></div>
    </div>
  );
  return (
   <>
   <div className='flex flex-col bg-stone-100'>
    <div className="hidden md:block">
        <Navbar />
      </div>
    
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


{/**Profile page */}
 <div className=" bg-stone-100 flex-1 w-102 md:w-screen absolute top-12 md:top-12  lg:top-12 md:left-60 lg:left-62 lg:w-330 lg:h-screen">
   

   <div className='bg-white lg:h-150 lg:ml-5 lg:mt-4 lg:w-308 rounded-2xl'> 
    <div className='flex'>
          <img src={Profilep} alt="Profile" className='h-20 w-20 rounded-lg ml-7 mt-6'/>
          <div>
          <h1 className='text-2xl font-bold text-stone-900 ml-3 mt-6'> John Doe</h1>
          <p className='ml-3 mt-1 text-sm text-stone-400'>CEO / Co-Founder </p>
          </div>
    </div>
    <div className='flex-row lg:flex gap-20 '>
      <div className='ml-7 mt-6 w-80'> 
        <h1 className='text-lg font-semibold'>Platform Setting </h1>

        <h4 className='text-lg text-stone-500'>Account</h4>
        <div className="flex flex-col gap-y-4">
      <div className="flex items-center justify-between mt-4">
      <Toggle value={toggles.follow} onClick={() => handleToggle("follow")} />
        <p className="text-stone-700">Email me when someone follows me</p>
       
      </div>

      <div className="flex items-center justify-between">
      <Toggle value={toggles.like} onClick={() => handleToggle("like")} />
        <p className="text-stone-700 ml-5">Send me email when someone likes my post </p>
       
      </div>

      <div className="flex items-center justify-between">
      <Toggle value={toggles.mention} onClick={() => handleToggle("mention")} />
        <p className="text-stone-700 ml-5">Send email when someone mentions me</p>
       
      </div>
    
    </div>
    <h4 className='text-lg text-stone-500 mt-2'>Application</h4>
        <div className="flex flex-col gap-y-4">
      <div className="flex items-center mt-4">
      <Toggle value={toggles.launch} onClick={() => handleToggle("launch")} />
        <p className="text-stone-700 ml-5">New Launch Product</p>
       
      </div>

      <div className="flex items-center">
      <Toggle value={toggles.sales} onClick={() => handleToggle("sales")} />
        <p className="text-stone-700 ml-5 ">Monthly sales</p>
       
      </div>

      <div className="flex items-center ">
      <Toggle value={toggles.update} onClick={() => handleToggle("update")} />
        <p className="text-stone-700 ml-5">New Updates</p>
       
      </div>
    </div>
  
      </div>
    
      <div className=' ml-7 lg:ml-0 mt-6'>
      <hr className='block lg:hidden text-stone-700 mr-7 md:w-120' />
      <h1 className='text-lg font-semibold mt-4 lg:mt-0 '>Profile Information </h1>
      <h6 className='text-lg text-stone-500'>About</h6>
      <Tooltip title="Edit">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className='relative bottom-9 left-65 h-6 w-6'>
  <path stroke-linecap="round" stroke-linejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
</svg>
</Tooltip>
      <p className='h-10 lg:w-90 w-80 text-stone-700'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos nisi placeat repellat incidunt sed praesentium deleniti necessitatibus natus molestias soluta. Nemo, iste? Consectetur consequatur harum inventore dignissimos pariatur voluptates quo.
      Quo sint, velit consectetur voluptatem aliquid nesciunt beatae inventore itaque culpa incidunt, voluptate nobis vitae ?</p>
     <div className='mt-45'>
     <hr className='text-stone-400 md:w-120 lg:w-100' />
     <div className=' mt-3 gap-y-4'>
     <p className='font-xl '>UserName :  <span className='text-stone-700'>{"  "} John Doe</span></p>
     <p className='font-xl '>Email : <span className='text-stone-700'>{"  "} john@gmail.com</span></p>
     <p className='font-xl '>Phone : <span className='text-stone-700'>{"  "} 9283901800</span></p>
     </div>
     <div className='flex gap-2 mt-6'>
      <img src={Github} className='h-10 w-10 rounded-full hover:h-11 hover:w-11'></img>
      <img src={Google } className='h-10 w-10 rounded-full  hover:h-11 hover:w-11'></img>
      <img src={Linkedin} className='h-10 w-10 rounded-full  hover:h-11 hover:w-11'></img>
     </div>
     
     </div>
      </div>
      <div className="mt-6 mb-20 md:mb-0 ml-7 lg:ml-0 space-y-4">
        <hr className='block lg:hidden text-stone-700 mr-7 md:w-120' />
      <h1 className='text-lg font-semibold '>Other Admin</h1>
  {Users.map((user, index) => (
    <div key={index} className="flex items-center space-x-4">
      <img src={Rando} alt="User" className="h-10 w-10 rounded-full" />
      <span className="text-stone-700 font-medium">{user.name}</span>
    </div>
  ))}
</div>

  
    </div>
      
   </div>
  
   </div>
   
   <div className="md:hidden fixed bottom-0 left-0 right-0 z-50">
        <Belownav />
      </div>

      </div>
   </>
  )
}

export default Profile