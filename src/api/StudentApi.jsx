import axios from 'axios'

const STUDENTAPI = import.meta.env.VITE_STUDENT_API;


export const addNewStudent = async (data) =>{
    try {
        const response = await axios.post(`${STUDENTAPI}/addStudent`,data);
        return response.data;
    } catch (error) {
        console.log(error);
        return "Connection Error";
    }
}

export const getAllStudent =  async () =>{
    try {
        const response = await axios.get(`${STUDENTAPI}/getAllStudent`);
        return response.data;
    } catch (error) {
        console.log(error);
        return "Connection Error";
    }
}