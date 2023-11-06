import { Routes,Route } from "react-router";
import AdminLayout from "../components/admin/AdminLayout";
import AdminIndex from "../components/admin/AdminPages";
import ItemList from "../components/admin/AdminPages/ItemList";
import { DataProvider } from "../components/admin/context/DataProvider";
import PendingMatchPage from "../components/admin/AdminPages/PendingMatch";
import ApproveMatchPage from "../components/admin/AdminPages/ApproveMatch";
import ClaimedItemPage from "../components/admin/AdminPages/ClaimedItems";

const InsideAdminRoutes = () => {
    return ( 
        <DataProvider>
             <AdminLayout>
                <Routes>
                    <Route path = "/" element={<AdminIndex/>}/>
                    <Route path = "/Itemlist" element={<ItemList/>}/>
                    <Route path = "/pendingList" element={<PendingMatchPage/>}/>
                    <Route path ="/ConfirmedItems" element={<ApproveMatchPage/>}/>
                    <Route path ="/ClaimedItems" element={<ClaimedItemPage/>}/>
                </Routes>
        </AdminLayout>
        </DataProvider>
       
     );
}
 
export default InsideAdminRoutes;