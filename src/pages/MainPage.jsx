import React,{useState,useEffect} from 'react'
import useFetchConversations from '../hooks/FetchUsers';
import Loading from '../components/Loading';
import ChatInfo from '../components/share/ChatInfo';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

const MainPage = () => {
    const {loading,conversations,userDetails} = useFetchConversations();
    const data = useSelector((state)=> state.chat.data)
    console.log(data)
    console.log(conversations)

    
    if(loading){
        return (
            <Loading />
        )
    }
  return (
    <>
        {/* <div className="text-center">{conversations[0].name}</div> */}
        {
            conversations.map((item) => (
                <ChatInfo data={item} />
            ))
        }
        {
            conversations.map((item) => (
                <ChatInfo data={item} />
            ))
        }
    </>
  )
}

export default MainPage
