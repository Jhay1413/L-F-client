import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { IoMenuSharp } from "react-icons/io5";
import { useState,useContext, useEffect } from "react";
import { UserContext } from "./UserContext/UserContext";
import UserHistoryModal from "./UserComponents/HistoryModal";
const UserNavigation = () => {
    const [showNav,setShowNav] = useState(false);
    const [showDropdown,setShowDropdown] = useState(false);
    const [isModalOpen,setIsModalOpen] = useState(false);
    const {data,setUpdate} = useContext(UserContext);
    const [selectedHistory,setSelectedHistory] = useState({}) 

  
    const setSelectedData = (data) => (e) =>{
      e.stopPropagation();  // Prevents the event from propagating
      setSelectedHistory(data);
      setIsModalOpen(!isModalOpen)
  }
    return ( 
        <>
          <div className="lg:w-8/12 w-full mx-auto p-2 flex lg:flex-row flex-col flex justify-between">
            <div className="flex flex-row justify-center w-full">
              <div className="flex flex-col p-2 justify-center w-full ">
                <h1 className="text-lg lg:text-3xl">LOSTINGS</h1>
                <h3 className="text-xs lg:text-sm">LOST IT AND FOUND IT</h3>
              </div>
              <div className="w-full flex justify-end items-center text-4xl lg:hidden">
                <button onClick={()=>setShowNav(!showNav)}>
                  <IoMenuSharp/>
                </button>
              </div>
            </div>
            <ul className={`${showNav? 'flex':'hidden'}  flex-col lg:flex lg:flex-row text-xs w-full  items-center lg:justify-end space-x-4`}>
              <li className="p-4 w-full lg:w-auto items-center justify-center flex lg:w-1/4  hover:bg-gray-200">
                  <Link to="/users/">SUBMIT LOST ITEM</Link>
              </li>
              <li className=" relative p-4 w-full lg:w-auto items-center justify-center flex lg:w-1/4  hover:bg-gray-200">
                <button onClick={(e) => {
                    e.stopPropagation();  // Prevents the event from propagating
                      setShowDropdown(!showDropdown);
                    }}>HISTORY
                </button>
                {showDropdown && (
                  <div className="absolute top-full left-0 mt-2 w-full lg:w-80 rounded-md shadow-lg bg-white z-50 max-h-60 overflow-y-auto ">
                      {data?.map((item)=>(
                          <button  
                            className="px-4 py-4 hover:bg-gray-200 flex justify-between items-center w-full"
                            onClick={setSelectedData(item)}   
                            key={item._id}
                          >
                            <div className="">
                              {item.Date}
                            </div>
                            <div className={`${item.Status == "Found" ? 'text-green-500' : item.Status == "Claimed" ? 'text-yellow-500' : 'text-red-500'}`}>
                              {item.Status}
                            </div> 
                          </button>
        
                        
                      ))
                      }
                  </div>
              )}
                </li>
            </ul>
          </div>
          {isModalOpen ? <UserHistoryModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} selectedHistory ={selectedHistory}/>: null}
         
        </>
     );
}
 
export default UserNavigation;