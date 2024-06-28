// useFetchConversations.js
import { useState, useEffect } from 'react';
import axios from 'axios';

const useFetchConversations = () => {
  const [loading, setLoading] = useState(false);
  const [conversations, setConversations] = useState([]);
  const [user, setUser] = useState({});

  useEffect(() => {
    const data = localStorage.getItem("userData");
    if (data) {
      const userData = JSON.parse(data);
      setUser(userData);
    }
  }, []);

  useEffect(() => {
    const fetchConversations = async () => {
      if (!user._id) return;

      setLoading(true);

      try {
        const res = await axios.get(`http://localhost:3000/msg/getChats/${user._id}`);
        setConversations(res.data);
      } catch (error) {
        console.log(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchConversations();
  }, [user]);

  return { loading, conversations, user };
};

export default useFetchConversations;
