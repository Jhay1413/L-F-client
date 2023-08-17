import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import LandingLayout from './components/LandingPage/LandingPageLayout'
import LandingHome from './components/LandingPage/LandingPageHome'
import {Routes,Route,Link } from 'react-router-dom'

import AuthIndex from './components/AuthPage/Auth_Index'
import AdminApp from './components/admin/AdminApp'
import AdminIndex from './components/admin/AdminPages'
import AdminLayout from './components/admin/AdminLayout'
function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<LandingLayout><LandingHome/></LandingLayout>} />
        <Route path='/Login' element={<AuthIndex/>} />
        <Route path='/admin/*' element={<AdminApp/>} />
      </Routes>
     
    </>
  )
}

export default App