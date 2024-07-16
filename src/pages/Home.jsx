import React,{useState,useEffect} from 'react'
import useFetchConversations from '../hooks/FetchUsers';
import Loading from '../components/Loading';
import { useSelector } from 'react-redux';
import { BiSolidHome } from "react-icons/bi";
import { TiGroup } from "react-icons/ti";
import { IoIosSearch } from "react-icons/io";
import { BsFillPlusSquareFill } from "react-icons/bs";
import { FaRegUser } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';





const Home = ({children}) => {  
  const navigate = useNavigate();
  const [tab,setTab] = useState("Home")
  const pathName = window.location.pathname;
  const getPage = pathName.split("/")
  const getExactPage = getPage[getPage.length-1]
  console.log(getPage[getPage.length-1])

  // console.log(`${getExactPage === "" || "posts" || "search" || "porfile" || "unread-messages" ?"hidden":""} `})

 
  return (
    <>
      <section className={`w-full  relative max-h-screen min-h-screen sm:hidden `}>
          <div className={`bg-white w-full h-[40px]  items-center justify-around fixed bottom-0 shadow ${getPage[getPage.length-2] == "chat" ? "hidden":"flex"} `}>
              <div className={`flex flex-col justify-center items-center rounded-md  px-2 ${getExactPage==""?" text-[#7a0099] font-bold":""}  p-1`} onClick={()=>{
                setTab("Home")
                navigate("/")
              }}>
                <BiSolidHome />
                <div className="font-semibold text-[10px]">Home</div>
              </div>
              <div className={`flex flex-col justify-center items-center rounded-md  px-2 ${getExactPage=="unread-messages"?" text-[#7a0099] font-bold":""}  p-1`} onClick={()=> {
                setTab("Unread")
                navigate("/unread-messages")
              }}>
                <TiGroup />
                <div className="font-semibold text-[10px]">Groups</div>
              </div>
              <div className={`flex flex-col justify-center items-center rounded-md  px-2 ${getExactPage=="search"?" text-[#7a0099] font-bold":""}  p-1`} onClick={()=>{
                setTab("Search")
                navigate("/search")
              }}>
                <IoIosSearch />
                <div className="font-semibold text-[10px]">Search</div>
              </div>
              <div className={`flex flex-col justify-center items-center rounded-md  px-2 ${getExactPage=="posts"?" text-[#7a0099] font-bold":""}  p-1`} onClick={()=>{
                setTab("Post")
                navigate("/posts")
              }}>
                <BsFillPlusSquareFill />
                <div className="font-semibold text-[10px]">Post</div>
              </div>  
              <div className={`flex flex-col justify-center items-center rounded-md  px-2 ${getExactPage=="profile"?" text-[#7a0099] font-bold":""}  p-1`} onClick={()=>{
                setTab("Profile")
                navigate("/profile")
              }}>
                <FaRegUser />
                <div className="font-semibold text-[10px]">Profile</div>
              </div>  
          </div>
          <div className={`w-full h-[calc(100vh-40px)] overflow-y-scroll  ${getPage[getPage.length-2] == "chat" ? "h-screen":"h-[calc(100vh-40px)]ex"}`}>
            {children}
          </div>
      </section>
    </>
  )
}

export default Home
