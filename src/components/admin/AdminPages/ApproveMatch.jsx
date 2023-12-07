import { Button, Input, Space, Table } from "antd";
import { useContext, useState } from "react";
import { DataContext } from "../context/DataContext";
import { Image } from "cloudinary-react";
import { FaPlus, FaFileExport} from "react-icons/fa6";
import ItemPendingModal from "../AdminModals/ItemPendingModal";
import { updateStatus } from "../../../api/MatchItemApi";
const ApproveMatchPage = () => {
    const {confirmMatchItems,setUpdate} = useContext(DataContext) 
    const [selectedItem,setSelectedItem] = useState();
    const [openViewModal, setOpenViewModal] = useState(false);
    const [searchedData,setSearchData] = useState("");
    const claimItem = async() =>{
      const status = "Claimed"
      const response = await updateStatus(selectedItem,status)
      setUpdate(prev=>!prev);
      setOpenViewModal(!openViewModal)
    }
    const unmatchedItem = async() =>{
      const status = "Pending"
      const response = await updateStatus(selectedItem,status)
      setUpdate(prev=>!prev);
      setOpenViewModal(!openViewModal)
    }
    const modalDynamicData = {
      title:'Unclaimed Items',
      buttons:[
        {label:'Claim', onClick:claimItem,className:"bg-emerald-400 text-white p-2 text-xl rounded-lg"},
        {label:'Unmatch',onClick:unmatchedItem,className:"bg-red-400 text-white p-2 text-xl rounded-lg "}
      ]
    }
    const columns = [
        {
          title: 'Transaction ID',
          dataIndex: '_id',
          key: '_id',
          onFilter:(value,record)=>{
            return (
              String(record.Status)
              .toLowerCase()
              .includes(value.toLowerCase())
              )
          }
        },
        {
          title: 'Lost Item ID',
          dataIndex: 'matchWith',
          key: 'matchWith',
          render: (matchWith)=>(
            <>{matchWith?._id}</>
          )
        },
        {
          title: 'Claimant',
            dataIndex: 'userId',
            key: 'userId.user',
            render: ((userId) =>userId?.user.firstName)
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
                 <Table dataSource={confirmMatchItems?.map(data=>({...data,key:data._id}))} columns={columns} pagination={{pageSize:7}} />
             </div>
             {openViewModal ? (  <ItemPendingModal selectedItem={selectedItem} openViewModal={openViewModal} setOpenViewModal={setOpenViewModal} setUpdate={setUpdate} modalDynamicData={modalDynamicData}/>) : null}
         </div>
        </>
     );
}
 
export default ApproveMatchPage;