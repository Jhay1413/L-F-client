import { Outlet } from "react-router";
import AdminHeader from "./AdminHeader";
import AdminNav from "./AdminNavigation";
import { useState } from "react";


const AdminLayout = ({children}) => {

    const [navState,setNavState] = useState(false);
    return ( 
        <>
            <div className="flex w-full min-h-screen font-sans not-italic ">
                <div className={`${navState ? 'hidden ': 'lg:w-1/6 flex items-center w-full side-nav '}fixed h-full `}>
                    <AdminNav/>
                </div>
                <div className={`${navState ? 'w-full ' : 'ml-1/6 w-5/6'} flex flex-col `}>
                    <div className="flex w-full h-20 items-center text-white header lg:fixed ">
                            <AdminHeader navState={navState} setNavState={setNavState} />       
                    </div>
                    <div className="content w-full h-full flex mt-20">
                        <div className="w-11/12  mx-auto min-h-11/12 m-2">
                            {children}
                        </div>
                    </div>
                </div>
              

                
            </div>
        </>
     );
}
 
export default AdminLayout;