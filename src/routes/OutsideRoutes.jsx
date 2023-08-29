import React from 'react'
import { Route, Routes } from 'react-router'
import AuthLayout from '../components/AuthPage/AuthLayout'
import LandingLayout from '../components/LandingPage/LandingPageLayout'
import LoginPage from '../components/AuthPage/LoginPage'
import RegistrationPage from '../components/AuthPage/Register'

function OutsideRoutes() {
  return (
    
    <AuthLayout>
        <Routes>
            <Route path = "/" element={<LoginPage/>}/>
            <Route path = "/Register" element={<RegistrationPage/>}/>
        </Routes>
    </AuthLayout>
  )
}

export default OutsideRoutes