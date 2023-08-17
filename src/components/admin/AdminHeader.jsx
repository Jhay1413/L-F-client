import { FaGripLines, FaGripLinesVertical } from "react-icons/fa6";
const AdminHeader = ({navState,setNavState}) => {
    return ( 
        <>
            <div className="p-2 text-2xl text-black">
               <button onClick={()=> setNavState(!navState)} className={`transition-transform duration-1000 ease-in-out transform ${navState ? 'rotate-0' : 'rotate-45'}`}>{navState ? <FaGripLines/> : <FaGripLinesVertical/>}</button>
            </div>
        </>
     );
}
 
export default AdminHeader;