import { useGetEmployee } from "../hooks/useEmployee";
import { useGetStudent } from "../hooks/useStudent";
import { useGetUser } from "../hooks/useUser";

const AdminDataProvider = ({children}) => {
  
    const employee = useGetEmployee();
    const student = useGetStudent();
    const user = useGetUser();
    const dataSources = [
        employee,
        student,
        user
    ]
    const isLoading = dataSources.some((source) => source.isLoading);
    const isError = dataSources.some((source) => source.isError);
    const Error = dataSources.some((source) => source.error);
    
    if (isLoading){
        return null
      }
      else if(isError){
        console.log(Error)
      }
    
    return <>{children}</>
}
 
export default AdminDataProvider;