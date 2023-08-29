import { useState } from 'react';
import {Routes,Route,Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import {toast,ToastContainer} from 'react-toastify';
const LoginPage = ({onRegisterClick}) => {
    const navigate = useNavigate()
    const [user,setUser] = useState();
    const [password,setPassword] = useState();

    const showToast = (status,message)=>{
        toast[status](message);
      }
      
    const login = ()=>{
        console.log(user,password)
        if(user === "admin" && password === "admin"){
            navigate('/admin')
        }
        else{
            showToast('error','Incorrect username or password !')
        }
    }
    return ( 
        <>
           <ToastContainer/>
            <div className="w-full h-full flex items-center justify-center flex-col space-y-4 ">
                <div className="flex flex-col items-center space-y-4">
                    <h1 className="text-2xl lg:text-4xl text-bold ">Login Page</h1>
                    <p className="text-sm text-gray-400 lg:text-lg">Login your EVSU Account !</p>
                </div>
                
                <div className="flex flex-col space-y-4 w-3/4">

                    <input className="text-lg lg:text-2xl rounded-lg border-2 p-2" type="Text" placeholder="User ID" onChange={(e)=>setUser(e.target.value)}/>
                    <input className="text-lg lg:text-2xl rounded-lg border-2 p-2" type="password" placeholder="Password"onChange={(e)=>setPassword(e.target.value)}/>
                </div>
                <div className="w-3/4 bg-blue-500 p-2 rounded-lg text-white">
                    <button className="w-full lg:text-xl text-sm lg:text-2xl" onClick={login}>LOGIN</button>                
                </div>
                <div className="">
                    <h1>Dosent have an account ? <Link to="/auth/Register" className='text-blue-500'>Sign Up</Link></h1>
                </div>
            </div>
        </>
    )
}
 
export default LoginPage;