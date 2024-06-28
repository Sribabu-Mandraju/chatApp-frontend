import React from 'react'
import { useSelector } from 'react-redux';


const About = () => {
  const dataOfUser = useSelector((state)=>state.auth.user)
  console.log("user ",dataOfUser)
  return (
    <div className="text-center text-5xl">
      About
    </div>
  )
}

export default About
