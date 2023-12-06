import { Input, Table } from "antd";
import { FaFileExport } from "react-icons/fa6";
import EmployeeAddModal from "../AdminModals/addEmployeeModal";
import { useState } from "react";
import { useQueryClient } from "@tanstack/react-query";
import AddUserModal from "../AdminModals/addUserModal";
import { Image } from "cloudinary-react";

const UserRecord = () => {
  const queryClient =useQueryClient();
  const userRecords = queryClient.getQueryData(['userRecord']);
    const [isModalOpen,setIsModalOpen] = useState(false);
    const [searchedData,setSearchData] = useState("");
  console.log(userRecords)
    const onClose = () =>{
        setIsModalOpen(false);
    }
    const userColumns = [
        {
          title: 'Record ID',
          dataIndex: '_id',
          key: '_id',
          filteredValue: [searchedData],
          onFilter:(value,record)=>{
            return (
              String(record.firstName)
              .toLowerCase()
              .includes(value.toLowerCase()) ||
              String(record.lastName)
              .toLowerCase()
              .includes(value.toLowerCase()) ||
              String(record.idNo)
              .toLowerCase()
              .includes(value.toLowerCase())
              )
          }
        },
        {
          title: 'ID No',
          dataIndex: 'idNo',
          key: 'idNo'
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
        },
        {
            title: 'User Type',
            dataIndex: 'userType',
            key: 'userType',
          },
         
       ]
    return ( 
        <>
            <div className="flex flex-col w-full h-full space-y-4">
                    
                <div className="flex justify-start space-x-4">
                    <button className="p-2 bg-white rounded-sm flex justify-center items-center space-x-2 bg-blue-700  " onClick={()=>setIsModalOpen(true)}><div><FaFileExport/></div><div>Add</div></button>
                </div>
                <div className="w-full h-full bg-white rounded-lg p-4">
                  <div className="w-full justify-end items-center flex">
                          <Input.Search 
                            placeholder='searchbox'
                            onChange={(e)=>{
                              setSearchData(e.target.value.toLowerCase());
                            }}
                            className='md:w-52 p-2'
                          />
                  </div>
                  <Table  columns={userColumns} pagination={{pageSize:7}} dataSource={userRecords.map(data=>({...data , key:data._id}))} />
                </div>
            </div>
            <AddUserModal isModalOpen={isModalOpen} onClose={onClose}/>
        </>
     );
}
 
export default UserRecord;