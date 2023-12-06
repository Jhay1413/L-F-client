import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { addNewStudent, getAllStudent } from "../../../api/StudentApi";
export const useGetStudent = () =>{
    return useQuery({queryKey:['studentRecord'],queryFn:getAllStudent});
}
export const useAddStudent = () =>{

    return useMutation({
        mutationFn:(data)=>addNewStudent(data)
    });
}