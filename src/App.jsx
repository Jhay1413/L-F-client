
import './App.css'
import LandingLayout from './components/LandingPage/LandingPageLayout'
import LandingHome from './components/LandingPage/LandingPageHome'
import {Routes,Route} from 'react-router-dom'

import OutsideRoutes from './routes/OutsideRoutes'
import RequireAuth from './routes/RequireAuth'
import InsideAdminRoutes from './routes/InsideAdminRoutes'
import InsideUserRoutes from './routes/InsideUsersRoutes'
import Layout from './components/Layout/Layout'
import UnauthorizedPage from './components/AuthPage/Unauthorized'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
function App() {
  const queryClient = new QueryClient()
    const storedDataString = localStorage.getItem('userData');
    const storedDataObject = JSON.parse(storedDataString);
    const allowedRoles = {
      users:1,
      admin:2
    }
  return (
    <>
     <QueryClientProvider client={queryClient}>
        <ToastContainer/>
        <Routes>
          <Route path='/' element={<Layout/>} >
            {/*public routes*/}
            <Route index element={<LandingLayout><LandingHome/></LandingLayout>}/>
            <Route path='/auth/*' element={<OutsideRoutes/>}/>
            <Route path ='/unauthorized' element={<UnauthorizedPage/>}/>
            {/*private Routes*/}
            <Route element={<RequireAuth allowedRoles={allowedRoles.admin}/>}>
              <Route path = '/Admin/*' element={<InsideAdminRoutes/>}/>
            </Route>
            <Route element={<RequireAuth allowedRoles={allowedRoles.users}/>}>
              <Route path = '/Users/*' element={<InsideUserRoutes/>}/>
          </Route>
          
          </Route>
        </Routes>
      </QueryClientProvider>
     
    </>
  )
}

export default App
