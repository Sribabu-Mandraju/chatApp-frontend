import React,{useState,useEffect} from 'react'
import { IoMdArrowBack } from "react-icons/io";
import { BsThreeDotsVertical } from "react-icons/bs";
import { MdDelete } from 'react-icons/md';
import { useSelector } from 'react-redux';
import useFetchMessages from '../../hooks/FetchChat';
import Loading from '../Loading';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';




const Chat = () => {
  const navigate = useNavigate()
  const {id} = useParams()
  console.log("id" ,id)
  const {loading,messages,chatDetails,user} = useFetchMessages(id)
  console.log("messages",messages)
  
  console.log("chat details",chatDetails)
  const userData = useSelector((state) => state.auth.user)
  const pathName = window.location.pathname;
  const getPage = pathName.split("/")
  const getExactPage = getPage[getPage.length-2]
  if(loading){
    return (
      <Loading />
    )
  }
  return (
    <>
        <div className="w-full flex items-center justify-between" onClick={() => {
          
        }}>
          <div className="flex items-center">
            <IoMdArrowBack className="text-2xl m-2" onClick={() => {
              navigate("/")
            }} />
            <div className="flex flex-col ms-2">
              <div className="flex items-center">
                <div className="w-[25px] h-[25px] flex rounded-full bg-black text-white font-bold items-center justify-center">
                  <span>S</span>
                </div>
                <div className="flex flex-col">
                  <div className="font-bold ps-2">Sribabu</div>
                </div>
              </div>
            </div>
          </div>
          <div className="group relative">
                <div className="min-w-[30px] min-h-[30px] group-hover:bg-zinc-200 duration-150 rounded-full flex justify-center items-center">
                    <BsThreeDotsVertical />
                </div>
                <div className="hidden   absolute w-[200px] shadow rounded-md z-[2] duration-500 transition-colors  right-[10px] top-[100%] bg-white border-[4px] border-[black] group-hover:block">
                    <div className="w-full flex flex-col">
                        <div className="w-full text-center flex items-center text-red-500 font-bold  my-2"><MdDelete className="text-[20px] mx-3" /><span>Delete chat</span></div>
                    </div>
                </div>
            </div>
          
        </div>
    </>
  )
}

export default Chat
