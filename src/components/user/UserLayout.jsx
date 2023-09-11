import UserHeader from "./UserHeader";
import UserNavigation from "./UserNavigation";

const UserLayout = ({children}) => {
    return ( 
      <>
        <div className="w-full flex flex-col font-sans">
          <div className="w-full flex flex-col">
            <div className="w-full bg-sky-700 flex justify-center items-center">
              <UserHeader/>
            </div>
            <div className="w-full flex justify-center items-center border-b-2">
              <UserNavigation/>
            </div>
          </div>
          
            {children}
        </div>
      </>
     );
}
 
export default UserLayout;