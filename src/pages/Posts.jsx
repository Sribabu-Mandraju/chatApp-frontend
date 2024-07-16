
import React from 'react'
import { IoMdArrowRoundBack } from "react-icons/io";
import PostComponent from '../components/share/PostComponent'

const Posts = () => {
  return (
    <>
      <div className="w-full flex items-center justify-between">
        <div className="flex items-center">
        <div className="w-[40px] h-[40px] rounded-full hover:bg-zinc-400 flex justify-center items-center duration-200 text-2xl my-2">
          <IoMdArrowRoundBack />
        </div>
        <div className="w-[40px] h-[40px] rounded-full bg-zinc-600 my-2"></div>
        </div>
      </div>
      <PostComponent />
    </>
  )
}

export default Posts
