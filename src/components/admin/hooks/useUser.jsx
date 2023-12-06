import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"

import { addNewUserRecord, getAllUserRecord } from "../../../api/UserApi";
export const useGetUser = () =>{
    return useQuery({queryKey:['userRecord'],queryFn:getAllUserRecord});
}
export const useAddUser = () =>{

    return useMutation({
        mutationFn:(data)=>addNewUserRecord(data)
    });
}