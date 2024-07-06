import React, { useState } from 'react';
import { BsThreeDotsVertical } from "react-icons/bs";
import { MdDelete } from "react-icons/md";
import { useNavigate } from 'react-router-dom';

const ChatInfo = ({ data }) => {
    const [chatId, setChatId] = useState("");
    const navigate = useNavigate();

    return (
        <div className="w-full flex items-center justify-start h-[50px] mt-2 shadow" onClick={() => {
            setChatId(data._id);
            if (data._id) {
                navigate(`chat/${data._id}`);
            }
        }}>
            <div className="min-h-[30px] min-w-[30px] m-2 rounded-full bg-zinc-400 flex justify-center items-center">
                <div>{data.name[0]}</div>
            </div>
            <div className="flex w-[100%] flex-col">
                <div className="font-semibold text-[15px]">{data.name}</div>
                <div className="flex w-full items-center justify-start">
                    <div className="time text-black-400 text-[12px] font-bold">2 min ago</div>
                </div>
            </div>
            <div className="group relative">
                <div className="min-w-[30px] min-h-[30px] group-hover:bg-zinc-200 duration-150 rounded-full flex justify-center items-center">
                    <BsThreeDotsVertical />
                </div>
                <div className="hidden absolute w-[200px] shadow rounded-md z-[2] duration-500 transition-colors right-[10px] top-[100%] bg-white border-[4px] border-[black] group-hover:block">
                    <div className="w-full flex flex-col">
                        <div className="w-full text-center flex items-center text-red-500 font-bold my-2">
                            <MdDelete className="text-[20px] mx-3" />
                            <span>Delete chat</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ChatInfo;
