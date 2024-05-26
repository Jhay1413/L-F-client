import axios from 'axios'

const Account_api = import.meta.env.VITE_API_ACCOUNT

export const addAccount = async (data)=>{
    try {
        const response = await axios.post(`${Account_api}/insertAccount`,data,{
            headers:{"Content-Type":"multipart/form-data"}
        })
        return response
    } catch (error) {
        throw new Error(error)
    }
}
export const loginAuth = async (email,password) =>{
    try {
        const response = await axios.post(`${Account_api}/loginAuth`,{
            email,
            password
        })
        return response
    } catch (error) {
        console.log(error);
    }
}