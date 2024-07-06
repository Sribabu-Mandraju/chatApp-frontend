import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Login from './pages/auth/Login'
import Home from './pages/Home'
import Register from './pages/auth/Register'
import NotFound from './components/NotFound';
import About from './pages/About';
import PrivateRoutes from './utils/PrivateRoutes';
import MainPage from './pages/MainPage';
import Posts from './pages/Posts';
import Profile from './pages/Profile';
import UnreadMessages from './pages/UnreadMessages';
import Search from './pages/Search';
import Chat from './components/share/Chat';





const  App = () => {
  

  return (
   <>
      <Home >
        <Routes>
              <Route element={<PrivateRoutes />}>
                  <Route element={<MainPage/>} path="/" exact/>
                  <Route element={<Posts />} path="/posts" />
                  <Route element={<Profile />} path="/profile" />
                  <Route element={<Search />} path="/search" />
                  <Route element={<UnreadMessages />} path="/unread-messages" />
                  <Route element={<Chat />} path="/chat/:id" />
              </Route>
              <Route element={<Login/>} path="/login"/>
              <Route element={<Register/>} path="/  "/>
              <Route path="*" element={<NotFound />} /> 
        </Routes>
      </Home>
   </>
  )
}

export default App
