// useFetchConversations.js
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';

const useFetchMessages = (id) => {
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState([]);
  const {chatDetails,setChatDetails} = useState({})
    const user = useSelector((state)=>state.auth.user)
  

  useEffect(() => {
    const fetchMessages = async () => {
      if (!user._id) return;

      setLoading(true);

      try {
        const res = await axios.get(`http://localhost:3000/msg/getMessages/${user._id}/${id}`);
        console.log(id)
        const res2 = await axios.get(`http://localhost:3000/user/${id}`)
        setChatDetails(res2.data)
        setMessages(res.data);
      } catch (error) {
        console.log(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchMessages();
  }, [user]);

  return { loading, messages,chatDetails, user };
};

export default useFetchMessages;
