import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { MdOutlineEmail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import { FaXTwitter } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";
import Loading from "./Loading";
import axios from 'axios';
import { signInStart, signInSuccess, signInFailure } from '../store/authSlice';
import { useDispatch, useSelector } from 'react-redux';



const SigninComponent = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [data, setData] = useState({
        email: "",
        password: ""
    });
    const [loading, setLoading] = useState(false);
    const [error, setError] =useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        dispatch(signInStart());
        try {
            setLoading(true);
            const response = await axios.post("http://localhost:3000/signin", data);
            
            if (response.status === 200) {
                const result = JSON.stringify(response.data);
                localStorage.setItem("userData", result);
                dispatch(signInSuccess(response.data));
                setData({
                    email: '',
                    password: ''
                });
                navigate('/home');
            }
        } catch (error) {
            console.error('Error:', error.message);
            setError(error.response?.data?.message || 'An error occurred');
            dispatch(signInFailure(error.response?.data || 'An error occurred'));
        } finally {
            setLoading(false);
        }
    };

    if (loading) {
        return <Loading />;
    }
    return (
        <div className="w-full flex items-center justify-center min-h-screen bg-zinc-50">
            <form onSubmit={handleSubmit} className="w-[97%] max-w-[400px] z-[2] mx-auto flex flex-col shadow rounded-[5px] bg-white">
                <div className="text-center font-bold text-2xl mt-5 text-violet-700">Sign In</div>
                <div className="text-center italic text-zinc-400 text-[12px]">Sign in to explore realms of this application</div>
                <div className="flex items-center relative mt-2">
                    <input
                        type="email"
                        name="email"
                        value={data.email}
                        onChange={handleChange}
                        className="bg-[#edf5f6] w-[95%] mx-auto ps-[40px] h-[40px] rounded-md"
                        placeholder="Your Email"
                    />
                    <MdOutlineEmail className="absolute left-[20px] z-[1]" />
                </div>
                <div className="flex items-center relative mt-2">
                    <input
                        type="password"
                        name="password"
                        value={data.password}
                        onChange={handleChange}
                        className="bg-[#edf5f6] w-[95%] mx-auto ps-[40px] h-[40px] rounded-md"
                        placeholder="Your Password"
                    />
                    <RiLockPasswordLine className="absolute left-[20px] z-[1]" />
                </div>
                <div className="flex my-4 w-[95%] mx-auto">
                    <input type="checkbox" required />
                    <p className="text-left ps-2 text-sm">
                        <span className="text-black">Terms and Services</span> and{" "}
                        <span className="text-black">Privacy Policy</span>
                    </p>
                </div>
                {error && <p style={{ color: 'red', textAlign: 'center' }}>{error}</p>}
                <button type="submit" className="w-[95%] mx-auto mb-4 bg-violet-500 text-white py-2 mt-2 rounded-[5px] hover:bg-violet-600">
                    Login
                </button>
                <p className="text-center">
                    <span className="text-[grey]">Don't have an account? </span>
                    <Link to="/register" className="hover:underline">Register</Link>
                </p>
                <div className="flex w-full items-center justify-between h-[50px]">
                    <div className="w-[35%] h-[1px] bg-[grey] mx-auto"></div>
                    <div className="mx-auto pb-1">or</div>
                    <div className="w-[35%] h-[1px] bg-[grey] mx-auto"></div>
                </div>
                <button className="flex justify-center items-center text-center text-black p-2 w-[95%] mx-auto rounded-md border-[1px] border-gray-500 hover:shadow-md">
                    <FcGoogle />
                    <span className="ml-4">Sign Up With Google</span>
                </button>
                <button className="mb-5 flex justify-center items-center text-center mt-2 text-black p-2 w-[95%] mx-auto rounded-md border-[1px] border-gray-500 hover:shadow-md">
                    <FaXTwitter />
                    <span className="ml-4">Sign Up With Twitter</span>
                </button>
            </form>
        </div>
    );
};

export default SigninComponent;
