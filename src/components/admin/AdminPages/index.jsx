import { Table } from "antd";
import { Image } from 'cloudinary-react';
import { useContext } from "react";
import { FaCheckToSlot} from "react-icons/fa6";
import { DataContext } from "../context/DataContext";
import { useNavigate } from 'react-router-dom';
const AdminIndex = () => {
        const {data,setUpdate} = useContext(DataContext);
        const count = data.length;
        const navigate = useNavigate();
        const columns = [
                {
                  title: 'Item Category',
                  dataIndex: 'ItemCategory',
                  key: 'ItemCategory',
                },
                {
                  title: 'Item Color',
                  dataIndex: 'ItemColor',
                  key: 'ItemColor',
                },
                {
                  title: 'Item Brand',
                  dataIndex: 'ItemBrand',
                  key: 'ItemBrand',
                },
                {
                  title: 'Date',
                  dataIndex: 'Date',
                  key: 'Date',
                },
                {
                  title:'Image',
                  key:'image',
                  render:(record =>(
                    <a href ={record.imageUrl} target="_blank" rel="noopener noreferrer">
                    <Image
                      cloudName="ItemImage"
                      publicId = {record.imageUrl}
                      width="50" // Adjust width as needed
                      height="50" // Adjust height as needed
                      crop="fill"
                      className="rounded-lg"
                    />
                    </a>
                  ))
                } 
        ]
        const columns2 = [
                {
                  title: 'Item ID',
                  dataIndex: 'ItemId',
                  key: 'ItemId',
                },
                {
                  title: 'User ID',
                  dataIndex: 'userID',
                  key: 'userID',
                },
                {
                  title: 'Image',
                  dataIndex: 'ItemBrand',
                  key: 'ItemBrand',
                },
                {
                  title: 'Date',
                  dataIndex: 'Date',
                  key: 'Date',
                }]
        const limitedData = data.slice(0, 5);
    return ( 
        <>
          
                <div className="flex flex-col space-y-4 w-full h-full">
                    <div className="flex flex-col items-center w-full space-y-4 lg:space-y-0 lg:flex-row lg:justify-between lg:space-x-4">
                        <div className="flex flex-grow bg-white flex-row p-4 justify-between items-center text-inherit rounded-lg w-full shadow-lg">
                            <div className="flex flex-col w-full">
                                    <h1 className="text-xl font-semibold">Items</h1>
                                    <h1 className="text-4xl font-semibold">{count}</h1>
                            </div>
                            <div className="text-4xl text-emerald-300">
                                    <FaCheckToSlot/ >
                            </div>
                        </div>
                        <div className="flex flex-grow bg-white flex-row p-4 justify-between items-center text-inherit rounded-lg w-full shadow-lg">
                            <div className="flex flex-col ">
                                    <h1 className="text-xl ">Users</h1>
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
                                <div className="w-full p-3 ">
                                        <h1 className="text-2xl font-bold">Recent Items</h1>
                                </div>
                                
                                <div className="w-full h-full bg-white rounded-lg p-4">
                                        <Table dataSource={limitedData.map(data=>({...data,key:data._id}))} columns={columns} pagination={false}/>
                                        <button className="p-5 text-blue-500" onClick={()=>navigate('itemList')}>SEE MORE--</button>
                                </div>
                        </div>
                        <div className="flex-col w-full lg:flex-none bg-white lg:w-2/6  p-5 text-2xl font-semibold rounded-lg not-italic shadow-lg">
                        <div className="w-full p-3 ">
                                        <h1 className="text-2xl font-bold">Recent Claims</h1>
                                </div>
                                <div className="w-full h-full bg-white rounded-lg p-4">
                                        <Table columns={columns2} pagination={false}/>
                                </div>
                        </div>
                      
                    </div>
                </div>
        </>
     );
}
 
export default AdminIndex;