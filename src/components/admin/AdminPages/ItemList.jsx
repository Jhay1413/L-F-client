import { FaPlus, FaFileExport} from "react-icons/fa6";

import { Space, Table,Button ,Input} from 'antd';
import { Image } from 'cloudinary-react';

import { useContext, useEffect, useState } from "react";
import ItemFormModal from "../AdminModals/AddItemModal";
import {toast,ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { deleteItem, getItem } from "../../../api/ItemApi";
import { DataContext } from "../context/DataContext";
const ItemList = () => {

  const [modalOpen,setModalOpen] = useState(false);
  const [dataChange,setDataChange] = useState(false);
  const {data,setUpdate} = useContext(DataContext)
  const [selectedItem,setSelectedItem] = useState({
    ItemCategory : "",
    ItemBrand : "",
    ItemColor :"",
    imageUrl : "",
    image: "",
  })

  const showToast = (status,message)=>{
    toast[status](message);
  }
  
      
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
        },
        {
          title:'Actions',
          dataIndex:'actions',
          key:'actions',
          fixed: 'right',
          width: 100 ,
          render:(text,record)=>(
            <Space size="middle">
            <Button onClick={()=> handleEdit(record)} >Edit</Button>
            <Button  onClick ={()=> handleDelete(record)}type="primary" danger>Delete</Button>
          </Space>
          )
        }
      ];
      const handleDelete = async (record)=>{
        const response = await deleteItem(record._id);
        showToast('success','Data has been deleted !');
        setUpdate(prev=>!prev);
      }
      const handleEdit = (record) =>{
        setSelectedItem(record);
        setModalOpen(true);
      }
    return ( 
        <>
            <ToastContainer/>
            <div className="flex flex-col w-full h-full space-y-4">
             
                <div className="flex justify-start space-x-4">
                    <button className="p-2 bg-blue-500 rounded-sm text-white flex justify-center items-center space-x-2" onClick={()=>setModalOpen(true)}> <div><FaPlus/></div><div>Add Items</div></button>
                    <button className="p-2 bg-white rounded-sm flex justify-center items-center space-x-2"><div><FaFileExport/></div><div>Export</div></button>
                </div>
                <div className="w-full h-full bg-white rounded-lg p-4">
                    <Table dataSource={data.map(data=>({...data,key:data._id}))} columns={columns} />;
                </div>
          
            </div>
            <ItemFormModal modalOpen = {modalOpen }setModalOpen={setModalOpen} showToast={showToast} setUpdate={setUpdate} selectedItem={selectedItem} setSelectedItem={setSelectedItem}/>
        </>
     );
}
 
export default ItemList