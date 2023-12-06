import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Form, Input, Modal } from "antd";
import { useState } from "react";
import { useAddStudent } from "../hooks/useStudent";
import { addNewStudent } from "../../../api/StudentApi";
import { toast } from "react-toastify";

const StudentAddModal = ({isModalOpen,onClose}) => {
    const queryClient = useQueryClient();
    const [student,setStudent] = useState({
        studentNo:"",
        firstName:"",
        lastName:"",
        age:""
    })
    const {mutate} = useAddStudent();
    const handleOnChange = (name,e)=>{
        const {value} = e.target
        setStudent(prev=>({
            ...prev,
            [name]:value
        }))
        
    }
    const submit = (e) =>{
        e.preventDefault();
        mutate(student,{
            onSuccess:()=>{
                queryClient.invalidateQueries({queryKey:['studentRecord']});
                onClose();
                setStudent({
                    studentNo:"",
                    firstName:"",
                    lastName:"",
                    age:""}
                    )
                    toast.success("Data Inserted !");
            },
            onError:(error)=>{
                console.log(error);
            }
        });
    }
    return ( 
        <Modal title="Add Student" open={isModalOpen} onCancel={onClose} footer={null}>
            <Form layout="vertical">
                <div className="grid grid-cols-3 gap-2">
                    <Form.Item
                        className="col-span-3"
                        label="Student ID"
                        name="studentNo"
                        rules={[
                        {
                            required: true,
                            message: 'Please input your Student number!',
                        },
                        ]}
                    >
                        <Input onChange={(e)=>handleOnChange('studentNo',e)}/>
                    </Form.Item>
                    <Form.Item
                        className="col-span-1"
                        label="First Name"
                        name="firstName"
                        rules={[
                        {
                            required: true,
                            message: 'Please input your first name!',
                        },
                        ]}
                    >
                       <Input onChange={(e)=>handleOnChange('firstName',e)}/>
                    </Form.Item>
                    <Form.Item
                        className="col-span-1"
                        label="Last Name"
                        name="lastName"
                        rules={[
                        {
                            required: true,
                            message: 'Please input your last name!',
                        },
                        ]}
                    >
                        <Input onChange={(e)=>handleOnChange('lastName',e)}/>
                    </Form.Item>
                    <Form.Item
                        className="col-span-1"
                        label="Age"
                        name="age"
                        rules={[
                        {
                            required: true,
                            message: 'Please input your age!',
                        },
                        ]}
                    >
                         <Input onChange={(e)=>handleOnChange('age',e)}/>
                    </Form.Item>
                </div>
                <div className="flex justify-end">
                        <button className="bg-emerald-300 p-2 rounded-md text-white font-bold" onClick={submit}>Submit</button>
                </div>
                
            </Form>
            
        </Modal>
     );
}
 
export default StudentAddModal;