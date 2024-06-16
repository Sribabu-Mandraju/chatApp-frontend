import { useState } from 'react'
import './App.css'
import {Route,Routes} from 'react-router-dom'
import Login from './pages/auth/Login'
import Home from './pages/Home'
import Register from './pages/auth/Register'


const  App = () => {

  return (
   <>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/home" element={<Home />} />
    </Routes>
   </>
  )
}

export default App
