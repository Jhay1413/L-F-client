import { useNavigate } from "react-router";

const UserHeader = () => {
    const navigate = useNavigate();
    const userInfo = localStorage.getItem('userInfo');
    const userInfoObj = JSON.parse(userInfo);
    const logout = () =>{
        localStorage.removeItem('userInfo');
        navigate('/auth/')
    }
    return ( 
        <>
            <div className="w-8/12 mx-auto p-3">
                <ul className="w-full flex flex-row justify-end space-x-4 text-white text-sm">
                    <li className="">{userInfoObj.firstName}</li>
                    <li><button onClick={logout}>LOGOUT</button></li>
                </ul>
            </div>

        </>
     );
}
 
export default UserHeader;