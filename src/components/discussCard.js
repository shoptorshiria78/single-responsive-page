"use client"

import Image from "next/image";
import { FcLike } from "react-icons/fc";
import { FaEye } from "react-icons/fa";
import { FaRegCommentAlt } from "react-icons/fa";
import { IoShareSocial } from "react-icons/io5";


const DiscussCard = ({ item }) => {
    return (

        <div className="flex gap-2 mb-16 p-4 shadow-lg rounded-md">
            {/* profile picture of the card */}
            <div >
                <div className=' w-15 h-15 ' style={{ borderRadius: '200px', overflow: 'hidden' }}><Image src={item.img} alt='picture' width={100} height={50} objectFit="cover" /></div>
            </div>
            {/* middle content of the card */}
            <div className="flex-grow">
                {/* name and badge */}
                <div className="flex">
                    <p className="text-lg font-semibold">{item.name}</p>
                    <p className='text-white w-18 text-[10px] bg-blue-800 rounded-2xl px-3 py-2 ml-4'>{item.sector}</p>
                </div>
                {/* details of the card */}
                <p className="text-sm my-3">{item.details}</p>
                {/* reaction icons of the card */}
                <div className="flex justify-between">
                    <div className="flex items-center justify-center h-3"> <FcLike className="text-2xl"/> <span className="ml-1 text-xs font-semibold">{item.like}k</span></div>
                    <div className="flex items-center justify-center h-3"> <FaEye className="text-2xl" /><span className="ml-1 text-xs font-semibold">{item.view}k</span></div>
                    <div className="flex items-center justify-center h-3"> <FaRegCommentAlt className="text-2xl" /><span className="ml-1 text-xs font-semibold">{item.comment}k comments</span></div>
                    <div className="flex items-center justify-center h-3"> <IoShareSocial className="text-2xl" /></div>
                </div>
            </div>
            {/* time within the card */}
            <div className="font-semibold text-blue-700 text-[10px] w-24">{item.time} min ago</div>
        </div>
    );
};

export default DiscussCard;