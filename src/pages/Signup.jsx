 import React, { useState } from 'react'
import { Link, useNavigate } from "react-router-dom"
import Google from '../assets/google.jpeg'
import Github from '../assets/github.jpeg'

import Linkedin from '../assets/linkedin.webp'
const Signup = () => {
 
  const [email, setEmail] = useState("");
  const [uname,setUname]=useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const submitbutton = (e) => {
    e.preventDefault();
    if (email && password && phone && uname) {
      navigate("/dash");
    } else {
      alert("Please fill all fields");
    }
  };
  const SigninButton=()=>
  {
    navigate("/")
  }

  const handleGoogle = () => {
    window.location.href = "https://www.google.com/";
  };

  const handleGithub = () => {
    window.location.href = "https://github.com/";
  };

  const handleLinkedin = () => {
    window.location.href = "https://www.linkedin.com/";
  };

  return (
    <>
      <div className="min-h-screen flex flex-col md:flex-row bg-stone-100 items-center justify-center px-4 py-10 space-y-6 md:space-y-0 ">
  
        {/* Signup Form */}
        <div className="bg-white w-full md:w-[520px] h-160 rounded-none shadow-md p-8 flex flex-col justify-between">
          {/* Heading */}
          <h1 className="text-2xl font-bold text-center mb-4">Signup</h1>
  
          {/* Form */}
          <form className="space-y-4" onSubmit={submitbutton}>
            <div>
              <label className="block text-gray-700">Name*</label>
              <input
                type="text"
                placeholder="Name"
                value={uname}
                onChange={(e) => setUname(e.target.value)}
                className="w-full px-4 py-2 outline outline-offset-2 rounded-full mt-2 text-stone-600"
              />
            </div>
  
            <div>
              <label className="block text-gray-700">Email*</label>
              <input
                type="text"
                placeholder="mail@website.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 outline outline-offset-2 rounded-full mt-2 text-stone-600"
              />
            </div>
  
            <div>
              <label className="block text-gray-700">Phone Number*</label>
              <input
                type="number"
                placeholder="+99999 99999"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full px-4 py-2 outline outline-offset-2 rounded-full mt-2 text-stone-600"
              />
            </div>
  
            <div>
              <label className="block text-gray-700">Password*</label>
              <input
                type="password"
                placeholder="min 8 character"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 outline outline-offset-2 rounded-full mt-2 text-stone-600"
              />
            </div>
  
            <div className="text-sm text-gray-600 mt-2">
              <label className="flex items-center space-x-2">
                <input type="checkbox" className="accent-blue-600" />
                <span>
                  I agree to the{" "}
                  <Link to="/forgot-password" className="text-blue-600 hover:underline">
                    terms and conditions
                  </Link>
                </span>
              </label>
            </div>
  
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-full"
            >
              Sign up
            </button>
          </form>
  
          {/* Divider */}
          <div className="flex items-center my-4">
            <div className="flex-grow border-t border-gray-300"></div>
            <span className="px-4 text-gray-500 text-sm whitespace-nowrap">or signup with</span>
            <div className="flex-grow border-t border-gray-300"></div>
          </div>
  
          {/* Social Icons */}
          <div className="flex justify-center space-x-6">
            <img src={Google} className="h-10 w-10 rounded-full hover:h-13 hover:w-13" onClick={handleGoogle} />
            <img src={Github} className="h-10 w-10 rounded-full hover:h-13 hover:w-13" onClick={handleGithub} />
            <img src={Linkedin} className="h-10 w-10 rounded-full hover:h-13 hover:w-13" onClick={handleLinkedin} />
          </div>
        </div>
  
        {/* Login Info Section */}
        <div className="bg-blue-700 w-full md:w-[520px] h-160 rounded-none shadow-md p-8 flex flex-col justify-between text-white">
          <h2 className="text-2xl font-bold mt-4 ">Come Join Us.</h2>
          <p className="text-md mt-2 mb-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus nostrum dolores a quos, atque similique libero, nisi dignissimos ducimus voluptate soluta corporis, aspernatur accusamus beatae!
            <br />
            Inventore aliquam voluptate itaque aspernatur vero veniam error officia ut deleniti blanditiis.
          </p>
          <button
            type="button"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-full"
            onClick={SigninButton}
          >
            Already have an account? Sign in.
          </button>
        </div>
      </div>
    </>
  );
  
}

export default Signup