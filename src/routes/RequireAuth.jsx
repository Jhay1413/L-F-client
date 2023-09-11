import { Outlet, Navigate, useLocation } from "react-router";
import { useAuth } from "../components/admin/context/AuthContext";

const RequireAuth = ({allowedRoles}) => {
  
    const userInfo = localStorage.getItem("userInfo")
    const userInfoObj = JSON.parse(userInfo)
    const location = useLocation();
    return ( 
       allowedRoles ===  userInfoObj?.userRoles
        ? <Outlet/> 
        : userInfoObj?.firstName 
            ? <Navigate to ='/unauthorized/' state={{from:location} } replace/>
            : <Navigate to ='/auth/' state={{from:location} } replace/>
     );
}
 
export default RequireAuth;