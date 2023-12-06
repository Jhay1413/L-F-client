import {useState,useEffect} from 'react'
import { addAccount } from '../../api/AccountApi';
import {toast,ToastContainer} from 'react-toastify';
import { useNavigate } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';
import { useQueryClient } from '@tanstack/react-query';
import { Select } from 'antd';

const RegistrationPage = () => {

    const queryClient = useQueryClient();
  
    const userRecord = queryClient.getQueryData(['userRecord']);
    const [selectedRole,setSelectedRole] = useState('Select Role')


    const navigate = useNavigate();
    const[userInfo,setUserInfo] = useState({
        user:'',
        firstName:'',
        lastName:'',
        contact:'',
        address:'',
        age:'',
        email:'',
        password:'',
        image:''
    })
    const [confirmPassword,setConfirmPassword] = useState('');
    const [errMsg,setErrMsg] = useState('');
    const [disableBtn,setDisableBtn] = useState(false);
    const [errMsgId,setErrMsgId] = useState('');
    const showToast = (status,message)=>{
        toast[status](message);
    }
    const handleOnChange= (e)=>{
       
        const {name,value} = e.target;
        setUserInfo((prevState) =>({...prevState,[name]:value}))
    }
    const handleImageChange = (e)=>{
      
            setUserInfo((prevState) => ({
                ...prevState,
                image: e.target.files[0],
            }));
        
      
       
    };
    const handleSubmit = async (e)=>{
        e.preventDefault();

        const userData= userRecord.find(obj => obj.idNo === userInfo.user);
        const formData = new FormData();
        formData.append("user",userData._id)
        formData.append("contact",userInfo.contact)
        formData.append("address",userInfo.address)
        formData.append("email",userInfo.email)
        formData.append("password",userInfo.password)
        formData.append("image",userInfo.image)
        try {
            const response = await addAccount(formData);
            showToast('success','Account has been created ! !');
            setTimeout(() => {
                navigate('/auth')
              }, 2000); // 
           
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(()=>{

        function checkRole () {
                    const userId  = userRecord.some(item=>item.idNo === userInfo.user);
                    if(!userId){
                        setErrMsgId('ID not found!')
                       
                    }
                    else{
                        setErrMsgId('found');  
                        
                    }   
    
        }
        function compare () {
            if(userInfo.password !== confirmPassword){
                setErrMsg('password not match ');
                setDisableBtn(true)
    
            }
            else{
                setErrMsg('');
                setDisableBtn(false);
            }
        }
        checkRole();
        compare();
        
       
    },[confirmPassword,userInfo.password,userInfo.user]);
    return ( 
           <>
            <ToastContainer/>
            <div className="w-full h-full flex flex-col items-center justify-center flex-col space-y-4  ">
           
                <div className="flex flex-col items-center justify-center p-10   w-full">
                    <h1 className="text-xl lg:text-3xl text-bold">Registration Page</h1>
                   
                </div>
                
                <div className="flex flex-col space-y-4 w-full  p-2">
                    
                    <div className='grid grid-cols-4 gap-4 w-full '>
                   
                        <input 
                           className={`${
                            errMsgId
                              === "ID not found!"? 'w-full border-red-500'
                              : 'found'
                          } text-md lg:text-md rounded-lg border-2 p-2 focus:outline-none col-span-4`}
                            type='text'
                            placeholder="Enter ID"
                            name="user" onChange={handleOnChange}/> 
                          
                        
                          <input 
                            className="text-sm lg:text-md rounded-lg border-2 p-2 w-full col-span-4" 
                            type='text'
                            placeholder="Email"
                            name="email" onChange={handleOnChange}  disabled={errMsgId === "ID not found!" || errMsgId=== ""}/>
                         <input 
                            className="text-sm lg:text-md rounded-lg border-2 p-2 focus:outline-none col-span-2" 
                            type='text'
                            placeholder="address" 
                            name="address" onChange={handleOnChange} disabled={errMsgId === "ID not found!" || errMsgId=== ""}/>
                        <input 
                            className="text-sm lg:text-md rounded-lg border-2 p-2 focus:outline-none col-span-2" 
                            type='text'
                            placeholder="Contact Number" 
                            name="contact" onChange={handleOnChange} disabled={errMsgId === "ID not found!" || errMsgId=== ""}/>
                        
                         <input 
                            className={` ${errMsg ? 'w-full border-red-500 text-md lg:text-md rounded-lg border-2 p-2 focus:outline-none col-span-2': 'text-sm lg:text-md rounded-lg border-2 p-2 focus:outline-none col-span-2'}`}
                            type='password'
                            placeholder="Password"
                            name="password" onChange={handleOnChange} disabled={errMsgId === "ID not found!" || errMsgId=== ""}/>
                         <input 
                            className={` ${errMsg ? 'w-full border-red-500 text-md lg:text-md rounded-lg border-2 p-2 focus:outline-none col-span-2': 'text-sm lg:text-md rounded-lg border-2 p-2 focus:outline-none col-span-2 '}`}
                            type="password" 
                            placeholder="Confirm Password" onChange={(e)=>setConfirmPassword(e.target.value)} disabled={errMsgId === "ID not found!" || errMsgId=== ""}/>
                            {errMsg? (<p className='text-red-500'> {errMsg}</p>) : ''}
                          
                        <input type="file" accept="image/*" className='text-sm lg:text-md rounded-lg border-2 p-2 w-full col-span-4' name = "ItemImage"  onChange={handleImageChange} disabled={errMsgId === "ID not found!" || errMsgId=== ""}/>
                        
                    </div>
                    <div className={`${disableBtn? 'opacity-25 w-full bg-blue-500 p-2 rounded-lg text-white text-sm lg:text-xl':'opacity-100 w-full bg-blue-500 p-2 rounded-lg text-white text-sm lg:text-xl' }`}>
                        <button className="w-full" onClick={handleSubmit} disabled={disableBtn}>REGISTER</button>
                    </div>
                </div>
               
            </div>
           </>
            
       
     );
}
 
export default RegistrationPage;