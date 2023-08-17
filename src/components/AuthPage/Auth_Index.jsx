import './Auth.css';
import LoginPage from './LoginPage';
const AuthIndex = () => {
    return ( 
        <>
            <div className="w-full h-screen bg-gray-200 flex justify-center items-center">
                <div className="h-4/5 bg-white w-3/5 flex items-center justify-between ">
                    <div className="h-full w-1/2">
                        <LoginPage/>
                    </div>
                    <div className="h-full  w-1/2 auth-image">
                        
                    </div>
                </div>
           </div>
        </>
     );
}
 
export default AuthIndex;