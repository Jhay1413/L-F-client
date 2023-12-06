import axios from 'axios'

const employeeAPI = import.meta.env.VITE_EMPLOYEE_API;


export const addNewEmployee = async (data) =>{
    try {
        const response = await axios.post(`${employeeAPI}/addEmployee`,data);
        return response.data;
    } catch (error) {
        console.log(error);
        return "Connection Error";
    }
}

export const getAllEmployee = async (data) =>{
    try {
        const response = await axios.get(`${employeeAPI}/getAllEmployee`);
        return response.data;
    } catch (error) {
        console.log(error);
        return "Connection Error";
    }
}