import React, { useState } from 'react'
import { Link, useNavigate } from "react-router-dom"
import Google from '../assets/google.jpeg'
import Github from '../assets/github.jpeg'
import Linkedin from '../assets/linkedin.webp'
const Login = () => {
 const [email, setEmail] = useState("");
  const [uname,setUname]=useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const submitbutton = (e) => {
    e.preventDefault();
    if (email && password) {
      navigate("/dash");
    } else {
      alert("Please fill all fields");
    }
  };
  const SignupButton=()=>
  {
    navigate("/signup")
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
        
        {/* Signup Section */}
        <div className="bg-blue-700 w-full md:w-[520px] h-120 rounded-none shadow-md p-8 flex flex-col  justify-between text-white">
          <h2 className="text-2xl font-bold mt-4">What's New Here.</h2>
          <p className="text-md mt-2 mb-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus nostrum dolores a quos, atque similique libero, nisi dignissimos ducimus voluptate soluta corporis, aspernatur accusamus beatae!
            <br />
            Inventore aliquam voluptate itaque aspernatur vero veniam error officia ut deleniti blanditiis.
          </p>
          <button
            type="button"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-full"
            onClick={SignupButton}
          >
            New Here? Signup
          </button>
        </div>
  
        {/* Login Section */}
        <div className="bg-white w-full md:w-[520px] h-120 rounded-none shadow-md p-8 flex flex-col justify-between">
          <h1 className="text-2xl font-bold text-center mb-4">Login</h1>
          <form className="space-y-4" onSubmit={submitbutton}>
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
              <label className="block text-gray-700">Password*</label>
              <input
                type="password"
                placeholder="min 8 character"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 outline outline-offset-2 rounded-full mt-2 text-stone-600"
              />
            </div>
  
            <div className="flex items-center justify-between text-sm text-gray-600">
              <label className="flex items-center space-x-2">
                <input type="checkbox" className="accent-blue-600" />
                <span>Remember me</span>
              </label>
              <Link to="/forgot-password" className="text-blue-600 hover:underline">
                Forgot password?
              </Link>
            </div>
  
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-full"
            >
              Login
            </button>
          </form>
  
          {/* Social Logins */}
          <div className="flex items-center my-4">
            <div className="flex-grow border-t border-gray-300"></div>
            <span className="px-4 text-gray-500 text-sm whitespace-nowrap">or Login with</span>
            <div className="flex-grow border-t border-gray-300"></div>
          </div>
  
          <div className="flex justify-center space-x-6">
            <img src={Google} alt="Google" className="h-12 w-12 rounded-full hover:h-13 hover:w-13" onClick={handleGoogle} />
            <img src={Github} alt="GitHub" className="h-12 w-12 rounded-full hover:h-13 hover:w-13" onClick={handleGithub} />
            <img src={Linkedin} alt="LinkedIn" className="h-12 w-12 rounded-full hover:h-13 hover:w-13" onClick={handleLinkedin} />
          </div>
        </div>
      </div>
    </>
  );
  
}

export default Login