import React,{useState,useEffect} from 'react'
import { IoMdArrowBack } from "react-icons/io";
import { BsThreeDotsVertical } from "react-icons/bs";
import { MdDelete } from 'react-icons/md';
import { FaRegSmile } from "react-icons/fa";
import { useSelector } from 'react-redux';
import { LuSend } from "react-icons/lu";

import useFetchMessages from '../../hooks/FetchChat';
import Loading from '../Loading';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'




const Chat = () => {
  const navigate = useNavigate()
  const {id} = useParams()
  const {loading,messages,user} = useFetchMessages(id)
  const [chatDetails,setChatDetails] = useState({})
  const [fetchLoading,setFetchLoading] = useState(false)
  const [send,setSend] = useState(false)
  const [chatMessage,setChatMessage] = useState({
    sendData:""
  })

  console.log(messages)

  console.log(messages)

  const userData = useSelector((state) => state.auth.user)
  console.log(userData._id)
  const pathName = window.location.pathname;
  const getPage = pathName.split("/")
  const getExactPage = getPage[getPage.length-2]
  useEffect(() => {
    const fetchData = async(req,res) => {
      setFetchLoading(true)
      try{
        const response = await axios.get(`http://localhost:3000/user/${id}`)
        setChatDetails(response.data)
        setFetchLoading(false)
      }
      catch(err){
        console.log(err)
        setFetchLoading(false)
      }
    }
    fetchData()
  },[id])

  const handleChatMessage = (e) => {
    const messageData = {...chatMessage}
    messageData[e.target.name] = e.target.value;
    setChatMessage(messageData)
  }
  const handleSend =async (e) => {
    
    console.log(chatMessage)
    try {
      setSend(true)
      const sendChat  = await axios.post(`http://localhost:3000/msg/sendMessage/${id}/${userData._id}`,{message:chatMessage.sendData})
      if(sendChat.ok){
        setChatMessage("")
        setSend(false)
        
      }
    } catch (error) {
      console.log(error)
      setSend(false)
    }
    window.location.reload()
  }
  console.log(chatDetails)
  if(loading || fetchLoading){
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
                <span className="uppercase">{chatDetails && chatDetails.name ? chatDetails.name[0] : 'U'}</span>
                </div>
                <div className="flex flex-col">
                  <div className="font-bold ps-2">{chatDetails && chatDetails.name ? chatDetails.name : 'In valid'}</div>
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
        <div className="w-full flex items-center mt-1">
          <FaRegSmile className="text-2xl ms-2" />
          <input type="text" className="bg-zinc-200 w-70 max-w-[520px] outline-none ps-2 rounded-lg h-[50px] border-[4px]  ms-2 " name="sendData" onChange={handleChatMessage} placeholder='message....' />
          <button className="w-[60px] h-[50px] flex justify-start items-center rounded-r-[50%] bg-black text-white"  type="submit" onClick={() => handleSend()}>
            <LuSend className="text-2xl ms-3" />
          </button>
        </div>
        {
          messages.map((data) => (
            <div className={`w-full flex ${data.receiverId === userData._id ?"justify-end":"justify-start"} relative `}>
              <div className="message w-80 m-2 max-w-[200px] rounded-tr-md min-h-[40px] bg-black text-white text-[12px] p-2 rounded-bl-[10px]">{data.message}</div>
              <div className="absolute bottom-[-30%] text-[12px]  p-2 ">10:44 pm</div>
            </div>
          ))
        }
       
    </>
  )
}

export default Chat
