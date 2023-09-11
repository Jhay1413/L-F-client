import { FaGripLines, FaGripLinesVertical } from "react-icons/fa6";
import { useNavigate } from "react-router";
const AdminHeader = ({navState,setNavState}) => {
    const navigate = useNavigate();
    const logout = () =>{
        localStorage.removeItem('userData');
        navigate('/auth/')
    }
    return ( 
        <>
            <div className="p-2 text-2xl text-black flex justify-between ">
               <button onClick={()=> setNavState(!navState)} className={`transition-transform duration-1000 ease-in-out transform ${navState ? 'rotate-0' : 'rotate-45'}`}>{navState ? <FaGripLines/> : <FaGripLinesVertical/>}</button>
               <button  onClick={logout}>Logout</button>
            </div>
        </>
     );
}
 
export default AdminHeader;