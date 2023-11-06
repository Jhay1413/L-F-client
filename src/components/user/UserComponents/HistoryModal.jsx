import { Modal } from "antd";
import { Image } from "cloudinary-react";
import { useEffect,useState } from "react";


const UserHistoryModal = ({isModalOpen,setIsModalOpen,selectedHistory}) => {

    const handleCancel = () => {
        setIsModalOpen(false)
    }
    return ( 
        <Modal title="Notification" open={isModalOpen} onCancel={handleCancel} centered footer={null}  width={'50%'} bodyStyle={{ height: '10%', overflow: 'auto' }}>
            <div className="w-full h-full grid grid-cols-1 text-sm">
                <div className="w-full items-center justify-center border-2 rounded-lg max-h-full grid grid-rows-3 grid-flow-col">
                    <div className="w-full h-full p-2 items-center justify-center row-span-2 ">
                        <div className=" w-full py-2 text-lg border-b-2">
                            <h1>Lost Item</h1>
                        </div>
                        <div className="p-2">
                            <a href ={selectedHistory.ImageUrl} target="_blank" rel="noopener noreferrer">
                                <Image
                                    cloudName="ItemImage"
                                    publicId = {selectedHistory.ImageUrl}
                                    crop="fill"
                                    className="rounded-lg w-full object-cover"
                                />
                            </a>
                        </div>
                    </div>
                        <ul className="w-full h-full flex flex-col items-center ">
                            <li className="p-2 border-b-2  w-full justify-start items-center flex"><h1 className="w-full">Category</h1><h1 className="w-full flex justify-start font-bold">{selectedHistory.ItemCategory}</h1></li>
                            <li className="p-2 border-b-2  w-full justify-start items-center flex"><h1 className="w-full">Brand</h1><h1 className="w-full flex justify-start font-bold">{selectedHistory.ItemBrand}</h1></li>
                            <li className="p-2 border-b-2  w-full justify-start items-center flex"><h1 className="w-full">Color</h1><h1 className="w-full flex justify-start font-bold">{selectedHistory.ItemColor}</h1></li>
                            <li className="p-2 border-b-2  w-full justify-start items-center flex"><h1 className="w-full">Item Types</h1><h1 className="w-full flex justify-start font-bold">{selectedHistory.ItemTypes}</h1></li>
                            <li className="p-2 border-b-2  w-full justify-start items-center flex"><h1 className="w-full">Status</h1><h1 className="w-full flex justify-start font-bold">{selectedHistory.Status}</h1></li>
                            <li className="p-2 border-b-2  w-full justify-start items-center flex"><h1 className="w-full">Date</h1><h1 className="w-full flex justify-start font-bold">{selectedHistory.Date}</h1></li>
                        </ul>
                    </div>
                </div>
    </Modal>
     );
}
 
export default UserHistoryModal;