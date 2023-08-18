import AdminLayout from "./AdminLayout";
import {BrowserRouter,Routes,Route,Link } from 'react-router-dom'
import AdminIndex from "./AdminPages";
import ItemList from "./AdminPages/ItemList";
import { DataProvider } from "./context/DataProvider";

const AdminApp = () => {
    return ( 
        <> 
            <DataProvider>
                <AdminLayout>
                    <Routes>
                        <Route path = "/" element={<AdminIndex/>}/>
                        <Route path = "/itemlist" element={<ItemList/>}/>
                    </Routes>
                </AdminLayout>
            </DataProvider>
                
           
           
        </>
     );
}
 
export default AdminApp;