import React from 'react'
import { useSelector } from 'react-redux'

const Profile = () => {
  const userData = useSelector((state) => state.auth.user)
  console.log(userData)
  return (
    <>
      <div className="w-full flex items-center flex-col">
        <div className="w-full flex items-center justify-start">
          
          <div className="flex items-center">
            <div className="w-[40px] h-[40px] rounded-full bg-zinc-600 m-2"></div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Profile
