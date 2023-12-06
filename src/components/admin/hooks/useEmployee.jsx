import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { addNewEmployee, getAllEmployee } from "../../../api/EmployeeApi"

export const useGetEmployee = () =>{
    return useQuery({queryKey:['employeeRecord'],queryFn:getAllEmployee});
}
export const useAddEmployee = () =>{
    return useMutation({
        mutationFn:(data)=>addNewEmployee(data)
    });
}