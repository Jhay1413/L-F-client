import { Table } from "antd";
import { FaFileExport } from "react-icons/fa6";
import EmployeeAddModal from "../AdminModals/addEmployeeModal";
import { useState } from "react";
import { useQueryClient } from "@tanstack/react-query";

const EmployeeRecord = () => {
  const queryClient =useQueryClient();
  const employee_records = queryClient.getQueryData(['employeeRecord']);
    const [isModalOpen,setIsModalOpen] = useState(false);

    const onClose = () =>{
        setIsModalOpen(false);
    }
    const EmployeeColumns = [
        {
          title: 'Record ID',
          dataIndex: '_id',
          key: '_id',
        },
        {
          title: 'Employee ID',
          dataIndex: 'employeeNo',
          key: 'employeeNo'
        },
        {
            title: 'First Name',
            dataIndex: 'firstName',
            key: 'firstName',
          },
        {
          title: 'Last Name',
          dataIndex: 'lastName',
          key: 'lastName',
        },
        {
          title: 'Age',
          dataIndex: 'age',
          key: 'age',
        }
       ]
    return ( 
        <>
            <div className="flex flex-col w-full h-full space-y-4">
                    
                <div className="flex justify-start space-x-4">
                    <button className="p-2 bg-white rounded-sm flex justify-center items-center space-x-2 bg-blue-700 text-white " onClick={()=>setIsModalOpen(true)}><div><FaFileExport/></div><div>Add</div></button>
                </div>
                <div className="w-full h-full bg-white rounded-lg p-4">
                        <Table  columns={EmployeeColumns} pagination={{pageSize:7}} dataSource={employee_records.map(data=>({...data , key:data._id}))} />
                </div>
            </div>
            <EmployeeAddModal isModalOpen={isModalOpen} onClose={onClose}/>
        </>
     );
}
 
export default EmployeeRecord;