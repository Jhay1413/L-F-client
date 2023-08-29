import {useState,useEffect} from 'react'




const RegistrationPage = () => {
    const[userInfo,setUserInfo] = useState({
        name: '',
        contact:'',
        email:'',
        password:''
    })
    const [confirmPassword,setConfirmPassword] = useState('');
    const [errMsg,setErrMsg] = useState('');

    const handleOnChange= (e)=>{
        const {name,value} = e.target;
        setUserInfo((prevState) =>({...prevState,[name]:value}))
    }
    const handleSubmit = ()=>{

        if(userInfo.password !== confirmPassword){
            setErrMsg("password not equal")
        }
    }
    useEffect(()=>{

        if(userInfo.password !== confirmPassword){
            setErrMsg('password not match ')
        }
        else{
            setErrMsg('');
        }
    },[confirmPassword,userInfo.password]);
    return ( 
    
            <div className="w-full h-full flex items-center justify-center flex-col space-y-4 ">
                
                <div className="flex flex-col items-center space-y-4 ">
                    <h1 className="text-xl lg:text-3xl text-bold">Registration Page</h1>
                    
                </div>
                <div className="flex flex-col space-y-4 w-full  items-center p-2">
                    <input 
                        className="text-sm lg:text-xl rounded-lg border-2 p-2 w-full" 
                        type='text'
                        placeholder="Name"
                        name="name" onChange={handleOnChange} />
                     <input 
                        className="text-sm lg:text-xl rounded-lg border-2 p-2 w-full" 
                        type='text'
                        placeholder="Contact Number" 
                        name="contact" onChange={handleOnChange}/>
                     <input 
                        className="text-sm lg:text-xl rounded-lg border-2 p-2 w-full" 
                        type='text'
                        placeholder="Email"
                        name="email" onChange={handleOnChange} />
                    <div className='grid grid-cols-2  w-full space-x-2'>
                        <input 
                            className={` ${errMsg ? 'w-full border-red-500 text-md lg:text-lg rounded-lg border-2 p-2 focus:outline-none': 'text-sm lg:text-lg rounded-lg border-2 p-2 focus:outline-none '}`}
                            type='password'
                            placeholder="Password"
                            name="password" onChange={handleOnChange} />
                        <input 
                            className={` ${errMsg ? 'w-full border-red-500 text-md lg:text-lg rounded-lg border-2 p-2 focus:outline-none': 'text-sm lg:text-lg rounded-lg border-2 p-2 focus:outline-none '}`}
                            type="password" 
                            placeholder="Confirm Password" onChange={(e)=>setConfirmPassword(e.target.value)}/>
                            {errMsg? (<p className='text-red-500'> {errMsg}</p>) : ''}
                   </div>
                   <div className="w-full bg-blue-500 p-2 rounded-lg text-white text-sm lg:text-xl">
                    <button className="w-full" onClick={handleSubmit} >REGISTER</button>
                </div>
                    
                </div>
               
            </div>
       
     );
}
 
export default RegistrationPage;