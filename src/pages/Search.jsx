import React from 'react'
import { MdOutlineSettings } from "react-icons/md";
import { IoSearchSharp } from "react-icons/io5";



const Search = () => {
  return (
    <>
      <div className="w-full flex items-center justify-between " >
        <div className="flex justify-center m-2 w-[40px] h-[40px] rounded-full bg-zinc-500 items-center">
        </div>
        <div className="flex items-center">
          <IoSearchSharp className="me-[-30px] z-[2] mt-[7px]" />
          <input type="text" placeholder='search.....'  className="w-[200px]  border-[1] ps-[30px]  h-[40px] border dbg-zinc-400 rounded-full" />
        </div>
        <div className="w-[40px] h-[40px] rounded-full hover:bg-zinc-400 flex justify-center items-center duration-200 text-2xl m-2">
          <MdOutlineSettings />
        </div>
      </div>
    </>
  )
}

export default Search
