import React ,{useState,useEffect} from 'react'
import { useSelector } from 'react-redux';
import { selectUser } from '../redux/authSlice';
import axios from 'axios'

const FetchUsers = () => {
  const user = useSelector(selectUser)
  console.log(user)
  const [loading,setLoading] = useState(false);
  const [conversations,setConversations] = useState([])

  useEffect(() => {
    const fetchConversations = async () => {
        setLoading(true)
        try {
            const res =await axios.get(`http://localhost:3000/msg/getChats/${user._id}`)
            setConversations(res.data)
            console.log(conversations)
        } catch (error) {
            console.log(error.message)
        }
        finally{
          setLoading(false)
        }
    }
    fetchConversations()
  },[])

  return (loading,conversations)
}

export default FetchUsers
