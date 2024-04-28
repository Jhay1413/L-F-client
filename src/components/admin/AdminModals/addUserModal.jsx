import { Form, Input, Modal } from "antd";
import { useAddUser } from "../hooks/useUser";
import { useState } from "react";
import { useQueryClient } from "@tanstack/react-query";

const AddUserModal = ({isModalOpen,onClose}) => {
    const queryClient = useQueryClient();
    const [userInfo,setUserInfo] = useState({
        idNo : "",
        firstName: "",
        lastName : "",
        age: "",
        userType:""
    })
    const {mutate} = useAddUser();
    const handleOnChange = (name,e) =>{
        const {value} = e.target

        setUserInfo((prev)=>({
            ...prev,
            [name]:value
        }))
    }
    const submit = (e) =>{
       e.preventDefault();
       mutate(userInfo,{
        onSuccess:()=>{
           
            onClose();
            setUserInfo({
                idNo : "",
                firstName: "",
                lastName : "",
                age: "",
                userType:""
            })
            queryClient.invalidateQueries({queryKey:['userRecord']})
        }
       })
    }
    return ( 
    <Modal title="Add Student" open={isModalOpen} onCancel={onClose} footer={null}>
    <Form layout="vertical">
        <div className="grid grid-cols-3 gap-2">
            <Form.Item
                className="col-span-3"
                label="ID Number"
                name="idNo"
                rules={[
                {
                    required: true,
                    message: 'Please input your ID number!',
                },
                ]}
            >
                <Input onChange={(e)=>handleOnChange('idNo',e)}/>
            </Form.Item>
            <Form.Item
                className="col-span-4"
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
                className="col-span-4"
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
            <Form.Item
                className="col-span-1"
                label="User Type"
                name="userType"
                rules={[
                {
                    required: true,
                    message: 'Please input user type!',
                },
                ]}
            >
                 <Input onChange={(e)=>handleOnChange('userType',e)}/>
            </Form.Item>
        </div>
        <div className="flex justify-end">
                <button className="bg-emerald-300 p-2 rounded-md text-white font-bold" onClick={submit}>Submit</button>
        </div>
        
    </Form>
    
</Modal> );
}
 
export default AddUserModal;