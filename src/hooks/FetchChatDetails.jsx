// useFetchConversations.js
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';

const useFetchChatDetails = (id) => {
  const [loadingChat, setLoadingChat] = useState(false);
    const [chat,setChat] = useState({})
  

  useEffect(() => {
    const fetchMessages = async () => {
      if (!user._id) return;

      setLoadingChat(true);

      try {
        const res = await axios.get(`http://localhost:3000/user/${id}`)
        setChat(res.data)
      } catch (error) {
        console.log(error.message);
      } finally {
        setLoadingChat(false);
      }
    };

    fetchMessages();
  }, [user,id]);

  return { loadingChat, chat };
};

export default useFetchChatDetails;
