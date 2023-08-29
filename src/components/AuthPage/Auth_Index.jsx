import './Auth.css';
import LoginPage from './LoginPage';
import RegistrationPage from './Register';
import { useState } from 'react';
const AuthIndex = () => {

    const [isRegister , setIsRegister] = useState(false) ;

    const handleRegisterClick = () =>{
        setIsRegister(true);
        console.log(isRegister)
    }
    return ( 
        <>
            
        </>
     );
}
 
export default AuthIndex;