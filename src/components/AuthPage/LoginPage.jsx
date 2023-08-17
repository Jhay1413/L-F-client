import { useState } from 'react';
import {Routes,Route,Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import {toast,ToastContainer} from 'react-toastify';
const LoginPage = () => {
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
                    <h1 className="text-4xl text-bold">Login Page</h1>
                    <p className="text-gray-400">Login your EVSU Account !</p>
                </div>
                
                <div className="flex flex-col space-y-4 w-3/4">

                    <input className="text-2xl rounded-lg border-2 p-2" type="Text" placeholder="User ID" onChange={(e)=>setUser(e.target.value)}/>
                    <input className="text-2xl rounded-lg border-2 p-2" type="password" placeholder="Password"onChange={(e)=>setPassword(e.target.value)}/>
                </div>
                <div className="w-3/4 bg-blue-500 p-2 rounded-lg text-white text-2xl">
               
                <button className="w-full" onClick={login}>LOGIN</button>
                </div>
            </div>
        </>
    )
}
 
export default LoginPage;