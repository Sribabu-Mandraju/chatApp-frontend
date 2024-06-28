import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Login from './pages/auth/Login'
import Home from './pages/Home'
import Register from './pages/auth/Register'
import NotFound from './components/NotFound';
import About from './pages/About';






const  App = () => {
  

  return (
   <>
      <Routes>
        <Route element={<Login />} path="/" exact />
        <Route element={<About />} path="/about" />
        <Route element={<Home/>} path="/home"/>
        <Route element={<Register/>} path="/register"/>
        <Route path="*" element={<NotFound />} /> 
      </Routes>
   </>
  )
}

export default App
