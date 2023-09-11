import { useEffect, useState } from "react";
import { getAllUserRequest } from "../../../api/MatchItemApi";
import React from 'react';

export const UserContext = React.createContext();


 export const UserDataProvider = ({children}) =>{

    const [data,setData] = useState([]);
    const [update,setUpdate] = useState(false)
    const userInfo = localStorage.getItem('userInfo');
    const userInfoObj = JSON.parse(userInfo);

    useEffect(()=>{
        async function getUserData() {
            try {
                const response = await getAllUserRequest(userInfoObj._id)
                       setData(response.data);
                       
            } catch (error) {
                console.log(error)
            }
        }    
        getUserData();
    },[update]);

    return(
        <UserContext.Provider value={{data,setUpdate}}>
            {children}
        </UserContext.Provider>
    )
 }