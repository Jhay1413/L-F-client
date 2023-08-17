import {Routes,Route,Link } from 'react-router-dom'
const LoginPage = () => {
    return ( 
        <>
            <div className="w-full h-full flex items-center justify-center flex-col space-y-4 ">
                <div className="flex flex-col items-center space-y-4">
                    <h1 className="text-4xl text-bold">Login Page</h1>
                    <p className="text-gray-400">Login your EVSU Account !</p>
                </div>
                
                <div className="flex flex-col space-y-4 w-3/4">

                    <input className="text-2xl rounded-lg border-2 p-2" type="Text" placeholder="User ID"/>
                    <input className="text-2xl rounded-lg border-2 p-2" type="password" placeholder="Password"/>
                </div>
                <div className="w-3/4 bg-blue-500 p-2 rounded-lg text-white text-2xl">
               
                <Link to="/admin"><button className="w-full">LOGIN</button></Link>
                </div>
            </div>
        </>
    )
}
 
export default LoginPage;