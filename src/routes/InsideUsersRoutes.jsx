import { Route, Routes } from "react-router";
import UserLayout from "../components/user/UserLayout";
import UserHomepage from "../components/user/UserPages/HomePage";
import Compare from "../components/user/UserPages/compare";
import LostItemPage from "../components/user/UserPages/LostItemPage";
import { UserDataProvider } from "../components/user/UserContext/UserContext";

const InsideUserRoutes = () => {
    return ( 
        <UserDataProvider>
            <UserLayout>
                <Routes>
                    <Route path ='/' element={<LostItemPage/>}/>
                    <Route path ='/compare' element={<Compare/>}/>
                    
                </Routes>
            </UserLayout>
        </UserDataProvider>
        
     );
}
 
export default InsideUserRoutes;