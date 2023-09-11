import {useState,useEffect} from 'react'
import { addAccount } from '../../api/AccountApi';
import {toast,ToastContainer} from 'react-toastify';
import { useNavigate } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';

const RegistrationPage = () => {
    const navigate = useNavigate();
    const[userInfo,setUserInfo] = useState({
        firstName:'',
        lastName:'',
        contact:'',
        address:'',
        age:'',
        email:'',
        password:''
    })
    const [confirmPassword,setConfirmPassword] = useState('');
    const [errMsg,setErrMsg] = useState('');
    const [disableBtn,setDisableBtn] = useState(false);

    const showToast = (status,message)=>{
        toast[status](message);
    }
    const handleOnChange= (e)=>{
      
        const {name,value} = e.target;
        setUserInfo((prevState) =>({...prevState,[name]:value}))
    }
    const handleSubmit = async (e)=>{
        e.preventDefault();
        try {
            const response = await addAccount(userInfo);
            showToast('success','Account has been created ! !');
            setTimeout(() => {
                navigate('/auth')
              }, 2000); // 
           
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(()=>{

        if(userInfo.password !== confirmPassword){
            setErrMsg('password not match ');
            setDisableBtn(true)

        }
        else{
            setErrMsg('');
            setDisableBtn(false);
        }
    },[confirmPassword,userInfo.password]);
    return ( 
           <>
            <ToastContainer/>
            <div className="w-full h-full flex flex-col items-center justify-center flex-col space-y-4  ">
           
                <div className="flex items-center justify-center p-10 space-y-4  w-full">
                    <h1 className="text-xl lg:text-3xl text-bold">Registration Page</h1>
                </div>
                <div className="flex flex-col space-y-4 w-full  p-2">
                    <div className='grid grid-cols-4 gap-4 w-full '>
                        <input 
                            className="text-sm lg:text-md rounded-lg border-2 p-2 focus:outline-none col-span-2" 
                            type='text'
                            placeholder="First Name"
                            name="firstName" onChange={handleOnChange} />
                        <input 
                            className="text-sm lg:text-md rounded-lg border-2 p-2 focus:outline-none col-span-2" 
                            type='text'
                            placeholder="Last Name"
                            name="lastName" onChange={handleOnChange} />
                         <input 
                            className="text-sm lg:text-md rounded-lg border-2 p-2 focus:outline-none col-span-2" 
                            type='text'
                            placeholder="address" 
                            name="address" onChange={handleOnChange}/>
                        <input 
                            className="text-sm lg:text-md rounded-lg border-2 p-2 focus:outline-none" 
                            type='text'
                            placeholder="Contact Number" 
                            name="contact" onChange={handleOnChange}/>
                         <input 
                            className="text-sm lg:text-md rounded-lg border-2 p-2 focus:outline-none" 
                            type='text'
                            placeholder="Age" 
                            name="age" onChange={handleOnChange}/>
                        <input 
                            className="text-sm lg:text-md rounded-lg border-2 p-2 w-full col-span-4" 
                            type='text'
                            placeholder="Email"
                            name="email" onChange={handleOnChange} />
                         <input 
                            className={` ${errMsg ? 'w-full border-red-500 text-md lg:text-md rounded-lg border-2 p-2 focus:outline-none col-span-2': 'text-sm lg:text-md rounded-lg border-2 p-2 focus:outline-none col-span-2'}`}
                            type='password'
                            placeholder="Password"
                            name="password" onChange={handleOnChange} />
                         <input 
                            className={` ${errMsg ? 'w-full border-red-500 text-md lg:text-md rounded-lg border-2 p-2 focus:outline-none col-span-2': 'text-sm lg:text-md rounded-lg border-2 p-2 focus:outline-none col-span-2 '}`}
                            type="password" 
                            placeholder="Confirm Password" onChange={(e)=>setConfirmPassword(e.target.value)}/>
                            {errMsg? (<p className='text-red-500'> {errMsg}</p>) : ''}
                        
                    </div>
                    <div className={`${disableBtn? 'opacity-25 w-full bg-blue-500 p-2 rounded-lg text-white text-sm lg:text-xl':'opacity-100 w-full bg-blue-500 p-2 rounded-lg text-white text-sm lg:text-xl' }`}>
                        <button className="w-full" onClick={handleSubmit} disabled={disableBtn}  >REGISTER</button>
                    </div>
                </div>
               
            </div>
           </>
            
       
     );
}
 
export default RegistrationPage;