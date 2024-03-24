import { IoPersonSharp } from "react-icons/io5";
import { IoIosNotifications } from "react-icons/io";
import { IoMdArrowDropdown } from "react-icons/io";
import { BiMessageAltDetail } from "react-icons/bi";
import { BiSolidDollarCircle } from "react-icons/bi";

const DrawerContent = () => {
    return (
        <div>
            {/* heading part */}
            <div className="flex justify-between items-center p-4 text-white">
                <div className="flex">
                    <IoPersonSharp className="text-xl" />
                    <p className="ml-2">Hello, User</p>
                </div>
                <IoIosNotifications className="text-xl" />
            </div>
            <hr className="text-white text-sm" />
            {/* discussion Forum */}
            <div className="flex justify-between items-center bg-blue-950 mt-2 p-3 text-white">
                <BiMessageAltDetail />
                <p className="text-white text-base">Discussion Forum</p>
                <button className=" text-white text-lg "> <IoMdArrowDropdown /></button>
            </div>

            {/* Market Stories */}
            <div>
               <div className="flex items-center text-white p-3"> 
                <BiSolidDollarCircle />
                <p className="text-white text-base ml-1">Market Stories</p>
                </div>
                <p className="text-white text-base py-3 px-8">Sentiment</p>
                <p className="text-white text-base py-3 px-8">Market</p>
                <p className="text-white text-base py-3 px-8">Sector</p>
                <p className="text-white text-base py-3 px-8">Watch List</p>
                <p className="text-white text-base py-3 px-8">Event</p>
            </div>
        </div>
    );
};

export default DrawerContent;