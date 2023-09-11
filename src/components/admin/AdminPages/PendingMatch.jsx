import { useContext, useEffect, useState } from "react";
import { DataContext } from "../context/DataContext";
import { FaPlus, FaFileExport} from "react-icons/fa6";
import { Button, Space, Table } from "antd";
import { Image } from 'cloudinary-react';
import ItemPendingModal from "../AdminModals/ItemPendingModal";
const PendingMatchPage = () => {

    const {pendingItems,setUpdate} = useContext(DataContext);
    const [selectedItem,setSelectedItem] = useState();
    const [openViewModal,setOpenViewModal] = useState(false);
    const columns = [
        {
          title: 'Transaction ID',
          dataIndex: '_id',
          key: '_id',
        },
        {
          title: 'Lost Item ID',
          dataIndex: 'matchWith',
          key: 'matchWith',
          render: (matchWith)=>(
            <>{matchWith._id}</>
          )
        },
        {
            title: 'User Name',
            dataIndex: 'userId',
            key: 'userId',
            render: (userId)=>(
              <>{userId.firstName}</>
            )
          },
        {
          title: 'Status',
          dataIndex: 'Status',
          key: 'Status',
        },
        {
          title: 'Date',
          dataIndex: 'Date',
          key: 'Date',
        },
        {
            title:'Actions',
            dataIndex:'actions',
            key:'actions',
            fixed: 'right',
            width: 100 ,
            render:(text,record)=>(
              <Space size="middle">
              <Button onClick={()=> handleView(record)}>View</Button>
            </Space>
            )
          }
       ]
       const handleView = (record) =>{
        setSelectedItem(record);
        setOpenViewModal(!openViewModal)

       }
    return ( 
        <>
            <div className="flex flex-col w-full h-full space-y-4">
             
             <div className="flex justify-start space-x-4">
                 <button className="p-2 bg-blue-500 rounded-sm text-white flex justify-center items-center space-x-2" > <div><FaPlus/></div><div>Add Items</div></button>
                 <button className="p-2 bg-white rounded-sm flex justify-center items-center space-x-2"><div><FaFileExport/></div><div>Export</div></button>
             </div>
             <div className="w-full h-full bg-white rounded-lg p-4">
                 <Table dataSource={pendingItems?.map(data=>({...data,key:data._id}))} columns={columns} pagination={{pageSize:7}} />;
             </div>
             {selectedItem ? (  <ItemPendingModal selectedItem={selectedItem} openViewModal={openViewModal} setOpenViewModal={setOpenViewModal} setUpdate={setUpdate}/>) : null}
          
         </div>
        </>
     );
}
 
export default PendingMatchPage;