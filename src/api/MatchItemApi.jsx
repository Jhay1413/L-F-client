import axios from 'axios'

const MatchItemApi = import.meta.env.VITE_LOST_ITEMS_API


export const updateStatus = async (data,status) =>{
    try {
        const response = await axios.put(`${MatchItemApi}/updateStatus`,{data,status})
        return response
    } catch (error) {
        console.log(error);
    }   
}
export const getAllMatchItemRequest = async () =>{
    try {
        const response = await axios.get(`${MatchItemApi}/GetAllRequest`);
        return response.data;
    } catch (error) {
        console.log("Api Error",error)
    }
}
export const AddNewMatchItem  = async(data)=>{
    try {
        const response = await axios.post(`${MatchItemApi}/InsertLostItem`,data,{
            headers:{"Content-Type":'multipart/form-data'}
        })
        return response
    } catch (error) {
        console.error('Error on inserting the data !', + error)
    }
}
export const getAllUserRequest = async(id)=>{
    try {
        
        const response = await axios.get(`${MatchItemApi}/getAllUserRequest/${id}`);
        return response
    } catch (error) {
        console.log(error)
    }
}