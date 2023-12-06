import {Link} from 'react-router-dom'
import './admin.css'
import { Fa42Group,FaList, FaBookOpen, FaHouseChimney ,FaIdCardClip} from "react-icons/fa6";
const AdminNav = () => {
    return ( 
        <>
          <div className="flex flex-col w-full h-full">
            <div className="flex justify-center items-center text-white  w-full h-20  p-2  text-sm lg:text-lg">
                <h1>Admin -EVSU</h1>
            </div>
            <div className="flex text-gray-200 flex-col ">
              <ul className='text-sm lg:text-md'>
                <Link to="/admin/"><li className='flex justify-start items-center space-x-4 p-4 li-hover'><FaHouseChimney/><h1>Home</h1></li></Link>
                <Link to="/admin/itemlist"><li className='flex justify-start items-center space-x-4 p-4 li-hover'><FaList/><h1>List of Items</h1></li></Link>
                <Link to="/admin/pendingList"><li className='flex justify-start items-center space-x-4 p-4 li-hover'>< FaBookOpen/><h1>Request </h1></li></Link>
                <Link to="/admin/ConfirmedItems"><li className='flex justify-start items-center space-x-4 p-4 li-hover'>< FaBookOpen/><h1>Approved Items</h1></li></Link>
                <Link to="/admin/ClaimedItems"><li className='flex justify-start items-center space-x-4 p-4 li-hover'>< FaBookOpen/><h1>Claimed Items</h1></li></Link>
                <Link to="/admin/UserRecord"><li className='flex justify-start items-center space-x-4 p-4 li-hover'>< FaBookOpen/><h1>User Record</h1></li></Link>
            </ul>
            </div>
          
          </div>
        </>
     );
}
 
export default AdminNav;