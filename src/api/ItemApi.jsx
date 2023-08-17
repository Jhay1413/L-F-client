import axios from 'axios'
const Item_api = import.meta.env.VITE_API_ITEMS

export const getItem = async () =>{
    try {
        const response = await axios.get(`${Item_api}/getAllItems`);
        return response;
    } catch (error) {
        console.error('Error on Fetching the data !', + error)
    }
}
export const addItem = async (data) =>{
    try {
        const response = await axios.post(`${Item_api}/insertItems`,data,{
            headers:{"Content-Type":"multipart/form-data"}
        })
        return response.data
    } catch (error) {
        console.error('Error on inserting the data !', + error)
    }
}
export const deleteItem = async (id)=>{
    try {
        const response = await axios.delete(`${Item_api}/deleteItem/${id}`);
        return response;
    } catch (error) {
        console.error('Error on deleting the data !', + error)
    }
}
export const updateItem  = async (id,data)=>{
    try {
        const response = await axios.put(`${Item_api}/updateItem/${id}`,data,{
            headers:{"Content-Type":"multipart/form-data"}
        });
        return response ;
    } catch (error) {
        console.error('Error on updating the data ! ',error)
    }
   
}