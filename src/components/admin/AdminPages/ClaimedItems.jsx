import { Button, Input, Space, Table } from "antd";
import { useContext, useState } from "react";
import { DataContext } from "../context/DataContext";
import { FaPlus, FaFileExport} from "react-icons/fa6";
import ItemPendingModal from "../AdminModals/ItemPendingModal";
import moment from 'moment';
const ClaimedItemPage = () => {
    const {claimedItems,setUpdate} = useContext(DataContext);
    const [openViewModal,setOpenViewModal] = useState(false);
    const [selectedItem,setSelectedItem] = useState();
    const [searchedData,setSearchData] = useState("");
    console.log(claimedItems)
    const modalDynamicData = {
        title:'Claimed Items'
    }
    const columns = [
    
        {
          title: 'Claimant',
          dataIndex: 'userId',
          key: 'userId.user',
          render: ((userId) =>userId?.user.firstName),
          filteredValue: [searchedData],
          onFilter:(value,record)=>{
            return (
              String(record.Status)
              .toLowerCase()
              .includes(value.toLowerCase()) ||
              String(record.ItemCategory)
              .toLowerCase()
              .includes(value.toLowerCase()) || 
              String(record.ItemTypes)
              .toLowerCase()
              .includes(value.toLowerCase()) ||
              String(record.userId.user.firstName)
              .toLowerCase()
              .includes(value.toLowerCase())
              )
          }
        },
      
        {
          title: 'Status',
          dataIndex: 'Status',
          key: 'Status',
        },
        {
          title: 'Item Category',
          dataIndex: 'ItemCategory',
          key: 'ItemCategory',
        },
        {
          title: 'Item Types',
          dataIndex: 'ItemTypes',
          key: 'ItemTypes',
        },
        {
          title: 'Date',
          dataIndex: 'Date',
          key: 'Date',
          render: (text) => moment(text).format('YYYY-MM-DD')
        },
        {
            title:'Actions',
            dataIndex:'actions',
            key:'actions',
            fixed: 'right',
            width: 100 ,
            render:(text,record)=>(
              <Space size="middle">
              <Button onClick = {()=>handleView(record)}>View</Button>
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
                 <button className="p-2 bg-white rounded-sm flex justify-center items-center space-x-2"><div><FaFileExport/></div><div>Export</div></button>
             </div>
             <div className="w-full h-full bg-white rounded-lg p-4">
                    <div className="w-full justify-end items-center flex">
                          <Input.Search 
                            placeholder='searchbox'
                            onChange={(e)=>{
                              setSearchData(e.target.value.toLowerCase());
                            }}
                            className='md:w-52 p-2'
                          />
                    </div>
                 <Table dataSource={claimedItems?.map(data=>({...data,key:data._id}))} columns={columns} pagination={{pageSize:7}} />
             </div>
             {openViewModal ? (  <ItemPendingModal selectedItem={selectedItem} openViewModal={openViewModal} setOpenViewModal={setOpenViewModal} setUpdate={setUpdate} modalDynamicData={modalDynamicData} />) : null}
         </div>
        </>
     );
}
 
export default ClaimedItemPage;