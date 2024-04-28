import {Link} from 'react-router-dom'
import './admin.css'
import { IoExit } from "react-icons/io5";
import { useNavigate } from "react-router";
import { Fa42Group,FaList, FaBookOpen, FaHouseChimney ,FaIdCardClip} from "react-icons/fa6";
import { BsFillFolderFill,BsFillFileEarmarkCheckFill,BsFillFileBreakFill,BsFillFilePersonFill } from "react-icons/bs";
const AdminNav = () => {
  const navigate = useNavigate();
  const logout = () =>{
    localStorage.removeItem('userInfo');
    navigate('/auth/')
}
    return ( 
        <>
          <div className="flex flex-col w-full h-full">
            <div className="flex justify-center items-center text-white  w-full h-20  p-2  text-sm lg:text-lg">
                <h1>Admin -EVSU</h1>
            </div>
            <div className='w-full p-2 text-gray-500 text-md'>
              <h1>Menu</h1>
            </div>
            <div className="flex text-gray-200 flex-col ">
              <ul className='text-sm lg:text-md'>
                <Link to="/admin/"><li className='flex justify-start items-center space-x-4 p-4 li-hover'><FaHouseChimney/><h1>Home</h1></li></Link>
                <Link to="/admin/itemlist"><li className='flex justify-start items-center space-x-4 p-4 li-hover'><FaList/><h1>List of Items</h1></li></Link>
                <Link to="/admin/pendingList"><li className='flex justify-start items-center space-x-4 p-4 li-hover'>< FaBookOpen/><h1>Request </h1></li></Link>
                <Link to="/admin/ConfirmedItems"><li className='flex justify-start items-center space-x-4 p-4 li-hover'><BsFillFolderFill/><h1>Approved Items</h1></li></Link>
                <Link to="/admin/ClaimedItems"><li className='flex justify-start items-center space-x-4 p-4 li-hover'><BsFillFileEarmarkCheckFill /><h1>Claimed Items</h1></li></Link>
                <Link to="/admin/UserRecord"><li className='flex justify-start items-center space-x-4 p-4 li-hover'><BsFillFilePersonFill /><h1>User Record</h1></li></Link>
                <Link to="/admin/UserRecord"><li className='flex justify-start items-center space-x-4 p-4 li-hover'><BsFillFileBreakFill /><h1>Accounts</h1></li></Link>
              </ul>
            </div>
            <div className='w-full p-2 text-gray-500 text-md'>
              <h1>Action</h1>
            </div>
            <button className='flex justify-start items-center space-x-4 p-4 li-hover text-white' onClick={logout}> <IoExit /><h1>Logout</h1></button>
          </div>
        </>
     );
}
 
export default AdminNav;