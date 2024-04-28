import { FaGripLines, FaGripLinesVertical } from "react-icons/fa6";
import { useNavigate } from "react-router";
import { BsFillCaretLeftFill } from "react-icons/bs";
const AdminHeader = ({navState,setNavState}) => {
    const navigate = useNavigate();
    return ( 
        <>
            <div className="p-2 text-2xl text-black flex justify-between ">
            <button
  onClick={() => setNavState(!navState)}
  style={{
    transition: 'transform 1s ease-in-out',
    transform: `rotate(${navState ? '180deg': '0deg'})`,
  }}
>
  {navState ? <BsFillCaretLeftFill /> : <BsFillCaretLeftFill />}
</button>
            </div>
        </>
     );
}
 
export default AdminHeader;