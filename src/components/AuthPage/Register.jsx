import { useState, useEffect } from 'react'
import { addAccount } from '../../api/AccountApi';
import { toast, ToastContainer } from 'react-toastify';
import { useNavigate } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';
import { useQueryClient } from '@tanstack/react-query';
import { Select } from 'antd';
import { Button, Input, Space, Spin, Tooltip, Form } from 'antd';
import { InfoCircleOutlined, UserOutlined, LockOutlined } from '@ant-design/icons';

const RegistrationPage = () => {

    const queryClient = useQueryClient();

    const userRecord = queryClient.getQueryData(['userRecord']);
    const [selectedRole, setSelectedRole] = useState('Select Role')


    const navigate = useNavigate();
    const [userInfo, setUserInfo] = useState({
        user: '',
        firstName: '',
        lastName: '',
        contact: '',
        address: '',
        age: '',
        email: '',
        password: '',
        image: ''
    })
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const [disableBtn, setDisableBtn] = useState(false);
    const [errMsgId, setErrMsgId] = useState('');
    const showToast = (status, message) => {
        toast[status](message);
    }
    const handleOnChange = (e) => {

        const { name, value } = e.target;
        setUserInfo((prevState) => ({ ...prevState, [name]: value }))
    }
    const handleImageChange = (e) => {

        setUserInfo((prevState) => ({
            ...prevState,
            image: e.target.files[0],
        }));



    };
    const handleSubmit = async (e) => {
        e.preventDefault();

        const userData = userRecord.find(obj => obj.idNo === userInfo.user);
        const formData = new FormData();
        formData.append("user", userData._id)
        formData.append("contact", userInfo.contact)
        formData.append("address", userInfo.address)
        formData.append("email", userInfo.email)
        formData.append("password", userInfo.password)
        formData.append("image", userInfo.image)
        try {
            const response = await addAccount(formData);
            showToast('success', 'Account has been created ! !');
            setTimeout(() => {
                navigate('/auth')
            }, 2000); // 

        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {

        function checkRole() {
            const userId = userRecord.some(item => item.idNo === userInfo.user);
            if (!userId) {
                setErrMsgId('ID not found!')

            }
            else {
                setErrMsgId('found');

            }

        }
        function compare() {
            if (userInfo.password !== confirmPassword) {
                setErrMsg('password not match ');
                setDisableBtn(true)

            }
            else {
                setErrMsg('');
                setDisableBtn(false);
            }
        }
        checkRole();
        compare();


    }, [confirmPassword, userInfo.password, userInfo.user]);
    return (
        <>
            <ToastContainer />
            <div className="flex flex-col justify-center space-y-4 h-full w-full p-8">
                <div className="">
                    <h1 className="text-4xl">Registration Form</h1>
                </div>
                <Form
                    layout="vertical">

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 ">
                        <Form.Item
                            label="User ID"
                            tooltip={{
                                title: 'Tooltip with customize icon', icon: <InfoCircleOutlined />
                            }}
                            className=''
                        >
                            <Input placeholder="input user id" name="user" onChange={handleOnChange} />
                        </Form.Item>
                        <Form.Item
                            label="Image"
                            tooltip={{ title: 'Tooltip with customize icon', icon: <InfoCircleOutlined /> }}
                            className=
                            ''>
                            <Input type="file" accept="image/*" name="ItemImage" onChange={handleImageChange} />
                        </Form.Item>
                         <Form.Item

                            label="Address"
                            tooltip={{ title: 'Tooltip with customize icon', icon: <InfoCircleOutlined /> }}
                            className='col-span-1 md:col-span-2 '

                        >
                            <Input placeholder="input Address" name="address" onChange={handleOnChange} />
                        </Form.Item>
                        
                        <Form.Item
                            label="Email"
                            tooltip={{ title: 'Tooltip with customize icon', icon: <InfoCircleOutlined /> }}
                            className='col-span-1 md:col-span-2 '

                        >
                            <Input placeholder="input Email" name="email"
                                onChange={handleOnChange} />
                        </Form.Item>
                        <Form.Item
                            label="Contact #"
                            className='col-span-1 md:col-span-2 '
                            tooltip={{ title: 'Tooltip with customize icon', icon: <InfoCircleOutlined /> }}
                            
                            >
                            <Input placeholder="input Contact #" name="contact"
                                onChange={handleOnChange} />
                        </Form.Item>

                        <Form.Item
                            label="Password"
                            tooltip={{ title: 'Tooltip with customize icon', icon: <InfoCircleOutlined /> }}
                            className='col-span-1 md:col-span-2 '
                            
                            >
                            <Input placeholder="input Password" name="password"
                                onChange={handleOnChange} />
                        </Form.Item>
                                
                        <Form.Item
                            label="Confirm Password"
                            tooltip={{ title: 'Tooltip with customize icon', icon: <InfoCircleOutlined /> }}
                            className='col-span-1 md:col-span-2'

                        >
                            <Input placeholder="input Confirm Password" />
                        </Form.Item> 
                    </div>
                    <button className='bg-green-500  w-full text-xl flex items-center justify-center text-white p-2' onClick={handleSubmit}>Submit</button>
                </Form>

            </div>

        </>

    );
}

export default RegistrationPage;
