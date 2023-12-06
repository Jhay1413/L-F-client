import React from 'react'
import { Route, Routes, } from 'react-router'
import AuthLayout from '../components/AuthPage/AuthLayout'
import LoginPage from '../components/AuthPage/LoginPage'
import RegistrationPage from '../components/AuthPage/Register'
import OutsideDataProvider from '../queries/OutsideDataProvider'



function OutsideRoutes() {
  return (
      
      <AuthLayout>
        <OutsideDataProvider>
          <Routes>
              <Route path = "/" element={<LoginPage/>}/>
              <Route path = "/Register" element={<RegistrationPage/>}/>
          </Routes>
        </OutsideDataProvider>
       
    </AuthLayout>

    
  )
}

export default OutsideRoutes