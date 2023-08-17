import { FaCheckToSlot} from "react-icons/fa6";
const AdminIndex = () => {
    return ( 
        <>
          
                <div className="flex flex-col space-y-4 w-full h-full">
                    <div className="flex flex-col items-center w-full space-y-4 lg:space-y-0 lg:flex-row lg:justify-between lg:space-x-4">
                        <div className="flex flex-grow bg-white flex-row p-4 justify-between items-center text-inherit rounded-lg w-full shadow-lg">
                            <div className="flex flex-col w-full">
                                    <h1 className="text-xl font-semibold">Items</h1>
                                    <h1 className="text-4xl font-semibold">100</h1>
                            </div>
                            <div className="text-4xl text-emerald-300">
                                    <FaCheckToSlot/ >
                            </div>
                        </div>
                        <div className="flex flex-grow bg-white flex-row p-4 justify-between items-center text-inherit rounded-lg w-full shadow-lg">
                            <div className="flex flex-col ">
                                    <h1 className="text-xl font-semibold">Users</h1>
                                    <h1 className="text-4xl font-semibold">0</h1>
                            </div>
                            <div className="text-4xl text-cyan-300">
                                    <FaCheckToSlot/ >
                            </div>
                        </div>
                        <div className="flex flex-grow bg-white flex-row p-4 justify-between items-center text-inherit rounded-lg w-full shadow-lg">
                            <div className="flex flex-col ">
                                    <h1 className="text-xl font-semibold">Item Match</h1>
                                    <h1 className="text-4xl font-semibold">0</h1>
                            </div>
                            <div className="text-4xl text-yellow-300">
                                    <FaCheckToSlot/ >
                            </div>
                        </div>
                        <div className="flex flex-grow bg-white flex-row p-4 justify-between items-center text-inherit rounded-lg w-full shadow-lg">
                            <div className="flex flex-col ">
                                    <h1 className="text-xl font-semibold">Item Claim</h1>
                                    <h1 className="text-4xl font-semibold">0</h1>
                            </div>
                            <div className="text-4xl text-red-300">
                                    <FaCheckToSlot/ >
                            </div>
                        </div>
                            
                    </div>
                    <div className="flex flex-col w-full h-full lg:space-x-4 lg:flex-row space-y-4 lg:space-y-0 shadow-lg">
                        <div className="w-full bg-white p-5 rounded-lg lg:grow">
                                <h1 className="text-2xl font-semibold ">Recent Items</h1>
                        </div>
                        <div className="flex w-full lg:flex-none bg-white lg:w-2/6  p-5 text-2xl font-semibold rounded-lg not-italic shadow-lg">
                            <h1>Recent Claims</h1>
                        </div>
                      
                    </div>
                </div>
        </>
     );
}
 
export default AdminIndex;