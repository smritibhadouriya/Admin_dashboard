import React from 'react'
import AppRoute from './routes/AppRoutes'
import { ToastContainer, toast } from 'react-toastify';
const App = () => {
  return (
    <>
     <ToastContainer position="top-center" autoClose={1000} />
        <AppRoute />
    </>
  )
}

export default App