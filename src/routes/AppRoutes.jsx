import React from 'react'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Login from '../pages/Login.jsx'
import Signup from '../pages/Signup.jsx'
import Dashboard from '../pages/Dashboard.jsx'
import Side from '../components/Sidebar.jsx'
import Nav from '../components/Navbar.jsx'
import Home from '../components/Home.jsx'
import UserTable from '../pages/UserList.jsx'
import Report from '../pages/Report.jsx'
import Profile from '../pages/Profile.jsx'
import Employee  from '../pages/Employee.jsx' 
import Level1 from '../components/Level1.jsx'
import Level2 from '../components/Level2.jsx'
import Level3 from '../components/Level3.jsx'
const AppRoutes = () => {
  return (
   <>
   <BrowserRouter>
        <Routes>
                <Route path='/' element={(<Login />)} />
                <Route path='/signup' element={(<Signup />)} />
                <Route path='/dash' element={(<Dashboard />)} />
                <Route path='/side' element={(<Side />)} />
                <Route path='/navbar' element={(<Nav />)} />
                <Route path='/home' element={(<Home />)} />
                <Route path='/report' element={(<Report />)} />
               <Route path="/table" element={<UserTable />} />
               <Route path="/profile" element={<Profile />} />
               <Route path="/employee" element={<Employee />} >
                    <Route path="Level1" element={<Level1 />} />
                    <Route path="Level2" element={<Level2 />} />
                    <Route path="Level3" element={<Level3 />} />
               </Route>
        </Routes>
    </BrowserRouter>
    </>
  )
}

export default AppRoutes















