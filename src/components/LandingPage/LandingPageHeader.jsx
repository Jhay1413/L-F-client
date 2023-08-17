
import {Link} from 'react-router-dom'
const LandingHeader = () => {
    return ( 
        <>
           <div className="w-full fixed top-0 bg-blue-800 text-lg p-4 lg:text-xl text-white">
                <div className=" h-1/4 w-4/5 p-5  mx-auto">
                    <div className='h-full flex items-center'>
                        <div className='flex justify-between w-full'>
                            <div className="">
                                Lost & Found
                            </div>
                            <div className="flex flex-row items-center justify-between space-x-5">
                                <ul className="flex space-x-4 text-bold text-sm hidden lg:flex lg:space-x-4 lg:text-bold">
                                    <li>HOME</li>
                                    <li>ABOUT</li>
                                    <li>FEATURES</li>
                                    <li>CONTACT</li>
                                </ul>
                            </div>
                            <div className="flex items-center ">
                                <ul className='flex  space-x-4 text-bold text-sm hidden lg:flex lg:space-x-4 lg:text-bold'>
                                    <Link to="/Login"><li className='border border-gray-400 p-2 hover:border-2'>LOGIN</li></Link>
                                    <Link to="/Login"><li className='border border-gray-400 p-2 hover:border-2'>SIGN-UP</li></Link>
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