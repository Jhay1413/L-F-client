import { Routes,Route } from "react-router";
import AdminLayout from "../components/admin/AdminLayout";
import AdminIndex from "../components/admin/AdminPages";
import ItemList from "../components/admin/AdminPages/ItemList";
import { DataProvider } from "../components/admin/context/DataProvider";
import PendingMatchPage from "../components/admin/AdminPages/PendingMatch";

const InsideAdminRoutes = () => {
    return ( 
        <DataProvider>
             <AdminLayout>
                <Routes>
                    <Route path = "/" element={<AdminIndex/>}/>
                    <Route path = "/Itemlist" element={<ItemList/>}/>
                    <Route path = "/pendingList" element={<PendingMatchPage/>}/>
                </Routes>
        </AdminLayout>
        </DataProvider>
       
     );
}
 
export default InsideAdminRoutes;