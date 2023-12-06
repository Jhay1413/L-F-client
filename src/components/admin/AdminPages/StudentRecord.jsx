import { Table } from "antd";
import { FaFileExport } from "react-icons/fa6";
import StudentAddModal from "../AdminModals/addStudentModal";
import { useState } from "react";

const StudentRecord = () => {
    const [isModalOpen,setIsModalOpen]= useState(false);

    const onClose = () =>{
        setIsModalOpen(false);
    }
    const StudentColumns = [
        {
          title: 'Record ID',
          dataIndex: '_id',
          key: '_id',
        },
        {
          title: 'Student ID',
          dataIndex: 'studentId',
          key: 'studentId'
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
        }
       ]
    return ( 
        <>
            <div className="flex flex-col w-full h-full space-y-4">
                    
                <div className="flex justify-start space-x-4">
                    <button className="p-2 bg-white rounded-sm flex justify-center items-center space-x-2 bg-blue-700 text-white " onClick={()=>setIsModalOpen(true)}><div><FaFileExport/></div><div>Add</div></button>
                </div>
                <div className="w-full h-full bg-white rounded-lg p-4">
                        <Table  columns={StudentColumns} pagination={{pageSize:7}} />
                </div>
            </div>
            <StudentAddModal isModalOpen={isModalOpen} onClose={onClose}/>
        </>
     );
}
 
export default StudentRecord;