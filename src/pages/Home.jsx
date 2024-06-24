import React,{useEffect} from 'react'
import { selectUser } from '../redux/authSlice';
import FetchUsers from '../hooks/FetchUsers';
import { useSelector, useDispatch } from 'react-redux';
import { fetchData,selectData, selectIsLoading, selectError } from '../redux/conversationSlice';
import Loading from '../components/Loading';
import { selectIsAuthenticated } from '../redux/authSlice';

const Home = () => {
  const dispatch = useDispatch();
  const data = useSelector(selectData);
  const user = useSelector(selectUser)
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const isAuthenticated = useSelector(selectIsAuthenticated);
  console.log(isAuthenticated)


  const {loading,conversations} = FetchUsers();
  useEffect(() => {
    if (user && user._id) {
      dispatch(fetchData(user._id));
    }
  }, [dispatch, user]);

  console.log(user) 
  console.log(data)
  if(isLoading){
    return <Loading />;
  }
  return (
    <>
      <div className="text-center text-3xl">Home</div>
    </>
  )
}

export default Home
