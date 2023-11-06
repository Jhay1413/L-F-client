import React, { useEffect } from 'react'
import { useNavigate } from 'react-router';
import logo from '../../../public/logo.png'
function AuthLayout({children}) {
  const navigate = useNavigate()
  
  useEffect(()=>{
    const userInfo = localStorage.getItem('userInfo');
    const userInfoObj = JSON.parse(userInfo);

    if(userInfoObj?.token){
      userInfoObj.userRoles === 1 ?  navigate('/Users/',{replace:true}) :  navigate('/Admin/',{replace:true})
    }
    else{
      navigate('/auth',{replace:true});
    }
  },[])
  return (
    <div className="w-full h-screen bg-gray-200 flex justify-center items-center">
      <div className="h-full lg:h-4/5 bg-white w-full lg:w-3/5 flex items-center justify-center lg:justify-between">
        <div className="h-full w-full lg:w-1/2">
            {children}
           
        </div>
        <div className="hidden lg:h-full lg:w-1/2 lg:block lg:flex lg:justify-center">
          <img src={logo} alt="Logo" className='rounded-lg'/>
        </div>
    </div>
</div>
  )
}

export default AuthLayout