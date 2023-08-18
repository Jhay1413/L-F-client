import {useState,useEffect} from 'react'
import { DataContext } from './DataContext';
import { getItem } from '../../../api/ItemApi';

export const DataProvider = ({children}) => {
    const [data,setData] = useState([]);
    const [update,setUpdate] = useState(false);

    useEffect(()=> {
        async function getItems(){
            try {
              const {data} = await getItem(); 
              setData(data);
            } catch (error) {
              
            }
          }
          getItems();
    },[update])

    return(
        <DataContext.Provider value={{data,setUpdate}}>
            {children}
        </DataContext.Provider>
    )
}