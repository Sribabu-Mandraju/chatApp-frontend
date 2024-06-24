import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Login from './pages/auth/Login'
import Home from './pages/Home'
import Register from './pages/auth/Register'
import PrivateRoutes from './utils/PrivateRoutes'
import { selectIsAuthenticated } from './redux/authSlice';
import { useSelector } from 'react-redux';
import NotFound from './components/NotFound';
import About from './pages/About';






const  App = () => {
  const isAuthenticated = useSelector(selectIsAuthenticated);
  console.log(isAuthenticated)

  return (
   <>
      <Routes>
            <Route element={<PrivateRoutes />}>
                <Route element={<Home/>} path="/" exact/>
                <Route element={<About />} path="/about" />
            </Route>
            <Route element={<Login/>} path="/login"/>
            <Route element={<Register/>} path="/  "/>
            <Route path="*" element={<NotFound />} /> 
      </Routes>
   </>
  )
}

export default App
