import { useEffect, useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import { loginAuth } from '../../api/AccountApi';
import { useAuth } from '../../hooks/useAuth';
import { Button, Input, Space, Spin, Tooltip } from 'antd';
import { InfoCircleOutlined, UserOutlined, LockOutlined } from '@ant-design/icons';

const LoginPage = () => {
    const [passwordVisible, setPasswordVisible] = useState(false);

    const navigate = useNavigate()
    const [user, setUser] = useState();
    const [password, setPassword] = useState();
    const [loading, setLoading] = useState(false);
    const showToast = (status, message) => {
        toast[status](message);
    }


    const login = async () => {
        try {
            setLoading(prev => !prev);

            const response = await loginAuth(user, password);
            localStorage.setItem("userInfo", JSON.stringify(response.data));

            setTimeout(function () {
                setLoading(prev => !prev);
            }, 500)
            response.data.userRoles === 1
                ? navigate('/Users/', { replace: true })
                : navigate('/Admin/', { replace: true })
        } catch (error) {
            console.log(error);
            setLoading(prev => !prev);
        }
    }
    return (
        <>
            <ToastContainer />
            <div className="flex flex-col w-full space-y-8 justify-center xl:py-24 xl:px-24 ">
                <div className="flex flex-col ">
                    <h1 className="text-2xl lg:text-4xl">Login</h1>
                </div>
                <div className="flex flex-col space-y-4">
                    <Input
                        className='p-2'
                        placeholder="Enter your username"
                        prefix={<UserOutlined style={{ color: 'rgba(0,0,0,.25)' }} />}
                        suffix={
                            <Tooltip title="Extra information">
                                <InfoCircleOutlined style={{ color: 'rgba(0,0,0,.45)' }} />
                            </Tooltip>
                        }
                        onChange={(e) => setUser(e.target.value)}
                    />
                    <Input.Password
                        className='p-2'
                        prefix={<LockOutlined style={{ color: 'rgba(0,0,0,.25)' }} />}
                        placeholder="input password"
                        visibilityToggle={{ visible: passwordVisible, onVisibleChange: setPasswordVisible }}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button className='p-2 bg-gradient-to-r from-red-500 to-pink-500 text-white' onClick={login}    >{loading ? <Spin /> : "Login"}</button>
                </div>
                <div className="">
                    <h1>Dosent have an account ? <Link to="/auth/Register" className='text-blue-500'>Register here</Link></h1>
                </div>
            </div>
        </>
       
    )
}

export default LoginPage;