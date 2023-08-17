import AdminLayout from "./AdminLayout";
import {BrowserRouter,Routes,Route,Link } from 'react-router-dom'
import AdminIndex from "./AdminPages";
import ItemList from "./AdminPages/ItemList";

const AdminApp = () => {
    return ( 
        <>
                <AdminLayout>
                    <Routes>
                        <Route path = "/" element={<AdminIndex/>}/>
                        <Route path = "/itemlist" element={<ItemList/>}/>
                    </Routes>
                </AdminLayout>
           
           
        </>
     );
}
 
export default AdminApp;