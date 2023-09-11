import { createContext, useContext } from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router";

const AuthContext = createContext(null);
export function AuthProvider({children}){
 

    return(
        <AuthContext.Provider value={isAuthenticated}>
            {children};
        </AuthContext.Provider>
    )
}
export const useAuth = () =>{
    return useContext(AuthContext);
}