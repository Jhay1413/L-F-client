import { Routes,Route } from "react-router";
import AdminLayout from "../components/admin/AdminLayout";
import AdminIndex from "../components/admin/AdminPages";
import ItemList from "../components/admin/AdminPages/ItemList";
import { DataProvider } from "../components/admin/context/DataProvider";
import PendingMatchPage from "../components/admin/AdminPages/PendingMatch";
import ApproveMatchPage from "../components/admin/AdminPages/ApproveMatch";
import ClaimedItemPage from "../components/admin/AdminPages/ClaimedItems";
import EmployeeRecord from "../components/admin/AdminPages/EmployeeRecord";
import StudentRecord from "../components/admin/AdminPages/StudentRecord";
import AdminDataProvider from "../components/admin/queries/data";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import UserRecord from "../components/admin/AdminPages/UserRecord";

const InsideAdminRoutes = () => {
   
    return ( 
     
            <DataProvider>
             <AdminLayout>
                <AdminDataProvider>
                    <Routes>
                        <Route path = "/" element={<AdminIndex/>}/>
                        <Route path = "/Itemlist" element={<ItemList/>}/>
                        <Route path = "/pendingList" element={<PendingMatchPage/>}/>
                        <Route path ="/ConfirmedItems" element={<ApproveMatchPage/>}/>
                        <Route path ="/ClaimedItems" element={<ClaimedItemPage/>}/>
                        <Route path ="/EmployeeRecord" element={<EmployeeRecord/>}/>
                        <Route path ="/StudentRecord" element={<StudentRecord/>}/>
                        <Route path ="/UserRecord" element={<UserRecord/>}/>
                    </Routes>
                </AdminDataProvider>
                
        </AdminLayout>
        </DataProvider>
    
        
       
     );
}
 
export default InsideAdminRoutes;