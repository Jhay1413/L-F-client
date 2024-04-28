import React, { useEffect } from 'react'
import { useNavigate } from 'react-router';
import logo from '../../../public/logo.png'
function AuthLayout({ children }) {
  const navigate = useNavigate()

  useEffect(() => {
    const userInfo = localStorage.getItem('userInfo');
    const userInfoObj = JSON.parse(userInfo);

    if (userInfoObj?.token) {
      userInfoObj.userRoles === 1 ? navigate('/Users/', { replace: true }) : navigate('/Admin/', { replace: true })
    }
    else {
      navigate('/auth', { replace: true });
    }
  }, [])
  return (
    <div className="flex items-center justify-center w-screen md:p-12 min-h-screen bg-gradient-to-r from-red-800 to-blue-500">
      <div className="grid grid-cols-1 lg:grid-cols-2 w-full bg-white rounded-lg  bg-gradient-to-r from-red-600 via-yellow-600 to-red-600 ">
        <div className="hidden lg:h-full lg:flex  lg:justify-center ">
          <img src={logo} alt="Logo" className='rounded-lg object-fit' />
        </div>
        <div className="flex w-full min-h-full bg-white p-2 ">
          {children}

        </div>
      </div>

    </div>
  )
}

export default AuthLayout