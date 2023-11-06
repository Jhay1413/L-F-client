
import { useState } from 'react';
import { FaAlignJustify } from 'react-icons/fa6';
import {Link} from 'react-router-dom'
const LandingHeader = () => {
    const[showNav,setShowNav] = useState(false)
    return ( 
        <>
           <div className="w-full fixed top-0 bg-red-800 text-lg  lg:text-xl text-white">
                <div className=" w-full p-2 mx-auto">
                    <div className='w-full flex items-center'>
                        <div className='flex flex-col lg:justify-between w-full flex-col lg:flex-row '>
                            <div className='flex items-center justify-between p-2'>
                                <div className=''>
                                   Lost and Found
                                </div>
                              
                                <div className='lg:hidden items-center justify-center'>
                                    <button onClick={()=>setShowNav(!showNav)}><FaAlignJustify size={25} /></button>                               
                                </div>
                              
                            </div>
                            <div className={`${showNav ? 'flex' : 'hidden'} flex-col justify-center lg:flex lg:flex-row items-center lg:justify-between space-y-5 lg:space-y-0 lg:space-x-2'`}>
                                    <ul className="flex w-full text-bold text-sm flex-col items-center space-y-4 lg:space-y-0 lg:flex-row lg:space-x-4 lg:text-bold">
                                        <li>HOME</li>
                                        <li>ABOUT</li>
                                        <li>FEATURES</li>
                                        <li>CONTACT</li>
                                    </ul>
                                    <ul className='flex w-full items-center justify-center p-2'>
                                        <Link to="/auth" className='w-full flex  items-center justify-center border-2 border-slate-500 p-2 '>LOGIN</Link>
                                    </ul>
                            </div>
                            
                        </div>

                    </div>
                   
                </div>
                
            </div>
        </>
     );
}
 
export default LandingHeader;