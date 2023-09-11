import {useState,useEffect} from 'react'
import { DataContext } from './DataContext';
import { getItem } from '../../../api/ItemApi';
import { getAllMatchItemRequest } from '../../../api/MatchItemApi';

export const DataProvider = ({children}) => {
    const [data,setData] = useState([]);
    const [update,setUpdate] = useState(false);
    const [pendingItems ,setPendingItems] = useState();
    
    useEffect(()=> {
        async function getItems(){
            try {
            
            const {data} = await getItem(); 
            setData(data);
            const pendingData = await getAllMatchItemRequest();
            setPendingItems(pendingData)
              
            } catch (error) {
              console.log("errrrr")
            }
          }
          getItems();
    },[update])

    return(
        <DataContext.Provider value={{data,setUpdate,pendingItems}}>
            {children}
        </DataContext.Provider>
    )
}