import axios from 'axios'

const userAPI = import.meta.env.VITE_USER_API;


export const addNewUserRecord = async (data) =>{
    try {
        const response = await axios.post(`${userAPI}/addUserRecord`,data);
        return response.data;
    } catch (error) {
        console.log(error);
        return "Connection Error";
    }
}

export const getAllUserRecord =  async () =>{
    try {
        const response = await axios.get(`${userAPI}/getAllUserRecord`);
        return response.data;
    } catch (error) {
        console.log(error);
        return "Connection Error";
    }
}