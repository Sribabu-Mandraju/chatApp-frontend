import React,{useState,useEffect} from 'react'
import useFetchConversations from '../hooks/FetchUsers';
import Loading from '../components/Loading';
import { useSelector } from 'react-redux';


const Home = () => {  
  const dataOfUser = useSelector((state)=>state.auth.user)
  console.log("user ",dataOfUser)
  const [user,setUser] = useState({})
  const {loading,conversations,userDetails} = useFetchConversations();
  // console.log(conversations)

  useEffect(()=> {
    const data = localStorage.getItem("userData")
    const userData = JSON.parse(data);
    setUser(userData)
  },[])
  if(loading){
    return (
      <Loading />
    )
  }
  return (
    <div>
      <div className="text-center">Home</div>
    </div>
  )
}

export default Home
