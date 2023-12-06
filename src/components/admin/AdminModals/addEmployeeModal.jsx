import { useQueryClient } from "@tanstack/react-query";
import { Form, Input, Modal } from "antd";

import { useState } from "react";

import { useAddEmployee } from "../hooks/useEmployee";
import { toast } from "react-toastify";

const EmployeeAddModal = ({isModalOpen,onClose}) => {
    const queryClient =useQueryClient();
    const [employee,setEmployee] = useState ({
        employeeNo:"",
        firstName:"",
        lastName:"",
        age:""
    })
    const {mutate} = useAddEmployee();
    const handleOnchange = (name,event) =>{
        const {value} = event.target
       
        setEmployee((prev)=>({
            ...prev,
            [name]: value
        }))
    }
    
    const submit = (e) =>{
        e.preventDefault();
       
        mutate(employee,{
            onSuccess:()=>{
                queryClient.invalidateQueries({ queryKey: ['employeeRecord'] })
                onClose();
                setEmployee({
                    employeeNo:"",
                    firstName:"",
                    lastName:"",
                    age:""
                })
                toast.success("Data Inserted !");

            },
            onError:(error)=>{
                console.log(error);
            }
        });

    }
    return ( 
        <Modal title="Add Employee" open={isModalOpen} onCancel={onClose} footer={null}>
            <Form layout="vertical">
                <div className="grid grid-cols-3 gap-2">
                    <Form.Item
                        className="col-span-3"
                        label="Employee ID"
                        name="employeeNo"
                        rules={[
                        {
                            required: true,
                            message: 'Please input your Employee number!',
                        },
                        ]}
                    >
                        <Input onChange={(e)=>handleOnchange('employeeNo',e)}/>
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
                         <Input onChange={(e)=>handleOnchange('firstName',e)}/>
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
                         <Input onChange={(e)=>handleOnchange('lastName',e)}/>
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
                         <Input onChange={(e)=>handleOnchange('age',e)}/>
                    </Form.Item>
                </div>
                <div className="flex justify-end">
                        <button className="bg-emerald-300 p-2 rounded-md text-white font-bold" onClick={submit}>Submit</button>
                </div>
                
            </Form>
            
        </Modal>
     );
}
 
export default EmployeeAddModal;